import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import '../pages/Home.css'

// ─────────────────────────────────────────────────────────────────────────────
// HERO SLOGANS / ROTATING TEXTS SEQUENCE
// 1. "SKKU"
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
 * Parses phrase string into word objects with styling flags.
 * If word contains 'problem', highlights with #E65100.
 */
function parsePhraseWords(phrase) {
  if (typeof phrase === 'string') {
    const rawWords = phrase.trim().split(/\s+/)
    const isBrandOnly = phrase.trim() === 'SKKU'
    return rawWords.map((word) => {
      const isProblem = word.toLowerCase().includes('problem')
      return {
        text: word,
        isProblem,
        isBrand: isBrandOnly,
      }
    })
  }
  return []
}

export default function HomeHero() {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(0)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const cardRef = useRef(null)

  const currentWords = parsePhraseWords(HERO_PHRASES[phraseIndex])

  // 1. Word-by-word typewriter reveal for active phrase
  useEffect(() => {
    setVisibleCount(0)

    const timer = setInterval(() => {
      setVisibleCount((prev) => {
        if (prev < currentWords.length) {
          return prev + 1
        }
        clearInterval(timer)
        return prev
      })
    }, 180)

    return () => clearInterval(timer)
  }, [phraseIndex, currentWords.length])

  // 2. When animation completes, hold so visitor can read, then rotate to next phrase
  useEffect(() => {
    if (visibleCount === currentWords.length && currentWords.length > 0) {
      // Hold duration (SKKU holds ~2s, longer sentences hold ~2.5s)
      const holdDuration = phraseIndex === 0 ? 2000 : 2600

      const holdTimer = setTimeout(() => {
        setPhraseIndex((prev) => (prev + 1) % HERO_PHRASES.length)
      }, holdDuration)

      return () => clearTimeout(holdTimer)
    }
  }, [visibleCount, currentWords.length, phraseIndex])

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
            <div className="home-3d-content-wrap">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={phraseIndex}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  className={`home-3d-title ${phraseIndex === 0 ? 'home-title-brand' : ''}`}
                >
                  {currentWords.slice(0, visibleCount).map((word, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                      className={`home-3d-word ${word.isProblem ? 'home-word-problem' : ''} ${
                        word.isBrand ? 'home-word-brand' : ''
                      }`}
                    >
                      {word.text}
                    </motion.span>
                  ))}

                  {/* Typewriter writing cursor */}
                  {visibleCount < currentWords.length && (
                    <span className="home-writing-cursor" aria-hidden="true" />
                  )}
                </motion.h1>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
