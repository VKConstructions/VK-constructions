import React from "react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { faqs } from "../constants/company";
import { cn } from "../utils/formatters";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section-y bg-mist">
      <div className="container-px mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionTitle
          eyebrow="FAQs"
          title="Common questions before starting construction."
          description="The details below are editable in constants, so the website can grow with your real operating process."
        />
        <div className="grid gap-3">
          {faqs.map((faq, index) => (
            <article key={faq.question} className="border border-line bg-white">
              <button
                type="button"
                className="focus-ring flex w-full items-center justify-between gap-4 p-5 text-left"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <span className="font-semibold text-ink">{faq.question}</span>
                <ChevronDown
                  size={20}
                  className={cn("shrink-0 transition", openIndex === index && "rotate-180")}
                  aria-hidden="true"
                />
              </button>
              {openIndex === index && <p className="px-5 pb-5 text-sm leading-7 text-graphite">{faq.answer}</p>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
