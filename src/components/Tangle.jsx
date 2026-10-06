import { useEffect, useRef } from "react";
import { setupGsap, gsap, prefersReduced } from "../lib/gsap";

const N = 260;
const W = 1000;
const H = 200;
const CY = 100;
const TWO_PI = Math.PI * 2;
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

function tanglePoint(t) {
  const x = 500 + 380 * Math.sin(TWO_PI * 2.3 * t + 0.4) + 90 * Math.sin(TWO_PI * 7 * t + 1.1);
  const y = CY + 70 * Math.sin(TWO_PI * 3.1 * t + 0.7) + 40 * Math.cos(TWO_PI * 9 * t);
  return [x, y];
}

function linePoint(t) {
  return [60 + 880 * t, CY];
}

function build(p) {
  const spread = 0.8;
  let d = "";
  for (let i = 0; i <= N; i++) {
    const t = i / N;
    const k = clamp(p * (1 + spread) - t * spread, 0, 1);
    const e = k * k * (3 - 2 * k);
    const a = tanglePoint(t);
    const b = linePoint(t);
    const x = a[0] + (b[0] - a[0]) * e;
    const y = a[1] + (b[1] - a[1]) * e;
    d += (i === 0 ? "M" : "L") + x.toFixed(1) + " " + y.toFixed(1);
  }
  return d;
}

export default function Tangle({ replayable = false }) {
  const svg = useRef(null);
  const path = useRef(null);
  const dot = useRef(null);
  const tween = useRef(null);
  const state = useRef({ p: 0 });

  const draw = (p) => {
    if (path.current) path.current.setAttribute("d", build(p));
  };

  const play = () => {
    setupGsap();
    if (tween.current) tween.current.kill();
    if (dot.current) {
      gsap.killTweensOf(dot.current);
      dot.current.setAttribute("r", 0);
    }

    if (prefersReduced()) {
      draw(1);
      if (svg.current) gsap.fromTo(svg.current, { opacity: 0 }, { opacity: 1, duration: 0.4 });
      if (dot.current) gsap.to(dot.current, { attr: { r: 9 }, duration: 0.4, delay: 0.2 });
      return;
    }

    state.current.p = 0;
    draw(0);
    if (svg.current) gsap.set(svg.current, { opacity: 1 });
    tween.current = gsap.to(state.current, {
      p: 1,
      duration: 1.8,
      delay: 0.3,
      ease: "skku",
      onUpdate: () => draw(state.current.p),
      onComplete: () => {
        if (dot.current) gsap.to(dot.current, { attr: { r: 9 }, duration: 0.4, ease: "skku" });
      },
    });
  };

  useEffect(() => {
    play();
    return () => {
      if (tween.current) tween.current.kill();
    };
  }, []);

  return (
    <div className="tangle-wrap">
      <svg
        ref={svg}
        className="tangle"
        viewBox={`0 0 ${W} ${H}`}
        style={{ opacity: 0 }}
        aria-hidden="true"
        focusable="false"
      >
        <path ref={path} d="" />
        <circle ref={dot} cx="940" cy="100" r="0" />
      </svg>
      {replayable ? (
        <button type="button" className="replay" onClick={play}>
          Replay line
        </button>
      ) : null}
    </div>
  );
}
