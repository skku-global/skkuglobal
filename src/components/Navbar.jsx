import { useEffect, useState } from 'react'
import './Navbar.css'

const links = [
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#vision', label: 'Vision' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  // Don't let the page scroll behind the open mobile menu
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // Escape closes the menu
  useEffect(() => {
    if (!open) return
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <header className="navbar">
      <nav className="nav-inner shell" aria-label="Main">
        <a href="#top" className="nav-logo" aria-label="SKKU Global — home">
          <img src="/brand/skku-green.png" alt="" width="112" height="108" />
        </a>

        <div className={`nav-links${open ? ' open' : ''}`}>
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className="nav-btn" onClick={() => setOpen(false)}>
            Start a project
          </a>
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
