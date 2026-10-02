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
    tagline: 'SecuScan | Automated zero-state vulnerability scanner for mission-critical web platforms',
    heading: 'SECUSCAN AUDIT ENGINE',
    hoverColor: '#0055FF', // Electric Blue (Matches Screenshot 1)
    note: 'The founders were losing enterprise deals without certified audits. We engineered an isolated zero-state scanner crawling endpoints for OWASP leaks, CORS disclosures, and SSL ciphers with zero database impact.',
    liveUrl: 'https://secuscan-orpin.vercel.app/',
    images: [
      { src: '/screenshots/secuscan/slide-1.webp', label: 'Overview Dashboard' },
      { src: '/screenshots/secuscan/slide-2.webp', label: 'Live Scanner' },
      { src: '/screenshots/secuscan/slide-3.webp', label: 'Vulnerability Matrix' },
      { src: '/screenshots/secuscan/slide-4.webp', label: 'Compliance PDF' },
    ],
    achievements: [
      { icon: Gauge, num: '<30s', label: 'Audit Speed' },
      { icon: ShieldCheck, num: '100%', label: 'OWASP Coverage' },
      { icon: Activity, num: '4.8k', label: 'Threat Vectors' },
      { icon: Cpu, num: '0ms', label: 'Production Impact' },
    ],
  },
  {
    id: 'luxehair',
    client: 'Luxe Hair Co.',
    tagline: 'Luxe Hair Co. | Transforming manual DM exchanges into luxury digital retail',
    heading: 'LUXE HAIR STOREFRONT',
    hoverColor: '#E65100', // Vibrant Sunset Orange (Matches Screenshot 4)
    note: 'Losing high-ticket clients across London, New York, and Lagos to fragmented direct messages drained 15 hours weekly. We engineered a custom React storefront with 1-tap WhatsApp invoice routing.',
    liveUrl: 'https://luxehair-tau.vercel.app/',
    images: [
      { src: '/screenshots/luxehair/slide-1.webp', label: 'Luxury Store' },
      { src: '/screenshots/luxehair/slide-2.webp', label: 'Texture Customizer' },
      { src: '/screenshots/luxehair/slide-3.webp', label: 'Cart & Currencies' },
      { src: '/screenshots/luxehair/slide-4.webp', label: 'WhatsApp Invoicing' },
    ],
    achievements: [
      { icon: TrendingUp, num: '+62%', label: 'Conversion' },
      { icon: Zap, num: '1-Tap', label: 'WhatsApp Order' },
      { icon: Globe, num: '3', label: 'Currencies' },
      { icon: Clock, num: '15h', label: 'Weekly Saved' },
    ],
  },
  {
    id: 'carbreezy',
    client: 'CarBreezy Automotive',
    tagline: 'CarBreezy | Re-engineering vehicle purchasing with verified inspection badges',
    heading: 'CARBREEZY MARKETPLACE',
    hoverColor: '#2E5640', // Deep Forest / Sage Green (Matches Screenshot 3)
    note: 'Traditional classifieds were notorious for duplicate spam and salvage titles. We engineered a client-side catalog with sub-100ms faceted filters, condition badges, and instant dealer communication.',
    liveUrl: 'https://carbreezy-react.vercel.app/',
    images: [
      { src: '/screenshots/carbreezy/slide-1.webp', label: 'Vehicle Catalog' },
      { src: '/screenshots/carbreezy/slide-2.webp', label: 'Faceted Filters' },
      { src: '/screenshots/carbreezy/slide-3.webp', label: 'Inspection Badges' },
      { src: '/screenshots/carbreezy/slide-4.webp', label: 'Dealer Connect' },
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
    tagline: 'JuniCash | Intuitive neo-banking wallet designed with Swiss private finish',
    heading: 'JUNICASH WALLET',
    hoverColor: '#5E17EB', // Electric Royal Violet
    note: 'Sluggish OTP deliveries eroded user trust during fintech onboarding. We built an Express & MongoDB core paired with Resend email OTP verification, cryptographic JWT sessions, and real-time ledger histories.',
    liveUrl: 'https://junicash.vercel.app',
    images: [
      { src: '/screenshots/junicash/slide-1.webp', label: 'Wallet Portfolio' },
      { src: '/screenshots/junicash/slide-2.webp', label: 'Secure OTP Auth' },
      { src: '/screenshots/junicash/slide-3.webp', label: 'Real-Time Ledger' },
      { src: '/screenshots/junicash/slide-4.webp', label: 'Instant Transfers' },
    ],
    achievements: [
      { icon: Lock, num: '256-bit', label: 'Cryptographic Auth' },
      { icon: Clock, num: '<1s', label: 'Ledger Latency' },
      { icon: Award, num: '100%', label: 'Pilot Onboarding' },
      { icon: ShieldCheck, num: '0', label: 'Discrepancies' },
    ],
  },
]

// Single Dynamic Banner Row
function WorkBannerRow({ study, index }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  // Alternate sides per user request:
  // Row 1 (index 0): Image on RIGHT, Text on LEFT
  // Row 2 (index 1): Image on LEFT, Text on RIGHT (isImageLeft = true)
  // Row 3 (index 2): Image on RIGHT, Text on LEFT
  // Row 4 (index 3): Image on LEFT, Text on RIGHT (isImageLeft = true)
  const isImageLeft = index % 2 === 1

  const currentImage = study.images[activeImageIndex] || study.images[0]

  return (
    <motion.article
      id={study.id}
      className={`work-banner-row ${isImageLeft ? 'image-on-left' : 'image-on-right'}`}
      style={{ '--row-hover-bg': study.hoverColor }}
      initial={{ opacity: 0, y: 45 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.18 }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="work-banner-inner">
        {/* ── TEXT CONTENT BLOCK ── */}
        <div className="work-banner-text-col">
          {/* Main Title: Bends & Slants on Hover! */}
          <h2 className="work-banner-title">
            {study.heading}
          </h2>

          {/* Subtitle / Client Line (Matches user screenshots: "Lidl | Reacting to Oasis' comeback...") */}
          <p className="work-banner-tagline">
            {study.tagline}
          </p>

          {/* Editorial Note narrative */}
          <p className="work-banner-note">
            {study.note}
          </p>

          {/* Minimalist Metrics Badges */}
          <div className="work-banner-metrics">
            {study.achievements.map((item, i) => (
              <span key={i} className="work-banner-metric-pill">
                <strong>{item.num}</strong> {item.label}
              </span>
            ))}
          </div>

          {/* Floating 'EXPLORE' Button matching reference screenshots */}
          <div className="work-banner-actions">
            <a
              href={study.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="work-explore-btn"
            >
              <span>EXPLORE</span>
              <ExternalLink size={12} />
            </a>

            <Link
              to={`/contact?objective=${encodeURIComponent(study.heading)}`}
              className="work-inquire-link"
            >
              <span>Build similar</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>

        {/* ── VISUAL WORK IMAGE BLOCK (Alternates sides: 1 on Right, 2 on Left, etc.) ── */}
        <div className="work-banner-visual-col">
          <div className="work-banner-img-frame">
            <img
              src={currentImage.src}
              alt={`${study.heading} - ${currentImage.label}`}
              className="work-banner-img"
              loading="lazy"
            />

            {/* Quick mini-switcher & space for more images */}
            <div className="work-banner-thumbs">
              {study.images.map((img, imgIdx) => (
                <button
                  key={imgIdx}
                  type="button"
                  className={`work-banner-thumb-btn ${activeImageIndex === imgIdx ? 'is-active' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation()
                    setActiveImageIndex(imgIdx)
                  }}
                  title={img.label}
                >
                  <img src={img.src} alt={img.label} />
                </button>
              ))}

              {/* Dedicated '+ Add' slot for upcoming images */}
              <div className="work-banner-add-btn" title="Space to add image">
                <Plus size={11} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  )
}

export default function Work() {
  return (
    <main id="main" className="work-page-main">
      <Seo route="/work" />

      {/* ── Top Header ── */}
      <section className="work-page-hero">
        <div className="work-hero-container">
          <span className="work-hero-kicker">SELECTED WORK</span>
          <h1 className="work-hero-headline">
            PRODUCTION ARCHITECTURES. VERIFIED VELOCITY.
          </h1>
          <p className="work-hero-subtext">
            Hover over any project to inspect the system, explore deployment metrics, and review the live codebase.
          </p>
        </div>
      </section>

      {/* ── Full-Bleed Banners List with Hover Color Shift & Bending Typography ── */}
      <section className="work-banners-feed" aria-label="Selected Work Cases">
        {CASE_STUDIES.map((study, index) => (
          <WorkBannerRow key={study.id} study={study} index={index} />
        ))}
      </section>

      {/* ── Bottom Inquiries Card ── */}
      <section className="work-bottom-cta">
        <div className="work-hero-container">
          <h2 className="work-cta-bold">HAVE A FRICTION WORTH SOLVING?</h2>
          <p className="work-cta-sub">
            We handle the strategy, the architecture, and the production launch with verified engineering velocity.
          </p>
          <Link to="/contact" className="work-explore-btn" style={{ display: 'inline-flex', padding: '14px 32px', fontSize: '13px' }}>
            <span>START A PROJECT INQUIRY</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </main>
  )
}
