const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[0-9+\-\s()]{8,18}$/;

export const validateEnquiry = (values) => {
  const errors = {};

  if (!values.name.trim() || values.name.trim().length < 2) {
    errors.name = "Please enter your full name.";
  }

  if (!phoneRegex.test(values.phone.trim())) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (!emailRegex.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.serviceInterested) {
    errors.serviceInterested = "Please choose a service.";
  }

  if (!values.projectType) {
    errors.projectType = "Please choose a project type.";
  }

  if (!values.budgetRange) {
    errors.budgetRange = "Please choose a budget range.";
  }

  if (!values.message.trim() || values.message.trim().length < 12) {
    errors.message = "Please share a few project details.";
  }

  return errors;
};
