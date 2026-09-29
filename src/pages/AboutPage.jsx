import About from '../components/About'
import Vision from '../components/Vision'
import Seo from '../components/Seo'
import './Home.css'

export default function AboutPage() {
  return (
    <main id="main" className="page-enter">
      <Seo route="/about" />
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
    </main>
  )
}
