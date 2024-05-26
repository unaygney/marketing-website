import HeaderGroup from "@/components/header-group";
import React from "react";
import TestimonialsCard from "@/components/testimonials-card";
import { CONTENT } from "./constant";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="flex flex-col   gap-12 bg-white px-3 py-12 md:gap-16 md:px-4 md:py-16 xl:p-24"
    >
      <HeaderGroup
        smallTitle="Testimonials"
        mainTitle="Countless users, countless smiles"
        text="Explore our community's journey and discover why satisfaction defines us."
        className="text-center"
      />

      <div className="row-auto grid grid-cols-1     items-start gap-6 md:grid-cols-2 xl:grid-cols-3">
        {CONTENT.map((testimonial) => (
          <TestimonialsCard key={testimonial.id} {...testimonial} />
        ))}
      </div>
    </section>
  );
}
