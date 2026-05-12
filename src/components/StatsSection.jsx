import React from "react";
import { companyStats } from "../constants/company";

const StatsSection = ({ dark = false }) => (
  <section className={dark ? "bg-ink text-white" : "bg-white text-ink"}>
    <div className="container-px mx-auto max-w-7xl py-10">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {companyStats.map((stat) => (
          <div key={stat.label} className="border-l border-brass/45 pl-5">
            <p className="text-3xl font-semibold sm:text-4xl">{stat.value}</p>
            <p className={dark ? "mt-2 text-sm text-white/58" : "mt-2 text-sm text-graphite"}>{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
