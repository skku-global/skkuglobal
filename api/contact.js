const NEEDS = ["Website", "SEO", "Ads video", "Flyer", "Something else"];
const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const line = (s, n) => String(s ?? "").replace(/[\r\n]+/g, " ").trim().slice(0, n);
const block = (s, n) => String(s ?? "").trim().slice(0, n);
const isEmail = (s) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);

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
  return r.ok;
}

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ ok: false });
  if (!okOrigin(req.headers.origin)) return res.status(403).json({ ok: false });

  const b = req.body && typeof req.body === "object" ? req.body : {};
  if (b.company) return res.status(200).json({ ok: true });

  const needs = Array.isArray(b.needs) ? b.needs.filter((n) => NEEDS.includes(n)) : [];
  const details = block(b.details, 2000);
  const deadline = line(b.deadline, 100);
  const name = line(b.name, 100);
  const contact = line(b.contact, 150);
  if (!needs.length || details.length < 10 || !name || !contact) return res.status(400).json({ ok: false });

  const key = process.env.RESEND_API_KEY;
  if (!key) return res.status(500).json({ ok: false });
  const to = process.env.CONTACT_TO || "hello@skkuglobal.com";
  const from = process.env.CONTACT_FROM || "SKKU Global <onboarding@resend.dev>";

  const html =
    `<h2>New enquiry</h2>` +
    `<p><b>Need:</b> ${esc(needs.join(", "))}</p>` +
    `<p><b>Details:</b><br>${esc(details).replace(/\n/g, "<br>")}</p>` +
    `<p><b>Deadline:</b> ${esc(deadline || "-")}</p>` +
    `<p><b>Name:</b> ${esc(name)}<br><b>Contact:</b> ${esc(contact)}</p>`;

  const ok = await mail(key, {
    from,
    to: [to],
    subject: `New enquiry: ${needs.join(", ")} - ${name}`,
    html,
    ...(isEmail(contact) ? { reply_to: contact } : {}),
  });
  if (!ok) return res.status(502).json({ ok: false });

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
