import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import './Preloader.css'

export default function Preloader() {
  const [loading, setLoading] = useState(true)
  const [exiting, setExiting] = useState(false)
  const location = useLocation()

  // Initial page load animation
  useEffect(() => {
    // Check if the page has already completed initial load in this session
    const timer = setTimeout(() => {
      setExiting(true)
      const exitTimer = setTimeout(() => {
        setLoading(false)
      }, 700) // Duration of slide-up transition
      return () => clearTimeout(exitTimer)
    }, 1100) // Display company name animation for 1.1s

    return () => clearTimeout(timer)
  }, [])

  // Route change loading pulse
  useEffect(() => {
    // When route changes, quickly animate top brand progress bar
    const progressEl = document.getElementById('route-loader-bar')
    if (progressEl) {
      progressEl.classList.remove('running')
      void progressEl.offsetWidth // Trigger reflow
      progressEl.classList.add('running')
    }
  }, [location.pathname])

  if (!loading) {
    return (
      <div id="route-loader-bar" className="route-loader-bar" aria-hidden="true" />
    )
  }

  const companyLetters = [
    { char: 'S', delay: '0.05s' },
    { char: 'K', delay: '0.12s' },
    { char: 'K', delay: '0.19s' },
    { char: 'U', delay: '0.26s' },
    { char: ' ', delay: '0.30s', space: true },
    { char: 'G', delay: '0.35s' },
    { char: 'L', delay: '0.42s' },
    { char: 'O', delay: '0.49s' },
    { char: 'B', delay: '0.56s' },
    { char: 'A', delay: '0.63s' },
    { char: 'L', delay: '0.70s' },
  ]

  return (
    <>
      <div id="route-loader-bar" className="route-loader-bar" aria-hidden="true" />

      <aside
        className={`brand-preloader-curtain ${exiting ? 'is-exiting' : ''}`}
        aria-label="Loading SKKU Global"
        role="status"
        aria-live="polite"
      >
        {/* Ambient Dark Atmospheric Lights */}
        <div className="preloader-bg-ambient" aria-hidden="true">
          <div className="preloader-glow-orb glow-center" />
          <div className="preloader-grid-pattern" />
        </div>

        <div className="preloader-content-wrap">
          {/* Animated Glowing Monogram */}
          <div className="preloader-monogram-container">
            <div className="monogram-glow-ring" />
            <img
              src="/brand/skku-monogram.png"
              alt="SKKU Emblem"
              className="preloader-monogram-img"
              width="44"
              height="44"
            />
          </div>

          {/* Staggered Animated Company Name */}
          <div className="preloader-name-row" aria-label="SKKU GLOBAL">
            {companyLetters.map((item, index) =>
              item.space ? (
                <span key={index} className="preloader-letter-space" />
              ) : (
                <span
                  key={index}
                  className="preloader-letter-mask"
                  style={{ animationDelay: item.delay }}
                >
                  <span
                    className="preloader-letter"
                    style={{ animationDelay: item.delay }}
                  >
                    {item.char}
                  </span>
                </span>
              )
            )}
          </div>

          {/* Agency Subtitle */}
          <div className="preloader-sub-row">
            <span className="preloader-dot" />
            <span className="preloader-subtext">SOFTWARE ENGINEERING &amp; SECURITY</span>
            <span className="preloader-dot" />
          </div>

          {/* Glowing Animated Progress Sweep */}
          <div className="preloader-progress-track">
            <div className="preloader-progress-fill" />
          </div>
        </div>
      </aside>
    </>
  )
}
