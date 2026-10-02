import { useState, useEffect, useRef } from 'react'
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom'
import './styles/globals.css'
import Navbar from './components/Navbar'
import PushMenu from './components/PushMenu'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import Home from './pages/Home'
import Work from './pages/Work'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import ContactPage from './pages/ContactPage'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import NotFound from './pages/NotFound'

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
      const timer = setTimeout(() => {
        const delayedEl = document.getElementById(id)
        if (delayedEl) {
          delayedEl.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
      return () => clearTimeout(timer)
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

function ScrollReveal() {
  const { pathname } = useLocation()

  useEffect(() => {
    const timerId = setTimeout(() => {
      const els = document.querySelectorAll('.animate:not(.is-visible)')
      if (!els.length) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible')
              observer.unobserve(entry.target)
            }
          })
        },
        {
          threshold: 0.08,
          rootMargin: '0px 0px -40px 0px',
        },
      )

      els.forEach((el) => observer.observe(el))
      return () => observer.disconnect()
    }, 50)

    return () => clearTimeout(timerId)
  }, [pathname])

  return null
}

export function AppShell() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()
  const scrollPosRef = useRef(0)

  // Close menu on route navigation
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  // Lock body scroll when push menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const handleOpenMenu = () => {
    scrollPosRef.current = window.scrollY
    if (window.scrollY > 0) {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
    setMenuOpen(true)
  }

  const handleCloseMenu = () => {
    setMenuOpen(false)
    if (scrollPosRef.current > 0) {
      window.scrollTo({ top: scrollPosRef.current, behavior: 'instant' })
    }
  }

  return (
    <div className={`skku-site-shell ${menuOpen ? 'menu-active' : ''}`}>
      <a href="#main" className="skip-link">Skip to content</a>

      {/* ── 1. BLACK PUSH-DOWN MENU DRAWER (Revealed at top) ── */}
      <PushMenu isOpen={menuOpen} onClose={handleCloseMenu} />

      {/* ── 2. THE WHOLE WHITE PAGE CANVAS (Slides down on open) ── */}
      <div
        className={`skku-page-canvas ${menuOpen ? 'canvas-pushed canvas-is-pushed' : ''}`}
      >
        <Navbar onOpen={handleOpenMenu} isHidden={menuOpen} />
        <ScrollToTop />
        <ScrollReveal />

        <main id="main">
          <Routes>
            <Route path="/"         element={<Home />} />
            <Route path="/work"     element={<Work />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about"    element={<AboutPage />} />
            <Route path="/contact"  element={<ContactPage />} />
            <Route path="/support"  element={<ContactPage />} />
            <Route path="/privacy"  element={<Privacy />} />
            <Route path="/terms"    element={<Terms />} />
            <Route path="/home"     element={<Navigate to="/" replace />} />
            <Route path="/projects" element={<Navigate to="/work" replace />} />
            <Route path="*"         element={<NotFound />} />
          </Routes>
        </main>

        <WhatsAppFloat />
        <Footer />

        {/* Soft overlay on pushed canvas: clicking anywhere glides canvas back up */}
        {menuOpen && (
          <div
            className="canvas-pushed-dimmer"
            onClick={handleCloseMenu}
            aria-label="Click to close menu and return to page"
          />
        )}
      </div>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  )
}
