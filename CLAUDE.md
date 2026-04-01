# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

There are no automated tests configured.

## Stack

- **Next.js 16** (App Router) + **React 19** — both have breaking changes vs prior versions; check `node_modules/next/dist/docs/` before writing Next.js code
- **Tailwind CSS v4** — no `tailwind.config.*` file; theme is defined via `@theme inline` inside `app/globals.css`
- **TypeScript** strict mode; path alias `@/*` maps to the project root

## Architecture

This is a marketing landing page SaaS app. `app/page.tsx` composes 11 section components sequentially (Hero → VideoDemo → ProofBar → Problem → BeforeAfter → HowItWorks → Features → Pricing → WhyDifferent → BuiltToLast → GetStarted).

**Key directories:**
- `app/components/section/` — one folder per landing page section, each self-contained
- `app/components/ui/` — shared primitives (`Button`, `StatusPill`)
- `app/pages/` — additional routes (`login`, `signup`, `onboarding`, legal pages) nested under `app/` using App Router conventions
- `lib/utils.ts` — exports `cn()` (clsx + tailwind-merge); use this for all className composition

## Design Tokens

CSS custom properties defined in `app/globals.css`:
- `--primary: #4f46e5` (indigo)
- `--secondary: #1f2b48` (dark blue)
- `--text-color: #828fa1`
- Fonts: Poppins (UI), Spline Sans (headings)

Custom animations available: `animate-float`, `animate-float-delayed`, `animate-marquee`.
