import React from "react";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { contactDetails } from "../constants/company";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition hover:text-brass ${
      isActive ? "text-brass" : "text-white/82 lg:text-ink/75"
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/90 text-white backdrop-blur-xl lg:bg-porcelain/92 lg:text-ink lg:shadow-sm">
      <nav className="container-px mx-auto flex h-20 max-w-7xl items-center justify-between">
        <Link to="/" className="focus-ring flex items-center gap-3 rounded-full" aria-label="VK Constructions home">
          <span className="grid h-11 w-11 place-items-center rounded-full border border-brass bg-white text-sm font-black text-ink">
            VK
          </span>
          <span>
            <span className="block text-sm font-bold uppercase tracking-[0.18em]">VK Constructions</span>
            <span className="block text-xs text-white/60 lg:text-ink/55">Chennai</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <a
            href={`tel:${contactDetails.phone.replaceAll(" ", "")}`}
            className="focus-ring inline-flex items-center gap-2 rounded-full border border-ink/10 px-4 py-2 text-sm font-semibold transition hover:border-brass hover:text-brass"
          >
            <Phone size={16} aria-hidden="true" />
            Call Now
          </a>
          <Link
            to="/contact"
            className="focus-ring rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brass hover:text-ink"
          >
            Get Estimate
          </Link>
        </div>

        <button
          type="button"
          className="focus-ring rounded-full border border-white/20 p-2 lg:hidden"
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {isOpen && (
        <div className="container-px border-t border-white/10 bg-ink pb-6 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 pt-5">
            <div className="mb-1">
              <ThemeToggle />
            </div>
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={linkClass} onClick={() => setIsOpen(false)}>
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="focus-ring mt-2 rounded-full bg-white px-5 py-3 text-center text-sm font-semibold text-ink"
            >
              Request Estimate
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
