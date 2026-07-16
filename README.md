# Giovani Batista — Portfolio Site

Personal portfolio / CV site built with [Eleventy](https://www.11ty.dev/) and [Tailwind CSS](https://tailwindcss.com/), deployed on [Netlify](https://www.netlify.com/).

## Project structure

```
.
├── eleventy.config.js     # Eleventy config (input/output dirs, passthrough copies, filters)
├── netlify.toml           # Netlify build settings
├── package.json
└── src/
    ├── _data/
    │   └── site.json      # All page content lives here — edit this to update the site
    ├── _includes/
    │   └── base.njk        # Shared layout (head, nav, footer, script)
    ├── styles/
    │   └── input.css       # Tailwind source (compiles to main.css on build)
    ├── images/
    ├── resume.pdf           # Linked from the "Download Résumé" buttons
    └── index.njk             # Home page
```

## Editing content

Almost everything on the page — your bio, experience, skills, education, contact links — comes from **`src/_data/site.json`**. Update that file and rebuild; you shouldn't need to touch the templates for routine content changes.

To replace the résumé PDF, drop a new file at `src/resume.pdf` (keep the same filename, or update the links in `src/_includes/base.njk` and `src/index.njk`).

## Local development

Requires Node.js 18+ (Netlify is configured for Node 20).

```bash
npm install
npm run dev
```

This runs the Tailwind CLI in watch mode and the Eleventy dev server together, at `http://localhost:8080`.

## Build

```bash
npm run build
```

Runs `tailwindcss` to compile `src/styles/input.css` → `src/styles/main.css`, then runs `eleventy` to build the site into `_site/`.

## Deploying on Netlify

1. Push this repo to GitHub (or GitLab/Bitbucket).
2. In Netlify: **Add new site → Import an existing project**, and pick the repo.
3. Netlify will read `netlify.toml` automatically:
   - Build command: `npm run build`
   - Publish directory: `_site`
   - Node version: 20
4. Deploy. Every push to your main branch will trigger a new build.

No environment variables or extra configuration are needed.
