import { useEffect, useRef } from "react";
import { adVideos, flyers } from "../data/media";

function AdVideo({ v }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
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
  const sound = () => {
    const el = ref.current;
    el.muted = !el.muted;
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
          onClick={sound}
          title="Click for sound"
        />
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
