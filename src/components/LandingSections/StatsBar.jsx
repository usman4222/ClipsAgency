import { useState, useEffect } from "react";
import CountUp from "react-countup";

export default function StatsBar() {
  const stats = [
    {
      value: 500, // Change string to number
      suffix: "Hr+",
      label: "Time Saved",
    },
    {
      value: 50, // Change string to number
      suffix: "M+",
      label: "Organic Views",
    },
    {
      value: 10, // Change string to number
      suffix: "X",
      label: "Credibility",
    },
  ];

  return (
    <div className="bg-[#080617] px-4 py-16">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:divide-x md:divide-white">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center text-center">
              {/* CountUp component for animation */}
              <span className="mb-2 text-3xl font-bold text-white md:text-5xl lg:text-5xl">
                <CountUp start={0} end={stat.value} duration={2.5} separator="," />
                {stat.suffix}
              </span>
              <span className="text-sm text-white font-bold md:text-base lg:text-lg">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
