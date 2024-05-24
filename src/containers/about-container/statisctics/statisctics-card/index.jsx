"use client";
import React from "react";
import CountUp from "react-countup";

export default function StatiscticsCard({ item }) {
  const { title, number } = item;
  return (
    <div className="flex w-full flex-col items-center gap-4 rounded-lg border border-neutral-200 py-6 shadow">
      <h2 className="text-4xl font-bold leading-10 text-indigo-700 md:text-5xl ">
        <CountUp start={0} end={number} duration={5} separator="," />
      </h2>
      <h6 className="text-xl font-normal leading-7 text-neutral-600">
        {title}
      </h6>
    </div>
  );
}
