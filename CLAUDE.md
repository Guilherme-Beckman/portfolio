# CLAUDE.md

## Project Overview

Next.js 15 portfolio site built with React 19 and TypeScript. Uses the App Router with Turbopack for development. Supports internationalization (English and Portuguese) via next-intl. Animations powered by Motion (Framer Motion) and GSAP.

## Commands

- `npm run dev` — Start dev server (Turbopack + next-video sync in watch mode)
- `npm run build` — Production build
- `npm run start` — Start production server
- `npm run lint` — Run ESLint (next/core-web-vitals + next/typescript)

## Project Structure

```
src/
├── app/
│   ├── components/       # Reusable React components (~32 files)
│   ├── data/             # Structured data (skills, experience, education)
│   ├── projects/         # Project showcase pages (6 projects)
│   ├── about-me/         # About page
│   ├── resume/           # Resume page
│   ├── utils/            # Animation utilities
│   ├── globals.css       # Global styles and CSS custom properties
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   └── template.tsx      # Page template with GSAP transition animations
├── i18n/                 # Internationalization config
messages/                 # Translation files (en.json, pt.json)
public/                   # Static assets (images, icons, resumes)
videos/                   # next-video project files
```

**Path aliases:** `@/*` → `./src/*`, `public/*` → `./public/*`, `data/*` → `./src/app/data/*`

## Code Conventions

- **Components**: PascalCase filenames (`ComponentName.tsx`). Props interfaces defined above the component.
- **Styling**: CSS Modules (`.module.css`) colocated with components. Global CSS custom properties in `globals.css`: `--dark-cyan`, `--light-cyan`, `--dark-gray`, `--light-gray`, `--black`.
- **Animations**: GSAP for page overlay transitions (`template.tsx`), Motion for component fade-in (`fromY`) and slide-in (`fromX`) animations.
- **Navigation**: Custom `TransitionLink` component for animated route changes with GSAP overlay.
- **Data files**: Structured TypeScript files in `src/app/data/` for skills, experience, education, and graph visualization data.
- **i18n**: Translation JSON files in `messages/` (en.json, pt.json). Locale stored in `document.cookie` and resolved server-side in `src/i18n/request.ts`. Default locale is `en`.
- **Font**: Average Sans (Google Fonts) via `--font-main`.

## Key Configuration

- `next.config.ts` — Plugins: `withNextVideo`, `withNextIntl`. Remote images allowed from `guilherme-beckman.github.io`.
- `tsconfig.json` — Strict mode, ES2017 target, bundler module resolution, incremental compilation.
- `eslint.config.mjs` — Flat config extending `next/core-web-vitals` and `next/typescript`.

## Notes

- No test framework is configured.
- Deployed on Vercel.
- Dark theme with cyan accents and glassmorphism effects.
- Package manager: npm.
