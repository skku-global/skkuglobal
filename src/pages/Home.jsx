import Hero from '../components/Hero'
import Projects from '../components/Projects'
import WhyGetAWebsite from '../components/WhyGetAWebsite'
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
      <Projects isHome={true} limit={2} />
      <WhyGetAWebsite />
      <Services hideHeader={true} />
      <Stats />

      {/* ── High-Impact Consultation Banner ── */}
      <section className="cta-banner-section">
        <div className="shell">
          <div className="cta-banner-card animate">
            <div className="cta-banner-content">
              <span className="cta-badge">GET YOUR BUSINESS A WEBSITE</span>
              <h2>Ready to grow your business online?</h2>
              <p>
                From luxury e-commerce and company websites to custom software. Chat with us on WhatsApp to get your quote and timeline today.
              </p>
            </div>
            <div className="cta-banner-actions">
              <a
                href={waLink('Hello SKKU Global, I would like to discuss building a website/platform and get a quote.')}
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
