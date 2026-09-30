import { LuCheck, LuArrowRight, LuClock, LuShieldCheck, LuSearch, LuTrendingUp } from 'react-icons/lu'
import { FaWhatsapp } from 'react-icons/fa6'
import { waLink } from '../seo/siteMeta.js'
import './WhyGetAWebsite.css'

export default function WhyGetAWebsite() {
  const benefits = [
    {
      icon: <LuClock size={24} />,
      colorTheme: 'emerald',
      title: 'Make Sales While You Sleep',
      tagline: '24/7 Automated Storefront',
      desc: 'On Instagram or WhatsApp, you lose customers when you are offline or slow to reply. A professional website displays your catalogue, takes orders, and captures leads automatically at any hour of the day.',
    },
    {
      icon: <LuShieldCheck size={24} />,
      colorTheme: 'blue',
      title: 'Instant Trust & No "Is This a Scam?" Fear',
      tagline: 'Legitimate Brand Credibility',
      desc: 'Customers hesitate to send money to random social media accounts. An official, secure website with your custom domain (yourbusiness.com) immediately proves you are a registered, trustworthy brand.',
    },
    {
      icon: <LuSearch size={24} />,
      colorTheme: 'purple',
      title: 'Get Found on Google Before Competitors',
      tagline: 'Free Organic Customers',
      desc: 'When people search on Google for your products or services, social media posts rarely show up. A search-optimized website puts your business at the top of Google results when ready-to-buy customers are searching.',
    },
    {
      icon: <LuTrendingUp size={24} />,
      colorTheme: 'amber',
      title: 'Stop Relying on Social Media Algorithms',
      tagline: '100% Brand Ownership',
      desc: 'Instagram accounts get shadowbanned, hacked, or lose engagement overnight. Your website is an asset you own 100% — with direct customer emails, order records, and zero risk of sudden platform bans.',
    },
  ]

  return (
    <section className="why-website-section" id="why-a-website" aria-labelledby="why-heading">
      <div className="shell">
        <div className="section-header text-center animate">
          <div className="section-badge-pill">
            <span className="badge-pulse-dot" aria-hidden="true" />
            WHY GET A WEBSITE
          </div>
          <h2 id="why-heading" className="section-title">
            Why Your Business Needs a Website.{' '}
            <span className="gradient-text">Not Just Social Media.</span>
          </h2>
          <p className="section-desc">
            Relying solely on DMs and status posts is costing you paying customers every single day. Here is how a custom website grows your revenue.
          </p>
        </div>

        {/* ── 4 Core Value Pillars ── */}
        <div className="why-benefits-grid">
          {benefits.map((b, idx) => (
            <article key={b.title} className={`why-card card-${b.colorTheme} animate animate-delay-${idx + 1}`}>
              <div className="why-icon-wrap" aria-hidden="true">
                {b.icon}
              </div>
              <span className="why-tagline">{b.tagline}</span>
              <h3 className="why-title">{b.title}</h3>
              <p className="why-desc">{b.desc}</p>
            </article>
          ))}
        </div>

        {/* ── Direct Pitch Card ── */}
        <div className="why-cta-box animate animate-delay-3">
          <div className="why-cta-left">
            <span className="why-cta-badge">FAST 5–7 DAY DELIVERY</span>
            <h3>Ready to put your business on the map?</h3>
            <p>
              We build fast, luxury, mobile-optimized websites with direct WhatsApp checkout and Google ranking built-in.
            </p>
            <ul className="why-guarantee-list">
              <li><LuCheck size={16} className="why-check" aria-hidden="true" /> Mobile-first responsive design</li>
              <li><LuCheck size={16} className="why-check" aria-hidden="true" /> Free security audit &amp; SSL included</li>
              <li><LuCheck size={16} className="why-check" aria-hidden="true" /> Transparent milestone payment plans</li>
            </ul>
          </div>

          <div className="why-cta-right">
            <a
              href={waLink('Hello SKKU Global, I want to get a website built for my business. Can we discuss options and pricing?')}
              target="_blank"
              rel="noreferrer"
              className="btn-primary why-whatsapp-btn"
            >
              <FaWhatsapp size={20} aria-hidden="true" />
              <span>Chat on WhatsApp for a Free Quote</span>
            </a>
            <span className="why-sla-text">⚡ Average response time: under 15 minutes</span>
          </div>
        </div>
      </div>
    </section>
  )
}
