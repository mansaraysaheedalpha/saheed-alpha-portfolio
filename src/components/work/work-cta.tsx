import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/layout/container";

export function WorkCta() {
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
              Building something similar?
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-400">
              Share your product idea, current challenge, or unfinished
              application, and I&apos;ll help identify the clearest path to a
              working release.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row lg:flex-col xl:flex-row">
            <ButtonLink href="/contact" showArrow>
              Discuss Your Project
            </ButtonLink>

            <ButtonLink href="/services" variant="secondary" showArrow>
              View Services & Pricing
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
