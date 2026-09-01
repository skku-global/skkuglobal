import { useEffect, useRef, useState } from 'react'
import './ProjectDemo.css'

/* macOS-style window dots — decorative framing only. */
const CHROME_DOTS = ['dot-red', 'dot-amber', 'dot-green']

/* Stroke icons rather than emoji: an emoji renders as someone else's artwork at
   someone else's weight, which is the one thing a premium frame cannot afford. */
function SpeakerIcon({ on }) {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M11 5 6 9H2v6h4l5 4V5z" />
      {on ? (
        <>
          <path d="M15.5 8.5a5 5 0 0 1 0 7" />
          <path d="M18.5 5.5a9 9 0 0 1 0 13" />
        </>
      ) : (
        <>
          <path d="M22 9l-6 6" />
          <path d="M16 9l6 6" />
        </>
      )}
    </svg>
  )
}

/**
 * Product reel for a featured project, framed as a browser window.
 *
 * Two modes, and which one is the default is the whole design:
 *
 *   'loop' — a short cut that repeats, muted, starting on scroll-in. A cold
 *            visitor should absorb the product without deciding to press
 *            anything, and a muted loop reads as a product shot rather than as a
 *            video to sit through. The music is there behind a sound button for
 *            anyone who wants it — offered, never imposed.
 *   'full' — the complete walkthrough with sound and controls, opt-in only, for
 *            the visitor who has already decided they are interested.
 *
 * Reduced-motion visitors never get autoplay; they get the poster plus real
 * controls, so the reel stays reachable but never arrives uninvited. The same
 * fallback covers browsers without IntersectionObserver.
 *
 * `full` is optional: a project whose recording yields only a clean short cut
 * ships the loop alone, and the walkthrough toggle simply does not render.
 */
export default function ProjectDemo({
  title,
  poster,
  loop,
  full,
  width,
  height,
  siteUrl,
  siteLabel,
}) {
  const videoRef = useRef(null)
  // Set while *we* call pause(), so the pause handler can tell our own pause
  // apart from the visitor pressing pause themselves.
  const selfPausedRef = useRef(false)
  // Once the visitor pauses deliberately, the observer stops restarting it.
  const optedOutRef = useRef(false)
  const [mode, setMode] = useState('loop')
  const [soundOn, setSoundOn] = useState(false)
  // Set when the browser refuses a play() we asked for. Muted autoplay is
  // normally permitted, but a site-level media setting, an extension, or a
  // battery-saver mode can still decline it — and a declined play leaves the
  // visitor staring at a poster. This is what lets us hand them controls.
  const [autoplayFailed, setAutoplayFailed] = useState(false)
  // Read once at mount rather than subscribed: this is a client-rendered app so
  // `window` is available during the first render, and a visitor changing their
  // OS motion setting mid-visit is not worth a subscription to chase.
  const [reducedMotion] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
  const [hasObserver] = useState(() => 'IntersectionObserver' in window)

  // Whether the loop can start itself. When it cannot — reduced motion, or a
  // browser without IntersectionObserver — the reel must fall back to real
  // controls, or the visitor is left facing a poster with no way to play it.
  const selfStarts = !reducedMotion && hasObserver
  // A project can ship the loop alone; the walkthrough is the optional extra.
  const isLoop = mode === 'loop' || !full
  const clip = isLoop ? loop : full
  // Autoplay is only permitted while muted, so the first play is always silent;
  // sound can only ever be switched on by the visitor's own click.
  const isMuted = isLoop && !soundOn

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // React is unreliable about the `muted` attribute on the initial mount, and
    // an unmuted autoplay attempt is refused outright — so pin it imperatively,
    // both on mount and on every sound toggle. Declared before the observer
    // effect so it has already run by the time the first play() is attempted.
    video.muted = isMuted
  }, [isMuted])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    optedOutRef.current = false
    selfPausedRef.current = false
    // A remount (mode switch) earns a fresh attempt, so clear any past refusal.
    setAutoplayFailed(false)

    if (reducedMotion || !hasObserver) return

    // A rejected promise means the browser declined autoplay. Surfacing that is
    // the whole point: without it the poster just sits there with nothing to
    // click, which is the one failure mode this reel must not have.
    const tryPlay = () => {
      if (optedOutRef.current) return
      video.play().catch(() => setAutoplayFailed(true))
    }

    // Reaching full mode takes a click, and that click is the user gesture that
    // lets an unmuted video start.
    if (!isLoop) tryPlay()

    let ioReported = false

    const observer = new IntersectionObserver(
      ([entry]) => {
        ioReported = true
        if (entry.isIntersecting) {
          tryPlay()
        } else if (!video.paused) {
          selfPausedRef.current = true
          video.pause()
        }
      },
      { threshold: 0.4 }
    )

    observer.observe(video)

    // Backup for a browser that *has* IntersectionObserver but never delivers a
    // callback from it. That is not theoretical — a throttled or non-compositing
    // frame does exactly this, and it is the nastiest version of the failure:
    // `selfStarts` is true, so no controls render either, and the visitor is
    // left with a permanent poster and nothing to click. If the observer has
    // said nothing shortly after mount, stop trusting it and measure the rect.
    const isMostlyVisible = () => {
      const rect = video.getBoundingClientRect()
      const viewport =
        window.innerHeight || document.documentElement.clientHeight
      const shown = Math.min(rect.bottom, viewport) - Math.max(rect.top, 0)
      return rect.height > 0 && shown / rect.height >= 0.4
    }

    let onScroll = null
    const watchdog = setTimeout(() => {
      if (ioReported) return
      onScroll = () => {
        if (video.paused && isMostlyVisible()) tryPlay()
      }
      window.addEventListener('scroll', onScroll, { passive: true })
      // The reel may already be in view on load, with no scroll ever coming.
      onScroll()
    }, 2500)

    return () => {
      clearTimeout(watchdog)
      if (onScroll) window.removeEventListener('scroll', onScroll)
      observer.disconnect()
    }
  }, [isLoop, reducedMotion, hasObserver])

  function handlePause() {
    if (selfPausedRef.current) {
      selfPausedRef.current = false
      return
    }
    optedOutRef.current = true
  }

  function handlePlay() {
    optedOutRef.current = false
  }

  function toggleSound() {
    const video = videoRef.current
    setSoundOn((on) => !on)
    // Turning sound on is itself the gesture that permits unmuted playback, so
    // if the observer never got to start this (or the visitor had paused it),
    // this is a good moment to try again.
    if (video) video.play().catch(() => {})
  }

  function switchMode() {
    // The loop always restarts muted: that is its whole premise, and it also
    // guarantees the browser will let it autoplay.
    setSoundOn(false)
    setMode(isLoop ? 'full' : 'loop')
  }

  return (
    <figure
      className="demo"
      /* Each recording keeps its own shape. The frame reserves height from these
         numbers before the poster loads, so nothing shifts when the reel
         appears — and a reel of a different ratio is never cropped to fit. */
      style={{ '--demo-ratio': `${width} / ${height}` }}
    >
      <div className="demo-window">
        <div className="demo-chrome">
          <span className="demo-dots" aria-hidden="true">
            {CHROME_DOTS.map((dot) => (
              <span key={dot} className={`demo-dot ${dot}`} />
            ))}
          </span>
          <a
            className="demo-url"
            href={siteUrl}
            target="_blank"
            rel="noreferrer"
          >
            {siteLabel}
          </a>
        </div>

        <div className="demo-frame">
          <video
            /* Remounting on a mode change is the simplest correct way to swap
               sources — no manual load() call, no stale buffer to reason about. */
            key={mode}
            ref={videoRef}
            className="demo-video"
            poster={poster}
            preload="none"
            playsInline
            muted={isMuted}
            loop={isLoop}
            /* Controls stay out of the muted loop so it reads as a product shot,
               but appear the moment sound is on — nobody should hear something
               they cannot also pause. They also appear whenever the loop cannot
               start itself, or tried and was refused, so the reel is never a
               dead poster. */
            controls={!isLoop || !selfStarts || soundOn || autoplayFailed}
            controlsList="nodownload"
            onPause={handlePause}
            onPlay={handlePlay}
            aria-label={`Screen recording of ${title}`}
          >
            <source src={clip.src} type={clip.type} />
            Your browser cannot play embedded video.{' '}
            <a href={clip.src}>Download the recording</a> instead.
          </video>

          {isLoop && (
            <button
              type="button"
              className="demo-sound"
              onClick={toggleSound}
              aria-pressed={soundOn}
            >
              <SpeakerIcon on={soundOn} />
              {soundOn ? 'Mute' : 'Sound'}
            </button>
          )}
        </div>
      </div>

      <figcaption className="demo-caption">
        <span>
          Recorded on the live build · {clip.duration}
          {isLoop && !soundOn && ' · muted, sound optional'}
        </span>
        {full && (
          <button type="button" className="demo-toggle" onClick={switchMode}>
            {isLoop
              ? `Full walkthrough (${full.duration})`
              : 'Back to the short loop'}
          </button>
        )}
      </figcaption>
    </figure>
  )
}
