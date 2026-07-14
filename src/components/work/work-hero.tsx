import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/layout/container";

export function WorkHero() {
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
        <div className="max-w-4xl">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-blue-300">
            Selected Work
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-5xl lg:text-[4rem]">
            Products designed, built, and shipped to production.
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400 sm:text-xl">
            A selection of full-stack platforms, AI-powered products,
            institutional systems, and professional digital experiences built
            from idea through deployment.
          </p>
        </div>

        <div className="mt-8 grid gap-6 border-t border-white/[0.08] pt-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <p className="max-w-3xl text-sm leading-7 text-slate-400">
            The repositories for most projects are private, but the live
            products, architecture, workflows, and development decisions can be
            discussed during a project conversation.
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
