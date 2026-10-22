import React from "react";
import "../css/Season.css";

const topics = [
  { number: "01", title: "Learn better with AI", detail: "Without letting it think for you.", status: "Defined", defined: true },
  { number: "02", title: "Delegate well", detail: "To people and to AI.", status: "Defined", defined: true },
  { number: "03", title: "Remember", detail: "Human memory, AI memory and retrieval.", status: "Indicative" },
  { number: "04—06", title: "Judge · Act · Create", detail: "Evaluate, act with care, and build together.", status: "Indicative" },
];

const visionUrl = "https://pyplym-ai-edition.netlify.app";

export default function Season() {
  return (
    <section className="season-section section-pad" aria-labelledby="season-title">
      <div className="page-width season-layout">
        <div className="season-heading">
          <p className="section-label">The first season · planned</p>
          <h2 id="season-title">Six ways to look at AI.</h2>
          <p>
            One evening a month, pairing a human capability with its AI counterpart.
            The first two topics are defined; the rest will be shaped by what the
            community learns.
          </p>
          <a className="text-link" href={visionUrl} target="_blank" rel="noopener noreferrer">
            Explore the full vision <span aria-hidden="true">↗</span>
          </a>
        </div>
        <ol className="season-list">
          {topics.map((topic) => (
            <li className={`season-item${topic.defined ? " season-item-featured" : ""}`} key={topic.number}>
              <span className="season-count">{topic.number}</span>
              <div><h3>{topic.title}</h3><p>{topic.detail}</p></div>
              <span className="season-tag">{topic.status}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
