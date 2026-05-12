export const sendEnquiryEmail = async ({ enquiry, turnstileToken }) => {
  const response = await fetch("/api/send-enquiry-email", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ enquiry, turnstileToken }),
  });

  const result = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(result.error || "Unable to send enquiry email.");
  }

  return result;
};
