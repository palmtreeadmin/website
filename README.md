# palmtreeinfotech.com

Astro static site. Requires Node 24 (`.nvmrc`).

    npm install
    npm run dev      # http://localhost:4321
    npm run build    # outputs dist/

Case studies live in `src/content/case-studies/*.md`. Each file's frontmatter (`build`, `sources`, `headline`, `featured`) places it on the homepage lineage graph and the case-study index.

Before going live, set the Formspree endpoint (and optionally a GA4 ID) in `src/config.ts`.

Deploys to GitHub Pages through `.github/workflows/deploy.yml` on pushes to `master`.
