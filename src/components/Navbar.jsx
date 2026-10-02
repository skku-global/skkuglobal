import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { ArrowRight, Menu, X } from 'lucide-react'

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-md border-b border-black/[0.06] shadow-[0_1px_8px_rgba(0,0,0,0.02)]'
          : 'bg-white/80 backdrop-blur-md border-b border-black/[0.04]'
      }`}
      style={{ height: '52px' }}
    >
      <div className="max-w-[1160px] mx-auto h-full px-6 md:px-10 flex items-center justify-between">
        {/* ── Left: Brand mark in italic editorial serif ── */}
        <Link
          to="/"
          className="flex items-center gap-1.5 group text-[#1D1D1F] hover:opacity-80 transition-opacity"
          aria-label="SKKU Global Home"
        >
          <span className="font-serif italic font-semibold text-2xl tracking-tight text-[#1D1D1F]">
            SKKU
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#6E2CF3] inline-block mb-1 group-hover:scale-125 transition-transform" />
        </Link>

        {/* ── Center: Minimal navigation links ── */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-[13.5px] font-medium tracking-[-0.01em] transition-colors py-1 ${
                  isActive
                    ? 'text-[#1D1D1F] font-semibold'
                    : 'text-[#6E6E73] hover:text-[#1D1D1F]'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* ── Right: Minimal pill action button ── */}
        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#1D1D1F] text-white text-[12.5px] font-medium tracking-tight hover:bg-[#6E2CF3] hover:shadow-[0_4px_14px_rgba(110,44,243,0.25)] transition-all"
          >
            <span>Start a project</span>
            <ArrowRight size={13} className="text-white/80" />
          </Link>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="md:hidden p-1.5 text-[#1D1D1F] hover:text-[#6E2CF3] transition-colors"
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
        <div className="md:hidden fixed top-[52px] left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-black/[0.08] shadow-xl px-6 py-6 transition-all animate-fadeIn">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-base font-medium py-2 border-b border-black/[0.04] flex items-center justify-between ${
                    isActive ? 'text-[#6E2CF3] font-semibold' : 'text-[#1D1D1F]'
                  }`
                }
              >
                <span>{link.label}</span>
                <ArrowRight size={14} className="text-[#6E6E73]" />
              </NavLink>
            ))}
            <div className="pt-3">
              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-[#6E2CF3] text-white font-medium text-sm shadow-[0_4px_16px_rgba(110,44,243,0.3)]"
              >
                <span>Start a project</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
