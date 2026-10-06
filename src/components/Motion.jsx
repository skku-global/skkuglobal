import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { setupGsap, gsap, ScrollTrigger, prefersReduced } from "../lib/gsap";

export default function Motion() {
  const location = useLocation();
  const pathname = location?.pathname || "/";

  useEffect(() => {
    setupGsap();
    const reduce = prefersReduced();

    const ctx = gsap.context(() => {
      gsap.utils.toArray("[data-reveal]").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: reduce ? 0 : 24,
          duration: 0.7,
          ease: "skku",
          delay: Number(el.dataset.delay || 0),
          scrollTrigger: { trigger: el, start: "top 90%", once: true },
        });
      });

      gsap.utils.toArray("[data-line]").forEach((el) => {
        gsap.fromTo(
          el,
          { scaleX: reduce ? 1 : 0, opacity: reduce ? 0 : 1 },
          {
            scaleX: 1,
            opacity: 1,
            duration: 0.9,
            ease: "skku",
            transformOrigin: "left center",
            scrollTrigger: { trigger: el, start: "top 95%", once: true },
          }
        );
      });
    });

    if (typeof document !== "undefined" && document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => ScrollTrigger.refresh());
    }

    return () => ctx.revert();
  }, [pathname]);

  return null;
}
