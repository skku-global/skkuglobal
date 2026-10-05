import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
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

function GridIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
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

const POWERHOUSE_SERVICES = [
  {
    id: 'web-dev',
    index: '01',
    stripLabel: 'Web Design & Dev',
    kicker: 'ENGINEERING & ARCHITECTURE',
    title: 'Web Design & Dev',
    subtitle: 'We build fast, responsive, and future-ready digital products using modern tools and frameworks.',
    features: [
      'Creative Development',
      'Website Responsiveness',
      'CMS & Custom Software',
      'Web Application',
      'E-Commerce Architecture',
      '100% Code Handover',
    ],
    inquireUrl: '/contact?objective=Custom%20Website%20%26%20Web%20App%20Engineering',
    mediaType: 'website',
  },
  {
    id: 'ads-video',
    index: '02',
    stripLabel: 'Flyer Design & Ads Video',
    kicker: 'MOTION & ADS PRODUCTION',
    title: 'Flyer Design & Ads Video',
    subtitle: 'Scroll-stopping short-form promotional ads video production and high-conversion flyer systems engineered for real sales.',
    features: [
      'Short-Form Video Promos',
      'Motion Graphics Creative',
      'Social Media Ads Video',
      '4K Commercial Video',
      'High-Conversion Flyers',
      'TEMS Verified Production',
    ],
    inquireUrl: '/contact?objective=Flyer%20Design%20%26%20Ads%20Video%20Production',
    mediaType: 'video',
  },
]

export default function ServicePowerhouse() {
  // 'grid' (initial state at first) | 'accordion' (when clicked)
  const [viewMode, setViewMode] = useState('grid')
  const [activeIndex, setActiveIndex] = useState(0)
  const [selectedSiteIdx, setSelectedSiteIdx] = useState(0)
  const [selectedMediaIdx, setSelectedMediaIdx] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)

  const videoRef = useRef(null)

  const currentSite = WEBSITE_SHOWCASES[selectedSiteIdx]
  const currentMedia = ADS_MEDIA_OPTIONS[selectedMediaIdx]

  const handleCardClick = (index) => {
    setActiveIndex(index)
    setViewMode('accordion')
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % POWERHOUSE_SERVICES.length)
  }

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + POWERHOUSE_SERVICES.length) % POWERHOUSE_SERVICES.length)
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
        
        {/* ── Section Header ── */}
        <div className="powerhouse-header">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="powerhouse-title">
              OUR SERVICES
            </h1>
            <p className="powerhouse-subtitle">
              Custom websites and ads content that put your business in front of the right people.
            </p>
          </motion.div>

          {/* Nav / View Controls */}
          <div className="powerhouse-nav-arrows">
            {viewMode === 'accordion' && (
              <button
                type="button"
                className="powerhouse-grid-toggle-btn"
                onClick={() => setViewMode('grid')}
                title="View All Services"
              >
                <GridIcon size={14} />
                <span>ALL SERVICES</span>
              </button>
            )}
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

        {/* ── Mobile Selector Tabs (< 860px) ── */}
        <div className="powerhouse-mobile-tabs">
          <button
            type="button"
            className={`powerhouse-mobile-tab-btn ${viewMode === 'grid' ? 'is-active' : ''}`}
            onClick={() => setViewMode('grid')}
          >
            <span>Overview</span>
          </button>
          {POWERHOUSE_SERVICES.map((srv, idx) => (
            <button
              key={srv.id}
              type="button"
              className={`powerhouse-mobile-tab-btn ${viewMode === 'accordion' && activeIndex === idx ? 'is-active' : ''}`}
              onClick={() => {
                setActiveIndex(idx)
                setViewMode('accordion')
              }}
            >
              <span className="p-mobile-tab-num">{srv.index}</span>
              <span className="p-mobile-tab-label">{srv.stripLabel}</span>
            </button>
          ))}
        </div>

        {/* ── Main Theater Box ── */}
        <div className="powerhouse-theater-box">
          <AnimatePresence mode="wait">
            
            {/* ══════════════════════════════════════════════════════════
                STATE 1: INITIAL DISPLAY AT FIRST (Side-by-side cards)
                Matching user's reference screenshot:
                - Floating visual asset in dark stage
                - Title at bottom left (Web Design & Dev, Motion Systems)
                - Orange text highlight on hover
                - Click to expand
               ══════════════════════════════════════════════════════════ */}
            {viewMode === 'grid' ? (
              <motion.div
                key="grid-view"
                className="powerhouse-cards-grid"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                {POWERHOUSE_SERVICES.map((service, idx) => {
                  const isHovered = activeIndex === idx
                  return (
                    <article
                      key={service.id}
                      className={`powerhouse-initial-card ${isHovered ? 'is-focused' : ''}`}
                      onClick={() => handleCardClick(idx)}
                      onMouseEnter={() => setActiveIndex(idx)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault()
                          handleCardClick(idx)
                        }
                      }}
                      aria-label={`Open ${service.title}`}
                    >
                      {/* Floating Visual Asset Stage */}
                      <div className="powerhouse-initial-visual">
                        {service.mediaType === 'website' ? (
                          <div className="powerhouse-initial-browser">
                            <div className="powerhouse-mini-bar">
                              <div className="powerhouse-browser-dots" aria-hidden="true">
                                <span className="p-dot p-dot-red" />
                                <span className="p-dot p-dot-yellow" />
                                <span className="p-dot p-dot-green" />
                              </div>
                              <span className="powerhouse-mini-url">carbreezy-react.vercel.app</span>
                              <span className="powerhouse-mini-badge">LIVE</span>
                            </div>
                            <img
                              src={WEBSITE_SHOWCASES[0].image}
                              alt={WEBSITE_SHOWCASES[0].alt}
                              className="powerhouse-initial-img"
                              loading="lazy"
                            />
                          </div>
                        ) : (
                          <div className="powerhouse-initial-video-wrap">
                            <video
                              src={ADS_MEDIA_OPTIONS[0].src}
                              poster={ADS_MEDIA_OPTIONS[0].poster}
                              className="powerhouse-initial-video"
                              playsInline
                              muted
                              loop
                              autoPlay
                              preload="metadata"
                            />
                            <div className="powerhouse-initial-video-badge">
                              <span>▶ PROMO VIDEO</span>
                            </div>
                          </div>
                        )}
                        <div className="powerhouse-card-overlay" />
                        <span className="powerhouse-initial-num">{service.index}</span>
                      </div>

                      {/* Clean Bottom Label (Exact replica of reference) */}
                      <div className="powerhouse-initial-label-bar">
                        <h2 className="powerhouse-initial-title">
                          {service.title}
                        </h2>
                        <span className="powerhouse-initial-cta">
                          <span>EXPLORE</span>
                          <ArrowRightIcon size={12} />
                        </span>
                      </div>
                    </article>
                  )
                })}
              </motion.div>
            ) : (

            /* ══════════════════════════════════════════════════════════
                STATE 2: WHEN CLICKED (Expanding Horizontal Accordion)
                Matching user's reference screenshot:
                - Active card expands wide with Title, Subtitle,
                  2-Column Arrow Capabilities, and Asset on right
                - Inactive card collapses to vertical strip with rotated text
                - Click any strip to expand that service
               ══════════════════════════════════════════════════════════ */
              <motion.div
                key="accordion-view"
                className="powerhouse-accordion-stage"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                {POWERHOUSE_SERVICES.map((service, idx) => {
                  const isExpanded = activeIndex === idx

                  if (!isExpanded) {
                    /* Collapsed Vertical Strip */
                    return (
                      <div
                        key={service.id}
                        className="powerhouse-collapsed-bar"
                        onClick={() => setActiveIndex(idx)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault()
                            setActiveIndex(idx)
                          }
                        }}
                        aria-label={`Expand ${service.title}`}
                        title={`Click to expand ${service.title}`}
                      >
                        <div className="powerhouse-collapsed-content">
                          <span className="powerhouse-collapsed-num">{service.index}</span>
                          <span className="powerhouse-collapsed-text">{service.stripLabel}</span>
                        </div>
                      </div>
                    )
                  }

                  /* Expanded Active Panel */
                  return (
                    <div key={service.id} className="powerhouse-expanded-panel">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={service.id}
                          className="powerhouse-expanded-inner"
                          initial={{ opacity: 0, x: idx === 0 ? -16 : 16 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        >
                          {/* Left Column: Heading, Subtitle, 2-Column Features */}
                          <div className="powerhouse-expanded-content">
                            <div className="powerhouse-acc-tag">
                              <span className="powerhouse-acc-num">{service.index}</span>
                              <span className="powerhouse-acc-kicker">{service.kicker}</span>
                            </div>

                            <h2 className="powerhouse-acc-title">{service.title}</h2>
                            <p className="powerhouse-acc-sub">{service.subtitle}</p>

                            {/* 2-Column Capability List with Arrows */}
                            <div className="powerhouse-acc-features">
                              {service.features.map((feat, fIdx) => (
                                <div key={fIdx} className="powerhouse-acc-feat-item">
                                  <span className="powerhouse-feat-arrow" aria-hidden="true">→</span>
                                  <span className="powerhouse-feat-label">{feat}</span>
                                </div>
                              ))}
                            </div>

                            {/* Inquire Action Button */}
                            <div className="powerhouse-acc-footer">
                              <Link to={service.inquireUrl} className="powerhouse-acc-btn">
                                <span>INQUIRE THIS SERVICE</span>
                                <ArrowRightIcon size={13} />
                              </Link>
                            </div>
                          </div>

                          {/* Right Column: Visual Asset Stage */}
                          <div className="powerhouse-expanded-visual">
                            {service.mediaType === 'website' ? (
                              /* Card 01: Client Website Showcase */
                              <div className="powerhouse-acc-visual-stage powerhouse-visual-website">
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
                                  >
                                    <span>LIVE DEMO</span>
                                    <ExternalLinkIcon size={10} />
                                  </a>
                                </div>

                                <img
                                  src={currentSite.image}
                                  alt={currentSite.alt}
                                  className="powerhouse-card-img powerhouse-website-img"
                                  loading="lazy"
                                />
                                <div className="powerhouse-card-overlay" />

                                {/* Website Switcher Pills */}
                                <div className="powerhouse-media-switcher">
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
                            ) : (
                              /* Card 02: Real Promotional Ads Video Showcase */
                              <div className="powerhouse-acc-visual-stage powerhouse-visual-video">
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

                                    {/* Video Overlay Controls */}
                                    <div className="powerhouse-video-ctrls">
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

                                {/* Media Switcher: Ads Video vs TEMS Flyer */}
                                <div className="powerhouse-media-switcher">
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
                            )}
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  )
                })}
              </motion.div>
            )}
          </AnimatePresence>
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
              onClick={() => setActiveIndex(0)}
              aria-label="Go to service 01"
            />
            <button
              type="button"
              className={`powerhouse-slider-dot ${activeIndex === 1 ? 'is-active' : ''}`}
              onClick={() => setActiveIndex(1)}
              aria-label="Go to service 02"
            />
          </div>
        </div>

      </div>
    </section>
  )
}
