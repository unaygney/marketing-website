"use client";
import React from "react";
import HeaderGroup from "@/components/header-group";
import * as Tabs from "@radix-ui/react-tabs";
import { PRICING_DATA } from "./constant";
import Image from "next/image";
import Button from "@/components/button";
import clsx from "clsx";

export default function Pricing() {
  const pricingPlans = {
    monthly: PRICING_DATA.monthly.plans,
    annually: PRICING_DATA.annually.plans,
  };

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
      <Tabs.Root
        defaultValue="monthly"
        orientation="vertical"
        className="mx-auto w-full xl:max-w-[1216px]"
      >
        <Tabs.List
          aria-label="Pricing options"
          className="mx-auto mb-12 flex w-full max-w-[312px] items-center justify-center gap-4"
        >
          <Tabs.Trigger value="monthly" className="flex-1 ">
            <Button
              variant="secondary"
              className="inline-flex w-full flex-1 items-center justify-center"
            >
              Monthly
            </Button>
          </Tabs.Trigger>
          <Tabs.Trigger value="annually" className="flex-1 ">
            <Button
              variant="secondary"
              className="inline-flex w-full flex-1 items-center justify-center"
            >
              Annually
            </Button>
          </Tabs.Trigger>
        </Tabs.List>

        {Object.keys(pricingPlans).map((planType) => (
          <Tabs.Content
            key={planType}
            value={planType}
            className="flex w-full flex-col gap-8  xl:flex-row"
          >
            {pricingPlans[planType].map((plan) => (
              <div
                key={plan.id}
                className={clsx(
                  "relative flex flex-1 flex-col gap-8 overflow-hidden rounded-lg border border-neutral-200 bg-white p-4 shadow-sm",
                  { "border-indigo-600 shadow-2xl": plan.isPopular },
                )}
              >
                {plan.isPopular && (
                  <div className="absolute left-0 right-0 top-0 flex h-[60px] w-full  items-center justify-center bg-indigo-50 text-xl font-bold leading-7  text-indigo-700 ">
                    Most Popular
                  </div>
                )}
                <div
                  className={clsx("flex flex-col gap-2", {
                    "mt-[62px]": plan.isPopular,
                  })}
                >
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
                    {planType === "annually"
                      ? `Billed annually (${Math.floor(plan.price * 12)}$)`
                      : "Billed monthly"}
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
                <Button
                  variant={plan.isPopular ? "primary" : "secondary"}
                  size="normal"
                  className={"mt-auto h-12"}
                >
                  Buy Now
                </Button>
              </div>
            ))}
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </section>
  );
}
