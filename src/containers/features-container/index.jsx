import React from "react";
import Hero from "./hero";
import PremiumImages from "./premium-images";
import Features from "./features";
import Faqs from "./faqs";
import Contact from "./contact";
import Testimonials from "./testimonials";
export default function FeaturesContainer() {
  return (
    <main>
      <Hero />
      <PremiumImages />
      <Features />
      <Testimonials />
      <Faqs />
      <Contact />
    </main>
  );
}
