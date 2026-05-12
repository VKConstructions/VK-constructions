import React from "react";
import { CheckCircle2, MapPin } from "lucide-react";
import CTAButton from "./CTAButton";
import { contactDetails, tagline } from "../constants/company";

const HeroSection = () => (
  <section className="relative isolate overflow-hidden bg-ink pt-20 text-white">
    <img
      src="/images/projects/aadhya-signature.svg"
      alt="Premium residential construction by VK Constructions"
      className="absolute inset-0 -z-20 h-full w-full object-cover opacity-42"
      loading="eager"
    />
    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/86 to-ink/38" />
    <div className="absolute inset-x-0 bottom-0 -z-10 h-36 bg-gradient-to-t from-ink to-transparent" />

    <div className="container-px mx-auto grid min-h-[calc(100svh-5rem)] max-w-7xl items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.72fr]">
      <div>
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/8 px-4 py-2 text-sm text-white/75 backdrop-blur">
          <MapPin size={16} aria-hidden="true" />
          Chennai-based construction partner
        </div>
        <h1 className="max-w-4xl font-display text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl">
          VK Constructions
        </h1>
        <p className="mt-5 max-w-2xl text-2xl font-medium text-brass sm:text-3xl">{tagline}</p>
        <p className="mt-6 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
          Family-led residential, commercial, renovation, interior, and property construction services with 20 years of
          total family experience and a clear, owner-involved execution process.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <CTAButton to="/contact" variant="light">
            Request Site Consultation
          </CTAButton>
          <CTAButton to="/projects" variant="outline" className="border-white/30 text-white hover:bg-white hover:text-ink">
            View Projects
          </CTAButton>
        </div>

        <div className="mt-10 grid gap-3 text-sm text-white/70 sm:grid-cols-3">
          {["Transparent estimates", "Chennai vendor network", "Milestone updates"].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <CheckCircle2 size={17} className="text-brass" aria-hidden="true" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden lg:block">
        <div className="ml-auto max-w-sm border border-white/14 bg-white/9 p-6 shadow-lift backdrop-blur-md">
          <p className="text-sm uppercase tracking-[0.22em] text-brass">Lead-ready</p>
          <p className="mt-4 text-3xl font-semibold leading-tight">Plan your next build with one accountable team.</p>
          <div className="mt-7 grid gap-4 text-sm text-white/72">
            <p>Service Area: {contactDetails.serviceArea}</p>
            <p>Experience: 4-5 years registered, 20 years family business experience</p>
            <p>Ideal for homeowners, landowners, builders, business owners, and NRIs.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
