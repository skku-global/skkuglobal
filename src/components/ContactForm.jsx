import { useState } from "react";
import { site } from "../lib/site";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = `Name: ${f.get("name")}\nContact: ${f.get("contact")}\n\nProblem:\n${f.get("problem")}`;
    const subject = `New problem from ${f.get("name")}`;
    if (typeof window !== "undefined") {
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="form">
      <label className="field">
        <span>Name</span>
        <input name="name" type="text" required autoComplete="name" />
      </label>
      <label className="field">
        <span>Email or WhatsApp</span>
        <input name="contact" type="text" required autoComplete="email" />
      </label>
      <label className="field">
        <span>Your problem</span>
        <textarea name="problem" rows="4" required />
      </label>
      <button type="submit" className="btn">Tell us your problem <span aria-hidden="true">→</span></button>
      {sent ? <p className="muted" role="status">Your email app should open. If not, use the direct links.</p> : null}
    </form>
  );
}
