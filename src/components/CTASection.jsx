import React from "react";
import CTAButton from "./CTAButton";

const CTASection = () => (
  <section className="bg-ink text-white">
    <div className="container-px mx-auto max-w-7xl py-14">
      <div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brass">Ready to build?</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl">
            Share your site, budget, and idea. We will help you shape the next step.
          </h2>
        </div>
        <CTAButton to="/contact" variant="light">
          Start Enquiry
        </CTAButton>
      </div>
    </div>
  </section>
);

export default CTASection;
