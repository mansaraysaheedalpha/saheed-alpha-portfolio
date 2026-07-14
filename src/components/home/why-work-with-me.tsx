import Link from "next/link";

import { AdvantageItem } from "@/components/home/advantage-item";
import { Container } from "@/components/layout/container";
import { advantages } from "@/data/advantages";

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

export function WhyWorkWithMe() {
  return (
    <section className="relative isolate overflow-hidden bg-[#07111f] py-24 text-white sm:py-28">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-white/[0.08]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#07111f_0%,#09182a_52%,#07111f_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(37,99,235,0.1),transparent_30%),radial-gradient(circle_at_84%_74%,rgba(14,165,233,0.045),transparent_28%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.018)_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>

      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-blue-300">
              Why Work With Me
            </p>

            <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-5xl">
              Direct collaboration. Practical execution. No agency layers.
            </h2>

            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-400">
              You work directly with the developer responsible for planning,
              building, and launching your product. That means faster
              decisions, clearer communication, and less overhead between your
              idea and the finished product.
            </p>

            <div className="mt-8 border border-white/[0.08] bg-white/[0.025] p-5">
              <p className="text-sm font-medium leading-7 text-slate-200">
                No account managers. No proprietary lock-in. No hidden handoff
                chain.
              </p>
            </div>

            <Link
              href="/process"
              className="group mt-6 inline-flex w-fit items-center gap-2 rounded-full px-1 py-2 text-sm font-medium text-blue-200 transition-colors duration-300 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
            >
              <span>See how projects are delivered</span>
              <ArrowIcon />
            </Link>
          </div>

          <div className="border-b border-white/[0.08]">
            {advantages.map((advantage, index) => (
              <AdvantageItem
                key={advantage.slug}
                advantage={advantage}
                index={index}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
