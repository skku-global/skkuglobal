import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Globe, ChevronDown, ArrowUpRight } from 'lucide-react'
import { waLink } from '../seo/siteMeta.js'
import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  // Track expanded accordion sections on mobile (keyed by section index)
  const [openSections, setOpenSections] = useState({})

  const toggleSection = (index) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  const directorySections = [
    {
      title: 'Services & Engineering',
      links: [
        { label: 'Web & SaaS Architecture', to: '/services#engineering' },
        { label: 'SecuScan Vulnerability Audits', to: '/services#secuscan' },
        { label: 'E-Commerce Infrastructures', to: '/services#ecommerce' },
        { label: 'Platform Security & Hardening', to: '/services#security' },
        { label: 'Cloud & API Systems', to: '/services#cloud' },
      ],
    },
    {
      title: 'Selected Work',
      links: [
        { label: 'SecuScan Engine', to: '/work#secuscan' },
        { label: 'Luxe Hair Co.', to: '/work#luxe-hair' },
        { label: 'CarBreezy Auto', to: '/work#carbreezy' },
        { label: 'JuniCash Wallet', to: '/work#junicash' },
        { label: 'All Case Studies', to: '/work' },
      ],
    },
    {
      title: 'Studio & Philosophy',
      links: [
        { label: 'About SKKU', to: '/about' },
        { label: 'Leadership & Founder', to: '/about#founder' },
        { label: 'Ethics & Verification', to: '/about#philosophy' },
        { label: 'Three Core Principles', to: '/about#principles' },
        { label: 'Technical Advisories', to: '/about#advisories' },
      ],
    },
    {
      title: 'Client Services',
      links: [
        { label: 'Project Consultation', to: '/contact' },
        { label: 'Client Support Portal', to: '/support' },
        { label: 'Security Advisories', to: '/services#secuscan' },
        { label: 'System Uptime Status', to: '/support#status' },
        { label: 'Technical FAQ', to: '/contact#faq' },
      ],
    },
    {
      title: 'SKKU Values & Legal',
      links: [
        { label: 'Privacy First Architecture', to: '/privacy' },
        { label: 'Responsible Engineering', to: '/about#principles' },
        { label: 'CAC Compliance (RC 7306232)', to: '/about#compliance' },
        { label: 'Terms of Use', to: '/terms' },
        { label: 'Privacy Policy', to: '/privacy' },
      ],
    },
  ]

  return (
    <footer className="apple-globalfooter" role="contentinfo">
      <div className="apple-globalfooter-content">
        {/* ── 1. FOOTNOTES (Apple Iconic Numbered Disclaimers) ── */}
        <section className="apple-footer-footnotes" aria-label="Footnotes">
          <ol>
            <li>
              SecuScan automated vulnerability assessments and code telemetry require active staging credentials and client DNS verification.
            </li>
            <li>
              Production deployments include 90 days of zero-regression warranty and platform hardening monitoring.
            </li>
            <li>
              Registered with the Corporate Affairs Commission (RC 7306232) in Nigeria, deploying systems globally across Africa, Europe, and North America.
            </li>
          </ol>
        </section>

        {/* ── 2. BREADCRUMB (Apple Signature Breadcrumb Trail) ── */}
        <nav className="apple-footer-breadcrumbs" aria-label="Breadcrumbs">
          <span className="apple-breadcrumb-home">SKKU</span>
          <span className="apple-breadcrumb-separator">›</span>
          <span className="apple-breadcrumb-current">Digital Engineering &amp; Platform Architecture</span>
        </nav>

        {/* ── 3. DIRECTORY COLUMNS (5 Columns | Accordion on Mobile) ── */}
        <nav className="apple-footer-directory" aria-label="Directory">
          {directorySections.map((section, idx) => {
            const isOpen = !!openSections[idx]
            return (
              <div
                key={idx}
                className={`apple-directory-column ${isOpen ? 'is-open' : ''}`}
              >
                <div
                  className="apple-directory-header"
                  onClick={() => toggleSection(idx)}
                  role="button"
                  tabIndex={0}
                  aria-expanded={isOpen}
                >
                  <h3 className="apple-directory-title">{section.title}</h3>
                  <ChevronDown size={14} className="apple-directory-chevron" />
                </div>

                <ul className="apple-directory-list">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx} className="apple-directory-item">
                      <Link to={link.to} className="apple-directory-link">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </nav>

        {/* ── 4. DIRECT ENGAGEMENT NOTICE ── */}
        <section className="apple-footer-engagement">
          <p>
            More ways to engage: Email{' '}
            <a href="mailto:hello@skkuglobal.com" className="apple-footer-inline-link">
              hello@skkuglobal.com
            </a>
            , connect via{' '}
            <a
              href={waLink('Hello SKKU Global, I want to discuss a project.')}
              target="_blank"
              rel="noreferrer"
              className="apple-footer-inline-link"
            >
              WhatsApp (+234 814 745 5285)
            </a>
            , or schedule a{' '}
            <Link to="/contact" className="apple-footer-inline-link">
              technical briefing
            </Link>
            .
          </p>
        </section>

        {/* ── 5. LEGAL & COPYRIGHT ROW ── */}
        <section className="apple-footer-legal">
          <div className="apple-legal-copyright">
            Copyright © {currentYear} SKKU Global Inc. All rights reserved.
          </div>

          <div className="apple-legal-links">
            <Link to="/privacy" className="apple-legal-link">Privacy Policy</Link>
            <span className="apple-legal-separator">|</span>
            <Link to="/terms" className="apple-legal-link">Terms of Use</Link>
            <span className="apple-legal-separator">|</span>
            <Link to="/support" className="apple-legal-link">Sales &amp; Consultations</Link>
            <span className="apple-legal-separator">|</span>
            <Link to="/services#security" className="apple-legal-link">Security Advisory</Link>
            <span className="apple-legal-separator">|</span>
            <Link to="/services" className="apple-legal-link">Site Map</Link>
          </div>

          <div className="apple-legal-locale">
            <Globe size={13} style={{ color: '#6e6e73' }} />
            <span>Nigeria (English)</span>
          </div>
        </section>
      </div>
    </footer>
  )
}
