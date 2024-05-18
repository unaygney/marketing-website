"use client";
import React from "react";
import HeaderGroup from "@/components/header-group";
import * as Tabs from "@radix-ui/react-tabs";
import { PRICING_DATA } from "./constant";
import Image from "next/image";
import Button from "@/components/button";

export default function Pricing() {
  return (
    <section
      className="flex flex-col gap-10 bg-white px-3 py-12 md:px-4 md:py-16 xl:p-24"
      id="pricing"
    >
      <HeaderGroup
        smallTitle="Pricing Tiers"
        mainTitle="Fit for all your needs"
        text="Pick the plan that suits you today and step up as your demands grow - our flexible options have your journey mapped out."
        className="text-center"
      />
      <Tabs.Root defaultValue="monthly" orientation="vertical">
        <Tabs.List aria-label="Pricing options" className="flex flex-col">
          <Tabs.Trigger value="monthly" className="p-2">
            Monthly
          </Tabs.Trigger>
          <Tabs.Trigger value="annually" className="p-2">
            Annually
          </Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content value="monthly" className="flex flex-col gap-8 ">
          <>
            {PRICING_DATA.monthly.plans.map((plan) => (
              <div
                key={plan.id}
                className="flex flex-col gap-8 rounded-lg border border-neutral-200 bg-white p-4 shadow-sm"
              >
                <div>
                  <h3 className="text-xl font-bold">{plan.title}</h3>
                  <p className="mt-2">{plan.description}</p>
                </div>
                <div>
                  <p className="mt-2 text-lg font-semibold">${plan.price}</p>
                  <p>Billed annually(84$)</p>
                </div>
                <ul className="flex flex-col gap-5">
                  {plan.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <button>Buy Now</button>
              </div>
            ))}
          </>
        </Tabs.Content>

        <Tabs.Content value="annually" className="flex flex-col gap-8 ">
          <>
            {PRICING_DATA.annually.plans.map((plan) => (
              <div
                key={plan.id}
                className="flex flex-col gap-8 rounded-lg border border-neutral-200 bg-white p-4 shadow-sm"
              >
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-semibold leading-8 text-neutral-900 ">
                    {plan.title}
                  </h3>
                  <p className="text-base font-normal leading-6 text-neutral-600">
                    {plan.description}
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="mt-2 text-5xl font-semibold text-neutral-900">
                    ${plan.price}
                    <span className="text-base font-normal">/month</span>
                  </p>
                  <p className="text-base font-normal leading-6 text-neutral-600">
                    Billed annually(84$)
                  </p>
                </div>
                <ul className="flex flex-col gap-5">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <span className="inline-flex flex-shrink-0 items-center justify-center overflow-hidden rounded-full bg-indigo-50">
                        <Image
                          src="/images/check.svg"
                          width={20}
                          height={20}
                          alt="check"
                        />
                      </span>
                      <li key={index}>{feature}</li>
                    </div>
                  ))}
                </ul>
                <Button variant="secondary" size="normal" className={"h-12"}>
                  Buy Now
                </Button>
              </div>
            ))}
          </>
        </Tabs.Content>
      </Tabs.Root>
    </section>
  );
}
