import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Projects from '../components/Projects'
import Services from '../components/Services'
import GoogleMapSection from '../components/GoogleMapSection'
import useScrollAnimation from '../hooks/useScrollAnimation'
import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
  useScrollAnimation()

  return (
    <main id="main" className="page-enter">
      <Hero />
      <Stats />
      <Projects />
      <Services />
      <GoogleMapSection />

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
              <Link to="/contact" className="btn-primary cta-btn">
                <span>Start a Project</span>
                <span className="btn-arrow" aria-hidden="true">→</span>
              </Link>
              <a
                href="https://wa.me/2349132686150?text=Hello%20SKKU%20Global,%20I%20would%20like%20to%20discuss%20a%20project"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary cta-btn"
              >
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
