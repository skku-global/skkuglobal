import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import '../pages/Home.css'

// ─────────────────────────────────────────────────────────────────────────────
// HERO SLOGANS / ROTATING TEXTS SEQUENCE
// 1. "SKKU" (Centered, with alternating S: black, K: #E65100, K: black, U: #E65100)
// 2. Current text: "We are here to solve your tech problem." (with "problem." highlighted)
// 3. Put your 3rd text here in quotes "" (user can replace this string anytime)
// ─────────────────────────────────────────────────────────────────────────────
export const HERO_PHRASES = [
  // 1. "SKKU"
  "SKKU",

  // 2. Current text on the page now
  "We are here to solve your tech problem.",

  // 3. Put your text here later inside quotes "":
  "Digital architecture built for enterprise scale.",
]

/**
 * Parses phrase into units (letters for SKKU, words for sentences)
 * S: black, K: #E65100, K: black, U: #E65100
 * For sentences, highlights 'problem' in #E65100.
 */
function parsePhraseUnits(phrase) {
  if (typeof phrase !== 'string') return { isBrand: false, units: [] }

  const trimmed = phrase.trim()

  // 1. SKKU Brandmark: 4 individual letters with alternating colors S(Black) K(#E65100) K(Black) U(#E65100)
  if (trimmed === 'SKKU') {
    return {
      isBrand: true,
      units: [
        { text: 'S', color: 'var(--black-pure, #000000)', isOrange: false },
        { text: 'K', color: '#E65100', isOrange: true },
        { text: 'K', color: 'var(--black-pure, #000000)', isOrange: false },
        { text: 'U', color: '#E65100', isOrange: true },
      ],
    }
  }

  // 2. Multi-word phrases
  const rawWords = trimmed.split(/\s+/)
  return {
    isBrand: false,
    units: rawWords.map((word) => {
      const isProblem = word.toLowerCase().includes('problem')
      return {
        text: word,
        color: isProblem ? '#E65100' : 'var(--black-pure, #000000)',
        isOrange: isProblem,
      }
    }),
  }
}

export default function HomeHero() {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(0)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const cardRef = useRef(null)

  const { isBrand, units } = parsePhraseUnits(HERO_PHRASES[phraseIndex])

  // 1. Typewriter reveal for active phrase (letters for SKKU, words for sentences)
  useEffect(() => {
    setVisibleCount(0)

    // Letters in SKKU reveal slightly faster (160ms), words in sentences (190ms)
    const intervalMs = isBrand ? 170 : 190

    const timer = setInterval(() => {
      setVisibleCount((prev) => {
        if (prev < units.length) {
          return prev + 1
        }
        clearInterval(timer)
        return prev
      })
    }, intervalMs)

    return () => clearInterval(timer)
  }, [phraseIndex, isBrand, units.length])

  // 2. When animation completes, hold so visitor can read, then rotate to next phrase
  useEffect(() => {
    if (visibleCount === units.length && units.length > 0) {
      // Hold duration (SKKU holds ~2.2s, longer sentences hold ~2.6s)
      const holdDuration = isBrand ? 2200 : 2600

      const holdTimer = setTimeout(() => {
        setPhraseIndex((prev) => (prev + 1) % HERO_PHRASES.length)
      }, holdDuration)

      return () => clearTimeout(holdTimer)
    }
  }, [visibleCount, units.length, isBrand, phraseIndex])

  // Interactive 3D tilt tracking for physical depth
  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ x: x * 10, y: -y * 10 })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
  }

  return (
    <section className="home-hero-section" aria-label="Hero Introduction">
      {/* The real, stable <h1>. The rotating headline below cannot be one: it
          renders units.slice(0, visibleCount) and visibleCount starts at 0, so
          prerender emitted an empty <h1> for the homepage, and at runtime the
          heading text changed every few seconds — re-announced by screen
          readers each time. Copy is taken verbatim from the <title> in
          index.html so there is no new claim here. */}
      <h1 className="sr-only">
        SKKU Global — web development and SecuScan security audits
      </h1>

      <div className="home-hero-container">
        {/* ── 3D Perspective Stage ── */}
        <div className="home-3d-perspective-stage">
          <motion.div
            ref={cardRef}
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              type: 'spring',
              stiffness: 90,
              damping: 14,
              delay: 0.1,
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg) translateZ(10px)`,
            }}
            className="home-3d-inner-box"
          >
            <div className={`home-3d-content-wrap ${isBrand ? 'is-centered' : ''}`}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={phraseIndex}
                  aria-hidden="true"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  className={`home-3d-title ${isBrand ? 'home-title-brand' : ''}`}
                >
                  {units.slice(0, visibleCount).map((unit, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 8, scale: 0.94 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                      style={{ color: unit.color }}
                      className={`home-3d-unit ${isBrand ? 'home-brand-letter' : 'home-3d-word'} ${
                        unit.isOrange ? 'home-text-orange' : ''
                      }`}
                    >
                      {unit.text}
                    </motion.span>
                  ))}

                  {/* Typewriter writing cursor */}
                  {visibleCount < units.length && (
                    <span className="home-writing-cursor" aria-hidden="true" />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
