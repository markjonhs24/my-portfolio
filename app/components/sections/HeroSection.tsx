// Hero Section - First impression with CTA

import { PortfolioData } from "@/app/data/portfolio";

interface HeroSectionProps {
  personal: PortfolioData["personal"];
}

export function HeroSection({ personal }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
      {/* Background gradient - subtle and professional */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-gradient-to-r from-indigo-500/10 to-violet-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-[400px] h-[400px] bg-gradient-to-r from-slate-500/10 to-indigo-500/10 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl px-6 lg:px-8 text-center">
        {/* Avatar placeholder */}
        <div className="mx-auto mb-8 h-32 w-32 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 p-[3px] shadow-lg shadow-indigo-500/25">
          <div className="h-full w-full rounded-full bg-white dark:bg-slate-900 flex items-center justify-center">
            <span className="text-3xl font-bold bg-gradient-to-br from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              {personal.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </span>
          </div>
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl">
          {personal.name}
        </h1>

        <p className="mt-4 text-xl font-medium text-indigo-600 dark:text-indigo-400 sm:text-2xl">
          {personal.role}
        </p>

        <p className="mt-2 text-lg text-slate-500 dark:text-slate-400">
          {personal.tagline}
        </p>

        <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300">
          {personal.summary}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 hover:bg-indigo-700 hover:shadow-indigo-500/40 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm px-6 py-3 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-200"
          >
            Get in Touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 animate-bounce">
          <a
            href="#about"
            className="inline-block text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
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
