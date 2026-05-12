import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "../utils/formatters";

const CTAButton = ({ to, href, children, variant = "dark", className = "" }) => {
  const classes = cn(
    "focus-ring inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition duration-300",
    variant === "dark" && "bg-ink text-white hover:bg-brass hover:text-ink",
    variant === "light" && "bg-white text-ink hover:bg-brass",
    variant === "outline" && "border border-ink/20 text-ink hover:border-ink hover:bg-ink hover:text-white",
    className
  );

  const content = (
    <>
      <span>{children}</span>
      <ArrowRight aria-hidden="true" size={17} />
    </>
  );

  if (href) {
    return (
      <a className={classes} href={href}>
        {content}
      </a>
    );
  }

  return (
    <Link className={classes} to={to}>
      {content}
    </Link>
  );
};

export default CTAButton;
