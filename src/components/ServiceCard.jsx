import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const Icon = service.icon;

  return (
    <article className="group border border-line bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-ink hover:shadow-soft">
      <div className="mb-6 grid h-12 w-12 place-items-center rounded-full bg-ink text-white transition group-hover:bg-brass group-hover:text-ink">
        <Icon size={22} aria-hidden="true" />
      </div>
      <h3 className="text-xl font-semibold text-ink">{service.title}</h3>
      <p className="mt-3 text-sm leading-7 text-graphite">{service.description}</p>
      <ul className="mt-5 grid gap-2 text-sm text-ink/72">
        {service.features.map((feature) => (
          <li key={feature} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brass" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Link to="/contact" className="mt-6 inline-flex text-sm font-semibold text-ink underline-offset-4 hover:underline">
        Enquire about this service
      </Link>
    </article>
  );
};

export default ServiceCard;
