export type Advantage = {
  slug: string;
  title: string;
  description: string;
  proof: string;
  emphasized?: boolean;
};

export const advantages: Advantage[] = [
  {
    slug: "direct-developer-access",
    title: "Direct Developer Access",
    description:
      "You communicate directly with the person designing and building the product. There are no account managers, handoff chains, or unnecessary communication layers.",
    proof: "One point of contact from discovery through deployment.",
    emphasized: true,
  },
  {
    slug: "practical-product-thinking",
    title: "Practical Product Thinking",
    description:
      "I help reduce large ideas into clear, achievable releases so you can launch sooner and avoid paying for features your first users may not need.",
    proof: "Scope based on business goals, not feature count.",
  },
  {
    slug: "clear-communication",
    title: "Clear Communication",
    description:
      "You receive straightforward progress updates, visible milestones, and honest explanations of technical decisions, risks, and trade-offs.",
    proof: "Written scope, agreed milestones, and structured revisions.",
  },
  {
    slug: "complete-ownership",
    title: "Complete Ownership",
    description:
      "Your finished product is delivered through GitHub with full source-code ownership. There is no proprietary lock-in and no requirement to continue using my services after handoff.",
    proof: "You own the code, accounts, and production setup.",
    emphasized: true,
  },
  {
    slug: "flexible-engagement",
    title: "Flexible Engagement",
    description:
      "Projects can be handled as a fixed-scope build, a focused development sprint, or ongoing hourly support depending on what your product needs.",
    proof: "Fixed project pricing or $20-$25/hour support.",
  },
  {
    slug: "production-focused-delivery",
    title: "Production-Focused Delivery",
    description:
      "The engagement does not end with code on a laptop. The product is configured, deployed, tested, and prepared for real users.",
    proof: "Deployment, environment setup, and handoff included.",
  },
];
