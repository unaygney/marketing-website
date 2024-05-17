import Image from "next/image";
import React from "react";

export default function Card({ feature: { id, title, content, icon } }) {
  return (
    <div role="listitem" className="flex flex-col items-center text-center">
      <span
        aria-hidden="true"
        className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md "
      >
        <Image src={icon} alt="" width={24} height={24} />
      </span>
      <h5 className="mb-2 text-xl font-semibold leading-7 text-neutral-900">
        {title}
      </h5>
      <p className="text-base font-normal leading-6 text-neutral-600 md:max-w-[50ch] xl:max-w-full ">
        {content}
      </p>
    </div>
  );
}
