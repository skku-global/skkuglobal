import { useState, useEffect, useRef } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const navLinks = [
  { to: '/work', label: 'Work' },
  { to: '/work#secuscan', label: 'SecuScan' },
  { to: '/#services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/#location', label: 'Where to Find Us' },
  { to: '/contact', label: 'Contact' },
]

const searchSuggestions = [
  { title: 'SecuScan Vulnerability Scanner', category: 'Cybersecurity SaaS', url: '/work#secuscan' },
  { title: 'Luxe Hair Co E-Commerce Store', category: 'E-Commerce Platform', url: '/work' },
  { title: 'Web & Full-Stack Engineering', category: 'Services', url: '/#services' },
  { title: 'Security Audits & Penetration Testing', category: 'Services', url: '/#services' },
  { title: 'Google Maps & Lagos HQ', category: 'Headquarters & Location', url: '/#location' },
  { title: 'Schedule Technical Consultation', category: 'Direct Contact', url: '/contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [scrolled, setScrolled] = useState(false)
  const searchInputRef = useRef(null)
  const { pathname, hash } = useLocation()

  // Every nav link closes the menu itself; this only covers a browser
  // back/forward taken with it still open. Adjusting state during render is
  // React's documented pattern for this — an effect cascades an extra render.
  const routeKey = pathname + hash
  const [lastRoute, setLastRoute] = useState(routeKey)
  if (routeKey !== lastRoute) {
    setLastRoute(routeKey)
    setMobileOpen(false)
    setSearchOpen(false)
    setSearchQuery('')
  }

  // Scroll shadow effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Auto focus search input when opened
  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      setTimeout(() => searchInputRef.current?.focus(), 50)
    }
  }, [searchOpen])

  // Escape key handler
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileOpen(false)
        setSearchOpen(false)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  // Handle smooth scroll for anchor links
  const handleNavClick = (e, to) => {
    setMobileOpen(false)
    setSearchOpen(false)

    if (to.includes('#')) {
      const [path, targetHash] = to.split('#')
      if (pathname === path || (path === '/' && pathname === '')) {
        e.preventDefault()
        const el = document.getElementById(targetHash)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }
  }

  // Filter search results
  const filteredResults = searchQuery.trim()
    ? searchSuggestions.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : searchSuggestions

  return (
    <>
      <header className={`apple-navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="apple-nav-container">
          {/* ── Left: Logo ── */}
          <Link to="/" className="apple-nav-logo" aria-label="SKKU Global Home">
            <img
              src="/brand/skku-monogram.png"
              alt="SKKU Global"
              className="apple-nav-logo-img"
              width="20"
              height="20"
            />
          </Link>

          {/* ── Center: Minimalist Apple-Style Links ── */}
          <nav className="apple-nav-links" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                className={({ isActive }) =>
                  `apple-nav-link ${isActive && !link.to.includes('#') ? 'active' : ''}`
                }
                onClick={(e) => handleNavClick(e, link.to)}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* ── Right: Search Icon ── */}
          <div className="apple-nav-actions">
            <button
              type="button"
              className={`apple-nav-icon-btn ${searchOpen ? 'active' : ''}`}
              aria-label={searchOpen ? 'Close search' : 'Open search'}
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="apple-search-svg"
              >
                <path
                  d="M15.5 15.5L11.5 11.5M13.1667 7.33333C13.1667 10.555 10.555 13.1667 7.33333 13.1667C4.11167 13.1667 1.5 10.555 1.5 7.33333C1.5 4.11167 4.11167 1.5 7.33333 1.5C10.555 1.5 13.1667 4.11167 13.1667 7.33333Z"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className="apple-nav-mobile-toggle"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              onClick={() => {
                setMobileOpen(!mobileOpen)
                setSearchOpen(false)
              }}
            >
              <span className={`apple-burger-line line-1 ${mobileOpen ? 'open' : ''}`} />
              <span className={`apple-burger-line line-2 ${mobileOpen ? 'open' : ''}`} />
            </button>
          </div>
        </div>

        {/* ── Apple-Style Search Dropdown / Spotlight Overlay ── */}
        <div className={`apple-search-overlay ${searchOpen ? 'open' : ''}`}>
          <div className="apple-search-container">
            <div className="apple-search-input-wrapper">
              <svg width="15" height="15" viewBox="0 0 17 17" fill="none" className="search-input-icon">
                <path
                  d="M15.5 15.5L11.5 11.5M13.1667 7.33333C13.1667 10.555 10.555 13.1667 7.33333 13.1667C4.11167 13.1667 1.5 10.555 1.5 7.33333C1.5 4.11167 4.11167 1.5 7.33333 1.5C10.555 1.5 13.1667 4.11167 13.1667 7.33333Z"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search platforms, security audits, or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="apple-search-input"
              />
              {searchQuery && (
                <button
                  type="button"
                  className="apple-search-clear"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear input"
                >
                  ✕
                </button>
              )}
            </div>

            <div className="apple-search-results">
              <span className="results-label">
                {searchQuery ? 'SEARCH RESULTS' : 'QUICK LINKS'}
              </span>
              <ul className="results-list">
                {filteredResults.map((item) => (
                  <li key={item.title}>
                    <Link
                      to={item.url}
                      className="result-item"
                      onClick={(e) => handleNavClick(e, item.url)}
                    >
                      <span className="result-arrow">›</span>
                      <span className="result-title">{item.title}</span>
                      <span className="result-category">{item.category}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ── Apple-Style Fullscreen Mobile Navigation Drawer ── */}
        <div className={`apple-mobile-menu ${mobileOpen ? 'open' : ''}`}>
          <div className="apple-mobile-inner">
            <nav className="apple-mobile-links">
              {navLinks.map((link, idx) => (
                <NavLink
                  key={link.label}
                  to={link.to}
                  className="apple-mobile-link"
                  style={{ animationDelay: `${idx * 0.05 + 0.1}s` }}
                  onClick={(e) => handleNavClick(e, link.to)}
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            <div className="apple-mobile-footer">
              <a
                href="https://wa.me/2349132686150?text=Hello%20SKKU%20Global"
                target="_blank"
                rel="noreferrer"
                className="apple-mobile-contact-btn"
              >
                Chat on WhatsApp ↗
              </a>
              <p className="apple-mobile-copy">
                SKKU Global Technologies Limited · CAC-Registered
              </p>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
