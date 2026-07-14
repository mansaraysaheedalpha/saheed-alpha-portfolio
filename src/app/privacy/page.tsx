import type { Metadata } from "next";

const effectiveDate = "July 2026";
const contactEmail = "mansalphasaheed@gmail.com";

const sections = [
  {
    id: "introduction",
    title: "Introduction",
  },
  {
    id: "information-collected",
    title: "Information collected",
  },
  {
    id: "how-information-is-used",
    title: "How information is used",
  },
  {
    id: "contact-form-submissions",
    title: "Contact-form submissions",
  },
  {
    id: "analytics-and-cookies",
    title: "Analytics and cookies",
  },
  {
    id: "third-party-services",
    title: "Third-party services",
  },
  {
    id: "data-retention",
    title: "Data retention",
  },
  {
    id: "data-sharing",
    title: "Data sharing",
  },
  {
    id: "data-security",
    title: "Data security",
  },
  {
    id: "international-processing",
    title: "International processing",
  },
  {
    id: "user-choices",
    title: "User choices",
  },
  {
    id: "external-links",
    title: "External links",
  },
  {
    id: "childrens-privacy",
    title: "Children's privacy",
  },
  {
    id: "policy-changes",
    title: "Policy changes",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const metadata: Metadata = {
  title: {
    absolute: "Privacy Policy | Saheed Alpha Mansaray",
  },
  description:
    "Privacy information for the Saheed Alpha Mansaray portfolio and project-enquiry website.",
};

export default function PrivacyPage() {
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
            Privacy Policy
          </p>

          <h1 className="mt-5 text-5xl font-semibold leading-tight text-white sm:text-6xl">
            Privacy information for this portfolio website.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400 sm:text-xl">
            This page explains how information may be collected, used, and
            handled when visitors browse this website or submit a project
            enquiry.
          </p>

          <p className="mt-6 text-sm leading-7 text-slate-500">
            Effective date:{" "}
            <span className="font-medium text-slate-300">{effectiveDate}</span>
          </p>

        </div>
      </section>

      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[280px_minmax(0,1fr)] lg:px-8 lg:py-20">
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <nav
            aria-label="Privacy policy sections"
            className="border-l border-white/[0.1] pl-5"
          >
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
            <section id="introduction" className="scroll-mt-28">
              <h2 className="text-2xl font-semibold text-white">
                Introduction
              </h2>
              <p className="mt-4">
                This website presents the development services and project work
                of Saheed Alpha Mansaray. It also allows visitors to submit
                project enquiries so a potential website, product, dashboard,
                automation, or related software engagement can be discussed.
              </p>
            </section>

            <section id="information-collected" className="scroll-mt-28">
              <h2 className="text-2xl font-semibold text-white">
                Information collected
              </h2>
              <p className="mt-4">
                When you submit an enquiry or communicate through the website,
                the information collected may include:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 marker:text-blue-300">
                <li>your name;</li>
                <li>your email address;</li>
                <li>your company or project name;</li>
                <li>project details you choose to provide;</li>
                <li>your budget range;</li>
                <li>your desired timeline;</li>
                <li>URLs you voluntarily provide; and</li>
                <li>
                  basic technical and analytics information, if analytics is
                  enabled.
                </li>
              </ul>
            </section>

            <section id="how-information-is-used" className="scroll-mt-28">
              <h2 className="text-2xl font-semibold text-white">
                How information is used
              </h2>
              <p className="mt-4">
                Information is used for practical website and enquiry purposes,
                including to:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 marker:text-blue-300">
                <li>respond to enquiries;</li>
                <li>assess project fit;</li>
                <li>communicate about requested services;</li>
                <li>improve the website;</li>
                <li>protect the website from abuse; and</li>
                <li>comply with lawful obligations.</li>
              </ul>
            </section>

            <section id="contact-form-submissions" className="scroll-mt-28">
              <h2 className="text-2xl font-semibold text-white">
                Contact-form submissions
              </h2>
              <p className="mt-4">
                Project details submitted through the website should be limited
                to information needed for an initial project conversation. Do
                not submit passwords, API keys, financial-account credentials,
                confidential source code, or highly sensitive personal
                information through a contact form or project-enquiry message.
              </p>
            </section>

            <section id="analytics-and-cookies" className="scroll-mt-28">
              <h2 className="text-2xl font-semibold text-white">
                Analytics and cookies
              </h2>
              <p className="mt-4">
                The website may use privacy-conscious analytics to understand
                general site usage and improve the visitor experience. Essential
                technical storage may also be used where needed for the website
                to function correctly.
              </p>
              <p className="mt-4">
                This policy does not name a specific analytics, cookie, or
                tracking provider because provider details should match what is
                actually configured in the codebase and hosting environment.
              </p>
            </section>

            <section id="third-party-services" className="scroll-mt-28">
              <h2 className="text-2xl font-semibold text-white">
                Third-party services
              </h2>
              <p className="mt-4">
                The website may rely on third-party services to operate,
                deliver messages, prevent abuse, measure performance, or link to
                external content. These services may include a hosting provider,
                email-delivery provider, analytics provider, anti-spam services,
                and linked external websites.
              </p>
              <p className="mt-4">
                Third-party services are responsible for their own privacy
                notices, security practices, and data handling terms.
              </p>
            </section>

            <section id="data-retention" className="scroll-mt-28">
              <h2 className="text-2xl font-semibold text-white">
                Data retention
              </h2>
              <p className="mt-4">
                Enquiry information is retained only as long as reasonably
                needed for communication, project evaluation, recordkeeping, or
                legal purposes.
              </p>
            </section>

            <section id="data-sharing" className="scroll-mt-28">
              <h2 className="text-2xl font-semibold text-white">
                Data sharing
              </h2>
              <p className="mt-4">
                Personal information is not sold. It may be shared only with
                service providers necessary to operate the website, process
                enquiries, deliver communications, protect the site from abuse,
                or when disclosure is legally required.
              </p>
            </section>

            <section id="data-security" className="scroll-mt-28">
              <h2 className="text-2xl font-semibold text-white">
                Data security
              </h2>
              <p className="mt-4">
                Reasonable safeguards are used to protect information submitted
                through the website. However, no method of internet transmission
                or electronic storage is completely secure, so absolute security
                cannot be guaranteed.
              </p>
            </section>

            <section id="international-processing" className="scroll-mt-28">
              <h2 className="text-2xl font-semibold text-white">
                International processing
              </h2>
              <p className="mt-4">
                The website owner is based in Sierra Leone and may use
                international cloud-service providers. As a result, information
                may be processed or stored in countries outside the visitor&apos;s
                location.
              </p>
            </section>

            <section id="user-choices" className="scroll-mt-28">
              <h2 className="text-2xl font-semibold text-white">
                User choices
              </h2>
              <p className="mt-4">
                Visitors may request access to, correction of, or deletion of
                enquiry information by using the contact details below. Requests
                may be subject to legal, security, recordkeeping, or operational
                requirements.
              </p>
            </section>

            <section id="external-links" className="scroll-mt-28">
              <h2 className="text-2xl font-semibold text-white">
                External links
              </h2>
              <p className="mt-4">
                This website may link to projects, GitHub, LinkedIn, and other
                third-party websites. Visiting those websites is subject to
                their own privacy policies and terms.
              </p>
            </section>

            <section id="childrens-privacy" className="scroll-mt-28">
              <h2 className="text-2xl font-semibold text-white">
                Children&apos;s privacy
              </h2>
              <p className="mt-4">
                This website is not intended to knowingly collect information
                from children. If you believe a child has provided personal
                information through the website, please use the contact details
                below to request review or deletion.
              </p>
            </section>

            <section id="policy-changes" className="scroll-mt-28">
              <h2 className="text-2xl font-semibold text-white">
                Policy changes
              </h2>
              <p className="mt-4">
                This policy may be updated from time to time to reflect changes
                to the website, services, or legal requirements. When the policy
                is updated, the effective date will be changed.
              </p>
            </section>

            <section id="contact" className="scroll-mt-28">
              <h2 className="text-2xl font-semibold text-white">
                Contact
              </h2>
              <p className="mt-4">
                Questions or privacy-related requests can be sent to{" "}
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
