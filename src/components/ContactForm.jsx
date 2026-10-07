import { useEffect, useRef, useState } from "react";
import { site } from "../lib/site";

const NEEDS = ["Website", "SEO", "Ads video", "Flyer", "Something else"];
const TITLES = ["What do you need?", "Tell us about it.", "How do we reach you?"];
const LAST = 2;

export default function ContactForm() {
  const [step, setStep] = useState(0);
  const [needs, setNeeds] = useState([]);
  const [v, setV] = useState({ details: "", deadline: "", name: "", contact: "", company: "" });
  const [status, setStatus] = useState("idle");
  const [err, setErr] = useState("");
  const head = useRef(null);
  const mounted = useRef(false);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    head.current?.focus();
  }, [step, status]);

  const set = (k) => (e) => setV({ ...v, [k]: e.target.value });
  const toggle = (n) => setNeeds(needs.includes(n) ? needs.filter((x) => x !== n) : [...needs, n]);
  const summary = () =>
    `Need: ${needs.join(", ")}\nDetails: ${v.details}\nDeadline: ${v.deadline || "-"}\nName: ${v.name}\nContact: ${v.contact}`;

  async function send() {
    setStatus("sending");
    try {
      const r = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ needs, ...v }),
      });
      if (!r.ok) throw new Error(String(r.status));
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  function onSubmit(e) {
    e.preventDefault();
    setErr("");
    if (step === 0 && needs.length === 0) return setErr("Pick at least one.");
    if (step === 1 && v.details.trim().length < 10) return setErr("Tell us a little more.");
    if (step < LAST) return setStep(step + 1);
    send();
  }

  if (status === "sent") {
    return (
      <div className="form" role="status">
        <p className="display-m" ref={head} tabIndex={-1}>Got it.</p>
        <p className="muted">We reply {site.reply}.</p>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="form" role="alert">
        <p className="display-m" ref={head} tabIndex={-1}>That didn't send.</p>
        <p className="muted">Use one of these instead. Your message is already filled in.</p>
        <div className="form-nav">
          <a
            className="btn"
            href={`mailto:${site.email}?subject=${encodeURIComponent("New enquiry from " + v.name)}&body=${encodeURIComponent(summary())}`}
          >
            Email us
          </a>
          <a
            className="link"
            href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(summary())}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp us
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="form">
      <ol className="prog" aria-hidden="true">
        {[0, 1, 2].map((i) => (
          <li key={i} className={i <= step ? "on" : ""} />
        ))}
      </ol>
      <p className="eyebrow" ref={head} tabIndex={-1}>Step {step + 1} of 3</p>
      <h2 className="display-m">{TITLES[step]}</h2>

      {step === 0 && (
        <div className="chips" role="group" aria-label="What do you need?">
          {NEEDS.map((n) => (
            <button type="button" key={n} className="chip" aria-pressed={needs.includes(n)} onClick={() => toggle(n)}>
              {n}
            </button>
          ))}
        </div>
      )}

      {step === 1 && (
        <>
          <label className="field">
            <span>What should it do for your business?</span>
            <textarea name="details" rows="5" required value={v.details} onChange={set("details")} />
          </label>
          <label className="field">
            <span>Deadline (optional)</span>
            <input name="deadline" type="text" value={v.deadline} onChange={set("deadline")} />
          </label>
        </>
      )}

      {step === 2 && (
        <>
          <label className="field">
            <span>Name</span>
            <input name="name" type="text" required autoComplete="name" value={v.name} onChange={set("name")} />
          </label>
          <label className="field">
            <span>Email or WhatsApp</span>
            <input name="contact" type="text" required autoComplete="email" value={v.contact} onChange={set("contact")} />
          </label>
          <input className="hp" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" value={v.company} onChange={set("company")} />
        </>
      )}

      {err ? <p className="form-err" role="alert">{err}</p> : null}

      <div className="form-nav">
        {step > 0 && (
          <button type="button" className="back" onClick={() => setStep(step - 1)}>Back</button>
        )}
        <button type="submit" className="btn" disabled={status === "sending"}>
          {step < LAST ? "Next" : status === "sending" ? "Sending..." : "Send it"} <span aria-hidden="true">→</span>
        </button>
      </div>
    </form>
  );
}
