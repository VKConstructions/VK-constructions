import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project, featured = false }) => (
  <Link
    to={`/projects/${project.slug}`}
    className={`group block overflow-hidden border border-line bg-white transition duration-300 hover:-translate-y-1 hover:border-ink hover:shadow-soft ${
      featured ? "lg:col-span-2" : ""
    }`}
  >
    <div className={featured ? "image-shine aspect-[16/9]" : "image-shine aspect-[4/3]"}>
      <img
        src={project.coverImage}
        alt={project.title}
        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        loading="lazy"
      />
    </div>
    <div className="p-5">
      <div className="mb-3 flex items-center justify-between gap-4">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brass">{project.category}</span>
        <ArrowUpRight size={18} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
      <h3 className="text-xl font-semibold text-ink">{project.title}</h3>
      <p className="mt-2 text-sm text-graphite">
        {project.location} · {project.type}
      </p>
      <p className="mt-4 text-sm leading-7 text-graphite">{project.shortDescription}</p>
    </div>
  </Link>
);

export default ProjectCard;
