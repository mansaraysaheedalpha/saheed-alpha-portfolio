import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/layout/container";

type AboutDetail = {
  label: string;
  value: string;
};

const aboutDetails: AboutDetail[] = [
  {
    label: "Location",
    value: "Sierra Leone",
  },
  {
    label: "Collaboration",
    value: "Remote worldwide",
  },
  {
    label: "Focus",
    value: "Web applications, MVPs, dashboards, and AI integration",
  },
  {
    label: "Working style",
    value: "Direct communication from discovery through deployment",
  },
];

export function AboutPreview() {
  return (
    <section className="relative isolate overflow-hidden bg-[#07111f] py-24 text-white sm:py-28">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-white/[0.08]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#07111f_0%,#09182a_54%,#07111f_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(37,99,235,0.1),transparent_30%),radial-gradient(circle_at_82%_68%,rgba(14,165,233,0.045),transparent_28%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.018)_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>

      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.04fr_0.96fr] lg:gap-16">
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-blue-300">
              About
            </p>

            <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-5xl">
              A hands-on developer focused on turning ideas into working
              products.
            </h2>

            <div className="mt-6 grid gap-5 text-lg leading-8 text-slate-400">
              <p>
                I&apos;m Saheed Alpha Mansaray, an independent full-stack
                developer based in Sierra Leone and working with founders and
                small businesses internationally.
              </p>

              <p>
                I build responsive websites, SaaS products, dashboards,
                internal tools, and AI-powered web applications from initial
                scoping through production deployment.
              </p>

              <p>
                My approach combines practical product thinking, clear
                communication, and hands-on engineering. I work directly with
                clients throughout the engagement, helping reduce ambitious
                ideas into focused releases that can be built, tested, and
                launched.
              </p>
            </div>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href="/about" showArrow>
                More About Me
              </ButtonLink>

              <ButtonLink href="/contact" variant="secondary" showArrow>
                Discuss Your Project
              </ButtonLink>
            </div>
          </div>

          <aside
            className="border-y border-white/[0.08] lg:self-center"
            aria-label="About Alpha"
          >
            <dl>
              {aboutDetails.map((detail) => (
                <div
                  key={detail.label}
                  className="grid gap-3 border-t border-white/[0.08] py-6 first:border-t-0 sm:grid-cols-[160px_1fr]"
                >
                  <dt className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-blue-300">
                    {detail.label}
                  </dt>

                  <dd className="text-base font-medium leading-7 text-slate-200">
                    {detail.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="border-t border-white/[0.08] py-6">
              <p className="max-w-xl text-sm leading-7 text-slate-400">
                Built for clients who need a practical product partner, not a
                handoff chain or a generic template build.
              </p>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
