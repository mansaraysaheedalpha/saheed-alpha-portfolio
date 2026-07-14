import Link from "next/link";
import type { MouseEventHandler, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "text";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  showArrow?: boolean;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-blue-500 text-white shadow-[0_12px_40px_rgba(59,130,246,0.22)] hover:bg-blue-400",
  secondary:
    "border border-white/15 bg-white/[0.035] text-white hover:border-white/25 hover:bg-white/[0.07]",
  text: "text-slate-300 hover:text-white",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  showArrow = false,
  onClick,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={[
        "group inline-flex items-center justify-center gap-2 rounded-full",
        "px-5 py-3 text-sm font-medium transition-all duration-300",
        "focus-visible:outline focus-visible:outline-2",
        "focus-visible:outline-offset-4 focus-visible:outline-blue-400",
        variantStyles[variant],
        className,
      ].join(" ")}
    >
      <span>{children}</span>

      {showArrow && (
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
      )}
    </Link>
  );
}
