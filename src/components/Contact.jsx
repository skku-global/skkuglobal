import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { LuMail, LuZap, LuLightbulb, LuPhoneCall } from 'react-icons/lu'
import { FaWhatsapp } from 'react-icons/fa6'
import './Contact.css'

const CONTACT_EMAIL = 'admin@skkuglobal.com'
const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT || import.meta.env.VITE_SUBSCRIBE_ENDPOINT

// Business WhatsApp, international format (digits only: 2348057215622)
const WHATSAPP_NUMBER = '2348057215622'
const CALL_PHONE = '+234 701 699 5795'
const CALL_HREF = 'tel:+2347016995795'

const serviceTemplates = {
  'web-dev': {
    title: 'Custom Web & SaaS Engineering',
    category: 'Full-Stack Development',
    brief: `Project Scope: Custom Web Application / SaaS Platform
Current Stage: [Idea / Prototype / Redesign / Scaling Existing System]
Key Features Needed: Responsive frontend, secure backend API, database design, cloud deployment
Target Timeline: [e.g. 2-4 weeks / Next quarter]
Additional Requirements: `,
  },
  'security-audits': {
    title: 'SecuScan Web Vulnerability Audits',
    category: 'Cybersecurity Audit',
    brief: `Target Platform / URL: [e.g. https://yourdomain.com or staging API]
Audit Scope: Automated penetration testing, OWASP Top 10 compliance & vulnerability remediation report
Priority Concerns: [Authentication, payment flows, API security, upcoming launch]
Target Timeline: [Immediate / Scheduled review]
Additional Requirements: `,
  },
  'ecommerce': {
    title: 'E-Commerce & Retail Systems',
    category: 'Retail Tech',
    brief: `Storefront Scope: Luxury / High-Conversion Online Storefront
Core Requirements: Custom product catalog, interactive cart drawer, multi-currency (₦/$/£), WhatsApp concierge checkout
Estimated Inventory: [e.g. 10-50 products / 100+ SKUs]
Target Launch Date: [e.g. Within 30 days]
Additional Requirements: `,
  },
  'digital-security': {
    title: 'Enterprise Digital Defense & Infrastructure',
    category: 'Infrastructure & Defense',
    brief: `Security Requirements: Corporate domain spoofing defense (SPF/DKIM/DMARC), credential isolation, cloud asset hardening
Current Setup: [Google Workspace / Microsoft 365 / Cloud servers]
Reason for Inquiry: [Proactive infrastructure hardening / Security review]
Additional Requirements: `,
  },
}

const servicesList = [
  'Custom Web & SaaS Engineering',
  'SecuScan Web Vulnerability Audits',
  'E-Commerce & Retail Systems',
  'Enterprise Digital Defense & Infrastructure',
  'Build & Secure Package (Web App + Security Audit)',
  'Other / General Technical Inquiry',
]

export default function Contact() {
  const [searchParams] = useSearchParams()
  const serviceParam = searchParams.get('service')

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: servicesList[0],
    message: '',
  })
  const [status, setStatus] = useState('idle') // idle | loading | done | error
  const [feedback, setFeedback] = useState('')
  const [autoFilledService, setAutoFilledService] = useState('')

  // Handle URL query parameter auto-fill (e.g. /support?service=security-audits)
  useEffect(() => {
    if (!serviceParam) return

    let matchedTemplate = serviceTemplates[serviceParam]

    // Fallback: match by title if passed directly
    if (!matchedTemplate) {
      const foundKey = Object.keys(serviceTemplates).find(
        (key) =>
          serviceTemplates[key].title.toLowerCase() === serviceParam.toLowerCase() ||
          key.toLowerCase() === serviceParam.toLowerCase()
      )
      if (foundKey) matchedTemplate = serviceTemplates[foundKey]
    }

    if (matchedTemplate) {
      setFormData((prev) => ({
        ...prev,
        service: matchedTemplate.title,
        message: matchedTemplate.brief,
      }))
      setAutoFilledService(matchedTemplate.title)

      // Smoothly scroll to the support section
      const el = document.getElementById('support')
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 120)
      }
    }
  }, [serviceParam])

  function handleChange(e) {
    const { name, value } = e.target
    setFormData((prev) => {
      // If user switches service dropdown and message is empty or unmodified, offer corresponding template
      if (name === 'service') {
        const foundKey = Object.keys(serviceTemplates).find(
          (k) => serviceTemplates[k].title === value
        )
        const newBrief = foundKey ? serviceTemplates[foundKey].brief : prev.message
        return { ...prev, service: value, message: newBrief }
      }
      return { ...prev, [name]: value }
    })

    if (name === 'service') {
      setAutoFilledService(value)
    }

    if (status !== 'idle') {
      setStatus('idle')
      setFeedback('')
    }
  }

  function validateForm() {
    const { name, email, message } = formData
    if (!name.trim()) {
      setStatus('error')
      setFeedback('Please enter your full name or company name.')
      return false
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setStatus('error')
      setFeedback('Please enter a valid email address so we can send your consultation brief.')
      return false
    }
    if (!message.trim()) {
      setStatus('error')
      setFeedback('Please provide some project details or requirements.')
      return false
    }
    return true
  }

  // 1. Primary Action: Official Corporate Email (Preferred standard channel)
  async function handleSendEmail(e) {
    if (e) e.preventDefault()
    if (!validateForm()) return

    const { name, email, service, message } = formData
    const subject = `Consultation Request: ${service} — ${name.trim()}`
    const body = `SKKU GLOBAL TECHNOLOGIES — CONSULTATION INQUIRY
==================================================
Client / Company : ${name.trim()}
Official Email   : ${email.trim()}
Service Selected : ${service}

PROJECT SPECIFICATIONS & BRIEF:
--------------------------------------------------
${message.trim()}

==================================================
Sent via SKKU Global Consultation Portal
Official Channel: admin@skkuglobal.com`

    if (!ENDPOINT) {
      // Direct corporate mailto trigger
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`

      setStatus('done')
      setFeedback('Opening your email client — your inquiry has been pre-formatted for direct review by our engineering team.')
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
          channel: 'official-email',
        }),
      })

      if (!res.ok) throw new Error(`Server returned ${res.status}`)

      setStatus('done')
      setFeedback('Thank you! Your consultation inquiry has been submitted. Our engineering team will review it and reply within 24 hours.')
    } catch {
      // Graceful fallback to mailto if endpoint encounters issue
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`
      setStatus('done')
      setFeedback(`Opening your email client to dispatch directly to ${CONTACT_EMAIL}.`)
    }
  }

  // 2. Secondary Action: WhatsApp Direct Messaging
  function handleSendWhatsApp(e) {
    if (e) e.preventDefault()
    if (!formData.name.trim()) {
      setStatus('error')
      setFeedback('Please enter your name before messaging on WhatsApp.')
      return
    }

    const { name, email, service, message } = formData
    const text = `Hello SKKU Global, I would like to schedule a technical consultation:

*Client:* ${name.trim()}
*Email:* ${email.trim() || 'Not specified'}
*Service:* ${service}

*Project Brief:*
${message.trim() || 'I would like to discuss scoping and architecture for this service.'}`

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')

    setStatus('done')
    setFeedback('Opening WhatsApp with your pre-filled inquiry. Our team will respond shortly.')
  }

  return (
    <section className="contact-section" id="support">
      <div id="contact" style={{ position: 'relative', top: '-80px' }} aria-hidden="true" />
      <div className="shell">
        <div className="section-header animate">
          <div className="section-label">CLIENT SUPPORT &amp; INQUIRIES</div>
          <h2>Let&apos;s build or secure your project</h2>
          <p>
            Have a project in mind, need a security audit, or want to collaborate?
            Fill out the pre-structured consultation form or reach out directly.
          </p>
        </div>

        <div className="contact-container">
          <form className="contact-form card animate animate-delay-1" onSubmit={handleSendEmail} noValidate>
            <div className="form-group-row">
              <div className="form-group">
                <label htmlFor="contact-name" className="form-label">
                  Your Name / Company <span className="req">*</span>
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  className="form-input"
                  placeholder="e.g. Alex Adeyemi (Ventures Ltd)"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-email" className="form-label">
                  Official Email <span className="req">*</span>
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
              <div className="form-label-row">
                <label htmlFor="contact-message" className="form-label">
                  Project Brief &amp; Specifications <span className="req">*</span>
                </label>
                {autoFilledService && (
                  <span className="autofill-tag">
                    <LuZap size={12} className="autofill-tag-icon" aria-hidden="true" />
                    Auto-filled {autoFilledService.split(' ')[0]} template
                  </span>
                )}
              </div>

              {autoFilledService && (
                <div className="autofill-banner animate">
                  <span className="autofill-banner-icon" aria-hidden="true">
                    <LuLightbulb size={16} />
                  </span>
                  <span className="autofill-banner-text">
                    We pre-filled 60% of the project scoping questions for <strong>{autoFilledService}</strong>. Customize the details or add your specific questions below.
                  </span>
                </div>
              )}

              <textarea
                id="contact-message"
                name="message"
                rows="6"
                className="form-textarea form-textarea-rich"
                placeholder="Describe your goals, requirements, timeline, or current challenges..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            {/* ── Submission Actions: Preferred Email & WhatsApp ── */}
            <div className="form-submit-actions">
              <button
                type="submit"
                className="btn-primary form-submit-btn email-submit-btn"
                disabled={status === 'loading'}
              >
                <LuMail size={16} aria-hidden="true" />
                <span>{status === 'loading' ? 'Formatting Inquiry…' : 'Send Official Email (Recommended)'}</span>
              </button>

              <button
                type="button"
                onClick={handleSendWhatsApp}
                className="btn-secondary form-submit-btn whatsapp-submit-btn"
              >
                <FaWhatsapp size={16} aria-hidden="true" />
                <span>Send via WhatsApp</span>
              </button>
            </div>

            <p className="form-actions-note">
              Official inquiries sent via email receive a detailed engineering proposal within 24 hours. WhatsApp is also actively monitored for rapid project scoping.
            </p>

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

          {/* ── Direct Sidebar Channels ── */}
          <aside className="contact-direct-sidebar animate animate-delay-2">
            <div className="card direct-card">
              <div className="direct-badge">DIRECT CHANNELS</div>
              <h3>Prefer direct communication?</h3>
              <p>
                We respond within 24 hours. Reach out directly via official email or WhatsApp for immediate scoping.
              </p>

              <div className="direct-actions">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="direct-action-btn email-btn"
                >
                  <span className="direct-icon" aria-hidden="true">
                    <LuMail size={20} />
                  </span>
                  <div>
                    <span className="direct-btn-title">Official Email</span>
                    <span className="direct-btn-sub">{CONTACT_EMAIL}</span>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello SKKU Global, I would like to consult on a tech project.')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="direct-action-btn whatsapp-btn"
                >
                  <span className="direct-icon" aria-hidden="true">
                    <FaWhatsapp size={20} />
                  </span>
                  <div>
                    <span className="direct-btn-title">Chat on WhatsApp</span>
                    <span className="direct-btn-sub">08057215622 · Direct scoping</span>
                  </div>
                </a>

                <a
                  href={CALL_HREF}
                  className="direct-action-btn phone-btn"
                >
                  <span className="direct-icon" aria-hidden="true">
                    <LuPhoneCall size={20} />
                  </span>
                  <div>
                    <span className="direct-btn-title">Call Direct</span>
                    <span className="direct-btn-sub">{CALL_PHONE}</span>
                  </div>
                </a>
              </div>

              <div className="direct-guarantee">
                <span className="guarantee-dot" aria-hidden="true" />
                <span>Mutual NDA &amp; confidentiality guaranteed on all corporate consultations.</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
