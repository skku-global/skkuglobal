import Projects from '../components/Projects'
import Seo from '../components/Seo'
import './Home.css'

export default function Work() {
  return (
    <main id="main" className="page-enter">
      <Seo route="/work" />
      {/* Page hero */}
      <section className="page-hero">
        <div className="shell">
          <div className="section-label animate">PRODUCTION ARCHITECTURE</div>
          <h1 className="animate animate-delay-1">
            Case Studies &amp; <span className="gradient-text">Live Deployments</span>
          </h1>
          <p className="animate animate-delay-2">
            Real software systems engineered and deployed end-to-end with high-concurrency backends,
            sub-second response latencies, and rigorous SecuScan vulnerability defenses.
          </p>
        </div>
      </section>

      <Projects />
    </main>
  )
}
