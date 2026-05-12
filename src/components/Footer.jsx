import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { contactDetails, socialLinks, tagline } from "../constants/company";

const footerLinks = [
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

const Footer = () => (
  <footer className="bg-ink text-white">
    <div className="container-px mx-auto max-w-7xl py-14">
      <div className="grid gap-10 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1fr]">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-full border border-brass bg-white text-sm font-black text-ink">
              VK
            </span>
            <div>
              <p className="font-bold uppercase tracking-[0.18em]">{contactDetails.companyName}</p>
              <p className="text-sm text-white/55">{contactDetails.location}</p>
            </div>
          </div>
          <p className="max-w-md text-2xl font-semibold leading-tight">{tagline}</p>
          <p className="mt-5 max-w-md text-sm leading-7 text-white/62">
            A Chennai-based family construction business for residential, commercial, renovation, interiors, and
            construction-linked property needs.
          </p>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-brass">Pages</p>
          <div className="grid gap-3">
            {footerLinks.map((link) => (
              <Link key={link.to} to={link.to} className="text-sm text-white/65 transition hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-brass">Social</p>
          <div className="grid gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="inline-flex items-center gap-2 text-sm text-white/65 transition hover:text-white"
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-brass">Contact</p>
          <div className="grid gap-3 text-sm leading-7 text-white/65">
            <a href={`tel:${contactDetails.phone.replaceAll(" ", "")}`} className="transition hover:text-white">
              {contactDetails.phone}
            </a>
            <a href={`mailto:${contactDetails.email}`} className="transition hover:text-white">
              {contactDetails.email}
            </a>
            <p>{contactDetails.address}</p>
            <p>{contactDetails.workingHours}</p>
          </div>
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} VK Constructions. All rights reserved.</p>
        <p>Designed for fast enquiries, trust, and project discovery.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
