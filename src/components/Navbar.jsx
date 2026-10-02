import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { ArrowRight, Menu, X } from 'lucide-react'
import './Navbar.css'

const navLinks = [
  { to: '/services', label: 'Services' },
  { to: '/work', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  // Scroll detection for subtle border shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`apple-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="apple-header-inner">
        {/* ── Left: Brand mark in italic editorial serif ── */}
        <Link to="/" className="apple-brand-link" aria-label="SKKU Global Home">
          <span className="apple-brand-text">SKKU</span>
          <span className="apple-brand-dot" />
        </Link>

        {/* ── Center: Minimal navigation links ── */}
        <nav className="apple-nav-list" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `apple-nav-item ${isActive ? 'active' : ''}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* ── Right: Minimal pill action button ── */}
        <div className="apple-header-actions">
          <Link to="/contact" className="apple-cta-pill">
            <span>Start a project</span>
            <ArrowRight size={13} />
          </Link>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="apple-burger-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* ── Mobile Navigation Drawer ── */}
      {mobileOpen && (
        <div className="apple-mobile-drawer">
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `apple-mobile-link ${isActive ? 'active' : ''}`
                }
              >
                <span>{link.label}</span>
                <ArrowRight size={14} style={{ color: 'var(--text-titanium)' }} />
              </NavLink>
            ))}
            <div style={{ paddingTop: '16px' }}>
              <Link
                to="/contact"
                className="btn-apple-violet"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <span>Start a project</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
