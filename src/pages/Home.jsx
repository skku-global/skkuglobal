import { Link } from 'react-router-dom'
import HomeHero from '../components/HomeHero'
import Seo from '../components/Seo'
import { waLink } from '../seo/siteMeta.js'
import { ArrowRight, ShieldCheck, Zap, Award, ExternalLink, CheckCircle } from 'lucide-react'

export default function Home() {
  return (
    <main id="main" className="bg-white min-h-screen">
      <Seo route="/" />
      
      {/* ── 1. Hero, Billboard, Discovery & 3 Pillars ── */}
      <HomeHero />

      {/* ── 2. Featured Case Studies Snapshot ── */}
      <section className="py-20 md:py-28 bg-[#F5F5F7] border-y border-[#E5E5EA]">
        <div className="max-w-[1160px] mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.24em] text-[#6E2CF3] font-semibold block mb-2">
                SELECTED WORK
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1D1D1F] font-normal">
                Stories of friction converted to{' '}
                <span className="italic font-normal">market recognition.</span>
              </h2>
            </div>
            <Link
              to="/work"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1D1D1F] hover:text-[#6E2CF3] transition-colors"
            >
              <span>Explore all case studies</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Case Study 1: SecuScan */}
            <div className="bg-white border border-[#E5E5EA] rounded-3xl p-8 hover:border-[#6E2CF3]/30 hover:shadow-xl transition-all group flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-3 mb-6">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#6E2CF3] bg-[#F5F0FF] border border-[#6E2CF3]/10 px-3 py-1 rounded-full font-medium">
                    Cybersecurity · Proprietary Engine
                  </span>
                  <span className="text-xs text-[#86868B] font-mono">Production</span>
                </div>
                <h3 className="font-serif text-2xl md:text-3xl text-[#1D1D1F] mb-3">
                  SecuScan Web Vulnerability Engine
                </h3>
                <p className="text-sm text-[#6E6E73] leading-relaxed mb-6 font-sans">
                  Engineered an automated penetration test engine checking OWASP Top 10 vulnerabilities, misconfigured HTTP security headers, and open ports. Now standard issue across all client launches.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['FastAPI', 'Node.js', 'Security Audits', 'OWASP Top 10'].map((tag) => (
                    <span key={tag} className="text-xs font-mono px-2.5 py-1 bg-[#F5F5F7] rounded-md text-[#6E6E73]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <Link
                to="/work#secuscan"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#1D1D1F] group-hover:text-[#6E2CF3] transition-colors"
              >
                <span>Read the 4-part case narrative</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Case Study 2: Luxe Hair Co */}
            <div className="bg-white border border-[#E5E5EA] rounded-3xl p-8 hover:border-[#6E2CF3]/30 hover:shadow-xl transition-all group flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-3 mb-6">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#6E2CF3] bg-[#F5F0FF] border border-[#6E2CF3]/10 px-3 py-1 rounded-full font-medium">
                    E-Commerce · Multi-Currency
                  </span>
                  <span className="text-xs text-[#86868B] font-mono">UK / Nigeria</span>
                </div>
                <h3 className="font-serif text-2xl md:text-3xl text-[#1D1D1F] mb-3">
                  Luxe Hair Co Global Retail
                </h3>
                <p className="text-sm text-[#6E6E73] leading-relaxed mb-6 font-sans">
                  Turned an Instagram DM business with 40% cart abandonment into an international storefront processing multi-currency checkouts with zero manual payment reconciliation.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['React', 'Live Carts', 'Payment Gateways', 'SEO Engine'].map((tag) => (
                    <span key={tag} className="text-xs font-mono px-2.5 py-1 bg-[#F5F5F7] rounded-md text-[#6E6E73]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <Link
                to="/work#luxe-hair"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#1D1D1F] group-hover:text-[#6E2CF3] transition-colors"
              >
                <span>Read the 4-part case narrative</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Founder Direct Architect Commitment (Using Real Photo) ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1160px] mx-auto px-6 md:px-10">
          <div className="bg-[#F5F5F7] border border-[#E5E5EA] rounded-3xl p-8 sm:p-12 md:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Founder Image */}
              <div className="lg:col-span-4">
                <div className="relative mx-auto max-w-[280px] lg:max-w-none rounded-2xl overflow-hidden border border-[#E5E5EA] shadow-md bg-white">
                  <img
                    src="/founder.jpg"
                    alt="Abdulkabir Ajiboye, Founder of SKKU Global"
                    className="w-full h-[340px] sm:h-[380px] object-cover"
                    loading="lazy"
                  />
                  <div className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-black/5 text-center">
                    <span className="font-mono text-[11px] font-semibold text-[#1D1D1F] uppercase tracking-wider">
                      Abdulkabir Ajiboye
                    </span>
                    <span className="block text-[11px] text-[#6E6E73]">Founder &amp; Lead Architect</span>
                  </div>
                </div>
              </div>

              {/* Founder Commitment Statement */}
              <div className="lg:col-span-8">
                <span className="font-mono text-xs uppercase tracking-[0.24em] text-[#6E2CF3] font-semibold block mb-3">
                  DIRECT COLLABORATION
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#1D1D1F] mb-6 font-normal">
                  You work directly with the architect{' '}
                  <span className="italic font-normal">who writes your code.</span>
                </h3>
                <blockquote className="text-[#6E6E73] text-base sm:text-lg font-sans leading-relaxed mb-8">
                  &ldquo;When you commission SKKU Global, you don&apos;t get passed off to account executives or offshore ticket queues. You work directly with me. We reason through your product together, write hardened clean code, and run security audits before a single line goes live.&rdquo;
                </blockquote>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[#E5E5EA]">
                  <div>
                    <span className="block font-mono text-xs text-[#86868B] uppercase">Entity</span>
                    <strong className="text-sm text-[#1D1D1F] font-semibold">CAC RC 7306232</strong>
                  </div>
                  <div>
                    <span className="block font-mono text-xs text-[#86868B] uppercase">Sprint Speed</span>
                    <strong className="text-sm text-[#1D1D1F] font-semibold">5–7 Day Launch</strong>
                  </div>
                  <div>
                    <span className="block font-mono text-xs text-[#86868B] uppercase">Code Ownership</span>
                    <strong className="text-sm text-[#1D1D1F] font-semibold">100% Client Owned</strong>
                  </div>
                  <div>
                    <span className="block font-mono text-xs text-[#86868B] uppercase">Milestones</span>
                    <strong className="text-sm text-[#1D1D1F] font-semibold">50/50 Payments</strong>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href={waLink("Hello Abdulkabir, I want to discuss a project directly with you.")}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-apple-primary inline-flex items-center gap-2"
                  >
                    <span>Direct Chat with Founder</span>
                    <ExternalLink size={14} />
                  </a>
                  <Link
                    to="/about"
                    className="btn-apple-secondary inline-flex items-center gap-2"
                  >
                    <span>Read Studio Ethos</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Prompt Trigger Bottom Banner ── */}
      <section className="py-20 bg-[#F5F5F7] border-t border-[#E5E5EA]">
        <div className="max-w-[760px] mx-auto px-6 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.24em] text-[#6E2CF3] font-semibold block mb-4">
            START YOUR BUILD
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1D1D1F] mb-6 font-normal">
            Ready to give your brand the presence it deserves?
          </h2>
          <p className="text-[#6E6E73] text-base leading-relaxed mb-8 font-sans">
            Tell us about your friction, your product, or your vision. We respond within 24 hours with an actionable roadmap.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="btn-apple-violet inline-flex items-center gap-2 px-8 py-3.5 text-sm"
            >
              <span>What did you have in mind?</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
