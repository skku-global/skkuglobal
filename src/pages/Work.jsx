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
  Plus,
} from 'lucide-react'
import './Work.css'

const CASE_STUDIES = [
  {
    id: 'secuscan',
    client: 'SecuScan Security',
    category: 'Cybersecurity SaaS',
    tag: 'SECUSCAN SUITE',
    heading: 'Automated vulnerability scanner for mission-critical platforms',
    subtitle: 'Continuous zero-state OWASP engine delivering instant security verification.',
    note: 'The engineering founders kept losing annual enterprise contracts because prospective buyers demanded certified penetration reports prior to procurement. We engineered an isolated zero-state scanner that crawls public endpoints for OWASP vulnerabilities, CORS disclosures, and SSL ciphers without modifying database state.',
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
      { icon: Activity, num: '4.8k', label: 'Vectors' },
      { icon: Cpu, num: '0ms', label: 'Impact' },
    ],
  },
  {
    id: 'luxehair',
    client: 'Luxe Hair Co.',
    category: 'Luxury E-Commerce',
    tag: 'LUXE HAIR CO.',
    heading: 'Transforming manual DM exchanges into luxury digital retail',
    subtitle: 'International multi-currency commerce engine with automated WhatsApp invoicing.',
    note: 'Losing high-ticket clients across London, New York, and Lagos to fragmented direct messages was draining 15 hours every week in manual inventory confirmations. We engineered a custom storefront with dynamic texture selectors and 1-tap WhatsApp order routing that delivers pre-calculated invoices directly to the sales team.',
    liveUrl: 'https://luxehair-tau.vercel.app/',
    images: [
      { src: '/screenshots/luxehair/slide-1.webp', label: 'Screen 01 · Luxury Store' },
      { src: '/screenshots/luxehair/slide-2.webp', label: 'Screen 02 · Customizer' },
      { src: '/screenshots/luxehair/slide-3.webp', label: 'Screen 03 · Cart & Currencies' },
      { src: '/screenshots/luxehair/slide-4.webp', label: 'Screen 04 · WhatsApp Checkout' },
    ],
    achievements: [
      { icon: TrendingUp, num: '+62%', label: 'Conversion' },
      { icon: Zap, num: '1-Tap', label: 'Checkout' },
      { icon: Globe, num: '3', label: 'Currencies' },
      { icon: Clock, num: '15h', label: 'Weekly Saved' },
    ],
  },
  {
    id: 'carbreezy',
    client: 'CarBreezy Automotive',
    category: 'Marketplace Platform',
    tag: 'CARBREEZY',
    heading: 'Re-engineering vehicle purchasing with verified inspection badges',
    subtitle: 'Sub-100ms faceted inventory marketplace with multi-point condition transparency.',
    note: 'Traditional classifieds were notorious for duplicate spam listings, unverified salvage titles, and sluggish search filters. We engineered a client-side catalog with sub-100ms faceted filters (make, model, year, transmission, price), verified mechanical condition badges, and instant dealer communication hooks.',
    liveUrl: 'https://carbreezy-react.vercel.app/',
    images: [
      { src: '/screenshots/carbreezy/slide-1.webp', label: 'Screen 01 · Catalog' },
      { src: '/screenshots/carbreezy/slide-2.webp', label: 'Screen 02 · Faceted Search' },
      { src: '/screenshots/carbreezy/slide-3.webp', label: 'Screen 03 · Inspection Badges' },
      { src: '/screenshots/carbreezy/slide-4.webp', label: 'Screen 04 · Dealer Connect' },
    ],
    achievements: [
      { icon: Gauge, num: '<100ms', label: 'Search Latency' },
      { icon: BarChart3, num: '2.4x', label: 'Lead Velocity' },
      { icon: CheckCircle2, num: '120+', label: 'Inspected' },
      { icon: Layers, num: '0%', label: 'Duplicate Spam' },
    ],
  },
  {
    id: 'junicash',
    client: 'JuniCash Global',
    category: 'Fintech & Digital Wallet',
    tag: 'JUNICASH GLOBAL',
    heading: 'Intuitive neo-banking wallet designed with Swiss private finish',
    subtitle: 'Sub-second cryptographic ledger with Resend OTP authentication and live asset tracking.',
    note: 'Sluggish OTP deliveries and clunky responsive screens eroded consumer trust during fintech onboarding. We built an Express and MongoDB foundation paired with Resend email OTP verification, cryptographic JWT session management, and a clean slate interface showing real-time ledger histories.',
    liveUrl: 'https://junicash.vercel.app',
    images: [
      { src: '/screenshots/junicash/slide-1.webp', label: 'Screen 01 · Portfolio' },
      { src: '/screenshots/junicash/slide-2.webp', label: 'Screen 02 · OTP Auth' },
      { src: '/screenshots/junicash/slide-3.webp', label: 'Screen 03 · Real-Time Ledger' },
      { src: '/screenshots/junicash/slide-4.webp', label: 'Screen 04 · Transfers' },
    ],
    achievements: [
      { icon: Lock, num: '256-bit', label: 'Security' },
      { icon: Clock, num: '<1s', label: 'Ledger Latency' },
      { icon: Award, num: '100%', label: 'Onboarding' },
      { icon: ShieldCheck, num: '0', label: 'Discrepancies' },
    ],
  },
]

// Single Clean Editorial Case Study Row
function CaseStudyRow({ study, index }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  // Alternating sides:
  // Item 0: Text on Left, Image on Right (Matches User Reference Image)
  // Item 1: Swaps side! Image on Left, Text on Right (isReversed = true)
  // Item 2: Swaps side! Text on Left, Image on Right (isReversed = false)
  // Item 3: Swaps side! Image on Left, Text on Right (isReversed = true)
  const isReversed = index % 2 === 1

  const currentImage = study.images[activeImageIndex] || study.images[0]

  return (
    <motion.article
      id={study.id}
      className={`work-editorial-row ${isReversed ? 'is-reversed' : ''}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* ── TEXT CONTENT SIDE ── */}
      <div className="work-editorial-content">
        {/* Outlined Badge Box matching the 'ABOUT US' button in user reference */}
        <div className="work-badge-box">
          {study.tag}
        </div>

        {/* Massive Bold Uppercase Heading matching user reference */}
        <h2 className="work-editorial-heading">
          {study.heading}
        </h2>

        {/* Clean Editorial Paragraph */}
        <p className="work-editorial-note">
          {study.note}
        </p>

        {/* Minimalist Metrics Grid */}
        <div className="work-editorial-metrics">
          {study.achievements.map((item, i) => (
            <div key={i} className="work-metric-item">
              <span className="work-metric-num">{item.num}</span>
              <span className="work-metric-lbl">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Clean Action Links */}
        <div className="work-editorial-actions">
          <a
            href={study.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="work-clean-btn-primary"
          >
            <span>View Live Project</span>
            <ExternalLink size={13} />
          </a>
          <Link
            to={`/contact?objective=${encodeURIComponent(study.heading)}`}
            className="work-clean-btn-secondary"
          >
            <span>Request Similar Build</span>
            <ArrowRight size={13} />
          </Link>
        </div>
      </div>

      {/* ── VISUAL WORK IMAGE SIDE ── */}
      <div className="work-editorial-visual">
        <div className="work-clean-image-card">
          <img
            src={currentImage.src}
            alt={`${study.heading} - ${currentImage.label}`}
            className="work-clean-image"
            loading="lazy"
          />
        </div>

        {/* Sleek Thumbnail Switcher & Space to Add More Images */}
        <div className="work-clean-gallery-bar">
          <div className="work-clean-thumbs">
            {study.images.map((img, imgIdx) => (
              <button
                key={imgIdx}
                type="button"
                className={`work-clean-thumb-btn ${activeImageIndex === imgIdx ? 'is-active' : ''}`}
                onClick={() => setActiveImageIndex(imgIdx)}
                title={img.label}
              >
                <img src={img.src} alt={img.label} className="thumb-img" />
              </button>
            ))}

            {/* Dedicated clean '+ Add' slot for future pictures */}
            <div className="work-clean-add-slot" title="Space to add image">
              <Plus size={13} />
              <span>Add</span>
            </div>
          </div>

          <span className="work-clean-count">
            0{activeImageIndex + 1} / 0{study.images.length}
          </span>
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
        {/* ── Page Header ── */}
        <motion.section
          className="work-header-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="work-badge-box" style={{ marginBottom: '24px' }}>
            SELECTED WORKS
          </div>
          <h1 className="work-header-title">
            Engineered for impact. Delivered to production.
          </h1>
          <p className="work-header-subtitle">
            Explore our production web systems, verified architectures, and technical achievements.
          </p>
        </motion.section>

        {/* ── Editorial Alternating Rows List ── */}
        <section className="work-rows-list" aria-label="Case Studies">
          {CASE_STUDIES.map((study, index) => (
            <CaseStudyRow key={study.id} study={study} index={index} />
          ))}
        </section>

        {/* ── Bottom Consultation Banner ── */}
        <motion.section
          className="work-cta-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="work-badge-box" style={{ margin: '0 auto 20px', display: 'inline-block' }}>
            LET&apos;S TALK
          </div>
          <h2 className="work-cta-title">
            HAVE A FRICTION WORTH SOLVING?
          </h2>
          <p className="work-cta-desc">
            We handle the strategy, the architecture, and the production launch with verified engineering velocity.
          </p>
          <div>
            <Link to="/contact" className="work-clean-btn-primary" style={{ padding: '12px 28px' }}>
              <span>Start a project inquiry</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </motion.section>
      </div>
    </main>
  )
}
