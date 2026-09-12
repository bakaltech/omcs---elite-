<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/60c89b44-405d-4cce-a28b-4347de944ffb

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

Open the URL printed by Vite (normally `http://localhost:3000/`). Do not
use a static server such as VS Code Live Server to open `index.html`: it
serves `src/main.tsx` without Vite's transformation and can return the
`application/octet-stream` MIME type that browsers reject for module scripts.

GitHub Pages is deployed by [.github/workflows/deploy-pages.yml](.github/workflows/deploy-pages.yml)
after pushes to `main`. The workflow builds the app before publishing it.
