import Link from "next/link";

import { navigationItems } from "@/data/navigation";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/layout/container";
import { MobileNavigation } from "@/components/layout/mobile-navigation";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#07111f]/88 backdrop-blur-xl">
      <Container>
        <div className="flex h-[70px] items-center justify-between">
          <Link
            href="/"
            className="group flex items-center gap-2.5"
            aria-label="Alpha Mansaray homepage"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-400/[0.07] text-[13px] font-semibold text-blue-400 transition-colors group-hover:border-blue-400/35 group-hover:bg-blue-400/[0.12]">
              SAM
            </span>

            <span className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight text-white">
                Saheed Alpha Mansaray
              </span>

              <span className="mt-0.5 text-[11px] text-slate-500">
                Independent Full-Stack Developer
              </span>
            </span>
          </Link>

          <nav
            className="hidden items-center rounded-full border border-white/[0.07] bg-white/[0.025] px-2 py-1 lg:flex"
            aria-label="Primary navigation"
          >
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-1.5 text-sm text-slate-400 transition-colors duration-200 hover:bg-white/[0.05] hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <ButtonLink href="/contact" showArrow className="!py-2.5">
              Discuss Your Project
            </ButtonLink>
          </div>

          <MobileNavigation items={navigationItems} />
        </div>
      </Container>
    </header>
  );
}
