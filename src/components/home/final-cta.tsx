import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/layout/container";

const reassurances = [
  "No-pressure first conversation",
  "Clear scope before development begins",
  "Remote collaboration worldwide",
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
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className="h-4 w-4"
    >
      <path
        d="M3.5 6.5 10 11l6.5-4.5M5 16h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FinalCta() {
  return (
    <section className="relative isolate overflow-hidden bg-[#07111f] py-24 text-white sm:py-28">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-white/[0.08]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#07111f_0%,#09182a_48%,#07111f_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_22%,rgba(37,99,235,0.13),transparent_31%),radial-gradient(circle_at_78%_72%,rgba(14,165,233,0.06),transparent_30%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.018)_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>

      <Container>
        <div className="relative overflow-hidden border border-white/[0.1] bg-white/[0.03] px-6 py-12 sm:px-8 sm:py-14 lg:px-12 lg:py-16">
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/45 to-transparent"
            aria-hidden="true"
          />

          <div className="relative grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-16">
            <div className="max-w-4xl">
              <p className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-blue-300">
                Ready to build?
              </p>

              <h2 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
                Have an idea to launch or a product that needs improvement?
              </h2>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
                Tell me what you are building, where you are currently stuck,
                and what a successful result would look like. I&apos;ll help
                you identify the clearest next step.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <ButtonLink href="/contact" showArrow>
                  Discuss Your Project
                </ButtonLink>

                <a
                  href="mailto:mansalphasaheed@gmail.com"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.035] px-5 py-3 text-sm font-medium text-white transition-colors duration-300 hover:border-white/25 hover:bg-white/[0.07] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
                >
                  <MailIcon />
                  <span>Email Me</span>
                </a>
              </div>
            </div>

            <div className="border-t border-white/[0.08] pt-7 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <p className="max-w-sm text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
                What to expect
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

              <div className="mt-8 border-t border-white/[0.08] pt-6">
                <a
                  href="mailto:mansalphasaheed@gmail.com"
                  className="text-sm font-medium text-blue-200 transition-colors duration-300 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
                >
                  mansalphasaheed@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
