import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './ServicePowerhouse.css'

function ArrowRightIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}

function ChevronLeftIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  )
}

function ChevronRightIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  )
}

function ExternalLinkIcon({ size = 12 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

function PlayIcon({ size = 13 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  )
}

function PauseIcon({ size = 13 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <rect x="6" y="4" width="4" height="16" />
      <rect x="14" y="4" width="4" height="16" />
    </svg>
  )
}

function VolumeIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
    </svg>
  )
}

function MuteIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <line x1="23" y1="9" x2="17" y2="15" />
      <line x1="17" y1="9" x2="23" y2="15" />
    </svg>
  )
}

const WEBSITE_SHOWCASES = [
  {
    id: 'carbreezy',
    label: 'CarBreezy Luxury Showroom',
    shortLabel: 'CarBreezy',
    url: 'https://carbreezy-react.vercel.app/',
    displayUrl: 'carbreezy-react.vercel.app',
    image: '/work/carbreezy-ferrari-hero.png',
    alt: 'CarBreezy Ferrari Showroom Custom Platform by SKKU Global',
  },
  {
    id: 'secuscan',
    label: 'SecuScan Security Platform',
    shortLabel: 'SecuScan',
    url: 'https://secuscan-orpin.vercel.app/',
    displayUrl: 'secuscan-orpin.vercel.app',
    image: '/screenshots/secuscan/slide-1.webp',
    alt: 'SecuScan Zero-State Vulnerability Scanner by SKKU Global',
  },
  {
    id: 'luxehair',
    label: 'Luxe Hair Co. Storefront',
    shortLabel: 'Luxe Hair',
    url: 'https://luxehair-tau.vercel.app/',
    displayUrl: 'luxehair-tau.vercel.app',
    image: '/screenshots/luxehair/slide-1.webp',
    alt: 'Luxe Hair E-Commerce Storefront by SKKU Global',
  },
]

const ADS_MEDIA_OPTIONS = [
  {
    id: 'video',
    label: 'Ads Video Production',
    shortLabel: '▶ Ads Video',
    type: 'video',
    src: '/work/brand-ads-video.mp4',
    poster: '/work/tems-mockup.png',
  },
  {
    id: 'tems-mockup',
    label: 'TEMS Flyer Mockup',
    shortLabel: 'Flyer Mockup',
    type: 'image',
    src: '/work/tems-mockup.png',
    alt: 'TEMS Foodstuff Real-World Promotional Flyer Display',
  },
  {
    id: 'tems-flyer',
    label: 'Campaign Flyer',
    shortLabel: 'Digital Flyer',
    type: 'image',
    src: '/work/tems-flyer.png',
    alt: 'TEMS Campaign Digital Flyer Design',
  },
]

export default function ServicePowerhouse() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [selectedSiteIdx, setSelectedSiteIdx] = useState(0)
  const [selectedMediaIdx, setSelectedMediaIdx] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)

  const videoRef = useRef(null)
  const trackRef = useRef(null)

  const currentSite = WEBSITE_SHOWCASES[selectedSiteIdx]
  const currentMedia = ADS_MEDIA_OPTIONS[selectedMediaIdx]

  const handleScrollTo = (index) => {
    setActiveIndex(index)
    if (trackRef.current) {
      const card = trackRef.current.children[index]
      if (card) {
        card.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' })
      }
    }
  }

  const handleNext = () => {
    const next = (activeIndex + 1) % 2
    handleScrollTo(next)
  }

  const handlePrev = () => {
    const prev = (activeIndex - 1 + 2) % 2
    handleScrollTo(prev)
  }

  const togglePlay = () => {
    if (!videoRef.current) return
    if (videoRef.current.paused) {
      videoRef.current.play()
      setIsPlaying(true)
    } else {
      videoRef.current.pause()
      setIsPlaying(false)
    }
  }

  const toggleMute = () => {
    if (!videoRef.current) return
    videoRef.current.muted = !videoRef.current.muted
    setIsMuted(videoRef.current.muted)
  }

  return (
    <section className="powerhouse-section" id="services-powerhouse" aria-label="Digital Design & Engineering Powerhouse">
      <div className="powerhouse-container">
        
        {/* ── Editorial Header (Matching wearestokt.com style) ── */}
        <div className="powerhouse-header">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="powerhouse-kicker">SERVICES & CAPABILITIES</span>
            <h2 className="powerhouse-title">
              Digital Design Powerhouse
            </h2>
            <p className="powerhouse-subtitle">
              Over the last decade, we&apos;ve refined a wide range of skills in digital design, offering services mastered to perfection and always driven by the purpose of motion.
            </p>
          </motion.div>

          {/* Carousel Arrows */}
          <div className="powerhouse-nav-arrows">
            <button
              type="button"
              className="powerhouse-arrow-btn"
              onClick={handlePrev}
              aria-label="Previous service"
            >
              <ChevronLeftIcon size={18} />
            </button>
            <button
              type="button"
              className="powerhouse-arrow-btn"
              onClick={handleNext}
              aria-label="Next service"
            >
              <ChevronRightIcon size={18} />
            </button>
          </div>
        </div>

        {/* ── 2 Main Pillars (Card 01: Website Platform | Card 02: Ads Video & Flyer) ── */}
        <div className="powerhouse-track" ref={trackRef}>
          
          {/* ════════════ CARD 01: CUSTOM WEBSITE & WEB APP ENGINEERING ════════════ */}
          <motion.article
            className={`powerhouse-card ${activeIndex === 0 ? 'is-active' : ''}`}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => setActiveIndex(0)}
          >
            {/* Visual Stage: Real Client Website Showcase */}
            <div className="powerhouse-card-visual powerhouse-visual-website">
              {/* Browser Frame Topbar */}
              <div className="powerhouse-browser-bar">
                <div className="powerhouse-browser-dots" aria-hidden="true">
                  <span className="p-dot p-dot-red" />
                  <span className="p-dot p-dot-yellow" />
                  <span className="p-dot p-dot-green" />
                </div>
                <div className="powerhouse-browser-url">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                  <span>{currentSite.displayUrl}</span>
                </div>
                <a
                  href={currentSite.url}
                  target="_blank"
                  rel="noreferrer"
                  className="powerhouse-browser-ext"
                  title="Open live website in new tab"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span>LIVE DEMO</span>
                  <ExternalLinkIcon size={10} />
                </a>
              </div>

              {/* Website Screenshot */}
              <img
                src={currentSite.image}
                alt={currentSite.alt}
                className="powerhouse-card-img powerhouse-website-img"
                loading="lazy"
              />
              <div className="powerhouse-card-overlay" />
              <span className="powerhouse-card-num">01</span>

              {/* Website Switcher Pills */}
              <div className="powerhouse-media-switcher" onClick={(e) => e.stopPropagation()}>
                {WEBSITE_SHOWCASES.map((site, sIdx) => (
                  <button
                    key={site.id}
                    type="button"
                    className={`powerhouse-media-tab ${selectedSiteIdx === sIdx ? 'is-active' : ''}`}
                    onClick={() => setSelectedSiteIdx(sIdx)}
                    title={site.label}
                  >
                    {site.shortLabel}
                  </button>
                ))}
              </div>
            </div>

            {/* Card Content Block */}
            <div className="powerhouse-card-body">
              <div className="powerhouse-card-header">
                <span className="powerhouse-badge">ENGINEERING & ARCHITECTURE</span>
                <h3 className="powerhouse-card-title">Custom Website & Web App Engineering</h3>
              </div>

              <p className="powerhouse-card-tagline">
                Fast, bespoke modern React & Node.js platforms engineered from scratch. Zero templates, sub-second load velocity, and 100% code ownership.
              </p>

              {/* Key Deliverables Pills */}
              <div className="powerhouse-deliverables">
                <span className="powerhouse-deliv-pill">React + Vite Frontend</span>
                <span className="powerhouse-deliv-pill">Full-Stack Node.js & Supabase</span>
                <span className="powerhouse-deliv-pill">Resend / SMTP Mail Auth</span>
                <span className="powerhouse-deliv-pill">100% GitHub Code Handover</span>
              </div>

              {/* Inquire Action Button */}
              <div className="powerhouse-card-footer">
                <Link
                  to="/contact?objective=Custom%20Website%20%26%20Web%20App%20Engineering"
                  className="powerhouse-inquire-btn"
                >
                  <span>Inquire this capability</span>
                  <ArrowRightIcon size={13} />
                </Link>
              </div>
            </div>
          </motion.article>


          {/* ════════════ CARD 02: FLYER DESIGN & ADS VIDEO PRODUCTION ════════════ */}
          <motion.article
            className={`powerhouse-card ${activeIndex === 1 ? 'is-active' : ''}`}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => setActiveIndex(1)}
          >
            {/* Visual Stage: Real Ads Video & Flyer Showcase */}
            <div className="powerhouse-card-visual powerhouse-visual-video">
              {currentMedia.type === 'video' ? (
                <div className="powerhouse-video-stage">
                  <video
                    ref={videoRef}
                    src={currentMedia.src}
                    poster={currentMedia.poster}
                    className="powerhouse-card-video"
                    playsInline
                    muted={isMuted}
                    loop
                    autoPlay
                    preload="metadata"
                  >
                    Your browser does not support the video tag.
                  </video>

                  {/* Video Control Bar Overlay */}
                  <div className="powerhouse-video-ctrls" onClick={(e) => e.stopPropagation()}>
                    <button
                      type="button"
                      className="powerhouse-video-play-btn"
                      onClick={togglePlay}
                      aria-label={isPlaying ? 'Pause Ads Video' : 'Play Ads Video'}
                      title={isPlaying ? 'Pause Video' : 'Play Video'}
                    >
                      {isPlaying ? <PauseIcon size={13} /> : <PlayIcon size={13} />}
                      <span>{isPlaying ? 'PAUSE' : 'PLAY'}</span>
                    </button>

                    <button
                      type="button"
                      className="powerhouse-video-mute-btn"
                      onClick={toggleMute}
                      aria-label={isMuted ? 'Unmute Ads Video' : 'Mute Ads Video'}
                      title={isMuted ? 'Unmute Sound' : 'Mute Sound'}
                    >
                      {isMuted ? <MuteIcon size={13} /> : <VolumeIcon size={13} />}
                    </button>
                  </div>
                </div>
              ) : (
                <img
                  src={currentMedia.src}
                  alt={currentMedia.alt}
                  className="powerhouse-card-img powerhouse-flyer-img"
                  loading="lazy"
                />
              )}

              <div className="powerhouse-card-overlay" />
              <span className="powerhouse-card-num">02</span>

              {/* Media Switcher: Ads Video vs TEMS Flyer */}
              <div className="powerhouse-media-switcher" onClick={(e) => e.stopPropagation()}>
                {ADS_MEDIA_OPTIONS.map((media, mIdx) => (
                  <button
                    key={media.id}
                    type="button"
                    className={`powerhouse-media-tab ${selectedMediaIdx === mIdx ? 'is-active' : ''}`}
                    onClick={() => {
                      setSelectedMediaIdx(mIdx)
                      if (media.type === 'video') {
                        setIsPlaying(true)
                      }
                    }}
                    title={media.label}
                  >
                    {media.shortLabel}
                  </button>
                ))}
              </div>
            </div>

            {/* Card Content Block */}
            <div className="powerhouse-card-body">
              <div className="powerhouse-card-header">
                <span className="powerhouse-badge">MOTION & ADS VIDEO PRODUCTION</span>
                <h3 className="powerhouse-card-title">Flyer Design & Ads Video Production</h3>
              </div>

              <p className="powerhouse-card-tagline">
                Scroll-stopping short-form promotional ads video production and motion graphics engineered for social media marketing, WhatsApp conversion, and high brand retention.
              </p>

              {/* Key Deliverables Pills */}
              <div className="powerhouse-deliverables">
                <span className="powerhouse-deliv-pill">Short-Form Promos</span>
                <span className="powerhouse-deliv-pill">Social Media Ads Video</span>
                <span className="powerhouse-deliv-pill">Motion Graphics Creative</span>
                <span className="powerhouse-deliv-pill">TEMS Verified Video & Flyer</span>
              </div>

              {/* Inquire Action Button */}
              <div className="powerhouse-card-footer">
                <Link
                  to="/contact?objective=Flyer%20Design%20%26%20Ads%20Video%20Production"
                  className="powerhouse-inquire-btn"
                >
                  <span>Inquire this capability</span>
                  <ArrowRightIcon size={13} />
                </Link>
              </div>
            </div>
          </motion.article>

        </div>

        {/* ── Slider Indicator (Bottom Right Style) ── */}
        <div className="powerhouse-slider-bar">
          <span className="powerhouse-slider-meta">
            0{activeIndex + 1} / 02
          </span>
          <div className="powerhouse-slider-track">
            <button
              type="button"
              className={`powerhouse-slider-dot ${activeIndex === 0 ? 'is-active' : ''}`}
              onClick={() => handleScrollTo(0)}
              aria-label="Go to service 01"
            />
            <button
              type="button"
              className={`powerhouse-slider-dot ${activeIndex === 1 ? 'is-active' : ''}`}
              onClick={() => handleScrollTo(1)}
              aria-label="Go to service 02"
            />
          </div>
        </div>

      </div>
    </section>
  )
}
