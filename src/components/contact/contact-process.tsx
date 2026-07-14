const steps = [
  "I review the project details.",
  "I respond with questions or a recommendation.",
  "Suitable projects move into a discovery and scoping conversation.",
];

function MailIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className="h-4 w-4"
    >
      <path
        d="M3.5 6.5 10 11l6.5-4.5M5 16h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function ContactProcess() {
  return (
    <aside className="grid content-start gap-6">
      <section className="border border-white/[0.1] bg-white/[0.03] p-6 sm:p-7">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-blue-300">
          Prefer email?
        </p>

        <p className="mt-4 text-sm leading-7 text-slate-400">
          Send the project summary, expected outcome, budget range, and timeline
          directly.
        </p>

        <a
          href="mailto:mansalphasaheed@gmail.com"
          className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.035] px-5 py-3 text-sm font-medium text-white transition-colors duration-300 hover:border-white/25 hover:bg-white/[0.07] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
        >
          <MailIcon />
          <span>mansalphasaheed@gmail.com</span>
        </a>
      </section>

      <section className="border border-white/[0.1] bg-[#0e1c30]/70 p-6 sm:p-7">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-blue-300">
          What happens next
        </p>

        <ol className="mt-6 grid gap-5">
          {steps.map((step, index) => (
            <li key={step} className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-blue-400/20 bg-blue-400/[0.06] text-sm font-medium text-blue-200">
                {index + 1}
              </span>
              <span className="pt-1 text-sm leading-6 text-slate-300">
                {step}
              </span>
            </li>
          ))}
        </ol>
      </section>
    </aside>
  );
}
