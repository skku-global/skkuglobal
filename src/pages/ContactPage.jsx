import Contact from '../components/Contact'
import GoogleMapSection from '../components/GoogleMapSection'
import useScrollAnimation from '../hooks/useScrollAnimation'
import './Home.css'

export default function ContactPage() {
  useScrollAnimation()

  return (
    <main id="main" className="page-enter">
      <section className="page-hero">
        <div className="shell">
          <div className="section-label animate">DIRECT CONSULTATION</div>
          <h1 className="animate animate-delay-1">
            Let&apos;s Build or Secure <span className="gradient-text">Your Platform</span>
          </h1>
          <p className="animate animate-delay-2">
            Whether you need enterprise web engineering, an immediate SecuScan vulnerability audit,
            or an e-commerce platform — we guarantee rapid technical scoping and NDA-backed execution.
          </p>
        </div>
      </section>

      <Contact />
      <GoogleMapSection />
    </main>
  )
}
