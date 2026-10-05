import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { CONTACT_EMAIL } from '../seo/siteMeta.js'
import './MultiStepContact.css'

// ── Inline SVG Icons ──────────────────────────────────────────────
function IconArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}
function IconArrowLeft() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  )
}
function IconCheck() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}
function IconSend() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  )
}
function IconMail() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  )
}
function IconClock() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}
function IconExternal() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}
function IconCopy() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  )
}

// ── Icon mapping per objective ────────────────────────────────────
function ObjIcon({ id }) {
  const icons = {
    website: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
    ),
    webapp: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
    ),
    flyer: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
    ),
    adsvideo: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>
    ),
  }
  return icons[id] || null
}

// ── Data ──────────────────────────────────────────────────────────
const OBJECTIVES = [
  {
    id: 'website',
    title: 'New Website / Landing Page',
    desc: 'A fast, custom-built React site that looks professional and converts visitors.',
  },
  {
    id: 'webapp',
    title: 'Web App / Client Portal',
    desc: 'Full-stack application with user accounts, dashboards, and backend logic.',
  },
  {
    id: 'flyer',
    title: 'Flyer / Social Media Design',
    desc: 'Eye-catching flyer or graphic for digital campaigns, social media, or print marketing.',
  },
  {
    id: 'adsvideo',
    title: 'Ads Video Production',
    desc: 'Short-form promotional video ad for your product, service, or business.',
  },
]

const BUDGETS = [
  'Under ₦50,000 (Flyer / Small design)',
  '₦50,000 – ₦250,000 (Landing page / Basic site)',
  '₦250,000 – ₦1,000,000 (Full web app)',
  '₦1,000,000+ (Enterprise / Ongoing retainer)',
]

const QUICK_PROMPTS = [
  'I need a landing page for my business',
  'Design a flyer for my product',
  'Build a booking/order web app',
]

// ── Component ─────────────────────────────────────────────────────
export default function MultiStepContact() {
  const [searchParams] = useSearchParams()

  const initialPrompt = searchParams.get('prompt') || ''
  const initialObjective = searchParams.get('objective') || 'website'

  const [step, setStep] = useState(1)
  const [selectedObjective, setSelectedObjective] = useState(initialObjective)
  const [description, setDescription] = useState(initialPrompt)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [budget, setBudget] = useState(BUDGETS[1])
  const [timeline, setTimeline] = useState('5–7 Day Sprint')
  const [submitted, setSubmitted] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (initialPrompt && step === 1) setStep(2)
  }, [initialPrompt])

  const handleNext = (e) => {
    if (e) e.preventDefault()
    if (step < 3) setStep(step + 1)
  }

  const handleBack = () => {
    if (step > 1) setStep(step - 1)
  }

  const objectiveTitle =
    OBJECTIVES.find((o) => o.id === selectedObjective)?.title || selectedObjective

  const emailSubject = `Project Brief: ${objectiveTitle} — ${name || 'Client'}`
  const emailBody = [
    `Hello SKKU Global,`,
    ``,
    `I would like to submit a project brief to SKKU Global:`,
    ``,
    `PROJECT SPECIFICATIONS`,
    `----------------------------------------`,
    `• Service Objective : ${objectiveTitle}`,
    `• Client Name       : ${name}`,
    `• Contact Email     : ${email}`,
    `• Budget Range      : ${budget}`,
    `• Delivery Timeline : ${timeline}`,
    ``,
    `PROJECT BRIEF & REQUIREMENTS`,
    `----------------------------------------`,
    `${description || '(No additional brief notes provided)'}`,
    ``,
    `Submitted via skkuglobal.com Contact Studio.`,
  ].join('\n')

  const emailMailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`

  const handleSubmit = (e) => {
    e.preventDefault()
    // Open user's default email client with structured brief pre-composed
    window.location.href = emailMailtoUrl
    setSubmitted(true)
  }

  const handleCopyBrief = () => {
    const doSetCopied = () => {
      setCopied(true)
      setTimeout(() => setCopied(false), 3000)
    }

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(emailBody)
        .then(doSetCopied)
        .catch(() => {
          fallbackCopy(doSetCopied)
        })
    } else {
      fallbackCopy(doSetCopied)
    }
  }

  const fallbackCopy = (cb) => {
    try {
      const el = document.createElement('textarea')
      el.value = emailBody
      el.style.position = 'fixed'
      el.style.opacity = '0'
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
      if (cb) cb()
    } catch (err) {
      console.warn('Clipboard copy fallback failed', err)
    }
  }

  const STEP_LABELS = ['Your Goal', 'Project Details', 'Contact Info']

  return (
    <div className="msc-root">

      {/* ── Progress Bar ── */}
      {!submitted && (
        <div className="msc-progress-bar" aria-label="Form progress">
          {[1, 2, 3].map((i) => (
            <div key={i} className="msc-progress-step">
              <div className={`msc-step-dot ${step === i ? 'active' : step > i ? 'done' : ''}`}>
                {step > i ? <IconCheck /> : <span>{i}</span>}
              </div>
              <span className={`msc-step-label ${step >= i ? 'active' : ''}`}>
                {STEP_LABELS[i - 1]}
              </span>
              {i < 3 && <div className={`msc-step-line ${step > i ? 'done' : ''}`} />}
            </div>
          ))}
          <span className="msc-step-counter">Step 0{step} / 03</span>
        </div>
      )}

      {/* ── Card Container ── */}
      <div className="msc-card">
        <AnimatePresence mode="wait">

          {/* ── STEP 1: Objective ── */}
          {step === 1 && !submitted && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="msc-step-body"
            >
              <span className="msc-step-kicker">Step 01 of 03 · Core Objective</span>
              <h2 className="msc-step-headline">What are we building for you?</h2>
              <p className="msc-step-sub">
                Choose the primary service that aligns with your goal. Every project is engineered directly by founder Abdulkabir Ajiboye.
              </p>

              <div className="msc-obj-grid" role="radiogroup" aria-label="Project objective">
                {OBJECTIVES.map((obj) => {
                  const isSelected = selectedObjective === obj.id
                  return (
                    <button
                      key={obj.id}
                      type="button"
                      role="radio"
                      aria-checked={isSelected}
                      onClick={() => setSelectedObjective(obj.id)}
                      className={`msc-obj-card ${isSelected ? 'selected' : ''}`}
                    >
                      <div className="msc-obj-icon">
                        <ObjIcon id={obj.id} />
                      </div>
                      <div className="msc-obj-text">
                        <span className="msc-obj-title">{obj.title}</span>
                        <span className="msc-obj-desc">{obj.desc}</span>
                      </div>
                      <div className="msc-obj-radio" aria-hidden="true">
                        <div className="msc-obj-radio-inner" />
                      </div>
                    </button>
                  )
                })}
              </div>

              <div className="msc-nav msc-nav--end">
                <button
                  type="button"
                  onClick={handleNext}
                  className="msc-btn msc-btn--primary"
                >
                  <span>Continue</span>
                  <IconArrowRight />
                </button>
              </div>
            </motion.div>
          )}

          {/* ── STEP 2: Description & Context ── */}
          {step === 2 && !submitted && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="msc-step-body"
            >
              <span className="msc-step-kicker">Step 02 of 03 · Project Details</span>
              <h2 className="msc-step-headline">Tell us about your project.</h2>
              <p className="msc-step-sub">
                The more context you give, the faster we can scope your architecture and give you an accurate delivery timeline.
              </p>

              <div className="msc-field">
                <label className="msc-label" htmlFor="msc-description">
                  Describe what you need
                </label>
                <textarea
                  id="msc-description"
                  name="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={5}
                  className="msc-textarea"
                  placeholder="e.g. I run a foodstuff shop and I need a flyer for digital marketing. My brand colors are green and orange, and I need it delivered within 48 hours..."
                />
              </div>

              {/* Quick Prompt Chips */}
              <div className="msc-chips-wrap">
                <span className="msc-chips-label">Or start with a quick brief:</span>
                <div className="msc-chips">
                  {QUICK_PROMPTS.map((prompt, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setDescription(prompt)}
                      className="msc-chip"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>

              <div className="msc-nav msc-nav--between">
                <button type="button" onClick={handleBack} className="msc-btn msc-btn--ghost">
                  <IconArrowLeft />
                  <span>Back</span>
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="msc-btn msc-btn--primary"
                >
                  <span>Continue</span>
                  <IconArrowRight />
                </button>
              </div>
            </motion.div>
          )}

          {/* ── STEP 3: Contact & Submission ── */}
          {step === 3 && !submitted && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="msc-step-body"
            >
              <span className="msc-step-kicker">Step 03 of 03 · Contact &amp; Review</span>
              <h2 className="msc-step-headline">Where do we reach you?</h2>
              <p className="msc-step-sub">
                Founder review. We reply within 24 hours with a clear plan and price.
              </p>

              <form onSubmit={handleSubmit} className="msc-form">
                <div className="msc-form-row">
                  <div className="msc-field">
                    <label className="msc-label" htmlFor="msc-name">Full Name *</label>
                    <input
                      id="msc-name"
                      name="name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Tunde Bakare"
                      className="msc-input"
                    />
                  </div>
                  <div className="msc-field">
                    <label className="msc-label" htmlFor="msc-email">Email Address *</label>
                    <input
                      id="msc-email"
                      name="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      className="msc-input"
                    />
                  </div>
                </div>

                <div className="msc-form-row">
                  <div className="msc-field">
                    <label className="msc-label" htmlFor="msc-budget">Budget Range</label>
                    <select
                      id="msc-budget"
                      name="budget"
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="msc-select"
                    >
                      {BUDGETS.map((b) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </div>
                  <div className="msc-field">
                    <label className="msc-label" htmlFor="msc-timeline">Delivery Timeline</label>
                    <select
                      id="msc-timeline"
                      name="timeline"
                      value={timeline}
                      onChange={(e) => setTimeline(e.target.value)}
                      className="msc-select"
                    >
                      <option value="5–7 Day Sprint">5–7 Day Sprint (Fast)</option>
                      <option value="2–3 Weeks Full Launch">2–3 Weeks Full Launch</option>
                      <option value="Flexible / Long-term">Flexible / Long-term</option>
                    </select>
                  </div>
                </div>

                <div className="msc-nav msc-nav--between msc-form-footer">
                  <button type="button" onClick={handleBack} className="msc-btn msc-btn--ghost">
                    <IconArrowLeft />
                    <span>Back</span>
                  </button>
                  <button
                    type="submit"
                    className="msc-btn msc-btn--submit"
                  >
                    <span>Send Brief via Email</span>
                    <IconSend />
                  </button>
                </div>
              </form>
            </motion.div>
          )}

          {/* ── SUBMITTED / SUCCESS SCREEN ── */}
          {submitted && (
            <motion.div
              key="submitted"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="msc-success"
              role="status"
              aria-live="polite"
            >
              <div className="msc-success-icon">
                <IconCheck />
              </div>
              <span className="msc-step-kicker">
                Brief Prepared
              </span>
              <h2 className="msc-step-headline">Almost there, {name || 'there'}.</h2>
              <p className="msc-success-body">
                Your project brief has been formatted for <strong>{CONTACT_EMAIL}</strong>. Your default email app should open with your project details ready to send. Founder Abdulkabir Ajiboye will review your brief and reply within 24 hours with exact pricing.
              </p>

              <div className="msc-success-actions">
                <a
                  href={emailMailtoUrl}
                  className="msc-email-btn"
                >
                  <IconMail />
                  <span>Open Email Client</span>
                  <IconExternal />
                </a>

                <button
                  type="button"
                  className="msc-copy-btn"
                  onClick={handleCopyBrief}
                >
                  <IconCopy />
                  <span>{copied ? 'Copied to Clipboard!' : 'Copy Brief to Clipboard'}</span>
                </button>
              </div>

              <button
                type="button"
                className="msc-reset-link"
                onClick={() => {
                  setSubmitted(false)
                  setStep(1)
                  setDescription('')
                }}
              >
                Start another brief
              </button>
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      {/* ── Bottom SLA Bar ── */}
      {!submitted && (
        <div className="msc-sla-bar">
          <div className="msc-sla-item">
            <IconMail />
            <span>Direct corporate email: </span>
            <a href={`mailto:${CONTACT_EMAIL}`} className="msc-sla-link">
              {CONTACT_EMAIL}
            </a>
          </div>
          <div className="msc-sla-divider" />
          <div className="msc-sla-item">
            <IconClock />
            <strong>Founder Response within 24 hours</strong>
          </div>
        </div>
      )}
    </div>
  )
}
