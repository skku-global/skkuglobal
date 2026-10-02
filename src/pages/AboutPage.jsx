import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import { ArrowRight, CheckCircle2, ShieldCheck, Cpu, Eye, ExternalLink } from 'lucide-react'
import { waLink } from '../seo/siteMeta.js'

const PRINCIPLES = [
  {
    number: '01',
    title: 'Deep Diagnosis',
    icon: Eye,
    summary:
      'We look past superficial symptoms to diagnose the root operational bottleneck before writing a single line of code.',
    detail:
      'Most founders think they need a redesign when they actually have a checkout friction problem or an unclear value proposition. We audit your user journey, strip out false assumptions, and identify the exact leverage point that moves the needle.',
  },
  {
    number: '02',
    title: 'Seamless Architecture',
    icon: Cpu,
    summary:
      'Clean full-stack engineering, zero bloat, Apple-tier responsiveness, and hardened infrastructure.',
    detail:
      'No clumsy visual page builders or fragile plugin chains that break on updates. We engineer custom React and modern API engines that achieve sub-second page loads, effortless scalability, and zero technical debt.',
  },
  {
    number: '03',
    title: 'Distinct Presence',
    icon: ShieldCheck,
    summary:
      'A visual and verbal signature that commands instant international trust.',
    detail:
      'In a global economy, looking amateur is the most expensive mistake a business can make. We craft bespoke typography, refined color palettes, and editorial storytelling that positions you as an undeniable industry leader.',
  },
]

export default function AboutPage() {
  return (
    <main id="main" className="bg-white min-h-screen pt-28 pb-24">
      <Seo route="/about" />

      {/* ── 1. Hero ── */}
      <section className="max-w-[1160px] mx-auto px-6 md:px-10 mb-20 md:mb-28">
        <span className="font-mono text-xs uppercase tracking-[0.28em] text-[#6E2CF3] font-semibold block mb-4">
          STUDIO ETHOS &amp; PURPOSE
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[68px] text-[#1D1D1F] font-normal leading-[1.08] max-w-4xl mb-8">
          Passionate to solve what{' '}
          <span className="italic font-normal">others leave behind.</span>
        </h1>
        <p className="text-[#6E6E73] text-base sm:text-xl max-w-2xl font-sans leading-relaxed">
          We founded SKKU Global on a single conviction: extraordinary digital platforms are born when engineering discipline, editorial narrative, and security live under one roof.
        </p>
      </section>

      {/* ── 2. Philosophy: Collapsing the 4-Agency Dilemma ── */}
      <section className="py-20 md:py-28 bg-[#F5F5F7] border-y border-[#E5E5EA]">
        <div className="max-w-[1160px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <span className="font-mono text-xs uppercase tracking-[0.24em] text-[#6E2CF3] font-semibold block mb-3">
                STUDIO PHILOSOPHY — ONE CALL, NOT FOUR AGENCIES
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1D1D1F] font-normal leading-tight mb-6">
                One call, not four agencies.{' '}
                <span className="italic font-normal">Why managing disconnected vendors destroys your momentum.</span>
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-[#6E6E73] font-sans leading-relaxed">
                <p>
                  Most companies waste months and tens of thousands of dollars orchestrating four different vendors: a branding agency that doesn&apos;t know how to code, a dev shop that doesn&apos;t understand conversion psychology, a freelance copywriter out of touch with product, and a security consultant who arrives after the launch.
                </p>
                <p>
                  The result? Constant finger-pointing, blown timelines, and a patchwork platform that feels disjointed to the customer.
                </p>
                <p className="text-[#1D1D1F] font-medium pt-2">
                  At SKKU Global, we eliminated that headache entirely. We unite full-stack code, editorial narrative, and automated SecuScan defense under one unified roof.
                </p>
              </div>
            </div>

            {/* Split Comparison Card */}
            <div className="lg:col-span-6">
              <div className="bg-white border border-[#E5E5EA] rounded-3xl p-8 sm:p-10 shadow-lg">
                <h3 className="font-serif text-2xl text-[#1D1D1F] mb-6">
                  The Disconnected Way vs. The SKKU Model
                </h3>

                <div className="space-y-6 text-xs sm:text-sm font-sans">
                  <div className="p-4 rounded-2xl bg-[#FFF1F2] border border-rose-200">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-rose-600 font-semibold block mb-1">
                      The Disconnected Agency Model
                    </span>
                    <p className="text-rose-950 leading-relaxed">
                      4 separate invoices · Weeks lost in email alignment · Finger-pointing on bugs · Sluggish bloated templates · Zero post-launch security audits.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#F5F0FF] border border-[#6E2CF3]/20">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[#6E2CF3] font-semibold block mb-1">
                      The SKKU Unified System
                    </span>
                    <p className="text-[#1D1D1F] leading-relaxed font-medium">
                      One lead architect · Direct founder WhatsApp communication · 5–7 day sprint velocity · 100% client code ownership · Built-in SecuScan penetration test.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Three Core Principles ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1160px] mx-auto px-6 md:px-10">
          <div className="max-w-2xl mb-16">
            <span className="font-mono text-xs uppercase tracking-[0.24em] text-[#6E6E73] font-medium block mb-2">
              FOUNDATIONAL STANDARDS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1D1D1F] font-normal">
              Three core principles that guide every build.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRINCIPLES.map((pr) => {
              const Icon = pr.icon
              return (
                <div
                  key={pr.number}
                  className="bg-[#F5F5F7] border border-[#E5E5EA] rounded-3xl p-8 hover:border-[#6E2CF3]/30 hover:shadow-lg transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-white border border-[#E5E5EA] text-[#6E2CF3] flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon size={22} />
                      </div>
                      <span className="font-mono text-xs text-[#86868B]">
                        PRINCIPLE {pr.number}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl text-[#1D1D1F] mb-3 font-normal">
                      {pr.title}
                    </h3>
                    <p className="font-serif italic text-sm text-[#6E2CF3] mb-4">
                      &ldquo;{pr.summary}&rdquo;
                    </p>
                    <p className="text-xs sm:text-sm text-[#6E6E73] font-sans leading-relaxed">
                      {pr.detail}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── 4. Leadership & Founder Spotlight (Real User Photo) ── */}
      <section id="founder" className="py-20 bg-[#F5F5F7] border-t border-[#E5E5EA]">
        <div className="max-w-[1160px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Real Founder Photo */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-[#E5E5EA] shadow-xl bg-white max-w-[340px] mx-auto lg:max-w-none">
                <img
                  src="/founder.jpg"
                  alt="Abdulkabir Ajiboye — Founder & Lead Systems Architect"
                  className="w-full h-[420px] object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl border border-black/5">
                  <span className="font-mono text-xs font-bold text-[#1D1D1F] uppercase tracking-wider block">
                    Abdulkabir Ajiboye
                  </span>
                  <span className="text-xs text-[#6E6E73]">Founder &amp; Lead Systems Architect</span>
                </div>
              </div>
            </div>

            {/* Founder Manifesto */}
            <div className="lg:col-span-7">
              <span className="font-mono text-xs uppercase tracking-[0.24em] text-[#6E2CF3] font-semibold block mb-3">
                FOUNDER &amp; ARCHITECT
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1D1D1F] font-normal mb-6">
                &ldquo;We treat your platform like our own product.&rdquo;
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-[#6E6E73] font-sans leading-relaxed mb-8">
                <p>
                  I started SKKU Global in Ibadan, Nigeria to prove that world-class software engineering, security hardening, and high-converting creative direction could be delivered without agency bureaucracy.
                </p>
                <p>
                  When you work with us, you don&apos;t talk to account managers reading from canned scripts. You talk to the engineer who architected the SecuScan engine, designs the database schema, and ensures your system stays bulletproof as it scales.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-[#E5E5EA]">
                <div>
                  <span className="block font-mono text-xs text-[#86868B] uppercase">Legal Status</span>
                  <strong className="text-xs sm:text-sm text-[#1D1D1F] font-semibold">CAC RC 7306232</strong>
                </div>
                <div>
                  <span className="block font-mono text-xs text-[#86868B] uppercase">Location</span>
                  <strong className="text-xs sm:text-sm text-[#1D1D1F] font-semibold">Ibadan / Lagos · Global</strong>
                </div>
                <div>
                  <span className="block font-mono text-xs text-[#86868B] uppercase">Code Handover</span>
                  <strong className="text-xs sm:text-sm text-[#1D1D1F] font-semibold">100% Repository Rights</strong>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={waLink("Hello Abdulkabir, I've read your ethos and want to discuss a project with you.")}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-apple-primary inline-flex items-center gap-2"
                >
                  <span>Chat directly on WhatsApp</span>
                  <ExternalLink size={14} />
                </a>
                <Link to="/contact" className="btn-apple-secondary inline-flex items-center gap-2">
                  <span>Start formal inquiry</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
