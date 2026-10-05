import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import './ScrollStreamFlow.css'

// ── Native Inline React SVG Icons (Zero external dependencies) ──
function CheckIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function ArrowRightIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}

function ArrowLeftIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  )
}

function WhatsAppIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  )
}

function MailIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function ResetIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="1 4 1 10 7 10" />
      <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
    </svg>
  )
}

// ── 4 Interactive Questions Based on Transformation Stream ──
const STREAM_QUESTIONS = [
  {
    stepNumber: '01',
    heading: 'CUSTOMER ISSUE',
    subtitle: 'Where the transformation story begins — identifying and isolating the core friction.',
    question: 'What core friction or challenge is your business facing right now?',
    options: [
      'Need a fast, custom modern website built from scratch',
      'High-impact promotional flyer designs & ads videos to drive real sales',
      'Current website is outdated, sluggish, or losing client trust',
      'Need custom web software / client portal with authentication & database',
    ],
  },
  {
    stepNumber: '02',
    heading: 'NOT ENOUGH RECOGNITION',
    subtitle: 'High operational excellence trapped behind market invisibility and generic templates.',
    question: 'What is the visibility bottleneck holding your brand back?',
    options: [
      'Trapped behind generic social templates & market invisibility',
      'Clients cannot verify our credibility online when searching for us',
      'Competitors with inferior products are winning deals and charging more',
      'Relying purely on unpredictable word-of-mouth with no digital footprint',
    ],
  },
  {
    stepNumber: '03',
    heading: 'WANT TO BE PROFESSIONAL',
    subtitle: 'Elevating your brand presence to command instant prestige and justify premium fees.',
    question: 'What standard of digital presence do you want to command?',
    options: [
      'Command instant prestige and justify premium client pricing',
      'Bespoke clean React UI with 100% code ownership — zero templates',
      'Scroll-stopping promotional video & print-ready marketing visuals',
      'Full digital authority that instills institutional trust on first glance',
    ],
  },
  {
    stepNumber: '04',
    heading: 'ALL PRODUCT & TECH IN ONE PLACE',
    subtitle: 'Total control — all services, clear, easy, and engineered with modern web architecture.',
    question: 'How would you like your solution engineered and delivered?',
    options: [
      'Rapid sprint delivery: fully tested and live in 5–7 days',
      'Milestone contract: 50% kick-off, 50% on live client approval',
      'Direct founder engineering with 100% GitHub code handover',
      'Turnkey package: Custom Website + Flyer Campaign + Ads Video',
    ],
  },
]

export default function ScrollStreamFlow() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0)
  const [answers, setAnswers] = useState({
    '01': '',
    '02': '',
    '03': '',
    '04': '',
  })
  const [customNote, setCustomNote] = useState('')
  const [clientName, setClientName] = useState('')
  const navigate = useNavigate()

  const currentQ = STREAM_QUESTIONS[currentStepIndex]
  const isComplete = currentStepIndex >= STREAM_QUESTIONS.length

  const handleSelectOption = (optionText) => {
    const stepKey = currentQ.stepNumber
    setAnswers((prev) => ({ ...prev, [stepKey]: optionText }))
    // Auto-advance after smooth feedback
    if (currentStepIndex < STREAM_QUESTIONS.length - 1) {
      setTimeout(() => {
        setCurrentStepIndex((prev) => prev + 1)
      }, 220)
    } else {
      setTimeout(() => {
        setCurrentStepIndex(STREAM_QUESTIONS.length)
      }, 220)
    }
  }

  const handlePrev = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1)
    }
  }

  const handleReset = () => {
    setAnswers({ '01': '', '02': '', '03': '', '04': '' })
    setCustomNote('')
    setCurrentStepIndex(0)
  }

  // Construct message for WhatsApp & Contact Pre-fill
  const blueprintSummary = [
    `*SKKU GLOBAL — TRANSFORMATION STREAM BLUEPRINT*`,
    clientName.trim() ? `Client: ${clientName.trim()}` : null,
    `1. CUSTOMER ISSUE: ${answers['01'] || 'Not specified'}`,
    `2. BOTTLENECK: ${answers['02'] || 'Not specified'}`,
    `3. DESIRED STANDARD: ${answers['03'] || 'Not specified'}`,
    `4. TECH & EXECUTION: ${answers['04'] || 'Not specified'}`,
    customNote.trim() ? `Additional Note: ${customNote.trim()}` : null,
  ].filter(Boolean).join('\n')

  const whatsAppNumber = '2348057215622' // WhatsApp: 08057215622
  const whatsAppUrl = `https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(blueprintSummary)}`
  const mailtoUrl = `mailto:admin@skkuglobal.com?subject=${encodeURIComponent('Project Inquiry — Transformation Stream Blueprint')}&body=${encodeURIComponent(blueprintSummary)}`

  const handleNavigateToContact = () => {
    const objective = answers['01'] ? answers['01'].slice(0, 45) : 'Custom Web & Brand'
    const prompt = `Transformation Blueprint:\n- Friction: ${answers['01']}\n- Visibility: ${answers['02']}\n- Target Stature: ${answers['03']}\n- Delivery: ${answers['04']}${customNote ? `\n- Note: ${customNote}` : ''}`
    navigate(`/contact?objective=${encodeURIComponent(objective)}&prompt=${encodeURIComponent(prompt)}`)
  }

  return (
    <section id="transformation-stream" className="stream-section" aria-label="Interactive Transformation Stream">
      <div className="stream-container">
        
        {/* ── Section Header ── */}
        <div className="stream-header">
          <span className="stream-kicker">INTERACTIVE DISCOVERY FLOW</span>
          <h2 className="stream-title">THE TRANSFORMATION STREAM</h2>
          <p className="stream-intro">
            Answer 4 quick diagnostic questions to pinpoint your bottlenecks and generate your immediate digital blueprint.
          </p>
        </div>

        {/* ── Flow Progress Indicator (Steps 01 to 04) ── */}
        <div className="stream-steps-bar" role="progressbar" aria-valuenow={currentStepIndex + 1} aria-valuemin={1} aria-valuemax={4}>
          {STREAM_QUESTIONS.map((q, idx) => {
            const isAnswered = Boolean(answers[q.stepNumber])
            const isActive = currentStepIndex === idx
            return (
              <button
                key={q.stepNumber}
                type="button"
                className={`stream-step-indicator ${isActive ? 'is-active' : ''} ${isAnswered ? 'is-answered' : ''}`}
                onClick={() => setCurrentStepIndex(idx)}
                title={`Jump to Step ${q.stepNumber}: ${q.heading}`}
              >
                <span className="stream-step-num">0{idx + 1}</span>
                <span className="stream-step-label">{q.heading}</span>
                {isAnswered && <CheckIcon size={12} />}
              </button>
            )
          })}
        </div>

        {/* ── Main Interactive Quiz Container ── */}
        <div className="stream-card-box">
          <AnimatePresence mode="wait">
            {!isComplete ? (
              <motion.div
                key={currentStepIndex}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                className="stream-question-view"
              >
                <div className="stream-q-header">
                  <div className="stream-q-badge-row">
                    <span className="stream-step-badge">STEP {currentQ.stepNumber} OF 04</span>
                    <span className="stream-q-name">{currentQ.heading}</span>
                  </div>
                  <p className="stream-q-subtitle">{currentQ.subtitle}</p>
                  <h3 className="stream-q-title">{currentQ.question}</h3>
                </div>

                {/* Option Cards */}
                <div className="stream-options-grid">
                  {currentQ.options.map((option, optIdx) => {
                    const isSelected = answers[currentQ.stepNumber] === option
                    return (
                      <button
                        key={optIdx}
                        type="button"
                        className={`stream-option-btn ${isSelected ? 'is-selected' : ''}`}
                        onClick={() => handleSelectOption(option)}
                      >
                        <div className="stream-option-radio">
                          {isSelected && <span className="stream-radio-inner" />}
                        </div>
                        <span className="stream-option-text">{option}</span>
                      </button>
                    )
                  })}
                </div>

                {/* Navigation & Controls */}
                <div className="stream-nav-row">
                  <button
                    type="button"
                    onClick={handlePrev}
                    disabled={currentStepIndex === 0}
                    className="stream-nav-back-btn"
                  >
                    <ArrowLeftIcon size={13} />
                    <span>Previous</span>
                  </button>

                  <div className="stream-nav-right">
                    {answers[currentQ.stepNumber] && currentStepIndex < STREAM_QUESTIONS.length - 1 && (
                      <button
                        type="button"
                        onClick={() => setCurrentStepIndex((prev) => prev + 1)}
                        className="stream-nav-next-btn"
                      >
                        <span>Next Step</span>
                        <ArrowRightIcon size={13} />
                      </button>
                    )}
                    {currentStepIndex === STREAM_QUESTIONS.length - 1 && answers[currentQ.stepNumber] && (
                      <button
                        type="button"
                        onClick={() => setCurrentStepIndex(STREAM_QUESTIONS.length)}
                        className="stream-nav-finish-btn"
                      >
                        <span>Review Blueprint</span>
                        <ArrowRightIcon size={13} />
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ) : (
              /* ── RESOLUTION / BLUEPRINT VIEW ── */
              <motion.div
                key="resolution"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="stream-resolution-view"
              >
                <div className="stream-res-header">
                  <span className="stream-kicker">DIAGNOSTIC COMPLETE</span>
                  <h3 className="stream-res-title">YOUR TRANSFORMATION BLUEPRINT</h3>
                  <p className="stream-res-subtitle">
                    Here is your custom strategy summary. Send it directly to founder Abdulkabir Ajiboye for rapid execution.
                  </p>
                </div>

                {/* Blueprint Summary Cards */}
                <div className="stream-blueprint-summary">
                  {STREAM_QUESTIONS.map((q) => (
                    <div key={q.stepNumber} className="stream-bp-item">
                      <div className="stream-bp-header">
                        <span className="stream-bp-step">STEP {q.stepNumber}</span>
                        <span className="stream-bp-title">{q.heading}</span>
                      </div>
                      <p className="stream-bp-answer">
                        {answers[q.stepNumber] || 'Not selected (Click to edit)'}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Quick Optional Info */}
                <div className="stream-res-inputs">
                  <input
                    type="text"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="Your Name or Business Name (optional)"
                    className="stream-res-input"
                  />
                  <input
                    type="text"
                    value={customNote}
                    onChange={(e) => setCustomNote(e.target.value)}
                    placeholder="Any specific budget or deadline? (optional)"
                    className="stream-res-input"
                  />
                </div>

                {/* Direct Action Triggers */}
                <div className="stream-res-actions">
                  <a
                    href={mailtoUrl}
                    className="stream-btn-email"
                  >
                    <MailIcon size={16} />
                    <span>SEND BRIEF VIA EMAIL (ADMIN@SKKUGLOBAL.COM)</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleNavigateToContact}
                    className="stream-btn-contact"
                  >
                    <span>AUTO-FILL CONTACT STUDIO</span>
                    <ArrowRightIcon size={14} />
                  </button>
                </div>

                <div className="stream-res-footer">
                  <button type="button" onClick={handleReset} className="stream-reset-btn">
                    <ResetIcon size={13} />
                    <span>Retake Diagnostic</span>
                  </button>
                  <span className="stream-res-guarantee">
                    Founder direct review · Guaranteed response within 24 hours
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  )
}
