import React from "react";
const SectionTitle = ({ eyebrow, title, description, align = "left", inverse = false }) => (
  <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
    {eyebrow && (
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-brass">{eyebrow}</p>
    )}
    <h2 className={`font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl ${inverse ? "text-white" : "text-ink"}`}>
      {title}
    </h2>
    {description && (
      <p className={`mt-5 text-base leading-8 sm:text-lg ${inverse ? "text-white/65" : "text-graphite"}`}>
        {description}
      </p>
    )}
  </div>
);

export default SectionTitle;
