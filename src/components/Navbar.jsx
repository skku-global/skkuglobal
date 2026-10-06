import { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar({ onOpen, isHidden }) {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  // Scroll detection for subtle background blur when scrolled down
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleOpenEvaluation = () => {
    window.dispatchEvent(new CustomEvent('open-evaluation-modal'))
  }

  const isHeroMode = isHomePage && !scrolled

  return (
    <header
      className={`skku-header ${scrolled ? 'scrolled' : ''} ${isHeroMode ? 'is-hero-mode' : 'is-light-mode'} ${isHidden ? 'is-hidden' : ''}`}
      role="banner"
    >
      <div className="skku-header-inner">
        {/* ── Left: Logo ── */}
        <div className="skku-header-col-left">
          <Link to="/" className="skku-brand-link" aria-label="SKKU Global Home">
            <span className="skku-brand-text">SKKU</span>
            <span className="skku-brand-dot" />
          </Link>
        </div>

        {/* ── Right: Get Free Evaluation Button + Minimal Menu ── */}
        <div className="skku-header-col-right">
          <button
            type="button"
            className="skku-nav-eval-btn"
            onClick={handleOpenEvaluation}
            aria-label="Get free evaluation"
          >
            <span>Get free evaluation</span>
            <span className="skku-nav-arrow" aria-hidden="true">
              <svg viewBox="0 0 16 16">
                <path d="M8.66657 11.0568L12.6666 7.05681L13.6094 7.99962L8.4713 13.1377L7.52849 13.1377L2.39042 7.99962L3.33323 7.05681L7.33323 11.0568L7.33323 2.66629L8.66657 2.66629L8.66657 11.0568Z" />
                <path d="M8.66657 11.0568L12.6666 7.05681L13.6094 7.99962L8.4713 13.1377L7.52849 13.1377L2.39042 7.99962L3.33323 7.05681L7.33323 11.0568L7.33323 2.66629L8.66657 2.66629L8.66657 11.0568Z" />
              </svg>
            </span>
          </button>

          <button
            type="button"
            className="skku-menu-btn"
            onClick={onOpen}
            aria-label="Open menu"
          >
            <span className="skku-menu-label">Menu</span>
            <div className="skku-menu-circle">
              <span className="skku-menu-line" />
              <span className="skku-menu-line" />
            </div>
          </button>
        </div>
      </div>
    </header>
  )
}
