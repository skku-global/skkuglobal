import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { waLink } from '../seo/siteMeta.js'
import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="skku-footer" role="contentinfo">
      <div className="skku-footer-container">
        {/* ── Top Row: Brand Info & Clean Relevant Links ── */}
        <div className="skku-footer-top">
          <div className="skku-footer-brand">
            <div className="skku-footer-logo" aria-label="SKKU Global">
              <span className="footer-logo-text">SKKU</span>
              <span className="footer-logo-dot" />
            </div>
            <p className="skku-footer-tagline">
              Thoughtful digital systems engineered for brands that refuse to blend in. CAC RC 7306232.
            </p>
          </div>

          <div className="skku-footer-links-grid">
            {/* Column 1: Studio */}
            <div className="skku-footer-col">
              <span className="skku-footer-heading">Studio</span>
              <ul className="skku-footer-nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/work">Work</Link></li>
              </ul>
            </div>

            {/* Column 2: Connect */}
            <div className="skku-footer-col">
              <span className="skku-footer-heading">Connect</span>
              <ul className="skku-footer-nav">
                <li><Link to="/contact">Contact</Link></li>
                <li>
                  <a href="mailto:hello@skkuglobal.com" className="footer-link-external">
                    <span>Email</span>
                    <ArrowUpRight size={12} />
                  </a>
                </li>
                <li>
                  <a
                    href={waLink('Hello SKKU Global, I want to discuss a project.')}
                    target="_blank"
                    rel="noreferrer"
                    className="footer-link-external"
                  >
                    <span>WhatsApp</span>
                    <ArrowUpRight size={12} />
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Legal */}
            <div className="skku-footer-col">
              <span className="skku-footer-heading">Legal</span>
              <ul className="skku-footer-nav">
                <li><Link to="/privacy">Privacy Policy</Link></li>
                <li><Link to="/terms">Terms of Use</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* ── Bottom Hairline & Copyright ── */}
        <div className="skku-footer-bottom">
          <p className="skku-footer-copy">
            © {currentYear} SKKU Global Inc. All rights reserved.
          </p>
          <div className="skku-footer-meta">
            <span>Ibadan · Lagos · Worldwide</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
