import HeaderGroup from "@/components/header-group";
import React from "react";
import { FEATURES } from "./constant";
import Card from "./card";
export default function PremiumImages() {
  return (
    <section
      id="premium-images"
      className="flex flex-col items-center gap-12 bg-white px-3 py-12 md:gap-16 xl:p-24 "
    >
      <HeaderGroup
        smallTitle="Premium absract images"
        mainTitle="Easy access to top quality images"
        text="In a world where storytelling constantly evolves, we lead with groundbreaking images designed for your presentation excellence."
        className="max-w-[91ch] text-center"
      />

      <div
        role="list"
        className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 xl:gap-y-12 "
      >
        {FEATURES.map((feature) => (
          <Card key={feature.id} feature={feature} />
        ))}
      </div>
    </section>
  );
}
