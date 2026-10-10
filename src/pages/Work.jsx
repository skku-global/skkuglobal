import WorkMedia from "../components/WorkMedia";
import { Link } from "react-router-dom";
import { useProjects } from "../lib/useProjects";
import Seo from "../components/Seo";

export default function Work() {
  const { projects } = useProjects();
  return (
    <>
      <Seo route="/work" />
      <section className="wrap hero">
        <p className="eyebrow">Work</p>
        <h1 className="display-l">Problems we solved.</h1>
        <p className="muted work-hint">Click any project to see the screens and the full story.</p>
      </section>
      <section className="wrap section">
        <ul className="worklist">
          {projects.map((p) => (
            <li key={p.slug} data-reveal>
              <Link to={`/work/${p.slug}`}>
                <span className="display-m">{p.title}</span>
                <span className="muted">{p.result}</span>
                <span className="row-cta"><span className="sr-only">View case study</span><svg className="chev" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false"><path d="M5 9l7 7 7-7" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <WorkMedia />
    </>
  );
}
