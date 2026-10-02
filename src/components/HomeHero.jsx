import { motion } from 'framer-motion'
import '../pages/Home.css'

export default function HomeHero() {
  return (
    <section className="home-hero-section" aria-label="Hero Introduction">
      <div className="home-hero-container">
        {/* ── Apple Bold Headline ── */}
        <div className="home-hero-header-box">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="home-hero-title"
          >
            We are here to solve your tech problem.
          </motion.h1>
        </div>
      </div>
    </section>
  )
}
