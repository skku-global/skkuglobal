import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { setupGsap, gsap, prefersReduced } from "../lib/gsap";

const ITEMS = [
  ["Home", "/"],
  ["Services", "/services"],
  ["Work", "/work"],
  ["About", "/about"],
  ["Contact", "/contact"],
];

export default function Menu() {
  const [open, setOpen] = useState(false);
  const curtain = useRef(null);
  const btn = useRef(null);
  const tl = useRef(null);
  const location = useLocation();
  const pathname = location?.pathname || "/";

  useEffect(() => {
    setupGsap();
    const reduce = prefersReduced();
    const page = typeof document !== "undefined" ? document.getElementById("page") : null;
    if (!curtain.current) return;
    const items = curtain.current.querySelectorAll("[data-item]");
    const seam = curtain.current.querySelector("[data-seam]");

    const t = gsap.timeline({
      paused: true,
      onReverseComplete: () => {
        if (curtain.current) gsap.set(curtain.current, { visibility: "hidden" });
      },
    });

    if (reduce) {
      gsap.set(curtain.current, { autoAlpha: 0 });
      t.to(curtain.current, { autoAlpha: 1, duration: 0.4, ease: "none" });
    } else {
      gsap.set(curtain.current, { yPercent: -100, visibility: "hidden" });
      t.set(curtain.current, { visibility: "visible" })
        .to(curtain.current, { yPercent: 0, duration: 0.9, ease: "skku" }, 0)
        .to(page, { y: "6vh", duration: 0.9, ease: "skku" }, 0)
        .from(items, { yPercent: 110, duration: 0.7, ease: "skku", stagger: 0.06 }, 0.35)
        .fromTo(seam, { scaleX: 0 }, { scaleX: 1, duration: 0.9, ease: "skku", transformOrigin: "left center" }, 0.4);
    }

    tl.current = t;
    return () => {
      t.kill();
      if (page) gsap.set(page, { clearProps: "transform" });
    };
  }, []);

  useEffect(() => {
    const t = tl.current;
    const page = typeof document !== "undefined" ? document.getElementById("page") : null;
    if (t) {
      if (open) t.play();
      else t.reverse();
    }
    if (page) page.inert = open;
    if (typeof document !== "undefined") {
      document.body.style.overflow = open ? "hidden" : "";
    }
    if (open && curtain.current) {
      const first = curtain.current.querySelector("[data-item]");
      if (first) first.focus({ preventScroll: true });
    }
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (open === false) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        if (btn.current) btn.current.focus();
      }
    };
    if (typeof window !== "undefined") {
      window.addEventListener("keydown", onKey);
      return () => window.removeEventListener("keydown", onKey);
    }
  }, [open]);

  return (
    <>
      <header className="bar" data-open={open}>
        <Link to="/" className="logo">SKKU</Link>
        <button
          ref={btn}
          type="button"
          className="menu-btn"
          aria-expanded={open}
          aria-controls="menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </header>

      <div id="menu" ref={curtain} className="curtain" role="dialog" aria-label="Menu">
        <nav>
          <ul>
            {ITEMS.map(([label, href], i) => (
              <li key={href} className="mask">
                <Link data-item to={href} className="big-link">
                  <span>0{i + 1}</span>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="seam" data-seam />
        <p className="curtain-foot">Websites now. Tech solutions next.</p>
      </div>
    </>
  );
}
