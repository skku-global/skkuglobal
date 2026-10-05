import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { CONTACT_EMAIL, waLink } from '../seo/siteMeta.js'
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
function IconWhatsApp() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
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
    desc: 'Eye-catching flyer or graphic for WhatsApp, Instagram, or print marketing.',
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
  const initialObjective = searchParams.get('objective') || ''

  const [step, setStep] = useState(1)
  const [selectedObjective, setSelectedObjective] = useState(initialObjective || 'website')
  const [description, setDescription] = useState(initialPrompt)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [budget, setBudget] = useState(BUDGETS[1])
  const [timeline, setTimeline] = useState('5–7 Day Sprint')
  const [submitted, setSubmitted] = useState(false)
  const [handoffBlocked, setHandoffBlocked] = useState(false)

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

  const handleSubmit = (e) => {
    e.preventDefault()

    // This used to be a bare setTimeout(700) that flipped `submitted` and sent
    // the brief precisely nowhere, while the success screen told the visitor it
    // had reached the founder. The brief now goes to WhatsApp.
    //
    // window.open MUST run synchronously inside the submit gesture — a popup
    // opened from a timeout callback is discarded by every modern blocker, so
    // the old fake delay could not have been kept here anyway. If the blocker
    // wins regardless, window.open returns null and the success screen shows an
    // explicit fallback link instead of silently losing the lead.
    const opened = window.open(waLink(waMessage), '_blank', 'noopener,noreferrer')
    setHandoffBlocked(!opened)
    setSubmitted(true)
  }

  // This string is now the actual deliverable, not just decoration on the
  // success screen, so it carries every field the form collects. Two things
  // were wrong while it was unused: it interpolated the raw objective id
  // ("Objective: webapp") instead of the readable title, and it omitted
  // `timeline` altogether — the visitor picked a delivery window and it was
  // thrown away.
  const objectiveTitle =
    OBJECTIVES.find((o) => o.id === selectedObjective)?.title || selectedObjective

  const waMessage = [
    'Hello SKKU Global, I want to start a project.',
    '',
    `Objective: ${objectiveTitle}`,
    `Details: ${description || '(not provided)'}`,
    `Name: ${name}`,
    `Email: ${email}`,
    `Budget: ${budget}`,
    `Timeline: ${timeline}`,
  ].join('\n')

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
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -18 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="msc-step-kicker">Step 01 — Goal</span>
              <h2 className="msc-step-headline">What do you need?</h2>
              <p className="msc-step-sub">Pick the service that matches what you want to achieve.</p>

              <div className="msc-obj-grid">
                {OBJECTIVES.map((obj) => {
                  const isSelected = selectedObjective === obj.id
                  return (
                    <button
                      key={obj.id}
                      type="button"
                      onClick={() => setSelectedObjective(obj.id)}
                      className={`msc-obj-card ${isSelected ? 'selected' : ''}`}
                      aria-pressed={isSelected}
                    >
                      <div className="msc-obj-icon">
                        <ObjIcon id={obj.id} />
                      </div>
                      <div className="msc-obj-text">
                        <strong className="msc-obj-title">{obj.title}</strong>
                        <p className="msc-obj-desc">{obj.desc}</p>
                      </div>
                      <div className={`msc-obj-radio ${isSelected ? 'selected' : ''}`}>
                        {isSelected && <span className="msc-obj-radio-dot" />}
                      </div>
                    </button>
                  )
                })}
              </div>

              <div className="msc-nav msc-nav--end">
                <button type="button" onClick={handleNext} className="msc-btn msc-btn--primary">
                  <span>Continue</span>
                  <IconArrowRight />
                </button>
              </div>
            </motion.div>
          )}

          {/* ── STEP 2: Project Description ── */}
          {step === 2 && !submitted && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -18 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="msc-step-kicker">Step 02 — Details</span>
              <h2 className="msc-step-headline">Describe the project.</h2>
              <p className="msc-step-sub">
                What does your business do? What should this build achieve?
              </p>

              <textarea
                className="msc-textarea"
                aria-label="Project description"
                name="description"
                rows={5}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="e.g. I run a foodstuff shop and I need a flyer for WhatsApp marketing. My brand colors are green and orange..."
              />

              <div className="msc-quick-prompts">
                <span className="msc-qp-label">Quick fill:</span>
                {QUICK_PROMPTS.map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setDescription(p)}
                    className="msc-qp-chip"
                  >
                    + {p}
                  </button>
                ))}
              </div>

              <div className="msc-nav msc-nav--between">
                <button type="button" onClick={handleBack} className="msc-btn msc-btn--ghost">
                  <IconArrowLeft />
                  <span>Back</span>
                </button>
                <button type="button" onClick={handleNext} className="msc-btn msc-btn--primary">
                  <span>Continue</span>
                  <IconArrowRight />
                </button>
              </div>
            </motion.div>
          )}

          {/* ── STEP 3: Contact Info ── */}
          {step === 3 && !submitted && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -18 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="msc-step-kicker">Step 03 — Contact</span>
              <h2 className="msc-step-headline">Where do we reach you?</h2>
              <p className="msc-step-sub">
                Founder review. We reply within 24 hours with a clear plan and price.
              </p>

              <form onSubmit={handleSubmit} className="msc-form">
                <div className="msc-form-row">
                  <div className="msc-field">
                    <label className="msc-label" htmlFor="msc-name">Full Name</label>
                    <input
                      id="msc-name"
                      name="name"
                      autoComplete="name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Tunde Bakare"
                      className="msc-input"
                    />
                  </div>
                  <div className="msc-field">
                    <label className="msc-label" htmlFor="msc-email">Email Address</label>
                    <input
                      id="msc-email"
                      name="email"
                      autoComplete="email"
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
                    <span>Send Brief on WhatsApp</span>
                    <IconSend />
                  </button>
                </div>
              </form>
            </motion.div>
          )}

          {/* ── SUBMITTED ── */}
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
                {handoffBlocked ? 'One Last Step' : 'Brief Ready'}
              </span>
              <h2 className="msc-step-headline">Almost there, {name || 'there'}.</h2>
              <p className="msc-success-body">
                {handoffBlocked
                  ? 'Your browser blocked the WhatsApp tab. Open it with the button below — your brief is already written out, you only need to press send.'
                  : 'Your brief is written out and waiting in WhatsApp. Press send there and it reaches founder Abdulkabir Ajiboye directly, who replies within 24 hours.'}
              </p>

              <a
                href={waLink(waMessage)}
                target="_blank"
                rel="noreferrer"
                className="msc-wa-btn"
              >
                <IconWhatsApp />
                <span>{handoffBlocked ? 'Open WhatsApp to send' : 'Reopen WhatsApp'}</span>
                <IconExternal />
              </a>

              <button
                type="button"
                className="msc-reset-link"
                onClick={() => {
                  setSubmitted(false)
                  setHandoffBlocked(false)
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
            <span>Direct email: </span>
            <a href={`mailto:${CONTACT_EMAIL}`} className="msc-sla-link">
              {CONTACT_EMAIL}
            </a>
          </div>
          <div className="msc-sla-divider" />
          <div className="msc-sla-item">
            <IconClock />
            <strong>Response within 24 hours</strong>
          </div>
        </div>
      )}
    </div>
  )
}
