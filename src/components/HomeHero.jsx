import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react'
import '../pages/Home.css'

const PAIN_POINTS = [
  'Not enough recognition in your market...',
  'Scattered products and fragmented tools...',
  'Struggling to position as a global leader...',
]

export default function HomeHero() {
  const [activePainIndex, setActivePainIndex] = useState(0)
  const [promptText, setPromptText] = useState('')
  const navigate = useNavigate()

  // Cycle through the 3 pain points smoothly
  useEffect(() => {
    const timer = setInterval(() => {
      setActivePainIndex((prev) => (prev + 1) % PAIN_POINTS.length)
    }, 3800)
    return () => clearInterval(timer)
  }, [])

  const handleSubmitPrompt = (e) => {
    e.preventDefault()
    const query = promptText.trim()
    if (query) {
      navigate(`/contact?prompt=${encodeURIComponent(query)}`)
    } else {
      navigate('/contact')
    }
  }

  return (
    <section className="home-hero-section" aria-label="Hero Introduction">
      <div className="home-hero-container">
        {/* ── 1. Eyebrow & Serif Headline ── */}
        <div className="home-hero-header-box">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="home-eyebrow-row"
          >
            <span className="home-eyebrow-text">STUDIO — EST. IBADAN</span>
            <span className="home-eyebrow-dot" />
            <span className="home-eyebrow-rc">RC 7306232</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="home-hero-title"
          >
            Thoughtful work for brands that refuse to{' '}
            <span className="italic-accent">blend in.</span>
          </motion.h1>
        </div>

        {/* ── 2. Serus-Style Interactive Billboard / Prompt Bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="home-billboard-card"
        >
          <div className="billboard-inner">
            {/* Dynamic Typewriter / Word Cycling */}
            <div className="billboard-friction-row">
              <span className="billboard-friction-label">The Friction:</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={activePainIndex}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="billboard-friction-dynamic"
                >
                  &ldquo;{PAIN_POINTS[activePainIndex]}&rdquo;
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Studio Verdict */}
            <p className="billboard-verdict-text">
              <strong>Studio Verdict:</strong> A modern digital presence gives you international recognition, client trust, and audience support.
            </p>

            {/* Interactive Prompt Input Box */}
            <form onSubmit={handleSubmitPrompt} className="billboard-prompt-form">
              <div className="prompt-badge">
                <Sparkles size={11} style={{ color: 'var(--accent-violet)' }} />
                <span>Prompt Studio</span>
              </div>

              <input
                type="text"
                value={promptText}
                onChange={(e) => setPromptText(e.target.value)}
                placeholder="What did you have in mind?"
                className="prompt-input-field"
              />

              <button
                type="submit"
                className="prompt-submit-btn"
                aria-label="Submit project inquiry"
              >
                <ArrowRight size={17} />
              </button>
            </form>

            <div className="billboard-meta-row">
              <span className="billboard-meta-item">
                <CheckCircle2 size={13} style={{ color: 'var(--accent-violet)' }} />
                <span>Zero obligation</span>
              </span>
              <span>·</span>
              <span>Average response in 24 hours</span>
              <span>·</span>
              <span>Founder-reviewed</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
