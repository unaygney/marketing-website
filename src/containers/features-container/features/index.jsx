import React from "react";
import MediaCard from "@/components/media-card";
import HeaderGroup from "@/components/header-group";
import { FEATURE_DATA } from "./constant";
export default function Features() {
  return (
    <section
      id="features"
      className="flex flex-col gap-12 bg-white  px-3 py-12 md:px-4 md:py-16  xl:p-24"
    >
      <HeaderGroup
        smallTitle="High quality images"
        mainTitle="For designers, by designers"
        text="Unleash boundless creativity with a large repository of images optimized for designers"
        className="text-center"
      />
      <MediaCard key={1} feature={FEATURE_DATA[0]} />
      <HeaderGroup
        smallTitle="Best-in-class support"
        mainTitle="Convenience and licensing that empowers"
        text="In a world where storytelling constantly evolves, don't let licensing and poor support hold you down."
        className="mt-12 text-center md:mt-16 xl:mx-auto xl:mt-24 xl:max-w-[70ch] "
      />
      <MediaCard key={2} feature={FEATURE_DATA[1]} />
    </section>
  );
}
