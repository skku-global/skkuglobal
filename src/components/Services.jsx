import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  LuShieldCheck,
  LuLock,
  LuCheck,
  LuArrowRight,
  LuTarget,
  LuSearch,
  LuLayers,
  LuServer,
  LuUserCheck,
  LuFileCode,
  LuActivity,
  LuChevronDown,
  LuSlidersHorizontal,
  LuClock,
} from 'react-icons/lu'
import { faqs } from '../data/faqs'
import { services } from '../data/services.js'
import { CONTACT_EMAIL } from '../seo/siteMeta.js'
import './Services.css'

const categories = [
  { id: 'all', label: 'All Capabilities' },
  { id: 'live', label: 'Live Services (4)' },
  { id: 'coming-soon', label: 'Coming Soon (4)' },
  { id: 'dev', label: 'Web & Cloud' },
  { id: 'security', label: 'Cybersecurity & Web3' },
  { id: 'mobile-ai', label: 'Mobile & AI' },
]

const lifecycleSteps = [
  {
    step: '01',
    title: 'Scope it',
    icon: LuSearch,
    desc: 'We map what you need and where it could be attacked. Back within 24 hours.',
  },
  {
    step: '02',
    title: 'Build it',
    icon: LuLayers,
    desc: 'Clean modular code, a solid database schema, no bloat.',
  },
  {
    step: '03',
    title: 'Scan it',
    icon: LuShieldCheck,
    desc: 'Every endpoint gets penetration sweeps, header audits and OWASP Top 10 tests.',
  },
  {
    step: '04',
    title: 'Ship it',
    icon: LuServer,
    desc: 'Deployed with CI/CD, documented, and handed over.',
  },
]

const guarantees = [
  {
    icon: LuUserCheck,
    title: 'Founder-led',
    desc: 'The founder writes and reviews the code.',
  },
  {
    icon: LuFileCode,
    title: 'You own the code',
    desc: 'The whole repo is handed over at delivery. No lock-in.',
  },
  {
    icon: LuActivity,
    title: 'Audited before launch',
    desc: 'SecuScan checks the build before and after it goes live.',
  },
  {
    icon: LuShieldCheck,
    title: 'Registered, under NDA',
    desc: 'A CAC-registered Nigerian company. Mutual NDA on request.',
  },
]

export default function Services({ hideHeader = false, showExtended = !hideHeader }) {
  const [activeFilter, setActiveFilter] = useState('all')
  const [openFaqIndex, setOpenFaqIndex] = useState(null)

  const filteredServices = services.filter((service) => {
    if (activeFilter === 'all') return true
    if (activeFilter === 'live') return !service.isLocked
    if (activeFilter === 'coming-soon') return service.isLocked
    return service.category === activeFilter
  })

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index)
  }

  return (
    <section className="services-section" id="services" aria-labelledby="services-heading">
      {/* High-tech luminous ambient light glow */}
      <div className="services-ambient-glow" aria-hidden="true" />
      <div className="services-grid-pattern" aria-hidden="true" />

      <div className="shell services-shell">
        {!hideHeader && (
          <div className="services-header-wrapper animate">
            <div className="services-badge-pill">
              <span className="services-pulse-dot" aria-hidden="true" />
              WHAT WE DO
            </div>
            <h1 id="services-heading" className="services-main-heading">
              What We Build.{' '}
              <span className="gradient-text">What We Secure.</span>
            </h1>
            <p className="services-lead-text">
              Four things you can book today. Four more in development.
            </p>

            {/* Interactive Filter Pills */}
            <div className="services-filter-bar" role="tablist" aria-label="Filter Services">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={activeFilter === cat.id}
                  className={`filter-pill-btn ${activeFilter === cat.id ? 'active' : ''}`}
                  onClick={() => setActiveFilter(cat.id)}
                >
                  <LuSlidersHorizontal size={13} aria-hidden="true" />
                  <span>{cat.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ── Main Capabilities Grid (Live & Locked Services) ── */}
        <div className="services-cards-grid">
          {filteredServices.map((service, i) => {
            const ServiceIcon = service.icon
            const SlaIcon = service.slaMetric.icon
            const isLocked = service.isLocked

            return (
              <article
                className={`card modern-service-card card-${service.badgeType} ${isLocked ? 'is-locked-card' : ''} animate animate-delay-${(i % 4) + 1}`}
                key={service.id}
                id={service.id}
              >
                {/* Locked Banner Pill */}
                {isLocked && (
                  <div className="card-locked-banner">
                    <LuLock size={12} className="lock-banner-icon" aria-hidden="true" />
                    <span>IN ACTIVE DEVELOPMENT · PIPELINE</span>
                  </div>
                )}

                {/* Card Top Meta */}
                <div className="card-top-meta">
                  <div className="card-top-left">
                    <span className={`service-icon-box icon-theme-${service.badgeType}`} aria-hidden="true">
                      <ServiceIcon size={20} />
                    </span>
                    <div className="card-title-group">
                      <span className="service-category-tag">{service.categoryLabel}</span>
                      <h2 className="service-title">{service.title}</h2>
                    </div>
                  </div>
                  <span className={`service-badge badge-${service.badgeType}`}>
                    {isLocked ? (
                      <span className="badge-locked-inner">
                        <LuClock size={11} aria-hidden="true" />
                        <span>{service.badge}</span>
                      </span>
                    ) : (
                      service.badge
                    )}
                  </span>
                </div>

                <p className="service-summary">{service.summary}</p>

                {/* SLA / Benchmark Pill */}
                <div className={`service-sla-pill ${isLocked ? 'sla-pill-locked' : ''}`}>
                  <SlaIcon size={14} className="sla-icon" aria-hidden="true" />
                  <span>{service.slaMetric.text}</span>
                </div>

                {/* Tech Stack Tags */}
                <div className="service-tech-tags" aria-label="Technology Stack">
                  {service.techStack.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Deliverables List */}
                <div className="service-block">
                  <div className="service-block-heading">
                    {isLocked ? 'WHAT WE WILL DELIVER' : 'WHAT WE DELIVER'}
                  </div>
                  <ul className="service-list">
                    {service.includes.map((item, idx) => (
                      <li key={idx}>
                        <span className={`service-check-badge ${isLocked ? 'check-locked' : ''}`} aria-hidden="true">
                          {isLocked ? <LuClock size={11} /> : <LuCheck size={12} />}
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Ideal For Callout */}
                <div className="service-for-block">
                  <div className="service-for-header">
                    <LuTarget size={14} className="for-icon" aria-hidden="true" />
                    <span className="service-block-heading">IDEAL FOR</span>
                  </div>
                  <p className="service-for-text">{service.forWhom}</p>
                </div>

                {/* Action Link / Locked Inquiry Button */}
                <div className="service-action">
                  {isLocked ? (
                    <a
                      href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
                        service.inquirySubject || `Early Inquiry — ${service.title} — SKKU Global`
                      )}`}
                      className="service-link-btn service-locked-btn"
                    >
                      <span className="locked-btn-text">
                        <LuLock size={14} className="btn-lock-icon" aria-hidden="true" />
                        <span>Pre-Register / Inquire Early</span>
                      </span>
                      <LuArrowRight size={15} className="service-arrow" aria-hidden="true" />
                    </a>
                  ) : (
                    <Link
                      to={`/support?service=${service.id}#support`}
                      className="service-link-btn"
                    >
                      <span>Consult On This Service</span>
                      <LuArrowRight size={15} className="service-arrow" aria-hidden="true" />
                    </Link>
                  )}
                </div>
              </article>
            )
          })}
        </div>

        {/* ── Extended Value-Add Sections (Shown on /services page) ── */}
        {showExtended && (
          <>
            {/* ── 1. The 4-Stage Delivery Lifecycle ── */}
            <div className="services-lifecycle-section animate">
              <div className="lifecycle-header text-center">
                <div className="services-badge-pill">
                  <span className="services-pulse-dot" aria-hidden="true" />
                  DELIVERY METHODOLOGY
                </div>
                <h2 className="sub-heading">
                  From scoping to <span className="gradient-text">launch</span>
                </h2>
                <p className="sub-lead">
                  Four phases, so you always know what happens next.
                </p>
              </div>

              <div className="lifecycle-grid">
                {lifecycleSteps.map((step, idx) => {
                  const StepIcon = step.icon
                  return (
                    <div className="lifecycle-step-card" key={step.step}>
                      <div className="step-card-top">
                        <span className="step-number">{step.step}</span>
                        <div className="step-icon-box" aria-hidden="true">
                          <StepIcon size={18} />
                        </div>
                      </div>
                      <h3 className="step-title">{step.title}</h3>
                      <p className="step-desc">{step.desc}</p>
                      {idx < lifecycleSteps.length - 1 && (
                        <div className="step-connector-line" aria-hidden="true" />
                      )}
                    </div>
                  )
                })}
              </div>
            </div>

            {/* ── 2. Enterprise Guarantees ── */}
            <div className="services-guarantees-section animate">
              <div className="guarantees-grid">
                {guarantees.map((item) => {
                  const ItemIcon = item.icon
                  return (
                    <div className="guarantee-card" key={item.title}>
                      <div className="guarantee-icon-box" aria-hidden="true">
                        <ItemIcon size={20} />
                      </div>
                      <div className="guarantee-text">
                        <h3 className="guarantee-title">{item.title}</h3>
                        <p className="guarantee-desc">{item.desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* ── 3. Frequently Asked Questions Accordion ── */}
            <div className="services-faq-section animate">
              <div className="faq-header text-center">
                <div className="services-badge-pill">
                  <span className="services-pulse-dot" aria-hidden="true" />
                  QUESTIONS
                </div>
                <h2 className="sub-heading">Frequently Asked Questions</h2>
                <p className="sub-lead">
                  Stack, audits, payments, getting started.
                </p>
              </div>

              <div className="faq-accordion-list">
                {faqs.map((faq, index) => {
                  const isOpen = openFaqIndex === index
                  return (
                    <div
                      key={faq.q}
                      className={`faq-item ${isOpen ? 'open' : ''}`}
                    >
                      <button
                        type="button"
                        className="faq-question-btn"
                        onClick={() => toggleFaq(index)}
                        aria-expanded={isOpen}
                      >
                        <span className="faq-question-text">{faq.q}</span>
                        <span className="faq-chevron-box" aria-hidden="true">
                          <LuChevronDown
                            size={16}
                            className={`faq-chevron ${isOpen ? 'rotate' : ''}`}
                          />
                        </span>
                      </button>
                      {isOpen && (
                        <div className="faq-answer-panel">
                          <p>{faq.a}</p>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
