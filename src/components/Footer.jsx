import './Footer.css'

const socialLinks = [
  { href: 'https://youtube.com/@CRYPTOBOND01', label: 'YouTube' },
  { href: 'https://instagram.com/skku_bond', label: 'Instagram' },
  { href: 'https://t.me/SKKU07', label: 'Telegram' },
  { href: 'https://github.com/skku-global', label: 'GitHub' },
]

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Case Studies' },
  { href: '#about', label: 'About SKKU' },
  { href: '#vision', label: 'Vision' },
  { href: '#contact', label: 'Contact' },
]

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer-top animate">
          <div className="footer-left">
            <img
              className="footer-logo"
              src="/brand/skku-green.png"
              alt="SKKU Global"
              width="112"
              height="108"
            />
            <p>
              <strong>SKKU Global Technologies Limited</strong>
              <br />
              Web Development · Security Auditing · Digital Protection
              <br />
              CAC-Registered · Building from Nigeria, shipping globally.
            </p>
          </div>

          <div className="footer-nav-groups">
            <nav className="footer-col" aria-label="Company navigation">
              <div className="footer-links-title">NAVIGATION</div>
              <div className="footer-links">
                {navLinks.map((link) => (
                  <a key={link.label} href={link.href}>
                    {link.label}
                  </a>
                ))}
              </div>
            </nav>

            <nav className="footer-col" aria-label="Social and community links">
              <div className="footer-links-title">CONNECT</div>
              <div className="footer-links">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </nav>
          </div>
        </div>

        <div className="footer-bottom animate animate-delay-1">
          <span>© {year} SKKU Global Technologies Limited. All rights reserved.</span>
          <span>admin@skkuglobal.com · skkuglobal.com</span>
        </div>
      </div>
    </footer>
  )
}
