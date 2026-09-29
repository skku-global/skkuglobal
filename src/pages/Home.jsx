import Hero from '../components/Hero'
import Services from '../components/Services'
import Stats from '../components/Stats'
import Seo from '../components/Seo'
import { mailto, waLink } from '../seo/siteMeta.js'
import { LuArrowRight } from 'react-icons/lu'
import { FaWhatsapp } from 'react-icons/fa6'
import './Home.css'

export default function Home() {
  return (
    <main id="main" className="page-enter">
      <Seo route="/" />
      <Hero />
      <Services hideHeader={true} />
      <Stats />

      {/* ── High-Impact Consultation Banner ── */}
      <section className="cta-banner-section">
        <div className="shell">
          <div className="cta-banner-card animate">
            <div className="cta-banner-content">
              <span className="cta-badge">DIRECT FOUNDER CONSULTATION</span>
              <h2>Ready to engineer or secure your next platform?</h2>
              <p>
                From custom full-stack web applications to comprehensive SecuScan vulnerability audits,
                we ship production-ready tech solutions that protect and grow your business.
              </p>
            </div>
            <div className="cta-banner-actions">
              <a
                href={mailto('Project Consultation Inquiry — SKKU Global')}
                className="btn-primary cta-btn"
              >
                <span>Start a Project</span>
                <LuArrowRight size={15} aria-hidden="true" />
              </a>
              <a
                href={waLink('Hello SKKU Global, I would like to discuss a project')}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary cta-btn"
              >
                <FaWhatsapp size={16} aria-hidden="true" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
