import React from "react";
import Hero from "./hero";
import Teams from "./teams";
export default function MainContainer() {
  return (
    <main className="h-full w-full rounded bg-white pb-10 shadow-lg ">
      <Hero />
      <Teams />
    </main>
  );
}
