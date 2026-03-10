# Plan: Professional Portfolio Site (Next.js)

**Created:** 2026-03-10
**Status:** Ready for Agent007 Execution

## Summary
Build a polished single-page portfolio in the existing Next.js App Router project by replacing the starter page with a structured, production-ready portfolio experience. The page will present a strong hero section, grouped technical skills, and featured production applications with clear business context. Implementation should prioritize responsive design, accessibility, fast performance, and clean maintainable code. Content and section data should be centralized to reduce JSX clutter and improve long-term edits.

## Assumptions
- The portfolio is a single-page site at the root route (`/`).
- Name/title and personal intro copy can be finalized during implementation if not yet provided.
- External app/store links can be added incrementally when exact URLs are confirmed.
- Image assets for projects/logos may use placeholders first, then official assets after license/source validation.
- Tailwind-first styling remains the primary approach.

## Non-Goals
- Building a CMS/admin panel for content editing.
- Multi-language support in this phase.
- Blog, case-study subpages, or analytics dashboards in this phase.
- Backend contact form processing (can be added in a later phase).

## Evidence Snapshot
### Relevant Files
- app/page.tsx: current starter content to be replaced by portfolio sections.
- app/layout.tsx: global metadata + app shell; should be updated with portfolio metadata.
- app/globals.css: Tailwind import and theme tokens; base visual variables can be reused/extended.
- public/*: current static assets location for project logos/screenshots.

### Key Symbols
- `Home()` in app/page.tsx: current page entry component.
- `RootLayout()` in app/layout.tsx: global wrapper and typography baseline.
- `metadata` in app/layout.tsx: SEO and share-preview baseline.

### Similarity Scan
- Existing candidates: starter Next.js page pattern in app/page.tsx, global token pattern in app/globals.css.
- Reuse decision: reuse and extend existing App Router + Tailwind structure.
- Rationale: keeps implementation lightweight, aligned with project conventions, and easy to maintain.

### Delegation Summary
- Missions run: file/symbol mapping and portfolio UI/UX best-practice research.
- Key returns used: section flow (Hero→About→Skills→Projects→Contact), accessibility/performance guardrails, image sourcing strategy.
- Context savings: avoided deep manual scanning and moved directly to implementation-ready structure.

## Proactive Suggestions (Codebase-Aligned)
- Suggestion: Introduce structured content constants (skills/projects/contact) in dedicated data files instead of hardcoding all text in page JSX.
  - Alignment evidence: current app/page.tsx is a single monolithic component; splitting content follows clean-code goals.
  - Why suggested now: implementation will involve high-content density and frequent edits.
  - If skipped now: future updates become error-prone and noisy.
  - Expected gain: faster edits, cleaner JSX, lower regression risk.
  - Impact: quality + speed.
  - Adoption cost: low.
  - Recommendation: apply now.

- Suggestion: Add reusable section primitives (container, section title, project card, skill badge) before full styling pass.
  - Alignment evidence: existing structure has no reusable section components yet.
  - Why suggested now: avoids duplicated Tailwind classes across sections.
  - If skipped now: style drift and duplicated markup likely.
  - Expected gain: consistent UI and simpler iterative polishing.
  - Impact: quality.
  - Adoption cost: low-medium.
  - Recommendation: apply now.

- Suggestion: Add metadata/Open Graph updates in layout early.
  - Alignment evidence: metadata already exists in app/layout.tsx and is currently default template content.
  - Why suggested now: portfolio discoverability should be correct from first deploy.
  - If skipped now: poor SEO/social preview quality.
  - Expected gain: better professional presentation when links are shared.
  - Impact: quality.
  - Adoption cost: low.
  - Recommendation: apply now.

## Implementation Phases
### Phase 1: Information Architecture + Content Modeling
**Objective:** Define clear section-level content and move it into structured constants.
**Files:**
- app/page.tsx: replace starter content with section composition shell.
- app/layout.tsx: update metadata title/description.
- app/globals.css: add/adjust minimal global tokens if needed.
- app/data/portfolio.ts (new): central portfolio content.
**Steps:**
1. Create a typed portfolio data object containing intro, skills, project cards, and contact channels.
2. Replace static template copy with mapped section rendering.
3. Update metadata for personal brand and role.
**Acceptance Criteria:**
- [ ] All portfolio content renders from structured data.
- [ ] No starter template text remains.
- [ ] Metadata reflects personal portfolio brand.

### Phase 2: Professional UI Composition
**Objective:** Build a polished and consistent visual system across sections.
**Files:**
- app/page.tsx
- app/globals.css (only for global helpers/tokens)
- app/components/portfolio/* (new reusable section components)
**Steps:**
1. Implement sticky/simple top navigation with in-page anchors.
2. Build sections: Hero, About, Skills, Featured Applications, Contact, Footer.
3. Add responsive grids for skills and project cards.
4. Ensure clear hierarchy (headings, spacing, contrast, CTA emphasis).
**Acceptance Criteria:**
- [ ] Layout is responsive from mobile to desktop.
- [ ] Visual hierarchy is clear and consistent.
- [ ] All primary sections are complete and navigable.

### Phase 3: Project Showcases (Production Apps)
**Objective:** Present the 7 production deployments with concise business impact and stack context.
**Files:**
- app/data/portfolio.ts
- app/page.tsx (or project card components)
- public/projects/* (new local images if collected)
**Steps:**
1. Create project entries for:
   - EZman Food & Deliveries
   - EZman Rider
   - EZman Merchant
   - SmilePH
   - Doctors App
   - pickappsph.com
   - PickApps
2. For each card add: overview, role highlights, major technologies, and deployment status.
3. Add image/logo per project (official or licensed source); fallback to branded placeholders if unavailable.
**Acceptance Criteria:**
- [ ] All 7 projects are represented.
- [ ] Each card includes stack and business context.
- [ ] Image handling uses optimized `next/image` where applicable.

### Phase 4: Quality Pass (A11y, Performance, Clean Code)
**Objective:** Align implementation with production-grade best practices.
**Files:**
- app/page.tsx
- app/components/portfolio/*
- app/layout.tsx
- next.config.ts (only if remote image domains are needed)
**Steps:**
1. Validate semantic landmarks and heading order.
2. Ensure keyboard navigability and visible focus states.
3. Optimize images and reduce layout shift.
4. Run lint/build and fix issues.
5. Final copy polish for professional tone.
**Acceptance Criteria:**
- [ ] No lint/build errors.
- [ ] Accessibility baseline checks pass.
- [ ] Performance remains strong for first load.

## Work Units (Execution-ready)
**WU-1.1: Content Data Model**
- Subagent: `Executor-subagent-gpt`
- Files: [app/data/portfolio.ts]
- Symbols: [`portfolioData`, `skillsByCategory`, `projects`, `contacts`]
- Dependencies: None
- Complexity: Low

**WU-1.2: Page Composition Refactor**
- Subagent: `Executor-subagent-gpt`
- Files: [app/page.tsx]
- Symbols: [`Home()`]
- Dependencies: WU-1.1
- Complexity: Medium

**WU-2.1: Reusable Portfolio Components**
- Subagent: `Frontend-Engineer-subagent-gpt`
- Files: [app/components/portfolio/*]
- Symbols: [`Section`, `SectionTitle`, `SkillChip`, `ProjectCard`, `ContactItem`]
- Dependencies: WU-1.2
- Complexity: Medium

**WU-3.1: Project Media Integration**
- Subagent: `Frontend-Engineer-subagent-gpt`
- Files: [public/projects/*, app/data/portfolio.ts]
- Symbols: [`projects[].image`, `projects[].alt`]
- Dependencies: WU-2.1
- Complexity: Medium

**WU-4.1: Metadata + QA Hardening**
- Subagent: `Executor-subagent-gpt`
- Files: [app/layout.tsx, next.config.ts]
- Symbols: [`metadata`]
- Dependencies: WU-3.1
- Complexity: Low

## Blast Radius
- Services/modules impacted: app route UI (`app/page.tsx`), global metadata (`app/layout.tsx`), global style tokens (`app/globals.css`), static assets (`public/*`).
- External contracts impacted: None (unless a future contact form backend is introduced).

## Risks and Mitigations
- Risk: Missing or unlicensed external logos/images.
  - Mitigation: use local placeholders first; replace only with verified official/licensed assets.
- Risk: Content-heavy JSX becoming hard to maintain.
  - Mitigation: centralize content into typed data files and small reusable components.
- Risk: Visual inconsistency while iterating quickly.
  - Mitigation: define section primitives and spacing scale early.

## Drift Signals and Corrections
- Signal: New sections added without clear objective.
  - Correction: gate additions through non-goals and defer to backlog.
- Signal: Repeated Tailwind class blocks across sections.
  - Correction: extract shared components/util classes.
- Signal: Accessibility regressions during visual polish.
  - Correction: run keyboard + semantic checks at end of each phase.

## Plan Confidence
- Score: 93% (HIGH)
- Rationale: scope is clear, codebase is small, and existing structure is ideal for incremental refactor.
- Why not 100%: project image availability and final external links are not fully confirmed.
- To reach 100%: confirm official image sources and final destination URLs for each app/contact platform.

## Open Questions
1. Should the initial release include direct store/demo links for each application card?
   - Option A: Include available links now, add missing later.
   - Option B: Ship without links, add all at once after full verification.
   - Recommendation: Option A for faster launch with incremental completion.

2. Should the contact section include only direct channels or also a contact form?
   - Option A: Direct channels only (email, Telegram, Viber, WhatsApp).
   - Option B: Add form UI now and backend later.
   - Recommendation: Option A for cleaner MVP and lower implementation risk.

## Notes for Agent007
- Parallel guidance: WU-1.1 can start immediately; WU-1.2 and WU-2.1 can overlap once data shape is stable.
- Verification focus: responsive behavior, readability, section navigation anchors, accessibility focus states, image loading stability.
- Execute command path: @Agent007 execute the plan in developers/plans/portfolio/portfolio-site-plan.md
