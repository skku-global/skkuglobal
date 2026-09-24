import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Observes every `.animate` element in the DOM and adds `.visible` when
 * it enters the viewport. Re-runs whenever the route changes so freshly
 * mounted pages get the same treatment.
 */
export default function useScrollAnimation() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Small defer so the new page's DOM is painted before we observe it
    const id = setTimeout(() => {
      const targets = document.querySelectorAll('.animate')

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible')
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.12 }
      )

      targets.forEach((el) => observer.observe(el))

      return () => observer.disconnect()
    }, 50)

    return () => clearTimeout(id)
  }, [pathname])
}
