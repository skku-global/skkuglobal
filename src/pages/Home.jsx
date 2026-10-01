import Hero from '../components/Hero'
import ScrollCapability from '../components/ScrollCapability'
import Projects from '../components/Projects'
import WhyGetAWebsite from '../components/WhyGetAWebsite'
import Stats from '../components/Stats'
import Seo from '../components/Seo'
import { mailto, waLink } from '../seo/siteMeta.js'
import { LuArrowRight, LuBuilding2, LuShieldCheck, LuZap, LuHandshake } from 'react-icons/lu'
import { FaWhatsapp } from 'react-icons/fa6'
import './Home.css'

export default function Home() {
  return (
    <main id="main" className="page-enter">
      <Seo route="/" />
      <Hero />
      <ScrollCapability />
      <Projects isHome={true} limit={2} />
      <WhyGetAWebsite />

      {/* ── Founder Direct Oversight Section ── */}
      <section className="founder-trust-section">
        <div className="shell">
          <div className="founder-card animate">
            <div className="founder-meta">
              <div className="founder-avatar-wrap">
                <div className="founder-monogram">AA</div>
                <span className="founder-status-badge">LEAD ARCHITECT</span>
              </div>
              <div className="founder-info">
                <h3>Direct Collaboration with the Lead Engineer</h3>
                <p className="founder-role">Abdulkabir Ajiboye · Founder &amp; Systems Architect</p>
                <p className="founder-quote">
                  &ldquo;When you work with SKKU Global, you don&apos;t get bounced between account managers or junior ticket queues. You work directly with me — the systems architect who designs your database, writes your code, and audits your security before launch. We treat every client&apos;s platform like our own product.&rdquo;
                </p>
                <div className="founder-credentials">
                  <span className="cred-badge">
                    <LuBuilding2 size={13} className="cred-icon" aria-hidden="true" />
                    <span>CAC Registered: RC 7306232</span>
                  </span>
                  <span className="cred-badge">
                    <LuShieldCheck size={13} className="cred-icon" aria-hidden="true" />
                    <span>Proprietary SecuScan Engine</span>
                  </span>
                  <span className="cred-badge">
                    <LuZap size={13} className="cred-icon" aria-hidden="true" />
                    <span>5–7 Day Delivery</span>
                  </span>
                  <span className="cred-badge">
                    <LuHandshake size={13} className="cred-icon" aria-hidden="true" />
                    <span>50/50 Milestone Payments</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="founder-cta">
              <a
                href={waLink("Hello Abdulkabir, I want to discuss a project directly with you.")}
                target="_blank"
                rel="noreferrer"
                className="btn-primary founder-btn"
              >
                <FaWhatsapp size={18} aria-hidden="true" />
                <span>Chat with Abdulkabir</span>
              </a>
            </div>
          </div>
        </div>
      </section>

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
