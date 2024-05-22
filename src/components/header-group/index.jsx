import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
export default function HeaderGroup({
  smallTitle,
  mainTitle,
  text,
  className,
}) {
  return (
    <section className={clsx("flex flex-col gap-3", className)}>
      <h3 className="text-base font-semibold leading-6 text-indigo-700">
        {smallTitle}
      </h3>
      <h4 className="text-3xl font-semibold leading-9 text-neutral-900 md:text-5xl ">
        {mainTitle}
      </h4>
      <p className="mt-2 text-lg font-normal leading-7 text-neutral-600 md:text-xl">
        {text}
      </p>
    </section>
  );
}

HeaderGroup.propTypes = {
  smallTitle: PropTypes.string,
  mainTitle: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};
