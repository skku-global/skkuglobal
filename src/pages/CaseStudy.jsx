import { Link, useParams } from "react-router-dom";
import { projects } from "../lib/projects";
import Seo from "../components/Seo";

export default function CaseStudy() {
  const { slug } = useParams();
  const i = projects.findIndex((p) => p.slug === slug);
  const p = i >= 0 ? projects[i] : projects[0];
  const next = projects[(i + 1) % projects.length];

  return (
    <>
      <Seo route="/work" />
      <section className="wrap hero">
        <p className="eyebrow">Case study</p>
        <h1 className="display-l">{p.title}</h1>
      </section>

      <section className="wrap section">
        {[
          ["Problem", p.problem],
          ["Solution", p.solution],
          ["Result", p.outcome],
        ].map(([label, text]) => (
          <div key={label} className="cs-block" data-reveal>
            <p className="eyebrow">{label}</p>
            <p className="cs-text">{text}</p>
          </div>
        ))}
      </section>

      <section className="wrap section">
        <div className="visuals">
          <div className="visual wide" data-reveal />
          <div className="visual" data-reveal />
          <div className="visual" data-reveal />
        </div>
      </section>

      <section className="wrap section">
        <Link to={`/work/${next.slug}`} className="next">
          <span className="eyebrow">Next project</span>
          <span className="display-l">
            {next.title} <span aria-hidden="true">→</span>
          </span>
        </Link>
      </section>
    </>
  );
}
