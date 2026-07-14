import { existsSync } from "node:fs";
import { join } from "node:path";

import Link from "next/link";

import { ProjectCard } from "@/components/home/project-card";
import { Container } from "@/components/layout/container";
import { projects } from "@/data/projects";

function publicAssetExists(assetPath: string) {
  const relativePath = assetPath.startsWith("/")
    ? assetPath.slice(1)
    : assetPath;

  return existsSync(join(process.cwd(), "public", relativePath));
}

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

export function SelectedWork() {
  const [firstProject] = projects;
  const featuredProject =
    projects.find((project) => project.featured) ?? firstProject;

  if (!featuredProject) {
    return null;
  }

  const supportingProjects = projects.filter(
    (project) => project.slug !== featuredProject.slug,
  );

  return (
    <section className="relative isolate overflow-hidden bg-[#07111f] py-24 text-white sm:py-28">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-white/[0.08]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(37,99,235,0.12),transparent_28%),radial-gradient(circle_at_84%_44%,rgba(14,165,233,0.06),transparent_30%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.022)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.022)_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>

      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-blue-300">
              Selected Work
            </p>

            <h2 className="mt-5 max-w-2xl text-4xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-5xl">
              Products built to solve real business problems.
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
              A selection of full-stack platforms, AI-powered products, and
              professional digital experiences I have taken from idea to
              production.
            </p>
          </div>

          <Link
            href="/work"
            className="group inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/[0.035] px-5 py-3 text-sm font-medium text-white transition-colors duration-300 hover:border-white/25 hover:bg-white/[0.07] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
          >
            <span>View All Work</span>
            <ArrowIcon />
          </Link>
        </div>

        <div className="mt-14">
          <ProjectCard
            project={featuredProject}
            hasCoverImage={publicAssetExists(featuredProject.coverImage)}
            featured
          />
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {supportingProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              hasCoverImage={publicAssetExists(project.coverImage)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
