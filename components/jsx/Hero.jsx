import React from "react";
import "../css/Hero.css";
import lighthouse from "../../assets/Red-Striped Lighthouse Harbor at Golden Hour.png";

const visionUrl = "https://pyplym-ai-edition.netlify.app";

export default function Hero() {
  return (
    <section className="hero page-width" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="eyebrow-dot" />
          EnReal’s Plymouth chapter
          <span className="eyebrow-divider">/</span>
          From January 2027
        </p>
        <h1 id="hero-title">AI is a tool.<br />People are the <em>point.</em></h1>
        <p className="hero-intro">
          PyPlym brings Plymouth together to understand AI from the human side,
          explore how it really works, and build something useful with it.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href={visionUrl} target="_blank" rel="noopener noreferrer">
            See the vision <span aria-hidden="true">↗</span>
          </a>
          <span className="hero-note">Free · Monthly · No coding needed</span>
        </div>
        <div className="hero-proof">
          <span className="proof-mark" aria-hidden="true">H<span>×</span>M</span>
          <p><strong>Human × Machine</strong><br />One practical idea, seen from both sides.</p>
        </div>
      </div>
      <figure className="hero-visual">
        <img src={lighthouse} alt="Plymouth waterfront and lighthouse at golden hour, with a sailboat crossing the harbour" fetchPriority="high" />
        <figcaption className="image-caption">
          <span className="caption-line" />
          <span>Plymouth, looking forward</span>
        </figcaption>
        <div className="visual-stamp" aria-hidden="true">
          <span>AI,</span><span>with</span><span>humanity.</span>
        </div>
      </figure>
    </section>
  );
}
