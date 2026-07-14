import Link from "next/link";

import type { Service } from "@/data/services";

type ServiceCardProps = {
  service: Service;
  index: number;
};

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

export function ServiceCard({ service, index }: ServiceCardProps) {
  const number = String(index + 1).padStart(2, "0");
  const bestForItems = service.homepageBestFor ?? service.bestFor;

  return (
    <article
      className={[
        "flex h-full flex-col border p-6 transition-colors duration-300 sm:p-7",
        service.featured
          ? "border-blue-300/18 bg-blue-400/[0.04] hover:border-blue-300/30"
          : "border-white/[0.08] bg-white/[0.025] hover:border-blue-300/20",
      ].join(" ")}
    >
      <div className="flex items-start justify-between gap-4">
        <span
          className={[
            "font-mono text-xs font-medium tracking-[0.22em]",
            service.featured ? "text-blue-200" : "text-blue-300",
          ].join(" ")}
          aria-hidden="true"
        >
          {number}
        </span>

        {service.badge && (
          <span className="rounded-full border border-blue-300/15 bg-blue-300/[0.06] px-3 py-1 text-xs font-medium text-blue-100">
            {service.badge}
          </span>
        )}
      </div>

      <h3 className="mt-7 text-2xl font-semibold tracking-tight text-white">
        {service.name}
      </h3>

      <p className="mt-4 text-sm leading-7 text-slate-400">
        {service.description}
      </p>

      <div className="mt-7">
        <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-blue-300">
          Best for
        </p>

        <ul
          className="mt-4 grid gap-3 text-sm text-slate-300"
          aria-label={`${service.name} best for`}
        >
          {bestForItems.map((item) => (
            <li key={item} className="flex gap-3">
              <span
                className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-blue-400/80"
                aria-hidden="true"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto pt-8">
        <dl className="grid gap-4 border-t border-white/[0.08] pt-6 text-sm sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          <div>
            <dt className="text-xs uppercase tracking-[0.16em] text-slate-500">
              Delivery
            </dt>
            <dd className="mt-2 font-medium text-white">
              {service.typicalDelivery}
            </dd>
          </div>

          <div>
            <dt className="text-xs uppercase tracking-[0.16em] text-slate-500">
              Starts at
            </dt>
            <dd className="mt-2 text-base font-semibold tracking-tight text-white">
              {service.startingRange}
            </dd>
          </div>
        </dl>

        <Link
          href={service.href}
          className={[
            "group mt-6 inline-flex w-fit items-center justify-center gap-2 rounded-full px-1 py-2 text-sm font-medium transition-colors duration-300",
            "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400",
            service.featured
              ? "text-blue-100 hover:text-white"
              : "text-slate-300 hover:text-white",
          ].join(" ")}
        >
          <span>Learn more</span>
          <ArrowIcon />
        </Link>
      </div>
    </article>
  );
}
