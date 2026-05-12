export const createWhatsAppMessage = (formData) => {
  const lines = [
    "Hello VK Constructions, I submitted an enquiry from your website.",
    `Name: ${formData.name}`,
    `Phone: ${formData.phone}`,
    `Email: ${formData.email}`,
    `Service: ${formData.serviceInterested}`,
    `Project Type: ${formData.projectType}`,
    `Budget: ${formData.budgetRange}`,
    `Message: ${formData.message}`,
  ];

  return encodeURIComponent(lines.join("\n"));
};

export const getWhatsAppUrl = (phoneNumber, formData) =>
  `https://wa.me/${phoneNumber}?text=${createWhatsAppMessage(formData)}`;

export const cn = (...classes) => classes.filter(Boolean).join(" ");
