import React from "react";
import Hero from "./hero";
import Statisctics from "./statisctics";
import Team from "./team";
import Contact from "./contact";
export default function AboutContainer() {
  return (
    <main id="main-about">
      <Hero />
      <Statisctics />
      <Team />
      <Contact />
    </main>
  );
}
