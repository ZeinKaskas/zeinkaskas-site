# Work Section, Blog Post Plan

Source-of-truth for everything that will live under `/work` on the site.

---

## Source material (read first when drafting any post)

- [`_source/zein-interview-2026-05.md`](./_source/zein-interview-2026-05.md), full founder interview. Zein in his own voice. The well to draw from.
- [`_source/voice-and-positioning.md`](./_source/voice-and-positioning.md), distilled themes, the slogan, positioning, quotables, tone rules. Quick-reference.

## How this works

The site has **Featured Work** and **Recent Work** today (see `src/components/WorkPageContent.tsx`). Each card will eventually link to a long-form blog post, one page per project or topic, scrollable, with a Loom intro at the top, animated graphics that explain why the work is impressive, and skim-friendly copy.

**The workflow:**

1. **Zein names the next post**, "let's do Burjeel" or "let's do AI in fashion."
2. **Claude interviews Zein** using `_interview-template.md`, extracts the story, context, approach, what's interesting, what to show.
3. **Claude writes the concept doc** at `posts/<slug>.md`.
4. **Later, one-shot build** of the actual page on the site, using the concept doc as the blueprint.

Concept docs are not the website copy. They're the source material, the page gets built from them.

## Slugs

Slugs match the existing card titles in `src/components/WorkPageContent.tsx` so each doc lines up with the future page URL.

---

## Assets

All imagery and video for the posts now lives inside the project at `public/work-assets/`. These were copied over from `C:\Users\ZEIN\Desktop\Zeinkaskas Website` (1.1 GB across 155 files).

### Folder map

| Post | Asset folder |
|---|---|
| Consistent Characters | `public/work-assets/consistent-characters/` |
| Brief to Content | `public/work-assets/brief-to-content/` |
| Replace Agency | `public/work-assets/replace-agency/` |
| TVCs Process | `public/work-assets/tvcs-process/` |
| PepsiCo (single post, parent client) | `public/work-assets/pepsico/` with `quaker/` and `cheetos/` subfolders |
| Topic, AI in Fashion | `public/work-assets/topics/ai-in-fashion/` |
| Topic, AI in Food / FMCG | `public/work-assets/topics/ai-in-food-fmcg/` (food-shots, 2d-to-3d) |
| Topic, AI in Real Estate | `public/work-assets/topics/ai-in-real-estate/` |
| Meena | `public/work-assets/meena/References/` (11 files, 115 MB, locked cast and locations only; videos and shot iterations discarded per Zein) |
| Market Intelligence Briefing | `public/work-assets/market-intelligence-briefing/` (placeholder, awaiting sample decks) |

Project-specific folders (Burjeel, PLAAY, Bambuyu, Meena, RTA, Bank Card / WEFI, Market Analysis Tool, Global Fashion House) still live in `G:\My Drive\ZK Folder\` and have not been copied yet. We'll bring them over once Zein selects which assets each post should use.

### TODO before deploy: re-export everything to WebP

**This is important.** Every image in `public/work-assets/` is in its original format (PNG, JPG). Before any of this goes to production:

- All stills should be re-exported as WebP for fast loading. Aim for under 200 KB per hero image, under 100 KB per gallery thumbnail.
- All mp4 video should be re-encoded to web-friendly H.264 / H.265 with appropriate bitrate. Consider WebM as a fallback for web compatibility.
- Run an asset audit before each post goes live. Don't ship a 5 MB PNG.
- The current `public/work-assets/` folder is the staging area. We may want to move final optimized versions to a parallel `public/work-assets-optimized/` or do the conversion in place at build time.

This optimization is separate from the post-writing work. The posts can be drafted, the site can be built, but performance review is a hard gate before the site ships.

---

## Posts

### Project posts (a specific thing we shipped)

| # | Title | Slug | Site card today | Status |
|---|---|---|---|---|
| 1 | Burjeel Hospital | `burjeel-hospital` | Featured | Stub, Zein gathering more context |
| 2 | PLAAY | `plaay` | Featured | Notes captured, needs Loom + asset selection |
| 3 | Consistent Characters | `consistent-characters` | Featured | Old-site content + assets pulled, needs Zein's review |
| 4 | Brief to Content | `brief-to-content` | Recent | Old-site content + assets pulled, needs Zein's review |
| 5 | Replace Agency | `replace-agency` | Recent | Old-site content + assets pulled, needs Zein's review |
| 6 | TVCs Process | `tvcs-process` | Recent | Old-site content + rich assets, needs Zein's review |
| 7 | Meena | `meena` | not on site yet | Story captured, references-only locally (videos discarded per Zein), needs Loom + narrative confirmation |
| 8 | RTA (spec) | `rta-spec` | not on site yet | Notes captured, needs Loom + asset selection |
| 9 | Bank Card / WEFI (spec) | `bank-card-spec` | not on site yet | Notes captured, needs Loom + asset selection |
| 10 | Market Intelligence Briefing | `market-analysis-tool` | not on site yet | Positioning captured, awaiting sample decks for the post |
| 11 | Bambuyu | `bambuyu` | not on site yet | Notes captured, products launched, needs Loom + asset selection |
| 12 | PepsiCo (Quaker + Cheetos) | `pepsico` | not on site yet | Quaker side captured (LED-background substitute), Cheetos pending, single parent post |

### Topic posts (broader explainers)

| # | Topic | Slug | Status |
|---|---|---|---|
| 1 | AI applications in the fashion industry | `topics/ai-in-fashion` | Use cases drafted, has assets, needs final framing |
| 2 | AI applications in food brands / FMCG | `topics/ai-in-food-fmcg` | Use cases drafted, has assets, needs final framing |
| 3 | AI applications in real estate | `topics/ai-in-real-estate` | Use cases drafted, has assets, needs final framing |
| ... | (Zein will list more over time) | | |

## Conventions

- One file per post. When a post grows assets, promote to a folder (`posts/<slug>/concept.md`).
- Every post follows `_post-template.md` for the page shape.
- Every concept doc walks through `_interview-template.md` Q's.
- **Status legend:**
  - **Stub**, file exists, interview not run
  - **Has assets**, files copied to `public/work-assets/`, interview still pending
  - **Notes captured**, Zein has given context, ready for Loom + final asset selection
  - **Draft**, concept doc fleshed out, ready to build the page
  - **Built**, page exists on the site
