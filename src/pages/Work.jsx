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
          <div className="section-label animate">WORK</div>
          <h1 className="animate animate-delay-1">
            Case studies &amp; <span>deployed work</span>
          </h1>
          <p className="animate animate-delay-2">
            Real products, deployed and live — built end-to-end with production
            architecture, security-first data flows, and zero filler.
          </p>
        </div>
      </section>

      <Projects />
    </main>
  )
}
