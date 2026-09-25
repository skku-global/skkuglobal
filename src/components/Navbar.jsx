import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const links = [
  { to: '/work',    label: 'Work' },
  { to: '/about',   label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname }            = useLocation()

  // Every nav link closes the menu itself; this only covers a browser
  // back/forward taken with it still open, which would otherwise leave the
  // overlay hanging over the new route. Adjusting state during render is
  // React's documented pattern for this — an effect cascades an extra render.
  const [lastPath, setLastPath] = useState(pathname)
  if (pathname !== lastPath) {
    setLastPath(pathname)
    setOpen(false)
  }

  // Scroll shadow
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  // Escape key closes menu
  useEffect(() => {
    if (!open) return
    const fn = (e) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', fn)
    return () => window.removeEventListener('keydown', fn)
  }, [open])

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <nav className="nav-inner shell" aria-label="Main">
        <Link to="/" className="nav-logo" aria-label="SKKU Global — home">
          <img src="/brand/skku-green.png" alt="" width="96" height="92" />
        </Link>

        <div className={`nav-links${open ? ' open' : ''}`} role="navigation">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="nav-btn"
            onClick={() => setOpen(false)}
          >
            Start a project
          </Link>
        </div>

        <button
          type="button"
          className="nav-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`bar${open ? ' x1' : ''}`} />
          <span className={`bar${open ? ' hide' : ''}`} />
          <span className={`bar${open ? ' x2' : ''}`} />
        </button>
      </nav>
    </header>
  )
}
