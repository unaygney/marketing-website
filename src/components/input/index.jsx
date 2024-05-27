import React from "react";
import clsx from "clsx";
export default function Input({
  name,
  placeholder,
  hint = "",
  label,
  type,
  id,
  className,
  ...rest
}) {
  return (
    <div className={clsx("flex flex-col items-start gap-1", className)}>
      <label
        htmlFor={id}
        className="text-sm font-medium leading-5 text-neutral-700 "
      >
        {label}
      </label>
      <input
        className="focus:shadow-input-focus h-10 w-full  rounded border border-neutral-200 bg-neutral-50 px-3.5 py-2.5 leading-5 outline-none placeholder:text-ellipsis placeholder:text-sm placeholder:leading-5 placeholder:text-neutral-500 focus:border-[#444CE7] disabled:border-neutral-100 disabled:bg-neutral-50  disabled:text-[#a3a3a3] disabled:placeholder:text-[#a3a3a3]"
        type={type}
        placeholder={placeholder}
        name={name}
        id={id}
        {...rest}
      />
      <p className="text-sm font-normal leading-5 text-neutral-500">{hint}</p>
    </div>
  );
}
