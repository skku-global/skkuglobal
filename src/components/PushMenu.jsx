import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { X } from 'lucide-react'
import { waLink } from '../seo/siteMeta.js'
import './PushMenu.css'

export default function PushMenu({ isOpen, onClose }) {
  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  return (
    <aside
      className={`push-menu-drawer ${isOpen ? 'is-open' : ''}`}
      aria-label="Expanded Navigation Menu"
      aria-hidden={!isOpen}
    >
      <div className="push-menu-inner">
        {/* ── 1. Top Navbar in Black Header ── */}
        <div className="push-menu-header">
          {/* Left spacer for perfect centering of logo */}
          <div className="push-header-col-left" />

          {/* Middle: Logo (Static, not a link) */}
          <div className="push-header-col-center">
            <div className="push-brand-static" aria-label="SKKU Global">
              <span className="push-brand-text">SKKU</span>
              <span className="push-brand-dot" />
            </div>
          </div>

          {/* Right: Menu text + circular close button (X) */}
          <div className="push-header-col-right">
            <button
              type="button"
              className="push-close-btn"
              onClick={onClose}
              aria-label="Close menu"
            >
              <span className="push-close-label">Menu</span>
              <div className="push-close-circle">
                <X size={18} strokeWidth={2.4} />
              </div>
            </button>
          </div>
        </div>

        {/* ── 2. Three Columns Menu (Clean Project Spec) ── */}
        <div className="push-menu-grid">
          {/* Column 1: Primary Navigation */}
          <div className="push-menu-col">
            <Link to="/" className="push-menu-link" onClick={onClose}>
              Home
            </Link>
            <Link to="/services" className="push-menu-link" onClick={onClose}>
              Services
            </Link>
            <Link to="/work" className="push-menu-link" onClick={onClose}>
              Work
            </Link>
          </div>

          {/* Column 2: Studio & Contact */}
          <div className="push-menu-col">
            <Link to="/about" className="push-menu-link" onClick={onClose}>
              About
            </Link>
            <Link to="/contact" className="push-menu-link" onClick={onClose}>
              Contact
            </Link>
          </div>

          {/* Column 3: Team / Language / Socials / Meta */}
          <div className="push-menu-col push-menu-meta-col">
            <Link to="/contact" className="push-menu-link push-team-link" onClick={onClose}>
              Join the Team
            </Link>

            {/* Language Switcher (En active in orange, Es inactive) */}
            <div className="push-lang-row">
              <span className="push-lang-active">En</span>
              <span className="push-lang-inactive">Es</span>
            </div>

            {/* Social Icons (Rounded Squares matching reference) */}
            <div className="push-socials-row">
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="push-social-btn"
                aria-label="LinkedIn"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.59 1.59 0 1 0 0-3.18 1.59 1.59 0 0 0 0 3.18m1.4 9.74v-8.37H5.06v8.37h2.8z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="push-social-btn"
                aria-label="Instagram"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href={waLink('Hello SKKU Global, I want to discuss a project.')}
                target="_blank"
                rel="noreferrer"
                className="push-social-btn"
                aria-label="WhatsApp"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.28-2.42 5.84a8.19 8.19 0 0 1-5.82 2.41h-.01c-1.46 0-2.89-.39-4.14-1.13l-.3-.18-3.12.82.83-3.04-.2-.31a8.17 8.17 0 0 1-1.25-4.41c0-4.54 3.7-8.24 8.24-8.24m4.53 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06s-1.05-.39-2-1.23c-.74-.66-1.24-1.47-1.39-1.72s-.02-.38.11-.51c.11-.11.25-.29.37-.43.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.44s-.56-1.35-.77-1.85c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31s-.88.86-.88 2.1 1.02 2.44 1.16 2.63c.14.19 2.01 3.07 4.88 4.31.68.29 1.22.47 1.63.6.69.22 1.31.19 1.8.12.55-.08 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.22-.18-.47-.3" />
                </svg>
              </a>
            </div>

            {/* Direct Contact Micro-Links */}
            <div className="push-contact-meta">
              <a href="mailto:hello@skkuglobal.com" className="push-meta-email">
                hello@skkuglobal.com
              </a>
              <span className="push-meta-rc">
                CAC RC 7306232 · Ibadan, Nigeria
              </span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}
