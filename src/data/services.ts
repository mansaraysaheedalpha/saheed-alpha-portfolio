export type Service = {
  slug: string;
  name: string;
  description: string;
  bestFor: string[];
  homepageBestFor?: string[];
  typicalDelivery: string;
  startingRange: string;
  href: string;
  badge?: string;
  featured?: boolean;
};

export const services: Service[] = [
  {
    slug: "starter-build",
    name: "Starter Build",
    description:
      "A focused development engagement for a small web application, dashboard, dynamic landing page, internal tool, or clearly defined feature.",
    bestFor: [
      "Dynamic landing pages",
      "Simple dashboards",
      "CRUD applications",
      "Internal tools",
      "Feature modules",
      "Product prototypes",
    ],
    homepageBestFor: [
      "Dynamic landing pages",
      "Dashboards and internal tools",
      "Feature modules",
      "Product prototypes",
    ],
    typicalDelivery: "1-2 weeks",
    startingRange: "$500-$1,200",
    href: "/services",
  },
  {
    slug: "mvp-launch",
    name: "MVP Launch",
    description:
      "A complete minimum viable product for founders preparing to launch, onboard early users, validate demand, or demonstrate a product to investors.",
    bestFor: [
      "SaaS MVPs",
      "Customer portals",
      "Service platforms",
      "Membership products",
      "Management systems",
      "Data-driven applications",
    ],
    homepageBestFor: [
      "SaaS MVPs",
      "Customer portals",
      "Service platforms",
      "Management systems",
    ],
    typicalDelivery: "3-5 weeks",
    startingRange: "$2,000-$4,500",
    href: "/services",
    badge: "Recommended",
    featured: true,
  },
  {
    slug: "ai-powered-product-build",
    name: "AI-Powered Product Build",
    description:
      "A production-ready web application with AI or LLM capabilities integrated into its core workflow, user experience, or business logic.",
    bestFor: [
      "AI-native SaaS products",
      "Research and analysis tools",
      "AI-assisted workflows",
      "Recommendation systems",
      "Document applications",
      "Existing products adding AI features",
    ],
    homepageBestFor: [
      "AI-native SaaS products",
      "Research and analysis tools",
      "AI-assisted workflows",
      "Existing products adding AI features",
    ],
    typicalDelivery: "4-7 weeks",
    startingRange: "$4,500-$8,000",
    href: "/services",
  },
];
