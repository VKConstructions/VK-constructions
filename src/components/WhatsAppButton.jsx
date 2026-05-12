import React from "react";
import { MessageCircle } from "lucide-react";
import { contactDetails } from "../constants/company";
import { getWhatsAppUrl } from "../utils/formatters";

const defaultMessage = {
  name: "Website visitor",
  phone: "",
  email: "",
  serviceInterested: "Construction service",
  projectType: "Project enquiry",
  budgetRange: "Need guidance",
  message: "I would like to discuss a construction requirement in Chennai.",
};

const WhatsAppButton = ({ enquiry = defaultMessage, children = "WhatsApp VK Constructions" }) => (
  <a
    href={getWhatsAppUrl(contactDetails.whatsappNumber, enquiry)}
    target="_blank"
    rel="noreferrer"
    className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-bold text-ink transition hover:brightness-95"
  >
    <MessageCircle size={18} aria-hidden="true" />
    {children}
  </a>
);

export default WhatsAppButton;
