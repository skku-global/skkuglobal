import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Mail,
  Clock,
  Sparkles,
  Send,
  ExternalLink,
} from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa6'
import { waLink } from '../seo/siteMeta.js'

const OBJECTIVES = [
  {
    id: 'recognition',
    title: 'International Recognition',
    desc: 'Transforming an amateur look into an authoritative global digital presence.',
  },
  {
    id: 'rebuild',
    title: 'Platform Rebuild',
    desc: 'Migrating from slow, fragmented tools into a unified high-performance web app.',
  },
  {
    id: 'security',
    title: 'System Security',
    desc: 'Automated SecuScan vulnerability audit, OWASP hardening & cloud protection.',
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Launch',
    desc: 'Multi-currency retail storefront with automated carts and WhatsApp checkout.',
  },
]

const BUDGETS = [
  'Under $1,500 / ₦2,000,000',
  '$1,500 – $3,500 / ₦2m – ₦5m',
  '$3,500 – $8,000 / ₦5m – ₦12m',
  '$8,000+ / ₦12m+ (Enterprise)',
]

export default function MultiStepContact() {
  const [searchParams] = useSearchParams()
  const initialPrompt = searchParams.get('prompt') || ''
  const initialObjective = searchParams.get('objective') || ''

  const [step, setStep] = useState(1)
  const [selectedObjective, setSelectedObjective] = useState(initialObjective || 'recognition')
  const [description, setDescription] = useState(initialPrompt)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [budget, setBudget] = useState(BUDGETS[1])
  const [timeline, setTimeline] = useState('5–7 Day Sprint')
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // If initialPrompt exists, automatically advance to Step 2 so user sees their prompt!
  useEffect(() => {
    if (initialPrompt && step === 1) {
      setStep(2)
    }
  }, [initialPrompt])

  const handleNext = (e) => {
    if (e) e.preventDefault()
    if (step < 3) {
      setStep(step + 1)
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
    }, 600)
  }

  const waMessage = `Hello SKKU Global, I want to start a project.\nObjective: ${selectedObjective}\nDetails: ${description}\nName: ${name}\nEmail: ${email}\nBudget: ${budget}`

  return (
    <div className="max-w-[760px] mx-auto">
      {/* ── Progress Indicators ── */}
      {!submitted && (
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#E5E5EA]">
          <div className="flex items-center gap-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-2">
                <span
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono font-medium transition-all ${
                    step === i
                      ? 'bg-[#6E2CF3] text-white shadow-[0_2px_8px_rgba(110,44,243,0.3)]'
                      : step > i
                      ? 'bg-[#1D1D1F] text-white'
                      : 'bg-[#F5F5F7] text-[#86868B] border border-[#E5E5EA]'
                  }`}
                >
                  {i}
                </span>
                {i < 3 && <div className="w-8 sm:w-16 h-[1.5px] bg-[#E5E5EA]" />}
              </div>
            ))}
          </div>
          <span className="font-mono text-xs uppercase tracking-wider text-[#6E6E73]">
            Step 0{step} of 03
          </span>
        </div>
      )}

      {/* ── Multi-Step Container ── */}
      <div className="bg-[#F5F5F7] border border-[#E5E5EA] rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm">
        <AnimatePresence mode="wait">
          {/* ── STEP 1: Objective Selector ── */}
          {step === 1 && !submitted && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.3 }}
            >
              <span className="font-mono text-xs uppercase tracking-[0.24em] text-[#6E2CF3] font-semibold block mb-2">
                STEP 01
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1D1D1F] mb-3 font-normal">
                What is your primary objective?
              </h2>
              <p className="text-sm text-[#6E6E73] font-sans mb-8">
                Select the main business challenge or outcome you are aiming to achieve.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {OBJECTIVES.map((obj) => {
                  const isSelected = selectedObjective === obj.id
                  return (
                    <button
                      key={obj.id}
                      type="button"
                      onClick={() => setSelectedObjective(obj.id)}
                      className={`text-left p-5 rounded-2xl border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-white border-[#6E2CF3] shadow-[0_4px_16px_rgba(110,44,243,0.12)] ring-2 ring-[#6E2CF3]/20'
                          : 'bg-white/70 border-[#E5E5EA] hover:border-[#6E2CF3]/40 hover:bg-white'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <strong className="text-sm font-semibold text-[#1D1D1F]">
                          {obj.title}
                        </strong>
                        <span
                          className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                            isSelected
                              ? 'border-[#6E2CF3] bg-[#6E2CF3]'
                              : 'border-[#CBD5E1] bg-white'
                          }`}
                        >
                          {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                        </span>
                      </div>
                      <p className="text-xs text-[#6E6E73] leading-relaxed">
                        {obj.desc}
                      </p>
                    </button>
                  )
                })}
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleNext}
                  className="btn-apple-primary inline-flex items-center gap-2 px-6 py-2.5"
                >
                  <span>Continue to Problem Details</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          )}

          {/* ── STEP 2: Problem Description Text Area ── */}
          {step === 2 && !submitted && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.3 }}
            >
              <span className="font-mono text-xs uppercase tracking-[0.24em] text-[#6E2CF3] font-semibold block mb-2">
                STEP 02
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1D1D1F] mb-3 font-normal">
                Describe the friction or vision.
              </h2>
              <p className="text-sm text-[#6E6E73] font-sans mb-6">
                What does your business do, where are you losing clients, and what would a successful build look like?
              </p>

              <div className="mb-4">
                <textarea
                  rows={5}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="e.g. We have a high-ticket service but our current website feels clunky and amateur. We want an Apple-grade web platform with automated booking and instant WhatsApp checkout..."
                  className="w-full bg-white border border-[#E5E5EA] rounded-2xl p-4 text-sm sm:text-base text-[#1D1D1F] placeholder-[#86868B] focus:outline-none focus:border-[#6E2CF3] focus:ring-4 focus:ring-[#6E2CF3]/10 transition-all font-sans"
                />
              </div>

              {/* Quick Prompt Starters */}
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="text-xs font-mono text-[#86868B] py-1">Quick prompts:</span>
                {[
                  'Fix slow conversion & look international',
                  'Run SecuScan audit on my live site',
                  'E-Commerce with multi-currency checkouts',
                ].map((starter) => (
                  <button
                    key={starter}
                    type="button"
                    onClick={() => setDescription(starter)}
                    className="text-xs font-sans px-3 py-1 rounded-full bg-white border border-[#E5E5EA] hover:border-[#6E2CF3] text-[#1D1D1F] transition-colors"
                  >
                    + {starter}
                  </button>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={handleBack}
                  className="btn-apple-secondary inline-flex items-center gap-1.5 px-4 py-2 text-xs"
                >
                  <ArrowLeft size={13} />
                  <span>Back</span>
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="btn-apple-primary inline-flex items-center gap-2 px-6 py-2.5"
                >
                  <span>Continue to Contact Info</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          )}

          {/* ── STEP 3: Contact Information & Budget ── */}
          {step === 3 && !submitted && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.3 }}
            >
              <span className="font-mono text-xs uppercase tracking-[0.24em] text-[#6E2CF3] font-semibold block mb-2">
                STEP 03
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1D1D1F] mb-3 font-normal">
                Who should we send the roadmap to?
              </h2>
              <p className="text-sm text-[#6E6E73] font-sans mb-6">
                Direct founder review. We will evaluate your requirements and reply with a milestone roadmap within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4 mb-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#6E6E73] mb-1.5">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Alex Henderson"
                      className="w-full bg-white border border-[#E5E5EA] rounded-xl px-4 py-2.5 text-sm text-[#1D1D1F] focus:outline-none focus:border-[#6E2CF3]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#6E6E73] mb-1.5">
                      Work / Direct Email
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="alex@company.com"
                      className="w-full bg-white border border-[#E5E5EA] rounded-xl px-4 py-2.5 text-sm text-[#1D1D1F] focus:outline-none focus:border-[#6E2CF3]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#6E6E73] mb-1.5">
                      Budget Bracket
                    </label>
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full bg-white border border-[#E5E5EA] rounded-xl px-4 py-2.5 text-sm text-[#1D1D1F] focus:outline-none focus:border-[#6E2CF3]"
                    >
                      {BUDGETS.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#6E6E73] mb-1.5">
                      Target Delivery
                    </label>
                    <select
                      value={timeline}
                      onChange={(e) => setTimeline(e.target.value)}
                      className="w-full bg-white border border-[#E5E5EA] rounded-xl px-4 py-2.5 text-sm text-[#1D1D1F] focus:outline-none focus:border-[#6E2CF3]"
                    >
                      <option value="5–7 Day Sprint">5–7 Day Fast Sprint (Recommended)</option>
                      <option value="2–3 Weeks Full Launch">2–3 Weeks Full Launch</option>
                      <option value="Flexible / Q4 Roadmap">Flexible / Long-term Roadmap</option>
                    </select>
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="btn-apple-secondary inline-flex items-center gap-1.5 px-4 py-2 text-xs"
                  >
                    <ArrowLeft size={13} />
                    <span>Back</span>
                  </button>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-apple-violet inline-flex items-center gap-2 px-8 py-3 text-sm cursor-pointer"
                  >
                    <span>{isSubmitting ? 'Transmitting...' : 'Submit Inquiry'}</span>
                    <Send size={14} />
                  </button>
                </div>
              </form>
            </motion.div>
          )}

          {/* ── SUBMITTED CONFIRMATION ── */}
          {submitted && (
            <motion.div
              key="submitted"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="text-center py-6"
            >
              <div className="w-16 h-16 rounded-full bg-[#F5F0FF] border border-[#6E2CF3]/20 text-[#6E2CF3] flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={32} />
              </div>

              <span className="font-mono text-xs uppercase tracking-[0.24em] text-[#6E2CF3] font-semibold block mb-2">
                INQUIRY LOGGED
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1D1D1F] mb-4 font-normal">
                Thank you, {name || 'there'}.
              </h2>
              <p className="text-sm sm:text-base text-[#6E6E73] font-sans max-w-md mx-auto mb-8 leading-relaxed">
                Your project brief has been routed directly to founder Abdulkabir Ajiboye. We will review your objective and reply to <strong className="text-[#1D1D1F]">{email || 'your email'}</strong> within 24 hours.
              </p>

              {/* Instant WhatsApp Alternative */}
              <div className="bg-white border border-[#E5E5EA] rounded-2xl p-6 max-w-md mx-auto mb-6">
                <span className="font-mono text-xs text-[#86868B] uppercase block mb-2">
                  Need faster response?
                </span>
                <p className="text-xs text-[#6E6E73] mb-4">
                  Skip the email queue and connect directly with the lead architect on WhatsApp.
                </p>
                <a
                  href={waLink(waMessage)}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs sm:text-sm shadow-sm transition-all"
                >
                  <FaWhatsapp size={16} />
                  <span>Forward Brief to WhatsApp</span>
                  <ExternalLink size={13} />
                </a>
              </div>

              <button
                type="button"
                onClick={() => {
                  setSubmitted(false)
                  setStep(1)
                  setDescription('')
                }}
                className="text-xs font-mono text-[#6E6E73] hover:text-[#6E2CF3] underline"
              >
                Submit another inquiry
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ── Direct Email Alternative & Response SLA ── */}
      <div className="mt-12 p-6 rounded-2xl bg-white border border-[#E5E5EA] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-[#6E6E73]">
        <div className="flex items-center gap-2">
          <Mail size={16} className="text-[#6E2CF3]" />
          <span>Direct email:</span>
          <a
            href="mailto:hello@skkuglobal.com"
            className="font-medium text-[#1D1D1F] hover:text-[#6E2CF3] underline"
          >
            hello@skkuglobal.com
          </a>
        </div>

        <div className="flex items-center gap-2">
          <Clock size={16} className="text-[#6E2CF3]" />
          <span className="font-mono text-xs text-[#1D1D1F] font-semibold">
            Guaranteed Response SLA: Within 24 Hours
          </span>
        </div>
      </div>
    </div>
  )
}
