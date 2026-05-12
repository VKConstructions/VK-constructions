import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const NotFound = () => (
  <>
    <SEO title="Page Not Found" description="The requested page was not found on VK Constructions." />
    <section className="container-px mx-auto max-w-4xl py-36">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brass">404</p>
      <h1 className="mt-4 text-4xl font-semibold text-ink">This page is not available.</h1>
      <p className="mt-4 text-graphite">Return to the homepage or explore VK Constructions projects and services.</p>
      <Link to="/" className="mt-8 inline-flex rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white">
        Go Home
      </Link>
    </section>
  </>
);

export default NotFound;
