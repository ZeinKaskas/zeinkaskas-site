# zeinkaskas.com - Website Rebuild

## What This Repo Is

This is the planning, reference, and handover repository for Zein Kaskas's personal website rebuild. It contains everything needed to pick up development at any point: research findings, design decisions, approved mockups, VSL script, old site data, and the decision log.

The actual production site will be built in **Next.js** (migrated from the current React SPA on Vercel). This repo is the reference, not the production codebase.

## Quick Start

1. Read `docs/DECISION-LOG.md` to understand every decision made and why
2. Open `mockup/index.html` in a browser to see the approved layout
3. Open `mockup/pixel-rain.html` to see the approved interactive background
4. Read `docs/EXECUTION-PLAN.md` for the phased build plan
5. Check `reference/old-site-extracted.md` for all content/code from the current site

## Repo Structure

```
zeinkaskas-site/
├── README.md                 # This file
├── mockup/
│   ├── index.html            # Full website mockup (approved layout)
│   ├── pixel-rain.html       # Pixel rain background (standalone, approved)
│   └── wireframe-v2.html     # Earlier wireframe iteration
├── docs/
│   ├── DECISION-LOG.md       # Every decision, preference, and rule
│   ├── RESEARCH-FINDINGS.md  # Full research (11 sections, 8 agents deployed)
│   ├── EXECUTION-PLAN.md     # Phased build plan with all decisions locked
│   └── VSL-SCRIPT.md         # VSL script (2:10 core + 3:30 extended)
└── reference/
    └── old-site-extracted.md  # All data/content/code from old React SPA
```

## Key Links

- **Current live site**: https://zeinkaskas.com (React SPA, Vercel)
- **Old site repo**: https://github.com/17Abrar/ZEINWEB
- **Brand pivot project memory**: `memory/project_brand_pivot.md` in ClaudeClaw

## Tech Decisions

| Decision | Choice | Why |
|----------|--------|-----|
| Framework | Next.js (SSR/SSG) | Current React SPA is invisible to Google. Need server rendering. |
| Hosting | Vercel | Already using it. Next.js is native to Vercel. |
| Styling | Tailwind CSS + Framer Motion | Keep from current site. Works well. |
| Interactive BG | Pixel rain (Canvas 2D, pixelated) | Approved after 6+ iterations. Distinctive. |
| Fonts | Inter + Outfit | From current site, works well. |
| Theme | Dark default (#0A0A0A) + light mode toggle planned | |

## Brand Rules

- **NEVER position AI as cost-cutting**. Always creative enablement.
- **No location mentions** (no Dubai, no London, nowhere).
- **Minimal text**. Every word serves a purpose.
- **Centered layout**. Everything flows down the center.
- **Personable tone**. "Like I sat down and wrote it." Not corporate.
