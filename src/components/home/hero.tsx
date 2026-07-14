import Image from "next/image";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/layout/container";
import heroPortrait from "../../../public/images/hero/alpha-portrait.png";

const capabilities = [
  "Full-stack product development",
  "AI and LLM integration",
  "Production deployment",
  "Complete source-code ownership",
];

export function Hero() {
  return (
    <section className="relative isolate min-h-[calc(100vh-70px)] overflow-hidden bg-[#07111f] text-white">
      <div
        className="pointer-events-none absolute inset-0 -z-30"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[linear-gradient(115deg,#07111f_0%,#081425_45%,#0b1728_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_34%,rgba(37,99,235,0.18),transparent_34%),radial-gradient(circle_at_58%_100%,rgba(14,165,233,0.07),transparent_34%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.03)_1px,transparent_1px)] bg-[size:72px_72px]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,31,0)_0%,#07111f_100%)]" />
      </div>

      <div className="absolute inset-x-0 bottom-0 top-[46%] -z-20 opacity-45 sm:top-[34%] lg:bottom-[10%] lg:left-[38%] lg:right-[4%] lg:top-0 lg:opacity-100">
        <div
          className="absolute bottom-[12%] left-[24%] right-[10%] top-[20%] rounded-full bg-blue-500/10 blur-[100px]"
          aria-hidden="true"
        />

        <Image
          src={heroPortrait}
          alt="Alpha Mansaray, independent full-stack developer"
          fill
          preload
          placeholder="blur"
          sizes="(min-width: 1280px) 58vw, (min-width: 1024px) 56vw, 100vw"
          className="object-contain object-bottom saturate-[0.98] contrast-[1.03] drop-shadow-[0_30px_64px_rgba(0,0,0,0.4)]"
        />

        <div
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,31,0)_0%,rgba(7,17,31,0)_62%,#07111f_100%)]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(90deg,#07111f_0%,rgba(7,17,31,0.92)_18%,rgba(7,17,31,0.42)_36%,rgba(7,17,31,0)_64%)]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_64%_42%,rgba(37,99,235,0.12),transparent_30%)]"
          aria-hidden="true"
        />
      </div>

      <Container className="relative z-10">
        <div className="grid min-h-[calc(100vh-70px)] items-center gap-12 py-20 lg:grid-cols-[1.08fr_0.92fr] lg:pt-6 lg:pb-0">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 rounded-full border border-blue-400/15 bg-blue-400/[0.055] px-4 py-2">
              <span
                className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_14px_rgba(96,165,250,0.75)]"
                aria-hidden="true"
              />

              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-blue-300 sm:text-xs">
                Independent Full-Stack Developer
              </p>
            </div>

            <h1 className="mt-7 max-w-[18ch] text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-white sm:text-[3.05rem] lg:text-[3.35rem]">
              I build reliable web products for founders and small businesses.
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-400 sm:text-xl">
              I help early-stage founders and growing businesses design, build
              and launch websites, MVPs, dashboards and AI-powered web
              applications without traditional agency overhead.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href="/contact" showArrow>
                Discuss Your Project
              </ButtonLink>

              <ButtonLink href="/work" variant="secondary" showArrow>
                View Selected Work
              </ButtonLink>
            </div>

            <div className="mt-11 border-t border-white/[0.08] pt-7">
              <ul className="grid max-w-3xl gap-x-8 gap-y-4 text-sm text-slate-400 sm:grid-cols-2">
                {capabilities.map((capability) => (
                  <li key={capability} className="flex items-center gap-3">
                    <span
                      className="flex h-5 w-5 items-center justify-center rounded-full border border-blue-400/20 bg-blue-400/[0.06]"
                      aria-hidden="true"
                    >
                      <svg
                        viewBox="0 0 20 20"
                        fill="none"
                        className="h-3 w-3 text-blue-400"
                      >
                        <path
                          d="m6 10 2.5 2.5L14 7"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>

                    {capability}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="hidden lg:block" aria-hidden="true" />
        </div>
      </Container>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-28 bg-gradient-to-t from-[#07111f] via-[#07111f]/80 to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}
