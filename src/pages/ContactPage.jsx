import Contact from '../components/Contact'
import useScrollAnimation from '../hooks/useScrollAnimation'
import './Home.css'

export default function ContactPage() {
  useScrollAnimation()

  return (
    <main id="main" className="page-enter">
      <section className="page-hero">
        <div className="shell">
          <div className="section-label animate">CONTACT</div>
          <h1 className="animate animate-delay-1">
            Let&apos;s build <span>something great</span>
          </h1>
          <p className="animate animate-delay-2">
            Whether you need a full product built, a security audit, or just
            want to talk scope — we&apos;re open for work.
          </p>
        </div>
      </section>

      <Contact />
    </main>
  )
}
