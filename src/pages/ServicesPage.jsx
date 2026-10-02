import { Link } from 'react-router-dom'
import ScrollStreamFlow from '../components/ScrollStreamFlow'
import Seo from '../components/Seo'
import { waLink } from '../seo/siteMeta.js'
import { Code2, ShieldCheck, ShoppingBag, Server, ArrowRight, CheckCircle2, Lock, Zap } from 'lucide-react'

const DETAILED_CAPABILITIES = [
  {
    id: 'engineering',
    icon: Code2,
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
    icon: ShieldCheck,
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
    icon: ShoppingBag,
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
    icon: Server,
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
    <main id="main" className="bg-white min-h-screen pt-28 pb-20">
      <Seo route="/services" />

      {/* ── Page Header ── */}
      <section className="max-w-[1160px] mx-auto px-6 md:px-10 mb-12">
        <span className="font-mono text-xs uppercase tracking-[0.28em] text-[#6E2CF3] font-semibold block mb-4">
          DISCIPLINES &amp; ARCHITECTURE
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#1D1D1F] font-normal leading-[1.08] max-w-4xl mb-6">
          Bespoke systems engineered without{' '}
          <span className="italic font-normal">technical compromise.</span>
        </h1>
        <p className="text-[#6E6E73] text-base sm:text-lg max-w-2xl font-sans leading-relaxed">
          Every platform we release is custom-coded, secured with proprietary audits, and transferred directly to your control. No recurring agency lock-in.
        </p>
      </section>

      {/* ── Scroll-Stream Flow Section (Core Requirement) ── */}
      <ScrollStreamFlow />

      {/* ── Detailed Capabilities Directory ── */}
      <section className="py-20 md:py-28 bg-[#F5F5F7] border-y border-[#E5E5EA]">
        <div className="max-w-[1160px] mx-auto px-6 md:px-10">
          <div className="max-w-2xl mb-16">
            <span className="font-mono text-xs uppercase tracking-[0.24em] text-[#6E6E73] font-medium block mb-2">
              TECHNICAL DIRECTORY
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1D1D1F] font-normal">
              Our 4 primary engineering capabilities.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {DETAILED_CAPABILITIES.map((cap) => {
              const Icon = cap.icon
              return (
                <div
                  key={cap.id}
                  id={cap.id}
                  className="bg-white border border-[#E5E5EA] rounded-3xl p-8 sm:p-10 hover:border-[#6E2CF3]/30 hover:shadow-xl transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-[#F5F0FF] text-[#6E2CF3] flex items-center justify-center">
                        <Icon size={22} />
                      </div>
                      <span className="font-mono text-[11px] uppercase tracking-wider text-[#6E2CF3] bg-[#F5F0FF] px-3 py-1 rounded-full font-medium">
                        {cap.badge}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl text-[#1D1D1F] mb-2 font-normal">
                      {cap.title}
                    </h3>
                    <p className="font-serif italic text-sm text-[#6E2CF3] mb-4">
                      {cap.tagline}
                    </p>
                    <p className="text-sm text-[#6E6E73] font-sans leading-relaxed mb-6">
                      {cap.summary}
                    </p>

                    <ul className="space-y-2.5 mb-8">
                      {cap.features.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1D1D1F] font-sans">
                          <CheckCircle2 size={15} className="text-[#6E2CF3] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 border-t border-[#E5E5EA]">
                    <Link
                      to={`/contact?objective=${encodeURIComponent(cap.title)}`}
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1D1D1F] hover:text-[#6E2CF3] transition-colors"
                    >
                      <span>Inquire about this capability</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Working Terms & SLA Guarantees ── */}
      <section className="py-20 bg-white">
        <div className="max-w-[1160px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-[#F5F5F7] border border-[#E5E5EA]">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#6E2CF3] mb-4">
                <Zap size={20} />
              </div>
              <h4 className="font-serif text-xl text-[#1D1D1F] mb-2">5–7 Day Launch</h4>
              <p className="text-xs text-[#6E6E73] font-sans leading-relaxed">
                Focused sprint development. We don&apos;t drag projects out across quarters. You receive working production builds within days.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F5F5F7] border border-[#E5E5EA]">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#6E2CF3] mb-4">
                <Lock size={20} />
              </div>
              <h4 className="font-serif text-xl text-[#1D1D1F] mb-2">100% Code Transfer</h4>
              <p className="text-xs text-[#6E6E73] font-sans leading-relaxed">
                You own every single commit, database migration, and asset. Full handover to your GitHub and cloud account on final milestone.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F5F5F7] border border-[#E5E5EA]">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#6E2CF3] mb-4">
                <CheckCircle2 size={20} />
              </div>
              <h4 className="font-serif text-xl text-[#1D1D1F] mb-2">Milestone Contracts</h4>
              <p className="text-xs text-[#6E6E73] font-sans leading-relaxed">
                50% commitment to kick off architecture, 50% only when the platform is fully approved and ready for live deployment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
