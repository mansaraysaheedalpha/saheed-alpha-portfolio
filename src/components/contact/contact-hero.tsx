import { Container } from "@/components/layout/container";

const reassurances = [
  "No-pressure first conversation",
  "Clear scope before development begins",
  "Remote collaboration worldwide",
  "Complete source-code ownership",
];

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className="h-4 w-4 text-blue-300"
    >
      <path
        d="m5 10.5 3 3L15 6.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

export function ContactHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#07111f] py-24 text-white sm:py-28 lg:py-32">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[linear-gradient(115deg,#07111f_0%,#081425_48%,#0b1728_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_20%,rgba(37,99,235,0.16),transparent_32%),radial-gradient(circle_at_78%_70%,rgba(14,165,233,0.07),transparent_30%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.025)_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>

      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-end">
          <div className="max-w-4xl">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-blue-300">
              START A CONVERSATION
            </p>

            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
              Tell me what you are building.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400 sm:text-xl">
              Share the product idea, current challenge, desired result, and any
              important constraints. I&apos;ll review the details and respond
              with the clearest next step.
            </p>
          </div>

          <div className="border-t border-white/[0.08] pt-7 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
              Good fit markers
            </p>

            <ul className="mt-5 grid gap-4">
              {reassurances.map((reassurance) => (
                <li
                  key={reassurance}
                  className="flex items-center gap-3 text-sm leading-6 text-slate-300"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-blue-400/20 bg-blue-400/[0.06]">
                    <CheckIcon />
                  </span>
                  <span>{reassurance}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
