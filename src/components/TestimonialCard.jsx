import React from "react";
import { Quote } from "lucide-react";

const TestimonialCard = ({ testimonial }) => (
  <article className="border border-line bg-white p-6">
    <Quote className="text-brass" size={30} aria-hidden="true" />
    <p className="mt-5 text-base leading-8 text-graphite">“{testimonial.quote}”</p>
    <div className="mt-6 border-t border-line pt-4">
      <p className="font-semibold text-ink">{testimonial.name}</p>
      <p className="mt-1 text-sm text-graphite">{testimonial.role}</p>
    </div>
  </article>
);

export default TestimonialCard;
