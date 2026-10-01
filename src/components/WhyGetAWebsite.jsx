import { LuCheck, LuX, LuShieldCheck, LuSparkles } from 'react-icons/lu'
import { FaWhatsapp } from 'react-icons/fa6'
import { waLink } from '../seo/siteMeta.js'
import './WhyGetAWebsite.css'

export default function WhyGetAWebsite() {
  const dmProblems = [
    {
      title: 'Lost Midnight Orders',
      desc: 'When you are asleep or busy, customers message "How much?" with no response. By morning, they have bought from a competitor with an automated website.',
    },
    {
      title: 'The "Is This a Scam?" Hesitation',
      desc: 'Buyers hesitate to transfer money to social media pages. An official, SSL-secured website on your own domain (yourbrand.com) immediately eliminates scam doubts.',
    },
    {
      title: 'Zero Google Search Visibility',
      desc: 'When ready-to-buy customers search on Google for your products or services, Instagram posts rarely rank. Competitors with websites capture all that free traffic.',
    },
    {
      title: 'Platform & Algorithm Risk',
      desc: 'Instagram accounts get shadowbanned, suspended, or hacked without warning. Relying 100% on DMs means one algorithm update can wipe out your revenue.',
    },
  ]

  const websiteSolutions = [
    {
      title: '24/7 Automated Storefront',
      desc: 'Your full catalogue, prices, and specs work around the clock. Customers select items and checkout directly to your WhatsApp with zero back-and-forth.',
    },
    {
      title: 'Immediate Brand Authority',
      desc: 'A custom domain, SSL encryption, and professional presentation build a brand serious clients feel safe paying.',
    },
    {
      title: 'Built for Google Search',
      desc: 'We engineer structured data and technical SEO into every page, so customers searching for what you sell can find your website.',
    },
    {
      title: '100% Digital Asset Ownership',
      desc: 'You own your website, your database, and your customer relationships forever. No social media platform can shut your business down.',
    },
  ]

  return (
    <section className="why-website-section" id="why-a-website" aria-labelledby="why-heading">
      <div className="shell">
        {/* ── Section Header ── */}
        <div className="section-header text-center animate">
          <span className="section-eyebrow-tag">BUSINESS GROWTH REALITY</span>
          <h2 id="why-heading" className="section-title">
            The difference between selling in DMs{' '}
            <span className="gradient-text">and owning a website.</span>
          </h2>
          <p className="section-desc">
            Social media is built for social interaction — not for closing sales at scale. Here is what happens when your business upgrades to an official web platform.
          </p>
        </div>

        {/* ── Side-by-Side Comparison Matrix ── */}
        <div className="comparison-grid animate animate-delay-1">
          {/* Left Column: The DM Trap */}
          <div className="comparison-card dm-card">
            <div className="card-badge-header dm-badge">
              <LuX size={15} aria-hidden="true" />
              <span>SELLING ONLY ON SOCIAL MEDIA &amp; DMs</span>
            </div>
            <ul className="comparison-list">
              {dmProblems.map((p) => (
                <li key={p.title} className="comparison-item dm-item">
                  <div className="item-icon-x" aria-hidden="true">
                    <LuX size={13} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="item-title">{p.title}</h4>
                    <p className="item-desc">{p.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: The Website Engine */}
          <div className="comparison-card web-card">
            <div className="card-badge-header web-badge">
              <LuCheck size={15} aria-hidden="true" />
              <span>WITH A CUSTOM SKKU GLOBAL WEBSITE</span>
            </div>
            <ul className="comparison-list">
              {websiteSolutions.map((s) => (
                <li key={s.title} className="comparison-item web-item">
                  <div className="item-icon-check" aria-hidden="true">
                    <LuCheck size={13} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="item-title">{s.title}</h4>
                    <p className="item-desc">{s.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Concrete 5-7 Day Delivery Guarantee Box ── */}
        <div className="why-delivery-box animate animate-delay-2">
          <div className="delivery-content">
            <div className="delivery-tag">
              <LuSparkles size={14} aria-hidden="true" />
              <span>THE SKKU GLOBAL COMMITMENT</span>
            </div>
            <h3>What you receive within 5 to 7 days:</h3>
            <div className="delivery-checklist">
              <div className="check-col">
                <div className="check-row">
                  <LuCheck className="check-mark" size={16} aria-hidden="true" />
                  <span>Custom .com or .ng domain with SSL</span>
                </div>
                <div className="check-row">
                  <LuCheck className="check-mark" size={16} aria-hidden="true" />
                  <span>Mobile-first responsive UI</span>
                </div>
                <div className="check-row">
                  <LuCheck className="check-mark" size={16} aria-hidden="true" />
                  <span>Direct 1-tap WhatsApp concierge checkout</span>
                </div>
              </div>
              <div className="check-col">
                <div className="check-row">
                  <LuCheck className="check-mark" size={16} aria-hidden="true" />
                  <span>Free pre-launch SecuScan security audit</span>
                </div>
                <div className="check-row">
                  <LuCheck className="check-mark" size={16} aria-hidden="true" />
                  <span>Google Search Console indexing &amp; SEO tags</span>
                </div>
                <div className="check-row">
                  <LuCheck className="check-mark" size={16} aria-hidden="true" />
                  <span>50% start / 50% launch milestone payments</span>
                </div>
              </div>
            </div>
          </div>

          <div className="delivery-action">
            <a
              href={waLink('Hello SKKU Global, I want to upgrade my business with an official website. Can I get a free quote and timeline on WhatsApp?')}
              target="_blank"
              rel="noreferrer"
              className="btn-primary delivery-btn"
            >
              <FaWhatsapp size={19} aria-hidden="true" />
              <span>Chat on WhatsApp for a Free Quote</span>
            </a>
            <span className="delivery-subtext">Direct reply from founder · No obligations</span>
          </div>
        </div>
      </div>
    </section>
  )
}
