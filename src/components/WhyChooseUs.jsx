import React from "react";
import { ShieldCheck } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { whyChooseUs } from "../constants/company";

const WhyChooseUs = () => (
  <section className="section-y bg-ink text-white">
    <div className="container-px mx-auto max-w-7xl">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <SectionTitle
          eyebrow="Why choose us"
          title="A practical construction partner with premium discipline."
          description="VK Constructions combines family business experience, local market knowledge, and direct communication for customers who want confidence before they build."
          inverse
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {whyChooseUs.map((item) => (
            <article key={item.title} className="border border-white/12 bg-white/7 p-6">
              <ShieldCheck className="mb-5 text-brass" size={28} aria-hidden="true" />
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/62">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
