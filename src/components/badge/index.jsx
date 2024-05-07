import React from "react";
import clsx from "clsx";
export default function Badge({
  title = "Label",
  colors = "neutral",
  size = "small",
}) {
  return (
    <span
      className={clsx(
        "font-normal rounded-full inline-flex items-center justify-center ",
        {
          "text-xs px-1.5 py-0.5  ": size === "small",
        },
        {
          "text-sm px-2 py-0.5": size === "medium",
        },
        {
          "text-sm w-[56px] py-1 px-2.5": size === "large",
        },
        {
          "border-spacing-0.5 border bg-gray-50 text-neutral-600":
            colors === "neutral",
        },
        {
          "border-red-200 border bg-red-50 text-red-600": colors === "error",
        },
        {
          "border-amber-200 border bg-amber-50 text-amber-700":
            colors === "warning",
        },
        {
          "border-green-200 border bg-green-50 text-green-700":
            colors === "success",
        },
        {
          "border-indigo-200 border bg-indigo-50 text-indigo-700":
            colors === "brand",
        }
      )}
    >
      {title}
    </span>
  );
}
