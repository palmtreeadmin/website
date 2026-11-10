---
name: Palmtree Infotech
description: AI consultancy and product engineering from Chennai, drawn as a data-lineage graph on paper.
colors:
  palm: "#0b6e4f"
  palm-deep: "#07563d"
  palm-wash: "#e3eee8"
  paper: "#fafaf8"
  paper-2: "#f1f1ec"
  field-white: "#ffffff"
  ink: "#111111"
  ink-2: "#4d4d47"
  ink-3: "#6b6b64"
  rule: "#d9d9d2"
  edge: "#c2c2ba"
  error: "#b42318"
typography:
  display:
    fontFamily: "Schibsted Grotesk Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.5rem, 1.4rem + 3.7vw, 4.25rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.035em"
    fontFeature: "'ss01'"
  headline:
    fontFamily: "Schibsted Grotesk Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.9rem, 1.3rem + 2vw, 2.75rem)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.028em"
  title:
    fontFamily: "Schibsted Grotesk Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.3125rem"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.012em"
  lead:
    fontFamily: "Schibsted Grotesk Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.125rem, 1rem + 0.4vw, 1.3125rem)"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "Schibsted Grotesk Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
    fontFeature: "'ss01'"
  label:
    fontFamily: "Schibsted Grotesk Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.4
  mono:
    fontFamily: "JetBrains Mono Variable, ui-monospace, Menlo, monospace"
    fontSize: "0.8125rem"
    fontWeight: 400
    letterSpacing: "0em"
    fontFeature: "'tnum'"
  hero:
    fontFamily: "Schibsted Grotesk Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.5rem, 1.4rem + 3.2vw, 4rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  case-title:
    fontFamily: "Schibsted Grotesk Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.25rem, 1rem + 2.6vw, 3.5rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  group-heading:
    fontFamily: "Schibsted Grotesk Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.5rem, 1.2rem + 1vw, 2rem)"
    fontWeight: 600
    lineHeight: 1.08
  prose-heading:
    fontFamily: "Schibsted Grotesk Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.02em"
  wordmark:
    fontFamily: "Schibsted Grotesk Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    letterSpacing: "-0.035em"
  reading:
    fontFamily: "Schibsted Grotesk Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.65
  button:
    fontFamily: "Schibsted Grotesk Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1
  ui:
    fontFamily: "Schibsted Grotesk Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 500
    lineHeight: 1.4
rounded:
  none: "0px"
  focus: "2px"
  node: "50%"
spacing:
  gutter: "clamp(1.25rem, 4.4vw, 4rem)"
  section: "clamp(5rem, 10vw, 9rem)"
  max: "90rem"
  row: "1.75rem"
  tap: "2.75rem"
components:
  button-primary:
    backgroundColor: "{colors.palm}"
    textColor: "{colors.field-white}"
    rounded: "{rounded.none}"
    padding: "0.95rem 1.35rem"
    height: "2.875rem"
  button-primary-hover:
    backgroundColor: "{colors.palm-deep}"
    textColor: "{colors.field-white}"
  button-quiet:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.95rem 1.35rem"
    height: "2.875rem"
  button-quiet-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.field-white}"
  input:
    backgroundColor: "{colors.field-white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.75rem 0.875rem"
    height: "3rem"
  filter-chip:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0 1rem"
    height: "2.75rem"
  filter-chip-pressed:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.field-white}"
  lineage-build-node:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.55rem 0.75rem"
    height: "2.75rem"
  lineage-build-node-on:
    backgroundColor: "{colors.palm}"
    textColor: "{colors.field-white}"
---

# Design System: Palmtree Infotech

## Overview

**Creative North Star: "The Lineage Sheet"**

The site reads like an engineer's lineage diagram printed on near-white paper: the visitor's kind of data on one side, what Palmtree builds in the middle, a shipped result on the other, joined by thin lines. Everything is drawn in ink on paper; one palm green marks the path being traced, the action to take, and where keyboard focus sits. Hierarchy comes from line weight and position, not from boxes, fills or shadows.

Density is that of a well-set report: generous section steps between content, tight hairline rows within a section, left-aligned type on a wide 90rem sheet. Content groups are hairline rows (an ink rule on top, light rules between), and the recurring mark is a small round node joined by a straight or curved line. The one authored motion is a traced path drawing itself in; everything else is a short colour or 3px nudge on hover.

The scene is light only, by decision. There are no cards, no eyebrows or kickers, no icon tiles and no decorative imagery.

**Key Characteristics:**
- Ink on near-white paper, one palm green with a reserved job.
- Hairline rows and nodes as the only containers; square corners everywhere except the round node.
- Schibsted Grotesk for every word; JetBrains Mono only for tool and stack names and numeric counts.
- Flat: depth is line weight, never shadow.
- Light scene only.

## Colors

An ink-and-paper neutral set with a single palm green that means "this is the path".

### Primary
- **Palm Green** (palm): the traced path in the lineage graph and case-study trace, the primary button fill, the focus outline, text selection, the input caret and the active node pin. Nothing else is filled green.
- **Deep Palm** (palm-deep): primary button hover, and the hover tint of links and row titles (a hovered row title turns deep palm as if picked out for tracing). Also the success status text in the contact form.
- **Palm Wash** (palm-wash): the 3px focus halo around a focused input. Never a surface fill.

### Neutral
- **Sheet Paper** (paper): page background, header (translucent over scroll), build-node fill.
- **Shaded Paper** (paper-2): the one alternate band, used for a full-width section (India teams) bounded by rules above and below.
- **Field White** (field-white): input fields, stack tool chips, and text on palm or ink fills.
- **Press Ink** (ink): body text, headings, the top rule of every row group, quiet-button stroke, current-nav underline, list bullets and resting node dots.
- **Graphite** (ink-2): lead paragraphs, row descriptions, footer text.
- **Pencil** (ink-3): labels, axis titles, sector tags, hints, de-emphasised tool lists, dimmed graph nodes. Holds AA on paper at small sizes.
- **Hairline** (rule): the light rules between rows, header bottom border, chip strokes on stack.
- **Edge Grey** (edge): input and filter-chip strokes, dimmed node pins, scrollbar thumb.
- **Signal Red** (error): field error text and invalid-field stroke only.

### Named Rules
**The Reserved Green Rule.** Palm green does four jobs only: the traced path, the primary action, focus and selection (deep palm carries their hover). Current-nav underlines, bullets and resting nodes are ink. If green appears anywhere else, it is a defect.

**The Ink Above, Hairline Between Rule.** A group of rows opens with a 1px ink rule and separates its rows with 1px hairline (rule) lines. The weight change is the hierarchy.

## Typography

**Display Font:** Schibsted Grotesk Variable (with Helvetica Neue, Arial)
**Body Font:** Schibsted Grotesk Variable (with Helvetica Neue, Arial)
**Label/Mono Font:** JetBrains Mono Variable (with ui-monospace, Menlo), for tool and stack names and numeric counts only

**Character:** One sturdy news-grotesk in tight, semibold headings and plain-spoken body, with stylistic set 01 on throughout; mono appears as a technical annotation, never as decoration.

### Hierarchy
- **Display** (600, clamp to 4.25rem, 1.02, -0.035em): page h1. Two page-specific variants: **Hero** (`--t-hero`, clamp to 4rem, max 22ch) so the homepage graph fits the first viewport, and **Case title** (`--t-case-title`, 2.25–3.5rem, -0.03em, full sheet width) so long case-study titles hold one line from about 1100px up.
- **Headline** (600, clamp to 2.75rem, 1.08, -0.028em): section h2. Grouped case-study headings step down to **Group heading** (`--t-group`, 1.5–2rem); headings inside case-study prose and the "How it fits together" heading use **Prose heading** (`--t-prose-h`, 1.5rem, -0.02em).
- **Title** (600, 1.3125rem, 1.25, -0.012em): row titles, stack group names, the result line in a trace, platform statements.
- **Lead** (400, clamp to 1.3125rem, 1.5, graphite, max 44rem): the one supporting paragraph under a heading.
- **Body** (400, 1.0625rem, 1.55): running text. Case-study prose and case-study result lines use **Reading** (`--t-reading`, 1.125rem / 1.65); prose sits within 62ch so lines stay under about 80 characters.
- **Label** (500, 0.875rem, pencil, sentence case): axis titles, field keys ("Started from", "Sector"), sector tags. No uppercase, no letter-spacing.
- **Mono** (400, 0.8125rem, tabular figures): tool lists joined by " · ", stack chips, filter counts.
- **UI** (`--t-ui`, 0.9375rem): controls and secondary links: nav links, compact buttons, filter chips, form labels and status, back and arrow links, row counts, footer text, aside keys.
- **Button** (`--t-button`, 600, 1rem): primary and full-width buttons. **Wordmark** (`--t-wordmark`, 700, 1.5rem): the "Palmtree." mark in header and footer.

Paragraphs, list items, definitions and captions all set `text-wrap: pretty` so a single word is not left alone on a last line.

### Named Rules
**The One Family Rule.** Every heading, label, button and paragraph is Schibsted Grotesk. Mono is a data annotation (a tool name or a count), never a label, heading or tag style.

**The Sentence-Case Label Rule.** Labels are Schibsted Grotesk, sentence case, pencil grey, sitting above or beside the thing they name. They are never uppercase, tracked, or placed as a kicker over a heading.

## Layout

A single wide sheet: content sits in a 90rem max column with a fluid gutter (1.25rem to 4rem). Sections are separated by a fluid step (5rem to 9rem) and open with a section head (heading plus optional lead, max 52rem, 1rem gap) followed by 2.5–4rem of air.

Within sections, content is laid out as asymmetric multi-column rows on CSS grid with baseline alignment: a name column, a description column, a de-emphasised tools column and a trailing count or arrow. Typical row padding is 1.25–1.75rem block; column gaps are 2rem. Case studies use a 62ch prose column with an 14–18rem sticky aside of ink-ruled key/value pairs.

Responsive behaviour collapses at 56rem: rows become single columns, side-by-side traces turn vertical (the connecting line runs down the left), the lineage graph shows only its result column as a hairline list, and the nav becomes a Contact button plus a Menu toggle that drops a full-width ruled list. Secondary breakpoints at 72rem and 64rem rebalance the build rows and hero copy. Interactive targets hold a 2.75rem minimum height.

## Elevation & Depth

The system is flat. There are no drop shadows; depth is expressed by rule weight (ink vs hairline), the one shaded-paper band, and position on the sheet. The sticky header is the only layered surface: paper at 82% with a 10px backdrop blur and a hairline bottom border, falling back to 94% opaque paper.

### Named Rules
**The Line-Weight Rule.** Never lift something to make it important; give it a heavier line or a better position. The only box-shadows in the build are functional: the 3px palm-wash input focus halo, the 2px inset ink current-nav underline, and a 2px paper ring separating an active build-node pin from its green fill.

## Shapes

Square corners everywhere: buttons, inputs, chips, build nodes and bands are all 0 radius. The single round form is the node, a filled circle (0.5625–0.75rem) that marks a source, build, step or result, with a 0.4rem ink dot as the list bullet. Lines connecting nodes are 2px palm when traced and 1.25px warm grey when resting; in the lineage graph they are cubic curves between pins, elsewhere straight. Arrows are a single 1.6px square-capped stroke glyph drawn in SVG.

## Components

### Buttons
Squared, solid and direct; the arrow does the talking.
- **Shape:** square (0 radius), 1px stroke matching the fill.
- **Primary:** palm fill, white 600-weight text at 1rem, padding 0.95rem × 1.35rem, min height 2.875rem, with a trailing arrow (compact 0.8rem × 1.1rem in the header).
- **Hover / Focus:** fill and stroke shift to deep palm over 180ms; the arrow slides 3px right over 240ms. Focus is the global 2px palm outline at 3px offset. Disabled turns pencil grey with a progress cursor.
- **Quiet:** transparent with a 1px ink stroke and ink text; hover inverts to ink fill and white text. Used for secondary actions beside a primary (India teams, 404).
- **Arrow link:** 600-weight text with a 1px currentColor underline border and trailing arrow; the in-text tertiary action ("All case studies", "See the full stack").

### Chips
- **Filter chip:** case-study filter. Paper background, 1px edge-grey stroke, 500-weight 0.9375rem label with a mono count at reduced opacity, min height 2.75rem. Hover strokes ink; pressed fills ink with white text. The filter bar sticks under the header with a hairline bottom.
- **Stack chip:** static. Field-white background, 1px hairline stroke, mono text, padding 0.35rem × 0.6rem.

### Cards / Containers
There are no cards. The container is the hairline row group: 1px ink rule on top, 1px hairline between rows, no background, no radius, no padding beyond the row's own block padding. Whole rows are links; on hover the title turns deep palm, the node dot turns palm, and the trailing arrow moves 3px.

### Inputs / Fields
- **Style:** field-white background, 1px edge-grey stroke, square corners, padding 0.75rem × 0.875rem, min height 3rem (textarea 8.5rem, vertical resize). Visible 600-weight labels above; "optional" in 400 pencil; hints in label size, pencil.
- **Focus:** stroke turns palm with a 3px palm-wash halo; caret is palm. Hover strokes pencil.
- **Error:** signal-red stroke and 500-weight red message under the field; the form status line reports success in deep palm and failure in red with a direct email fallback.

### Navigation
Wordmark left ("Palmtree" in 700 at 1.5rem, -0.035em, with a palm full stop; this is the one green outside the Reserved Green Rule, shipped as-is and awaiting an owner decision, not a pattern to repeat), text links in 500 at 0.9688rem, primary button at the far right. Hover tints links deep palm; the current page carries a 2px inset ink underline. Below 56rem: a compact Contact button and a bordered "Menu" toggle whose two lines rotate into a cross; the menu drops as a full-width paper panel of hairline-separated 1.125rem links with a full-width primary button, closable with Escape.

### Lineage Graph (signature)
Three columns (sources 0.85fr, builds 0.85fr, results 2fr) under pencil axis labels on a hairline. Sources are right-aligned text ending in a pin; builds are square ink-stroked boxes with pins on both edges; results are text rows with a sector tag. SVG curves join the pins. On hover or focus, a node's paths turn palm (2.25px), its pins scale 1.25 and turn palm, a build box fills palm, the result label gains a 2px palm underline, and unrelated nodes dim to pencil with edge-grey pins. The default path draws itself on load over 900ms (expo-out); no motion under reduced-motion. Below 56rem only the result list remains, each row showing its "source → build" trail in micro pencil type.

### Tool List
The case-study aside lists each tool as a 5.5rem × 2.75rem field-white tile with a 1px hairline stroke, holding the tool's original logo (carried over from the old site, contained, never cropped), followed by the tool name in mono, graphite. Tools without a logo show a small pencil-ringed node in the tile. Logos are decorative (empty alt); the name is the content.

### Solution Diagram
Case studies with an architecture diagram end with a "How it fits together" section: the original diagram PNG in a field-white frame (hairline stroke, ink top rule), linking to the full-size image. Below 56rem the frame holds a 45rem width and scrolls sideways inside a focusable region, and the caption says so. Each diagram carries a full text description as alt text. Diagrams are listed in `src/data/diagrams.ts`; the retail pipeline diagram is withheld because it contradicts its case study.

### Share Image
`public/og.png` (1200 × 630) is the link preview for every page: wordmark, the hero headline at display weight, a small lineage motif with one palm-traced path, and a mono footer line over an ink rule.

### Trace
A straight horizontal sequence of palm nodes joined by a 2px palm line, each step a label over a value; the last step carries the result at title size. Used for the case-study header (started from, built, result) and the India-team path. Turns vertical below 56rem.

## Do's and Don'ts

### Do:
- **Do** keep palm green to the traced path, the primary action, focus and selection; use ink for current-nav markers, bullets and resting nodes.
- **Do** group content as hairline rows: 1px ink rule on top, 1px hairline (rule) between.
- **Do** mark things with round nodes joined by lines, and keep every other corner square.
- **Do** set labels in Schibsted Grotesk 500, 0.875rem, sentence case, pencil grey.
- **Do** reserve JetBrains Mono for tool and stack names and numeric counts.
- **Do** give interactive targets at least a 2.75rem height and keep the 2px palm focus outline visible.
- **Do** limit motion to colour shifts (160–200ms), the 3px arrow nudge (240ms) and the single path draw, all on cubic-bezier(0.16, 1, 0.3, 1), and drop the draw under reduced motion.

### Don't:
- **Don't** use cards, tiles or boxed panels to group content.
- **Don't** put eyebrows or kickers above headings, and don't uppercase or track labels.
- **Don't** add drop shadows or lifted surfaces; express importance with line weight and position.
- **Don't** fill surfaces, badges or current-state markers with palm green.
- **Don't** use mono for labels, headings or tags.
- **Don't** add a dark theme; the scene is light only by decision.
- **Don't** round button, input or chip corners.
