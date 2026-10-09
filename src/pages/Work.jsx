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
      </section>
      <section className="wrap section">
        <ul className="worklist">
          {projects.map((p) => (
            <li key={p.slug} data-reveal>
              <Link to={`/work/${p.slug}`}>
                <span className="display-m">{p.title}</span>
                <span className="muted">{p.result}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <WorkMedia />
    </>
  );
}
