import React from "react";
import clsx from "clsx";
export default function Button({
  children,
  variant = "primary",
  size = "medium",
  ...props
}) {
  return (
    <button
      {...props}
      className={clsx(
        "rounded font-medium transition-colors duration-300 ease-in-out",
        {
          "inline-flex h-10  items-center  gap-1 px-[14px] text-[14px] ":
            size === "medium",
        },

        {
          " inline-flex h-11 items-center gap-1.5 px-4 text-base":
            size === "large",
        },
        {
          " inline-flex h-12 items-center gap-1.5 px-5 text-base":
            size === "extra-large",
        },
        {
          "inline-flex h-[60px] items-center gap-2.5 px-6 text-[18px]":
            size === "2xl-large",
        },
        {
          "customs-shadow bg-indigo-700 text-white hover:bg-indigo-800  ":
            variant === "primary",
        },
        {
          "custom-shadow border-[0.5px] border-neutral-200 bg-white text-neutral-900 hover:bg-[#fafafa]  ":
            variant === "secondary",
        },
        {
          " text-indigo-700 hover:bg-[#fafafa] ": variant === "tertiary",
        },
        {
          "bg-red-600 text-white hover:bg-red-700 ": variant === "destructive",
        },
      )}
    >
      {children}
    </button>
  );
}
