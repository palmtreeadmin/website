---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: ["src/pages/case-studies.astro","src/pages/case-studies/[slug].astro"]
---

# Homepage (and site world): Palmtree 2027

Mode: Persuade (homepage). Case-study pages, stack and Salesforce DevOps are Read surfaces in the same world.

Audience: data/AI leaders at retail, CPG and manufacturing firms; founders needing product engineering or an India team. Job: judge relevance from shipped work, then make contact. Action: the contact form (FormSubmit), email or phone. Proof: 23 case studies. Brief constraints: minimal, professional, not playful; no AI gloss.

## Direction contract

THESIS: The homepage is a lineage graph: the visitor's kind of data on the left, what Palmtree builds in the middle, a shipped case-study result on the right. It refuses the category default of a headline over three service icon cards and a logo strip.

OWN-WORLD: Near-white paper (#FAFAF8), ink #111, hairline edges #C2C2BA, one palm green (#0B6E4F) used only for the traced path, the primary action and focus. Schibsted Grotesk for all type, JetBrains Mono only for tool and stack names. Sections are hairline rows and nodes, never cards; hierarchy comes from line weight and position.

STORY: Within seconds the visitor sees that Palmtree builds AI, data and products from data like theirs. They trace a line to a real result, believe the firm has done their problem, and start a conversation.

FIRST VIEWPORT: Thin nav (wordmark left, links, 'Start a conversation' button right). The headline at about 4.25rem, left-aligned across 8 columns, with one line of support copy. Below, a full-width three-column graph (sources, builds, results) with the default path to the Portuguese PDF → JSON study traced in green. The primary action is in the nav and repeats at the graph's end.

FORM: Data-lineage graph, position 4 on the grounded list (assigned by the roll). seed:228e9ac7fc9156d4. Signature interaction: hover or focus any node to retrace its paths in green while the others dim; result nodes link to their case study. Motion: one authored moment, the default path drawing on load (none under reduced motion).

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Unresolved

- GA4 ID, or no analytics.
- Whether the Drift chat stays (kept behind a config flag).
- The India team section's copy needs owner review.
