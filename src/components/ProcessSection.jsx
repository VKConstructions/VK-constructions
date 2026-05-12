import React from "react";
import SectionTitle from "./SectionTitle";
import { processSteps } from "../constants/company";

const ProcessSection = () => (
  <section className="section-y bg-porcelain">
    <div className="container-px mx-auto max-w-7xl">
      <SectionTitle
        eyebrow="Process"
        title="A clear path from first call to final handover."
        description="The process is designed to reduce uncertainty and keep construction decisions visible at every stage."
        align="center"
      />
      <div className="mt-12 grid gap-4 md:grid-cols-5">
        {processSteps.map((step) => (
          <article key={step.step} className="border border-line bg-white p-5">
            <span className="text-sm font-bold text-brass">{step.step}</span>
            <h3 className="mt-5 text-lg font-semibold text-ink">{step.title}</h3>
            <p className="mt-3 text-sm leading-7 text-graphite">{step.description}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
