# Consistent Characters

**Slug:** `consistent-characters`
**Site card today:** Featured
**Status:** Has full content from old site + asset set, needs Zein's review
**Assets:** `public/work-assets/consistent-characters/`
- `Refs/` (Baby Sister, Dad, Mom, Product, Sister, Son): the locked character reference set
- `Mode 1/` through `Mode 4/`: four different prompting / generation modes with outputs
- `Context.txt`: full director's-treatment-style brief for a fictional detergent brand (L-U-N-D-A-R-E). Real example of how we feed context to the agents.

---

## What this is (from the old site, in your own words)

The hook on the old page was:

> "Character Consistency, On Demand. Teach the system your world, then generate consistent visuals in three powerful modes."

(The page actually had four modes by the end. It grew.)

The workflow has three phases.

### Phase 1, Asset Setup, Teach the System Your World

- **Step 1, upload the cast.** You upload images of each character. The system learns their faces, style, and overall look.
- **Step 2, products and backgrounds.** Optional. Add product photos and background images so the system knows exactly what needs to appear.
- **Step 3, add project context.** Style, tone, specific requirements. Anything that shapes the world.

### Phase 2, Four Ways to Generate

**Mode 1, Single Shot Composer.**
You describe one shot in natural language: who's in it, how they're framed, what they're doing, headroom, where the product is. The system creates that exact shot with your locked characters, optional product, and chosen background.

**Mode 2, Script to Full Storyboard.**
You upload a script. The system turns it into a shot list using custom system prompts. Then it writes a separate, detailed image prompt for every shot, always referencing your uploaded characters, products, and backgrounds. Using arrays and a text iterator, it fires every prompt to the image model in one automated run. Result: a full storyboard of consistent, realistic frames that are client-ready and use the same cast.

**Mode 3, Reference Shot Matching.**
Upload a reference frame. The system analyzes composition (angle, lighting, perspective) and rebuilds it using your own cast and products.

**Mode 4, Hero Shot Expansion.**
Upload a hero shot. The system generates 16 new variations: 8 showcasing new angles of the subject, and 8 placing them in entirely new scenarios.

### Phase 3, The Engine

The plumbing under all four modes:

- **Contextual awareness.** Prompts read your uploads and ensure every generated shot "talks about" the right people.
- **Batch processing.** Dedicated sets turn scripts into structured shot lists, batch-processed via arrays.
- **Composition transfer.** Extracts shot data (angle, crop) from references and rebuilds it with your assets.

> "Our proprietary engine combines multiple AI models to ensure that your character's identity remains stable, no matter the angle, lighting, or style."

The result: consistency across single images, storyboards, and matched references.

## Why this is worth a post

Character consistency is the hardest unsolved problem in AI image and video work. Every team that tries to make a campaign discovers it the moment the second shot looks like a different person. Most "AI character consistency" tools solve one mode and call it done.

We solved it across four modes that each handle a different real-world need: directed single shots, script-to-storyboard, reference matching, and hero-shot variation. That's the post.

The L-U-N-D-A-R-E detergent brief in the assets folder is the worked example. It's a fictional family with locked refs (Mom, Dad, Sister, Son, Baby Sister) and a product. Use that family across the four modes to show the engine doing its job.

## Open questions for Zein

1. The old page had four modes but called them "three powerful modes" in the header. That mismatch is going to look sloppy. Confirm: four modes is current, header copy gets updated.
2. The L-U-N-D-A-R-E brief is fictional. Are we comfortable using it as the demo on a real client-facing page, or do we want to swap in something from a real engagement?
3. The TVCs Process post uses what looks like the same family cast (Brother, Father, Mother, Sister, Kid Ceo). Confirm if that's the same demo or two separate ones. If same, the two posts should cross-reference openly.
4. Are there any modes we've added or dropped since the old site, beyond the four documented?
5. Best CTA: book a call, request access to the workflow, see related workflows?

## Production checklist

- [ ] Loom intro recorded (2 to 3 min)
- [ ] Hero asset: the locked-cast grid (Mom / Dad / Sister / Son / Baby Sister / Product) feels strongest. Six tiles, the whole demo's source of truth in one image.
- [ ] Per-mode example panel using L-U-N-D-A-R-E:
  - Mode 1: single shot generated from the cast
  - Mode 2: a few storyboard frames
  - Mode 3: reference image vs. result
  - Mode 4: hero shot vs. its 16 variations
- [ ] Animated graphic idea: a character reference photo "locks" into a small frame on the left. On the right, the same character animates through a dozen different shots, all consistent. The lock stays solid. That's the whole post visualized.
- [ ] Re-export everything to WebP before deploy

## Notes

- Existing site card uses tag "AI Systems" with teal accent.
- Cross-link to `tvcs-process.md` (the cast appears there too) and to `replace-agency.md`, `brief-to-content.md` (sibling workflows).
- Voice: stay matter-of-fact about what the engine does. The work is the argument.
