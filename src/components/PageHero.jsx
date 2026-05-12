import React from "react";
const PageHero = ({ eyebrow, title, description, image = "/images/projects/velachery-villa.svg" }) => (
  <section className="relative isolate overflow-hidden bg-ink pt-20 text-white">
    <img src={image} alt="" className="absolute inset-0 -z-20 h-full w-full object-cover opacity-32" loading="eager" />
    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/88 to-ink/56" />
    <div className="container-px mx-auto max-w-7xl py-20 sm:py-24 lg:py-28">
      {eyebrow && <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-brass">{eyebrow}</p>}
      <h1 className="max-w-4xl font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">{title}</h1>
      {description && <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">{description}</p>}
    </div>
  </section>
);

export default PageHero;
