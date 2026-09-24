import About from '../components/About'
import Vision from '../components/Vision'
import useScrollAnimation from '../hooks/useScrollAnimation'
import './Home.css'

export default function AboutPage() {
  useScrollAnimation()

  return (
    <main id="main" className="page-enter">
      <section className="page-hero">
        <div className="shell">
          <div className="section-label animate">ABOUT</div>
          <h1 className="animate animate-delay-1">
            Built <span>security-first</span>,<br />
            shipped from Nigeria
          </h1>
          <p className="animate animate-delay-2">
            A digital agency combining real engineering experience with a
            security mindset — for founders and businesses who need it done right.
          </p>
        </div>
      </section>

      <About />
      <Vision />
    </main>
  )
}
