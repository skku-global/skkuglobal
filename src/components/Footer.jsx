import './Footer.css'

const links = [
  { href: 'https://youtube.com/@CRYPTOBOND01', label: 'YouTube' },
  { href: 'https://instagram.com/skku_bond', label: 'Instagram' },
  { href: 'https://t.me/SKKU07', label: 'Telegram' },
  { href: 'https://github.com/skku-global', label: 'GitHub' },
  { href: 'https://partner.bybit.com/b/57569', label: 'Bybit' },
]

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="shell">
        <div className="footer-cta animate">
          <h2>Let&apos;s build something</h2>
          <p>
            Open to full-stack work, fintech collaborations, and investment
            conversations around SKKU Global.
          </p>
          <a href="mailto:admin@skkuglobal.com" className="btn-primary">
            admin@skkuglobal.com
          </a>
        </div>

        <div className="footer-top animate animate-delay-1">
          <div className="footer-left">
            <img
              className="footer-logo"
              src="/brand/skku-green.png"
              alt="SKKU Global"
              width="112"
              height="108"
            />
            <p>
              Full-Stack Developer · Trader · Fintech Founder
              <br />
              Building from Nigeria, going global.
            </p>
          </div>

          <nav className="footer-right" aria-label="Social links">
            <div className="footer-links-title">CONNECT</div>
            <div className="footer-links">
              {links.map((link) => (
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

        <div className="footer-bottom animate animate-delay-2">
          <span>© {year} SKKU Global Technologies Limited</span>
          <span>skkuglobal.com</span>
        </div>
      </div>
    </footer>
  )
}
