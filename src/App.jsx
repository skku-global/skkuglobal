import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom'
import './styles/globals.css'
import Navbar from './components/Navbar'
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

// Watches every .animate element and adds .is-visible when it enters the
// viewport, triggering the scroll-reveal fadeUp animation from globals.css.
// Rendered as a null component so it can live inside AppShell's JSX tree.
function ScrollReveal() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Small delay so newly-routed DOM elements are painted before we query
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
          // Reveal once element is 8% into the viewport
          threshold: 0.08,
          // Catch elements just below the fold
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
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <Navbar />
      <ScrollToTop />
      <ScrollReveal />
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
        {/* Anything else is a real 404, not a silent redirect to home */}
        <Route path="*"         element={<NotFound />} />
      </Routes>
      <WhatsAppFloat />
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  )
}
