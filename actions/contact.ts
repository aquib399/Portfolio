"use server";

import { ContactFormData } from "@/types/portfolio";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phoneRegex =
  /^\+?\(?\d{1,3}\)?[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

type validationResult = {
  path: string;
  message: string;
}[];

function validateData(formData: ContactFormData): validationResult {
  const { email, name, query, phone } = formData;

  const errors: validationResult = [];

  if (!email || email.trim() === "") {
    errors.push({ path: "email", message: "Email is required" });
  }

  if (!emailRegex.test(email)) {
    errors.push({ path: "email", message: "Invalid email address" });
  }

  if (!name || name.trim() === "") {
    errors.push({ path: "name", message: "Name is required" });
  }
  if (name.length < 2 || name.length > 50) {
    errors.push({
      path: "name",
      message: "Name must be between 2 and 50 characters"
    });
  }
  if (!query || query.trim() === "") {
    errors.push({ path: "query", message: "Query is required" });
  }
  if (query.length < 5 || query.length > 500) {
    errors.push({
      path: "query",
      message: "Query must be between 5 and 500 characters"
    });
  }
  if (phone && !phoneRegex.test(phone)) {
    errors.push({ path: "phone", message: "Invalid phone number" });
  }
  return errors;
}

export async function sendContactForm(formData: ContactFormData) {
  const errors = validateData(formData);

  if (errors.length > 0) {
    return {
      message: "Validation failed",
      type: "error",
      data: { errors }
    };
  }

  // Mock API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    type: "success",
    message: "Your message has been sent successfully.",
    data: {
      id: crypto.randomUUID()
    }
  };
}
