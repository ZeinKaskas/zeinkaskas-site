# Post Page Template

Shape of every blog-post page on the site. Built from the concept doc in `posts/<slug>.md`.

---

## On-page structure (top to bottom)

1. **Loom intro**, 2–3 min, Zein on camera or VO. Auto-paused, click to play. Top of the page, no preamble.
2. **Title block**, title, one-sentence hook, meta strip (client • format • year • tags).
3. **Hero asset**, the final piece. Film, ad, app demo, deck, screen recording. Plays/views immediately.
4. **The story**, short prose + visuals, broken into:
   - Context / what was happening before
   - Approach / what we did (animated graphic where it helps explain)
   - The interesting part (the WOW, what makes this notable)
5. **Process / BTS gallery**, captioned visuals, no narration. Skim-friendly.
6. **Outcome / takeaway**, what came of it, what the reader should leave with.
7. **Related**, link to 2–3 other posts (next project / related topic post).
8. **CTA**, book a call / see all work.

## Animated graphics, what they're for

Posts can have small motion graphics that explain the *interesting* part visually. Examples:

- A pipeline diagram that animates step by step
- A before/after that slides
- A character-consistency grid that morphs
- A speed graphic showing "5 days vs. 5 weeks"

Spec these in the concept doc under section D (Production), "what concept needs animation."

## Tone

- Skim-friendly. Visuals carry the weight.
- Light copy, every paragraph earns its place.
- No corporate voice.
- Show, don't argue. The work is the argument.

## Implementation notes (for the eventual one-shot build)

- Each post lives at `/work/<slug>` (matching the slug in `posts/<slug>.md`).
- Slugs match the cards in `src/components/WorkPageContent.tsx`.
- Topic posts could live at `/work/topics/<slug>` or `/blog/<slug>`, decide when we get there.
- Use the existing site styling primitives (`Reveal`, the dark cards, accent colors per tag).
