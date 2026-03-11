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
    <article className="group relative flex flex-col overflow-hidden rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/50 shadow-sm hover:shadow-lg hover:shadow-slate-200/50 dark:hover:shadow-slate-900/50 hover:border-slate-200 dark:hover:border-slate-600 transition-all duration-300">
      {/* Project image/icon placeholder */}
      <div className="relative h-48 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <span className="text-5xl" role="img" aria-hidden="true">
            {typeIcons[project.type]}
          </span>
          <p className="mt-2 text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide">
            {typeLabels[project.type]}
          </p>
        </div>
        {/* Status badge */}
        <div className="absolute top-4 right-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 dark:bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400 ring-1 ring-emerald-500/20">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            {project.status === "production" ? "Live" : "Dev"}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          {project.title}
        </h3>

        <p className="mt-1 text-sm text-indigo-600 dark:text-indigo-400 font-medium">
          {project.role}
        </p>

        <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
          {project.description}
        </p>

        {/* Highlights */}
        <ul className="mt-4 space-y-2">
          {project.highlights.slice(0, 3).map((highlight, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400"
            >
              <svg
                className="mt-0.5 h-4 w-4 flex-shrink-0 text-indigo-500"
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
                className="inline-flex items-center rounded-md bg-slate-100 dark:bg-slate-700/50 px-2.5 py-1 text-xs font-medium text-slate-600 dark:text-slate-300 ring-1 ring-slate-200/50 dark:ring-slate-600/50"
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
                className="inline-flex items-center gap-1.5 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
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
