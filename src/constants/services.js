import { Building2, Home, Paintbrush, RotateCcw, Store } from "lucide-react";

export const services = [
  {
    title: "Residential Construction",
    slug: "residential-construction",
    icon: Home,
    description:
      "Premium homes, villas, duplex houses, and apartment works planned for lasting structural value and refined daily living.",
    features: ["New home construction", "Villa and duplex projects", "Structural and finishing works"],
  },
  {
    title: "Commercial Construction",
    slug: "commercial-construction",
    icon: Building2,
    description:
      "Reliable commercial spaces for business owners who need disciplined execution, clean finishes, and practical timelines.",
    features: ["Office and retail spaces", "Commercial fit-outs", "Site coordination"],
  },
  {
    title: "Renovation",
    slug: "renovation",
    icon: RotateCcw,
    description:
      "Thoughtful renovation for old homes and working spaces, improving usability, safety, aesthetics, and resale value.",
    features: ["Home remodeling", "Structural upgrades", "Exterior refresh"],
  },
  {
    title: "Interior Works",
    slug: "interior-works",
    icon: Paintbrush,
    description:
      "Clean interior execution for homes and commercial spaces with material guidance, workmanship control, and elegant detailing.",
    features: ["Modular interiors", "False ceiling and lighting", "Finish selection"],
  },
  {
    title: "Property / Construction Sales",
    slug: "property-construction-sales",
    icon: Store,
    description:
      "Construction-linked property support for customers exploring investment, build-to-sell, or site development options.",
    features: ["Property consultation", "Build-to-sell guidance", "Buyer coordination"],
  },
];
