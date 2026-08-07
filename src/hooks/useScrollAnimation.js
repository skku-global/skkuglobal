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

    const observer = new IntersectionObserver(
      (entries) => {
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
    return () => observer.disconnect()
  }, [])
}
