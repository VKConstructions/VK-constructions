import React from "react";
import SectionTitle from "./SectionTitle";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "../constants/testimonials";

const TestimonialsSection = () => (
  <section className="section-y bg-white">
    <div className="container-px mx-auto max-w-7xl">
      <SectionTitle
        eyebrow="Testimonials"
        title="Customers value clarity, commitment, and clean execution."
        description="Use these sample testimonials now and replace them with real customer feedback as your project list grows."
      />
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.name} testimonial={testimonial} />
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
