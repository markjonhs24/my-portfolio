import {
  Navigation,
  Footer,
  HeroSection,
  SkillsSection,
  ProjectsSection,
  ContactSection,
} from "@/app/components";
import { portfolioData } from "@/app/data/portfolio";

export default function Home() {
  const { personal, skills, projects, contacts } = portfolioData;

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white dark:bg-zinc-950">
        <HeroSection personal={personal} />
        
        {/* About section - integrated into hero for cleaner flow */}
        <section id="about" className="sr-only">
          <h2>About</h2>
        </section>

        <SkillsSection skills={skills} />
        <ProjectsSection projects={projects} />
        <ContactSection contacts={contacts} />
      </main>
      <Footer />
    </>
  );
}
