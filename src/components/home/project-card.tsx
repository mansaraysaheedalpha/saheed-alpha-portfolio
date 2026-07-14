import Image from "next/image";

import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  hasCoverImage: boolean;
  featured?: boolean;
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

function ProjectCover({
  project,
  hasCoverImage,
  featured,
}: ProjectCardProps) {
  const imagePosition = project.coverPosition ?? "center center";

  return (
    <div
      className={[
        "relative overflow-hidden border-b border-white/[0.08] bg-[#081425]",
        featured
          ? "aspect-[2.14/1] min-h-[260px] lg:min-h-0 lg:border-b-0 lg:border-r"
          : "aspect-[2.26/1] min-h-[176px] sm:min-h-0",
      ].join(" ")}
    >
      {hasCoverImage ? (
        <Image
          src={project.coverImage}
          alt={`${project.name} product preview`}
          fill
          sizes={
            featured
              ? "(min-width: 1024px) 48vw, 100vw"
              : "(min-width: 1024px) 31vw, 100vw"
          }
          className="object-contain transition-transform duration-500 ease-out group-hover/card:scale-[1.025] sm:object-cover"
          style={{ objectPosition: imagePosition }}
        />
      ) : (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_24%,rgba(59,130,246,0.24),transparent_32%),linear-gradient(135deg,#07111f_0%,#0b1728_48%,#10213a_100%)]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.035)_1px,transparent_1px)] bg-[size:48px_48px]" />
          <div className="absolute inset-x-6 bottom-6">
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-blue-300">
              Product Preview
            </p>
            <p className="mt-3 max-w-sm text-2xl font-semibold tracking-tight text-white">
              {project.name}
            </p>
          </div>
        </div>
      )}

      <div
        className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#07111f]/65 to-transparent"
        aria-hidden="true"
      />
    </div>
  );
}

export function ProjectCard({
  project,
  hasCoverImage,
  featured = false,
}: ProjectCardProps) {
  const cardClassName = featured
    ? "group/card grid overflow-hidden border border-white/[0.08] bg-white/[0.025] transition-colors duration-300 hover:border-blue-300/20 lg:grid-cols-[1.18fr_0.82fr]"
    : "group/card flex h-full flex-col overflow-hidden border border-white/[0.08] bg-white/[0.025] transition-colors duration-300 hover:border-blue-300/20";

  return (
    <article className={cardClassName}>
      <ProjectCover
        project={project}
        hasCoverImage={hasCoverImage}
        featured={featured}
      />

      <div
        className={[
          "flex flex-1 flex-col",
          featured ? "p-6 sm:p-8 lg:p-10" : "p-6",
        ].join(" ")}
      >
        <div className="flex flex-wrap items-center gap-3">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-blue-300">
            {project.category}
          </p>

          {featured && (
            <span className="rounded-full border border-blue-400/20 bg-blue-400/[0.07] px-3 py-1 text-xs font-medium text-blue-200">
              Flagship build
            </span>
          )}
        </div>

        <h3
          className={[
            "mt-4 font-semibold tracking-tight text-white",
            featured ? "text-3xl sm:text-4xl" : "text-2xl",
          ].join(" ")}
        >
          {project.name}
        </h3>

        <p
          className={[
            "mt-4 leading-7 text-slate-400",
            featured
              ? "max-w-xl text-base sm:text-lg"
              : "text-sm lg:min-h-[5.25rem]",
          ].join(" ")}
        >
          {project.summary}
        </p>

        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Selected technologies">
          {project.technologies.map((technology) => (
            <li
              key={technology}
              className="rounded-full border border-white/[0.08] bg-white/[0.035] px-3 py-1.5 text-xs font-medium text-slate-300"
            >
              {technology}
            </li>
          ))}
        </ul>

        <div
          className={[
            "mt-auto flex items-center pt-7",
            featured
              ? "flex-wrap gap-3"
              : "flex-wrap gap-x-5 gap-y-3",
          ].join(" ")}
        >
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-5 py-3 text-sm font-medium text-white shadow-[0_12px_40px_rgba(59,130,246,0.22)] transition-colors duration-300 hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
          >
            <span>Visit Live Site</span>
            <ArrowIcon />
          </a>

          <span className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.025] px-4 py-3 text-sm font-medium text-slate-400">
            Case study coming soon
          </span>
        </div>
      </div>
    </article>
  );
}
