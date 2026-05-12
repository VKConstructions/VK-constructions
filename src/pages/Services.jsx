import React from "react";
import CTASection from "../components/CTASection";
import PageHero from "../components/PageHero";
import ProcessSection from "../components/ProcessSection";
import SEO from "../components/SEO";
import SectionTitle from "../components/SectionTitle";
import ServiceCard from "../components/ServiceCard";
import { services } from "../constants/services";

const Services = () => (
  <>
    <SEO
      title="Services"
      description="Residential construction, commercial construction, renovation, interior works, and property construction sales services in Chennai."
    />
    <PageHero
      eyebrow="Services"
      title="Construction services designed for customers who want clarity before commitment."
      description="Choose the service that fits your site, property, or business requirement. Each enquiry starts with consultation, scope definition, and transparent next steps."
      image="/images/gallery/material-board.svg"
    />

    <section className="section-y bg-white">
      <div className="container-px mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="What we do"
          title="End-to-end construction and improvement services."
          description="All content is constants-driven, so service details can be expanded as VK Constructions adds more live proof and packages."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </section>

    <section className="bg-ink py-16 text-white">
      <div className="container-px mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
        {[
          ["For homeowners", "New homes, villa builds, renovations, interiors, and family property upgrades."],
          ["For business owners", "Commercial spaces, fit-outs, workspace improvements, and practical timeline control."],
          ["For NRIs", "Remote coordination, WhatsApp updates, family walkthroughs, and milestone-based communication."],
        ].map(([title, description]) => (
          <article key={title} className="border border-white/12 bg-white/7 p-6">
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="mt-3 text-sm leading-7 text-white/62">{description}</p>
          </article>
        ))}
      </div>
    </section>

    <ProcessSection />
    <CTASection />
  </>
);

export default Services;
