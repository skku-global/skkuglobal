import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { waLink } from '../seo/siteMeta.js'
import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="apple-footer-wrap" role="contentinfo">
      <div className="apple-footer-container">
        {/* ── Studio Headline & Status ── */}
        <div className="apple-footer-top">
          <div>
            <div className="apple-footer-brand-title">
              <span className="brand-name">SKKU Global</span>
              <span className="brand-dot" />
            </div>
            <p className="apple-footer-desc">
              Thoughtful digital systems engineered for brands that refuse to blend in. CAC-registered (RC 7306232) in Nigeria, deploying globally.
            </p>
          </div>

          <div>
            <span className="apple-footer-badge">
              <span className="pulse-emerald" />
              <span>Studio Accepting Q4 &amp; 2027 Commissions</span>
            </span>
          </div>
        </div>

        {/* ── 4 Clean Columns Directory ── */}
        <div className="apple-footer-grid">
          {/* Column 1: Services */}
          <div className="apple-footer-col">
            <h4>Services</h4>
            <ul className="apple-footer-links">
              <li>
                <Link to="/services#engineering">Web &amp; SaaS Engineering</Link>
              </li>
              <li>
                <Link to="/services#secuscan">SecuScan Audits</Link>
              </li>
              <li>
                <Link to="/services#ecommerce">E-Commerce Systems</Link>
              </li>
              <li>
                <Link to="/services#security">Platform Hardening</Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Selected Work */}
          <div className="apple-footer-col">
            <h4>Selected Work</h4>
            <ul className="apple-footer-links">
              <li>
                <Link to="/work#secuscan">SecuScan Engine</Link>
              </li>
              <li>
                <Link to="/work#luxe-hair">Luxe Hair Co</Link>
              </li>
              <li>
                <Link to="/work#carbreezy">CarBreezy Auto</Link>
              </li>
              <li>
                <Link to="/work#junicash">JuniCash Wallet</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Studio */}
          <div className="apple-footer-col">
            <h4>Studio</h4>
            <ul className="apple-footer-links">
              <li>
                <Link to="/about">About SKKU</Link>
              </li>
              <li>
                <Link to="/about#philosophy">Philosophy &amp; Ethics</Link>
              </li>
              <li>
                <Link to="/about#principles">Three Core Principles</Link>
              </li>
              <li>
                <Link to="/about#founder">Founder Leadership</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Legal */}
          <div className="apple-footer-col">
            <h4>Contact &amp; Legal</h4>
            <ul className="apple-footer-links">
              <li>
                <Link to="/contact" style={{ fontWeight: 600 }}>Start a Project →</Link>
              </li>
              <li>
                <a href="mailto:hello@skkuglobal.com">
                  <span>hello@skkuglobal.com</span>
                  <ArrowUpRight size={12} />
                </a>
              </li>
              <li>
                <a
                  href={waLink('Hello SKKU Global, I would like to discuss a project.')}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Direct WhatsApp</span>
                  <ArrowUpRight size={12} />
                </a>
              </li>
              <li>
                <Link to="/privacy" style={{ color: 'var(--text-titanium)' }}>Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" style={{ color: 'var(--text-titanium)' }}>Terms of Use</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Hairline Divider & Micro-Typography ── */}
        <div className="apple-footer-bottom">
          <p>© {currentYear} SKKU Global Inc. All rights reserved.</p>
          <div className="apple-footer-bottom-meta">
            <span>Ibadan · Lagos · Worldwide</span>
            <span>Est. 2026</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
