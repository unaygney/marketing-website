import React from "react";
import Accordion from "./accordion";
import HeaderGroup from "@/components/header-group";

export default function Faqs() {
  return (
    <section
      id="faqs"
      className="flex flex-col gap-10 bg-white px-3 py-12 md:px-4 md:py-16 xl:p-24"
    >
      <HeaderGroup
        mainTitle="Frequently asked questions"
        text="Get all your questions answered"
        className="text-center "
      />
      <Accordion />
    </section>
  );
}
