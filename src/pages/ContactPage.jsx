import Contact from '../components/Contact'
import Seo from '../components/Seo'
import './Home.css'

export default function ContactPage() {
  return (
    <main id="main" className="page-enter">
      <Seo route="/support" />
      <section className="page-hero">
        <div className="shell">
          <div className="section-label animate">CLIENT SUPPORT &amp; CONSULTATION</div>
          <h1 className="animate animate-delay-1">
            Let&apos;s Build or Secure <span className="gradient-text">Your Platform</span>
          </h1>
          <p className="animate animate-delay-2">
            Get technical scoping, 24/7 security incident response, or submit a project inquiry.
            Whether you need enterprise web engineering or an immediate SecuScan audit — our team is here to support you.
          </p>
        </div>
      </section>

      <Contact />
    </main>
  )
}
