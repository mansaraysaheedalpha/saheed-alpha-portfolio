import type { Metadata } from "next";
import Link from "next/link";

const effectiveDate = "July 2026";
const contactEmail = "mansalphasaheed@gmail.com";

const sections = [
  {
    id: "acceptance-of-terms",
    title: "Acceptance of terms",
  },
  {
    id: "website-purpose",
    title: "Website purpose",
  },
  {
    id: "no-automatic-service-agreement",
    title: "No automatic service agreement",
  },
  {
    id: "pricing-information",
    title: "Pricing information",
  },
  {
    id: "project-agreements",
    title: "Project agreements",
  },
  {
    id: "intellectual-property",
    title: "Intellectual property",
  },
  {
    id: "acceptable-use",
    title: "Acceptable use",
  },
  {
    id: "external-links",
    title: "External links",
  },
  {
    id: "website-availability",
    title: "Website availability",
  },
  {
    id: "informational-limitations",
    title: "Informational limitations",
  },
  {
    id: "limitation-language",
    title: "Limitation language",
  },
  {
    id: "privacy",
    title: "Privacy",
  },
  {
    id: "changes-to-terms",
    title: "Changes to terms",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const metadata: Metadata = {
  title: {
    absolute: "Terms of Use | Saheed Alpha Mansaray",
  },
  description:
    "Terms governing use of the Saheed Alpha Mansaray portfolio and development-services website.",
};

export default function TermsPage() {
  return (
    <main className="bg-[#07111f] text-white">
      <section className="relative isolate overflow-hidden border-b border-white/[0.08] py-20 sm:py-24 lg:py-28">
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-[linear-gradient(115deg,#07111f_0%,#081425_52%,#0b1728_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(37,99,235,0.14),transparent_32%),radial-gradient(circle_at_80%_72%,rgba(14,165,233,0.06),transparent_30%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.025)_1px,transparent_1px)] bg-[size:72px_72px]" />
        </div>

        <div className="mx-auto w-full max-w-4xl px-6 lg:px-8">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-blue-300">
            Terms of Use
          </p>

          <h1 className="mt-5 text-5xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-6xl">
            Website terms for this portfolio and services site.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400 sm:text-xl">
            These terms explain how visitors may use this website. They are
            general website-use terms and are separate from any written project
            agreement for a specific client engagement.
          </p>

          <p className="mt-6 text-sm leading-7 text-slate-500">
            Effective date:{" "}
            <span className="font-medium text-slate-300">{effectiveDate}</span>
          </p>
        </div>
      </section>

      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[280px_minmax(0,1fr)] lg:px-8 lg:py-20">
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <nav aria-label="Terms of use sections" className="border-l border-white/[0.1] pl-5">
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-blue-300">
              Contents
            </p>

            <ol className="mt-5 grid gap-3">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="inline-flex text-sm leading-6 text-slate-400 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>

        <div className="max-w-3xl">
          <div className="space-y-14 text-base leading-8 text-slate-300">
            <section id="acceptance-of-terms" className="scroll-mt-28">
              <h2 className="text-2xl font-semibold tracking-tight text-white">
                Acceptance of terms
              </h2>
              <p className="mt-4">
                By accessing or using this website, you agree to these general
                website-use terms. If you do not agree with them, you should not
                use the website.
              </p>
            </section>

            <section id="website-purpose" className="scroll-mt-28">
              <h2 className="text-2xl font-semibold tracking-tight text-white">
                Website purpose
              </h2>
              <p className="mt-4">
                This website presents software-development services, displays
                selected project work, provides general pricing guidance, and
                allows visitors to make project enquiries.
              </p>
            </section>

            <section id="no-automatic-service-agreement" className="scroll-mt-28">
              <h2 className="text-2xl font-semibold tracking-tight text-white">
                No automatic service agreement
              </h2>
              <p className="mt-4">
                Submitting a form, sending an email, arranging a call, or
                viewing pricing information does not create a development
                contract or require either side to start a project.
              </p>
              <p className="mt-4">
                A project begins only after both sides agree to written
                commercial terms for that project. Those terms may be signed,
                accepted by email, or otherwise confirmed in writing.
              </p>
            </section>

            <section id="pricing-information" className="scroll-mt-28">
              <h2 className="text-2xl font-semibold tracking-tight text-white">
                Pricing information
              </h2>
              <p className="mt-4">
                Pricing shown on this website is general guidance only. Final
                pricing depends on the agreed scope, requirements, complexity,
                timelines, integrations, and other relevant project factors.
              </p>
              <p className="mt-4">
                Quotes may change if requirements, assumptions, deliverables, or
                requested timelines change. Third-party costs, including
                hosting, domains, software subscriptions, APIs, stock assets, or
                specialist services, are separate unless they are explicitly
                included in a project agreement.
              </p>
            </section>

            <section id="project-agreements" className="scroll-mt-28">
              <h2 className="text-2xl font-semibold tracking-tight text-white">
                Project agreements
              </h2>
              <p className="mt-4">
                Signed or otherwise accepted project-specific terms override any
                conflicting general information on this website for the relevant
                project.
              </p>
              <p className="mt-4">
                Project agreements may define scope, deliverables, exclusions,
                milestones, payment terms, revisions, intellectual property,
                support, and termination.
              </p>
            </section>

            <section id="intellectual-property" className="scroll-mt-28">
              <h2 className="text-2xl font-semibold tracking-tight text-white">
                Intellectual property
              </h2>
              <p className="mt-4">
                The portfolio site&apos;s original design, text, and
                presentation may not be copied, republished, or reused without
                permission.
              </p>
              <p className="mt-4">
                Displayed third-party names and trademarks belong to their
                respective owners. Project screenshots and descriptions are
                shown for portfolio purposes.
              </p>
              <p className="mt-4">
                Ownership of client source code, project assets, and related
                rights is governed by the applicable project agreement, not by
                these general website terms.
              </p>
            </section>

            <section id="acceptable-use" className="scroll-mt-28">
              <h2 className="text-2xl font-semibold tracking-tight text-white">
                Acceptable use
              </h2>
              <p className="mt-4">Visitors must not:</p>
              <ul className="mt-4 list-disc space-y-2 pl-6 marker:text-blue-300">
                <li>attack or disrupt the website;</li>
                <li>attempt unauthorised access;</li>
                <li>submit malicious code;</li>
                <li>use automated systems abusively;</li>
                <li>impersonate another person; or</li>
                <li>submit unlawful or misleading content.</li>
              </ul>
            </section>

            <section id="external-links" className="scroll-mt-28">
              <h2 className="text-2xl font-semibold tracking-tight text-white">
                External links
              </h2>
              <p className="mt-4">
                External links may be provided for convenience or context. Alpha
                does not control every third-party website and is not
                responsible for changes made by third-party site operators.
              </p>
            </section>

            <section id="website-availability" className="scroll-mt-28">
              <h2 className="text-2xl font-semibold tracking-tight text-white">
                Website availability
              </h2>
              <p className="mt-4">
                The website may be updated, changed, suspended, or unavailable
                at times, including for maintenance, improvements, technical
                issues, or operational reasons.
              </p>
            </section>

            <section id="informational-limitations" className="scroll-mt-28">
              <h2 className="text-2xl font-semibold tracking-tight text-white">
                Informational limitations
              </h2>
              <p className="mt-4">
                Portfolio descriptions, pricing ranges, timelines, and service
                explanations are general information. They are not guarantees
                that the same approach, price, outcome, or delivery timeline
                will apply to every project.
              </p>
            </section>

            <section id="limitation-language" className="scroll-mt-28">
              <h2 className="text-2xl font-semibold tracking-tight text-white">
                Limitation language
              </h2>
              <p className="mt-4">
                The website is provided on an as-available basis to the extent
                permitted by applicable law.
              </p>
            </section>

            <section id="privacy" className="scroll-mt-28">
              <h2 className="text-2xl font-semibold tracking-tight text-white">
                Privacy
              </h2>
              <p className="mt-4">
                Information about how personal information is handled is
                provided in the{" "}
                <Link
                  href="/privacy"
                  className="font-medium text-blue-200 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </section>

            <section id="changes-to-terms" className="scroll-mt-28">
              <h2 className="text-2xl font-semibold tracking-tight text-white">
                Changes to terms
              </h2>
              <p className="mt-4">
                These terms may be updated from time to time. When they are
                updated, the effective date on this page will be changed.
              </p>
            </section>

            <section id="contact" className="scroll-mt-28">
              <h2 className="text-2xl font-semibold tracking-tight text-white">
                Contact
              </h2>
              <p className="mt-4">
                Questions about these website-use terms can be sent to{" "}
                <a
                  href={`mailto:${contactEmail}`}
                  className="font-medium text-blue-200 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
                >
                  {contactEmail}
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
