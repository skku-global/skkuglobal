import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { waLink } from '../seo/siteMeta.js'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#F5F5F7] border-t border-[#E5E5EA] text-[#1D1D1F] pt-16 pb-12 transition-colors">
      <div className="max-w-[1160px] mx-auto px-6 md:px-10">
        {/* ── Studio Headline & Status ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#E5E5EA]">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-serif italic font-semibold text-2xl tracking-tight text-[#1D1D1F]">
                SKKU Global
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#6E2CF3]" />
            </div>
            <p className="text-[#6E6E73] text-sm max-w-md leading-relaxed font-sans">
              Thoughtful digital systems engineered for brands that refuse to blend in. CAC-registered (RC 7306232) in Nigeria, deploying globally.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E5EA] text-xs font-mono text-[#1D1D1F]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Studio Accepting Q4 & 2027 Commissions</span>
            </span>
          </div>
        </div>

        {/* ── 4 Clean Columns Directory ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-12">
          {/* Column 1: Services */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-[#6E6E73] mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-[13.5px]">
              <li>
                <Link to="/services#engineering" className="text-[#1D1D1F] hover:text-[#6E2CF3] transition-colors">
                  Web & SaaS Engineering
                </Link>
              </li>
              <li>
                <Link to="/services#secuscan" className="text-[#1D1D1F] hover:text-[#6E2CF3] transition-colors">
                  SecuScan Audits
                </Link>
              </li>
              <li>
                <Link to="/services#ecommerce" className="text-[#1D1D1F] hover:text-[#6E2CF3] transition-colors">
                  E-Commerce Systems
                </Link>
              </li>
              <li>
                <Link to="/services#security" className="text-[#1D1D1F] hover:text-[#6E2CF3] transition-colors">
                  Platform Hardening
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Selected Work */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-[#6E6E73] mb-4">
              Selected Work
            </h4>
            <ul className="space-y-2.5 text-[13.5px]">
              <li>
                <Link to="/work#secuscan" className="text-[#1D1D1F] hover:text-[#6E2CF3] transition-colors">
                  SecuScan Engine
                </Link>
              </li>
              <li>
                <Link to="/work#luxe-hair" className="text-[#1D1D1F] hover:text-[#6E2CF3] transition-colors">
                  Luxe Hair Co
                </Link>
              </li>
              <li>
                <Link to="/work#carbreezy" className="text-[#1D1D1F] hover:text-[#6E2CF3] transition-colors">
                  CarBreezy Auto
                </Link>
              </li>
              <li>
                <Link to="/work#aura-living" className="text-[#1D1D1F] hover:text-[#6E2CF3] transition-colors">
                  Aura Living
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Studio */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-[#6E6E73] mb-4">
              Studio
            </h4>
            <ul className="space-y-2.5 text-[13.5px]">
              <li>
                <Link to="/about" className="text-[#1D1D1F] hover:text-[#6E2CF3] transition-colors">
                  About SKKU
                </Link>
              </li>
              <li>
                <Link to="/about#philosophy" className="text-[#1D1D1F] hover:text-[#6E2CF3] transition-colors">
                  Philosophy & Ethics
                </Link>
              </li>
              <li>
                <Link to="/about#principles" className="text-[#1D1D1F] hover:text-[#6E2CF3] transition-colors">
                  Three Core Principles
                </Link>
              </li>
              <li>
                <Link to="/about#founder" className="text-[#1D1D1F] hover:text-[#6E2CF3] transition-colors">
                  Founder Leadership
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal & Contact */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-[#6E6E73] mb-4">
              Contact & Legal
            </h4>
            <ul className="space-y-2.5 text-[13.5px]">
              <li>
                <Link to="/contact" className="text-[#1D1D1F] hover:text-[#6E2CF3] transition-colors font-medium">
                  Start a Project →
                </Link>
              </li>
              <li>
                <a
                  href="mailto:hello@skkuglobal.com"
                  className="text-[#1D1D1F] hover:text-[#6E2CF3] transition-colors inline-flex items-center gap-1"
                >
                  <span>hello@skkuglobal.com</span>
                  <ArrowUpRight size={12} className="text-[#6E6E73]" />
                </a>
              </li>
              <li>
                <a
                  href={waLink('Hello SKKU Global, I would like to discuss a project.')}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#1D1D1F] hover:text-[#6E2CF3] transition-colors inline-flex items-center gap-1"
                >
                  <span>Direct WhatsApp</span>
                  <ArrowUpRight size={12} className="text-[#6E6E73]" />
                </a>
              </li>
              <li>
                <Link to="/privacy" className="text-[#6E6E73] hover:text-[#1D1D1F] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-[#6E6E73] hover:text-[#1D1D1F] transition-colors">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Hairline Divider & Micro-Typography ── */}
        <div className="pt-8 border-t border-[#E5E5EA] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#6E6E73]">
          <p>© {currentYear} SKKU Global Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Ibadan · Lagos · Worldwide</span>
            <span>Est. 2026</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
