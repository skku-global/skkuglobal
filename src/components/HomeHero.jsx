import { motion } from 'framer-motion'
import '../pages/Home.css'

export default function HomeHero() {
  return (
    <section className="home-hero-section" aria-label="Hero Introduction">
      <div className="home-hero-container">
        {/* ── Serif Headline ── */}
        <div className="home-hero-header-box">
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
