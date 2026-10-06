import { useState } from "react";

export default function Accordion({ rows }) {
  const [open, setOpen] = useState(null);

  return (
    <ul className="rows">
      {rows.map((r, i) => {
        const isOpen = open === i;
        return (
          <li key={r.title} className="row" data-open={isOpen}>
            <button
              type="button"
              id={`rh-${i}`}
              className="row-head"
              aria-expanded={isOpen}
              aria-controls={`row-${i}`}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span className="display-m">{r.title}</span>
              <span className="plus" aria-hidden="true" />
            </button>
            <div id={`row-${i}`} className="row-body" role="region" aria-labelledby={`rh-${i}`}>
              <div className="row-inner">
                <dl className="facts">
                  {[
                    ["Problem", r.problem],
                    ["What we do", r.what],
                    ["Timeline", r.timeline],
                  ].map(([k, v]) => (
                    <div key={k}>
                      <dt>{k}</dt>
                      <dd>{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
