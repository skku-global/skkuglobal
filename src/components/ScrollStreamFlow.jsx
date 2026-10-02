import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import './ScrollStreamFlow.css'

// ── Native Inline React SVG Icons (Zero external icon library dependency) ──
function ArrowDownIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="12" y1="5" x2="12" y2="19" />
      <polyline points="19 12 12 19 5 12" />
    </svg>
  )
}

function ArrowRightIcon({ size = 14 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}

// ── Exact Nodes from the Handwritten Diagram ──
const STREAM_NODES = [
  {
    id: 'customer-issue',
    position: 'pos-center',
    stepNumber: '01',
    heading: 'CUSTOMER ISSUE',
    subtitle: 'Where the transformation story begins — identifying and isolating the core friction.',
    hoverColor: '#0C182A', // Deep Midnight Oceanic Navy (Like Work)
  },
  {
    id: 'recognition',
    position: 'pos-right',
    stepNumber: '02',
    heading: 'NOT ENOUGH RECOGNITION',
    subtitle: 'High operational excellence trapped behind market invisibility and generic templates.',
    hoverColor: '#28160B', // Deep Warm Espresso Bronze (Like Work)
  },
  {
    id: 'professional',
    position: 'pos-left',
    stepNumber: '03',
    heading: 'WANT TO BE PROFESSIONAL',
    subtitle: 'Elevating your brand presence to command instant prestige and justify premium fees.',
    hoverColor: '#0A2315', // Deep Emerald Forest (Like Work)
  },
  {
    id: 'centralized',
    position: 'pos-right',
    stepNumber: '04',
    heading: 'ALL PRODUCT & TECH IN ONE PLACE',
    subtitle: 'Total control — all services, clear, easy, and engineered with modern web architecture.',
    hoverColor: '#1C122F', // Deep Royal Midnight Violet (Like Work)
  },
]

export default function ScrollStreamFlow() {
  const [promptText, setPromptText] = useState('')
  const navigate = useNavigate()

  const handlePromptSubmit = (e) => {
    e.preventDefault()
    const q = promptText.trim()
    if (q) {
      navigate(`/contact?prompt=${encodeURIComponent(q)}`)
    } else {
      navigate('/contact')
    }
  }

  return (
    <section className="stream-section" aria-label="Transformation Stream">
      <div className="stream-container">
        
        {/* ── Section Header ── */}
        <div className="stream-header">
          <span className="stream-kicker">SERVICE STREAM</span>
          <h2 className="stream-title">THE TRANSFORMATION STREAM</h2>
          <p className="stream-intro">
            Follow the flow — dissolving the friction between your current bottlenecks and complete digital authority.
          </p>
        </div>

        {/* ── Oval Nodes & Curving Connecting Arrows ── */}
        <div className="stream-track">
          {STREAM_NODES.map((node, index) => (
            <div key={node.id} className="w-full flex flex-col items-center">
              {/* The Oval Capsule Card */}
              <div className={`stream-node-row ${node.position}`}>
                <motion.div
                  className="stream-oval-card"
                  style={{ '--oval-hover-bg': node.hoverColor }}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="stream-step-badge">STEP {node.stepNumber}</span>
                  <h3 className="stream-oval-title">{node.heading}</h3>
                  <p className="stream-oval-subtitle">{node.subtitle}</p>
                </motion.div>
              </div>

              {/* Curving Flow Arrow linking to the next node */}
              <div className="stream-arrow-connector">
                <div className="stream-arrow-badge" title="Flowing to next step">
                  <ArrowDownIcon size={18} />
                </div>
              </div>
            </div>
          ))}

          {/* ── Final Rectangular Box from Diagram: 'WHAT DID YOU HAVE IN MIND' ── */}
          <motion.div
            className="stream-terminal-box"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="stream-kicker" style={{ marginBottom: '14px' }}>THE RESOLUTION</span>
            <h3 className="stream-terminal-title">WHAT DID YOU HAVE IN MIND?</h3>
            <p className="stream-terminal-sub">
              Tell us your bottleneck, product, or service vision. We build the solution and put you in total control.
            </p>

            <form onSubmit={handlePromptSubmit} className="stream-prompt-form">
              <input
                type="text"
                value={promptText}
                onChange={(e) => setPromptText(e.target.value)}
                placeholder="[ Describe your product, service, or issue... ]"
                className="stream-prompt-input"
                aria-label="What did you have in mind?"
              />
              <button type="submit" className="stream-prompt-btn">
                <span>SUBMIT INQUIRY</span>
                <ArrowRightIcon size={14} />
              </button>
            </form>

            <p className="stream-terminal-note">
              Direct route to founder Abdulkabir Ajiboye · Response guaranteed in 24h
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
