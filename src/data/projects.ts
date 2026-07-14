export type Project = {
  slug: string;
  name: string;
  url: string;
  category: string;
  summary: string;
  technologies: string[];
  coverImage: string;
  coverPosition?: string;
  workPageSummary?: string;
  whatWasBuilt?: string;
  outcome?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "neuralaunch",
    name: "NeuraLaunch",
    url: "https://startupvalidator.app",
    category: "AI-native SaaS",
    summary:
      "An AI-powered startup validation platform that helps founders analyse business ideas through structured research and actionable insights.",
    technologies: ["Next.js", "TypeScript", "AI workflows", "SaaS product UX"],
    coverImage: "/images/projects/neuralaunch/cover.png",
    coverPosition: "center center",
    whatWasBuilt:
      "An AI-native SaaS platform combining structured discovery, recommendation logic, execution planning, persistent user workspaces, and production deployment.",
    outcome:
      "A production SaaS experience that turns founder input into structured product direction and next-step planning.",
    featured: true,
  },
  {
    slug: "event-dynamics",
    name: "Event Dynamics",
    url: "https://eventdynamics.io",
    category: "Event platform",
    summary:
      "A modern event-focused digital platform designed to organise event information and provide a responsive product experience.",
    technologies: ["Next.js", "TypeScript", "Responsive UI", "Platform design"],
    coverImage: "/images/projects/eventdynamics/cover.png",
    coverPosition: "center top",
    outcome:
      "A responsive event platform supporting discovery, event creation, audience engagement, and installable PWA behaviour.",
  },
  {
    slug: "wiatech",
    name: "WIATech",
    url: "https://wiatech.sl",
    category: "Institutional platform",
    summary:
      "A comprehensive technology-institute website presenting academic programmes, admissions information, and prospective-student pathways.",
    technologies: ["Next.js", "Content architecture", "Admissions UX", "Responsive UI"],
    coverImage: "/images/projects/wiatech/cover.png",
    coverPosition: "center top",
    outcome:
      "A content-rich institutional platform organising programmes, admissions pathways, campaign messaging, and prospective-student journeys.",
  },
  {
    slug: "tabempa-engineering",
    name: "Tabempa Engineering",
    url: "https://tabempa.com",
    category: "Corporate website",
    summary:
      "A professional company website communicating technical services, organisational credibility, and business positioning.",
    technologies: ["Next.js", "Service positioning", "Corporate UI", "Responsive UI"],
    coverImage: "/images/projects/tabempa/cover.png",
    coverPosition: "left top",
    outcome:
      "A professional corporate website establishing service credibility, product positioning, and a polished technical brand presence.",
  },
];
