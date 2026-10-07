import { Link } from "react-router-dom";
import Tangle from "../components/Tangle";
import { projects } from "../lib/projects";
import Seo from "../components/Seo";

const problems = ["No website.", "Customers can't find me.", "It takes too long."];
const steps = [
  ["01", "Tell us", "Share the problem in two minutes."],
  ["02", "We build", "Design and code, fast."],
  ["03", "You launch", "Live, tested, yours."],
];

export default function Home() {
  return (
    <>
      <Seo route="/" />
      <section className="wrap hero">
        <p className="eyebrow">Websites, SEO, ads video and flyers.</p>
        <h1 className="display-xl">Your problem.<br />Solved with ease.</h1>
        <Tangle replayable={true} />
        <Link to="/contact" className="btn">Tell us your problem <span aria-hidden="true">→</span></Link>
      </section>

      <section className="wrap section">
        <p className="eyebrow">The problem</p>
        <ul className="problems">
          {problems.map((t) => (
            <li key={t} data-reveal>
              <span className="display-m">{t}</span>
              <span className="pill">Solved</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="wrap section">
        <p className="eyebrow">The process</p>
        <ol className="steps">
          {steps.map(([n, title, text]) => (
            <li key={n} className="step" data-reveal>
              <span className="eyebrow">{n}</span>
              <h3>{title}</h3>
              <p className="muted">{text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="wrap section">
        <p className="eyebrow">Selected work</p>
        <div className="tiles">
          {projects.slice(0, 2).map((p) => (
            <Link key={p.slug} to={`/work/${p.slug}`} className="tile" data-reveal>
              <h3>{p.title}</h3>
              <p className="muted">{p.result}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="wrap section closing">
        <h2 className="display-l">Got a<br />problem?</h2>
        <Link to="/contact" className="btn">Tell us your problem <span aria-hidden="true">→</span></Link>
      </section>
    </>
  );
}
