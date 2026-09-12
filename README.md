# OMCS Digital Platform

The public website for Ottawa Muslim Community Services, built with React, TypeScript, Vite, and Tailwind CSS.

## Local Development

1. Install dependencies with `npm install`.
2. Start the site with `npm run dev`.
3. Build the production bundle with `npm run build`.

## Deployment

The site deploys to Vercel and GitHub Pages from the `main` branch. It is a
static front-end project and does not require application secrets.

Open the URL printed by Vite (normally `http://localhost:3000/`). Do not use
a static server such as VS Code Live Server to open `index.html`: it serves
`src/main.tsx` without Vite's transformation and can return the
`application/octet-stream` MIME type that browsers reject for module scripts.

GitHub Pages is deployed by
[.github/workflows/deploy-pages.yml](.github/workflows/deploy-pages.yml)
after pushes to `main`. The workflow builds the app before publishing it.
