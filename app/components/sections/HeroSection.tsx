// Hero Section - First impression with CTA

import { PortfolioData } from "@/app/data/portfolio";

interface HeroSectionProps {
  personal: PortfolioData["personal"];
}

export function HeroSection({ personal }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl px-6 lg:px-8 text-center">
        {/* Avatar placeholder */}
        <div className="mx-auto mb-8 h-32 w-32 rounded-full bg-gradient-to-br from-zinc-200 to-zinc-300 dark:from-zinc-700 dark:to-zinc-800 flex items-center justify-center">
          <span className="text-4xl font-bold text-zinc-500 dark:text-zinc-400">
            {personal.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </span>
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl md:text-6xl">
          {personal.name}
        </h1>

        <p className="mt-4 text-xl font-medium text-zinc-600 dark:text-zinc-400 sm:text-2xl">
          {personal.role}
        </p>

        <p className="mt-2 text-lg text-zinc-500 dark:text-zinc-500">
          {personal.tagline}
        </p>

        <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
          {personal.summary}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full bg-zinc-900 dark:bg-zinc-100 px-6 py-3 text-sm font-semibold text-white dark:text-zinc-900 shadow-sm hover:bg-zinc-700 dark:hover:bg-zinc-300 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-6 py-3 text-sm font-semibold text-zinc-900 dark:text-zinc-100 shadow-sm hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
          >
            Get in Touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 animate-bounce">
          <a
            href="#about"
            className="inline-block text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
            aria-label="Scroll to about section"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
