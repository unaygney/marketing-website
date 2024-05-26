import React from "react";
import { CONTACT } from "./constant";
import Image from "next/image";
import Form from "./form";
export default function Contact() {
  return (
    <section
      id="contact-form"
      className=" flex w-full flex-col justify-center gap-12 bg-white px-3 py-12 md:px-4 md:py-16 xl:flex-row xl:p-24"
    >
      <div className="flex w-full max-w-[592px] flex-col">
        <h5 className="mb-5 text-4xl font-semibold text-neutral-900 xl:text-6xl">
          {CONTACT.title}
        </h5>
        <p className="text-lg font-normal leading-7 text-neutral-600 xl:text-xl">
          {CONTACT.description}
        </p>
        <ul className="mt-10 flex flex-col gap-6">
          {CONTACT.informations.map((info) => {
            if (info.id === 0) {
              return (
                <li key={info.id} className="flex items-center gap-2">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full shadow">
                    <Image
                      src={info.icons}
                      alt={info.title}
                      width={20}
                      height={20}
                    />
                  </span>
                  <pre className="text-base font-medium leading-6 text-neutral-600">
                    {info.title}
                  </pre>
                </li>
              );
            }
            return (
              <li key={info.id} className="flex items-center gap-3">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full shadow">
                  <Image
                    src={info.icons}
                    alt={info.title}
                    width={20}
                    height={20}
                  />
                </span>
                <p className="text-base font-medium leading-6 text-neutral-600">
                  {info.title}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
      <Form />
    </section>
  );
}
