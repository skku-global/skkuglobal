import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ServicePowerhouse from '../components/ServicePowerhouse'
import ScrollStreamFlow from '../components/ScrollStreamFlow'
import Seo from '../components/Seo'
import './ServicesPage.css'

// ── 3 Bespoke Premium SLA Logos / Emblems ──

/** 1. Velocity Launch Chrono Turbine Logo (5–7 Day Launch) */
function VelocityLaunchLogo({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <circle cx="14" cy="14" r="12" stroke="#E65100" strokeWidth="1.6" strokeDasharray="3 2" opacity="0.45" />
      <path
        d="M6 19.5C4.2 18 3 15.7 3 13C3 7 7.5 3 14 3C20.5 3 25 7.5 25 14C25 20.5 20.5 25 14 25C11.3 25 9 23.8 7.5 22"
        stroke="#E65100"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M14 8V14L18 16"
        stroke="#E65100"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polygon
        points="14,14 22,7 18,17"
        fill="rgba(230, 81, 0, 0.2)"
        stroke="#E65100"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/** 2. Cryptographic Code Ownership & Git Transfer Logo (100% Code Transfer) */
function CodeHandoverLogo({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="3.5" stroke="#E65100" strokeWidth="2" fill="rgba(230, 81, 0, 0.15)" />
      <circle cx="20" cy="20" r="3.5" stroke="#E65100" strokeWidth="2" fill="rgba(230, 81, 0, 0.15)" />
      <circle cx="8" cy="20" r="2.5" fill="#E65100" />
      <path
        d="M8 11.5V17.5M11.5 8H16C18.2 8 20 9.8 20 12V16.5"
        stroke="#E65100"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <polyline
        points="17 14 20 17 23 14"
        stroke="#E65100"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/** 3. Milestone Seal & Institutional Security Logo (Milestone Contracts) */
function MilestoneContractLogo({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path
        d="M14 2.5L4.5 6.5V13.8C4.5 19.8 8.6 25.3 14 26.8C19.4 25.3 23.5 19.8 23.5 13.8V6.5L14 2.5Z"
        stroke="#E65100"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="rgba(230, 81, 0, 0.08)"
      />
      <circle cx="14" cy="14" r="7.5" stroke="#E65100" strokeWidth="1.4" strokeDasharray="2 2" opacity="0.6" />
      <path
        d="M10.5 14L13 16.5L17.5 11.5"
        stroke="#E65100"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function ServicesPage() {
  return (
    <main id="main" className="services-page-main">
      <Seo route="/services" />

      {/* ── 1. Digital Design Powerhouse Showcase (Replica of wearestokt.com/#services) ── */}
      <ServicePowerhouse />

      {/* ── 2. SLA Guarantees with Bespoke Logos ── */}
      <section className="services-sla-section" aria-label="Guarantees">
        <div className="services-sla-container">
          <div className="services-sla-grid">
            <div className="services-sla-card">
              <div className="services-sla-icon">
                <VelocityLaunchLogo size={28} />
              </div>
              <h4>5–7 Day Launch</h4>
              <p>
                Focused sprint development. We don&apos;t drag projects out across quarters. You receive working production builds within days.
              </p>
            </div>

            <div className="services-sla-card">
              <div className="services-sla-icon">
                <CodeHandoverLogo size={28} />
              </div>
              <h4>100% Code Transfer</h4>
              <p>
                You own every single commit, database migration, and asset. Full handover to your GitHub and cloud account on final milestone.
              </p>
            </div>

            <div className="services-sla-card">
              <div className="services-sla-icon">
                <MilestoneContractLogo size={28} />
              </div>
              <h4>Milestone Contracts</h4>
              <p>
                50% commitment to kick off architecture, 50% only when the platform is fully approved and ready for live deployment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Animated Friction Banner ── */}
      <section className="services-friction-banner">
        <div className="services-friction-container">
          <motion.h2
            className="services-friction-title"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            HAVE A <span className="services-friction-orange">FRICTION</span> WORTH <span className="services-friction-orange">SOLVING?</span>
          </motion.h2>
          <p className="services-friction-sub">
            Walk through our interactive diagnostic flow below to generate your tailored digital blueprint.
          </p>
        </div>
      </section>

      {/* ── 4. The Transformation Stream (Comes Last as Requested) ── */}
      <ScrollStreamFlow />
    </main>
  )
}
