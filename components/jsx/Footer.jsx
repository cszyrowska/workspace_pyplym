import React from "react";
import "../css/Footer.css";

const communityUrl = "https://enreal.community/";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-width footer-inner">
        <a className="wordmark footer-wordmark" href={communityUrl} aria-label="EnReal home">
          EnReal<span>.</span>
        </a>
        <p>PyPlym AI Edition is EnReal’s Plymouth chapter.</p>
        <a className="footer-link" href={communityUrl}>
          Back to EnReal <span aria-hidden="true">↗</span>
        </a>
      </div>
    </footer>
  );
}
