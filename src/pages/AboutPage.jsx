import About from '../components/About'
import Vision from '../components/Vision'
import GoogleMapSection from '../components/GoogleMapSection'
import useScrollAnimation from '../hooks/useScrollAnimation'
import './Home.css'

export default function AboutPage() {
  useScrollAnimation()

  return (
    <main id="main" className="page-enter">
      <section className="page-hero">
        <div className="shell">
          <div className="section-label animate">COMPANY &amp; LEADERSHIP</div>
          <h1 className="animate animate-delay-1">
            Built <span className="gradient-text">Security-First</span>,<br />
            Engineering Globally
          </h1>
          <p className="animate animate-delay-2">
            A technology solutions company combining production-hardened full-stack engineering
            with proprietary vulnerability research — delivering for high-growth ventures worldwide.
          </p>
        </div>
      </section>

      <About />
      <Vision />
      <GoogleMapSection />
    </main>
  )
}
