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
          <div className="section-label animate">CASE STUDIES</div>
          <h1 className="animate animate-delay-1">
            Case Studies &amp; <span className="gradient-text">Live Deployments</span>
          </h1>
          <p className="animate animate-delay-2">
            Everything below is live. Click any of it and use it.
          </p>
        </div>
      </section>

      <Projects />
    </main>
  )
}
