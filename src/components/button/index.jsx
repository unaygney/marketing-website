"use client";
import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";

export default function Button({
  children,
  variant = "primary",
  size = "medium",
  onClick,
  className,
  ...props
}) {
  return (
    <button
      onClick={onClick}
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
          "customs-shadow bg-indigo-700 text-white  hover:bg-indigo-800 focus:outline-indigo-200 disabled:bg-[#f5f5f5] disabled:text-neutral-400   ":
            variant === "primary",
        },
        {
          "custom-shadow border-[0.5px] border-neutral-200 bg-white text-neutral-900 hover:bg-[#fafafa] focus:outline-indigo-200  disabled:border-none disabled:bg-[#f5f5f5] disabled:text-neutral-400 disabled:shadow-none":
            variant === "secondary",
        },
        {
          " text-indigo-700 hover:bg-[#fafafa] focus:outline-indigo-200 disabled:bg-transparent  disabled:text-neutral-400 ":
            variant === "tertiary",
        },
        {
          "bg-red-600 text-white  hover:bg-red-700  focus:bg-red-700   focus:outline-red-200    disabled:bg-transparent disabled:text-neutral-400 ":
            variant === "destructive",
        },
        className,
      )}
    >
      {children}
    </button>
  );
}

// button props types
Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary", "tertiary", "destructive"]),
  size: PropTypes.oneOf(["medium", "large", "extra-large", "2xl-large"]),
  className: PropTypes.string,
  onClick: PropTypes.func,
};
