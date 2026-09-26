import Services from '../components/Services'
import Stats from '../components/Stats'
import useScrollAnimation from '../hooks/useScrollAnimation'
import { LuArrowRight } from 'react-icons/lu'
import { FaWhatsapp } from 'react-icons/fa6'
import './Home.css'

export default function ServicesPage() {
  useScrollAnimation()

  return (
    <main id="main" className="page-enter">
      {/* ── Core Services Section ── */}
      <Services />

      {/* ── Verified Track Record ── */}
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
                href="mailto:admin@skkuglobal.com?subject=Project%20Consultation%20Inquiry%20%E2%80%94%20SKKU%20Global"
                className="btn-primary cta-btn"
              >
                <span>Start a Project</span>
                <LuArrowRight size={15} aria-hidden="true" />
              </a>
              <a
                href="https://wa.me/2348057215622?text=Hello%20SKKU%20Global,%20I%20would%20like%20to%20discuss%20a%20project"
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
