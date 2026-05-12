import React from "react";
import { useCallback, useMemo, useState } from "react";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import TurnstileWidget from "./TurnstileWidget";
import WhatsAppButton from "./WhatsAppButton";
import { budgetRangeOptions, projectTypeOptions, serviceOptions } from "../constants/formOptions";
import { saveEnquiry } from "../services/enquiryService";
import { sendEnquiryEmail } from "../services/emailService";
import { cn } from "../utils/formatters";
import { validateEnquiry } from "../utils/validation";

const initialValues = {
  name: "",
  phone: "",
  email: "",
  serviceInterested: "",
  projectType: "",
  budgetRange: "",
  message: "",
};

const fieldClass =
  "focus-ring w-full border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-graphite/55 transition focus:border-ink";

const ContactForm = () => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [captchaToken, setCaptchaToken] = useState("");
  const [lastSubmitted, setLastSubmitted] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const siteKey = import.meta.env.VITE_CLOUDFLARE_TURNSTILE_SITE_KEY;

  const isReadyToSubmit = useMemo(() => !isSubmitting, [isSubmitting]);

  const updateField = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
  };

  const handleCaptchaVerify = useCallback((token) => {
    setCaptchaToken(token);
    setStatus((current) => (current.type === "captcha" ? { type: "idle", message: "" } : current));
  }, []);

  const handleCaptchaReset = useCallback(() => {
    setCaptchaToken("");
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLastSubmitted(null);

    const validationErrors = validateEnquiry(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setStatus({ type: "error", message: "Please fix the highlighted fields before submitting." });
      return;
    }

    if (siteKey && !captchaToken) {
      setStatus({ type: "captcha", message: "Please complete the CAPTCHA verification." });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    let wasSaved = false;

    try {
      await saveEnquiry(values);
      wasSaved = true;
      await sendEnquiryEmail({ enquiry: values, turnstileToken: captchaToken });
      setLastSubmitted(values);
      setValues(initialValues);
      setCaptchaToken("");
      setStatus({
        type: "success",
        message: "Your enquiry has been submitted. You can also continue the conversation on WhatsApp.",
      });
    } catch (error) {
      if (wasSaved) {
        setLastSubmitted(values);
        setStatus({
          type: "warning",
          message:
            "Your enquiry was saved, but the notification flow needs attention. Please use the WhatsApp button below for the fastest response.",
        });
      } else {
        setStatus({ type: "error", message: error.message || "Something went wrong. Please try again." });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderError = (name) =>
    errors[name] ? <p className="mt-2 text-xs font-medium text-red-700">{errors[name]}</p> : null;

  return (
    <form onSubmit={handleSubmit} className="border border-line bg-porcelain p-5 shadow-soft sm:p-7">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-ink">Name</span>
          <input className={fieldClass} name="name" value={values.name} onChange={updateField} placeholder="Your name" />
          {renderError("name")}
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-ink">Phone</span>
          <input
            className={fieldClass}
            name="phone"
            value={values.phone}
            onChange={updateField}
            placeholder="+91 98765 43210"
            inputMode="tel"
          />
          {renderError("phone")}
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-ink">Email</span>
          <input
            className={fieldClass}
            name="email"
            value={values.email}
            onChange={updateField}
            placeholder="you@example.com"
            inputMode="email"
          />
          {renderError("email")}
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-ink">Service Interested</span>
          <select className={fieldClass} name="serviceInterested" value={values.serviceInterested} onChange={updateField}>
            <option value="">Choose service</option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {renderError("serviceInterested")}
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-ink">Project Type</span>
          <select className={fieldClass} name="projectType" value={values.projectType} onChange={updateField}>
            <option value="">Choose project type</option>
            {projectTypeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {renderError("projectType")}
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-ink">Budget Range</span>
          <select className={fieldClass} name="budgetRange" value={values.budgetRange} onChange={updateField}>
            <option value="">Choose budget</option>
            {budgetRangeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {renderError("budgetRange")}
        </label>
      </div>

      <label className="mt-5 block">
        <span className="mb-2 block text-sm font-semibold text-ink">Project Message</span>
        <textarea
          className={`${fieldClass} min-h-36 resize-y`}
          name="message"
          value={values.message}
          onChange={updateField}
          placeholder="Tell us about your land, location, timeline, budget, and construction requirement."
        />
        {renderError("message")}
      </label>

      <div className="mt-5">
        <TurnstileWidget
          siteKey={siteKey}
          onVerify={handleCaptchaVerify}
          onExpire={handleCaptchaReset}
          onError={() => setStatus({ type: "error", message: "CAPTCHA could not be loaded. Please refresh and try again." })}
        />
      </div>

      {status.message && (
        <div
          className={cn(
            "mt-5 flex gap-3 border p-4 text-sm leading-6",
            status.type === "success" && "border-green-200 bg-green-50 text-green-800",
            status.type === "warning" && "border-amber-200 bg-amber-50 text-amber-900",
            (status.type === "error" || status.type === "captcha") && "border-red-200 bg-red-50 text-red-800"
          )}
        >
          {status.type === "success" ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
          <span>{status.message}</span>
        </div>
      )}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={!isReadyToSubmit}
          className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-brass hover:text-ink disabled:cursor-not-allowed disabled:opacity-65"
        >
          {isSubmitting && <Loader2 className="animate-spin" size={18} aria-hidden="true" />}
          Submit Enquiry
        </button>
        {lastSubmitted && <WhatsAppButton enquiry={lastSubmitted}>Continue on WhatsApp</WhatsAppButton>}
      </div>
    </form>
  );
};

export default ContactForm;
