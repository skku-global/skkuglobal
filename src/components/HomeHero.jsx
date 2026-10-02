import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import '../pages/Home.css'

const WORDS = [
  { text: 'We', isProblem: false },
  { text: 'are', isProblem: false },
  { text: 'here', isProblem: false },
  { text: 'to', isProblem: false },
  { text: 'solve', isProblem: false },
  { text: 'your', isProblem: false },
  { text: 'tech', isProblem: false },
  { text: 'problem.', isProblem: true },
]

export default function HomeHero() {
  const [visibleCount, setVisibleCount] = useState(0)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const cardRef = useRef(null)

  // Typewriter effect: reveal words one after the other like you are writing it
  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleCount((prev) => {
        if (prev < WORDS.length) {
          return prev + 1
        }
        clearInterval(timer)
        return prev
      })
    }, 180)

    return () => clearInterval(timer)
  }, [])

  // Interactive 3D tilt tracking for physical depth effect
  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ x: x * 12, y: -y * 12 })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
  }

  return (
    <section className="home-hero-section" aria-label="Hero Introduction">
      <div className="home-hero-container">
        {/* ── 3D Perspective Wrapper ── */}
        <div className="home-3d-perspective-stage">
          <motion.div
            ref={cardRef}
            initial={{ opacity: 0, scale: 0.88, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              type: 'spring',
              stiffness: 90,
              damping: 14,
              delay: 0.15,
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg) translateZ(20px)`,
            }}
            className="home-3d-inner-box"
          >
            {/* Ambient 3D highlights */}
            <div className="home-3d-surface-glare" aria-hidden="true" />

            <h1 className="home-3d-title">
              {WORDS.slice(0, visibleCount).map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.22, ease: 'easeOut' }}
                  className={`home-3d-word ${word.isProblem ? 'home-word-problem' : ''}`}
                >
                  {word.text}
                </motion.span>
              ))}

              {/* Typewriter writing cursor */}
              {visibleCount < WORDS.length && (
                <span className="home-writing-cursor" aria-hidden="true" />
              )}
            </h1>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
