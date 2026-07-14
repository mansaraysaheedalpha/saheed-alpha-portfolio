import Image from "next/image";

import type { Project } from "@/data/projects";

type WorkProjectEntryProps = {
  project: Project;
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

export function WorkProjectEntry({ project, index }: WorkProjectEntryProps) {
  const shouldReverse = index % 2 === 1;

  return (
    <article className="grid gap-8 border-t border-white/[0.08] py-10 lg:grid-cols-2 lg:items-center lg:gap-12 lg:py-12">
      <div
        className={[
          "relative aspect-[16/9] overflow-hidden border border-white/[0.08] bg-[#081425] sm:aspect-[2.31/1]",
          shouldReverse ? "lg:order-2" : "",
        ].join(" ")}
      >
        <Image
          src={project.coverImage}
          alt={`${project.name} product interface`}
          fill
          sizes="(min-width: 1024px) 46vw, 100vw"
          className="object-contain"
          style={{
            objectPosition: project.coverPosition ?? "center center",
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#07111f]/70 to-transparent"
          aria-hidden="true"
        />
      </div>

      <div className={shouldReverse ? "lg:order-1" : ""}>
        <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-blue-300">
          {project.category}
        </p>

        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {project.name}
        </h2>

        <p className="mt-4 max-w-xl text-base leading-7 text-slate-400">
          {project.summary}
        </p>

        {project.outcome && (
          <p className="mt-5 max-w-xl border-l border-blue-400/40 pl-4 text-sm font-medium leading-6 text-slate-200">
            {project.outcome}
          </p>
        )}

        <ul
          className="mt-6 flex flex-wrap gap-2"
          aria-label={`${project.name} selected capabilities`}
        >
          {project.technologies.map((technology) => (
            <li
              key={technology}
              className="rounded-full border border-white/[0.08] bg-white/[0.035] px-3 py-1.5 text-xs font-medium text-slate-300"
            >
              {technology}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-5 py-3 text-sm font-medium text-white shadow-[0_12px_40px_rgba(59,130,246,0.22)] transition-colors duration-300 hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
            aria-label={`Visit ${project.name} live site`}
          >
            <span>Visit Live Site</span>
            <ArrowIcon />
          </a>

          <span className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.025] px-5 py-3 text-sm font-medium text-slate-400">
            Case study coming soon
          </span>
        </div>
      </div>
    </article>
  );
}
