// Skills Section - Grouped skill badges

import { Section, SectionHeader, Container } from "@/app/components/ui/Section";
import {
  Skill,
  SkillCategory,
  getSkillsByCategory,
  skillCategoryLabels,
} from "@/app/data/portfolio";

interface SkillsSectionProps {
  skills: Skill[];
}

const categoryOrder: SkillCategory[] = [
  "languages",
  "frontend",
  "backend",
  "mobile",
  "cloud",
  "database",
  "tools",
  "methodology",
];

const categoryIcons: Record<SkillCategory, string> = {
  languages: "💻",
  frontend: "🎨",
  backend: "⚙️",
  mobile: "📱",
  cloud: "☁️",
  database: "🗄️",
  tools: "🛠️",
  methodology: "📐",
};

export function SkillsSection({ skills }: SkillsSectionProps) {
  const groupedSkills = getSkillsByCategory(skills);

  return (
    <Section id="skills" className="bg-slate-50/50 dark:bg-slate-900/30">
      <Container>
        <SectionHeader
          title="Skills & Technologies"
          subtitle="Technologies I work with in production"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categoryOrder.map((category) => {
            const categorySkills = groupedSkills[category];
            if (!categorySkills?.length) return null;

            return (
              <div
                key={category}
                className="rounded-2xl bg-white dark:bg-slate-800/50 p-6 border border-slate-100 dark:border-slate-700/50 hover:border-slate-200 dark:hover:border-slate-600 transition-colors duration-200"
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="text-xl" role="img" aria-hidden="true">
                    {categoryIcons[category]}
                  </span>
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    {skillCategoryLabels[category]}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {categorySkills.map((skill) => (
                    <SkillBadge key={skill.name} name={skill.name} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

function SkillBadge({ name }: { name: string }) {
  return (
    <span className="inline-flex items-center rounded-full bg-slate-100 dark:bg-slate-700/60 px-3 py-1 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors cursor-default">
      {name}
    </span>
  );
}
