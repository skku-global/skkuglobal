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

  if (process.env.AUTOREPLY === "1" && isEmail(contact)) {
    await mail(key, {
      from,
      to: [contact],
      subject: "We got your enquiry - SKKU Global",
      html: `<p>Hi ${esc(name)},</p><p>Thanks for telling us what you need. We reply within 24 hours.</p><p>SKKU Global</p>`,
    });
  }
  return res.status(200).json({ ok: true });
}
