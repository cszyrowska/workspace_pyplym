import React from "react";
import "../css/Header.css";

const communityUrl = "https://enreal.community/";

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="wordmark" href={communityUrl} aria-label="EnReal home">
          EnReal<span>.</span>
        </a>
        <nav aria-label="Main navigation">
          <a href={communityUrl}>Home</a>
          <a href={communityUrl}>About</a>
          <a href={communityUrl}>Community</a>
          <a href={communityUrl}>Plymouth</a>
          <a href={communityUrl}>Contact</a>
        </nav>
      </div>
      <div className="header-subrow page-width">
        <a href={communityUrl}><span aria-hidden="true">←</span> Back to EnReal</a>
      </div>
    </header>
  );
}
