import React from "react";
import "../css/Pairing.css";
import harbour from "../../assets/Plymouth Harbour Collage at Golden Hour.png";

export default function Pairing() {
  return (
    <section className="pairing-section section-pad" aria-labelledby="pairing-title">
      <div className="page-width pairing-grid">
        <figure className="pairing-image">
          <img src={harbour} alt="A stylised Plymouth waterfront, lighthouse and sailboats at sunset" loading="lazy" />
          <figcaption>Different perspectives make better work.</figcaption>
        </figure>
        <div className="pairing-copy">
          <p className="section-label">A room for both sides</p>
          <h2 id="pairing-title">Bring your curiosity.<br />Bring your craft.</h2>
          <p>
            Developers and non-technical people work side by side. You don’t need
            to code to take part—bring a question, a challenge or something you’d
            like to learn.
          </p>
          <div className="pairing-roles">
            <div>
              <span className="role-number">A</span>
              <p><strong>Explorers</strong><br />Bring a real task. You drive.</p>
            </div>
            <div>
              <span className="role-number">B</span>
              <p><strong>Builders</strong><br />Bring technical curiosity. You navigate.</p>
            </div>
          </div>
          <p className="pairing-note">
            The person with the problem stays in control, so the learning stays with them.
          </p>
        </div>
      </div>
    </section>
  );
}
