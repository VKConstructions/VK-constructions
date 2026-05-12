import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "../components/ContactForm";
import PageHero from "../components/PageHero";
import SEO from "../components/SEO";
import SectionTitle from "../components/SectionTitle";
import WhatsAppButton from "../components/WhatsAppButton";
import { contactDetails } from "../constants/company";

const Contact = () => (
  <>
    <SEO title="Contact" description="Contact VK Constructions in Chennai for residential, commercial, renovation, interiors, and property construction enquiries." />
    <PageHero
      eyebrow="Contact"
      title="Tell us what you want to build, renovate, or improve."
      description="Share the essentials and VK Constructions will follow up with the next practical step for your site or property."
      image="/images/projects/ecr-weekend-home.svg"
    />

    <section className="section-y bg-white">
      <div className="container-px mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          <SectionTitle
            eyebrow="Start enquiry"
            title="Get a clear conversation before you commit."
            description="Use the form for structured enquiries. After submission, you can continue directly on WhatsApp with the same project details."
          />
          <div className="mt-8 grid gap-4">
            <a
              href={`tel:${contactDetails.phone.replaceAll(" ", "")}`}
              className="flex items-center gap-4 border border-line bg-porcelain p-4 transition hover:border-ink"
            >
              <Phone className="text-brass" size={22} aria-hidden="true" />
              <span>
                <span className="block text-sm text-graphite">Phone</span>
                <span className="font-semibold text-ink">{contactDetails.phone}</span>
              </span>
            </a>
            <a
              href={`mailto:${contactDetails.email}`}
              className="flex items-center gap-4 border border-line bg-porcelain p-4 transition hover:border-ink"
            >
              <Mail className="text-brass" size={22} aria-hidden="true" />
              <span>
                <span className="block text-sm text-graphite">Email</span>
                <span className="font-semibold text-ink">{contactDetails.email}</span>
              </span>
            </a>
            <div className="flex items-center gap-4 border border-line bg-porcelain p-4">
              <MapPin className="text-brass" size={22} aria-hidden="true" />
              <span>
                <span className="block text-sm text-graphite">Location</span>
                <span className="font-semibold text-ink">{contactDetails.address}</span>
              </span>
            </div>
          </div>
          <div className="mt-6">
            <WhatsAppButton />
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  </>
);

export default Contact;
