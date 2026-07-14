"use server";

import {
  budgetRanges,
  projectTypes,
  timelineOptions,
  type ContactFormState,
  type Enquiry,
  type FormField,
} from "./form-config";

const maxLengths: Record<Exclude<FormField, "consent">, number> = {
  name: 100,
  email: 160,
  company: 140,
  need: 220,
  projectType: 80,
  url: 240,
  budget: 80,
  timeline: 80,
  details: 3000,
};

function readText(formData: FormData, key: Exclude<FormField, "consent">) {
  const value = formData.get(key);

  if (typeof value !== "string") {
    return "";
  }

  return value.trim().slice(0, maxLengths[key]);
}

function isOption<T extends readonly string[]>(
  value: string,
  options: T,
): value is T[number] {
  return options.includes(value);
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidUrl(value: string) {
  if (!value) {
    return true;
  }

  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

function buildEmailText(enquiry: Enquiry) {
  return [
    "New Portfolio Project Enquiry",
    "",
    `Name: ${enquiry.name}`,
    `Email: ${enquiry.email}`,
    `Company or project: ${enquiry.company}`,
    `What needs built: ${enquiry.need}`,
    `Project type: ${enquiry.projectType}`,
    `Current URL: ${enquiry.url || "Not provided"}`,
    `Estimated budget: ${enquiry.budget}`,
    `Desired timeline: ${enquiry.timeline}`,
    "",
    "Project details:",
    enquiry.details,
  ].join("\n");
}

function validate(formData: FormData) {
  const enquiry = {
    name: readText(formData, "name"),
    email: readText(formData, "email").toLowerCase(),
    company: readText(formData, "company"),
    need: readText(formData, "need"),
    projectType: readText(formData, "projectType"),
    url: readText(formData, "url"),
    budget: readText(formData, "budget"),
    timeline: readText(formData, "timeline"),
    details: readText(formData, "details"),
  };

  const errors: ContactFormState["errors"] = {};

  if (!enquiry.name) {
    errors.name = "Enter your name.";
  }

  if (!enquiry.email || !isValidEmail(enquiry.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!enquiry.company) {
    errors.company = "Enter your company or project name.";
  }

  if (enquiry.need.length < 5) {
    errors.need = "Briefly describe what you need built.";
  }

  if (!isOption(enquiry.projectType, projectTypes)) {
    errors.projectType = "Choose a project type.";
  }

  if (!isValidUrl(enquiry.url)) {
    errors.url = "Enter a full URL starting with http:// or https://.";
  }

  if (!isOption(enquiry.budget, budgetRanges)) {
    errors.budget = "Choose an estimated budget.";
  }

  if (!isOption(enquiry.timeline, timelineOptions)) {
    errors.timeline = "Choose a desired timeline.";
  }

  if (enquiry.details.length < 20) {
    errors.details = "Share at least a few sentences about the project.";
  }

  if (formData.get("consent") !== "on") {
    errors.consent =
      "Confirm that submitting this form does not create a development agreement.";
  }

  if (Object.keys(errors).length > 0) {
    return { errors, enquiry: null };
  }

  return { errors, enquiry: enquiry as Enquiry };
}

function buildWeb3FormsPayload(enquiry: Enquiry, accessKey: string) {
  return {
    access_key: accessKey,
    subject: "New Portfolio Project Enquiry",
    from_name: "Saheed Alpha Mansaray Portfolio",
    email: enquiry.email,
    replyto: enquiry.email,
    name: enquiry.name,
    "company or project name": enquiry.company,
    "what do you need built": enquiry.need,
    "project type": enquiry.projectType,
    "current URL": enquiry.url || "Not provided",
    budget: enquiry.budget,
    timeline: enquiry.timeline,
    "project details": enquiry.details,
    message: buildEmailText(enquiry),
  };
}
export async function submitProjectEnquiry(
  _previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const honeypot = formData.get("website");

  if (typeof honeypot === "string" && honeypot.trim()) {
    return {
      status: "error",
      message:
        "The form could not be submitted. Please email the project details directly.",
      errors: {},
    };
  }

  const { errors, enquiry } = validate(formData);

  if (!enquiry) {
    return {
      status: "error",
      message: "Please fix the highlighted fields and send the details again.",
      errors,
    };
  }

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    return {
      status: "error",
      message:
        "This form is validated, but Web3Forms is not configured yet. Add WEB3FORMS_ACCESS_KEY in Vercel and redeploy.",
      errors: {},
    };
  }

  return {
    status: "idle",
    message: "",
    errors: {},
    web3FormsPayload: buildWeb3FormsPayload(enquiry, accessKey),
  };
}