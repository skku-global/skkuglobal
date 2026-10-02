import { Link } from 'react-router-dom'
import ScrollStreamFlow from '../components/ScrollStreamFlow'
import Seo from '../components/Seo'
import './ServicesPage.css'

// ── Native Inline React SVG Icons (Zero external icon library dependency) ──
function CodeIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}

function ShieldIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  )
}

function ShoppingBagIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  )
}

function ServerIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
      <line x1="6" y1="6" x2="6.01" y2="6" />
      <line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>
  )
}

function CheckIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function ArrowRightIcon({ size = 12 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}

function ZapIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  )
}

function LockIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}

const DETAILED_CAPABILITIES = [
  {
    id: 'engineering',
    icon: CodeIcon,
    badge: 'FULL-STACK DEVELOPMENT',
    title: 'Custom Web & SaaS Engineering',
    tagline: 'High-velocity web apps and APIs built to scale effortlessly.',
    summary:
      'We build bespoke single-page applications, client portals, and administrative engines with React, Node.js, and modern databases. Zero sluggish page weights or vulnerable third-party plugins.',
    features: [
      'Sub-second page rendering & SSR optimization',
      'Complex role-based authentication & permissions',
      'PostgreSQL / Supabase / Redis architecture',
      'Clean Git repository transfer with 100% client code ownership',
    ],
  },
  {
    id: 'secuscan',
    icon: ShieldIcon,
    badge: 'PROPRIETARY AUDIT ENGINE',
    title: 'SecuScan Vulnerability Audits',
    tagline: 'Automated penetration testing that uncovers holes before attackers do.',
    summary:
      'Our in-house SecuScan testing engine simulates active web reconnaissance, probing your public endpoints for OWASP Top 10 exploits, missing headers, cross-site scripting vulnerabilities, and SSL flaws.',
    features: [
      'Automated OWASP Top 10 vulnerability scan',
      'Security headers audit (HSTS, CSP, X-Frame-Options)',
      'Actionable remediation report with exact fix commits',
      'Executive proof badge for customer & investor trust',
    ],
  },
  {
    id: 'ecommerce',
    icon: ShoppingBagIcon,
    badge: 'GLOBAL RETAIL SYSTEMS',
    title: 'E-Commerce & Digital Commerce',
    tagline: 'Online retail engines with seamless multi-currency checkout.',
    summary:
      'Transform manual WhatsApp and Instagram sales into an automated international retail machine. Real-time cart synchronization, automated inventory tracking, and localized payment gateways.',
    features: [
      'Multi-currency processing (USD, GBP, EUR, NGN)',
      'Instant payment gateway integration (Stripe, Paystack)',
      'Real-time automated order alerts & customer receipts',
      'Zero monthly platform commission—you keep 100% of profit',
    ],
  },
  {
    id: 'security',
    icon: ServerIcon,
    badge: 'DIGITAL HARDENING',
    title: 'Platform Security & Infrastructure',
    tagline: 'Ironclad cloud defenses protecting your data and uptime.',
    summary:
      'Production deployment hardening across modern cloud providers. We configure automated CDN edge caching, SSL/TLS certificates, rate limiting, and zero-trust administrative boundaries.',
    features: [
      'Global edge CDN configuration & asset caching',
      'DDoS mitigation & automated rate limiting',
      'Automated daily database backups & disaster recovery',
      'Domain reputation & DMARC/DKIM/SPF email hardening',
    ],
  },
]

export default function ServicesPage() {
  return (
    <main id="main" className="services-page-main">
      <Seo route="/services" />

      {/* ── Page Hero: Clean, Bold, Minimal ── */}
      <section className="services-page-hero">
        <div className="services-hero-container">
          <h1 className="services-hero-headline">SERVICES</h1>
          <p className="services-hero-subtext">
            Bespoke web platforms, vulnerability scanning, and e-commerce architectures engineered without technical compromise.
          </p>
        </div>
      </section>

      {/* ── The Hand-Drawn Transformation Stream (Oval Nodes + Arrows) ── */}
      <ScrollStreamFlow />

      {/* ── Technical Directory ── */}
      <section className="services-directory-section" aria-label="Technical Directory">
        <div className="services-directory-container">
          <div className="services-dir-header">
            <span className="services-dir-kicker">TECHNICAL DIRECTORY</span>
            <h2 className="services-dir-title">
              Our 4 primary engineering capabilities.
            </h2>
          </div>

          <div className="services-capabilities-grid">
            {DETAILED_CAPABILITIES.map((cap) => {
              const Icon = cap.icon
              return (
                <div key={cap.id} id={cap.id} className="services-cap-card">
                  <div>
                    <div className="services-cap-card-top">
                      <div className="services-cap-icon-box">
                        <Icon size={20} />
                      </div>
                      <span className="services-cap-badge">{cap.badge}</span>
                    </div>

                    <h3 className="services-cap-title">{cap.title}</h3>
                    <p className="services-cap-tagline">{cap.tagline}</p>
                    <p className="services-cap-summary">{cap.summary}</p>

                    <ul className="services-cap-features">
                      {cap.features.map((item, idx) => (
                        <li key={idx} className="services-cap-feature-item">
                          <CheckIcon size={14} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="services-cap-action">
                    <Link
                      to={`/contact?objective=${encodeURIComponent(cap.title)}`}
                      className="services-cap-link"
                    >
                      <span>Inquire about this capability</span>
                      <ArrowRightIcon size={12} />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── SLA Guarantees ── */}
      <section className="services-sla-section" aria-label="Guarantees">
        <div className="services-sla-container">
          <div className="services-sla-grid">
            <div className="services-sla-card">
              <div className="services-sla-icon">
                <ZapIcon size={20} />
              </div>
              <h4>5–7 Day Launch</h4>
              <p>
                Focused sprint development. We don&apos;t drag projects out across quarters. You receive working production builds within days.
              </p>
            </div>

            <div className="services-sla-card">
              <div className="services-sla-icon">
                <LockIcon size={20} />
              </div>
              <h4>100% Code Transfer</h4>
              <p>
                You own every single commit, database migration, and asset. Full handover to your GitHub and cloud account on final milestone.
              </p>
            </div>

            <div className="services-sla-card">
              <div className="services-sla-icon">
                <ShieldIcon size={20} />
              </div>
              <h4>Milestone Contracts</h4>
              <p>
                50% commitment to kick off architecture, 50% only when the platform is fully approved and ready for live deployment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
