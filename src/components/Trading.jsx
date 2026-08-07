import './Trading.css'

const framework = [
  {
    step: 'Daily',
    body: 'Establish the higher-timeframe bias and mark the levels that matter.',
  },
  {
    step: '4H',
    body: 'Wait for structure to confirm or invalidate the daily read.',
  },
  {
    step: '1H',
    body: 'Execute with defined risk only where the lower timeframe agrees.',
  },
]

export default function Trading() {
  return (
    <section className="trading-section" id="trading">
      <div className="shell">
        <div className="section-header animate">
          <div className="section-label">MARKETS</div>
          <h2>I trade what I study</h2>
          <p>
            Roughly two years trading XAUUSD and BTCUSD on a disciplined
            top-down technical framework — currently on funded prop firm
            accounts.
          </p>
        </div>

        <div className="trading-grid">
          <div className="trading-framework animate animate-delay-1">
            <div className="framework-label">TOP-DOWN FRAMEWORK</div>
            {framework.map((item) => (
              <div className="framework-step" key={item.step}>
                <div className="step-tf">{item.step}</div>
                <p>{item.body}</p>
              </div>
            ))}
            <div className="framework-pairs">
              <span className="tag">XAUUSD</span>
              <span className="tag">BTCUSD</span>
              <span className="tag">Funded prop accounts</span>
            </div>
          </div>

          <div className="content-card animate animate-delay-2">
            <div className="content-badge">I DOCUMENT BOTH</div>
            <h3>4.2k subscribers on YouTube</h3>
            <p>
              I publish the trading process and the build process — setups,
              reviews, and what actually goes into shipping fintech from Nigeria.
              No signals, no hype.
            </p>
            <div className="content-links">
              <a
                href="https://youtube.com/@CRYPTOBOND01"
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                Watch on YouTube
              </a>
              <a
                href="https://t.me/SKKU07"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                Telegram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
