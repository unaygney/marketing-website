import Image from "next/image";
import React from "react";

export default function TeamCard({ item }) {
  const { name, position, description, image } = item;
  return (
    <div className="flex w-full  flex-col gap-6">
      <div className="relative h-[296px] w-full">
        <Image src={image} alt="card image" fill />
      </div>
      <div className="flex flex-col">
        <h4 className="text-xl font-semibold leading-7 text-neutral-900">
          {name}
        </h4>
        <h6 className="mt-1 text-lg font-medium leading-7 text-indigo-700">
          {position}
        </h6>
        <p className="mt-4 text-base font-normal leading-6 text-neutral-600">
          {description}
        </p>
      </div>
    </div>
  );
}
