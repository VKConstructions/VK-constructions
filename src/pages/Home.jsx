import React from "react";
import { Link } from "react-router-dom";
import CTAButton from "../components/CTAButton";
import CTASection from "../components/CTASection";
import FAQSection from "../components/FAQSection";
import GalleryGrid from "../components/GalleryGrid";
import HeroSection from "../components/HeroSection";
import ProcessSection from "../components/ProcessSection";
import ProjectCard from "../components/ProjectCard";
import SEO from "../components/SEO";
import SectionTitle from "../components/SectionTitle";
import ServiceCard from "../components/ServiceCard";
import StatsSection from "../components/StatsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import WhyChooseUs from "../components/WhyChooseUs";
import { services } from "../constants/services";
import { projects } from "../constants/projects";

const Home = () => (
  <>
    <SEO
      title="Premium Construction Company in Chennai"
      description="VK Constructions is a Chennai-based family construction business for residential, commercial, renovation, interiors, and property construction services."
    />
    <HeroSection />
    <StatsSection dark />

    <section className="section-y bg-porcelain">
      <div className="container-px mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <SectionTitle
            eyebrow="About VK"
            title="Family construction experience, shaped for modern Chennai projects."
            description="VK Constructions is built for customers who want a dependable construction partner, not a confusing chain of contractors. The business has 4-5 years registered experience backed by 20 years of total family experience."
          />
          <div className="mt-7">
            <CTAButton to="/about" variant="outline">
              Know Our Story
            </CTAButton>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <img
            src="/images/gallery/site-progress.svg"
            alt="VK Constructions site execution"
            className="aspect-[4/5] w-full object-cover"
            loading="lazy"
          />
          <img
            src="/images/gallery/interior-living.svg"
            alt="VK Constructions interior work"
            className="mt-0 aspect-[4/5] w-full object-cover sm:mt-10"
            loading="lazy"
          />
        </div>
      </div>
    </section>

    <section className="section-y bg-white">
      <div className="container-px mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionTitle
            eyebrow="Services"
            title="Construction services for homes, commercial spaces, and property-led growth."
            description="Each service is structured to help customers move from rough idea to clear scope, estimate, execution, and handover."
          />
          <CTAButton to="/services" variant="outline" className="self-start sm:self-auto">
            All Services
          </CTAButton>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 5).map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </section>

    <WhyChooseUs />
    <ProcessSection />

    <section className="section-y bg-white">
      <div className="container-px mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionTitle
            eyebrow="Projects"
            title="Featured construction work and upcoming concepts."
            description="Showcase ongoing, completed, and upcoming projects with clear detail pages and replaceable local images."
          />
          <CTAButton to="/projects" variant="outline" className="self-start sm:self-auto">
            Explore Projects
          </CTAButton>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {projects.slice(0, 3).map((project, index) => (
            <ProjectCard key={project.slug} project={project} featured={index === 0} />
          ))}
        </div>
      </div>
    </section>

    <section className="section-y bg-mist">
      <div className="container-px mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionTitle eyebrow="Gallery" title="Details, finishes, sites, and spaces." />
          <Link to="/gallery" className="text-sm font-semibold text-ink underline-offset-4 hover:underline">
            View complete gallery
          </Link>
        </div>
        <div className="mt-10">
          <GalleryGrid limit={5} />
        </div>
      </div>
    </section>

    <TestimonialsSection />
    <FAQSection />
    <CTASection />
  </>
);

export default Home;
