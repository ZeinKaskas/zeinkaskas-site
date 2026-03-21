# Decision Log - zeinkaskas.com Rebuild

Every decision, preference, and rule from the planning sessions. Read this first.

---

## Session: 2026-03-20 (Day 1)

### Research Phase
- 8 parallel research agents deployed: WhatsApp (Mo), Gmail, website audit, 20 meeting transcripts, LinkedIn, Instagram, inspiration sites, B2B VSL research
- Discovered: site was ALREADY rebuilt from photography portfolio to "AI Director & Workflow Architect" (13 pages, React SPA on Vercel)
- Critical finding: Google still shows old "Model & Photographer" because SPA is client-side rendered
- LinkedIn profile is invisible to search engines
- Entire public digital presence says photographer/model. Zero AI/consulting visibility.

### Positioning Decisions
- **RULE: Never position AI as cost-cutting.** Zein said: "If you use AI as a tool to cut costs, you're also going to reduce quality inherently. You need someone who understands taste behind that tool, who has creativity."
- **RULE: No location mentions.** No Dubai, no London, nothing. Zein explicitly requested removal from all materials.
- **Positioning**: "AI Director & Creative Technologist" - a creative who uses AI, not a tech person selling automation
- **Headline direction**: "Taste can't be automated. But everything else can."
- **Tone**: Personable. "I want them to feel like I just sat down one day and just wrote these things down."

### VSL Decisions
- Length: 2-3 min core cut + 3-5 min extended with interview clips
- Style: Direct to camera, light script (bullet points, not teleprompter)
- Interview candidates: Rashi (PLAAY), Sahar (Bambuyu), Rowan, Itay Schiff (Weavy founder - very confident)
- Framework: Hook > Problem > What I Do > CTA (core), adds interview clips for extended

### Website Structure Decisions
- **Landing page**: Full viewport with pixel rain, headline, VSL, CTA, scroll indicator
- **Pixel rain**: Only on landing. Stops when you scroll past.
- **No slow scroll animation**: Landing page scrolls normally into content. No fade/scale effects.
- **Nav**: Hidden on landing, appears after scrolling past
- **Testimonials**: 2x2 grid. Top row: Itay Schiff + Rowan Brooks. Bottom row: Rashi Shah + Sahar Karoubi. Each with 16:9 video + LinkedIn link.
- **Services**: 3 cards - AI Consulting, AI Production, AI Systems & Workflows
- **Work**: Split into "Featured Work" (4 hero projects) and "Recent Work" (3 smaller + "View all" button)
- **No stat blocks** on case studies (removed "5 days, 60%, 8K")

### Trusted By
Samsung, Downy, Northern & Shell, Afia, Ministry of Defense KSA, Mashreq Bank, PLAAY, Bambuyu, Weavy
- **Removed**: Homegrown Ventures, Puig (deal not landed yet)

### Brand / Design Decisions
- **Dark theme**: #0A0A0A background
- **Colors**: From reference painting palette - magenta (#E22872), sky blue (#88C8EC), mango gold (#F2BE28), orange (#F07030), teal (#48B89A), emerald (#18924A), crimson (#CC1E30), plum (#3C2068), amber (#E09028), mauve (#7A5882), pink (#F2A5C0)
- **Brand redesign planned**: Current brand-config.json doesn't match. Will unify.
- **Abstract art**: Originally explored AI-generated paintings (6 prompt iterations). Abandoned in favor of programmatic pixel rain.
- **Light/dark toggle**: Planned for future (dark default)

### Interactive Background - Pixel Rain
- 6+ iterations to get here
- Final version: colored pixel blocks falling as rain, cursor pushes them, click creates firework explosion (8 sparks burst in random directions, same speed, settle into normal rain)
- Canvas 2D with `image-rendering: pixelated`
- All 11 palette colors used
- Contained to landing section only
- Approved and saved as `pixel-rain-approved.html`

### Background Iterations (for reference)
1. Gradient orbs following cursor - rejected (screensaver feel)
2. Dot grid ripple - liked but not enough
3. Connected particles - close but not there
4. Aurora wash - too subtle
5. Flow field with trails - liked direction but artifacts
6. Breathing constellations - rejected
7. Orbital systems - rejected
8. Pixel grid reveal - saved as backup, not primary
9. **Pixel rain - APPROVED** (the second pixel test)
10. Pixel rain + gravity pooling - interesting but too complex
11. Matrix decode - rejected
12. Pixel embers - concept ok, execution bad
13. Signal noise - strongly disliked
14. Pixel constellations - rejected
15. Pixel rain refined - close
16. Falling sand - liked but too many particles
17. Pixel aurora - not right
18. Pixel tide - not right
19. Pixel fireflies - not right
20. Final pixel rain with explosion + shockwave - **APPROVED**

### Technical Decisions
- Migrate from React SPA to **Next.js** for SSR/SEO
- Keep Tailwind CSS + Framer Motion from current site
- 301 redirect /people and /things to /work
- Set up Calendly for 15-min discovery calls
- Fix LinkedIn profile visibility
- Fix Loom payment (expiring, needed for client deliverables)

---

## Session: 2026-03-21 (Day 2)

### Bio / Social Media
- Two bio drafts reviewed and rejected for cost-cutting language
- Feedback sent to Mo via WhatsApp with 4 issues and 4 new options
- Key rule: don't say "save thousands of hours" - say "make the impossible possible"
- Bio direction: "Removing the limits on what brands can create with AI / The taste behind the tool"

### Site Structure Refinement
- Services updated: AI Consulting + AI Production + AI Systems & Workflows (custom tools, integrations, automation)
- Ticker fixed (was showing gaps) + added "System Architecture" and "Custom Integrations"
- Case studies split into Featured Work (4 big) + Recent Work (3 smaller + "View all")
- Stat blocks removed from case study cards

### Trusted By Update
- Removed: Homegrown Ventures
- Confirmed list: Samsung, Downy, Northern & Shell, Afia, Ministry of Defense KSA, Mashreq Bank, PLAAY, Bambuyu, Weavy

---

## Open Items

- [ ] Record VSL (2-3 min core)
- [ ] Schedule interviews (Itay, Rowan, Rashi, Sahar)
- [ ] Set up Calendly
- [ ] Fix LinkedIn profile
- [ ] Next.js migration (with Abrar)
- [ ] Brand redesign (colors, fonts unified)
- [ ] Generate/source case study images
- [ ] Get client logos (white versions)
- [ ] Light mode design
- [ ] Blog/insights section for SEO
- [ ] Fix Loom subscription
- [ ] Actual LinkedIn URLs for testimonial cards
