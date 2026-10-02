import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import {
  ExternalLink,
  ArrowRight,
  ShieldCheck,
  Gauge,
  Activity,
  Cpu,
  TrendingUp,
  Zap,
  Globe,
  Clock,
  BarChart3,
  CheckCircle2,
  Lock,
  Award,
  Layers,
} from 'lucide-react'
import './Work.css'

const CASE_STUDIES = [
  {
    id: 'secuscan',
    client: 'SecuScan Security Suite',
    category: 'Cybersecurity SaaS · Proprietary Engine',
    title: 'Automated vulnerability scanner for mission-critical web platforms',
    liveUrl: 'https://secuscan-orpin.vercel.app/',
    image: '/screenshots/secuscan/slide-1.webp',
    achievements: [
      { icon: Gauge, num: '<30s', label: 'Audit Speed' },
      { icon: ShieldCheck, num: '100%', label: 'OWASP Coverage' },
      { icon: Activity, num: '4.8k', label: 'Vulnerability Vectors' },
      { icon: Cpu, num: '0ms', label: 'Production Impact' },
    ],
    vision:
      'To replace weeks-long $4,000 manual penetration audits with an instant, verified security certificate accessible to any web platform in seconds.',
    story:
      'The engineering founders kept losing annual enterprise contracts because prospective buyers demanded certified penetration reports prior to procurement. We engineered an isolated zero-state scanner in FastAPI and React that crawls public endpoints for OWASP vulnerabilities, CORS disclosures, and SSL ciphers without modifying database state.',
  },
  {
    id: 'luxehair',
    client: 'Luxe Hair Co. UK & Nigeria',
    category: 'Luxury E-Commerce · Multi-Currency Retail',
    title: 'Transforming manual DM exchanges into an international luxury storefront',
    liveUrl: 'https://luxehair-tau.vercel.app/',
    image: '/screenshots/luxehair/slide-1.webp',
    achievements: [
      { icon: TrendingUp, num: '+62%', label: 'Checkout Conversion' },
      { icon: Zap, num: '1-Tap', label: 'WhatsApp Checkout' },
      { icon: Globe, num: '3', label: 'Active Currencies' },
      { icon: Clock, num: '15h', label: 'Weekly Admin Saved' },
    ],
    vision:
      'To transform a chaotic Instagram DM selling workflow into an elite, automated international digital storefront with transparent multi-currency routing.',
    story:
      'Losing high-ticket clients across London, New York, and Lagos to fragmented direct messages was draining 15 hours every week in manual inventory confirmations. We engineered a custom React storefront featuring dynamic texture selectors, live cart calculations, and 1-tap WhatsApp order routing that delivers pre-calculated invoices directly to the sales team.',
  },
  {
    id: 'carbreezy',
    client: 'CarBreezy Automotive',
    category: 'Marketplace Platform · Dealer Network',
    title: 'Re-engineering vehicle purchasing with verified inspection reports',
    liveUrl: 'https://carbreezy-react.vercel.app/',
    image: '/screenshots/carbreezy/slide-1.webp',
    achievements: [
      { icon: Gauge, num: '<100ms', label: 'Search Latency' },
      { icon: BarChart3, num: '2.4x', label: 'Lead Velocity' },
      { icon: CheckCircle2, num: '120+', label: 'Inspected Vehicles' },
      { icon: Layers, num: '0%', label: 'Duplicate Spam' },
    ],
    vision:
      'To eliminate automotive marketplace fraud in West Africa through multi-point verified inspection badges and instant dealer communication.',
    story:
      'Traditional automotive classifieds were notorious for duplicate spam listings, unverified salvage titles, and sluggish search filters. We engineered a client-side catalog with sub-100ms faceted filters (make, model, year, transmission, price), verified mechanical condition badges, and instant dealer communication hooks.',
  },
  {
    id: 'junicash',
    client: 'JuniCash Global',
    category: 'Fintech & Digital Wallet · Cryptographic Auth',
    title: 'Intuitive neo-banking wallet designed with Swiss private banking finish',
    liveUrl: 'https://junicash.vercel.app',
    image: '/screenshots/junicash/slide-1.webp',
    achievements: [
      { icon: Lock, num: '256-bit', label: 'Cryptographic Sessions' },
      { icon: Clock, num: '<1s', label: 'Ledger Latency' },
      { icon: Award, num: '100%', label: 'Pilot Onboarding' },
      { icon: ShieldCheck, num: '0', label: 'Balance Discrepancies' },
    ],
    vision:
      'To engineer a digital banking wallet interface as serene and dependable as an Apple application, stripping away the friction of legacy financial portals.',
    story:
      'Sluggish OTP deliveries and clunky responsive screens eroded consumer trust during fintech onboarding. We built an Express and MongoDB foundation paired with Resend email OTP verification, cryptographic JWT session management, and a clean slate interface showing real-time ledger histories.',
  },
]

export default function Work() {
  return (
    <main id="main" className="work-page-main">
      <Seo route="/work" />

      <div className="work-page-container">
        {/* ── Page Header ── */}
        <section className="work-header-section">
          <span className="work-header-eyebrow">
            SELECTED CASE STUDIES
          </span>
          <h1 className="work-header-title">
            Engineered for impact. Delivered to production.
          </h1>
          <p className="work-header-subtitle">
            Explore our work at the side, the strategic vision, the engineering story, and the verified achievements behind each system.
          </p>
        </section>

        {/* ── Case Studies: Left Work Showcase · Right Achievements, Vision & Story ── */}
        <section className="work-cases-list" aria-label="Case Studies">
          {CASE_STUDIES.map((study, index) => (
            <article key={study.id} id={study.id} className="work-case-item">
              {/* ── LEFT: Our Work Visual Showcase ── */}
              <div className="work-visual-col">
                <div className="work-image-card">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="work-image"
                    loading="lazy"
                  />
                  <div className="work-image-gradient" />

                  {/* Floating Action Badge Bar */}
                  <div className="work-image-badge-bar">
                    <span className="work-category-pill">
                      {study.category}
                    </span>
                    <a
                      href={study.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="work-live-pill"
                    >
                      <span>Live Site</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </div>

              {/* ── RIGHT: Achievements Grid + Vision + Story ── */}
              <div className="work-details-col">
                {/* Case Header */}
                <div className="work-meta-header">
                  <span className="work-case-num">
                    CASE STUDY 0{index + 1} · {study.client}
                  </span>
                  <h2 className="work-case-title">
                    {study.title}
                  </h2>
                </div>

                {/* ── The Achievements Grid (Matches User Reference Image) ── */}
                <div className="work-achievements-box">
                  <div className="work-achievements-grid">
                    {study.achievements.map((item, i) => {
                      const IconComponent = item.icon
                      return (
                        <div key={i} className="work-stat-cell">
                          <div className="work-stat-icon-wrap" aria-hidden="true">
                            <IconComponent size={22} strokeWidth={1.8} />
                          </div>
                          <div className="work-stat-info">
                            <span className="work-stat-number">{item.num}</span>
                            <span className="work-stat-label">{item.label}</span>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* ── Vision About the Work ── */}
                <div className="work-narrative-card">
                  <span className="work-narrative-tag">
                    [ The Vision ]
                  </span>
                  <p className="work-vision-text">
                    &ldquo;{study.vision}&rdquo;
                  </p>
                </div>

                {/* ── The Story About the Work ── */}
                <div className="work-story-block">
                  <span className="work-story-heading">
                    The Story
                  </span>
                  <p className="work-story-text">
                    {study.story}
                  </p>
                </div>

                {/* ── Actions ── */}
                <div className="work-actions-row">
                  <a
                    href={study.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="work-btn-primary"
                  >
                    <span>View Live Deployment</span>
                    <ExternalLink size={14} />
                  </a>
                  <Link
                    to={`/contact?objective=${encodeURIComponent(study.title)}`}
                    className="work-btn-secondary"
                  >
                    <span>Request Similar Build</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* ── Bottom Consultation Banner ── */}
        <section className="work-cta-card">
          <span className="work-header-eyebrow">
            START YOUR BUILD
          </span>
          <h2 className="work-cta-title">
            Have a friction worth solving?
          </h2>
          <p className="work-cta-desc">
            We handle the strategy, the architecture, and the production launch with verified engineering velocity.
          </p>
          <div>
            <Link to="/contact" className="work-btn-primary" style={{ padding: '12px 28px' }}>
              <span>Start a project inquiry</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}
