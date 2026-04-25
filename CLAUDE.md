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

This is a marketing landing page SaaS app. `app/page.tsx` composes 12 section components sequentially (Hero → VideoDemo → ProofBar → Problem → BeforeAfter → HowItWorks → Features → Pricing → CustomWorkflow → WhyDifferent → BuiltToLast → GetStarted).

**Key directories:**
- `app/components/section/` — one folder per landing page section, each self-contained
- `app/components/ui/` — shared primitives (`Button`, `StatusPill`)
- `app/pages/` — additional routes (`login`, `signup`, `onboarding`, `verify-email`, `workflows`, legal pages) at `/pages/...` URLs
- `app/pages/workflows/` — workflow case-study showcase: `page.tsx` lists cards, `WorkflowCard.tsx` is the grid tile, `WorkflowModal.tsx` is the case-study detail modal. The page calls `listWorkflows()` and falls back to `mockWorkflows` on `ApiError`, so it renders before the backend exists.
- `app/api/` — Next.js Route Handlers; currently `schedule-webhook` proxies Cal.com booking data to `N8N_WEBHOOK_URL`
- `lib/api.ts` — `request<T>()` base fetcher (sends `credentials: "include"` for httpOnly JWT cookies, throws `ApiError`)
- `lib/auth.ts` — typed auth API calls (`login`, `signup`, `logout`, `getMe`, `verifyEmail`, etc.)
- `lib/workflows.ts` — typed workflow CRUD client (`listWorkflows`, `getWorkflow`, `createWorkflow`, `updateWorkflow`, `deleteWorkflow`) + `Workflow` types + `mockWorkflows` seed data. Backend contract: `GET /api/workflows` returns `Workflow[]`.
- `lib/utils.ts` — exports `cn()` (clsx + tailwind-merge); use this for all className composition
- `app/context/AuthContext.tsx` — `AuthProvider` + `useAuth()` hook; wraps the whole app in `layout.tsx`

**Navbar anchors are path-aware**: `Navbar.tsx` reads `usePathname()`. On `/` it smooth-scrolls to the section; on any other route it routes to `/#<id>` so anchor links keep working from inner pages.

## Auth Flow

Auth uses httpOnly JWT cookies managed by the backend at `NEXT_PUBLIC_API_URL` (default `http://localhost:8080`). `AuthProvider` calls `getMe()` on mount to restore the session. Google OAuth redirects to `{API_URL}/api/auth/google`. The onboarding page guards itself with `useAuth()` and redirects unauthenticated users to `/pages/login`.

## Environment Variables

Copy `.env.example` to `.env.local`:
- `NEXT_PUBLIC_API_URL` — backend base URL (no trailing slash); defaults to `http://localhost:8080`
- `NEXT_PUBLIC_CAL_LINK` — Cal.com booking slug (`username/event-name`); onboarding page skips embed if unset
- `N8N_WEBHOOK_URL` — server-side only; forwarded by `app/api/schedule-webhook/route.ts`

## Design Tokens

CSS custom properties defined in `app/globals.css`:
- `--primary: #4f46e5` (indigo)
- `--secondary: #1f2b48` (dark blue)
- `--text-color: #556579`
- Fonts: Poppins (UI), Spline Sans (headings)

Custom animations: `animate-float`, `animate-float-delayed`, `animate-marquee`.
Custom utilities: `dotted-grid` (dot pattern background), `dotted-grid-fade` (gradient overlay for dot grid), `bg-gradient-radial`.
