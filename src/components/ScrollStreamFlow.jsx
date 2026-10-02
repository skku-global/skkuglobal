import { useState, useRef } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { motion, useScroll, useSpring } from 'framer-motion'
import { ArrowDown, ArrowRight, Sparkles, CheckCircle2, ShieldAlert, Sparkle, LayoutGrid } from 'lucide-react'

const NODES = [
  {
    side: 'right',
    number: '01',
    icon: ShieldAlert,
    tag: 'MARKET INVISIBILITY',
    title: 'Lack of Recognition',
    subtitle: 'Invisible in a crowded market.',
    description:
      'You have real operational excellence, but your online presence looks like a generic weekend template. High-value international clients leave before understanding what you actually offer.',
    outcome: 'We engineer an authoritative digital presence that commands instant prestige and justifies premium fees.',
  },
  {
    side: 'left',
    number: '02',
    icon: Sparkle,
    tag: 'THE CREDIBILITY GAP',
    title: 'Professional Legitimacy',
    subtitle: 'Amateur presence misaligned with your true quality.',
    description:
      'Clunky fonts, slow load times, and mismatched mobile layouts undermine your reputation. Your digital front door should mirror the exact high-calibre standard of your services.',
    outcome: 'Apple-grade visual finish, custom typography pairing, micro-interactions, and sub-second page performance.',
  },
  {
    side: 'right',
    number: '03',
    icon: LayoutGrid,
    tag: 'OPERATIONAL FRAGMENTATION',
    title: 'Centralized Offerings & Tech Ease',
    subtitle: 'Unified platform, zero technical headache.',
    description:
      'Scattered Google forms, random WhatsApp chats, and disconnected spreadsheets lose valuable customer intent. Managing four different SaaS tools wastes hours every single day.',
    outcome: 'One centralized system housing your catalog, automated checkouts, user authentication, and SecuScan defense.',
  },
]

export default function ScrollStreamFlow() {
  const containerRef = useRef(null)
  const [promptText, setPromptText] = useState('')
  const navigate = useNavigate()

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end end'],
  })

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  })

  const handlePromptSubmit = (e) => {
    e.preventDefault()
    const q = promptText.trim()
    if (q) {
      navigate(`/contact?prompt=${encodeURIComponent(q)}`)
    } else {
      navigate('/contact')
    }
  }

  return (
    <section ref={containerRef} className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-[1160px] mx-auto px-6 md:px-10">
        
        {/* ── Section Header ── */}
        <div className="text-center max-w-2xl mx-auto mb-20 md:mb-28">
          <span className="font-mono text-xs uppercase tracking-[0.28em] text-[#6E2CF3] font-semibold block mb-3">
            THE TRANSFORMATION STREAM
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1D1D1F] font-normal mb-6">
            From market friction to{' '}
            <span className="italic font-normal">absolute clarity.</span>
          </h2>
          <p className="text-[#6E6E73] text-base font-sans leading-relaxed">
            Follow the stream. See how we dissolve the three most common bottlenecks that keep ambitious companies from dominating their industry.
          </p>
        </div>

        {/* ── Scroll-Stream Vertical Track ── */}
        <div className="relative">
          {/* Center Background Hairline */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-36 w-[2px] -translate-x-1/2 bg-[#E5E5EA]" />
          
          {/* Animated Electric Violet Scroll Fill Track */}
          <motion.div
            style={{ scaleY, originY: 0 }}
            className="hidden md:block absolute left-1/2 top-0 bottom-36 w-[2.5px] -translate-x-1/2 bg-gradient-to-b from-[#6E2CF3] via-[#7928CA] to-[#6E2CF3] shadow-[0_0_12px_rgba(110,44,243,0.5)] z-10"
          />

          {/* Stream Nodes */}
          <div className="space-y-16 md:space-y-28">
            {NODES.map((node, index) => {
              const isRight = node.side === 'right'
              const Icon = node.icon

              return (
                <div
                  key={node.number}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isRight ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content Container (Oval Card) */}
                  <div className="w-full md:w-[46%]">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-60px' }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="bg-[#F5F5F7] border border-[#E5E5EA] rounded-[32px] p-8 sm:p-10 hover:border-[#6E2CF3]/30 hover:shadow-xl transition-all relative group"
                    >
                      {/* Node Tag & Number */}
                      <div className="flex items-center justify-between gap-3 mb-5">
                        <span className="font-mono text-[11px] uppercase tracking-wider text-[#6E2CF3] font-semibold bg-white px-3 py-1 rounded-full border border-black/5 shadow-xs">
                          {node.tag}
                        </span>
                        <span className="font-mono text-xs text-[#86868B]">
                          PHASE {node.number}
                        </span>
                      </div>

                      {/* Title & Subtitle */}
                      <h3 className="font-serif text-2xl sm:text-3xl text-[#1D1D1F] font-normal mb-2">
                        {node.title}
                      </h3>
                      <p className="font-serif italic text-base text-[#6E2CF3] mb-4">
                        {node.subtitle}
                      </p>

                      {/* Description */}
                      <p className="text-sm text-[#6E6E73] font-sans leading-relaxed mb-6">
                        {node.description}
                      </p>

                      {/* The Fix / Outcome */}
                      <div className="pt-4 border-t border-[#E5E5EA] flex items-start gap-2.5">
                        <CheckCircle2 size={16} className="text-[#6E2CF3] shrink-0 mt-0.5" />
                        <p className="text-xs sm:text-sm font-medium text-[#1D1D1F] font-sans leading-normal">
                          <strong className="text-[#6E2CF3]">The Fix:</strong> {node.outcome}
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Center Node Marker on Stream */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white border-2 border-[#6E2CF3] items-center justify-center shadow-md z-20">
                    <span className="font-mono text-xs font-bold text-[#6E2CF3]">
                      {node.number}
                    </span>
                  </div>

                  {/* Empty Spacer on other side */}
                  <div className="hidden md:block w-full md:w-[46%]" />
                </div>
              )
            })}
          </div>

          {/* ── Culmination: Arrow pointing into Rectangular Prompt Input ── */}
          <div className="pt-24 md:pt-32 text-center relative z-20">
            {/* Stream Terminal Arrow */}
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#F5F0FF] border border-[#6E2CF3]/20 text-[#6E2CF3] mb-8 animate-bounce">
              <ArrowDown size={20} />
            </div>

            <div className="max-w-2xl mx-auto">
              <span className="font-mono text-xs uppercase tracking-[0.24em] text-[#6E6E73] font-medium block mb-3">
                THE RESOLUTION
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#1D1D1F] mb-6 font-normal">
                Let&apos;s engineer your fix.
              </h3>

              {/* Rectangular Prompt Input with Instant Trigger */}
              <form
                onSubmit={handlePromptSubmit}
                className="relative flex items-center bg-[#F5F5F7] border border-[#E5E5EA] rounded-2xl p-2 sm:p-3 shadow-md hover:border-[#6E2CF3]/40 focus-within:border-[#6E2CF3] focus-within:ring-4 focus-within:ring-[#6E2CF3]/10 transition-all"
              >
                <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-xl text-xs font-mono text-[#6E6E73] ml-1 border border-black/5">
                  <Sparkles size={12} className="text-[#6E2CF3]" />
                  <span>Interactive Stream</span>
                </div>

                <input
                  type="text"
                  value={promptText}
                  onChange={(e) => setPromptText(e.target.value)}
                  placeholder="[ What did you have in mind? ]"
                  className="w-full bg-transparent px-4 py-3 text-sm sm:text-base text-[#1D1D1F] placeholder-[#86868B] font-mono focus:outline-none"
                />

                <button
                  type="submit"
                  className="px-5 py-3 rounded-xl bg-[#6E2CF3] hover:bg-[#5D22D6] text-white text-xs sm:text-sm font-medium tracking-tight flex items-center gap-2 shrink-0 shadow-[0_4px_12px_rgba(110,44,243,0.3)] transition-all hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <span>Submit Inquiry</span>
                  <ArrowRight size={15} />
                </button>
              </form>

              <p className="text-xs text-[#86868B] mt-4 font-mono">
                Direct route to founder Abdulkabir Ajiboye · Response guaranteed in 24h
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
