import React from "react";
import Header from "./Header.jsx";
import Hero from "./Hero.jsx";
import Intro from "./Intro.jsx";
import Principles from "./Principles.jsx";
import Pairing from "./Pairing.jsx";
import Season from "./Season.jsx";
import Promise from "./Promise.jsx";
import Closing from "./Closing.jsx";
import Footer from "./Footer.jsx";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <Intro />
        <Principles />
        <Pairing />
        <Season />
        <Promise />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
