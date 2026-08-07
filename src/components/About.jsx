import './About.css'

const highlights = [
  {
    title: 'Education',
    body: 'Completing the ADSE diploma at Aptech Mokola, Ibadan — on a pathway to a BSc at Middlesex University, UK.',
  },
  {
    title: 'Security-first',
    body: 'Independently identified authentication weaknesses in existing Nigerian fintech apps. That thinking shapes everything I ship.',
  },
  {
    title: 'Builder-first',
    body: 'Self-taught and shipping-obsessed. Every project below is deployed and live — frontend, backend, database, deployment.',
  },
]

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="shell">
        <div className="section-header animate">
          <div className="section-label">ABOUT</div>
          <h2>Builder first, everything else second</h2>
          <p>
            I learn by shipping. Here&apos;s the short version of how I got here.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-bio animate animate-delay-1">
            <p>
              I&apos;m Abdulkabir — a full-stack developer and trader building
              from Ibadan, Nigeria. I chose a hands-on credentialing path
              deliberately: I wanted applied skill and real products in
              production, not just a curriculum.
            </p>
            <p>
              That decision has paid off in the only way that counts — working
              software. I&apos;ve built and deployed personal finance apps,
              banking platforms with biometric authentication, and marketplace
              products end-to-end. Along the way I found real authentication
              vulnerabilities in fintech apps already on the market, which is
              exactly why SKKU Global is being built security-first from day one.
            </p>
            <p>
              Alongside engineering, I&apos;ve spent about two years trading
              XAUUSD and BTCUSD on a disciplined top-down framework, and I now
              trade funded prop firm accounts. Same discipline, different market.
            </p>
          </div>

          <div className="about-highlights">
            {highlights.map((item, i) => (
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
