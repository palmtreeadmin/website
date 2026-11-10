# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro with static output, chosen by the user for the 2027 rebuild (replaces hand-written HTML whose header and footer were injected with jQuery `.load()`). Served at `palmtreeinfotech.com` on GitHub Pages, deployed by the `Deploy to GitHub Pages` Actions workflow (`.github/workflows/deploy.yml`) on pushes to the `2027` branch, ahead of merging to `master`. Case studies become content files rendered through shared layouts.

## Users

Two primary audiences, confirmed by the user:

1. **Data, analytics and engineering leaders** at retail, CPG, manufacturing and similar companies who need data platforms, pipelines, dashboards, forecasting and now AI capabilities built on GCP, AWS or Azure. They arrive evaluating whether Palmtree can be trusted with a real engagement.
2. **Founders and product owners** who need an outside team to take a web, mobile or AI product from concept to launch, or who want to stand up an offshore engineering team in India.

Both are evaluating a vendor: they scan for relevant proof, then contact.

## Product Purpose

Palmtree Infotech is a Chennai-based consultancy. The site exists to turn a qualified visitor into a conversation: a contact form submission, email or call. Success is inbound enquiries from the two audiences above.

## Positioning

In the user's words: **AI consultancy services and product engineering, plus helping teams set up offshore engineering teams in India.** The claim neighbours can't copy is the combination of applied AI work grounded in more than a decade of shipped data engineering (the case studies), delivered by a team that can also become the client's India engineering arm.

## Operating Context

- Visitors usually arrive from referrals, LinkedIn or search, and read case studies to judge relevance before reaching out.
- Contact paths: the contact form, `info@palmtreeinfotech.com`, phone `044 42779031` (Mon–Fri 9am–6pm IST), office at 6D Narayana St, Ayanavaram, Chennai, Tamil Nadu 600023.
- The Drift chat widget stays, loaded on the visitor's first interaction. reCAPTCHA is dropped (see the contact form below).

## Capabilities and Constraints

Services to present (all confirmed as still offered):
- AI consultancy (agents, MCP, LLM pipelines, synthetic data)
- Product engineering: web, mobile and application development
- Offshore engineering team setup in India
- Big data and analytics, cloud computing and migration (GCP, AWS, Azure), enterprise integration
- Salesforce DevOps (Flosum, AutoRABIT, Copado, Gearset): `salesforce-devops.html`
- Cloud cost optimisation with Spot.io
- IoT solutions
- Digital marketing (display, SEM, mobile, video, social campaigns)

Pages to keep: home, case-study index, every case study, Salesforce DevOps, tech stack (`stack.html`).

Constraints and known defects to resolve:
- `google-cloud.html` is lorem ipsum plus copy that names Cloudreach. It must not ship as is: drop it or rewrite it from real facts.
- `case-studies/manufacturing-unit-consolidated-dashboard.html` and `manufacturing-units-consolidated-dashboard.html` are near-duplicates: merge them and keep a redirect.
- Existing URLs (`/case-studies/*.html`, `/case-studies`) should keep resolving.
- The contact form posts to FormSubmit (`https://formsubmit.co/ajax/rajesh@palmtreeinfotech.com`), confirmed by the user. reCAPTCHA is dropped; FormSubmit's `_honey` field handles spam.
- Analytics: GA4 (`G-JEFN2WDD8X`, set in `src/config.ts`). The page view is queued immediately and the gtag library loads after the page has settled.

## Current State

- The India-team section on the homepage and its nav links are hidden (commented out) while the owner reworks that content. The positioning still includes it.
- The footer reads "© 2027" by decision for the 2027 launch; update it by hand each year.

## Brand Commitments

- Name: Palmtree Infotech, shortened to "Palmtree". The browser tab icon is the original palm-tree favicon. The old wordmark (a teal "P" + "almtree") was template styling and is replaced by the typeset "Palmtree." mark.
- Social: Twitter `@palmtreelabs`, LinkedIn `in.linkedin.com/company/palmtree-infotech`.
- No other visual commitments are binding. The BootstrapMade "eBusiness" template look is being replaced.

## Evidence on Hand

- 23 real case studies in `case-studies/` (24 files including the duplicate), each following Problem → Challenges → Tools → Result. Some include concrete outcomes (e.g. Beacon Supermarket: "42% of shoppers who viewed a targeted message purchased the advertised product"). The original tool logos and five solution diagrams are carried over in `src/assets/case-studies/` and optimised at build time.
- Client names are anonymised by sector ("Telecom Major", "Fast Food Chain"). Keep them anonymised.
- Partner platforms worked on: Google Cloud, Microsoft Azure, AWS, Spot.io (logos in `img/partners/`). There's no evidence of formal partner tiers or certifications: do not claim any.
- Absent, so never fabricate: testimonials, named clients, client logos, team size, headcount, certifications, years-in-business figures beyond "more than a decade", pricing, offshore-team metrics.

## Product Principles

1. **Proof before promise.** The case studies are the strongest asset; every claim should be one click from shipped work.
2. **Two doors, one firm.** Data and AI leaders and product founders should each find their path quickly without the site splitting into two brands.
3. **Specific over sweeping.** Name the problem, the stack and the result; the old site's generic cloud boilerplate repeated three times is what to avoid.
4. **Every enquiry arrives.** The contact path is the site's job; it must work, confirm clearly, and fail loudly.

## Accessibility & Inclusion

Target WCAG 2.2 AA. The previous audit found focus outlines removed, a mobile menu that couldn't be reached by keyboard, brand teal text at about 2.2:1 contrast, placeholder-only form labels, and missing alt text. All of these are explicit non-regressions for the rebuild.
