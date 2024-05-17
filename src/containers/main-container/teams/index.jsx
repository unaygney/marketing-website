import React from "react";
import BrandSlider from "./brand-slider";
export default function Teams() {
  return (
    <section
      id="teams"
      className="flex w-full flex-col items-center gap-8  bg-white py-12 md:py-16 xl:py-24 "
    >
      <h2 className="text-base font-medium leading-6 text-neutral-600">
        Used by teams that you love
      </h2>
      <BrandSlider />
    </section>
  );
}
