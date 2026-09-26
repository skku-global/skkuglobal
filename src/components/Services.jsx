import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  LuCode,
  LuShieldCheck,
  LuShoppingBag,
  LuLock,
  LuCheck,
  LuArrowRight,
  LuZap,
  LuShieldAlert,
  LuCreditCard,
  LuKey,
  LuTarget,
  LuSearch,
  LuLayers,
  LuServer,
  LuUserCheck,
  LuFileCode,
  LuActivity,
  LuChevronDown,
  LuSlidersHorizontal,
  LuSmartphone,
  LuCpu,
  LuCloud,
  LuClock,
} from 'react-icons/lu'
import './Services.css'

const categories = [
  { id: 'all', label: 'All Capabilities' },
  { id: 'live', label: 'Live Services (4)' },
  { id: 'coming-soon', label: 'Coming Soon (4)' },
  { id: 'dev', label: 'Web & Cloud' },
  { id: 'security', label: 'Cybersecurity & Web3' },
  { id: 'mobile-ai', label: 'Mobile & AI' },
]

const services = [
  /* ════════ LIVE CAPABILITIES ════════ */
  {
    id: 'web-dev',
    status: 'live',
    isLocked: false,
    category: 'dev',
    categoryLabel: 'Full-Stack Architecture',
    title: 'Custom Web & SaaS Engineering',
    badge: 'Core Competency',
    badgeType: 'emerald',
    icon: LuCode,
    slaMetric: {
      icon: LuZap,
      text: 'Sub-100ms API Latency · 99.9% Production SLA',
    },
    techStack: ['React 19', 'Next.js', 'FastAPI', 'Node.js', 'PostgreSQL', 'Docker'],
    summary:
      'High-performance web applications, API architectures, and conversion-optimized platforms built for scale.',
    includes: [
      'Full-stack custom web applications (React, Next.js, FastAPI, Node.js)',
      'Database architecture & resilient schema design (PostgreSQL, Prisma, MongoDB)',
      'Responsive, mobile-first interfaces with sub-second page load times',
      'Production cloud deployment, automated CI/CD pipelines, and SLA monitoring',
    ],
    forWhom:
      'Founders, funded startups, and enterprise teams needing robust, scalable codebases rather than slow off-the-shelf templates.',
  },
  {
    id: 'security-audits',
    status: 'live',
    isLocked: false,
    category: 'security',
    categoryLabel: 'Cybersecurity Engine',
    title: 'SecuScan Web Vulnerability Audits',
    badge: 'Proprietary Engine',
    badgeType: 'cyan',
    icon: LuShieldCheck,
    slaMetric: {
      icon: LuShieldAlert,
      text: 'Sub-30s Automated Scan · OWASP Top 10 Coverage',
    },
    techStack: ['Multi-Threaded AST', 'OWASP Inspection', 'Header Hardening', 'CVE Mapping', 'Remediation PDF'],
    summary:
      'Automated penetration testing and vulnerability analysis to eliminate security loopholes before malicious actors exploit them.',
    includes: [
      'SecuScan multi-threaded vulnerability scan and security header verification',
      'Authentication, session hijacking, and OTP flow vulnerability testing',
      'OWASP Top 10 compliance inspection and API parameter tampering checks',
      'Executive-ready PDF vulnerability remediation report with engineering fix instructions',
    ],
    forWhom:
      'Fintech platforms, SaaS providers, e-commerce stores, and businesses managing customer payments or sensitive account credentials.',
  },
  {
    id: 'ecommerce',
    status: 'live',
    isLocked: false,
    category: 'dev',
    categoryLabel: 'Retail & Commerce',
    title: 'E-Commerce & Retail Systems',
    badge: 'High Conversion',
    badgeType: 'amber',
    icon: LuShoppingBag,
    slaMetric: {
      icon: LuCreditCard,
      text: 'Multi-Currency (₦, $, £, €) · Real-Time Carts',
    },
    techStack: ['Dynamic Carts', 'Paystack / Stripe', 'WhatsApp Concierge', 'Edge Caching', 'Inventory Sync'],
    summary:
      'Full-featured luxury and commercial online storefronts engineered with real-time carts, multi-currency support, and payment routing.',
    includes: [
      'Custom storefronts with interactive catalog filters and dynamic inventory states',
      'Multi-currency processing (₦, $, £, €) and automated checkout drawers',
      'Direct-to-WhatsApp concierge checkout integration for high-trust closing',
      'Fast CDN image optimization and mobile-first shopping UX',
    ],
    forWhom:
      'Luxury retail brands, merchant founders, and direct-to-consumer businesses seeking higher checkout conversion rates.',
  },
  {
    id: 'digital-security',
    status: 'live',
    isLocked: false,
    category: 'security',
    categoryLabel: 'Infrastructure Hardening',
    title: 'Enterprise Digital Defense & Infrastructure',
    badge: '360° Protection',
    badgeType: 'violet',
    icon: LuLock,
    slaMetric: {
      icon: LuKey,
      text: 'Zero-Trust Protocol · SPF / DKIM / DMARC Sealed',
    },
    techStack: ['Cloudflare Zero-Trust', 'DMARC Enforcement', 'Hardware 2FA', 'KMS Isolation', 'Audit Logging'],
    summary:
      'Comprehensive protection across your domain identity, cloud assets, administrative accounts, and business communications.',
    includes: [
      'Business email authentication (SPF, DKIM, DMARC) and domain spoofing defense',
      'Administrative account hardening, multi-factor hardware keys, and password management',
      'Cloud storage and server credential isolation',
      'Bundled "Build-and-Secure" architecture for new enterprise product launches',
    ],
    forWhom:
      'Corporate executives, fast-scaling startups, and businesses requiring full protection across their entire digital footprint.',
  },

  /* ════════ UPCOMING SOFTWARE ENGINEERING HORIZONS (LOCKED · COMING SOON) ════════ */
  {
    id: 'mobile-apps',
    status: 'coming-soon',
    isLocked: true,
    category: 'mobile-ai',
    categoryLabel: 'Native Mobile Systems',
    title: 'iOS & Android Native Mobile Engineering',
    badge: 'Coming Soon',
    badgeType: 'locked',
    icon: LuSmartphone,
    slaMetric: {
      icon: LuZap,
      text: '60–120fps Native UX · Apple App Store & Google Play Direct Deployment',
    },
    techStack: ['Swift', 'Kotlin', 'React Native', 'Flutter', 'Expo', 'Push Gateways', 'Encrypted Keychain'],
    summary:
      'High-performance iOS and Android applications with offline-first synchronization, native biometric authentication, and smooth 120fps interfaces.',
    includes: [
      'End-to-end native iOS (Swift) and Android (Kotlin) or cross-platform (React Native/Flutter) mobile apps',
      'Offline-first client data caching and encrypted SQLite/Realm storage synchronization',
      'Biometric authentication (Face ID, Touch ID, Android Biometrics) & secure hardware keychain integration',
      'App Store & Google Play distribution, automated OTA updates, and compliance verification',
    ],
    forWhom:
      'Fast-scaling SaaS platforms, fintech startups, and consumer retail businesses expanding beyond web into dedicated mobile apps.',
    inquirySubject: 'Early Inquiry — Native Mobile App Engineering',
  },
  {
    id: 'ai-ml',
    status: 'coming-soon',
    isLocked: true,
    category: 'mobile-ai',
    categoryLabel: 'Applied Artificial Intelligence',
    title: 'Enterprise AI & Autonomous Agents',
    badge: 'Coming Soon',
    badgeType: 'locked',
    icon: LuCpu,
    slaMetric: {
      icon: LuActivity,
      text: 'Sub-500ms Vector Semantic Search · Private Data Enclaves',
    },
    techStack: ['PyTorch', 'OpenAI API', 'LangChain', 'pgvector', 'FastAPI', 'RAG Pipelines', 'Llama 3'],
    summary:
      'Custom retrieval-augmented generation (RAG) knowledge systems, autonomous workflow agents, and private LLM fine-tuning for enterprises.',
    includes: [
      'Private enterprise knowledge search (RAG) over proprietary internal documentation and contracts',
      'Autonomous task execution agents for automated customer operations and compliance checks',
      'Vector database architecture (pgvector, Pinecone, Qdrant) with semantic clustering and fast retrieval',
      'Zero-data-retention LLM privacy guardrails ensuring sensitive business data remains confidential',
    ],
    forWhom:
      'Enterprises seeking to automate repetitive operational bottlenecks, deploy intelligent proprietary assistants, and extract instant insights from vast databases.',
    inquirySubject: 'Early Inquiry — Enterprise AI & Autonomous Agents',
  },
  {
    id: 'cloud-devops',
    status: 'coming-soon',
    isLocked: true,
    category: 'dev',
    categoryLabel: 'Cloud Infrastructure & SRE',
    title: 'Cloud DevOps & Kubernetes Orchestration',
    badge: 'Coming Soon',
    badgeType: 'locked',
    icon: LuCloud,
    slaMetric: {
      icon: LuServer,
      text: '99.99% Multi-Region Uptime · Zero-Downtime Rolling Deploys',
    },
    techStack: ['Kubernetes', 'Docker', 'Terraform', 'AWS', 'GCP', 'Prometheus', 'Grafana', 'GitHub Actions'],
    summary:
      'Enterprise infrastructure as code, auto-scaling Kubernetes clusters, and automated continuous delivery pipelines built for zero downtime.',
    includes: [
      'Automated Infrastructure as Code (Terraform, Ansible) across AWS, Google Cloud, and DigitalOcean',
      'Kubernetes cluster deployment, auto-scaling pods, and ingress traffic balancing',
      'Zero-downtime rolling deployments with automated health checks and instant rollback triggers',
      'Real-time telemetry and alerting meshes via Prometheus, Grafana, and Datadog',
    ],
    forWhom:
      'Growing platforms experiencing high traffic spikes, migrating away from fragile single servers, or needing bank-grade infrastructure redundancy.',
    inquirySubject: 'Early Inquiry — Cloud DevOps & Kubernetes Orchestration',
  },
  {
    id: 'web3-contracts',
    status: 'coming-soon',
    isLocked: true,
    category: 'security',
    categoryLabel: 'Decentralized Protocols',
    title: 'Smart Contract Architecture & Verification',
    badge: 'Coming Soon',
    badgeType: 'locked',
    icon: LuLayers,
    slaMetric: {
      icon: LuKey,
      text: 'Gas-Optimized Bytecode · Re-entrancy & Logic Audited',
    },
    techStack: ['Solidity', 'Foundry', 'Hardhat', 'EVM', 'Viem', 'OpenZeppelin', 'Slither'],
    summary:
      'Secure cryptographic state logic, decentralized token systems, and formal smart contract verification engineered to prevent capital drain exploits.',
    includes: [
      'Custom EVM smart contracts (ERC-20, ERC-721, multi-sig escrow, and custom protocol logic)',
      'Static and dynamic vulnerability testing against re-entrancy, integer overflow, and flash-loan vectors',
      'Gas optimization profiling reducing on-chain execution costs by up to 40%',
      'Full regression test suites with 100% branch and edge-case execution coverage',
    ],
    forWhom:
      'Fintech protocols, tokenized asset ventures, and decentralized applications requiring bulletproof, immutable smart contract logic.',
    inquirySubject: 'Early Inquiry — Smart Contract Architecture & Verification',
  },
]

const lifecycleSteps = [
  {
    step: '01',
    title: 'Discovery & Threat Modeling',
    icon: LuSearch,
    desc: 'Deep-dive technical scoping, architectural review, and attack surface assessment completed within 24 hours.',
  },
  {
    step: '02',
    title: 'Bespoke Architecture & Engineering',
    icon: LuLayers,
    desc: 'Engineered with clean, modular code, resilient database schemas, and zero-bloat dependencies.',
  },
  {
    step: '03',
    title: 'Automated SecuScan Verification',
    icon: LuShieldCheck,
    desc: 'Every endpoint and build undergoes automated penetration sweeps, header audits, and OWASP Top 10 tests.',
  },
  {
    step: '04',
    title: 'Cloud Deployment & SLA Handover',
    icon: LuServer,
    desc: 'Zero-downtime production deployment with containerized CI/CD, complete documentation, and ongoing support.',
  },
]

const guarantees = [
  {
    icon: LuUserCheck,
    title: 'Founder-Led Engineering',
    desc: 'Direct architectural oversight by senior engineers for every line of production code.',
  },
  {
    icon: LuFileCode,
    title: '100% Code & IP Ownership',
    desc: 'Full repository handoff upon delivery with zero vendor lock-in and clean documentation.',
  },
  {
    icon: LuActivity,
    title: 'Sub-30s Automated Audit Rigor',
    desc: 'Built-in SecuScan inspection engine to verify security posture before and after launch.',
  },
  {
    icon: LuShieldCheck,
    title: 'CAC-Registered & NDA Protected',
    desc: 'Legally incorporated Nigerian entity with mutual NDA protection before project scoping.',
  },
]

const faqs = [
  {
    q: 'Can SKKU Global build both the frontend application and backend API infrastructure?',
    a: 'Yes. We specialize in end-to-end full-stack architectures. We develop modern responsive frontends (React, Next.js) tightly integrated with robust backend APIs (FastAPI, Node.js) and production databases (PostgreSQL, Prisma, MongoDB), packaged with Docker CI/CD pipelines.',
  },
  {
    q: 'What vulnerabilities does the SecuScan engine inspect?',
    a: 'SecuScan conducts multi-threaded automated penetration tests including OWASP Top 10 vulnerabilities (SQLi, XSS, SSRF), session hijacking, authentication loopholes, missing security headers (CSP, HSTS), open CORS policies, and API parameter tampering. Each scan outputs an executive remediation report with exact code fixes.',
  },
  {
    q: 'Can you integrate multi-currency payments for local and international customers?',
    a: 'Yes. We integrate multi-currency payment routing supporting Nigerian Naira (₦), US Dollars ($), British Pounds (£), and Euros (€) via secure providers like Paystack and Stripe, alongside direct WhatsApp concierge checkout drawers for high-conversion retail closing.',
  },
  {
    q: 'How do upcoming capabilities work (Mobile, AI, Cloud DevOps)?',
    a: 'Our core live services are actively available for booking today. Our upcoming engineering capabilities (Native Mobile, Enterprise AI, Cloud DevOps, and Smart Contracts) are currently in active internal development. Clients can pre-register or inquire early to secure priority scheduling as these modules open for production onboarding.',
  },
  {
    q: 'How do we get started with a project consultation?',
    a: 'Click "Consult On This Service" on any capability card above, or click "Start a Project". Our intake questionnaire automatically pre-populates your selected service so we can analyze your requirements and respond with technical scoping within 24 hours.',
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
              CAPABILITIES &amp; CORE COMPETENCIES
            </div>
            <h1 id="services-heading" className="services-main-heading">
              What We Build.{' '}
              <span className="gradient-text">What We Secure.</span>
            </h1>
            <p className="services-lead-text">
              From bespoke full-stack applications, cybersecurity audits, and e-commerce systems available today,
              to upcoming mobile, enterprise AI, and cloud infrastructure pipelines engineered for high-growth ventures.
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
                      href={`mailto:admin@skkuglobal.com?subject=${encodeURIComponent(
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
                  From Scoping to <span className="gradient-text">Zero-Downtime Launch</span>
                </h2>
                <p className="sub-lead">
                  Our structured 4-phase execution framework eliminates architectural risks, ensures full test coverage, and accelerates delivery.
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
                  TRANSPARENCY &amp; CLARITY
                </div>
                <h2 className="sub-heading">Frequently Asked Questions</h2>
                <p className="sub-lead">
                  Clear answers regarding our technology stack, SecuScan audits, payment routing, and project onboarding.
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
