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
    <Section id="skills" className="bg-zinc-50 dark:bg-zinc-900/50">
      <Container>
        <SectionHeader
          title="Skills & Technologies"
          subtitle="Technologies I work with in production"
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {categoryOrder.map((category) => {
            const categorySkills = groupedSkills[category];
            if (!categorySkills?.length) return null;

            return (
              <div
                key={category}
                className="rounded-2xl bg-white dark:bg-zinc-800/50 p-6 shadow-sm border border-zinc-100 dark:border-zinc-800"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl" role="img" aria-hidden="true">
                    {categoryIcons[category]}
                  </span>
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
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
    <span className="inline-flex items-center rounded-full bg-zinc-100 dark:bg-zinc-700 px-3 py-1 text-sm font-medium text-zinc-700 dark:text-zinc-300">
      {name}
    </span>
  );
}
