import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/ui/button-link";
import type { Service } from "@/data/services";

type ServicesPageProps = {
  services: Service[];
};

type PackageDetail = {
  audience: string;
  deliverables: string[];
};

const engagementGroups = [
  {
    title: "Planning and scope",
    items: [
      "Discovery and scoping call",
      "Written scope and agreed deliverables",
      "UI/UX support where required",
    ],
  },
  {
    title: "Product development",
    items: [
      "Frontend and backend development",
      "Database and API integration",
      "Responsive interface implementation",
    ],
  },
  {
    title: "Launch and handoff",
    items: [
      "Deployment and hosting setup",
      "Structured revision round",
      "Source-code handoff through GitHub",
      "Complete client ownership",
    ],
  },
];

const packageDetails: Record<string, PackageDetail> = {
  "starter-build": {
    audience:
      "Founders or small businesses with a focused build, a defined feature, or a compact internal workflow that needs to move quickly.",
    deliverables: [
      "Scoped product flow or feature plan",
      "Responsive frontend implementation",
      "Backend logic for the agreed workflow",
      "Database or third-party API integration where required",
      "Production deployment and GitHub handoff",
    ],
  },
  "mvp-launch": {
    audience:
      "Founders who need a complete first release that can onboard users, validate demand, support demos, or operate as a real business tool.",
    deliverables: [
      "MVP scope and release plan",
      "Core user journeys and product screens",
      "Authentication, data handling, and business logic where required",
      "Admin, dashboard, or customer-facing workflows",
      "Production deployment, revisions, and source-code handoff",
    ],
  },
  "ai-powered-product-build": {
    audience:
      "Teams building an AI-native product or adding practical AI workflows to an existing business process or web application.",
    deliverables: [
      "AI workflow planning and product logic",
      "Prompt, model, or API integration for the agreed use case",
      "Full-stack application development",
      "User-facing outputs, dashboards, or review flows",
      "Production deployment with source-code handoff",
    ],
  },
};

const supportItems = [
  "Bug fixes",
  "Feature development",
  "API integrations",
  "Performance improvements",
  "Interface redesign",
  "Deployment troubleshooting",
  "Codebase cleanup",
  "Ongoing maintenance",
];

const designNotes = [
  "Clients can provide Figma designs, wireframes, sketches, or reference examples.",
  "Interface design can be included when the product needs clearer screens or flows.",
  "Design requirements must be agreed during scoping before development begins.",
  "Design work affects the project quote and delivery timeline.",
];

const exclusions = [
  "Native iOS and Android applications",
  "React Native applications",
  "Copywriting",
  "Content production",
  "Advanced SEO campaigns",
  "Hosting fees",
  "Domains",
  "Third-party subscriptions",
  "Paid API usage",
  "Unlimited revisions",
  "Features outside the written scope",
  "Ongoing maintenance after handoff unless separately agreed",
];

export function ServicesHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#07111f] pb-12 pt-8 text-white sm:pb-14 sm:pt-10 lg:pb-16 lg:pt-12">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[linear-gradient(125deg,#07111f_0%,#081425_52%,#0b1728_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(37,99,235,0.15),transparent_30%),radial-gradient(circle_at_84%_70%,rgba(14,165,233,0.06),transparent_28%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.026)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.026)_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>

      <Container>
        <div className="max-w-4xl">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-blue-300">
            SHIPSTACK SERVICES
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-5xl lg:text-[4rem]">
            Full-stack product development from scope to production.
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400 sm:text-xl">
            I help early-stage founders and small businesses turn product
            ideas, manual processes, and unfinished applications into dependable
            web products.
          </p>
        </div>

        <div className="mt-8 grid gap-6 border-t border-white/[0.08] pt-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <p className="max-w-3xl text-sm leading-7 text-slate-400">
            You work directly with me throughout discovery, planning,
            development, deployment, and handoff, without agency communication
            layers or proprietary lock-in.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="/contact" showArrow>
              Discuss Your Project
            </ButtonLink>

            <ButtonLink href="/pricing" variant="secondary" showArrow>
              View Pricing
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function EngagementInclusions() {
  return (
    <section className="bg-[#081425] py-20 text-white sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-blue-300">
              Included in every engagement
            </p>

            <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-5xl">
              Clear scope, full-stack delivery, and a clean handoff.
            </h2>
          </div>

          <div className="border-y border-white/[0.08]">
            {engagementGroups.map((group) => (
              <section
                key={group.title}
                className="grid gap-5 border-t border-white/[0.08] py-7 first:border-t-0 sm:grid-cols-[190px_1fr]"
              >
                <h3 className="text-base font-semibold tracking-[-0.01em] text-white">
                  {group.title}
                </h3>

                <ul className="grid gap-3 sm:grid-cols-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-6 text-slate-300"
                    >
                      <span
                        className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-blue-400"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export function ServicePackages({ services }: ServicesPageProps) {
  return (
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
            Service packages
          </p>

          <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-5xl">
            Choose the engagement shape that fits the product stage.
          </h2>
        </div>

        <div className="mt-12 grid gap-6">
          {services.map((service) => {
            const detail = packageDetails[service.slug];

            return (
              <article
                key={service.slug}
                className={[
                  "grid gap-8 border p-6 sm:p-8 lg:grid-cols-[0.85fr_1.15fr]",
                  service.featured
                    ? "border-blue-300/22 bg-blue-400/[0.045]"
                    : "border-white/[0.08] bg-white/[0.025]",
                ].join(" ")}
              >
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-3xl font-semibold tracking-[-0.03em] text-white">
                      {service.name}
                    </h3>

                    {service.badge && (
                      <span className="rounded-full border border-blue-300/15 bg-blue-300/[0.06] px-3 py-1 text-xs font-medium text-blue-100">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <p className="mt-4 text-base leading-7 text-slate-400">
                    {service.description}
                  </p>

                  <div className="mt-7 grid gap-4 border-t border-white/[0.08] pt-6 sm:grid-cols-2">
                    <div>
                      <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-blue-300">
                        Pricing range
                      </p>
                      <p className="mt-2 text-2xl font-semibold tracking-[-0.02em] text-white">
                        {service.startingRange}
                      </p>
                    </div>

                    <div>
                      <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-blue-300">
                        Typical delivery
                      </p>
                      <p className="mt-2 text-2xl font-semibold tracking-[-0.02em] text-white">
                        {service.typicalDelivery}
                      </p>
                    </div>
                  </div>

                  <ButtonLink
                    href="/contact"
                    showArrow
                    className="mt-8"
                    variant={service.featured ? "primary" : "secondary"}
                  >
                    Discuss This Package
                  </ButtonLink>
                </div>

                <div className="grid gap-7">
                  <section>
                    <h4 className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-blue-300">
                      Who it is for
                    </h4>
                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      {detail.audience}
                    </p>
                  </section>

                  <section>
                    <h4 className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-blue-300">
                      Included deliverables
                    </h4>
                    <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                      {detail.deliverables.map((deliverable) => (
                        <li
                          key={deliverable}
                          className="flex gap-3 text-sm leading-6 text-slate-300"
                        >
                          <span
                            className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-blue-400"
                            aria-hidden="true"
                          />
                          <span>{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section>
                    <h4 className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-blue-300">
                      Example product types
                    </h4>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {service.bestFor.map((item) => (
                        <li
                          key={item}
                          className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-slate-300"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </section>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export function ExistingProductSupport() {
  return (
    <section className="bg-[#081425] py-20 text-white sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-blue-300">
              Product support
            </p>

            <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-5xl">
              Already have a product?
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
              I also support existing products that need focused technical
              help, cleaner interfaces, integrations, deployment support, or
              steady maintenance.
            </p>
          </div>

          <div>
            <div className="border border-white/[0.08] bg-white/[0.025] p-6 sm:p-8">
              <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
                {supportItems.map((item) => (
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

              <p className="mt-8 border-t border-white/[0.08] pt-6 text-sm leading-7 text-slate-400">
                Development support is available from{" "}
                <span className="font-semibold text-white">$20-$25/hour</span>,
                with scope and availability agreed before work begins.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function UiUxFlexibility() {
  return (
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
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-blue-300">
              UI/UX flexibility
            </p>

            <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-5xl">
              Design input can match the project reality.
            </h2>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {designNotes.map((note) => (
              <li
                key={note}
                className="border border-white/[0.08] bg-white/[0.025] p-5 text-sm leading-7 text-slate-300"
              >
                {note}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

export function ExclusionsSection() {
  return (
    <section className="bg-[#081425] py-20 text-white sm:py-24">
      <Container>
        <div className="grid gap-10 border-y border-white/[0.08] py-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-blue-300">
              Scope boundaries
            </p>

            <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-5xl">
              What is not included by default.
            </h2>
          </div>

          <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {exclusions.map((item) => (
              <li
                key={item}
                className="flex gap-3 border-t border-white/[0.08] pt-4 text-sm font-medium leading-6 text-slate-300"
              >
                <span
                  className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-slate-500"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

export function ServicesCta() {
  return (
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
              Not sure which engagement fits your project?
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-400">
              Share what you are building, your current stage, and the outcome
              you need. I&apos;ll help identify the smallest practical
              engagement that can move the product forward.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row lg:flex-col xl:flex-row">
            <ButtonLink href="/contact" showArrow>
              Discuss Your Project
            </ButtonLink>

            <ButtonLink href="/pricing" variant="secondary" showArrow>
              View Pricing
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
