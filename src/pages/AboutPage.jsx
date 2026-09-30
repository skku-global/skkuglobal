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
          <div className="section-label animate">THE COMPANY</div>
          <h1 className="animate animate-delay-1">
            Built <span className="gradient-text">security-first</span>,<br />
            working worldwide
          </h1>
          <p className="animate animate-delay-2">
            Full-stack engineering, plus our own vulnerability research.
          </p>
        </div>
      </section>

      <About />
      <Vision />
    </main>
  )
}
