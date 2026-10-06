import { Link } from "react-router-dom";
import Accordion from "../components/Accordion";
import Seo from "../components/Seo";

const rows = [
  {
    title: "Websites",
    problem: "No website, or one that doesn't bring customers.",
    what: "We design, build and launch a fast site that people can find and use.",
    timeline: "2 to 4 weeks from first call to live.",
  },
  {
    title: "Web Applications & SaaS",
    problem: "Outgrowing manual spreadsheets and needing custom business software.",
    what: "We engineer full-stack platforms with fast databases, secure authentication, and APIs.",
    timeline: "3 to 6 weeks for MVP launch.",
  },
  {
    title: "Cybersecurity & Audits",
    problem: "Hidden vulnerabilities and compliance risks across endpoints.",
    what: "We run automated and manual OWASP vulnerability scans with clear fix steps.",
    timeline: "24 to 48 hours for full audit report.",
  },
];

export default function Services() {
  return (
    <>
      <Seo route="/services" />
      <section className="wrap hero">
        <p className="eyebrow">Services</p>
        <h1 className="display-l">We fix business problems with technology, starting with your website.</h1>
      </section>
      <section className="wrap section">
        <Accordion rows={rows} />
      </section>
      <section className="wrap section closing">
        <h2 className="display-l">Got a<br />problem?</h2>
        <Link to="/contact" className="btn">Tell us your problem <span aria-hidden="true">→</span></Link>
      </section>
    </>
  );
}
