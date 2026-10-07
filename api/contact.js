const NEEDS = ["Website", "SEO", "Ads video", "Flyer", "Something else"];
const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const line = (s, n) => String(s ?? "").replace(/[\r\n]+/g, " ").trim().slice(0, n);
const block = (s, n) => String(s ?? "").trim().slice(0, n);
const isEmail = (s) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
const debug = process.env.VERCEL_ENV === "preview" || process.env.VERCEL_ENV === "development";
const fail = (res, code, reason) => res.status(code).json({ ok: false, ...(debug && reason ? { reason } : {}) });

function okOrigin(o) {
  if (!o) return true;
  try {
    const h = new URL(o).hostname;
    return h === "skkuglobal.com" || h === "www.skkuglobal.com" || h === "localhost" || h.endsWith(".vercel.app");
  } catch {
    return false;
  }
}

async function mail(key, payload) {
  const r = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (r.ok) return { ok: true };
  let message = "";
  try {
    message = (await r.json()).message || "";
  } catch {}
  console.error("resend", r.status, message);
  return { ok: false, status: r.status, message };
}

const firstName = (n) => (/^[\p{L}\p{M}][\p{L}\p{M}' .-]{0,59}$/u.test(n) ? n.split(" ")[0] : "there");

function replyHtml(first, needs) {
  return (
    `<!doctype html><html><body style="margin:0;background:#F4F2EC;font-family:Arial,Helvetica,sans-serif;color:#0E0E0C">` +
    `<div style="display:none;max-height:0;overflow:hidden">Thanks for reaching out. We reply within 24 hours.</div>` +
    `<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td align="center" style="padding:32px 16px">` +
    `<table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%">` +
    `<tr><td style="font-size:22px;font-weight:bold;padding-bottom:24px">SKKU<span style="color:#8DBF1E">.</span></td></tr>` +
    `<tr><td style="font-size:30px;line-height:1.1;font-weight:bold;padding-bottom:16px">We've got your message.</td></tr>` +
    `<tr><td style="font-size:16px;line-height:1.6;padding-bottom:16px">Hi ${esc(first)},<br><br>Thanks for telling us what you need. It has reached our team, and we will get back to you shortly, usually within 24 hours.</td></tr>` +
    `<tr><td style="font-size:15px;line-height:1.6;padding:16px;background:#E4E2DC">You asked about: <b>${esc(needs.join(", "))}</b></td></tr>` +
    `<tr><td style="font-size:15px;line-height:1.6;padding-top:16px;color:#5E5E58">Want to add something? Just reply to this email.</td></tr>` +
    `<tr><td style="font-size:13px;color:#6B6B66;padding-top:32px">SKKU Global Technologies Limited &middot; skkuglobal.com</td></tr>` +
    `</table></td></tr></table></body></html>`
  );
}

const replyText = (first, needs) =>
  `Hi ${first},\n\nThanks for telling us what you need. It has reached our team, and we will get back to you shortly, usually within 24 hours.\n\nYou asked about: ${needs.join(", ")}\n\nWant to add something? Just reply to this email.\n\nSKKU Global Technologies Limited\nhttps://skkuglobal.com\n`;

export default async function handler(req, res) {
  if (req.method !== "POST") return fail(res, 405, "method");
  if (!okOrigin(req.headers.origin)) return fail(res, 403, "origin " + req.headers.origin);

  const b = req.body && typeof req.body === "object" ? req.body : {};
  if (b.company) return res.status(200).json({ ok: true });

  const needs = Array.isArray(b.needs) ? b.needs.filter((n) => NEEDS.includes(n)) : [];
  const details = block(b.details, 2000);
  const deadline = line(b.deadline, 100);
  const name = line(b.name, 100);
  const contact = line(b.contact, 150);
  if (!needs.length || details.length < 10 || !name || !contact) return fail(res, 400, "validation");

  const key = process.env.RESEND_API_KEY;
  if (!key) return fail(res, 500, "RESEND_API_KEY is not set for this deployment");
  const to = process.env.CONTACT_TO || "admin@skkuglobal.com";
  const from = process.env.CONTACT_FROM || "SKKU Global <onboarding@resend.dev>";

  const html =
    `<h2>New enquiry</h2>` +
    `<p><b>Need:</b> ${esc(needs.join(", "))}</p>` +
    `<p><b>Details:</b><br>${esc(details).replace(/\n/g, "<br>")}</p>` +
    `<p><b>Deadline:</b> ${esc(deadline || "-")}</p>` +
    `<p><b>Name:</b> ${esc(name)}<br><b>Contact:</b> ${esc(contact)}</p>`;

  const sent = await mail(key, {
    from,
    to: [to],
    subject: `New enquiry: ${needs.join(", ")} - ${name}`,
    html,
    ...(isEmail(contact) ? { reply_to: contact } : {}),
  });
  if (!sent.ok) return fail(res, 502, `resend ${sent.status}: ${sent.message}`);

  if (process.env.AUTOREPLY !== "0" && isEmail(contact)) {
    const first = firstName(name);
    await mail(key, {
      from,
      to: [contact],
      reply_to: to,
      subject: "We got your message - SKKU Global",
      html: replyHtml(first, needs),
      text: replyText(first, needs),
      headers: { "Auto-Submitted": "auto-replied", "X-Auto-Response-Suppress": "All" },
    });
  }
  return res.status(200).json({ ok: true });
}
