import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import { ArrowUpRight, ArrowRight, ExternalLink, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react'
import { waLink } from '../seo/siteMeta.js'

const CASE_STUDIES = [
  {
    id: 'secuscan',
    client: 'SecuScan Security Suite',
    category: 'Cybersecurity SaaS · Proprietary Engine',
    title: 'Automated vulnerability scanner for mission-critical web platforms',
    liveUrl: 'https://secuscan-orpin.vercel.app/',
    siteLabel: 'secuscan-orpin.vercel.app',
    image: '/screenshots/secuscan/slide-1.webp',
    stats: [
      { label: 'Audit Speed', val: '<30s Scan' },
      { label: 'Coverage', val: 'OWASP Top 10' },
      { label: 'Architecture', val: 'FastAPI + React' },
    ],
    encounter:
      'The engineering founders reached out after recognizing their enterprise prospects demanded verified penetration reports before signing annual license contracts.',
    obstacle:
      'Manual security audits were taking weeks and costing upwards of $4,000 per assessment. Hidden SSL misconfigurations, unpatched XSS vectors, and missing HTTP headers left systems vulnerable to automated recon bots.',
    alignment:
      'We designed an isolated reconnaissance scanner that checks public endpoints for OWASP Top 10 vulnerabilities, CORS leaks, and SSL flaws in under 30 seconds without modifying production state. Generated PDF audit reports give clients an unshakeable proof of compliance.',
    outcome:
      'SecuScan launched to immediate adoption, transforming compliance bottlenecks into recurring enterprise tier subscriptions and instant client credibility.',
  },
  {
    id: 'luxe-hair',
    client: 'Luxe Hair Co UK & Nigeria',
    category: 'Luxury E-Commerce · Multi-Currency Retail',
    title: 'Transforming manual DM exchanges into an international luxury storefront',
    liveUrl: 'https://luxehair-tau.vercel.app/',
    siteLabel: 'luxehair-tau.vercel.app',
    image: '/screenshots/luxehair/slide-1.webp',
    stats: [
      { label: 'Cart Conversion', val: '+62%' },
      { label: 'Order Method', val: 'Instant 1-Tap' },
      { label: 'Currencies', val: 'USD, GBP, NGN' },
    ],
    encounter:
      'The creative director contacted us directly on WhatsApp, frustrated by losing high-ticket buyers across London, New York, and Lagos to endless back-and-forth Instagram DM threads.',
    obstacle:
      'International buyers were hesitating because the brand lacked a unified catalog with transparent currency conversions, while manual inventory verification was burning over 15 hours every week.',
    alignment:
      'We engineered a bespoke, zero-bloat React storefront featuring editorial photography, dynamic length/texture selectors, a real-time sliding cart drawer, and 1-tap WhatsApp checkout routing with pre-calculated subtotals.',
    outcome:
      'Cart drop-off dropped sharply by 62%. The brand was immediately perceived as an established global beauty house, enabling them to raise prices and automate their sales pipeline.',
  },
  {
    id: 'carbreezy',
    client: 'CarBreezy Automotive',
    category: 'Marketplace Platform · Dealer Network',
    title: 'Re-engineering vehicle purchasing with verified inspection reports',
    liveUrl: 'https://carbreezy-react.vercel.app/',
    siteLabel: 'carbreezy-react.vercel.app',
    image: '/screenshots/carbreezy/slide-1.webp',
    stats: [
      { label: 'Filter Speed', val: '<100ms' },
      { label: 'Verification', val: 'Multi-Point Inspection' },
      { label: 'Lead Volume', val: '2.4x Increase' },
    ],
    encounter:
      'CarBreezy’s founding partners needed a high-performance inventory hub to unite independent car dealerships across Nigeria into a single trusted marketplace.',
    obstacle:
      'Traditional auto classifieds were slow, full of duplicated spam listings, and lacking mechanical trust. Serious buyers could not distinguish between sound cars and salvage titles.',
    alignment:
      'We built a lightweight client-side catalog with sub-100ms faceted filters (make, model, year, transmission, price), verified mechanical condition badges, and instant dealer communication hooks.',
    outcome:
      'Average lead-to-inspection time doubled in velocity. CarBreezy established a reputation as the most reliable pre-owned automotive portal in the region.',
  },
  {
    id: 'junicash',
    client: 'JuniCash Global',
    category: 'Fintech & Digital Wallet · Cryptographic Auth',
    title: 'Intuitive neo-banking wallet designed with Swiss private banking finish',
    liveUrl: 'https://junicash.vercel.app',
    siteLabel: 'junicash.vercel.app',
    image: '/screenshots/junicash/slide-1.webp',
    stats: [
      { label: 'Auth', val: 'Cryptographic OTP' },
      { label: 'Ledger Latency', val: 'Sub-second' },
      { label: 'Security', val: 'JWT Sessions' },
    ],
    encounter:
      'The JuniCash product team wanted an interface that felt as serene and reliable as an Apple application, avoiding the overwhelming complexity of legacy banking screens.',
    obstacle:
      'Users were hesitant to trust new fintech portals due to sluggish OTP deliveries, confusing fee disclosures, and clunky responsive layouts on mobile devices.',
    alignment:
      'We engineered an Express and MongoDB foundation paired with Resend email OTP verification, cryptographic JWT session management, and a clean slate interface showing real-time ledger histories.',
    outcome:
      'Zero balance reconciliation discrepancies and a flawless 100% onboarding completion rate across pilot user cohorts.',
  },
]

export default function Work() {
  return (
    <main id="main" className="bg-white min-h-screen pt-28 pb-24">
      <Seo route="/work" />

      {/* ── Page Header ── */}
      <section className="max-w-[1160px] mx-auto px-6 md:px-10 mb-16 md:mb-24">
        <span className="font-mono text-xs uppercase tracking-[0.28em] text-[#6E2CF3] font-semibold block mb-4">
          SELECTED CASE STUDIES
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#1D1D1F] font-normal leading-[1.08] max-w-4xl mb-6">
          We don&apos;t just build interfaces.{' '}
          <span className="italic font-normal">We engineer strategic outcomes.</span>
        </h1>
        <p className="text-[#6E6E73] text-base sm:text-lg max-w-2xl font-sans leading-relaxed">
          Explore the exact 4-part journey behind our production releases—from the initial client encounter to measurable international recognition.
        </p>
      </section>

      {/* ── Editorial Zig-Zag Layout ── */}
      <section className="max-w-[1160px] mx-auto px-6 md:px-10 space-y-24 md:space-y-36">
        {CASE_STUDIES.map((study, index) => {
          const isEven = index % 2 === 1

          return (
            <article
              key={study.id}
              id={study.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                isEven ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* ── Visual Media (Zig-Zag order) ── */}
              <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="relative rounded-3xl overflow-hidden border border-[#E5E5EA] bg-[#F5F5F7] shadow-lg group">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-[360px] sm:h-[420px] object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Floating Action Badge */}
                  <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                    <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono text-[#1D1D1F] border border-black/5 shadow-xs">
                      {study.category}
                    </span>
                    <a
                      href={study.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1D1D1F] hover:bg-[#6E2CF3] text-white text-xs font-mono transition-colors shadow-sm"
                    >
                      <span>Live Site</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>

                {/* Key Metrics Strip */}
                <div className="grid grid-cols-3 gap-3 mt-4">
                  {study.stats.map((st, i) => (
                    <div key={i} className="bg-[#F5F5F7] border border-[#E5E5EA] rounded-xl p-3 text-center">
                      <span className="block font-mono text-[10px] text-[#86868B] uppercase mb-0.5">
                        {st.label}
                      </span>
                      <strong className="text-xs sm:text-sm font-semibold text-[#1D1D1F]">
                        {st.val}
                      </strong>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── 4-Part Story Narrative ── */}
              <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="mb-6">
                  <span className="font-mono text-xs text-[#86868B] uppercase tracking-wider block mb-1">
                    CASE STUDY 0{index + 1} · {study.client}
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#1D1D1F] font-normal leading-tight">
                    {study.title}
                  </h2>
                </div>

                {/* 4-Part Narrative Accordion / Flow */}
                <div className="space-y-4 font-sans text-sm">
                  {/* 1. The Encounter */}
                  <div className="bg-[#F5F5F7] border border-[#E5E5EA] rounded-2xl p-4 sm:p-5">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#6E2CF3]" />
                      <strong className="font-mono text-xs uppercase tracking-wider text-[#1D1D1F]">
                        [ The Encounter ]
                      </strong>
                    </div>
                    <p className="text-[#6E6E73] leading-relaxed text-xs sm:text-sm">
                      {study.encounter}
                    </p>
                  </div>

                  {/* 2. The Friction */}
                  <div className="bg-[#F5F5F7] border border-[#E5E5EA] rounded-2xl p-4 sm:p-5">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="w-2 h-2 rounded-full bg-amber-500" />
                      <strong className="font-mono text-xs uppercase tracking-wider text-[#1D1D1F]">
                        [ The Friction ]
                      </strong>
                    </div>
                    <p className="text-[#6E6E73] leading-relaxed text-xs sm:text-sm">
                      {study.obstacle}
                    </p>
                  </div>

                  {/* 3. The Build */}
                  <div className="bg-[#F5F5F7] border border-[#E5E5EA] rounded-2xl p-4 sm:p-5">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="w-2 h-2 rounded-full bg-blue-500" />
                      <strong className="font-mono text-xs uppercase tracking-wider text-[#1D1D1F]">
                        [ The Build ]
                      </strong>
                    </div>
                    <p className="text-[#6E6E73] leading-relaxed text-xs sm:text-sm">
                      {study.alignment}
                    </p>
                  </div>

                  {/* 4. The Result */}
                  <div className="bg-[#F5F0FF] border border-[#6E2CF3]/20 rounded-2xl p-4 sm:p-5">
                    <div className="flex items-center gap-2 mb-1.5">
                      <CheckCircle2 size={14} className="text-[#6E2CF3]" />
                      <strong className="font-mono text-xs uppercase tracking-wider text-[#6E2CF3]">
                        [ The Result ]
                      </strong>
                    </div>
                    <p className="text-[#1D1D1F] leading-relaxed font-medium text-xs sm:text-sm">
                      {study.outcome}
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex items-center gap-4">
                  <a
                    href={study.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-apple-primary inline-flex items-center gap-2 text-xs sm:text-sm"
                  >
                    <span>View Live Deployment</span>
                    <ExternalLink size={14} />
                  </a>
                  <Link
                    to={`/contact?objective=${encodeURIComponent(study.title)}`}
                    className="btn-apple-secondary inline-flex items-center gap-2 text-xs sm:text-sm"
                  >
                    <span>Request Similar Build</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </article>
          )
        })}
      </section>

      {/* ── Consultation Banner ── */}
      <section className="mt-32 max-w-[1160px] mx-auto px-6 md:px-10">
        <div className="bg-[#F5F5F7] border border-[#E5E5EA] rounded-3xl p-8 sm:p-12 md:p-16 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.24em] text-[#6E2CF3] font-semibold block mb-3">
            YOUR NEXT STEP
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1D1D1F] font-normal mb-6">
            Have a friction worth solving?
          </h2>
          <p className="text-[#6E6E73] text-base max-w-lg mx-auto mb-8 font-sans leading-relaxed">
            We handle the strategy, the architecture, and the production launch with 5–7 day delivery velocity.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact" className="btn-apple-violet inline-flex items-center gap-2 px-8 py-3 text-sm">
              <span>Start a project inquiry</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
