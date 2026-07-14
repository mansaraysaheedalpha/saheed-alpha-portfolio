import type { ProcessStep } from "@/data/process";

type ProcessStepItemProps = {
  step: ProcessStep;
  index: number;
  isLast: boolean;
};

export function ProcessStepItem({
  step,
  index,
  isLast,
}: ProcessStepItemProps) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <li className="relative grid gap-5 pl-12 sm:grid-cols-[112px_1fr] sm:gap-6 sm:pl-0 lg:grid-cols-1">
      {!isLast && (
        <span
          className="absolute bottom-[-2rem] left-[17px] top-10 w-px bg-white/[0.1] sm:left-14 lg:bottom-auto lg:left-[calc(50%+1.75rem)] lg:top-5 lg:h-px lg:w-[calc(100%-3.5rem)]"
          aria-hidden="true"
        />
      )}

      <div className="relative z-10 flex items-center gap-4 sm:block lg:flex">
        <span className="absolute left-0 top-0 flex h-9 w-9 items-center justify-center rounded-full border border-blue-400/25 bg-blue-400/[0.08] font-mono text-[11px] font-medium text-blue-200 sm:static">
          {number}
        </span>

        <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-blue-300 sm:mt-4 lg:mt-0">
          Stage
        </p>
      </div>

      <article className="border-t border-white/[0.08] pt-5 lg:min-h-[300px]">
        <h3 className="text-2xl font-semibold tracking-tight text-white">
          {step.title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-slate-400">
          {step.description}
        </p>

        <div className="mt-5 border-l border-blue-400/40 pl-4">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-blue-300">
            Client outcome
          </p>

          <p className="mt-2 text-sm font-medium leading-6 text-slate-200">
            {step.outcome}
          </p>
        </div>
      </article>
    </li>
  );
}
