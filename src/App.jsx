import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import './styles/globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Work from './pages/Work'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  // Scroll to top on every route change
  // (using a side-effect but we don't need useEffect since this runs on render)
  if (typeof window !== 'undefined') {
    window.scrollTo(0, 0)
  }
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
        <Route path="/contact" element={<ContactPage />} />
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
