import Link from "next/link";

import { Container } from "@/components/layout/container";
import {
  footerAdditionalLinks,
  footerContact,
  footerLegalLinks,
  professionalLinks,
} from "@/data/footer";
import { navigationItems } from "@/data/navigation";

const brandStatement =
  "Building websites, MVPs, dashboards, and AI-powered products for founders and small businesses.";

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

export function Footer() {
  const currentYear = new Date().getFullYear();
  const enabledProfessionalLinks = professionalLinks.filter(
    (link) => link.isEnabled && link.href,
  );

  return (
    <footer className="border-t border-white/[0.08] bg-[#07111f] py-12 text-white sm:py-14">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr_0.75fr]">
          <div className="max-w-xl">
            <Link
              href="/"
              className="group inline-flex items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
              aria-label="Saheed Alpha Mansaray homepage"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-400/[0.07] font-semibold text-blue-400 transition-colors group-hover:border-blue-400/35 group-hover:bg-blue-400/[0.12]">
                AM
              </span>

              <span className="flex flex-col">
                <span className="text-base font-semibold tracking-tight text-white">
                  Saheed Alpha Mansaray
                </span>

                <span className="mt-1 text-sm text-slate-500">
                  Independent Full-Stack Developer
                </span>
              </span>
            </Link>

            <p className="mt-6 max-w-lg text-sm leading-7 text-slate-400">
              {brandStatement}
            </p>

            <a
              href={`mailto:${footerContact.email}`}
              className="group mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-blue-500 px-5 py-3 text-sm font-medium text-white shadow-[0_12px_40px_rgba(59,130,246,0.22)] transition-colors duration-300 hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
            >
              <span>{footerContact.email}</span>
              <ArrowIcon />
            </a>
          </div>

          <nav aria-label="Footer navigation">
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-blue-300">
              Navigation
            </p>

            <ul className="mt-5 grid gap-3">
              {[...navigationItems, ...footerAdditionalLinks].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex rounded-full py-1 text-sm text-slate-400 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <nav aria-label="Legal links">
              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-blue-300">
                Legal
              </p>

              <ul className="mt-5 grid gap-3">
                {footerLegalLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="inline-flex rounded-full py-1 text-sm text-slate-400 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {enabledProfessionalLinks.length > 0 && (
              <nav className="mt-8" aria-label="Professional links">
                <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-blue-300">
                  Professional
                </p>

                <ul className="mt-5 grid gap-3">
                  {enabledProfessionalLinks.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex rounded-full py-1 text-sm text-slate-400 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/[0.08] pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>{footerContact.location}</p>

          <p>&copy; {currentYear} Saheed Alpha Mansaray. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
