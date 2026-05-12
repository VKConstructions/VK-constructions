import React from "react";
import { projectCategories } from "../constants/projects";
import { cn } from "../utils/formatters";

const ProjectFilter = ({ activeCategory, onChange }) => (
  <div className="flex flex-wrap gap-2">
    {projectCategories.map((category) => (
      <button
        key={category}
        type="button"
        onClick={() => onChange(category)}
        className={cn(
          "focus-ring rounded-full border px-4 py-2 text-sm font-semibold transition",
          activeCategory === category
            ? "border-ink bg-ink text-white"
            : "border-line bg-white text-ink hover:border-ink"
        )}
      >
        {category}
      </button>
    ))}
  </div>
);

export default ProjectFilter;
