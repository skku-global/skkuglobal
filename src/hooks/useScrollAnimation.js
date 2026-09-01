import { useEffect } from 'react'

/**
 * Reveals elements tagged `.animate` as they scroll into view.
 *
 * `.animate` starts at opacity 0, so the two guards below matter: if the
 * browser lacks IntersectionObserver, or the user prefers reduced motion,
 * everything is revealed immediately rather than left invisible.
 */
export default function useScrollAnimation() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('.animate'))
    if (elements.length === 0) return

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('visible'))
      return
    }

    // Set as soon as the observer says anything at all — proof it is alive, and
    // what the failsafe below keys off.
    let reported = false

    const observer = new IntersectionObserver(
      (entries) => {
        reported = true
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('visible')
          // Reveal is one-way — stop watching once it has fired.
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    elements.forEach((el) => observer.observe(el))

    // Having IntersectionObserver is not the same as it working. A throttled or
    // non-compositing frame can leave callbacks undelivered indefinitely, and
    // because everything here starts at opacity 0 that renders the entire page
    // blank — the worst possible failure, from a purely decorative feature. If
    // the observer has not reported at all shortly after mount, give up on the
    // animation and just show the content.
    const failsafe = setTimeout(() => {
      if (reported) return
      elements.forEach((el) => el.classList.add('visible'))
    }, 2500)

    return () => {
      clearTimeout(failsafe)
      observer.disconnect()
    }
  }, [])
}
