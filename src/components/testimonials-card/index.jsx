import Image from "next/image";
import React from "react";

export default function TestimonialsCard({ avatar, name, username, content }) {
  return (
    <div className="flex  w-full flex-col gap-4 rounded-lg border border-neutral-200 bg-white p-6 shadow">
      <div className="flex  gap-4">
        <div className="relative h-12 w-12 overflow-hidden rounded-full">
          <Image src={avatar} fill alt={`${name} avatar's`} />
        </div>
        <div className="flex flex-col gap-[1px]">
          <h3 className="text-lg font-semibold leading-7 text-neutral-900">
            {name}
          </h3>
          <p className="text-sm font-normal leading-5 text-neutral-600">
            {username}
          </p>
        </div>
      </div>
      <p className="text-base font-normal leading-6 text-neutral-600">
        {content}
      </p>
    </div>
  );
}
