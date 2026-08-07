import { useState } from 'react'
import './Vision.css'

const pillars = [
  { title: 'Multi-currency accounts', body: 'Hold and move money across borders without the usual friction.' },
  { title: 'Global investment access', body: 'Reach markets that local rails currently lock people out of.' },
  { title: 'Low-interest lending', body: 'Credit built for people traditional banking underserves.' },
  { title: 'Security-first engineering', body: 'Auth and data handling designed properly from day one.' },
]

const proof = [
  'Registered with the Nigerian Corporate Affairs Commission (CAC)',
  'Live at skkuglobal.com with a custom React/Vite frontend',
  'Domain, professional email, and GitHub organization in place',
  'Early partner and affiliate relationships established',
]

// Set VITE_SUBSCRIBE_ENDPOINT to a form backend to collect signups directly.
// Without it, the form falls back to a prefilled email so no lead is lost.
const ENDPOINT = import.meta.env.VITE_SUBSCRIBE_ENDPOINT
const CONTACT_EMAIL = 'admin@skkuglobal.com'

export default function Vision() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | done | error
  const [message, setMessage] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()

    const value = email.trim()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setStatus('error')
      setMessage('Please enter a valid email address.')
      return
    }

    if (!ENDPOINT) {
      // No backend configured — hand off to the user's mail client.
      window.location.href =
        `mailto:${CONTACT_EMAIL}` +
        `?subject=${encodeURIComponent('SKKU Global — early access request')}` +
        `&body=${encodeURIComponent(`Please add me to the early access list: ${value}`)}`
      setStatus('done')
      setMessage("Opening your email app — send it and you're on the list.")
      setEmail('')
      return
    }

    setStatus('loading')
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ email: value }),
      })
      if (!res.ok) throw new Error(`Request failed: ${res.status}`)
      setStatus('done')
      setMessage("You're on the list. I'll be in touch.")
      setEmail('')
    } catch {
      setStatus('error')
      setMessage(`Something went wrong. Email me directly at ${CONTACT_EMAIL}.`)
    }
  }

  return (
    <section className="vision-section" id="vision">
      <div className="shell">
        <div className="section-header animate">
          <div className="section-label">THE VISION</div>
          <h2>Building SKKU Global</h2>
          <p>
            A borderless fintech platform for the people who were told global
            finance wasn&apos;t for them.
          </p>
        </div>

        <div className="vision-card animate animate-delay-1">
          <div className="vision-main">
            <h3>Borderless banking, built security-first</h3>
            <p>
              SKKU Global Technologies Limited is building toward banking without
              borders — letting people move, save, invest, and borrow globally
              with the same ease as using a local bank.
            </p>

            <div className="pillars">
              {pillars.map((pillar) => (
                <div className="pillar" key={pillar.title}>
                  <h4>{pillar.title}</h4>
                  <p>{pillar.body}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="vision-proof">
            <div className="proof-label">WHERE IT STANDS TODAY</div>
            <ul>
              {proof.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </div>

        <form
          className="email-form animate animate-delay-2"
          onSubmit={handleSubmit}
          noValidate
        >
          <label htmlFor="early-access-email" className="email-label">
            Get early access
          </label>
          <div className="email-row">
            <input
              id="early-access-email"
              className="email-input"
              type="email"
              name="email"
              placeholder="your@email.com"
              autoComplete="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                if (status !== 'idle') {
                  setStatus('idle')
                  setMessage('')
                }
              }}
              aria-invalid={status === 'error'}
              aria-describedby="early-access-status"
              required
            />
            <button
              type="submit"
              className="btn-primary"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Sending…' : 'Get early access'}
            </button>
          </div>
          <p
            id="early-access-status"
            className={`form-status${status === 'error' ? ' error' : ''}${status === 'done' ? ' done' : ''}`}
            role="status"
            aria-live="polite"
          >
            {message}
          </p>
        </form>
      </div>
    </section>
  )
}
