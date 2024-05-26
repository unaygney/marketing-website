import Button from "@/components/button";
import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section
      className="flex flex-col gap-12 px-3 py-12 md:gap-8 md:py-16   xl:flex-row xl:items-center xl:justify-center xl:p-24"
      id="hero"
      aria-labelledby="hero-heading"
    >
      <article className="flex flex-col gap-4 md:gap-6 ">
        <h1 className="text-4xl font-semibold text-neutral-900 md:text-5xl xl:max-w-[17ch]  xl:text-6xl xl:leading-[60px] ">
          Well crafted abstract gradiend
        </h1>
        <p className="text-lg font-normal text-neutral-600 md:max-w-[55ch] md:text-xl xl:max-w-[40ch]">
          High quality abstract images for your projects, wallpaper and
          presentations.
        </p>
        <div className="flex items-center gap-4 md:mt-10 xl:mt-16">
          <Button
            variant="secondary"
            size="large"
            className="inline-flex flex-1 items-center justify-center md:h-[60px] md:max-w-[213px] "
            aria-label="Learn more about us"
          >
            Learn more
          </Button>
          <Button
            variant="primary"
            size="large"
            className="inline-flex flex-1 
           items-center justify-center md:h-[60px] md:max-w-[213px]"
            aria-label="See pricing"
          >
            See pricing
          </Button>
        </div>
      </article>

      <figure className="relative h-[264px] w-full md:h-[526px] xl:h-[526px] xl:w-[696px] ">
        <Image
          src={"/images/features-hero-mobile.png"}
          alt="abstract gradient background for mobile"
          fill
          className="md:hidden"
        />
        <Image
          src={"/images/features-hero-tablet.png"}
          alt="abstract gradient background for tablet"
          fill
          className="hidden md:block xl:hidden"
        />
        <Image
          src={"/images/features-hero-desktop.png"}
          alt="abstract gradient background for desktop"
          fill
          className="hidden  xl:block"
        />
      </figure>
    </section>
  );
}
