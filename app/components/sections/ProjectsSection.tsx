// Projects Section - Featured production applications

import { Section, SectionHeader, Container } from "@/app/components/ui/Section";
import { Project } from "@/app/data/portfolio";

interface ProjectsSectionProps {
  projects: Project[];
}

const typeIcons: Record<Project["type"], string> = {
  mobile: "📱",
  web: "🌐",
  pos: "💳",
};

const typeLabels: Record<Project["type"], string> = {
  mobile: "Mobile App",
  web: "Web App",
  pos: "POS System",
};

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <Section id="projects">
      <Container>
        <SectionHeader
          title="Featured Projects"
          subtitle="Production applications deployed to stores and live environments"
        />

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl bg-white dark:bg-zinc-800/50 shadow-sm border border-zinc-100 dark:border-zinc-800 transition-all hover:shadow-md hover:border-zinc-200 dark:hover:border-zinc-700">
      {/* Project image/icon placeholder */}
      <div className="relative h-48 bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900 flex items-center justify-center">
        <div className="text-center">
          <span className="text-5xl" role="img" aria-hidden="true">
            {typeIcons[project.type]}
          </span>
          <p className="mt-2 text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wide">
            {typeLabels[project.type]}
          </p>
        </div>
        {/* Status badge */}
        <div className="absolute top-4 right-4">
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 px-2.5 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            {project.status === "production" ? "Live" : "Dev"}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
          {project.title}
        </h3>

        <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
          {project.role}
        </p>

        <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
          {project.description}
        </p>

        {/* Highlights */}
        <ul className="mt-4 space-y-2">
          {project.highlights.slice(0, 3).map((highlight, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400"
            >
              <svg
                className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {highlight}
            </li>
          ))}
        </ul>

        {/* Technologies */}
        <div className="mt-auto pt-6">
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center rounded-md bg-zinc-100 dark:bg-zinc-700 px-2 py-1 text-xs font-medium text-zinc-600 dark:text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        {project.links && (
          <div className="mt-4 flex gap-3">
            {project.links.website && (
              <a
                href={project.links.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-zinc-900 dark:text-zinc-100 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                Visit Site
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
