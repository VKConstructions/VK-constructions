import React from "react";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import CTASection from "../components/CTASection";
import SEO from "../components/SEO";
import { projects } from "../constants/projects";

const ProjectDetails = () => {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <section className="container-px mx-auto max-w-4xl py-36">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brass">Project not found</p>
        <h1 className="mt-4 text-4xl font-semibold text-ink">This project is not available.</h1>
        <Link to="/projects" className="mt-8 inline-flex text-sm font-semibold underline underline-offset-4">
          Back to projects
        </Link>
      </section>
    );
  }

  return (
    <>
      <SEO title={project.title} description={project.shortDescription} />
      <section className="relative isolate overflow-hidden bg-ink pt-20 text-white">
        <img src={project.coverImage} alt={project.title} className="absolute inset-0 -z-20 h-full w-full object-cover opacity-34" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/88 to-ink/45" />
        <div className="container-px mx-auto max-w-7xl py-16 sm:py-24">
          <Link to="/projects" className="mb-8 inline-flex items-center gap-2 text-sm text-white/70 hover:text-white">
            <ArrowLeft size={17} aria-hidden="true" />
            Back to projects
          </Link>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brass">{project.category}</p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl font-semibold leading-tight sm:text-6xl">{project.title}</h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/72">{project.shortDescription}</p>
        </div>
      </section>

      <section className="section-y bg-porcelain">
        <div className="container-px mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <aside className="h-fit border border-line bg-white p-6">
            {[
              ["Location", project.location],
              ["Type", project.type],
              ["Status", project.status],
              ["Year", project.year],
            ].map(([label, value]) => (
              <div key={label} className="border-b border-line py-4 first:pt-0 last:border-b-0 last:pb-0">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brass">{label}</p>
                <p className="mt-2 font-semibold text-ink">{value}</p>
              </div>
            ))}
          </aside>

          <div>
            <h2 className="text-3xl font-semibold text-ink">Project Overview</h2>
            <p className="mt-5 text-base leading-8 text-graphite">{project.fullDescription}</p>

            <h2 className="mt-10 text-3xl font-semibold text-ink">Key Highlights</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {project.highlights.map((highlight) => (
                <div key={highlight} className="flex items-center gap-3 border border-line bg-white p-4 text-sm font-semibold">
                  <CheckCircle2 className="shrink-0 text-brass" size={19} aria-hidden="true" />
                  {highlight}
                </div>
              ))}
            </div>

            <h2 className="mt-10 text-3xl font-semibold text-ink">Project Gallery</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {project.galleryImages.map((image) => (
                <img key={image} src={image} alt={project.title} className="aspect-[4/3] w-full object-cover" loading="lazy" />
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default ProjectDetails;
