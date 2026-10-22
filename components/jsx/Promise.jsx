import React from "react";
import "../css/Promise.css";

const takeaways = [
  { number: "01", title: "A clearer understanding", detail: "Of one human and one machine mechanism." },
  { number: "02", title: "Something you built", detail: "A tool or workflow for a real task." },
  { number: "03", title: "A way to keep going", detail: "A reusable method and a new connection." },
];

export default function Promise() {
  return (
    <section className="promise-section section-pad" aria-labelledby="promise-title">
      <div className="page-width promise-panel">
        <div className="promise-lead">
          <p className="section-label">What an evening is for</p>
          <h2 id="promise-title">Leave with more than notes.</h2>
        </div>
        <ul className="takeaway-list">
          {takeaways.map((takeaway) => (
            <li key={takeaway.number}>
              <span>{takeaway.number}</span>
              <p><strong>{takeaway.title}</strong><br />{takeaway.detail}</p>
            </li>
          ))}
        </ul>
        <p className="promise-footnote">
          Planned as a free monthly evening in Plymouth from January 2027.
          Details will be confirmed before registration opens.
        </p>
      </div>
    </section>
  );
}
