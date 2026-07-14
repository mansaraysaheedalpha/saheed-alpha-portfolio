const capabilities = [
  "Full-stack web application development",
  "AI and LLM product integration",
  "Authentication and role-based interfaces",
  "Dashboards and management systems",
  "Responsive and PWA experiences",
  "Database and API integration",
  "Production deployment",
  "Business and institutional websites",
];

export function CapabilitySummary() {
  return (
    <section className="bg-[#081425] py-20 text-white sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 border-y border-white/[0.08] py-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-blue-300">
              Capabilities shown
            </p>

            <h2 className="mt-5 max-w-xl text-3xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-4xl">
              The work demonstrates product thinking across practical build
              types.
            </h2>
          </div>

          <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {capabilities.map((capability) => (
              <li
                key={capability}
                className="flex gap-3 border-t border-white/[0.08] pt-4 text-sm font-medium leading-6 text-slate-300"
              >
                <span
                  className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-blue-400"
                  aria-hidden="true"
                />
                <span>{capability}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
