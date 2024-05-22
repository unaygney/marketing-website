import React from "react";
import Hero from "./hero";
import Teams from "./teams";
import PremiumImages from "./premium-images";
import Features from "./features";
import Pricing from "./pricing";
import Faqs from "./faqs";
import Newsletter from "./newsletter";
import Contact from "./contact";

export default function MainContainer() {
  return (
    <main className="h-full w-full rounded bg-white pb-10 shadow-lg ">
      <Hero />
      <Teams />
      <PremiumImages />
      <Features />
      <Pricing />
      <Faqs />
      <Newsletter />
      <Contact />
    </main>
  );
}
