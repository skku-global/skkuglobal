import { useState, useEffect, useRef } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, X, ArrowUpRight, ChevronRight } from 'lucide-react'
import { waLink } from '../seo/siteMeta.js'
import './Navbar.css'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [bagOpen, setBagOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const searchInputRef = useRef(null)
  const { pathname } = useLocation()

  // Close menus on route change
  useEffect(() => {
    setMobileOpen(false)
    setSearchOpen(false)
    setBagOpen(false)
  }, [pathname])

  // Focus search input when search overlay opens
  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => searchInputRef.current?.focus(), 100)
    }
  }, [searchOpen])

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSearchOpen(false)
        setBagOpen(false)
        setMobileOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const quickLinks = [
    { label: 'SecuScan Vulnerability Audits', to: '/services#secuscan' },
    { label: 'Web & SaaS Engineering', to: '/services#engineering' },
    { label: 'Selected Work & Case Studies', to: '/work' },
    { label: 'Studio Leadership & Ethics', to: '/about' },
    { label: 'Direct Client Consultation', to: '/contact' },
  ]

  const filteredLinks = searchQuery.trim()
    ? quickLinks.filter((item) =>
        item.label.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : quickLinks

  return (
    <>
      <header className="apple-globalnav" role="banner">
        <div className="apple-globalnav-inner">
          {/* ── 1. STATIC BRAND LOGO (NON-LINK) ── */}
          <div className="apple-globalnav-brand" aria-label="SKKU Global">
            <span className="apple-brand-word">SKKU</span>
          </div>

          {/* ── 2. DESKTOP LINKS (12px SF Pro Apple Typography) ── */}
          <nav className="apple-globalnav-list" aria-label="Global Navigation">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `apple-globalnav-link ${isActive ? 'active' : ''}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `apple-globalnav-link ${isActive ? 'active' : ''}`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `apple-globalnav-link ${isActive ? 'active' : ''}`
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/work"
              className={({ isActive }) =>
                `apple-globalnav-link ${isActive ? 'active' : ''}`
              }
            >
              Work
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `apple-globalnav-link ${isActive ? 'active' : ''}`
              }
            >
              Contact
            </NavLink>
            <NavLink
              to="/support"
              className={({ isActive }) =>
                `apple-globalnav-link ${isActive ? 'active' : ''}`
              }
            >
              Support
            </NavLink>
          </nav>

          {/* ── 3. RIGHT UTILITIES (Search & Bag/Consultation) ── */}
          <div className="apple-globalnav-utils">
            {/* Search Trigger */}
            <button
              type="button"
              className="apple-globalnav-icon-btn"
              onClick={() => {
                setSearchOpen(!searchOpen)
                setBagOpen(false)
              }}
              aria-label={searchOpen ? 'Close search' : 'Search skkuglobal.com'}
            >
              <Search size={14} strokeWidth={2} />
            </button>

            {/* Bag / Studio Briefing Trigger */}
            <button
              type="button"
              className="apple-globalnav-icon-btn"
              onClick={() => {
                setBagOpen(!bagOpen)
                setSearchOpen(false)
              }}
              aria-label="Studio Briefing & Engagement"
            >
              <ShoppingBag size={14} strokeWidth={2} />
            </button>

            {/* Mobile Apple 2-Line Hamburger */}
            <button
              type="button"
              className={`apple-globalnav-burger ${mobileOpen ? 'open' : ''}`}
              onClick={() => {
                setMobileOpen(!mobileOpen)
                setSearchOpen(false)
                setBagOpen(false)
              }}
              aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
              aria-expanded={mobileOpen}
            >
              <span className="burger-line burger-line-top" />
              <span className="burger-line burger-line-bottom" />
            </button>
          </div>
        </div>

        {/* ── APPLE BAG / CONSULTATION DROPDOWN ── */}
        {bagOpen && (
          <div className="apple-bag-dropdown">
            <div className="apple-bag-content">
              <p className="apple-bag-title">Your Studio Briefing</p>
              <p className="apple-bag-desc">
                Engage SKKU for platform engineering, security audits, or architectural advisories.
              </p>
              <div className="apple-bag-links">
                <Link to="/contact" className="apple-bag-item" onClick={() => setBagOpen(false)}>
                  <span>Schedule Consultation</span>
                  <ChevronRight size={13} />
                </Link>
                <Link to="/services#secuscan" className="apple-bag-item" onClick={() => setBagOpen(false)}>
                  <span>Request SecuScan Audit</span>
                  <ChevronRight size={13} />
                </Link>
                <a
                  href={waLink('Hello SKKU Global, I want to discuss a project.')}
                  target="_blank"
                  rel="noreferrer"
                  className="apple-bag-item"
                >
                  <span>Direct WhatsApp Channel</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* ── APPLE SEARCH OVERLAY ── */}
      {searchOpen && (
        <div className="apple-search-overlay" onClick={() => setSearchOpen(false)}>
          <div className="apple-search-container" onClick={(e) => e.stopPropagation()}>
            <div className="apple-search-input-wrap">
              <Search size={16} className="apple-search-input-icon" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search skkuglobal.com"
                className="apple-search-input"
              />
              <button
                type="button"
                className="apple-search-close-btn"
                onClick={() => setSearchOpen(false)}
                aria-label="Close search"
              >
                <X size={16} />
              </button>
            </div>

            <div className="apple-search-results">
              <span className="apple-search-heading">Quick Links</span>
              <ul className="apple-search-list">
                {filteredLinks.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      to={item.to}
                      className="apple-search-link"
                      onClick={() => setSearchOpen(false)}
                    >
                      <ChevronRight size={13} className="apple-search-link-icon" />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ── APPLE MOBILE NAVIGATION DRAWER ── */}
      {mobileOpen && (
        <div className="apple-mobile-menu">
          <div className="apple-mobile-menu-inner">
            {/* Mobile Search Bar */}
            <div className="apple-mobile-search-box">
              <Search size={15} style={{ color: '#86868b' }} />
              <input
                type="text"
                placeholder="Search skkuglobal.com"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="apple-mobile-search-input"
              />
            </div>

            {/* Apple Large Staggered Links */}
            <nav className="apple-mobile-nav">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `apple-mobile-item ${isActive ? 'active' : ''}`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `apple-mobile-item ${isActive ? 'active' : ''}`
                }
              >
                About
              </NavLink>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `apple-mobile-item ${isActive ? 'active' : ''}`
                }
              >
                Services
              </NavLink>
              <NavLink
                to="/work"
                className={({ isActive }) =>
                  `apple-mobile-item ${isActive ? 'active' : ''}`
                }
              >
                Work
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `apple-mobile-item ${isActive ? 'active' : ''}`
                }
              >
                Contact
              </NavLink>
              <NavLink
                to="/support"
                className={({ isActive }) =>
                  `apple-mobile-item ${isActive ? 'active' : ''}`
                }
              >
                Support
              </NavLink>
            </nav>

            {/* Mobile Quick Contacts */}
            <div className="apple-mobile-footer-meta">
              <a
                href={waLink('Hello SKKU Global, I want to discuss a project.')}
                target="_blank"
                rel="noreferrer"
                className="apple-mobile-contact-link"
              >
                <span>WhatsApp Briefing</span>
                <ArrowUpRight size={13} />
              </a>
              <a href="mailto:hello@skkuglobal.com" className="apple-mobile-contact-link">
                <span>hello@skkuglobal.com</span>
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
