import Link from "next/link";
import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/ui/button-link";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: {
    absolute: "About | Saheed Alpha Mansaray",
  },
  description:
    "Learn about Saheed Alpha Mansaray, an independent full-stack developer building websites, MVPs, dashboards, business systems, and AI-powered applications for international clients.",
};

const principles = [
  {
    title: "Understand the real problem",
    description:
      "Development begins with the business objective and user need, not a technology list.",
  },
  {
    title: "Reduce scope intelligently",
    description:
      "Large ideas are shaped into achievable releases that can be built, tested, and improved.",
  },
  {
    title: "Explain important decisions",
    description:
      "Technical choices, risks, assumptions, and trade-offs are communicated clearly.",
  },
  {
    title: "Finish in production",
    description:
      "The goal is a deployed and usable product, not unfinished code on a local machine.",
  },
];

const buildTypes = [
  "Business websites",
  "SaaS MVPs",
  "Dashboards",
  "Internal tools",
  "Customer portals",
  "Management systems",
  "AI-powered workflows",
  "API-integrated applications",
  "Responsive and PWA experiences",
];

const collaborationPoints = [
  "Remote collaboration from day one",
  "Asynchronous communication where appropriate",
  "Scheduled calls across time zones",
  "GitHub-based delivery",
  "Cloud-based development and deployment",
  "International payment arrangements agreed before work begins",
];

const workingDetails = [
  {
    label: "Location",
    value: "Sierra Leone",
  },
  {
    label: "Collaboration",
    value: "Remote worldwide",
  },
  {
    label: "Engagement",
    value: "Fixed projects, development sprints, or hourly support",
  },
  {
    label: "Communication",
    value: "Direct from discovery through deployment",
  },
  {
    label: "Ownership",
    value: "Complete source-code handoff",
  },
];

const proofSlugs = [
  "neuralaunch",
  "event-dynamics",
  "wiatech",
  "tabempa-engineering",
];

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
    >
      <path
        d="M4 10h12M11 5l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function AboutPage() {
  const proofProjects = proofSlugs
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((project): project is (typeof projects)[number] => Boolean(project));

  return (
    <main>
      <section className="relative isolate overflow-hidden bg-[#07111f] pb-12 pt-8 text-white sm:pb-14 sm:pt-10 lg:pb-16 lg:pt-12">
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-[linear-gradient(125deg,#07111f_0%,#081425_52%,#0b1728_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(37,99,235,0.14),transparent_28%),radial-gradient(circle_at_86%_68%,rgba(14,165,233,0.06),transparent_30%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.026)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.026)_1px,transparent_1px)] bg-[size:72px_72px]" />
        </div>

        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-blue-300">
                ABOUT
              </p>

              <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-5xl lg:text-[4rem]">
                A hands-on developer focused on turning ambitious ideas into
                working products.
              </h1>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400 sm:text-xl">
                I&apos;m Saheed Alpha Mansaray, an independent full-stack
                developer based in Sierra Leone and working remotely with
                founders and small businesses internationally.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <ButtonLink href="/contact" showArrow>
                  Discuss Your Project
                </ButtonLink>

                <ButtonLink href="/work" variant="secondary" showArrow>
                  View My Work
                </ButtonLink>
              </div>
            </div>

            <aside
              aria-label="Working details"
              className="border-y border-white/[0.08] bg-white/[0.025] p-6 sm:p-8"
            >
              <dl className="grid gap-6">
                {workingDetails.map((detail) => (
                  <div
                    key={detail.label}
                    className="grid gap-2 border-t border-white/[0.08] pt-6 first:border-t-0 first:pt-0"
                  >
                    <dt className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-blue-300">
                      {detail.label}
                    </dt>

                    <dd className="text-base font-medium leading-7 text-slate-200">
                      {detail.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>
        </Container>
      </section>

      <section className="bg-[#081425] py-20 text-white sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-blue-300">
                Professional introduction
              </p>

              <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-5xl">
                Product thinking paired with hands-on engineering.
              </h2>
            </div>

            <div className="grid gap-5 text-lg leading-8 text-slate-400">
              <p>
                I build responsive websites, SaaS products, dashboards,
                internal tools, and AI-powered web applications from initial
                scoping through production deployment.
              </p>

              <p>
                My role is not limited to writing code. I help clients clarify
                the business objective, identify the essential first release,
                make practical technical decisions, and move the product into
                production.
              </p>

              <p>
                I work directly with clients throughout the engagement, which
                keeps communication clear and reduces unnecessary handoffs.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative isolate overflow-hidden bg-[#07111f] py-20 text-white sm:py-24">
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          aria-hidden="true"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-white/[0.08]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(37,99,235,0.1),transparent_30%),radial-gradient(circle_at_78%_74%,rgba(14,165,233,0.045),transparent_28%)]" />
        </div>

        <Container>
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-blue-300">
              Approach
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-5xl">
              How I approach product development.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {principles.map((principle, index) => (
              <article
                key={principle.title}
                className="border border-white/[0.08] bg-white/[0.025] p-6 sm:p-7"
              >
                <p className="font-mono text-xs font-medium text-blue-300">
                  0{index + 1}
                </p>

                <h3 className="mt-5 text-2xl font-semibold tracking-[-0.02em] text-white">
                  {principle.title}
                </h3>

                <p className="mt-4 text-base leading-7 text-slate-400">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#081425] py-20 text-white sm:py-24">
        <Container>
          <div className="grid gap-10 border-y border-white/[0.08] py-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <div>
              <p className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-blue-300">
                What I build
              </p>

              <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-5xl">
                Practical digital products for focused business needs.
              </h2>
            </div>

            <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
              {buildTypes.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 border-t border-white/[0.08] pt-4 text-sm font-medium leading-6 text-slate-300"
                >
                  <span
                    className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-blue-400"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="relative isolate overflow-hidden bg-[#07111f] py-20 text-white sm:py-24">
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          aria-hidden="true"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-white/[0.08]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#07111f_0%,#09182a_54%,#07111f_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.018)_1px,transparent_1px)] bg-[size:72px_72px]" />
        </div>

        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-blue-300">
                Remote collaboration
              </p>

              <h2 className="mt-5 max-w-2xl text-4xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-5xl">
                Working internationally from Sierra Leone.
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
                Remote delivery is built into the way I work: clear written
                communication, scheduled calls when needed, shared repositories,
                and cloud-based development workflows from discovery through
                deployment.
              </p>
            </div>

            <ul className="grid gap-4 sm:grid-cols-2">
              {collaborationPoints.map((point) => (
                <li
                  key={point}
                  className="border border-white/[0.08] bg-white/[0.025] p-5 text-sm font-medium leading-6 text-slate-300"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-[#081425] py-20 text-white sm:py-24">
        <Container>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-blue-300">
                Selected proof
              </p>

              <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-5xl">
                A compact reference point for recent work.
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
                These projects show the kind of practical web products,
                platforms, and business systems I build and ship.
              </p>
            </div>

            <Link
              href="/work"
              className="group inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/[0.035] px-5 py-3 text-sm font-medium text-white transition-colors duration-300 hover:border-white/25 hover:bg-white/[0.07] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
            >
              <span>View My Work</span>
              <ArrowIcon />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {proofProjects.map((project) => (
              <Link
                key={project.slug}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-white/[0.08] bg-white/[0.025] p-5 transition-colors duration-300 hover:border-blue-300/35 hover:bg-white/[0.045] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
              >
                <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-blue-300">
                  {project.category}
                </p>

                <h3 className="mt-4 text-xl font-semibold tracking-[-0.02em] text-white">
                  {project.name}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {project.summary}
                </p>

                <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-blue-200">
                  <span>Open project</span>
                  <ArrowIcon />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative isolate overflow-hidden bg-[#07111f] py-20 text-white sm:py-24">
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          aria-hidden="true"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-white/[0.08]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_40%,rgba(37,99,235,0.14),transparent_30%),radial-gradient(circle_at_78%_74%,rgba(14,165,233,0.055),transparent_28%)]" />
        </div>

        <Container>
          <div className="grid gap-8 border border-white/[0.08] bg-white/[0.025] p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-end lg:p-10">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-semibold tracking-[-0.035em] text-white sm:text-5xl">
                Looking for a developer who can take responsibility beyond the
                code?
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-400">
                Share the idea, business problem, or current product state, and
                I&apos;ll help determine the clearest technical next step.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col xl:flex-row">
              <ButtonLink href="/contact" showArrow>
                Discuss Your Project
              </ButtonLink>

              <ButtonLink href="/services" variant="secondary" showArrow>
                View Services
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
