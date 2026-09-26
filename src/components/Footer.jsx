import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Footer.css'

const directoryColumns = [
  {
    title: 'Navigation',
    links: [
      { label: 'Work & Case Studies', to: '/work' },
      { label: 'Services & Capabilities', to: '/#services' },
      { label: 'About SKKU Global', to: '/about' },
      { label: 'Support & Consultation', to: '/support' },
    ],
  },
  {
    title: 'Core Services',
    links: [
      { label: 'Custom Web & SaaS Engineering', to: '/#services' },
      { label: 'SecuScan Vulnerability Audits', to: '/work#secuscan' },
      { label: 'E-Commerce & Retail Tech', to: '/#services' },
      { label: 'Digital Defense & Infrastructure', to: '/#services' },
    ],
  },
  {
    title: 'Connect & Office',
    links: [
      { label: 'Lagos Tech Hub (Google Maps)', to: '/support#location' },
      { label: 'Chat on WhatsApp', href: 'https://wa.me/2349132686150?text=Hello%20SKKU%20Global' },
      { label: 'Email: admin@skkuglobal.com', href: 'mailto:admin@skkuglobal.com' },
      { label: 'Call: +234 913 268 6150', href: 'tel:+2349132686150' },
    ],
  },
]

const legalLinks = [
  { label: 'Privacy Policy', to: '/about' },
  { label: 'Terms of Use', to: '/about' },
]

export default function Footer() {
  const location = useLocation()
  const [openSection, setOpenSection] = useState(null)
  const currentYear = new Date().getFullYear()

  // Dynamic breadcrumb resolution
  const getBreadcrumbLabel = () => {
    switch (location.pathname) {
      case '/work':
        return 'Production Case Studies'
      case '/about':
        return 'About SKKU Global'
      case '/support':
      case '/contact':
        return 'Support & Locations'
      default:
        return 'Enterprise Web & Security'
    }
  }

  const toggleSection = (idx) => {
    setOpenSection((prev) => (prev === idx ? null : idx))
  }

  const handleLinkClick = (e, to) => {
    if (to && to.includes('#')) {
      const [path, targetHash] = to.split('#')
      if (location.pathname === path || (path === '/' && location.pathname === '')) {
        const el = document.getElementById(targetHash)
        if (el) {
          e.preventDefault()
          el.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }
  }

  return (
    <footer className="apple-footer" role="contentinfo">
      <div className="apple-footer-shell">
        {/* ── Concise Regulatory / Identity Note ── */}
        <section className="apple-footer-notes" aria-label="Regulatory Notice">
          <p>
            SKKU Global Technologies Limited is a CAC-registered tech solutions provider headquartered in the Lagos Tech Corridor, Nigeria, delivering full-stack web engineering and SecuScan security audits worldwide.
          </p>
        </section>

        {/* ── Divider ── */}
        <div className="apple-footer-divider" />

        {/* ── Breadcrumbs Bar ── */}
        <nav className="apple-footer-breadcrumbs" aria-label="Breadcrumbs">
          <Link to="/" className="apple-breadcrumb-home" aria-label="SKKU Global Home">
            <img
              src="/brand/skku-monogram.png"
              alt="SKKU Global"
              className="apple-breadcrumb-logo"
              width="14"
              height="14"
            />
          </Link>
          <span className="apple-breadcrumb-chevron" aria-hidden="true">›</span>
          <Link to="/" className="apple-breadcrumb-link">
            SKKU Global Technologies
          </Link>
          <span className="apple-breadcrumb-chevron" aria-hidden="true">›</span>
          <span className="apple-breadcrumb-current">
            {getBreadcrumbLabel()}
          </span>
        </nav>

        {/* ── Clean 3-Column Directory Grid ── */}
        <div className="apple-footer-directory">
          {directoryColumns.map((col, idx) => {
            const isOpen = openSection === idx
            return (
              <div key={col.title} className={`apple-footer-col ${isOpen ? 'open' : ''}`}>
                <button
                  type="button"
                  className="apple-footer-col-title"
                  onClick={() => toggleSection(idx)}
                  aria-expanded={isOpen}
                >
                  <span>{col.title}</span>
                  <span className="apple-footer-accordion-icon" aria-hidden="true">
                    +
                  </span>
                </button>

                <ul className="apple-footer-links-list">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      {link.href ? (
                        <a
                          href={link.href}
                          target={link.href.startsWith('http') ? '_blank' : undefined}
                          rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                          className="apple-footer-link"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          to={link.to}
                          className="apple-footer-link"
                          onClick={(e) => handleLinkClick(e, link.to)}
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {/* ── Divider ── */}
        <div className="apple-footer-divider" />

        {/* ── Legal Bar & Nigeria Region ── */}
        <div className="apple-footer-legal">
          <div className="apple-footer-copyright">
            Copyright © {currentYear} SKKU Global Technologies Limited. All rights reserved.
          </div>

          <ul className="apple-footer-legal-links">
            {legalLinks.map((item, idx) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  className="apple-legal-link"
                  onClick={(e) => handleLinkClick(e, item.to)}
                >
                  {item.label}
                </Link>
                {idx < legalLinks.length - 1 && (
                  <span className="apple-legal-separator" aria-hidden="true">
                    |
                  </span>
                )}
              </li>
            ))}
          </ul>

          <div className="apple-footer-region">
            <Link to="/support#location" className="apple-region-link">
              Nigeria
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
