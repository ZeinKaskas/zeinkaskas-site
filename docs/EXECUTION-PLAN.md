# ZEIN KASKAS - BRAND PIVOT EXECUTION PLAN
## Date: 2026-03-20
## Status: FINAL - Ready to Execute

---

# DECISIONS LOCKED IN

| Decision | Answer |
|----------|--------|
| Site built by | Zein + Abrar, vibe-coded (React + Tailwind + Framer Motion on Vercel) |
| SEO fix | Migrate to Next.js (SSR/SSG on Vercel) |
| Old /people + /things pages | 301 redirect to /work |
| Brand direction | Redesign. Abstract art backgrounds (colorful, bold, painterly). Dark mode default + light mode toggle. Personable, not hyper-professional. |
| VSL length | 2-3 min core cut + 3-5 min extended cut with interview clips |
| VSL style | Direct to camera, light script, conversational delivery |
| Interview candidates | Rashi (PLAAY), Sahar (Bambuyu), Rowan (contact), Etai (Weavy founder - very confident) |
| Consulting page personal use cases | Keep as visual explainers, turn into blog-post-style visual pages |
| Case studies page | Already has real content. Add proper case study section with metrics. |
| Work page | Already has real content. |
| Calendly | Needs to be set up (15-min discovery call) |
| LinkedIn | Zein will fix himself |
| Target ICP | All: CMOs, agency owners, startup founders. Different funnel pages per audience later. |
| Art assets | AI-generated abstract patterns, animated (looping GIF/video) |
| Etai interview | Very confident he'll say yes |

---

# THE PLAN

## Phase 0: Immediate Fixes (Days 1-3)

### 0.1 Set Up Calendly
- Create 15-minute "AI Strategy Session" or "Discovery Call" slot
- Connect to Google Calendar
- Get the embed code and booking link ready
- This is the conversion endpoint for everything

### 0.2 Google Search Console
- Verify zeinkaskas.com in Google Search Console (if not already)
- Submit current sitemap.xml
- Request indexing for all 13 current pages
- Request removal of /people and /things from index
- Add 301 redirects for /people -> /work and /things -> /work

### 0.3 Fix Loom Subscription
- Payment is expiring. You use Loom for client deliverables (Puig handoff). Fix it or switch to an alternative.

---

## Phase 1: VSL Script + Recording (Days 3-10)

### 1.1 Write the VSL Script

**2-3 MIN CORE CUT** (your parts only - can go live immediately)

```
SECTION 1: HOOK (0:00-0:20)
- Bold opening claim. NOT "Hi I'm Zein."
- Something like: "Most companies spend months making content
  that AI can produce in days. I know because I build the systems
  that do it."
- Or: "I produced an 8K cinematic video in 5 days. Here's why
  that matters for your business."

SECTION 2: THE PROBLEM (0:20-0:50)
- "Every brand knows they need AI. But knowing and doing are
  different things."
- "Your team is either drowning in manual content production,
  or experimenting with AI tools that don't connect to anything."
- Cost of inaction angle: "Your competitors are already shipping
  AI-produced content. The gap gets wider every month."

SECTION 3: WHAT I DO (0:50-1:30)
- "I build AI systems for brands. Not tools - systems."
- Quick visual montage: Burjeel 8K video, PLAAY product renders,
  workflow screenshots
- "Consulting, production, automation, training. Whatever your
  team needs to actually use AI, not just talk about it."
- Brief credential flash: client work, Weavy expertise

SECTION 4: CTA (1:30-2:00)
- "If any of this is relevant to what you're dealing with,
  book 15 minutes with me."
- "I'll tell you exactly where AI fits in your workflow and
  what it would take to get there."
- Calendly link on screen
- "No pitch. Just clarity."

[END OF CORE CUT - 2:00]
```

**3-5 MIN EXTENDED CUT** (adds interview clips between your sections)

```
Same Section 1: HOOK (0:00-0:20)
Same Section 2: THE PROBLEM (0:20-0:50)

SECTION 2.5: PROOF - INTERVIEW CLIPS (0:50-2:00)
- Etai (Weavy founder): What separates people who understand
  AI systems from people who just use AI tools (30s)
- Rashi (PLAAY): What was the experience like working with Zein,
  what results (30s)
- Sahar (Bambuyu): Specific outcome, would you recommend (20s)
- Rowan: What makes Zein different in this space (20s)

Same Section 3: WHAT I DO (2:00-2:50)
  - Expanded slightly with more visual proof

SECTION 3.5: THE APPROACH (2:50-3:30)
- "I don't sell you a tool and walk away."
- "I audit your workflow, build the system, train your team,
  and hand it over."
- Process visual: Audit > Build > Train > Handoff
- "After that, your team runs it. You don't need me forever."

Same Section 4: CTA (3:30-4:00)
- Same CTA but with one more testimonial clip as final proof
- Calendly on screen
```

### 1.2 Record Your Parts
- Setup: Desk, natural light, lapel mic, camera/webcam
- Outfit: Whatever feels like you. Not a suit.
- Method: Bullet points on second screen, speak naturally, cut between takes
- Record Section 1-4 separately, 2-3 takes each
- Also record: screen demos of your actual work (Burjeel pipeline, PLAAY renders, workflow interfaces)
- Mo edits the core 2-3 min cut and it goes live on the site

### 1.3 Schedule Interviews
- Reach out to Rashi, Sahar, Rowan, Etai this week
- Book 15-20 min each over the next 2-3 weeks
- Questions for clients:
  1. "What was the challenge before we worked together?"
  2. "What was the experience like?"
  3. "What specific results did you see?"
  4. "What would you say to someone considering working with me?"
- Questions for Etai (Weavy founder):
  1. "What's the biggest mistake companies make with AI creative tools?"
  2. "What separates people who get results with AI from those who don't?"
  3. "What's your experience with Zein's work in this space?"
- Mo edits interview clips into the extended 3-5 min cut

---

## Phase 2: Next.js Migration + Brand Redesign (Days 5-21)

### 2.1 Next.js Migration
- Migrate the existing React SPA to Next.js App Router on Vercel
- Keep all existing components (Tailwind, Framer Motion)
- Enable SSR/SSG for all pages
- This makes the site crawlable by Google, AI bots, and social media scrapers
- Add proper meta tags, OG images, structured data per page
- Add `lastmod` dates to sitemap
- Set up 301 redirects (/people -> /work, /things -> /work)
- You and Abrar can vibe-code this together

### 2.2 Brand Redesign
**Design Direction:**
- Dark mode default (#0A0A0A or similar dark base)
- Light mode option (toggle in nav)
- Abstract art as the signature visual element:
  - AI-generated colorful abstract patterns (like the reference images: bold brushstrokes, geometric shapes, vibrant colors)
  - Animated as subtle looping backgrounds or section dividers
  - This becomes YOUR visual signature - no other AI consultant has this
- Typography: clean sans-serif for body, display font for headlines (explore during build)
- Tone: personable, like you sat down and wrote it. Not corporate copy.
- The art adds warmth and creativity to balance the technical content

**Brand Palette (derive from the abstract art):**
- Pull 3-4 accent colors from the generated art pieces
- Use them sparingly against the dark/light backgrounds
- The art itself provides the color - the UI stays clean

### 2.3 Homepage Rebuild (Funnel Structure)
```
[HERO]
- Animated abstract art background (subtle, not distracting)
- Headline: One confident statement about what you do
- Sub-line: Human, casual context
- VSL video embed (thumbnail, click to play)
- Primary CTA: "Book an AI Strategy Session" (Calendly embed)
- Credential strip: client work logos or project names

[SCROLLING TICKER]
- Capabilities: AI CONSULTING / WORKFLOW AUTOMATION /
  VIDEO PRODUCTION / TEAM TRAINING / CONTENT SYSTEMS

[SERVICES] (3 cards, visual, minimal text)
- AI Consulting & Implementation
- AI Media Production
- AI TVCs & Video
- Each: one line of value + "Learn more" link

[PROOF / CASE STUDIES]
- 2-3 visual case study cards with hero images
- Burjeel: "8K cinematic video. 5 days. 60% automated."
- PLAAY: "70 AI product renders. 4-month retainer."
- Brief to Content workflow demo
- Link to full /case-studies page

[TESTIMONIAL STRIP]
- Video testimonial clips (once interviews done)
- Text quotes as placeholder/fallback
- Client names + roles

[ABOUT - BRIEF]
- Photo of Zein
- 2-3 lines. Not an essay.
- "Dubai & London. Former photographer and filmmaker.
  Now I build AI systems for brands."
- The career pivot IS the story - say it in one line

[FINAL CTA]
- "15 minutes. No pitch. Just clarity on where AI
  fits in your workflow."
- Calendly embed or link
- hello@zeinkaskas.com as fallback
```

### 2.4 Case Studies Page Enhancement
- Already has real content - enhance with:
  - Specific metrics per project (time saved, cost, output volume)
  - Client quote per case study
  - Before/after or process visual
  - Clear "the challenge / the solution / the result" format
  - Keep it visual - minimal text blocks, lots of images and numbers

### 2.5 Consulting Page Cleanup
- Keep the existing use case content (animations already built)
- Reframe as visual "explainer" pages - not blog posts, not walls of text
- Remove or move the personal use cases (meal planning, fitness, groceries) to a separate "Personal AI" section or cut them
- Add a clear "How I Work" process section: Audit > Build > Train > Handoff
- Add Calendly CTA at the bottom

---

## Phase 3: Social Proof + Content Launch (Days 14-28)

### 3.1 Add Social Proof to Site
- Client logos strip on homepage (Health Lottery / Northern & Shell, PLAAY, Bambuyu, Weavy connection)
- Testimonial video section (once interviews are edited)
- Case study metrics prominently displayed
- "Trusted by" or similar framing

### 3.2 Embed VSL
- Core 2-3 min VSL on homepage hero
- Extended 3-5 min cut on a dedicated page or /about
- Thumbnail that makes people want to click (not autoplay)

### 3.3 Content Pipeline Launch
- Burjeel case study video is ready - publish to YouTube
- LinkedIn post with the case study
- Start regular posting cadence (Mo handles scheduling via OneUp)
- Short clips from VSL for LinkedIn, IG, TikTok

### 3.4 Update Social Bios
- Instagram: Update bio to reflect AI Director positioning + link to site
- TikTok: Same
- LinkedIn: Zein handling himself
- All platforms point to zeinkaskas.com

---

## Phase 4: Iterate + Optimize (Ongoing)

### 4.1 Monitor
- Google Search Console: track indexing of new pages
- Calendly: track booking rate
- VSL: track play rate and completion rate
- Site analytics: traffic sources, page views, time on page

### 4.2 Replace Core VSL with Extended Cut
- Once all 4 interviews are edited, swap the core 2-3 min VSL for the extended 3-5 min version on the homepage
- Keep the core cut for ads and cold traffic

### 4.3 Add Blog/Insights Section
- AI production case studies
- Workflow breakdowns
- Industry commentary
- This is the long-term SEO play

### 4.4 Audience-Specific Landing Pages (Later)
- /for-agencies
- /for-brands
- /for-startups
- Each with tailored messaging and relevant case studies

---

# VSL RECORDING CHECKLIST

```
PRE-RECORDING:
[ ] Script finalized (bullet points, not word-for-word)
[ ] Calendly set up and tested
[ ] Camera/webcam positioned at desk
[ ] Natural light (blinds open)
[ ] Lapel mic or quality audio setup
[ ] Phone on silent
[ ] Screen recording ready (OBS) for demo sections
[ ] Have open: Burjeel pipeline, PLAAY renders, workflow demos
[ ] Outfit: casual, on-brand, not a suit

RECORDING:
[ ] Section 1: Hook (2-3 takes)
[ ] Section 2: Problem (2-3 takes)
[ ] Section 3: What I Do (2-3 takes)
[ ] Section 4: CTA (2-3 takes)
[ ] Screen demo recordings (Burjeel, PLAAY, workflows)
[ ] B-roll: you working at desk, AI tools running

POST-RECORDING:
[ ] Send all files to Mo
[ ] Mo assembles core 2-3 min cut
[ ] Mo adds text overlays, transitions
[ ] Review and approve
[ ] Upload to site
```

---

# INTERVIEW SCHEDULING CHECKLIST

```
[ ] Rashi Shah (PLAAY) - reach out, schedule 15-20 min
[ ] Sahar Karoubi (Bambuyu) - reach out, schedule 15-20 min
[ ] Rowan Brooks - reach out, schedule 15-20 min
[ ] Etai (Weavy founder) - reach out, schedule 15-20 min

EACH INTERVIEW:
[ ] 3-5 questions (listed above per type)
[ ] Good lighting + audio for interviewee
[ ] Record via Google Meet or Zoom (with permission)
[ ] Mo edits down to 20-45 second clips per person
[ ] Best clips go into extended VSL cut
[ ] All clips also usable as standalone social content
```

---

# SUMMARY

**What exists:** A rebuilt React site with 13 pages, real content, real work. Invisible to Google.

**What's missing:** SEO (Next.js migration), social proof (testimonials, client logos), VSL (the funnel centerpiece), Calendly (the conversion endpoint), brand redesign (abstract art, dark/light toggle, personable tone).

**The sequence:**
1. Set up Calendly + fix SEO basics (this week)
2. Write and record VSL, schedule interviews (next 10 days)
3. Next.js migration + brand redesign with abstract art (2-3 weeks, with Abrar)
4. Add social proof, embed VSL, launch content (weeks 3-4)
5. Extended VSL with interview clips replaces core cut (when ready)

**The result:** A site that looks like a creative person built it (because one did), converts like a funnel (because it is one), and actually shows up in Google (because Next.js).
