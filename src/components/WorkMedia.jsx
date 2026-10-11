import { useEffect, useRef, useState } from "react";
import { adVideos, flyers } from "../data/media";

function SoundIcon({ on }) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
      <path d="M11 5L6 9H3v6h3l5 4V5z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      {on ? (
        <>
          <path d="M15.5 8.5a5 5 0 0 1 0 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M18.5 6a9 9 0 0 1 0 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </>
      ) : (
        <path d="M16 9l5 6M21 9l-5 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      )}
    </svg>
  );
}

function AdVideo({ v }) {
  const ref = useRef(null);
  const [muted, setMuted] = useState(true);
  useEffect(() => {
    const el = ref.current;
    if (el === null || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) el.play().catch(() => {});
        else el.pause();
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const toggle = () => {
    const el = ref.current;
    el.muted = el.muted === false;
    if (el.paused) el.play().catch(() => {});
  };
  return (
    <figure className="ad">
      <div className="ad-frame" style={{ aspectRatio: v.ratio || "9 / 16" }}>
        <video
          ref={ref}
          src={`${v.src}#t=0.1`}
          poster={v.poster || undefined}
          muted
          loop
          playsInline
          preload="metadata"
          onClick={toggle}
          onVolumeChange={(e) => setMuted(e.currentTarget.muted)}
        />
        <button
          type="button"
          className="sound-btn"
          data-on={muted ? "off" : "on"}
          onClick={toggle}
          aria-label={muted ? "Video is silent. Turn sound on" : "Sound is on. Turn sound off"}
        >
          <SoundIcon on={muted === false} />
          <span>{muted ? "Silent" : "Sound on"}</span>
        </button>
      </div>
      <figcaption>
        <strong>{v.title}</strong>
        <span className="muted">{v.note}</span>
      </figcaption>
    </figure>
  );
}

export default function WorkMedia() {
  return (
    <>
      {adVideos.length > 0 && (
        <section className="wrap section">
          <p className="eyebrow">Ads video</p>
          <h2 className="display-m">Say what you do in 20 seconds.</h2>
          <p className="muted media-lede">
            Short promo videos made for WhatsApp status, Meta ads, and anywhere people decide fast.
          </p>
          <div className="ads">
            {adVideos.map((v) => (
              <AdVideo key={v.src} v={v} />
            ))}
          </div>
        </section>
      )}
      {flyers.length > 0 && (
        <section className="wrap section">
          <p className="eyebrow">Flyers</p>
          <h2 className="display-m">Print and social, one look.</h2>
          <div className="flyers">
            {flyers.map((f) => (
              <figure className="flyer" key={f.src}>
                <img
                  src={f.src}
                  alt={f.title}
                  loading="lazy"
                  style={{ aspectRatio: f.ratio || "1200 / 1697" }}
                />
                <figcaption>
                  <strong>{f.title}</strong>
                  <span className="muted">{f.note}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
