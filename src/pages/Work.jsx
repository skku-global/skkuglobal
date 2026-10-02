import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Seo from '../components/Seo'
import './Work.css'

// ── Standard Normal React SVG Icons (Zero external icon library dependency) ──
function ExternalLinkIcon({ size = 12 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

function ArrowRightIcon({ size = 13 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}

function PlusIcon({ size = 11 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  )
}

const CASE_STUDIES = [
  {
    id: 'secuscan',
    client: 'SecuScan Security',
    tagline: 'SecuScan | Automated zero-state vulnerability scanner for mission-critical web platforms',
    heading: 'SECUSCAN AUDIT ENGINE',
    hoverColor: '#0C182A', // Deep Midnight Oceanic Navy (Deep, rich, not too light)
    note: 'The founders were losing enterprise deals without certified audits. We engineered an isolated zero-state scanner crawling endpoints for OWASP leaks, CORS disclosures, and SSL ciphers with zero database impact.',
    liveUrl: 'https://secuscan-orpin.vercel.app/',
    images: [
      { src: '/screenshots/secuscan/slide-1.webp', label: 'Overview Dashboard' },
      { src: '/screenshots/secuscan/slide-2.webp', label: 'Live Scanner' },
      { src: '/screenshots/secuscan/slide-3.webp', label: 'Vulnerability Matrix' },
      { src: '/screenshots/secuscan/slide-4.webp', label: 'Compliance PDF' },
    ],
    achievements: [
      { num: '<30s', label: 'Audit Speed' },
      { num: '100%', label: 'OWASP Coverage' },
      { num: '4.8k', label: 'Threat Vectors' },
      { num: '0ms', label: 'Production Impact' },
    ],
  },
  {
    id: 'luxehair',
    client: 'Luxe Hair Co.',
    tagline: 'Luxe Hair Co. | Transforming manual DM exchanges into luxury digital retail',
    heading: 'LUXE HAIR STOREFRONT',
    hoverColor: '#28160B', // Deep Warm Espresso Bronze (Deep, rich, not too light)
    note: 'Losing high-ticket clients across London, New York, and Lagos to fragmented direct messages drained 15 hours weekly. We engineered a custom React storefront with 1-tap WhatsApp invoice routing.',
    liveUrl: 'https://luxehair-tau.vercel.app/',
    images: [
      { src: '/screenshots/luxehair/slide-1.webp', label: 'Luxury Store' },
      { src: '/screenshots/luxehair/slide-2.webp', label: 'Texture Customizer' },
      { src: '/screenshots/luxehair/slide-3.webp', label: 'Cart & Currencies' },
      { src: '/screenshots/luxehair/slide-4.webp', label: 'WhatsApp Invoicing' },
    ],
    achievements: [
      { num: '+62%', label: 'Conversion' },
      { num: '1-Tap', label: 'WhatsApp Order' },
      { num: '3', label: 'Currencies' },
      { num: '15h', label: 'Weekly Saved' },
    ],
  },
  {
    id: 'carbreezy',
    client: 'CarBreezy Automotive',
    tagline: 'CarBreezy | Re-engineering vehicle purchasing with verified inspection badges',
    heading: 'CARBREEZY MARKETPLACE',
    hoverColor: '#0A2315', // Deep Emerald Forest (Deep, rich, not too light)
    note: 'Traditional classifieds were notorious for duplicate spam and salvage titles. We engineered a client-side catalog with sub-100ms faceted filters, condition badges, and instant dealer communication.',
    liveUrl: 'https://carbreezy-react.vercel.app/',
    images: [
      { src: '/screenshots/carbreezy/slide-1.webp', label: 'Vehicle Catalog' },
      { src: '/screenshots/carbreezy/slide-2.webp', label: 'Faceted Filters' },
      { src: '/screenshots/carbreezy/slide-3.webp', label: 'Inspection Badges' },
      { src: '/screenshots/carbreezy/slide-4.webp', label: 'Dealer Connect' },
    ],
    achievements: [
      { num: '<100ms', label: 'Search Latency' },
      { num: '2.4x', label: 'Lead Velocity' },
      { num: '120+', label: 'Inspected' },
      { num: '0%', label: 'Duplicate Spam' },
    ],
  },
  {
    id: 'junicash',
    client: 'JuniCash Global',
    tagline: 'JuniCash | Intuitive neo-banking wallet designed with Swiss private finish',
    heading: 'JUNICASH WALLET',
    hoverColor: '#1C122F', // Deep Royal Midnight Violet (Deep, rich, not too light)
    note: 'Sluggish OTP deliveries eroded user trust during fintech onboarding. We built an Express & MongoDB core paired with Resend email OTP verification, cryptographic JWT sessions, and real-time ledger histories.',
    liveUrl: 'https://junicash.vercel.app',
    images: [
      { src: '/screenshots/junicash/slide-1.webp', label: 'Wallet Portfolio' },
      { src: '/screenshots/junicash/slide-2.webp', label: 'Secure OTP Auth' },
      { src: '/screenshots/junicash/slide-3.webp', label: 'Real-Time Ledger' },
      { src: '/screenshots/junicash/slide-4.webp', label: 'Instant Transfers' },
    ],
    achievements: [
      { num: '256-bit', label: 'Cryptographic Auth' },
      { num: '<1s', label: 'Ledger Latency' },
      { num: '100%', label: 'Pilot Onboarding' },
      { num: '0', label: 'Discrepancies' },
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

          {/* Subtitle / Client Line */}
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

          {/* Floating 'EXPLORE' Button */}
          <div className="work-banner-actions">
            <a
              href={study.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="work-explore-btn"
            >
              <span>EXPLORE</span>
              <ExternalLinkIcon size={12} />
            </a>

            <Link
              to={`/contact?objective=${encodeURIComponent(study.heading)}`}
              className="work-inquire-link"
            >
              <span>Build similar</span>
              <ArrowRightIcon size={13} />
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
                <PlusIcon size={11} />
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
            OUR WORK
          </h1>
          <p className="work-hero-subtext">
            Explore, we really put our time and effort into this cause this is special
          </p>
        </div>
      </section>

      {/* ── Full Feed List with Hover Color Shift & Bending Typography ── */}
      <section className="work-banners-feed" aria-label="Selected Work Cases">
        {CASE_STUDIES.map((study, index) => (
          <WorkBannerRow key={study.id} study={study} index={index} />
        ))}
      </section>

      {/* ── Bottom Inquiries Card ── */}
      <section className="work-bottom-cta">
        <div className="work-cta-container">
          <div className="work-cta-card">
            <span className="work-hero-kicker" style={{ marginBottom: '16px' }}>LET&apos;S TALK</span>
            <h2 className="work-cta-bold">HAVE A FRICTION WORTH SOLVING?</h2>
            <p className="work-cta-sub">
              We handle the strategy, the architecture, and the production launch with verified engineering velocity.
            </p>
            <Link to="/contact" className="work-explore-btn" style={{ display: 'inline-flex', padding: '14px 34px', fontSize: '12px' }}>
              <span>START A PROJECT INQUIRY</span>
              <ArrowRightIcon size={14} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
