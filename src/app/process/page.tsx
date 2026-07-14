import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/ui/button-link";
import { processSteps } from "@/data/process";

export const metadata: Metadata = {
  title: {
    absolute: "Process | Saheed Alpha Mansaray",
  },
  description:
    "See how full-stack development projects move from discovery and written scope through design, development, deployment, and source-code handoff.",
};

const visibilityItems = [
  "Written scope before development",
  "Agreed communication channel",
  "Progress updates",
  "Milestone demonstrations",
  "Documented changes",
  "Structured revision rounds",
  "Early reporting of risks and blockers",
];

const scopePolicies = [
  "Changes are normal, especially as a product becomes more concrete.",
  "Small clarifications may fit within the approved scope when they do not change the agreed outcome.",
  "New features or major changes require revised timing and pricing before work continues.",
  "No surprise work is added without approval from both sides.",
  "Important changes are documented so the scope remains clear.",
];

const preparationItems = [
  "Business objective",
  "Target users",
  "Required features",
  "Examples or reference products",
  "Available content",
  "Branding assets",
  "Budget range",
  "Desired timeline",
  "Existing technical access",
  "Known constraints",
];

function Eyebrow({ children }: { children: string }) {
  return (
    <p className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-blue-300">
      {children}
    </p>
  );
}

function SectionHeader({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl">
      <Eyebrow>{label}</Eyebrow>
      <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-lg leading-8 text-slate-400">{description}</p>
    </div>
  );
}

function ResponsibilityList({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="border border-white/[0.08] bg-white/[0.025] p-5">
      <h4 className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-blue-300">
        {title}
      </h4>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="text-sm leading-6 text-slate-300">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProcessHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#07111f] pb-12 pt-8 text-white sm:pb-14 sm:pt-10 lg:pb-16 lg:pt-12">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[linear-gradient(115deg,#07111f_0%,#081425_48%,#0b1728_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_20%,rgba(37,99,235,0.16),transparent_32%),radial-gradient(circle_at_80%_70%,rgba(14,165,233,0.07),transparent_30%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.025)_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>

      <Container>
        <div className="max-w-5xl">
          <Eyebrow>Delivery Process</Eyebrow>

          <h1 className="mt-4 max-w-5xl text-4xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-5xl lg:text-[4rem]">
            A structured engagement from first conversation to final handoff.
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400 sm:text-xl">
            Each project follows a clear sequence with defined decisions,
            visible progress, written responsibilities, and agreed milestones.
          </p>
        </div>

        <div className="mt-8 grid gap-6 border-t border-white/[0.08] pt-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <p className="max-w-3xl text-sm leading-7 text-slate-400">
            You always know what is being built, what comes next, and what is
            expected from both sides.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
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

function FullProcessStages() {
  return (
    <section className="bg-[#081425] py-20 text-white sm:py-24">
      <Container>
        <SectionHeader
          label="Full process stages"
          title="Six decisions from discovery to ownership."
          description="Every stage has a defined objective, visible work, client responsibilities, Alpha's responsibilities, a deliverable, and a decision before moving forward."
        />

        <ol className="mt-14 space-y-10">
          {processSteps.map((step, index) => {
            const number = String(index + 1).padStart(2, "0");

            return (
              <li key={step.slug} className="relative pl-12 lg:pl-0">
                {index !== processSteps.length - 1 && (
                  <span
                    className="absolute bottom-[-2.5rem] left-[17px] top-10 w-px bg-white/[0.1] lg:left-[22px]"
                    aria-hidden="true"
                  />
                )}

                <article className="grid gap-8 border-t border-white/[0.08] pt-8 lg:grid-cols-[176px_1fr]">
                  <div>
                    <span className="absolute left-0 top-8 flex h-9 w-9 items-center justify-center rounded-full border border-blue-400/25 bg-blue-400/[0.08] font-mono text-[11px] font-medium text-blue-200 lg:static">
                      {number}
                    </span>
                    <p className="mt-5 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-blue-300">
                      Stage {number}
                    </p>
                    <h3 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white">
                      {step.title}
                    </h3>
                  </div>

                  <div className="grid gap-6">
                    <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                      <div>
                        <h4 className="text-base font-semibold text-white">
                          Objective
                        </h4>
                        <p className="mt-3 text-sm leading-7 text-slate-400">
                          {step.objective}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-base font-semibold text-white">
                          What happens
                        </h4>
                        <p className="mt-3 text-sm leading-7 text-slate-400">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <ResponsibilityList
                        title="Client responsibilities"
                        items={step.clientResponsibilities}
                      />
                      <ResponsibilityList
                        title="Alpha's responsibilities"
                        items={step.developerResponsibilities}
                      />
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="border-l border-blue-400/40 pl-4">
                        <p className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-blue-300">
                          Key deliverable
                        </p>
                        <p className="mt-2 text-sm font-medium leading-6 text-slate-200">
                          {step.deliverable}
                        </p>
                      </div>

                      <div className="border-l border-white/[0.16] pl-4">
                        <p className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">
                          Decision before moving forward
                        </p>
                        <p className="mt-2 text-sm font-medium leading-6 text-slate-200">
                          {step.decision}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}

function CommunicationAndVisibility() {
  return (
    <section className="bg-[#07111f] py-20 text-white sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeader
            label="Project visibility"
            title="Communication stays written, visible, and tied to milestones."
            description="The engagement starts with a written scope, then continues through an agreed communication channel, regular updates, milestone demonstrations, documented changes, and structured revision rounds."
          />

          <div className="grid gap-3 sm:grid-cols-2">
            {visibilityItems.map((item) => (
              <div
                key={item}
                className="border border-white/[0.08] bg-white/[0.025] p-5"
              >
                <p className="text-sm font-medium leading-6 text-slate-200">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-10 max-w-4xl border-l border-blue-400/40 pl-5 text-sm leading-7 text-slate-400">
          Risks, blockers, dependency gaps, and decision points are raised early
          so they can be handled before they affect delivery.
        </p>
      </Container>
    </section>
  );
}

function ScopeChangePolicy() {
  return (
    <section className="bg-[#081425] py-20 text-white sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeader
            label="Scope-change policy"
            title="Adjustments are handled clearly before they become hidden work."
            description="Product decisions can change as new information appears. The process is designed to make those changes explicit, priced when needed, and agreed before implementation."
          />

          <div className="space-y-4">
            {scopePolicies.map((policy, index) => (
              <div
                key={policy}
                className="grid gap-4 border-t border-white/[0.08] pt-5 sm:grid-cols-[64px_1fr]"
              >
                <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-blue-300">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="text-sm leading-7 text-slate-300">{policy}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function ClientPreparation() {
  return (
    <section className="bg-[#07111f] py-20 text-white sm:py-24">
      <Container>
        <SectionHeader
          label="Client preparation"
          title="Bring the practical inputs that shape the first release."
          description="The process moves faster when the key business, product, content, and access details are available before scope is finalized."
        />

        <ul className="mt-12 grid gap-px overflow-hidden border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-5">
          {preparationItems.map((item) => (
            <li key={item} className="bg-[#07111f] p-5">
              <p className="text-sm font-medium leading-6 text-slate-200">
                {item}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="relative isolate overflow-hidden bg-[#081425] py-20 text-white sm:py-24">
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
              Ready to define the first practical release?
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-400">
              Share the product idea, current materials, and desired outcome.
              The first step is identifying what should, and should not, be
              included.
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

export default function ProcessPage() {
  return (
    <main>
      <ProcessHero />
      <FullProcessStages />
      <CommunicationAndVisibility />
      <ScopeChangePolicy />
      <ClientPreparation />
      <FinalCta />
    </main>
  );
}
