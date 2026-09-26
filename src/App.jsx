import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom'
import './styles/globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Work from './pages/Work'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

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

function AppShell() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/"        element={<Home />} />
        <Route path="/work"    element={<Work />} />
        <Route path="/about"   element={<AboutPage />} />
        <Route path="/services" element={<Navigate to="/#services" replace />} />
        <Route path="/support" element={<ContactPage />} />
        <Route path="/contact" element={<Navigate to="/support" replace />} />
        {/* Catch-all → home */}
        <Route path="*"        element={<Home />} />
      </Routes>
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
