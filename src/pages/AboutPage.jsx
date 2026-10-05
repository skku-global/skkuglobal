import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Seo from '../components/Seo'
import { waLink } from '../seo/siteMeta.js'
import './AboutPage.css'

// ── Native Inline React SVG Icons (Zero external icon library dependency) ──
function ArrowRightIcon({ size = 13 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}

// ── Pillar Cards Data ──
const pillars = [
  {
    id: 'eng',
    label: 'Engineering',
    headline: 'Custom React. No templates.',
    body: 'Every platform is built from scratch in React + Vite. You receive 100% repository ownership at handover — no vendor tie-in, no hidden lock-in clause.',
  },
  {
    id: 'sec',
    label: 'Security',
    headline: 'SecuScan™ on every release.',
    body: 'Our proprietary vulnerability audit covers OWASP Top 10, JWT hardening, CORS policy, and rate-limit architecture before any build goes live.',
  },
  {
    id: 'vel',
    label: 'Velocity',
    headline: '5–7 day sprint windows.',
    body: 'Founder-led engagement means zero hand-off lag. One point of contact, one delivery standard — from wireframe through deployment on Vercel or Render.',
  },
]

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

// ── Authentic Cursive Founder Signature (Vector SVG) ──
function FounderSignature() {
  return (
    <svg
      className="about-signature-svg"
      viewBox="0 0 240 80"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-label="Signature of Abdulkabir Ajiboye"
    >
      <path d="M 25,60 C 35,20 45,15 50,35 C 55,55 40,65 30,55 C 20,45 35,25 65,28 C 90,30 95,48 100,50 C 105,52 110,38 118,42 C 125,46 130,55 138,48 C 146,40 150,30 156,46 C 160,56 168,48 178,44 C 188,40 195,50 205,42" />
      <path d="M 45,45 Q 120,38 215,35" strokeWidth="1.8" opacity="0.85" />
    </svg>
  )
}

export default function AboutPage() {
  return (
    <main id="main" className="about-page-main">
      <Seo route="/about" />

      {/* ── Top Header ── */}
      <section className="about-page-hero">
        <div className="about-hero-container">
          <span className="about-hero-kicker">FOUNDING ETHOS</span>
          <h1 className="about-hero-headline">OUR STORY</h1>
          <p className="about-hero-subtext">
            Why we built SKKU Global — a personal note on craft, velocity, and zero agency compromise.
          </p>
        </div>
      </section>

      {/* ── Pinned Founder Letter (Combined 1 Continuous Letter: Half & Half) ── */}
      <section className="about-letter-section" aria-label="Founder Letter">
        <motion.article
          className="about-letter-sheet"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Realistic Masking Tape Pinned at Top Center */}
          <div className="about-letter-tape" aria-hidden="true" />

          {/* Letter Body: Authentic Editorial Narrative */}
          <div className="about-letter-body">
            <p className="about-letter-lead">
              Think about everything that&apos;s gotten faster over the last decade — cloud computing, artificial intelligence, open-source infrastructure, global payment rails. Now think about your last digital agency experience. It probably got slower. More fragmented. More expensive. SKKU Global was built to fix that.
            </p>

            <p>
              I grew up watching ambitious founders get trapped between four disconnected vendors: a design studio that didn&apos;t write production code, a dev shop that didn&apos;t understand conversion psychology, and external security consultants who arrived only after the breach. The result was always the same — blown timelines, clunky templates, and platforms that fractured under real load.
            </p>

            <p>
              SKKU Global Technologies Limited (registered in Nigeria) was built to rebuild that model from first principles. We are a founder-led studio, which means the person who scopes your project is the same person who builds it, tests it, and hands you the keys. No project managers in between. No outsourced execution.
            </p>

            <p>
              Our stack is deliberate: <strong>React / Vite</strong> for the frontend, <strong>Node / Express + MongoDB</strong> for the backend, <strong>Supabase</strong> for managed data where appropriate, <strong>Redis</strong> for caching, and <strong>JWT</strong> for stateless authentication. Every deployment ships with <strong>SecuScan™</strong> — our in-house vulnerability audit covering the OWASP Top 10 before a single user touches the interface.
            </p>

            <p>
              The name SKKU carries personal weight. It is the legacy being built — one codebase, one client, one sprint at a time. The goal is not volume. It is quality that compounds.
            </p>

            <p className="about-letter-punchline">
              Software built with the craft, velocity, and security it deserves.
            </p>

            {/* Signature & Signoff Block */}
            <div className="about-letter-signoff">
              <FounderSignature />
              <h3 className="about-signoff-name">Abdulkabir Ajiboye</h3>
              <p className="about-signoff-title">Founder &amp; Lead Systems Architect, SKKU Global</p>
            </div>
          </div>
        </motion.article>
      </section>

      {/* ── Three Pillars ── */}
      <section className="about-pillars-section" aria-label="Core Pillars">
        <div className="about-pillars-grid">
          {pillars.map((p, i) => (
            <motion.div
              key={p.id}
              className="about-pillar-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12 * i, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="about-pillar-label">{p.label}</span>
              <h2 className="about-pillar-headline">{p.headline}</h2>
              <p className="about-pillar-body">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Direct Founder Actions & Institutional Verification ── */}
      <section className="about-bottom-strip">
        <div className="about-actions-row">
          <Link to="/contact" className="about-primary-btn">
            <span>START A PROJECT INQUIRY</span>
            <ArrowRightIcon size={13} />
          </Link>

          <a
            href={waLink("Hello Abdulkabir, I read your letter on SKKU Global and want to discuss a project.")}
            target="_blank"
            rel="noreferrer"
            className="about-secondary-btn"
          >
            <span>CHAT WITH FOUNDER ON WHATSAPP</span>
            <ExternalLinkIcon size={12} />
          </a>
        </div>

        <div className="about-meta-pills">
          <span className="about-meta-pill">
            LEGAL STATUS: <strong>SKKU GLOBAL TECHNOLOGIES LIMITED • REGISTERED IN NIGERIA</strong>
          </span>
          <span className="about-meta-pill">
            LOCATION: <strong>Ibadan · Lagos · Global</strong>
          </span>
          <span className="about-meta-pill">
            CODE HANDOVER: <strong>100% Repository Rights</strong>
          </span>
          <span className="about-meta-pill">
            EMAIL: <strong>admin@skkuglobal.com</strong>
          </span>
        </div>
      </section>
    </main>
  )
}
