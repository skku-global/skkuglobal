import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Code2, PenTool, ShieldCheck, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react'

const PAIN_POINTS = [
  'Not enough recognition in your market...',
  'Scattered products and fragmented tools...',
  'Struggling to position as a global leader...',
]

export default function HomeHero() {
  const [activePainIndex, setActivePainIndex] = useState(0)
  const [promptText, setPromptText] = useState('')
  const navigate = useNavigate()

  // Cycle through the 3 pain points smoothly
  useEffect(() => {
    const timer = setInterval(() => {
      setActivePainIndex((prev) => (prev + 1) % PAIN_POINTS.length)
    }, 3800)
    return () => clearInterval(timer)
  }, [])

  const handleSubmitPrompt = (e) => {
    e.preventDefault()
    const query = promptText.trim()
    if (query) {
      navigate(`/contact?prompt=${encodeURIComponent(query)}`)
    } else {
      navigate('/contact')
    }
  }

  return (
    <section className="pt-28 md:pt-36 pb-20 md:pb-28 overflow-hidden bg-white">
      <div className="max-w-[1160px] mx-auto px-6 md:px-10">
        
        {/* ── 1. Eyebrow & Serif Headline ── */}
        <div className="max-w-3xl mb-12">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="font-mono text-xs tracking-[0.28em] text-[#6E6E73] uppercase font-medium">
              STUDIO — EST. IBADAN
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#6E2CF3]" />
            <span className="text-xs text-[#86868B] font-mono">RC 7306232</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[68px] leading-[1.08] tracking-[-0.03em] text-[#1D1D1F] font-normal"
          >
            Thoughtful work for brands that refuse to{' '}
            <span className="italic font-normal underline decoration-[#6E2CF3]/30 decoration-2 underline-offset-8">
              blend in.
            </span>
          </motion.h1>
        </div>

        {/* ── 2. Serus-Style Interactive Billboard / Prompt Bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#F5F5F7] border border-black/[0.06] rounded-3xl p-6 sm:p-8 md:p-12 mb-20 shadow-[0_4px_24px_rgba(0,0,0,0.02)]"
        >
          <div className="max-w-2xl">
            {/* Dynamic Typewriter / Word Cycling */}
            <div className="h-10 flex items-center mb-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#6E6E73] mr-3">
                The Friction:
              </span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={activePainIndex}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="font-serif italic text-lg sm:text-xl text-[#6E2CF3] font-medium"
                >
                  &ldquo;{PAIN_POINTS[activePainIndex]}&rdquo;
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Studio Verdict / Take */}
            <p className="text-[#1D1D1F] text-base sm:text-lg font-sans leading-relaxed mb-8">
              <strong className="font-semibold text-[#1D1D1F]">Studio Verdict:</strong>{' '}
              A modern digital presence gives you international recognition, client trust, and audience support.
            </p>

            {/* Interactive Prompt Input Box */}
            <form
              onSubmit={handleSubmitPrompt}
              className="relative flex items-center bg-white border border-[#E5E5EA] rounded-full p-2 sm:p-2.5 shadow-sm hover:border-[#6E2CF3]/40 focus-within:border-[#6E2CF3] focus-within:ring-4 focus-within:ring-[#6E2CF3]/10 transition-all"
            >
              <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 bg-[#F5F5F7] rounded-full text-xs font-mono text-[#6E6E73] ml-1">
                <Sparkles size={11} className="text-[#6E2CF3]" />
                <span>Prompt Studio</span>
              </div>

              <input
                type="text"
                value={promptText}
                onChange={(e) => setPromptText(e.target.value)}
                placeholder="What did you have in mind?"
                className="w-full bg-transparent px-4 py-2 text-sm sm:text-base text-[#1D1D1F] placeholder-[#86868B] focus:outline-none"
              />

              <button
                type="submit"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#6E2CF3] hover:bg-[#5D22D6] text-white flex items-center justify-center shrink-0 shadow-[0_4px_12px_rgba(110,44,243,0.3)] transition-all hover:scale-105 active:scale-95"
                aria-label="Submit project inquiry"
              >
                <ArrowRight size={17} />
              </button>
            </form>

            <div className="flex items-center gap-4 mt-4 px-2 text-xs text-[#86868B]">
              <span className="flex items-center gap-1">
                <CheckCircle2 size={13} className="text-[#6E2CF3]" />
                <span>Zero obligation</span>
              </span>
              <span>·</span>
              <span>Average response in 24 hours</span>
              <span>·</span>
              <span>Founder-reviewed</span>
            </div>
          </div>
        </motion.div>

        {/* ── 3. The Discovery / Alignment Section (Split Layout) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-28">
          {/* Visual Scene: Two people reasoning through business problems */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden border border-[#E5E5EA] bg-[#F5F5F7] shadow-lg group">
              <img
                src="/team/pairing.jpg"
                alt="SKKU Global architecture alignment session"
                className="w-full h-[380px] sm:h-[440px] object-cover group-hover:scale-[1.02] transition-transform duration-500"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="font-mono text-[11px] uppercase tracking-wider bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full inline-block mb-2">
                  Session 01 · Alignment
                </span>
                <p className="text-sm font-sans text-white/90">
                  Direct reasoning through business model constraints, conversion friction, and technical architecture.
                </p>
              </div>
            </div>
          </div>

          {/* Editorial Headline & Narrative Copy */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <span className="font-mono text-xs uppercase tracking-[0.24em] text-[#6E2CF3] font-semibold block mb-4">
              ALIGNMENT BEFORE CODE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-[1.15] text-[#1D1D1F] mb-6 font-normal">
              It doesn&apos;t matter what you sell.{' '}
              <span className="italic font-normal">
                We sit down, reason through the friction, and engineer the fix.
              </span>
            </h2>
            <p className="text-[#6E6E73] text-base leading-relaxed mb-6 font-sans">
              Most businesses don&apos;t have a software problem—they have a clarity and alignment problem. They pay four disconnected agencies to build fragmented tools that don&apos;t talk to each other.
            </p>
            <p className="text-[#6E6E73] text-base leading-relaxed mb-8 font-sans">
              At SKKU Global, we collapse that friction. We dissect where your customers drop off, strip away unnecessary fluff, and build a unified platform that commands instant international trust.
            </p>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#1D1D1F] hover:text-[#6E2CF3] group transition-colors"
            >
              <span>See how our alignment process works</span>
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform text-[#6E2CF3]" />
            </Link>
          </div>
        </div>

        {/* ── 4. Three Pillar Preview Cards ── */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.24em] text-[#6E6E73] font-medium block mb-2">
                CORE DISCIPLINES
              </span>
              <h3 className="font-serif text-3xl md:text-4xl text-[#1D1D1F]">
                Engineered with Apple-grade precision.
              </h3>
            </div>
            <Link
              to="/services"
              className="text-sm font-medium text-[#6E2CF3] hover:underline flex items-center gap-1"
            >
              <span>View full service syllabus</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Pillar 1: Engineering */}
            <div className="bg-[#F5F5F7] border border-[#E5E5EA] rounded-2xl p-8 flex flex-col justify-between hover:border-[#6E2CF3]/30 hover:shadow-md transition-all group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white border border-[#E5E5EA] flex items-center justify-center text-[#6E2CF3] mb-6 group-hover:scale-110 transition-transform">
                  <Code2 size={22} />
                </div>
                <h4 className="font-serif text-2xl text-[#1D1D1F] mb-3">
                  Engineering &amp; Web Development
                </h4>
                <p className="text-sm text-[#6E6E73] leading-relaxed mb-6 font-sans">
                  High-performance custom web applications, SaaS dashboards, and e-commerce architectures built on modern stacks. Zero bloated themes, instant page loads.
                </p>
              </div>
              <Link
                to="/services#engineering"
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#1D1D1F] group-hover:text-[#6E2CF3] transition-colors"
              >
                <span>Explore Dev</span>
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Pillar 2: Editorial Creative */}
            <div className="bg-[#F5F5F7] border border-[#E5E5EA] rounded-2xl p-8 flex flex-col justify-between hover:border-[#6E2CF3]/30 hover:shadow-md transition-all group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white border border-[#E5E5EA] flex items-center justify-center text-[#6E2CF3] mb-6 group-hover:scale-110 transition-transform">
                  <PenTool size={22} />
                </div>
                <h4 className="font-serif text-2xl text-[#1D1D1F] mb-3">
                  Editorial Direction &amp; Content
                </h4>
                <p className="text-sm text-[#6E6E73] leading-relaxed mb-6 font-sans">
                  Typography pairing, visual storytelling, and razor-sharp messaging designed to turn passive visitors into high-conviction global clients.
                </p>
              </div>
              <Link
                to="/services#editorial"
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#1D1D1F] group-hover:text-[#6E2CF3] transition-colors"
              >
                <span>Explore Creative</span>
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Pillar 3: Security & SecuScan */}
            <div className="bg-[#F5F5F7] border border-[#E5E5EA] rounded-2xl p-8 flex flex-col justify-between hover:border-[#6E2CF3]/30 hover:shadow-md transition-all group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white border border-[#E5E5EA] flex items-center justify-center text-[#6E2CF3] mb-6 group-hover:scale-110 transition-transform">
                  <ShieldCheck size={22} />
                </div>
                <h4 className="font-serif text-2xl text-[#1D1D1F] mb-3">
                  Platform Security &amp; Hardening
                </h4>
                <p className="text-sm text-[#6E6E73] leading-relaxed mb-6 font-sans">
                  Proprietary SecuScan vulnerability audits, OWASP Top 10 penetration testing, SSL enforcement, and ironclad cloud infrastructure.
                </p>
              </div>
              <Link
                to="/services#security"
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#1D1D1F] group-hover:text-[#6E2CF3] transition-colors"
              >
                <span>Explore Security</span>
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
