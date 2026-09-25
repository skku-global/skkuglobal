import { Link } from 'react-router-dom'
import './Footer.css'

const socialLinks = [
  { href: 'https://maps.google.com/?q=Lagos+Tech+Hub+Nigeria', label: 'Google Maps Profile' },
  { href: 'https://youtube.com/@CRYPTOBOND01', label: 'YouTube' },
  { href: 'https://instagram.com/skku_bond', label: 'Instagram' },
  { href: 'https://t.me/SKKU07', label: 'Telegram' },
]

const navLinks = [
  { to: '/',        label: 'Home' },
  { to: '/work',    label: 'Production Portfolio' },
  { to: '/about',   label: 'About SKKU Global' },
  { to: '/contact', label: 'Contact & Consultation' },
]

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="shell">
        <div className="footer-top animate">
          <div className="footer-left">
            <Link to="/" aria-label="SKKU Global — home">
              <img
                className="footer-logo"
                src="/brand/skku-green.png"
                alt="SKKU Global Technologies"
                width="96"
                height="92"
              />
            </Link>
            <p className="footer-tagline">
              <strong>SKKU Global Technologies Limited</strong>
              <br />
              Enterprise Web Development · SecuScan Security Audits · E-Commerce Systems
              <br />
              CAC-Registered Corporate Entity · Headquartered in Nigeria, Engineering Globally.
            </p>
          </div>

          <div className="footer-nav-groups">
            <nav className="footer-col" aria-label="Company navigation">
              <div className="footer-links-title">NAVIGATION</div>
              <div className="footer-links">
                {navLinks.map((link) => (
                  <Link key={link.label} to={link.to}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </nav>

            <nav className="footer-col" aria-label="Connect and location">
              <div className="footer-links-title">CONNECT &amp; VERIFY</div>
              <div className="footer-links">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.label}
                    <span className="footer-link-arrow" aria-hidden="true">↗</span>
                  </a>
                ))}
              </div>
            </nav>
          </div>
        </div>

        <div className="footer-bottom animate animate-delay-1">
          <span>© {year} SKKU Global Technologies Limited. All rights reserved.</span>
          <span className="footer-bottom-links">
            <a href="mailto:admin@skkuglobal.com">admin@skkuglobal.com</a>
            {' · '}
            <a href="https://maps.google.com/?q=Lagos+Tech+Hub+Nigeria" target="_blank" rel="noreferrer">
              Verified on Google Maps
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}
