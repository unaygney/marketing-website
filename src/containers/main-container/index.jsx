import React from "react";
import Hero from "./hero";
import Teams from "./teams";
import PremiumImages from "./premium-images";
import Features from "./features";

export default function MainContainer() {
  return (
    <main className="h-full w-full rounded bg-white pb-10 shadow-lg ">
      <Hero />
      <Teams />
      <PremiumImages />
      <Features />
    </main>
  );
}
