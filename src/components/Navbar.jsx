import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { ArrowRight, Menu, X } from 'lucide-react'
import './Navbar.css'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  // Scroll detection for subtle shadow
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
        {/* ── 1. LEFT NAV: Home, About ── */}
        <nav className="apple-nav-left" aria-label="Left Navigation">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `apple-nav-item ${isActive ? 'active' : ''}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `apple-nav-item ${isActive ? 'active' : ''}`
            }
          >
            About
          </NavLink>
        </nav>

        {/* Mobile Spacer (keeps logo centered on mobile) */}
        <div className="mobile-grid-spacer" />

        {/* ── 2. CENTER: LOGO BETWEEN THEM (Static, not a link) ── */}
        <div className="apple-nav-center">
          <div className="apple-brand-mark" aria-label="SKKU Global">
            <span className="apple-brand-text">SKKU</span>
            <span className="apple-brand-dot" />
          </div>
        </div>

        {/* ── 3. RIGHT NAV: Services, Work ── */}
        <div className="apple-nav-right">
          <nav className="apple-nav-right-links" aria-label="Right Navigation">
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `apple-nav-item ${isActive ? 'active' : ''}`
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/work"
              className={({ isActive }) =>
                `apple-nav-item ${isActive ? 'active' : ''}`
              }
            >
              Work
            </NavLink>
          </nav>

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
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `apple-mobile-link ${isActive ? 'active' : ''}`
              }
            >
              <span>Home</span>
              <ArrowRight size={14} style={{ color: 'var(--text-titanium)' }} />
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `apple-mobile-link ${isActive ? 'active' : ''}`
              }
            >
              <span>About</span>
              <ArrowRight size={14} style={{ color: 'var(--text-titanium)' }} />
            </NavLink>

            <NavLink
              to="/services"
              className={({ isActive }) =>
                `apple-mobile-link ${isActive ? 'active' : ''}`
              }
            >
              <span>Services</span>
              <ArrowRight size={14} style={{ color: 'var(--text-titanium)' }} />
            </NavLink>

            <NavLink
              to="/work"
              className={({ isActive }) =>
                `apple-mobile-link ${isActive ? 'active' : ''}`
              }
            >
              <span>Work</span>
              <ArrowRight size={14} style={{ color: 'var(--text-titanium)' }} />
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `apple-mobile-link ${isActive ? 'active' : ''}`
              }
            >
              <span>Contact</span>
              <ArrowRight size={14} style={{ color: 'var(--text-titanium)' }} />
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  )
}
