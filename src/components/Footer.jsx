import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-top animate">
        <div className="footer-left">
          <div className="footer-logo">SKKU</div>
          <p>Full-Stack Developer · Trader · Fintech Founder<br />Building from Nigeria, going global.</p>
          <a href="mailto:admin@skkuglobal.com" className="footer-email">admin@skkuglobal.com</a>
        </div>
        <div className="footer-right">
          <div className="footer-links-title">Connect</div>
          <div className="footer-links">
            <a href="https://youtube.com/@CRYPTOBOND01" target="_blank" rel="noreferrer">YouTube</a>
            <a href="https://instagram.com/skku_bond" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://t.me/SKKU07" target="_blank" rel="noreferrer">Telegram</a>
            <a href="https://github.com/skku-global" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://partner.bybit.com/b/57569" target="_blank" rel="noreferrer">Bybit</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom animate animate-delay-1">
        <span>© 2026 SKKU Global Technologies Limited</span>
        <span>skkuglobal.com</span>
      </div>
    </footer>
  )
}
