import React from "react";
import "../css/Principles.css";

const principles = [
  {
    index: "01 / HUMAN",
    symbol: "symbol-human",
    title: "Start with us",
    description: "Explore the human side of the topic: what helps us learn, where trust comes from, and how people make good decisions.",
  },
  {
    index: "02 / MACHINE",
    symbol: "symbol-machine",
    title: "Get technically honest",
    description: "See how the AI works, where it can help, and where confident answers can still miss the mark.",
  },
  {
    index: "03 / TOGETHER",
    symbol: "symbol-together",
    title: "Make something useful",
    description: "Pair different strengths around a real task. Leave with a small thing you made and a method you can use again.",
  },
];

export default function Principles() {
  return (
    <section className="principles-section section-pad" aria-labelledby="principles-title">
      <div className="page-width">
        <div className="section-heading">
          <div>
            <p className="section-label">The PyPlym approach</p>
            <h2 id="principles-title">Understand. Build. Bring it back.</h2>
          </div>
          <p>Practical, thoughtful and open to people across the technical divide.</p>
        </div>
        <div className="principle-grid">
          {principles.map((principle, index) => (
            <article
              className={`principle-card${index === 2 ? " principle-card-accent" : ""}`}
              key={principle.index}
            >
              <span className="card-index">{principle.index}</span>
              <div className={`principle-symbol ${principle.symbol}`} aria-hidden="true">
                {principle.symbol === "symbol-machine" ? (
                  <><span /><span /><span /></>
                ) : principle.symbol === "symbol-together" ? <span>+</span> : <span />}
              </div>
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
