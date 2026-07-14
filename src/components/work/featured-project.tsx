import Image from "next/image";

import type { Project } from "@/data/projects";

type FeaturedProjectProps = {
  project: Project;
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

export function FeaturedProject({ project }: FeaturedProjectProps) {
  return (
    <section className="bg-[#07111f] pb-14 pt-12 text-white sm:pb-16 sm:pt-16">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <article className="overflow-hidden border border-blue-300/16 bg-blue-400/[0.035]">
          <div className="relative aspect-[16/9] min-h-[280px] overflow-hidden border-b border-white/[0.08] bg-[#081425] sm:min-h-[420px] lg:aspect-[2.35/1]">
            <Image
              src={project.coverImage}
              alt={`${project.name} product interface`}
              fill
              preload
              sizes="100vw"
              className="object-contain sm:object-cover"
              style={{
                objectPosition: project.coverPosition ?? "center center",
              }}
            />
            <div
              className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#07111f]/80 to-transparent"
              aria-hidden="true"
            />
          </div>

          <div className="grid gap-10 p-6 sm:p-8 lg:grid-cols-[0.92fr_1.08fr] lg:p-10">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-blue-300">
                  {project.category}
                </p>

                <span className="rounded-full border border-blue-400/20 bg-blue-400/[0.07] px-3 py-1 text-xs font-medium text-blue-200">
                  Flagship project
                </span>
              </div>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                {project.name}
              </h2>

              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-400">
                {project.summary}
              </p>
            </div>

            <div>
              <div className="border-l border-blue-400/40 pl-5">
                <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-blue-300">
                  What was built
                </p>

                <p className="mt-3 text-base leading-7 text-slate-200">
                  {project.whatWasBuilt}
                </p>
              </div>

              <ul
                className="mt-7 flex flex-wrap gap-2"
                aria-label={`${project.name} selected technologies`}
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
          </div>
        </article>
      </div>
    </section>
  );
}
