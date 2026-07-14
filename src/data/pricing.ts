export type PricingOption = {
  slug: string;
  name: string;
  description: string;
  supportingDetail: string;
  pricingCue: string;
  featured?: boolean;
};

export const pricingOptions: PricingOption[] = [
  {
    slug: "fixed-price-project",
    name: "Fixed-Price Project",
    description:
      "Best for clearly defined websites, dashboards, MVPs, feature builds, and AI-powered products with agreed deliverables and timelines.",
    supportingDetail:
      "A written scope, milestones, exclusions, and final project price are agreed before development begins.",
    pricingCue: "Projects from $500",
    featured: true,
  },
  {
    slug: "hourly-development-support",
    name: "Hourly Development Support",
    description:
      "Best for bug fixes, product improvements, integrations, maintenance, technical troubleshooting, and work with evolving requirements.",
    supportingDetail:
      "Flexible support without committing to a complete project package.",
    pricingCue: "$20-$25/hour",
  },
  {
    slug: "focused-development-sprint",
    name: "Focused Development Sprint",
    description:
      "A dedicated block of development time for implementing features, resolving issues, improving an existing product, or preparing for launch.",
    supportingDetail:
      "Useful when a founder needs concentrated progress without a long engagement.",
    pricingCue: "Quoted by scope and duration",
  },
];
