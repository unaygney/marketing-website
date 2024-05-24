import HeaderGroup from "@/components/header-group";
import React from "react";
import Image from "next/image";
import { STATISCTICS } from "./constant";
import StatiscticsCard from "./statisctics-card";
export default function Statisctics() {
  return (
    <section
      id="statisctics"
      className="flex flex-col gap-12 bg-white px-3 py-12 md:gap-16 md:py-16  xl:p-24"
    >
      <HeaderGroup
        smallTitle="Statisctics"
        mainTitle="More than premium absract imagery"
        text="Our platform is more than just as a service to us - it is a catalyst for enriching lives through premium abstract imagery."
        className="text-center "
      />

      <div className="flex w-full max-w-[1280px] flex-col gap-12 xl:mx-auto xl:flex-row xl:gap-8">
        <div className="relative h-[311px] w-full md:h-[656px] xl:h-[544px] xl:w-[592px] ">
          <Image
            src="/images/statistics-mobile.png"
            alt="statisctics image"
            fill
          />
        </div>
        <div className="flex flex-col gap-6  xl:flex-1 xl:gap-7">
          <h6 className="text-lg font-normal leading-7 text-neutral-600">
            Our mission, in numbers
          </h6>

          <div className="flex flex-col gap-6 xl:gap-8">
            {STATISCTICS.map((item) => (
              <StatiscticsCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
