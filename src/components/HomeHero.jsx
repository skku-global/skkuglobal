import { motion } from 'framer-motion'
import '../pages/Home.css'

export default function HomeHero() {
  return (
    <section className="home-hero-section" aria-label="Hero Introduction">
      <div className="home-hero-container">
        {/* ── Eyebrow & Serif Headline ── */}
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
      </div>
    </section>
  )
}
