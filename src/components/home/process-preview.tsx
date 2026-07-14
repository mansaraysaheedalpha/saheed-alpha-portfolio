import Link from "next/link";

import { ProcessStepItem } from "@/components/home/process-step";
import { Container } from "@/components/layout/container";
import { processSteps } from "@/data/process";

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

export function ProcessPreview() {
  return (
    <section className="relative isolate overflow-hidden bg-[#081425] py-24 text-white sm:py-28">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-white/[0.08]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(37,99,235,0.1),transparent_30%),radial-gradient(circle_at_82%_62%,rgba(14,165,233,0.05),transparent_30%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.02)_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>

      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-blue-300">
              How Projects Are Delivered
            </p>

            <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-5xl">
              A clear path from idea to production.
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
              Every engagement follows a structured process with defined
              decisions, visible progress, and agreed responsibilities at each
              stage.
            </p>
          </div>

          <Link
            href="/process"
            className="group inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/[0.035] px-5 py-3 text-sm font-medium text-white transition-colors duration-300 hover:border-white/25 hover:bg-white/[0.07] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
          >
            <span>View the full delivery process</span>
            <ArrowIcon />
          </Link>
        </div>

        <ol className="mt-14 grid gap-8 lg:grid-cols-6">
          {processSteps.map((step, index) => (
            <ProcessStepItem
              key={step.slug}
              step={step}
              index={index}
              isLast={index === processSteps.length - 1}
            />
          ))}
        </ol>

        <div className="mt-12 border border-white/[0.08] bg-white/[0.025] p-6">
          <p className="max-w-4xl text-sm font-medium leading-7 text-slate-200">
            You always know what is being built, what comes next, and what is
            expected from both sides.
          </p>
        </div>
      </Container>
    </section>
  );
}
