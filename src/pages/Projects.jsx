import React from "react";
import { useMemo, useState } from "react";
import CTASection from "../components/CTASection";
import PageHero from "../components/PageHero";
import ProjectCard from "../components/ProjectCard";
import ProjectFilter from "../components/ProjectFilter";
import SEO from "../components/SEO";
import SectionTitle from "../components/SectionTitle";
import { projects } from "../constants/projects";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(
    () => (activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)),
    [activeCategory]
  );

  return (
    <>
      <SEO
        title="Projects"
        description="Explore VK Constructions ongoing, completed, and upcoming projects across Chennai."
      />
      <PageHero
        eyebrow="Projects"
        title="Ongoing, completed, and upcoming construction work."
        description="Each project includes category, location, project type, status, year, gallery images, and key highlights."
        image="/images/projects/aadhya-signature.svg"
      />

      <section className="section-y bg-porcelain">
        <div className="container-px mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionTitle
              eyebrow="Project categories"
              title="Browse by project stage."
              description="Use this sample structure to publish real project proof as the portfolio grows."
            />
            <ProjectFilter activeCategory={activeCategory} onChange={setActiveCategory} />
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default Projects;
