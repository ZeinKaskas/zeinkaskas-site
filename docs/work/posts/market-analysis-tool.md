# Market Intelligence Briefing

**Slug:** `market-analysis-tool` (consider renaming the slug to `market-intelligence-briefing` to match how Zein actually talks about it)
**Site card today:** Not on site yet
**Status:** Positioning captured, examples coming later
**Assets folder:** `public/work-assets/market-intelligence-briefing/` (placeholder, awaiting sample decks from Zein)

---

## What we built (Zein's notes)

A market intelligence briefing skill, built on Claude. It calls a bunch of different APIs to pull from a lot of different sources, then synthesizes everything into a presentation.

You point it at a brand. It comes back with a deep brief covering everything that brand is doing right now, plus anything that looks off or is going wrong. Up-to-date, sourced, structured.

## Who it's for

Three buyer profiles:

- **Private equity firms.** Diligence work on portfolio companies and acquisition targets. The kind of brief that takes an analyst a week, available in minutes.
- **Brands looking at themselves.** Outside-in view of how the company actually shows up in the world right now, including the bits the comms team would rather not see.
- **Brands looking at competitors.** Same depth, pointed at someone else.

## Why this is worth a post

Most "AI competitive intelligence" tools are either toy-grade chat wrappers or expensive enterprise dashboards that try to do everything and end up doing nothing. This sits in between: a single skill, focused on producing one thing (a real briefing), grounded in actual data sources rather than vibes.

It also doubles as proof that we build, not just deliver. The featured project list is mostly creative production. The Market Intelligence Briefing is the page that says: we ship product too. Different muscle group, same team.

The post should be demo-led. A reader who watches the tool run on a recognizable brand and skims the deck it produces gets it immediately. Words don't sell this. The output does.

## Open questions for Zein

1. Confirm the official name. "Market intelligence briefing skill," "Market Analysis Tool," or something else? Whatever you call it on calls is what should sit at the top of the page.
2. Which APIs and source types does it pull from at the moment? You don't need to give me the full list, just enough to characterize the depth ("financial filings, news, social, hiring data, ad library, X, Y, Z").
3. Is this internal-only (we run it for clients), productized (clients can buy access), or both?
4. Who's the lead buyer right now (PE firms, brand strategy teams, agencies, in-house corp dev)?
5. What's the runtime end-to-end? Minutes, hours? Roughly.
6. Any clients we can reference, or do they all stay anonymous?
7. Examples you mentioned: when you have time, drop a couple of sample decks (or screenshots) into the assets folder so I can wire them into the post.

## Production checklist

- [ ] Loom intro recorded (2 to 3 min). For this one in particular, walk through a live run end-to-end.
- [ ] Hero asset: a screen recording of the tool running from input ("brand name") to output (deck) in one continuous take. That alone should sell it.
- [ ] Drop one or two sample decks into `public/work-assets/market-intelligence-briefing/` once Zein hands them over. Embed a few key slides on the page.
- [ ] Animated graphic idea: a brand name drops in at the top of the frame, then a fan of source icons (news, filings, social, hiring, etc.) fires into a synthesis layer, then a finished deck slides out the bottom. The whole pipeline in one loop.
- [ ] Re-export everything to WebP (and any video to web-friendly H.264 / WebM) before deploy

## Notes

- Frame around capability, not magic. "We built a briefing skill that pulls from real sources and outputs a real deck" is more credible than "AI does competitive intelligence."
- This post is a doorway for the consulting/diligence side of the business. The CTA can lean toward "request a sample brief" or "book a call to discuss" rather than the standard portfolio CTA.
- Cross-link to nothing yet. This stands on its own. Link out to the broader work page at the bottom.
