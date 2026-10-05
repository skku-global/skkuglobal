import { motion } from 'framer-motion'
import './HomeManifestoQuote.css'

export default function HomeManifestoQuote() {
  return (
    <section className="manifesto-section" aria-label="Company Vision & Manifesto">
      <div className="manifesto-container">
        
        {/* ── Quotation Marks Icon ── */}
        <motion.div
          className="manifesto-quote-mark"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          aria-hidden="true"
        >
          <svg width="44" height="34" viewBox="0 0 54 40" fill="currentColor">
            <path d="M12.8 40C5.1 40 0 34.6 0 26.2C0 14.8 9.9 4.3 22.4 0L24.8 4.6C15.8 8.1 11.7 13.9 11.2 19C12.7 18.2 14.9 17.7 17.3 17.7C23.1 17.7 27.2 21.9 27.2 28.5C27.2 35.2 22.1 40 12.8 40ZM39.6 40C31.9 40 26.8 34.6 26.8 26.2C26.8 14.8 36.7 4.3 49.2 0L51.6 4.6C42.6 8.1 38.5 13.9 38 19C39.5 18.2 41.7 17.7 44.1 17.7C49.9 17.7 54 21.9 54 28.5C54 35.2 48.9 40 39.6 40Z" />
          </svg>
        </motion.div>

        {/* ── Giant Editorial Manifesto Headline (Pluralized for the Company) ── */}
        <motion.h2
          className="manifesto-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          WE WANT PEOPLE TO<br />
          REMEMBER US FOR<br />
          MORE THAN JUST CODE
        </motion.h2>

        {/* ── Context & Attribution ── */}
        <motion.p
          className="manifesto-subtext"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          Engineering digital architecture, brand velocity, and sovereign technologies built for generational impact.
        </motion.p>

        <motion.div
          className="manifesto-brand-tag"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <span className="manifesto-brand-dot" />
          <span>SKKU GLOBAL TECHNOLOGIES LIMITED · CAC RC 7306232</span>
        </motion.div>

      </div>
    </section>
  )
}
