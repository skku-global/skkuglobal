import MultiStepContact from '../components/MultiStepContact'
import Seo from '../components/Seo'
import './ContactPage.css'

export default function ContactPage() {
  return (
    <main id="main" className="contact-page-main">
      <Seo route="/contact" />

      {/* ── Page Header ── */}
      <section className="contact-page-hero">
        <div className="contact-hero-container">
          <span className="contact-hero-kicker">START A PROJECT</span>
          <h1 className="contact-hero-headline">What do you need built?</h1>
          <p className="contact-hero-subtext">
            Tell us what you need — a website, a flyer, or an ads video. We respond within 24 hours with a clear plan and a price.
          </p>
        </div>
      </section>

      {/* ── Interactive Multi-Step Form ── */}
      <section className="contact-form-section">
        <MultiStepContact />
      </section>
    </main>
  )
}

