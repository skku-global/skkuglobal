import Projects from '../components/Projects'
import useScrollAnimation from '../hooks/useScrollAnimation'
import './Home.css'

export default function Work() {
  useScrollAnimation()

  return (
    <main id="main" className="page-enter">
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
