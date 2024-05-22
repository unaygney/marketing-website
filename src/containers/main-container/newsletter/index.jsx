import React from "react";
import { feature } from "./constant";
import Image from "next/image";
import CheckIcon from "../../../../public/images/check.svg";
import Form from "./form";
export default function Newsletter() {
  return (
    <section
      id="newsletter"
      className="flex   flex-col gap-10 bg-white px-3 py-12 md:px-4 md:py-16 xl:p-24"
    >
      <div className="mx-auto flex w-full max-w-[1210px] flex-col gap-4 md:gap-16 xl:flex-row xl:items-center xl:gap-8">
        <div className="flex w-full flex-col gap-8 xl:w-[592px]">
          <h4 className="text-3xl font-semibold leading-9 text-neutral-900">
            {feature.title}
          </h4>
          <ul className="flex flex-col gap-5">
            {feature.lists.map((list, index) => (
              <li key={index} className="flex items-center gap-3">
                <span className="inline-flex h-6 w-6 items-center justify-center">
                  <CheckIcon />
                </span>
                <p className="text-lg font-normal leading-7 text-neutral-600">
                  {list}
                </p>
              </li>
            ))}
          </ul>
          <Form />
        </div>
        <figure className="relative h-[311px] w-full md:h-[608px] xl:h-[608px] xl:w-[592px]">
          <Image
            src={feature.images.mobile}
            fill
            alt="newsletter image"
            className="md:hidden"
          />
          <Image
            src={feature.images.tablet}
            fill
            alt="newsletter image"
            className="hidden md:block lg:hidden"
          />
          <Image
            src={feature.images.desktop}
            fill
            alt="newsletter image"
            className="hidden lg:block"
          />
        </figure>
      </div>
    </section>
  );
}
