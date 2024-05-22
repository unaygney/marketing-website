"use client";
import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { FAQS_DATA } from "../constant";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import Button from "@/components/button";

export default function index() {
  return (
    <div className="  mx-auto flex w-full max-w-[1216px]   flex-col gap-7">
      <Accordion.Root
        type="multiple"
        className=" flex w-full   flex-col items-center gap-7"
      >
        {FAQS_DATA.map((faq) => (
          <Accordion.Item
            value={`value-${faq.id}`}
            key={faq.id}
            className="w-full border-b border-neutral-300 pb-7"
          >
            <Accordion.Header className=" text-lg font-medium leading-7 text-neutral-900">
              <Accordion.Trigger className="flex w-full items-center justify-between text-start">
                <span>{faq.title}</span>
                <ChevronDownIcon className="AccordionChevron" aria-hidden />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content>
              <p className="text-base font-normal leading-6 text-neutral-600">
                {faq.content}
              </p>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
      <div className="flex w-full flex-col items-center  justify-between gap-4 rounded-lg border border-neutral-200 p-4 shadow-md md:flex-row md:p-8">
        <div className="flex flex-col gap-2">
          <h5 className="text-xl font-semibold leading-7 text-neutral-900">
            Cannot find the answer you are looking for?
          </h5>
          <p className="text-base font-normal leading-6 text-neutral-600">
            Reach out to our{" "}
            <span className="text-indigo-700">customer support</span> team.
          </p>
        </div>
        <Button className="inline-flex h-12 w-full items-center justify-center md:w-[138px]">
          Get in touch
        </Button>
      </div>
    </div>
  );
}
