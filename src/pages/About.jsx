import React from "react";
import CTASection from "../components/CTASection";
import PageHero from "../components/PageHero";
import ProcessSection from "../components/ProcessSection";
import SEO from "../components/SEO";
import SectionTitle from "../components/SectionTitle";
import StatsSection from "../components/StatsSection";
import WhyChooseUs from "../components/WhyChooseUs";

const About = () => (
  <>
    <SEO
      title="About"
      description="Learn about VK Constructions, a Chennai-based family construction business with registered experience and 20 years of family construction knowledge."
    />
    <PageHero
      eyebrow="About VK Constructions"
      title="A family-led Chennai construction company built around trust, clarity, and workmanship."
      description="We help homeowners, landowners, business owners, builders, NRIs, and general customers make construction decisions with confidence."
      image="/images/gallery/site-progress.svg"
    />
    <StatsSection />

    <section className="section-y bg-porcelain">
      <div className="container-px mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <img
          src="/images/projects/omr-workspace.svg"
          alt="VK Constructions commercial and residential execution"
          className="aspect-[5/4] w-full object-cover shadow-soft"
          loading="lazy"
        />
        <div>
          <SectionTitle
            eyebrow="Our story"
            title="Registered for today’s market, grounded in two decades of family experience."
            description="VK Constructions brings together practical site execution, local vendor relationships, and an owner-involved service model. The business is registered with 4-5 years of formal experience, while the family’s broader construction background spans 20 years."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              "Residential and commercial execution",
              "Renovation and interiors support",
              "Construction-linked property sales",
              "Transparent estimates and milestones",
            ].map((item) => (
              <div key={item} className="border-l-2 border-brass bg-white p-4 text-sm font-semibold text-ink">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <WhyChooseUs />
    <ProcessSection />
    <CTASection />
  </>
);

export default About;
