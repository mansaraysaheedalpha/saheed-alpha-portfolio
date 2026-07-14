"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";

import type { NavigationItem } from "@/data/navigation";
import { ButtonLink } from "@/components/ui/button-link";

type MobileNavigationProps = {
  items: NavigationItem[];
};

export function MobileNavigation({ items }: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();
  const titleId = useId();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const handleViewportChange = () => {
      if (mediaQuery.matches) {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    mediaQuery.addEventListener("change", handleViewportChange);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      mediaQuery.removeEventListener("change", handleViewportChange);
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white transition-colors hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span className="sr-only">
          {isOpen ? "Close navigation menu" : "Open navigation menu"}
        </span>

        <span className="relative h-4 w-5" aria-hidden="true">
          <span
            className={[
              "absolute left-0 top-1 block h-px w-full bg-current transition-transform duration-300",
              isOpen ? "translate-y-[5px] rotate-45" : "",
            ].join(" ")}
          />
          <span
            className={[
              "absolute left-0 top-3 block h-px w-full bg-current transition-transform duration-300",
              isOpen ? "-translate-y-[3px] -rotate-45" : "",
            ].join(" ")}
          />
        </span>
      </button>

      <div
        className={[
          "fixed inset-x-0 bottom-0 top-[70px] z-40 transition",
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0 delay-150",
        ].join(" ")}
      >
        <button
          type="button"
          className="absolute inset-0 cursor-default bg-[#030812]/70 backdrop-blur-sm transition-opacity duration-300"
          aria-label="Close navigation menu"
          tabIndex={isOpen ? 0 : -1}
          onClick={closeMenu}
        />

        <div
          id={panelId}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          className={[
            "relative mx-6 mt-4 max-h-[calc(100dvh-102px)] overflow-y-auto rounded-2xl border border-white/[0.08] bg-[#07111f]/96 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.42)] transition-all duration-300",
            isOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-3 opacity-0",
          ].join(" ")}
        >
          <div className="flex items-center justify-between gap-4 border-b border-white/[0.08] pb-4">
            <h2
              id={titleId}
              className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-blue-300"
            >
              Navigation
            </h2>

            <button
              ref={closeButtonRef}
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-300 transition-colors hover:bg-white/5 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
              aria-label="Close navigation menu"
              onClick={closeMenu}
            >
              <span className="relative h-4 w-4" aria-hidden="true">
                <span className="absolute left-0 top-1/2 block h-px w-full rotate-45 bg-current" />
                <span className="absolute left-0 top-1/2 block h-px w-full -rotate-45 bg-current" />
              </span>
            </button>
          </div>

          <nav className="py-4" aria-label="Mobile navigation">
            <ul className="space-y-1">
              {items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex rounded-xl px-3 py-3 text-base font-medium text-slate-300 transition-colors hover:bg-white/[0.05] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <ButtonLink
            href="/contact"
            showArrow
            className="mt-2 w-full"
            onClick={closeMenu}
          >
            Discuss Your Project
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
