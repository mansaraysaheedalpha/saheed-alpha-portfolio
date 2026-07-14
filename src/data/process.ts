export type ProcessStep = {
  slug: string;
  title: string;
  description: string;
  outcome: string;
  objective: string;
  clientResponsibilities: string[];
  developerResponsibilities: string[];
  deliverable: string;
  decision: string;
};

export const processSteps: ProcessStep[] = [
  {
    slug: "discover",
    title: "Discover",
    objective:
      "Understand the business problem, users, constraints, and desired outcome.",
    description:
      "We begin with a focused conversation about your product idea, users, business objective, current challenges, and what a successful result should accomplish.",
    clientResponsibilities: [
      "Share product context, business goals, current materials, and known constraints.",
      "Explain the target users and what a successful result needs to accomplish.",
    ],
    developerResponsibilities: [
      "Ask focused questions, identify assumptions, and clarify the core problem.",
      "Separate confirmed requirements from items that still need investigation.",
    ],
    deliverable: "Discovery notes and initial project direction.",
    decision:
      "Confirm the core problem, desired outcome, and whether the project is ready to scope.",
    outcome: "Shared understanding of the problem and project priorities.",
  },
  {
    slug: "define",
    title: "Define",
    objective: "Turn the idea into an achievable scope.",
    description:
      "The product is reduced into an achievable scope with agreed features, exclusions, timeline, milestones, responsibilities, and pricing.",
    clientResponsibilities: [
      "Confirm priorities, budget range, timeline needs, and approved exclusions.",
      "Respond to scope questions before development commitments are made.",
    ],
    developerResponsibilities: [
      "Define features, milestones, dependencies, timeline, and pricing.",
      "Document what is included, what is excluded, and what each side owns.",
    ],
    deliverable: "Written scope document.",
    decision:
      "Approve the written scope, exclusions, timeline, responsibilities, and pricing.",
    outcome: "A written scope before development begins.",
  },
  {
    slug: "design",
    title: "Design",
    objective: "Define how the product should work and feel.",
    description:
      "We establish the user flows, page structure, interface direction, and technical approach required to support the agreed product experience.",
    clientResponsibilities: [
      "Provide references, brand assets, content, or existing designs.",
      "Review the proposed product direction against the approved scope.",
    ],
    developerResponsibilities: [
      "Create user flows, page structure, interface direction, and technical plan.",
      "Clarify technical dependencies before production build work begins.",
    ],
    deliverable: "Approved product and implementation direction.",
    decision:
      "Approve the product direction, key screens, user flow, and implementation approach.",
    outcome: "A clear plan for what will be built and how it should work.",
  },
  {
    slug: "build",
    title: "Build",
    objective: "Develop working software in visible stages.",
    description:
      "The product is developed in visible stages with regular progress updates, milestone reviews, and opportunities to confirm that the work remains aligned.",
    clientResponsibilities: [
      "Review milestones and provide timely, consolidated feedback.",
      "Confirm decisions that affect the next development stage.",
    ],
    developerResponsibilities: [
      "Implement frontend, backend, database, APIs, and agreed features.",
      "Share progress, flag risks early, and prepare working milestone releases.",
    ],
    deliverable: "Working milestone releases.",
    decision:
      "Accept each milestone or identify corrections before the next stage continues.",
    outcome: "Working software reviewed throughout development.",
  },
  {
    slug: "launch",
    title: "Launch",
    objective: "Prepare and release the product for real users.",
    description:
      "The completed application is tested, configured, deployed to production, connected to the required domain and services, and prepared for real users.",
    clientResponsibilities: [
      "Provide required production accounts, domain access, and final approval.",
      "Confirm launch timing and any business constraints around release.",
    ],
    developerResponsibilities: [
      "Test, configure environments, deploy, connect services, and verify production behaviour.",
      "Check the production flow against the approved launch requirements.",
    ],
    deliverable: "Live production application.",
    decision:
      "Approve production readiness, launch timing, and final release conditions.",
    outcome: "A functioning production product, not just unfinished source code.",
  },
  {
    slug: "support",
    title: "Support",
    objective: "Complete revisions and transfer ownership.",
    description:
      "After launch, the agreed revision round, documentation, source-code handoff, and post-launch support are completed.",
    clientResponsibilities: [
      "Submit the structured revision list within the agreed period.",
      "Review documentation and confirm ownership access after handoff.",
    ],
    developerResponsibilities: [
      "Complete agreed revisions, documentation, repository handoff, and support.",
      "Transfer the final source code and production ownership cleanly.",
    ],
    deliverable: "Final source code, documentation, and production ownership.",
    decision:
      "Approve the revision list, final documentation, source-code handoff, and ownership transfer.",
    outcome: "A clean handoff with full product ownership.",
  },
];
