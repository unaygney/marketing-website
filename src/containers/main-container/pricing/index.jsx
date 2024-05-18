"use client";
import Button from "@/components/button";
import HeaderGroup from "@/components/header-group";
import Tabs from "@/components/tabs";
import React from "react";

export default function Pricing() {
  return (
    <section
      className="flex flex-col gap-10 bg-white  px-3 py-12 md:px-4 md:py-16  xl:p-24"
      id="pricing"
    >
      <HeaderGroup
        smallTitle="Pricing Tiers"
        mainTitle="Fit for all your needs"
        text="Pick the plan that suits you today and step up as your demands grow - our flexible options have your journey mapped out."
        className="text-center"
      />
      <Tabs>
        {({ activeTab }) => (
          <>
            <div className="flex items-center gap-4">
              <Tabs.Tab
                index={0}
                className={`h-11 flex-1 rounded transition-shadow  delay-200 ${activeTab === 0 ? "shadow" : ""}`}
              >
                Monthly
              </Tabs.Tab>
              <Tabs.Tab
                index={1}
                className={`h-11 flex-1 rounded transition-shadow delay-200  ${activeTab === 1 ? "shadow" : ""}`}
              >
                Annually
              </Tabs.Tab>
            </div>
            <Tabs.TabPanel index={0}>Deneme1</Tabs.TabPanel>
            <Tabs.TabPanel index={1}>Deneme2</Tabs.TabPanel>
          </>
        )}
      </Tabs>
    </section>
  );
}
