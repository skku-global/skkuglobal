import { useState } from 'react'
import './Contact.css'

const CONTACT_EMAIL = 'admin@skkuglobal.com'
// Adapts the form endpoint if configured, else falls back to a prefilled mailto
const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT || import.meta.env.VITE_SUBSCRIBE_ENDPOINT

// Business WhatsApp, international format, digits only (no +, spaces, dashes).
const WHATSAPP_NUMBER = '2349132686150'
const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  'Hello SKKU Global, I would like to inquire about your services.'
)}`

const servicesList = [
  'Web Development (Custom Website / App)',
  'Ad & Video Content Creation',
  'Website Security Audit (SecuScan)',
  'Full Digital Security & Hardening',
  'Build & Secure Package (New Site + Audit)',
  'Other / General Inquiry',
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: servicesList[0],
    message: '',
  })
  const [status, setStatus] = useState('idle') // idle | loading | done | error
  const [feedback, setFeedback] = useState('')

  function handleChange(e) {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (status !== 'idle') {
      setStatus('idle')
      setFeedback('')
    }
  }

  async function handleSubmit(e) {
    e.preventDefault()

    const { name, email, service, message } = formData

    if (!name.trim()) {
      setStatus('error')
      setFeedback('Please enter your name.')
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setStatus('error')
      setFeedback('Please enter a valid email address.')
      return
    }

    if (!message.trim()) {
      setStatus('error')
      setFeedback('Please tell us a bit about your project or inquiry.')
      return
    }

    if (!ENDPOINT) {
      // Fallback: Launch default email client with all details formatted
      const subject = `Project Inquiry from ${name.trim()} [${service}]`
      const body = `Name: ${name.trim()}\nEmail: ${email.trim()}\nService Needed: ${service}\n\nProject Details:\n${message.trim()}`

      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`

      setStatus('done')
      setFeedback("Opening your email client — send the message and we'll reply within 24 hours.")
      setFormData({
        name: '',
        email: '',
        service: servicesList[0],
        message: '',
      })
      return
    }

    setStatus('loading')
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          service,
          message: message.trim(),
        }),
      })

      if (!res.ok) throw new Error(`Server returned ${res.status}`)

      setStatus('done')
      setFeedback("Thank you! Your message has been sent. We'll be in touch shortly.")
      setFormData({
        name: '',
        email: '',
        service: servicesList[0],
        message: '',
      })
    } catch {
      setStatus('error')
      setFeedback(`Could not send directly. Please email us directly at ${CONTACT_EMAIL}.`)
    }
  }

  return (
    <section className="contact-section" id="contact">
      <div className="shell">
        <div className="section-header animate">
          <div className="section-label">CONTACT US</div>
          <h2>Let&apos;s build or secure your project</h2>
          <p>
            Have a project in mind, need a security audit, or want to collaborate?
            Fill out the form or reach out directly via email or WhatsApp.
          </p>
        </div>

        <div className="contact-container">
          <form className="contact-form card animate animate-delay-1" onSubmit={handleSubmit} noValidate>
            <div className="form-group-row">
              <div className="form-group">
                <label htmlFor="contact-name" className="form-label">
                  Your Name <span className="req">*</span>
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  className="form-input"
                  placeholder="e.g. Alex Adeyemi"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-email" className="form-label">
                  Your Email <span className="req">*</span>
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  className="form-input"
                  placeholder="name@company.com"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="contact-service" className="form-label">
                Service Required
              </label>
              <select
                id="contact-service"
                name="service"
                className="form-select"
                value={formData.service}
                onChange={handleChange}
              >
                {servicesList.map((svc) => (
                  <option key={svc} value={svc}>
                    {svc}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="contact-message" className="form-label">
                Project Details <span className="req">*</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows="4"
                className="form-textarea"
                placeholder="Describe your goals, requirements, timeline, or current challenges..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="btn-primary form-submit-btn"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Sending inquiry…' : 'Send project inquiry'}
            </button>

            {feedback && (
              <p
                className={`contact-status-msg ${
                  status === 'error' ? 'error' : status === 'done' ? 'done' : ''
                }`}
                role="status"
                aria-live="polite"
              >
                {feedback}
              </p>
            )}
          </form>

          <aside className="contact-direct-sidebar animate animate-delay-2">
            <div className="card direct-card">
              <div className="direct-badge">DIRECT CHANNELS</div>
              <h3>Prefer a direct conversation?</h3>
              <p>
                We respond within 24 hours. Connect directly via email or message us on WhatsApp for rapid scoping and inquiries.
              </p>

              <div className="direct-actions">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="direct-action-btn email-btn"
                >
                  <span className="direct-icon" aria-hidden="true">✉</span>
                  <div>
                    <span className="direct-btn-title">Email Us</span>
                    <span className="direct-btn-sub">{CONTACT_EMAIL}</span>
                  </div>
                </a>

                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noreferrer"
                  className="direct-action-btn whatsapp-btn"
                >
                  <span className="direct-icon" aria-hidden="true">💬</span>
                  <div>
                    <span className="direct-btn-title">Chat on WhatsApp</span>
                    <span className="direct-btn-sub">Fast response for new projects</span>
                  </div>
                </a>
              </div>

              <div className="direct-guarantee">
                <span className="guarantee-dot" aria-hidden="true" />
                <span>NDA &amp; confidentiality guaranteed on all project consultations.</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
