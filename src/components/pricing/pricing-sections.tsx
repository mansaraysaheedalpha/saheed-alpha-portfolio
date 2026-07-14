import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/layout/container";
import type { PricingOption } from "@/data/pricing";
import type { Service } from "@/data/services";

type PackageDetail = {
  expectedScope: string;
  inclusions: string[];
  priceDrivers: string[];
};

type PackagePricingProps = {
  services: Service[];
};

type AlternativeEngagementModelsProps = {
  options: PricingOption[];
};

const packageDetails: Record<string, PackageDetail> = {
  "starter-build": {
    expectedScope:
      "A compact product or feature with a clear user flow, limited integrations, and a focused delivery target.",
    inclusions: [
      "Responsive interface implementation",
      "Core application flow",
      "Basic data handling",
      "Production deployment support",
    ],
    priceDrivers: [
      "Custom design depth",
      "Authentication or permissions",
      "Multiple user roles",
      "Additional integrations",
    ],
  },
  "mvp-launch": {
    expectedScope:
      "A complete launchable product with the essential workflows needed to onboard users and validate demand.",
    inclusions: [
      "Product structure and key screens",
      "Full-stack feature implementation",
      "Database-backed workflows",
      "Testing, deployment, and handoff",
    ],
    priceDrivers: [
      "Complex business logic",
      "Payment processing",
      "Admin dashboards",
      "Advanced permissions",
    ],
  },
  "ai-powered-product-build": {
    expectedScope:
      "A production-ready application where AI or LLM functionality is part of the core product experience.",
    inclusions: [
      "AI workflow design",
      "Prompt and response handling",
      "Application interface and backend",
      "Deployment and integration support",
    ],
    priceDrivers: [
      "LLM workflow complexity",
      "Document or data processing",
      "External API costs",
      "Quality controls and evaluation needs",
    ],
  },
};

const pricingFactors = [
  {
    title: "Product scope",
    description:
      "More screens, workflows, permissions, and edge cases increase planning, implementation, and testing effort.",
    items: [
      "Number and complexity of features",
      "Authentication and permissions",
      "Revision requirements",
      "Existing codebase condition",
    ],
  },
  {
    title: "Experience and integrations",
    description:
      "Design requirements and third-party systems affect the amount of coordination, implementation detail, and validation required.",
    items: [
      "UI/UX design requirements",
      "Third-party integrations",
      "Payment processing",
      "Data migration",
    ],
  },
  {
    title: "Technical delivery",
    description:
      "Products with AI workflows, deployment constraints, or compressed timelines need more careful engineering and review.",
    items: [
      "AI and LLM workflows",
      "Deployment complexity",
      "Urgency",
      "Testing and launch readiness",
    ],
  },
];

const engagementModelDetails: Record<string, { label: string; value: string }[]> = {
  "fixed-price-project": [
    {
      label: "Best for",
      value: "Clearly defined deliverables and stable requirements.",
    },
    {
      label: "How it works",
      value: "A final quote is agreed before development begins.",
    },
  ],
  "hourly-development-support": [
    {
      label: "Rate",
      value: "$20-$25/hour",
    },
    {
      label: "Best for",
      value:
        "Bug fixes, maintenance, integrations, improvements, troubleshooting, and changing requirements.",
    },
  ],
  "focused-development-sprint": [
    {
      label: "Pricing",
      value: "Quoted by scope and duration.",
    },
    {
      label: "Best for",
      value: "Concentrated delivery over a defined period.",
    },
  ],
};

const paymentTerms = [
  "Fixed projects require an initial deposit before development begins.",
  "Remaining payments may be tied to agreed milestones.",
  "Third-party costs are paid directly by the client.",
  "Work outside scope requires a separate quote or hourly approval.",
  "Project timing depends on timely feedback, access, and content from the client.",
  "Final source-code handoff occurs according to the agreed payment terms.",
];

const faqs = [
  {
    question: "Can you work within a smaller budget?",
    answer:
      "Sometimes. If the budget is limited, the best approach is to reduce scope to the clearest first release rather than compressing quality or skipping essential setup.",
  },
  {
    question: "Do you provide a final quote before starting?",
    answer:
      "Yes. Fixed projects begin only after the scope, deliverables, exclusions, timeline, responsibilities, and price are agreed in writing.",
  },
  {
    question: "What happens when the scope changes?",
    answer:
      "New work is handled through a separate quote or approved hourly support so the original agreement remains clear.",
  },
  {
    question: "Are hosting and API fees included?",
    answer:
      "No. Hosting, domains, paid APIs, AI usage, email services, and other third-party costs are paid directly by the client.",
  },
  {
    question: "Do you offer ongoing support?",
    answer:
      "Yes. Ongoing support is available for improvements, maintenance, integrations, troubleshooting, and product iteration.",
  },
  {
    question: "Do I own the source code?",
    answer:
      "Yes. Source-code handoff and ownership are handled according to the agreed payment and handoff terms.",
  },
  {
    question: "Can an existing product be improved instead of rebuilt?",
    answer:
      "Yes. Existing products can often be improved through focused fixes, feature work, performance improvements, or UX refinements after reviewing the current codebase.",
  },
];

export function PricingHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#07111f] pb-12 pt-8 text-white sm:pb-14 sm:pt-10 lg:pb-16 lg:pt-12">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[linear-gradient(115deg,#07111f_0%,#081425_52%,#0b1728_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(37,99,235,0.14),transparent_30%),radial-gradient(circle_at_84%_58%,rgba(14,165,233,0.055),transparent_28%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.024)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.024)_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>

      <Container>
        <div className="max-w-4xl">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-blue-300">
            Pricing
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-5xl lg:text-[4rem]">
            Clear commercial options for building and improving web products.
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400 sm:text-xl">
            Choose a fixed-scope project, a focused development sprint, or
            flexible hourly support based on how clearly the requirements are
            defined.
          </p>

          <p className="mt-6 max-w-3xl border-l border-blue-300/30 pl-5 text-sm font-medium leading-7 text-slate-200">
            Every fixed project begins with an agreed written scope covering
            deliverables, exclusions, timeline, milestones, responsibilities,
            and price.
          </p>

          <div className="mt-7 flex flex-col gap-4 sm:flex-row">
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
  );
}

export function PackagePricing({ services }: PackagePricingProps) {
  return (
    <section className="relative isolate overflow-hidden bg-[#081425] py-24 text-white sm:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-white/[0.08]" />

      <Container>
        <div className="max-w-3xl">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-blue-300">
            Package Pricing
          </p>

          <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-5xl">
            Full package ranges for common product builds.
          </h2>
        </div>

        <div className="mt-12 grid gap-6">
          {services.map((service, index) => {
            const detail = packageDetails[service.slug];

            return (
              <article
                key={service.slug}
                className={[
                  "grid gap-8 border p-6 sm:p-8 lg:grid-cols-[0.82fr_1.18fr]",
                  service.featured
                    ? "border-blue-300/20 bg-blue-400/[0.045]"
                    : "border-white/[0.08] bg-white/[0.025]",
                ].join(" ")}
              >
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className="font-mono text-xs font-medium tracking-[0.22em] text-blue-300"
                      aria-hidden="true"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {service.badge && (
                      <span className="rounded-full border border-blue-300/15 bg-blue-300/[0.06] px-3 py-1 text-xs font-medium text-blue-100">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="mt-5 text-3xl font-semibold tracking-tight text-white">
                    {service.name}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {service.description}
                  </p>

                  <dl className="mt-6 grid gap-4 border-t border-white/[0.08] pt-6 sm:grid-cols-2">
                    <div>
                      <dt className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500">
                        Price range
                      </dt>
                      <dd className="mt-2 text-2xl font-semibold tracking-tight text-white">
                        {service.startingRange}
                      </dd>
                    </div>

                    <div>
                      <dt className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500">
                        Delivery estimate
                      </dt>
                      <dd className="mt-2 text-2xl font-semibold tracking-tight text-white">
                        {service.typicalDelivery}
                      </dd>
                    </div>
                  </dl>

                  <div className="mt-7">
                    <ButtonLink href="/contact" showArrow>
                      Start a Project
                    </ButtonLink>
                  </div>
                </div>

                <div className="grid gap-6">
                  <div>
                    <h4 className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-blue-300">
                      Best suited for
                    </h4>
                    <ul className="mt-4 grid gap-2 text-sm leading-6 text-slate-300 sm:grid-cols-2">
                      {service.bestFor.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid gap-5 border-t border-white/[0.08] pt-6 lg:grid-cols-3">
                    <div>
                      <h4 className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-blue-300">
                        Expected scope
                      </h4>
                      <p className="mt-3 text-sm leading-7 text-slate-400">
                        {detail.expectedScope}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-blue-300">
                        Typical inclusions
                      </h4>
                      <ul className="mt-3 grid gap-2 text-sm leading-6 text-slate-300">
                        {detail.inclusions.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-blue-300">
                        What can increase price
                      </h4>
                      <ul className="mt-3 grid gap-2 text-sm leading-6 text-slate-300">
                        {detail.priceDrivers.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export function AlternativeEngagementModels({
  options,
}: AlternativeEngagementModelsProps) {
  return (
    <section className="relative isolate overflow-hidden bg-[#07111f] py-24 text-white sm:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-white/[0.08]" />

      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-blue-300">
              Engagement Models
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-5xl">
              Choose the structure that matches the certainty of the work.
            </h2>
          </div>

          <div className="grid gap-5">
            {options.map((option) => (
              <article
                key={option.slug}
                className={[
                  "grid gap-5 border p-6 sm:p-7 lg:grid-cols-[0.72fr_0.28fr]",
                  option.featured
                    ? "border-blue-300/20 bg-blue-400/[0.045]"
                    : "border-white/[0.08] bg-white/[0.025]",
                ].join(" ")}
              >
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight text-white">
                    {option.name}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {option.description}
                  </p>

                  <p className="mt-4 border-l border-blue-300/25 pl-4 text-sm leading-7 text-slate-300">
                    {option.supportingDetail}
                  </p>
                </div>

                <dl className="grid gap-5 border-t border-white/[0.08] pt-5 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
                  {(engagementModelDetails[option.slug] ?? []).map((detail) => (
                    <div key={detail.label}>
                      <dt className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500">
                        {detail.label}
                      </dt>
                      <dd className="mt-2 text-sm font-medium leading-6 text-slate-200">
                        {detail.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export function PricingFactors() {
  return (
    <section className="relative isolate overflow-hidden bg-[#081425] py-24 text-white sm:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-white/[0.08]" />

      <Container>
        <div className="max-w-3xl">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-blue-300">
            What Affects Pricing
          </p>

          <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-5xl">
            Final pricing depends on the shape of the product, not a generic
            package label.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {pricingFactors.map((group) => (
            <article
              key={group.title}
              className="border border-white/[0.08] bg-white/[0.025] p-6 sm:p-7"
            >
              <h3 className="text-2xl font-semibold tracking-tight text-white">
                {group.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                {group.description}
              </p>

              <ul className="mt-6 grid gap-3 border-t border-white/[0.08] pt-6 text-sm leading-6 text-slate-300">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function PaymentTerms() {
  return (
    <section className="relative isolate overflow-hidden bg-[#07111f] py-24 text-white sm:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-white/[0.08]" />

      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-blue-300">
              Payment and Project Terms
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-5xl">
              Clear terms before development begins.
            </h2>
          </div>

          <ol className="grid gap-4">
            {paymentTerms.map((term, index) => (
              <li
                key={term}
                className="grid gap-4 border border-white/[0.08] bg-white/[0.025] p-5 sm:grid-cols-[72px_1fr]"
              >
                <span
                  className="font-mono text-xs font-medium tracking-[0.22em] text-blue-300"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="text-sm leading-7 text-slate-300">{term}</p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}

export function PricingFaq() {
  return (
    <section className="relative isolate overflow-hidden bg-[#081425] py-24 text-white sm:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-white/[0.08]" />

      <Container>
        <div className="max-w-3xl">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-blue-300">
            Pricing FAQ
          </p>

          <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-5xl">
            Common questions before scoping a project.
          </h2>
        </div>

        <div className="mt-12 border-y border-white/[0.08]">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group border-t border-white/[0.08] py-6 first:border-t-0"
            >
              <summary className="cursor-pointer list-none text-lg font-semibold tracking-tight text-white transition-colors hover:text-blue-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400">
                {faq.question}
              </summary>

              <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-400">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function PricingCta() {
  return (
    <section className="relative isolate overflow-hidden bg-[#07111f] py-24 text-white sm:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-white/[0.08]" />

      <Container>
        <div className="border border-white/[0.1] bg-white/[0.03] p-6 sm:p-8 lg:p-12">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-5xl">
              Have a scope, budget, or unfinished product to discuss?
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              Send the current details and I&apos;ll help determine whether a
              fixed project, sprint, or hourly engagement makes the most sense.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href="/contact" showArrow>
                Discuss Your Project
              </ButtonLink>

              <ButtonLink href="/services" variant="secondary" showArrow>
                View Services
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
