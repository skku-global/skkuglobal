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

const LEFT_ITEMS = [
  ["Services", "/services"],
  ["Work", "/work"],
];

const RIGHT_ITEMS = [
  ["About", "/about"],
  ["Contact", "/contact"],
];

export default function Menu() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const curtain = useRef(null);
  const btn = useRef(null);
  const tl = useRef(null);
  const location = useLocation();
  const pathname = location?.pathname || "/";

  // Scroll detection for sticky header frosted glass styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close curtain automatically if window is resized to big screen
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 860) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      t.to(curtain.current, { autoAlpha: 1, duration: 0.35, ease: "none" });
    } else {
      gsap.set(curtain.current, { yPercent: -100, visibility: "hidden" });
      t.set(curtain.current, { visibility: "visible" })
        .to(curtain.current, { yPercent: 0, duration: 0.75, ease: "skku" }, 0)
        .to(page, { y: "6vh", duration: 0.75, ease: "skku" }, 0)
        .fromTo(
          items,
          { yPercent: 110, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 0.55, ease: "skku", stagger: 0.05 },
          0.2
        )
        .fromTo(seam, { scaleX: 0 }, { scaleX: 1, duration: 0.75, ease: "skku", transformOrigin: "left center" }, 0.3);
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
      <header className={`bar ${scrolled ? "is-scrolled" : ""}`} data-open={open}>
        {/* Left Wing: Desktop Nav Links */}
        <div className="bar-left">
          <nav className="desktop-nav" aria-label="Main Navigation Left">
            {LEFT_ITEMS.map(([label, href]) => {
              const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
              return (
                <Link
                  key={href}
                  to={href}
                  className={`nav-link ${isActive ? "active" : ""}`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Center: Brand Logo */}
        <div className="bar-center">
          <Link to="/" className="logo" onClick={() => setOpen(false)} aria-label="SKKU Global Home">
            SKKU
          </Link>
        </div>

        {/* Right Wing: Desktop Nav Right + CTA, or Mobile Menu Button */}
        <div className="bar-right">
          <nav className="desktop-nav" aria-label="Main Navigation Right">
            {RIGHT_ITEMS.map(([label, href]) => {
              const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
              return (
                <Link
                  key={href}
                  to={href}
                  className={`nav-link ${isActive ? "active" : ""}`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          <Link to="/contact" className="nav-cta-btn">
            Tell us your problem <span aria-hidden="true">→</span>
          </Link>

          {/* Small Device Dropdown Menu Button */}
          <button
            ref={btn}
            type="button"
            className="menu-btn"
            aria-expanded={open}
            aria-controls="menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </header>

      {/* Small Device Fullscreen Curtain Dropdown */}
      <div id="menu" ref={curtain} className="curtain" role="dialog" aria-label="Menu">
        <nav className="curtain-nav">
          <ul>
            {ITEMS.map(([label, href], i) => (
              <li key={href} className="mask">
                <Link
                  data-item
                  to={href}
                  className="big-link"
                  onClick={() => setOpen(false)}
                >
                  <span className="link-num">0{i + 1}</span>
                  <span className="link-text">{label}</span>
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
