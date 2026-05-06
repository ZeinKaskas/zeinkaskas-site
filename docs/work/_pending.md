# What's Still Pending from Zein

A running list of every post where I'm still waiting on something from Zein. Ordered roughly by what would make the biggest difference.

---

## Quick wins (Zein has commented, just needs final touches)

These have notes captured. Each post file has 4 to 5 specific open questions at the bottom. Quickest to ship.

- **PLAAY**, `posts/plaay.md`. Open: one-line tagline, dates, did renders end up in paid media, original brief, NDA scope.
- **Bambuyu**, `posts/bambuyu.md`. Open: what Bambuyu sells, how the edit-then-render loop ran, where renders ran, dates, NDA.
- **RTA (spec)**, `posts/rta-spec.md`. Open: actual concept, what elements were used, why Seedance specifically, timeline, RTA's reaction.
- **Bank Card / WEFI (spec)**, `posts/bank-card-spec.md`. Open: concept in one line, length / placement, beat-by-beat re-hooks, tools used, WEFI's reaction. Also confirm post title (WEFI vs Bank Card).
- **Meena**, `posts/meena.md`. Story captured. References-only assets locally (cast + locations, 115 MB). Videos and shot iterations have been discarded per Zein. Open: confirm the deliverable, whether the multi-generation Aziz read is right, exact dates, NDA scope, and whether to hand over the final cut for embedding.
- **PepsiCo**, `posts/pepsico.md`. Single parent-client post covering Quaker and Cheetos. Quaker side captured (LED-background substitute, time crunch, parity in look). Open: can we name PepsiCo / Quaker / Cheetos publicly, what was Cheetos's piece, single shoot or bundled, dates, did they use all three time-of-days.

## Posts pulled forward from the old site (need Zein's review)

I extracted the content from the old ZEINWEB GitHub repo. Each of these posts now has the full phase / mode breakdown that was on your old site, plus the asset set in the project. They need your eyes to confirm the framing is current.

- **Replace Agency**, `posts/replace-agency.md`. Five-phase pipeline, "AI Campaign Engine, Replace the Agency."
- **TVCs Process**, `posts/tvcs-process.md`. Four-step pipeline + decision: lead with Mina or stay generic.
- **Brief to Content**, `posts/brief-to-content.md`. Four-phase deck-to-storyboard workflow.
- **Consistent Characters**, `posts/consistent-characters.md`. Three-phase / four-mode workflow.

For each: confirm the pipeline is still accurate, decide on positioning / tone, pick the CTA. See the "Open questions" section at the bottom of each post file.

## Posts with assets but no narrative yet

(Cheetos side now folded into the unified PepsiCo post above.)

## Posts that haven't been discussed at all

- **Burjeel Hospital**, `posts/burjeel-hospital.md`. The 4-min film, 5 days, with BTS. Mentioned in passing. **Zein is gathering more context to share.**
- **Market Intelligence Briefing**, `posts/market-analysis-tool.md`. Positioning captured (Claude-powered briefing skill that pulls from many APIs, output is a deck, buyers are PE firms / brands looking at themselves / brands looking at competitors). Awaiting: confirm the official name, list the source types, sample decks for the page, whether it's productized or internal-only.

## Topic posts (drafted by Claude, need Zein's validation)

- **AI in Fashion**, `posts/topics/ai-in-fashion.md`. Need: which 2 to 3 use cases lead, target reader, what NOT to promise.
- **AI in Food / FMCG**, `posts/topics/ai-in-food-fmcg.md`. Need: which 2 to 3 use cases lead, can we use PepsiCo publicly, what NOT to promise.
- **AI in Real Estate**, `posts/topics/ai-in-real-estate.md`. Need: have we done any real estate client work, target market, which use cases lead.

## Site funnel: locked, do not touch

Per Zein, the main funnel is set and should not change:

- Home page (`src/app/page.tsx`)
- Hero (`src/components/Hero.tsx`)
- Testimonials (`src/components/Testimonials.tsx`)
- Booking (`src/app/book/`, `src/components/BookPageContent.tsx`, `src/components/CalendlyEmbed.tsx`)
- Contact (`src/app/contact/`, `src/components/ContactPageContent.tsx`)

## Site funnel: changeable but not requested yet

- About section (`src/components/AboutBrief.tsx` + `src/app/about/`). Zein has said this is fair game when we want.

## Other open items

- **TrustedBy logos for Quaker and Cheetos.** Currently commented out in `src/components/TrustedBy.tsx`. Source the actual logo files into `public/logos/quaker.png` and `public/logos/cheetos.png`, then uncomment the entries.
- **Production gates before going live:**
  - Re-export all of `public/work-assets/` to WebP. See main README.
  - Pick one Loom hosting setup (Loom, Vimeo, self-hosted).
  - Decide URL pattern for topic posts (`/work/topics/<slug>` or `/blog/<slug>`).
  - Wire up the WorkPageContent cards to real post pages as they go live.
