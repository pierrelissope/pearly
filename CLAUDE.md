# Pearly - Pet Insurance Landing Page

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4
- **Package Manager**: pnpm

## Conventions

- Use App Router only — no Pages Router
- All components are in `src/components/`, one per file
- All user-facing French text lives in `src/lib/locale.ts` — never hardcoded in components
- Code (variable names, file names, types) must be in English
- Never use `any` type
- No excessive comments — code should be self-documenting
- Use `next/image` for optimized images where applicable
- Prefer server components; only use `"use client"` when state or interactivity is needed
- Tailwind CSS for all styling — no CSS modules or styled-components

## Project Structure

```
src/
  app/
    layout.tsx       # Root layout (fonts, metadata, lang="fr")
    page.tsx         # Landing page composing all sections
    globals.css      # Tailwind directives + design tokens
  components/
    Header.tsx
    Hero.tsx
    DiseaseSection.tsx
    EmailSignup.tsx
    SimpleGesture.tsx
    Button.tsx
  lib/
    locale.ts        # All French UI strings
  types/
    index.ts         # Shared TypeScript types
public/
  img/               # SVG assets (icons, illustrations)
```

## Commands

- `pnpm dev` — Start dev server
- `pnpm build` — Production build
- `pnpm start` — Start production server
