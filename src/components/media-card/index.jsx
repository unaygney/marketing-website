import clsx from "clsx";
import Image from "next/image";
import React from "react";

export default function MediaCard({
  feature: { imageMobile, FEATURES, imageIsLeft, imageTablet, imageDesktop },
}) {
  return (
    <div className="flex flex-col gap-12 xl:mx-auto xl:flex-row xl:gap-8">
      <div
        className={clsx("flex flex-col gap-10 ", { "order-2": imageIsLeft })}
      >
        {FEATURES.map(({ id, icon, title, content, imageIsLeft }) => (
          <div key={id} className={clsx("flex gap-5")}>
            <span className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full shadow-md ">
              <Image src={icon} alt="" width={24} height={24} />
            </span>

            <div className="flex flex-col xl:max-w-[592px] xl:py-2.5">
              <h6 className="text-lg font-semibold leading-7 text-neutral-900">
                {title}
              </h6>
              <p className=" text-base font-normal leading-6 text-neutral-600">
                {content}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div
        className={clsx(
          "relative h-[180px] w-full overflow-hidden rounded-lg shadow md:h-[390px] xl:w-[592px]",
          { "order-1": imageIsLeft },
        )}
      >
        <Image src={imageMobile} alt="image" className="md:hidden" fill />
        <Image
          src={imageTablet}
          alt="image"
          fill
          className="hidden md:block xl:hidden"
        />
        <Image
          src={imageDesktop}
          alt="image"
          fill
          className="hidden xl:block"
        />
      </div>
    </div>
  );
}
