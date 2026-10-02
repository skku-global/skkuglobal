import { useState, useEffect } from 'react'
import './Navbar.css'

export default function Navbar({ onOpen, isHidden }) {
  const [scrolled, setScrolled] = useState(false)

  // Scroll detection for subtle background blur when scrolled down
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`skku-header ${scrolled ? 'scrolled' : ''} ${isHidden ? 'is-hidden' : ''}`}
      role="banner"
    >
      <div className="skku-header-inner">
        {/* ── Left Spacer (guarantees mathematical centering of middle logo) ── */}
        <div className="skku-header-col-left" />

        {/* ── Middle: Logo (Static, not a link) ── */}
        <div className="skku-header-col-center">
          <div className="skku-brand-static" aria-label="SKKU Global">
            <span className="skku-brand-text">SKKU</span>
            <span className="skku-brand-dot" />
          </div>
        </div>

        {/* ── Right: Menu text + circular hamburger button (Matches Image 1) ── */}
        <div className="skku-header-col-right">
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
