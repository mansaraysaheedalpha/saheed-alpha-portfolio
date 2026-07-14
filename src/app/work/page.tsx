import type { Metadata } from "next";

import { CapabilitySummary } from "@/components/work/capability-summary";
import { FeaturedProject } from "@/components/work/featured-project";
import { WorkCta } from "@/components/work/work-cta";
import { WorkHero } from "@/components/work/work-hero";
import { WorkProjectEntry } from "@/components/work/work-project-entry";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Explore full-stack web applications, AI-powered SaaS products, event platforms, institutional systems, and professional websites built by Saheed Alpha Mansaray.",
};

export default function WorkPage() {
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
    <main>
      <WorkHero />
      <FeaturedProject project={featuredProject} />

      <section className="bg-[#07111f] pb-12 pt-4 text-white sm:pb-16 sm:pt-6">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="mb-4 max-w-3xl">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-blue-300">
              More shipped products
            </p>

            <h2 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-[3rem]">
              Substantial builds across different business contexts.
            </h2>
          </div>

          <div>
            {supportingProjects.map((project, index) => (
              <WorkProjectEntry
                key={project.slug}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <CapabilitySummary />
      <WorkCta />
    </main>
  );
}
