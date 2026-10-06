import { Link } from "react-router-dom";
import Seo from "../components/Seo";

export default function About() {
  return (
    <>
      <Seo route="/about" />
      <section className="wrap hero">
        <p className="eyebrow">About</p>
        <h1 className="display-l">We exist so technology stops being your problem.</h1>
      </section>

      <section className="wrap section">
        <div className="cs-block" data-reveal>
          <p className="eyebrow">Founder</p>
          <p className="cs-text">
            Founded by Abdulkabir Ajiboye, SKKU Global exists to cut through software jargon and deliver clean, high-performance web platforms and security audits that founders actually rely on.
          </p>
        </div>
      </section>

      <section className="wrap section">
        <p className="eyebrow">Values</p>
        <ul className="problems">
          {["Simple.", "Secure.", "Fast."].map((v) => (
            <li key={v} data-reveal>
              <span className="display-m">{v}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="wrap section closing">
        <h2 className="display-l">Got a<br />problem?</h2>
        <Link to="/contact" className="btn">Tell us your problem <span aria-hidden="true">→</span></Link>
      </section>
    </>
  );
}
