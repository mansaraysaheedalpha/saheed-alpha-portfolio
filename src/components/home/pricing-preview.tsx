import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/layout/container";
import { pricingOptions, type PricingOption } from "@/data/pricing";

type PricingOptionPreviewProps = {
  option: PricingOption;
  index: number;
};

function PricingOptionPreview({ option, index }: PricingOptionPreviewProps) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <article
      className={[
        "grid gap-6 border p-6 transition-colors duration-300 sm:p-7 lg:grid-cols-[0.78fr_0.22fr] lg:items-start",
        option.featured
          ? "border-blue-300/20 bg-blue-400/[0.045] hover:border-blue-300/35"
          : "border-white/[0.08] bg-white/[0.025] hover:border-blue-300/20",
      ].join(" ")}
    >
      <div>
        <div className="flex flex-wrap items-center gap-3">
          <span
            className="font-mono text-xs font-medium tracking-[0.22em] text-blue-300"
            aria-hidden="true"
          >
            {number}
          </span>

          {option.featured && (
            <span className="rounded-full border border-blue-300/15 bg-blue-300/[0.06] px-3 py-1 text-xs font-medium text-blue-100">
              Clearest scope
            </span>
          )}
        </div>

        <h3 className="mt-5 text-2xl font-semibold tracking-tight text-white">
          {option.name}
        </h3>

        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">
          {option.description}
        </p>

        <p className="mt-5 border-l border-blue-300/25 pl-4 text-sm leading-7 text-slate-300">
          {option.supportingDetail}
        </p>
      </div>

      <div className="border-t border-white/[0.08] pt-5 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
        <p className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500">
          Pricing cue
        </p>
        <p className="mt-3 text-xl font-semibold tracking-tight text-white">
          {option.pricingCue}
        </p>
      </div>
    </article>
  );
}

export function PricingPreview() {
  return (
    <section className="relative isolate overflow-hidden bg-[#07111f] py-24 text-white sm:py-28">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-white/[0.08]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(37,99,235,0.11),transparent_28%),radial-gradient(circle_at_82%_72%,rgba(14,165,233,0.055),transparent_30%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.02)_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>

      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.84fr_1.16fr] lg:gap-14">
          <div className="max-w-2xl">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-blue-300">
              Pricing
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-5xl">
              Clear pricing for focused product development.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-400">
              Choose a fixed project, a focused development engagement, or
              ongoing technical support based on the scope and certainty of
              your requirements.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/pricing" showArrow>
                View Full Pricing
              </ButtonLink>

              <ButtonLink href="/contact" variant="secondary" showArrow>
                Discuss Your Project
              </ButtonLink>
            </div>

            <p className="mt-8 border border-white/[0.08] bg-white/[0.025] p-5 text-sm leading-7 text-slate-400">
              Final pricing depends on complexity, design requirements,
              integrations, urgency, and the condition of any existing codebase.
            </p>
          </div>

          <div className="grid gap-5">
            {pricingOptions.map((option, index) => (
              <PricingOptionPreview
                key={option.slug}
                option={option}
                index={index}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
