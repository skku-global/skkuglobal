import './About.css'

// ─── Company highlight cards ───────────────────────────────────────────────
const companyHighlights = [
  {
    title: 'Security-first',
    body: 'Every product we ship is built with authentication, data handling, and exposure risk in mind from day one — not bolted on later.',
  },
  {
    title: 'Shipping-obsessed',
    body: 'We build real products and deploy them. Every case study below is live — frontend, backend, database, and deployment handled end-to-end.',
  },
  {
    title: 'CAC-Registered',
    body: 'SKKU Global Technologies Limited is a registered Nigerian company with a domain, professional email, and GitHub organisation in place.',
  },
]

// ─── Founder highlight cards ───────────────────────────────────────────────
const founderHighlights = [
  {
    title: 'Education',
    body: 'Completing the ADSE diploma at Aptech Mokola, Ibadan — on a pathway to a BSc at Middlesex University, UK.',
  },
  {
    title: 'Security background',
    body: 'Independently identified authentication weaknesses in existing Nigerian fintech apps. That thinking shapes everything SKKU ships.',
  },
  {
    title: 'Builder by default',
    body: 'Self-taught and shipping-obsessed. Chose hands-on credentialing over classroom — every product below is deployed and live.',
  },
]

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="shell">

        {/* ── Block 1: About SKKU ───────────────────────────────────── */}
        <div className="section-header animate">
          <div className="section-label">ABOUT</div>
          <h2>A digital agency built security-first</h2>
          <p>
            SKKU Global Technologies Limited builds web products, audits digital
            security, and delivers content — for founders, startups, and
            businesses who need work done properly the first time.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-bio animate animate-delay-1">
            <p>
              We operate from Ibadan, Nigeria, and work with clients globally.
              Our edge is combining real engineering experience — multiple
              full-stack products in production — with a security-first mindset
              that comes from having found actual vulnerabilities in fintech apps
              already on the market.
            </p>
            <p>
              That combination means clients get products built to last: clean
              architecture, proper authentication, and an audit process that
              catches what developers under deadline pressure typically miss.
            </p>
          </div>

          <div className="about-highlights">
            {companyHighlights.map((item, i) => (
              <div
                className={`about-card animate animate-delay-${i + 2}`}
                key={item.title}
              >
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Block 2: Founders ─────────────────────────────────────── */}
        <div className="section-header animate about-founders-header">
          <div className="section-label">FOUNDERS</div>
          <h2>Abdulkabir — Founder &amp; Lead Engineer</h2>
          <p>
            The short version of how SKKU got here.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-bio animate animate-delay-1">
            <p>
              I&apos;m Abdulkabir — a full-stack developer and the founder of
              SKKU Global Technologies Limited, building from Ibadan, Nigeria. I
              chose a hands-on credentialing path deliberately: I wanted applied
              skill and real products in production, not just a curriculum.
            </p>
            <p>
              That decision has paid off in the only way that counts — working
              software. I&apos;ve built and deployed personal finance apps,
              banking platforms with biometric authentication, and marketplace
              products end-to-end. Along the way I found real authentication
              vulnerabilities in fintech apps already on the market, which is
              exactly why SKKU is built security-first from day one.
            </p>
            <p>
              Alongside engineering, I&apos;ve spent two years trading XAUUSD
              and BTCUSD on a disciplined top-down framework — currently on
              funded prop firm accounts. Same discipline, different market. That
              same structured thinking runs through everything I ship.
            </p>
          </div>

          <div className="about-highlights">
            {founderHighlights.map((item, i) => (
              <div
                className={`about-card animate animate-delay-${i + 2}`}
                key={item.title}
              >
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
