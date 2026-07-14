export const contactEmail = "mansalphasaheed@gmail.com";

export const projectTypes = [
  "Business website",
  "Landing page",
  "MVP",
  "Dashboard or internal tool",
  "AI-powered product",
  "Existing-product improvement",
  "Bug fixes or technical support",
  "Not sure yet",
] as const;

export const budgetRanges = [
  "Under $500",
  "$500-$1,200",
  "$1,200-$2,000",
  "$2,000-$4,500",
  "$4,500-$8,000",
  "Over $8,000",
  "Not sure yet",
] as const;

export const timelineOptions = [
  "As soon as practical",
  "Within 2-4 weeks",
  "Within 1-2 months",
  "Within 3 months",
  "Flexible",
  "Not sure yet",
] as const;

export type FormField =
  | "name"
  | "email"
  | "company"
  | "need"
  | "projectType"
  | "url"
  | "budget"
  | "timeline"
  | "details"
  | "consent";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
  errors: Partial<Record<FormField, string>>;
  mailtoHref?: string;
};

export type Enquiry = {
  name: string;
  email: string;
  company: string;
  need: string;
  projectType: (typeof projectTypes)[number];
  url: string;
  budget: (typeof budgetRanges)[number];
  timeline: (typeof timelineOptions)[number];
  details: string;
};

export const initialContactFormState: ContactFormState = {
  status: "idle",
  message: "",
  errors: {},
};
