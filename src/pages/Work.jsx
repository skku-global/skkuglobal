import Projects from '../components/Projects'
import Seo from '../components/Seo'
import { FaWhatsapp } from 'react-icons/fa6'
import { LuArrowRight, LuZap } from 'react-icons/lu'
import { waLink, mailto } from '../seo/siteMeta.js'
import './Home.css'

export default function Work() {
  return (
    <main id="main" className="page-enter">
      <Seo route="/work" />

      {/* Page Hero */}
      <section className="page-hero">
        <div className="shell">
          <div className="section-label animate">PRODUCTION PORTFOLIO</div>
          <h1 className="animate animate-delay-1" style={{ fontSize: 'clamp(42px, 6vw, 76px)', letterSpacing: '-0.04em', marginBottom: '8px' }}>
            Our Work
          </h1>
          <p className="animate animate-delay-2" style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontSize: 'clamp(22px, 3vw, 36px)', color: 'var(--text-primary)', fontStyle: 'italic', marginBottom: '24px' }}>
            We solve the problems worth solving.
          </p>

          {/* ── High-Converting Project Pitch Banner ── */}
          <div className="work-pitch-card animate animate-delay-3">
            <div className="work-pitch-info">
              <span className="work-pitch-badge">
                <LuZap size={13} aria-hidden="true" />
                <span>FAST 5–7 DAY DELIVERY</span>
              </span>
              <h2>Want a custom website or platform like these for your business?</h2>
              <p>
                We handle end-to-end architecture, mobile design, dynamic pricing, and pre-launch penetration testing. Transparent milestone pricing with direct founder oversight.
              </p>
            </div>
            <div className="work-pitch-action">
              <a
                href={waLink("Hello SKKU Global, I saw your live case studies and I want to get a quote to build a website/platform for my business.")}
                target="_blank"
                rel="noreferrer"
                className="btn-primary work-pitch-btn"
              >
                <FaWhatsapp size={19} aria-hidden="true" />
                <span>Chat on WhatsApp — Get Free Quote</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Production Projects Showcase ── */}
      <Projects />

      {/* ── Bottom Closing Consultation Banner ── */}
      <section className="cta-banner-section">
        <div className="shell">
          <div className="cta-banner-card animate">
            <div className="cta-banner-content">
              <span className="cta-badge">DIRECT TO FOUNDER</span>
              <h2>Ready to build your next platform?</h2>
              <p>
                Get a custom quote, timeline, and architectural plan in 15 minutes. Message us directly on WhatsApp or email.
              </p>
            </div>
            <div className="cta-banner-actions">
              <a
                href={waLink("Hello SKKU Global, I'm ready to build a website/system. Let's discuss requirements and pricing.")}
                target="_blank"
                rel="noreferrer"
                className="btn-primary cta-btn cta-btn-wa"
              >
                <FaWhatsapp size={16} aria-hidden="true" />
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href={mailto('Project Consultation Inquiry — SKKU Global')}
                className="btn-secondary cta-btn"
              >
                <span>Send Official Email</span>
                <LuArrowRight size={15} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
