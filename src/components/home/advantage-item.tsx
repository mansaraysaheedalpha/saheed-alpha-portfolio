import type { Advantage } from "@/data/advantages";

type AdvantageItemProps = {
  advantage: Advantage;
  index: number;
};

export function AdvantageItem({ advantage, index }: AdvantageItemProps) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <article
      className={[
        "border-t border-white/[0.08] py-6",
        advantage.emphasized ? "lg:py-7" : "",
      ].join(" ")}
    >
      <div className="grid gap-4 sm:grid-cols-[88px_1fr]">
        <div className="flex items-center gap-3 sm:block">
          <span
            className={[
              "font-mono text-xs font-medium tracking-[0.22em]",
              advantage.emphasized ? "text-blue-200" : "text-blue-300",
            ].join(" ")}
            aria-hidden="true"
          >
            {number}
          </span>

          {advantage.emphasized && (
            <span className="rounded-full border border-blue-300/15 bg-blue-300/[0.06] px-3 py-1 text-xs font-medium text-blue-100 sm:mt-4 sm:inline-flex">
              Key advantage
            </span>
          )}
        </div>

        <div>
          <h3 className="text-xl font-semibold tracking-tight text-white">
            {advantage.title}
          </h3>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
            {advantage.description}
          </p>

          <p className="mt-4 border-l border-blue-400/40 pl-4 text-sm font-medium leading-6 text-slate-200">
            {advantage.proof}
          </p>
        </div>
      </div>
    </article>
  );
}
