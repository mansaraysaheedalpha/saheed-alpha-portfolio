"use server";

import {
  budgetRanges,
  contactEmail,
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

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function buildEmailText(enquiry: Enquiry) {
  return [
    "New project enquiry",
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

function buildEmailHtml(enquiry: Enquiry) {
  const rows = [
    ["Name", enquiry.name],
    ["Email", enquiry.email],
    ["Company or project", enquiry.company],
    ["What needs built", enquiry.need],
    ["Project type", enquiry.projectType],
    ["Current URL", enquiry.url || "Not provided"],
    ["Estimated budget", enquiry.budget],
    ["Desired timeline", enquiry.timeline],
  ];

  return `
    <h1>New project enquiry</h1>
    <table cellpadding="8" cellspacing="0" style="border-collapse:collapse">
      <tbody>
        ${rows
          .map(
            ([label, value]) =>
              `<tr><th align="left">${escapeHtml(label)}</th><td>${escapeHtml(
                value,
              )}</td></tr>`,
          )
          .join("")}
      </tbody>
    </table>
    <h2>Project details</h2>
    <p>${escapeHtml(enquiry.details).replaceAll("\n", "<br />")}</p>
  `;
}

function buildMailtoHref(enquiry: Enquiry) {
  const subject = `Project enquiry: ${enquiry.company}`;
  const body = buildEmailText(enquiry);

  return `mailto:${contactEmail}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;
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

async function sendWithResend(enquiry: Enquiry) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !from) {
    if (process.env.NODE_ENV !== "production") {
      console.info("Contact form email delivery is not configured.", {
        projectType: enquiry.projectType,
        budget: enquiry.budget,
        timeline: enquiry.timeline,
        hasUrl: Boolean(enquiry.url),
      });
    }

    return {
      ok: false,
      reason: "missing-configuration" as const,
    };
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [contactEmail],
      reply_to: enquiry.email,
      subject: `Project enquiry: ${enquiry.company}`,
      text: buildEmailText(enquiry),
      html: buildEmailHtml(enquiry),
    }),
  });

  return {
    ok: response.ok,
    reason: response.ok ? ("sent" as const) : ("provider-error" as const),
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

  try {
    const result = await sendWithResend(enquiry);

    if (result.ok) {
      return {
        status: "success",
        message:
          "Your project details were sent. I will review them and respond with the clearest next step.",
        errors: {},
      };
    }

    if (result.reason === "missing-configuration") {
      return {
        status: "error",
        message:
          "This form is validated, but email delivery is not configured yet. Use the email draft below so the enquiry is not lost.",
        errors: {},
        mailtoHref: buildMailtoHref(enquiry),
      };
    }

    return {
      status: "error",
      message:
        "The email provider did not accept the message. Please use the email draft below instead.",
      errors: {},
      mailtoHref: buildMailtoHref(enquiry),
    };
  } catch {
    return {
      status: "error",
      message:
        "The form could not reach the email provider. Please use the email draft below instead.",
      errors: {},
      mailtoHref: buildMailtoHref(enquiry),
    };
  }
}
