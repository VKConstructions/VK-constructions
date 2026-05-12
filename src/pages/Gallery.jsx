import React from "react";
import CTASection from "../components/CTASection";
import GalleryGrid from "../components/GalleryGrid";
import PageHero from "../components/PageHero";
import SEO from "../components/SEO";
import SectionTitle from "../components/SectionTitle";

const Gallery = () => (
  <>
    <SEO title="Gallery" description="Browse VK Constructions gallery images for construction sites, interiors, materials, and completed spaces." />
    <PageHero
      eyebrow="Gallery"
      title="Project visuals, site moments, finishes, and details."
      description="Local image paths make it easy to replace these dummy assets with real project photos later."
      image="/images/gallery/exterior-night.svg"
    />
    <section className="section-y bg-porcelain">
      <div className="container-px mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Visual proof"
          title="A clean gallery structure for trust-building."
          description="Use this page to publish construction progress, finished rooms, elevations, materials, and handover moments."
        />
        <div className="mt-10">
          <GalleryGrid />
        </div>
      </div>
    </section>
    <CTASection />
  </>
);

export default Gallery;
