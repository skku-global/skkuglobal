import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
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
  Image as ImageIcon,
  Plus,
} from 'lucide-react'
import './Work.css'

const CASE_STUDIES = [
  {
    id: 'secuscan',
    client: 'SecuScan Security Suite',
    category: 'Cybersecurity SaaS · Proprietary Engine',
    heading: 'Automated vulnerability scanner for mission-critical web platforms',
    subtitle: 'Zero-state OWASP engine that audits endpoints and delivers verified compliance in under 30 seconds.',
    note: 'The engineering founders kept losing annual enterprise contracts because prospective buyers demanded certified penetration reports prior to procurement. We engineered an isolated zero-state scanner in FastAPI and React that crawls public endpoints for OWASP vulnerabilities, CORS disclosures, and SSL ciphers without modifying database state.',
    liveUrl: 'https://secuscan-orpin.vercel.app/',
    images: [
      { src: '/screenshots/secuscan/slide-1.webp', label: 'Screen 01 · Dashboard' },
      { src: '/screenshots/secuscan/slide-2.webp', label: 'Screen 02 · Live Scanner' },
      { src: '/screenshots/secuscan/slide-3.webp', label: 'Screen 03 · Vulnerability Table' },
      { src: '/screenshots/secuscan/slide-4.webp', label: 'Screen 04 · Compliance PDF' },
    ],
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
    heading: 'Transforming manual DM exchanges into an international luxury storefront',
    subtitle: 'Multi-currency digital commerce platform with 1-tap automated WhatsApp invoice routing.',
    note: 'Losing high-ticket clients across London, New York, and Lagos to fragmented direct messages was draining 15 hours every week in manual inventory confirmations. We engineered a custom React storefront featuring dynamic texture selectors, live cart calculations, and 1-tap WhatsApp order routing that delivers pre-calculated invoices directly to the sales team.',
    liveUrl: 'https://luxehair-tau.vercel.app/',
    images: [
      { src: '/screenshots/luxehair/slide-1.webp', label: 'Screen 01 · Luxury Store' },
      { src: '/screenshots/luxehair/slide-2.webp', label: 'Screen 02 · Product Customizer' },
      { src: '/screenshots/luxehair/slide-3.webp', label: 'Screen 03 · Cart & Currencies' },
      { src: '/screenshots/luxehair/slide-4.webp', label: 'Screen 04 · WhatsApp Invoicing' },
    ],
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
    heading: 'Re-engineering vehicle purchasing with verified inspection reports',
    subtitle: 'Sub-100ms faceted marketplace with multi-point vehicle condition badges and fraud elimination.',
    note: 'Traditional automotive classifieds were notorious for duplicate spam listings, unverified salvage titles, and sluggish search filters. We engineered a client-side catalog with sub-100ms faceted filters (make, model, year, transmission, price), verified mechanical condition badges, and instant dealer communication hooks.',
    liveUrl: 'https://carbreezy-react.vercel.app/',
    images: [
      { src: '/screenshots/carbreezy/slide-1.webp', label: 'Screen 01 · Vehicle Catalog' },
      { src: '/screenshots/carbreezy/slide-2.webp', label: 'Screen 02 · Faceted Search' },
      { src: '/screenshots/carbreezy/slide-3.webp', label: 'Screen 03 · Inspection Badges' },
      { src: '/screenshots/carbreezy/slide-4.webp', label: 'Screen 04 · Dealer Connect' },
    ],
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
    heading: 'Intuitive neo-banking wallet designed with Swiss private banking finish',
    subtitle: 'Sub-second cryptographic ledger with Resend OTP authentication and real-time asset tracking.',
    note: 'Sluggish OTP deliveries and clunky responsive screens eroded consumer trust during fintech onboarding. We built an Express and MongoDB foundation paired with Resend email OTP verification, cryptographic JWT session management, and a clean slate interface showing real-time ledger histories.',
    liveUrl: 'https://junicash.vercel.app',
    images: [
      { src: '/screenshots/junicash/slide-1.webp', label: 'Screen 01 · Wallet Overview' },
      { src: '/screenshots/junicash/slide-2.webp', label: 'Screen 02 · Secure OTP Auth' },
      { src: '/screenshots/junicash/slide-3.webp', label: 'Screen 03 · Real-Time Ledger' },
      { src: '/screenshots/junicash/slide-4.webp', label: 'Screen 04 · Instant Transfers' },
    ],
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

// Single Interactive Case Study Component
function CaseStudyCard({ study, index }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  // Index 0: Left Box, Right Text
  // Index 1: Switches side! Left Text, Right Box (isReversed = true)
  // Index 2: Switches side again! Left Box, Right Text (isReversed = false)
  // Index 3: Switches side! Left Text, Right Box (isReversed = true)
  const isReversed = index % 2 === 1

  const currentImage = study.images[activeImageIndex] || study.images[0]

  return (
    <motion.article
      id={study.id}
      className={`work-case-item ${isReversed ? 'is-reversed' : ''}`}
      initial={{ opacity: 0, y: 55 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* ── WORK VISUAL BOX (Switches side based on index) ── */}
      <div className="work-visual-col">
        <div className="work-image-card">
          {/* Browser / Device Chrome Header Bar */}
          <div className="work-mockup-header">
            <div className="work-mockup-dots" aria-hidden="true">
              <span className="dot dot-red" />
              <span className="dot dot-yellow" />
              <span className="dot dot-green" />
            </div>
            <div className="work-mockup-address">
              <Lock size={10} className="work-mockup-lock" />
              <span>{study.liveUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')}</span>
            </div>
            <div className="work-mockup-status">
              <span className="pulse-dot" />
              <span>Live</span>
            </div>
          </div>

          {/* Main Visual Display */}
          <div className="work-image-frame">
            <img
              src={currentImage.src}
              alt={`${study.heading} - ${currentImage.label}`}
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

          {/* ── Image Gallery Slots: Space to Add More Pictures ── */}
          <div className="work-gallery-section">
            <div className="work-gallery-header">
              <span className="work-gallery-title">
                <ImageIcon size={13} />
                <span>Screen Visuals ({study.images.length} Views)</span>
              </span>
              <span className="work-gallery-hint">Click preview to switch screen</span>
            </div>

            <div className="work-gallery-grid">
              {study.images.map((img, imgIdx) => (
                <button
                  key={imgIdx}
                  type="button"
                  className={`work-gallery-slot ${activeImageIndex === imgIdx ? 'is-active' : ''}`}
                  onClick={() => setActiveImageIndex(imgIdx)}
                  title={img.label}
                  aria-label={`View ${img.label}`}
                >
                  <img src={img.src} alt={img.label} className="work-gallery-thumb" />
                  <span className="work-gallery-slot-num">0{imgIdx + 1}</span>
                </button>
              ))}

              {/* Dedicated "+ Add Image Slot" placeholder for upcoming pics */}
              <div className="work-gallery-slot work-gallery-add-slot" title="Space to add image">
                <Plus size={16} />
                <span className="work-gallery-add-text">+ Add Image</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── TEXT CONTENT: HEADING, SUBTITLE & NOTE (Switches side based on index) ── */}
      <div className="work-details-col">
        {/* Meta Tag & Index */}
        <div className="work-meta-header">
          <span className="work-case-num">
            CASE STUDY 0{index + 1} · {study.client}
          </span>

          {/* 1. HEADING */}
          <h2 className="work-case-heading">
            {study.heading}
          </h2>

          {/* 2. SUBTITLE */}
          <p className="work-case-subtitle">
            {study.subtitle}
          </p>
        </div>

        {/* 3. NOTE (Story & Strategic Vision Brief) */}
        <div className="work-note-box">
          <div className="work-note-badge-row">
            <span className="work-note-tag">NOTE</span>
            <span className="work-note-client-tag">{study.client}</span>
          </div>
          <p className="work-note-body">
            {study.note}
          </p>
          <div className="work-note-vision-callout">
            <span className="work-vision-tag">[ Strategic Vision ]</span>
            <p className="work-vision-quote">&ldquo;{study.vision}&rdquo;</p>
          </div>
        </div>

        {/* ── The Achievements Grid ── */}
        <div className="work-achievements-box">
          <span className="work-achievements-title">Verified Achievements</span>
          <div className="work-achievements-grid">
            {study.achievements.map((item, i) => {
              const IconComponent = item.icon
              return (
                <div key={i} className="work-stat-cell">
                  <div className="work-stat-icon-wrap" aria-hidden="true">
                    <IconComponent size={20} strokeWidth={1.8} />
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

        {/* ── Action Buttons ── */}
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
            to={`/contact?objective=${encodeURIComponent(study.heading)}`}
            className="work-btn-secondary"
          >
            <span>Request Similar Build</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </motion.article>
  )
}

export default function Work() {
  return (
    <main id="main" className="work-page-main">
      <Seo route="/work" />

      <div className="work-page-container">
        {/* ── Page Header with Scroll Reveal ── */}
        <motion.section
          className="work-header-section"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="work-header-eyebrow">
            SELECTED CASE STUDIES
          </span>
          <h1 className="work-header-title">
            Engineered for impact. Delivered to production.
          </h1>
          <p className="work-header-subtitle">
            Explore our work at the side, the strategic vision, the engineering story, and the verified achievements behind each system.
          </p>
        </motion.section>

        {/* ── Alternating Case Studies List ── */}
        <section className="work-cases-list" aria-label="Case Studies">
          {CASE_STUDIES.map((study, index) => (
            <CaseStudyCard key={study.id} study={study} index={index} />
          ))}
        </section>

        {/* ── Bottom Consultation Banner with Scroll Reveal ── */}
        <motion.section
          className="work-cta-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
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
        </motion.section>
      </div>
    </main>
  )
}
