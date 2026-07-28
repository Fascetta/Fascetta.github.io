# Christian Bianchi Research Portfolio

Production-ready personal research portfolio built with Next.js App Router, TypeScript, and Tailwind CSS v4.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- `lucide-react` for minimal iconography

## Architecture

- `src/app`: routes, metadata, sitemap, robots, icon generation
- `src/components`: reusable UI and research visuals
- `src/data`: typed content layer for profile, projects, publications, thesis, experience, and honors

## Routes

- `/`

## Content updates

- Profile and social links: `src/data/profile.ts`
- Research projects: `src/data/research.ts`
- Publications: `src/data/publications.ts`
- Experience and current research: `src/data/experience.ts`
- Honors: `src/data/honors.ts`
- Thesis: `src/data/research.ts`

## Media placement

- Replace conceptual research media by editing `src/components/project-visual.tsx`

The current visuals are intentionally abstract placeholders and do not claim to represent real experiment outputs.

## Missing URLs to supply

These are already modeled in the content layer and hidden from the UI until provided:

- GitHub
- LinkedIn
- Google Scholar
- Additional paper / code / project links for publications

## Local development

```bash
npm install
npm run dev
```

## Validation

```bash
npm run lint
npm run typecheck
npm run build
```

## Deployment

This repository is configured for GitHub Pages publishing at `https://fascetta.github.io`.

Push the `main` branch to the GitHub repository `fascetta/fascetta.github.io` and enable Pages to deploy from GitHub Actions.
