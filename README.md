# palmtreeinfotech.com

Astro static site. Requires Node 24 (`.nvmrc`).

    npm install
    npm run dev      # http://localhost:4321
    npm run build    # outputs dist/

Case studies live in `src/content/case-studies/*.md`. Each file's frontmatter (`build`, `sources`, `headline`, `featured`) places it on the homepage lineage graph and the case-study index.

The contact form posts to FormSubmit (`FORM_ENDPOINT` in `src/config.ts`). The first submission sends an activation email to that address; confirm it once or no messages are delivered.

Deploys to GitHub Pages through `.github/workflows/deploy.yml` on pushes to `master`.
