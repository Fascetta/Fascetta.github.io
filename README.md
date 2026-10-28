# Christian Bianchi — Research Portfolio

Source for [fascetta.github.io](https://fascetta.github.io): a single-page academic site built with Next.js (static export), TypeScript and Tailwind CSS v4, deployed to GitHub Pages.

## Updating content

All content lives in typed data files under `src/data/`; the page reads from them.

| What | File |
|---|---|
| Name, role, bio, education, social links, email | `src/data/profile.ts` |
| News (newest first) | `src/data/news.ts` |
| Selected research cards | `src/data/research.ts` |
| Venue, authors, links per paper | `src/data/publications.ts` |
| Honors & service | `src/data/honors.ts` |
| Experience | `src/data/experience.ts` |
| Milestones and B.Sc. thesis | `src/data/research.ts` |
| "Last updated" date (header and sitemap) | `src/data/site.ts` → `lastUpdated` |

Images go in `src/img/` and are imported from the data files. Keep photos as JPEG at most ~1200 px on the long side and logos at most ~256 px; the site serves images as-is.

### Things to keep in mind

- **Bump `lastUpdated`** in `src/data/site.ts` whenever you change content.
- **Papers under double-blind review:** don't name the venue anywhere on the site, including news items and image files.
- **Email** is stored base64-encoded (`emailEncoded` in `profile.ts`) and decoded only on click, so scrapers can't read it from the HTML. Don't add it as plain text anywhere else, including the structured data in `src/app/page.tsx`.
- **Link preview image** (`src/app/opengraph-image.png`) is a static 1200×630 PNG with name, role and affiliations. Regenerate it if those change.

## Local development

```bash
npm install
npm run dev
```

Before pushing:

```bash
npm run lint
npm run typecheck
npm run build
```

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the static site into `out/` and publishes it to GitHub Pages.

The repository's **Settings → Pages → Source** must be set to **GitHub Actions**. If it is set to "Deploy from a branch", GitHub also runs its own Jekyll build on every push, which races the real deploy and can replace the site with this README.
