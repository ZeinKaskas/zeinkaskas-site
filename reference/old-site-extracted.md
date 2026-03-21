# Zein Kaskas Old Website - Complete Content & Architecture Archive

Extracted from `C:\Users\ZEIN\Desktop\zeinweb-old` on 2026-03-21.

---

## 1. TECH STACK

### Build Tools & Runtime
- **Bundler**: Vite 7.2.4
- **Language**: TypeScript 5.9.3
- **Framework**: React 19.2.0
- **Build command**: `tsc -b && vite build`
- **Dev command**: `vite`

### Dependencies (Production)
| Package | Version | Purpose |
|---------|---------|---------|
| react | 19.2.0 | UI framework |
| react-dom | 19.2.0 | DOM renderer |
| react-router-dom | 7.9.6 | Client-side routing |
| framer-motion | 12.23.24 | Primary animation library |
| gsap | 3.13.0 | Secondary animation (imported but mostly unused in favor of framer-motion) |
| lucide-react | 0.554.0 | Icon library |
| clsx | 2.1.1 | Conditional class names |
| tailwind-merge | 3.4.0 | Tailwind class merging |
| react-helmet-async | 2.0.5 | SEO / meta tag management |
| @vercel/analytics | 1.6.1 | Vercel Analytics integration |

### Dev Dependencies
| Package | Version | Purpose |
|---------|---------|---------|
| tailwindcss | 3.4.17 | CSS framework |
| autoprefixer | 10.4.22 | PostCSS autoprefixer |
| postcss | 8.5.6 | CSS processing |
| @vitejs/plugin-react | 5.1.1 | Vite React plugin |
| sharp | 0.34.5 | Image processing |
| eslint | 9.39.1 | Linting |
| typescript-eslint | 8.46.4 | TS ESLint |
| @21st-extension/toolbar | 0.5.14 | Dev toolbar |

### Vite Config
Minimal config, just the React plugin:
```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

---

## 2. SITE STRUCTURE

### Routes (from AnimatedRoutes.tsx)
```
/                           -> Entry (splash screen)
/home                       -> Home (main landing)
/contact                    -> Contact
/services/ai-consulting     -> AiConsulting
/consulting                 -> AiConsulting (alias)
/services/ai-media-production -> AiMediaProduction
/services/ai-tvcs           -> AiTvcs
/services/tvcs              -> AiTvcs (alias)
/workflows/consistent-characters -> ConsistentCharacters
/workflows/replace-agency   -> ReplaceAgency
/workflows/brief-to-content -> BriefToContent
/workflows/tvcs-process     -> TvcsWorkflow
```

Note: `/work` route exists but is commented out.

### Component Tree
```
App.tsx
  ThemeProvider (default: "dark", storageKey: "vite-ui-theme")
    BrowserRouter
      ScrollToTop
      AnimatedRoutes
        Layout
          Navigation
          <Outlet /> (page content)
          Footer
```

### Pages
```
src/pages/
  entry/Entry.tsx          - Animated splash/intro
  home/Home.tsx            - Main landing page
  about/About.tsx          - About page
  contact/Contact.tsx      - Contact page
  services/
    AiConsulting.tsx        - Consulting service page
    AiMediaProduction.tsx  - Media production service page
    AiTvcs.tsx             - TVCs service page
  workflows/
    BriefToContent.tsx     - Brief-to-content workflow
    ConsistentCharacters.tsx - Character consistency workflow
    ReplaceAgency.tsx      - Replace agency workflow
    TvcsWorkflow.tsx       - TVC process workflow
```

### Shared Components
```
src/components/
  layout/
    Navigation.tsx         - Auto-hide nav with mobile menu
    Footer.tsx             - Minimal footer
    Layout.tsx             - Layout wrapper
  shared/
    SEO.tsx                - Helmet-based SEO component
    BottomCTA.tsx          - Reusable CTA section
  home/
    Hero.tsx               - Original hero (gradient mesh bg, not used in current Home.tsx)
    FeaturedProjects.tsx   - Project grid
    CaseStudyPreview.tsx   - Case study preview card
    HowWeDo.tsx            - "How We Do Things" section
    ValueProcess.tsx       - "Our Process" section
  utils/
    ScrollToTop.tsx        - Scroll restoration on route change
  ThemeToggle.tsx          - Dark/light mode toggle
  ThemeProvider.tsx         - Theme context provider
  AnimatedRoutes.tsx       - Route configuration
```

---

## 3. ANIMATION PATTERNS

### Primary Library: Framer Motion (v12.23.24)

All animations are driven by Framer Motion. GSAP is installed but not actively used in the read components.

### Core Animation Variants (src/utils/animations.ts)

```ts
// Page transition - fade up on enter, fade up on exit
export const pageTransition: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1, y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  },
  exit: {
    opacity: 0, y: -20,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  },
};

// Stagger container - children animate 0.1s apart
export const staggerContainer: Variants = {
  animate: {
    transition: { staggerChildren: 0.1 },
  },
};

// Simple fade up
export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1, y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  },
};

// Blur + fade up (signature animation)
export const blurFadeUp: Variants = {
  initial: { opacity: 0, y: 20, filter: 'blur(10px)' },
  animate: {
    opacity: 1, y: 0, filter: 'blur(0px)',
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  },
};

// Hover scale
export const hoverScale: Variants = {
  hover: {
    scale: 1.02,
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
  }
};
```

### Custom Easing
All animations use the same cubic-bezier: `[0.22, 1, 0.36, 1]` (ease-out quint feel).

### Animation Patterns Used Across Pages

1. **Scroll-triggered fade-in**: `whileInView` with `viewport={{ once: true }}` used extensively
2. **Staggered children**: Cards and list items animate in sequence with `staggerChildren: 0.1`
3. **Hover lift**: Cards use `whileHover={{ y: -5 }}` for subtle lift effect
4. **Typewriter effect**: Custom component that types text character by character (used in ConsistentCharacters and ReplaceAgency)
5. **Animated progress bars**: `initial={{ width: 0 }}` to `whileInView={{ width: "100%" }}` for loading bar effects
6. **Pulsing dots**: macOS-style window dots with `animate={{ scale: [1, 1.2, 1] }}`
7. **Bouncing arrow**: CSS `animate-bounce` on scroll-down indicators
8. **Lightbox**: `AnimatePresence` with scale + opacity for image modal open/close
9. **Navigation auto-hide**: Nav hides on scroll down, shows on scroll up using `AnimatePresence` + `initial/animate/exit` y transforms
10. **Background gradient mesh**: CSS blur + pulse animation for hero backgrounds
11. **Entry page typewriter**: Letter-by-letter typewriter using `staggerChildren: 0.08` on individual characters

### Entry Page Sequence
- 0ms: Page loads (blank)
- 500ms: "YOU ARE INEFFICIENT." types in (stagger 0.08s per letter)
- 3000ms: "WE CAN FIX THAT." types in below
- 5500ms: Auto-navigates to /home

### Navigation Behavior
- Scrolling down: nav slides up and hides
- Scrolling up: nav slides down and reappears
- Mobile: full-screen overlay menu with AnimatePresence

---

## 4. ALL COPY/TEXT (by page)

### Entry Page (/)
- **Line 1**: "YOU ARE INEFFICIENT."
- **Line 2**: "WE CAN FIX THAT."

### Home Page (/home)

**Hero Section:**
- H1: "Zein Kaskas"
- Subtitle: "AI Director and System Architect"
- Body 1: "I build scalable workflows for brands and design production pipelines that bridge the gap between creative vision and technical execution."
- Body 2: "From data-driven TVCs to automated content systems, I help creative teams work smarter, not harder."
- Portrait image: `/assets/images/zein-portrait.jpg`

**Services Section:**
- H2: "Services"
- Subtitle: "Specialized services to transform your production capabilities, optimize your strategy, and scale your creative output."
- Card 1 - Consulting: "Strategy, systems, and practical implementation guidance for improving efficiency." | CTA: "Explore Service"
- Card 2 - Media Production: "High-quality media assets and content variations produced faster using modern tools." | CTA: "Explore Service"
- Card 3 - TVCs: "Full ad concepts and outputs suitable for TV-style or high-end online campaigns." | CTA: "Explore Service" | Badge: "Incomplete"

**Workflows Section:**
- H2: "Workflows"
- Subtitle: "Structured systems designed for consistency and scale. These are the engines that power modern creative production."
- Card 1 - Consistent Characters: "Create and maintain consistent characters across different assets and campaigns." | CTA: "View Workflow"
- Card 2 - Replace Your Agency: "A robust system for strategy, content generation, and campaign scaling." | CTA: "View Workflow" | Badge: "Incomplete"
- Card 3 - Brief to Content: "Generate aligned content directly from approved slides or briefs." | CTA: "View Workflow"

### Hero Component (original, may be unused in current Home)
- H1: "AI Director & Generative Media Expert"
- Subtitle: "Crafting cinematic AI experiences and redefining the future of media."

### How We Do Section
- H2: "How We Do Things"
- Body: "We blend cutting-edge AI research with cinematic storytelling, creating immersive experiences that push the boundaries of media."

### Value Process Section
- H2: "Our Process"
- Body: "From concept to final render, we iterate with AI-driven tools, ensuring each frame tells a compelling story."

### Featured Projects Section
- H2: "Featured Projects"
- Displays project cards from data

### Case Study Preview Section
- H2: "Latest Case Study"
- Hover text: "View Case Study"
- Title: "Only Lines Luxury Catalogue"
- Description: "Redefining luxury through minimalist design and AI-enhanced imagery."
- CTA: "Read Full Story" -> `/case-studies/only-lines`

### About Page (/about)
- H1: "About"
- Body 1: "I work at the intersection of direction, design, and AI. My focus is simple: make brands faster and sharper without losing the human part."
- Body 2: "I use AI as a collaborator, not a replacement. Every system or campaign I build is meant to be understood and used by real teams, every day."

### Contact Page (/contact)
- Label: "Get in Touch"
- H1: "Let's Talk"
- Contact items:
  - Name: Zein Kaskas
  - Email: hello@zeinkaskas.com (mailto link)
  - Instagram: @ZeinKaskas (https://instagram.com/ZeinKaskas)
  - LinkedIn: Zein Kaskas (https://www.linkedin.com/in/zein-kaskas-1371a0340/)
- Profile image: `/assets/contact/profile.jpg` (grayscale)

### Footer
- Left: "(c) {year} Zein Kaskas"
- Right: "AI Director & Generative Media Expert"

### Navigation
- Logo: "ZEIN KASKAS" (link to /home)
- Links: Home, Contact
- Mobile: full-screen overlay with Home, Contact, Theme toggle

### Shared BottomCTA Component
- H2: "Ready for broadcast quality?"
- CTA Button: "Start Your Production" -> /contact

---

## 5. CASE STUDIES DATA

### Case Study Interface
```ts
interface CaseStudy {
  id: string;
  title: string;
  client: string;
  description: string;
  imageUrl: string;
  challenge: string;
  solution: string;
  gallery: string[];
}
```

### Case Study 1: Only Lines Luxury Catalogue
- **ID**: only-lines
- **Client**: Only Lines
- **Description**: "Redefining luxury through minimalist design and AI-enhanced imagery."
- **Image**: /images/project1.jpg
- **Challenge**: "The client needed a catalogue that reflected their ultra-minimalist brand identity while showcasing intricate jewelry details. Traditional photography was too costly and time-consuming for the volume of products."
- **Solution**: "We utilized generative AI to create photorealistic product environments that perfectly matched the brand's 'poetic minimalism'. This allowed for rapid iteration and a consistent visual language across the entire catalogue."
- **Gallery**: /images/project1.jpg, /images/project2.jpg, /images/project3.jpg

### Case Study 2: Neural Narratives
- **ID**: neural-narratives
- **Client**: TechFuture Inc.
- **Description**: "An interactive storytelling experience powered by real-time LLMs."
- **Image**: /images/project2.jpg
- **Challenge**: "Creating a narrative that adapts in real-time to user input without losing coherence or emotional impact."
- **Solution**: "We built a custom pipeline integrating GPT-4 with a dynamic visual engine, allowing the story to branch infinitely while maintaining a consistent visual style."
- **Gallery**: /images/project2.jpg, /images/project3.jpg

---

## 6. PROJECTS DATA

### Project Interface
```ts
interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: 'commercial' | 'art' | 'experimental';
  tags: string[];
  link?: string;
  beforeImage?: string;
  afterImage?: string;
}
```

### Project 1: Cinematic AI Experience
- **ID**: 1
- **Category**: commercial
- **Description**: "An immersive AI-driven narrative for brand storytelling."
- **Tags**: AI Video, Storytelling
- **Before/After**: Uses Unsplash placeholder images

### Project 2: Generative Media Platform
- **ID**: 2
- **Category**: experimental
- **Description**: "A platform enabling real-time generative visuals powered by AI."
- **Tags**: Generative Art, Real-time

### Project 3: Interactive AI Installation
- **ID**: 3
- **Category**: art
- **Description**: "A responsive installation that reacts to audience movement."
- **Tags**: Installation, Interactive

### Project 4: ISOCARP
- **ID**: 4
- **Category**: commercial
- **Description**: "Global planning society project breakdown and visualization."
- **Tags**: Urban Planning, Visualization

---

## 7. CONSULTING USE CASES (All 24)

### Hero Content
- **Title**: "AI Consulting & Implementation"
- **Subtitle**: "This is where I come into your company and turn your team into a 10x version of itself."
- **Description**: "Instead of hiring more people, we make the people you already have work faster, smarter, and with less stress."

### Impact Metrics ("What you get")
1. **Massive cost cuts**: "Content and admin work can drop to a tiny fraction of the old cost." (type: cost)
2. **Insane speed**: "Work that took 2-3 weeks can often be done in minutes or a couple of hours." (type: speed)
3. **Real focus**: "Your team stops doing brain-dead tasks and starts doing creative, high-value work." (type: focus)

### Process Steps ("How I work with you")
1. **Find the waste**: "We map your day-to-day: Who's doing what? Where are you copying, pasting, repeating, waiting? We list every task that doesn't actually need a human brain."
2. **Replace the busywork with AI**: "We design simple, practical setups to handle things like: Answering emails, booking meetings, writing captions, turning one idea into many assets. No hype. Just 'this task is gone from your to-do list'."
3. **Plug it in and train the team**: "I help you set it up, test it, and train your team how to use it. They keep control, AI does the heavy lifting."

### Result Points
- "Your team spends time on ideas, direction, taste, decisions."
- "AI handles the repetitive, low-value work."
- "Output explodes without bloating payroll."

### CTA Section
- H2: "Ready to advance?"
- Button: "Start Your Journey" -> /contact

### All 24 Use Case Examples

**Type: builder**
1. **Websites Dev (No Code)** [Globe icon]: "Describe what you want and let AI build full websites or landing pages -- layout, copy, and animations included. Perfect for launching campaigns fast without developers or designers."
2. **Architecture Concepts & Material Studies** [Layers icon]: "Feed in a brief or rough sketch and get multiple visual concepts with different facades, materials, and lighting. Great for testing options with clients before anyone opens CAD."
3. **Floor Plans & Parking / Yield Checks** [Map icon]: "Describe the site and constraints and have AI draft floor plans, test parking layouts, and estimate yield. You get quick 'is this viable?' answers without heavy software or manual calculations."
4. **Interior Design Floor Plans & Renders** [Layout icon]: "Start from a sketch or rough plan and have AI propose layouts, styles, and photoreal renders of the space. Great for pitching concepts quickly to clients without building full 3D scenes from scratch."
5. **Decks, Lookbooks & PowerPoints** [MonitorPlay icon]: "Drop in notes, screenshots, or a rough outline and let AI build draft decks with structure, slides, and visuals. You then just tweak wording and design instead of starting from a blank slide."
6. **Marketing Copy & Social Posts** [PenTool icon]: "Give AI a product and a goal (awareness, clicks, sales) and it writes hooks, captions, and variations for testing. Your team spends time choosing what to run, not staring at a blank page."
7. **Product Descriptions & E-Commerce Upsell Ideas** [ShoppingBag icon]: "Feed in basic product specs and AI writes SEO-friendly descriptions, bullet points, and cross-sell suggestions. Perfect for stores with hundreds of SKUs and no copywriter."

**Type: conversation**
8. **AI-Powered Learning for Teams** [BookOpen icon]: "Turn AI into a personal tutor that explains concepts, creates practice tasks, and builds mini-courses on demand. Your team learns new tools or skills in days instead of months."
9. **Customer Support Chatbots** [MessageSquare icon]: "Add an AI chat widget to your site or WhatsApp and let it answer FAQs, track orders, and route tricky cases. Support teams handle fewer repetitive questions and focus on real problems."
10. **Email & Message Drafting** [Mail icon]: "Use AI to draft cold emails, replies, follow-ups, and internal messages in your tone. Staff spend seconds editing instead of 10-15 minutes writing each message."
11. **Personalized Learning & Onboarding for Employees** [UserPlus icon]: "Turn your manuals, SOPs, and training docs into an interactive 'ask-me-anything' assistant for new hires. New staff get instant answers instead of hunting through folders or pinging managers."
12. **Internal Knowledge Search & SOP Creation** [Database icon]: "Connect AI to your docs, Notion, or Drive so staff can ask 'how do we...?' and get a clear, step-by-step answer. You can also ask it to turn messy notes into clean, reusable SOPs."

**Type: transformer**
13. **Replacing Missed Shots in Production** [Camera icon]: "If a scene was missed or a product angle wasn't captured on set, AI can generate the missing frame or shot. Saves reshoot costs and keeps tight timelines on track."
14. **Make Anyone a Photographer** [ImageIcon icon]: "Shoot on an iPhone, then use AI to clean up lighting, fix composition, and match a professional studio look. Perfect for teams without a full-time photographer."
15. **"Drone-Style" Hero Shots from Maps** [Map icon]: "Take a low-res Google Earth or map screenshot and upscale it into a cinematic, high-res aerial-style image. Ideal for pitch decks and masterplans without hiring a drone crew."
16. **Content Repurposing (One Asset -> Many)** [Repeat icon]: "Take a single long article, webinar, or video transcript and let AI turn it into emails, posts, scripts, and captions. One piece of content suddenly becomes a full campaign."

**Type: scanner**
17. **Research & Competitive Intelligence** [Search icon]: "Give AI a topic, market, or competitor and let it scrape, summarize, and cluster findings into a clear report. You get first-pass research in minutes instead of someone grinding for days."
18. **Meeting Notes & Action Lists** [ClipboardList icon]: "Record calls or meetings and let AI auto-transcribe, summarize, and pull out decisions and action items. No one needs to be the 'note-taker' anymore, and nothing gets lost."
19. **Recruitment & CV Screening** [FileSearch icon]: "Let AI sort incoming CVs, highlight best matches, and draft interview questions aligned with the role. Recruiters spend their time interviewing, not scanning hundreds of resumes."
20. **Document Summaries for Long Reports & Policies** [FileText icon]: "Upload long PDFs, contracts, or policy documents and have AI summarize, highlight risks, and propose next steps. Perfect for managers who need the core 10% in two minutes, not 40 pages."
21. **Sales Research & Call Prep** [Phone icon]: "Give AI a company name and it gathers key info, pain points, and potential angles before a call. Sales reps walk in prepared without spending an hour Googling."

**Type: analyst**
22. **Excel & Financial Model Co-Pilot** [Table icon]: "Ask AI to build formulas, clean data, spot errors, and turn spreadsheets into clear summaries and scenarios. One analyst can handle 5-10x more work with less manual crunching."
23. **Survey, NPS & Feedback Analysis** [BarChart icon]: "Feed in survey responses, reviews, or NPS comments and have AI cluster themes and sentiment automatically. Teams see what customers actually care about without manually reading thousands of lines."
24. **Basic Data Cleaning & Light Analytics** [FileOutput icon]: "Paste messy data into AI and ask it to clean, dedupe, categorize, and suggest simple insights or charts. Non-technical staff can do 'mini-analytics' without a data team."
25. **Simple Workflow Automation with AI in the Loop** [Zap icon]: "Connect AI to tools like email, Sheets, or CRM so it can label, route, and draft responses as tasks come in. Teams keep control, but a lot of the repetitive work is pre-done for them."

---

## 8. SERVICE PAGE CONTENT

### AI Consulting Page (/services/ai-consulting)

**SEO Title**: "AI Consulting for Generative Media & Automated Workflows | Strategic AI Integration"
**SEO Description**: "AI consulting for brands and creative teams seeking scalable automation. Services include workflow design, agentic systems, generative AI strategy, and enterprise AI integration for content production."
**Keywords**: AI Consulting, Generative AI Strategy, AI Workflow Design, Automated Content Production, Enterprise AI Integration

**Hero:**
- H1: "AI Consulting & Implementation"
- Bold subtitle: "This is where I come into your company and turn your team into a 10x version of itself."
- Body: "Instead of hiring more people, we make the people you already have work faster, smarter, and with less stress."

**Section: What you get** (Impact Metrics component)
- See metrics in Section 7 above

**Section: How I work with you** (Process Steps component)
- See process in Section 7 above

**Section: The Result** (dark bg card)
- H2: "The Result"
- Points displayed one at a time with stagger animation
- Arrow down bounce + "Scroll down to see examples"

**Section: Examples & Use Cases** (DetailedExamples component)
- See all 24 use cases in Section 7

**Bottom CTA:**
- H2: "Ready to advance?"
- Button: "Start Your Journey" -> /contact

---

### AI Media Production Page (/services/ai-media-production)

**SEO Title**: "AI Media Production Studio | Automated Generative Content & Realism Pipelines"
**SEO Description**: "High-end AI media production specializing in generative video, realistic AI imagery, content scaling, and automated production pipelines. Build cinematic outputs through advanced AI workflows."
**Keywords**: AI Media Production, Generative Video, AI Imagery, Automated Production Pipelines, Virtual Photography

**Hero:**
- H1: "Media Production & Asset Creation"
- Body 1: "We don't stop at strategy and workflows. We make the actual content."
- Body 2: "You come to us with products, samples, layouts, or ideas. We deliver finished, on-brand assets you can plug straight into ads, e-commerce, pitches, and anything else you can imagine."

**Capabilities List (bullet points):**
- E-commerce product shots
- Packaging hero images and beauty shots
- 3D renders from flat 2D packaging
- Product showcase clips
- UGC-style testimonial and social videos
- Real estate and interior/exterior visuals

**Workflow 01: Virtual Try-Ons for Fashion**
- Subtitle: "From flat lay to full lookbook without a photoshoot."
- Description: "We generate realistic models, dress them in your pieces, and create multiple angles, poses, and settings. You get lookbook images, e-com shots, and social content. Without castings, studios, or reshoots."
- Visual: VirtualTryOnInfographic component

**Workflow 02: 2D Packaging -> 3D Renders**
- Subtitle: "High-end 3D renders from flat files."
- Description: "Multiple angles, close-ups, shelf views, and hero shots for e-commerce, presentations, and print. Even if the real product doesn't exist yet."
- Visual: PackagingTo3DInfographic component

**Workflow 03: Factory Sample -> Finished Product Shot**
- Subtitle: "Turn rough samples into polished ads."
- Description: "We clean it up, restage it in clean or styled environments, fix lighting, and output multiple crops for web, marketplaces, and social."
- Visual: ProductShotInfographic component

**Workflow 04: Real Estate & Design Visuals**
- Subtitle: "Sketches to photoreal spaces."
- Description: "We can turn early concepts into realistic interiors and exteriors, create detailed close-ups of materials and finishes, and generate social-first visuals that actually stop the scroll."
- Visual: RealEstateInfographic component

**Bottom Line Section (dark card):**
- H2: "Bottom line"
- Body: "If you have something to show: a product, a design, a sample, or a space, we can turn it into a library of usable media that feels like you hired a full production team."

**CTA:**
- H2: "Ready for a full production?"
- Button: "Level up your content" -> /contact

---

### AI TVCs Page (/services/ai-tvcs)

**SEO Title**: "AI TVCs | Broadcast-Quality Commercials Generated with Agentic AI Workflows"
**SEO Description**: "Create broadcast-quality TV commercials using AI-driven production pipelines. Automated shot planning, model control, AI enhancement, and cinematic output for brand campaigns."
**Keywords**: AI TV Commercials, AI Advertising, Generative Video Production, Automated TVC, Agentic AI Workflows

**Hero:**
- Label: "Service"
- H1: "AI TVCs" / "Broadcast Quality"
- Body: "Zero sets. Infinite scale. A complete production system from casting to final render."

**Phase 1: Character Casting**
- Subtitle: "Browse, compare, and pick the face that fits your brand."
- Tab system: Kid CEO, Father, Mother, Sister, Brother (each with 4 cast images)

Steps:
1. **Casting Call**: "We generate a lineup of AI characters for every role. You browse, compare, and pick the face that fits your brand just like a real casting session, minus the logistics."
2. **Hero Selection**: "Once you choose your character, they become the locked 'hero asset.' This is the version we use across every shot and every campaign."
3. **Refinement and Realism**: "We upscale, polish, and refine the chosen character skin, texture, micro details until the model looks natural and production ready." (Includes before/after ComparisonSlider)
4. **Wardrobe and Action Tests**: "We test the character in their wardrobe and run them through poses and emotional ranges that match your storyboard. This confirms consistency before full production begins." (Shows 8 emotion images: Happy, Sad, Angry, Shocked, Eating, Explaining, Moving, Reading)
5. **Voice Lock**: "Your character gets a dedicated voice model that stays consistent in every project. We can generate the same voice in any language or accent, allowing you to instantly localize campaigns without losing identity." (Audio buttons for English, Spanish, Arabic, Russian)

**Phase 2: Background Selection and Worldbuilding**
- Body: "Why lock yourself into a physical set? Instead of renting locations, navigating permits, or building expensive environments, we create the exact space you envision directly from your imagination. Any style, any layout, any mood. Built on demand."

Steps:
1. **Explore the Worlds**: "We generate a tailored selection of virtual locations shaped around your script. You choose the space that feels right."
2. **Level Up the Environment**: "Once selected, we upgrade the entire scene: richer textures, sharper surfaces, more realistic materials, and natural lighting. We can also personalize the space with brand specific elements AI generated posters, signage, logos, product placement, or any detail that ties the environment back to your identity. Everything is designed to look clean, cohesive, and production ready." (Includes ComparisonSlider)
3. **Build Out the Coverage**: "We expand the environment with multiple angles, alternate perspectives, different times of day, and varied lighting moods. The result is a complete digital set you can shoot in freely something no physical location could match in flexibility."

- Shows 4 environment options in 2x2 grid (env-1 through env-4)
- Shows "Generated Brand Assets" section with 4 posters in 4-column grid

**Phase 3: Keyframe Creation and Storyboarding**
- Body: "With your character and environment locked, we move into visual planning. Our custom built production system generates shot accurate frames that keep every element aligned character, set, props, lighting, and performance. These frames are structured to mirror the final film, because they become the foundation for the animation that follows."

Steps:
1. **Load the Assets**: "We bring your approved character, environment, props, and references into our custom control panel. This ensures everything created stays perfectly consistent with the locked assets."
2. **Build the Visual Sequence**: "We generate a complete shot sequence that follows your script from start to finish. Each frame shows the intended composition, staging, and mood giving you a clear preview of how the final video will look once animated."

**Phase 4: Video Generation, Editing and Sound Design**
- Body 1: "Once your visual sequence is approved, we animate every frame and bring the entire storyboard to life. The character moves, the environment reacts, the camera flows all rendered directly from the exact shots you approved in Phase 3, ensuring nothing drifts or changes."
- Body 2: "But visuals alone aren't enough. Sound is what makes the scene breathe. Our sound engineers craft a full audio experience clean dialogue, precise lip sync, layered ambience, foley, and score to give the animation weight, emotion, and presence. Good sound design is what turns AI visuals from 'impressive' to 'believable,' and it's the fastest way to make the final film feel premium."
- Body 3: "We then combine the animation, edit, timing, and sound into the final rendered video cohesive, polished, and ready to deliver."
- Mock video player showing "Final_Render_v03.mp4" at "00:12:04"
- Audio visualizer with animated bars

**Scalability Without Limits Section (dark card):**
- Body: "The real strength of this system is how far it can go. Once your character, voice, and environment are locked, they become reusable assets for anything you need new campaigns, new scripts, new locations, new formats. We can drop the same character into a fresh scene, rewrite their lines in any language, and dub it with the exact same voice model for global audiences. Every deliverable stays consistent across regions, platforms, and future projects."

Features:
- **Any Format**: "Need vertical, widescreen, square? Easy."
- **Global Reach**: "Need a localized version for five markets? Done."
- **Repeatable**: "Need the same ambassador in a brand new setting? We load the assets and recreate it instantly."
- Bottom line: "It's a scalable, repeatable system built to keep your brand identity unified while giving you complete creative freedom."

**CTA:**
- H2: "Ready for broadcast quality?"
- Button: "Start Your Production" -> /contact

---

## 9. WORKFLOW PAGE CONTENT

### Brief to Content (/workflows/brief-to-content)

**SEO Title**: "End-to-End Brief-to-Content AI Pipeline | Deck to Storyboard"
**SEO Description**: "Upload a brief and generate production-ready content through a multi-step automated workflow combining ideation, generation, refinement, and delivery."
**Keywords**: Brief to Content AI, Deck to Video, Automated Storyboarding, AI Brief Analysis, Generative Content Workflow

**Hero:**
- H1: "Deck-to-Storyboard Workflow"
- Body: "When the idea is already approved and sitting in a slide deck, this workflow turns those slides into a full visual response: storyboards, hero frames, and variations--without you manually rewriting anything."

**Phase 1: Drop In the Deck**
- Step 1 - Upload the slides: "You upload screenshots or copied slides from the approved presentation."
- Step 2 - Add optional references: "You can also add reference images (locations, products, mood shots) to keep everything grounded in reality."
- Visual: BriefToContentDiagram component

**Phase 2: AI Reads the Slides**
- Step 1 - Understand the content: "The system reads the slide: headings, bullets, diagrams, emphasis points."
- Step 2 - Turn it into a visual brief: "It converts that slide into a short visual brief: what we should show, mood, style, and focus for the images."
- Visual: BriefToContentPhase2 component

**Phase 3: Turn Slides into Shots**
- Step 1 - Define key shots: "For each slide, it designs a small set of shots: supporting angles and a main hero image that 'answers' the slide."
- Step 2 - Write image directions: "It then writes clear, natural-language visual directions that can be used to generate or edit images."
- Step 3 - Create variations: "The workflow generates multiple variations (different angles, crops, and moments) so you get coverage, not just a single frame."
- Visual: BriefToContentPhase3 component

**Phase 4: Storyboard-Ready Output**
- Description: "All of this comes out as ready-to-use visuals:"
- Items:
  - "frames you can drop straight into a storyboard,"
  - "images you can paste back into the deck,"
  - "options you can show the client as a visual response to their approved idea."
- Visual: BriefToContentPhase4 component

**CTA:**
- H2: "Ready for a full storyboard?"
- Button: "Share Your Deck" -> /contact

---

### Consistent Characters (/workflows/consistent-characters)

**SEO Title**: "AI Workflow for Consistent Characters in Video, Image, and Campaign Systems"
**SEO Description**: "A generative AI workflow designed to maintain character consistency across multi-shot scenes, campaigns, product ads, and long-form content. Uses identity preservation, multi-model control, and realism pipelines."
**Keywords**: Consistent Character AI, AI Identity Preservation, Generative AI Characters, AI Campaign Consistency, Stable Diffusion Characters

**Hero:**
- Label: "Workflow"
- H1: "Character Consistency, On Demand"
- Body: "Teach the system your world, then generate consistent visuals in three powerful modes."

**Phase 1: Asset Setup - "Teach the System Your World"**
- Step 1: Upload the Cast: "You start by uploading images of each character. The system learns their faces, style, and overall look." (Shows character avatars: mom, dad, sister, son, baby-sister)
- Step 2: Products & Backgrounds: "(Optional) Add product photos and background images so the system knows exactly what needs to appear."
- Step 3: Add Project Context: "Give the system context about the project, including style, tone, and specific requirements." (Shows typewriter animation with full Lundare detergent commercial script)

**Typewriter Demo Script (Step 3):**
"We are producing a detergent commercial for a fictional brand named L-U-N-D-A-R-E, positioned as a powerful, modern detergent that removes every type of stain effortlessly. The story centers around a family of five inside their home, creating a warm, lived-in, everyday environment where stains are part of normal life. The family consists of a mother, father, older daughter, son, middle child, and baby sister, each naturally wearing or surrounded by clothing with visible stains caused by daily activities. The house feels active and real, full of movement and small moments happening all at once. The opening moment shows the mother arriving home from grocery shopping, bringing with her a fresh bottle of L-U-N-D-A-R-E, making it immediately clear that this product is the solution entering the household. Throughout the space, each family member is shown with a different stain: the baby sister with food mess on her clothes, the middle child with play-related dirt or drink spills, the son with a heavier stain from an outdoor activity, the older daughter with a cosmetic or beverage stain, and the father with a work-related mark on his shirt. The detergent becomes the hero of the scene as it visually stands out from the chaos, symbolizing calm, control, and reliability. The tone is confident, clean, and modern. The product is presented as effortless, fast-acting, and superior without explaining how it works -- it simply works. The commercial emphasizes transformation, moving from messy and stained to fresh and clean, establishing L-U-N-D-A-R-E as the obvious household essential that handles life's messes without stress."

**Cast Overview:** Enlarged circular avatars (mom, dad, sister, son, baby-sister)

**Phase 2: Four Ways to Generate**

**Mode 1: Single Shot Composer** [Camera icon]
- Description: "You describe one shot in natural language; who's in it, how they're framed, what they're doing, how much headroom, where the product is, etc. The system then creates that exact shot with your locked characters, optional product, and chosen background."
- Shows output image

**Mode 2: Script to Full Storyboard** [Clapperboard icon]
- Description: "You upload a script. The system turns that script into a shot list using custom system prompts. It then writes a separate, detailed image prompt for every shot, always referencing your uploaded characters, products, and backgrounds. Using arrays and a text iterator, it fires all those prompts to the image model in one automated run. Result: a full storyboard of consistent, realistic frames that are client-ready and all using the same cast."
- Shows visual flow: Script -> Shot List -> Storyboard
- Shows screenplay-formatted script (Courier Prime font):

**Full Script Content:**
```
INT. FAMILY HOME - ENTRYWAY - DAY

SHOT 1
The front door opens. MOM steps in, arms wrapped around a big paper grocery bag held against her side. Behind her: coats on hooks, kids' gear, and framed art on the wall. She closes the door with her hip and moves further into the house.

INT. LIVING ROOM - DAY

SHOT 2
BIG SISTER sits near the couch, holding up a T-SHIRT with a clear stain on the front. Toys, cushions, and a coffee table sit around her in a normal, slightly messy family living room.

SHOT 3
DAD stands near the living room entrance, holding a WHITE T-SHIRT with a bright red stain on it. Behind him are a doorway, framed pictures, and a couple of coats hanging on the wall.

SHOT 4
SON stands in front of the couch, holding his own T-SHIRT with a stain on it. The TV unit, shelves, and scattered family items fill the background, giving the space a lived-in feel.

SHOT 5
On the couch, MOM sits with BABY SISTER on her lap. They share an open picture book, reading together. Cushions, a side table, and a soft lamp glow in the background, along with a few family photos.

SHOT 6
From the front of the room, the camera looks OVER SON'S SHOULDER toward the couch. MOM and DAD sit side by side, facing him. Behind them, the TV area and shelves frame the shot, filled with books, small decor, and other everyday items.
```

- Shows generated storyboard grid (6 images, 3 columns)

**Mode 3: Reference Shot Matching** [Scan icon]
- Description: "Upload a reference frame. The system analyzes composition (angle, lighting, perspective) and rebuilds it using your own cast and products."
- Shows reference vs result comparison

**Mode 4: Hero Shot Expansion** [Grid icon]
- Description: "Upload a hero shot, and the system generates 16 new variations: 8 showcasing new angles of the subject, and 8 placing them in entirely new scenarios."
- Shows hero image -> 8 grid variations

**Phase 3: The Engine Behind It** (dark card)
- Body: "Our proprietary engine combines multiple AI models to ensure that your character's identity remains stable, no matter the angle, lighting, or style."

Features:
- **Contextual Awareness**: "Prompts read your uploads and ensure every generated shot 'talks about' the right people."
- **Batch Processing**: "Dedicated sets turn scripts into structured shot lists, batch processed via arrays."
- **Composition Transfer**: "Extracts shot data (angle, crop) from references and rebuilds it with your assets."
- **The Result**: "Consistency across single images, storyboards, and matched references."

**CTA:**
- H2: "Ready to stabilize your characters?"
- Button: "Discuss Your Character Brief" -> /contact

---

### Replace Your Agency (/workflows/replace-agency)

**SEO Title**: "Full-Stack AI Campaign Engine -- Replace Traditional Agency Workflows"
**SEO Description**: "An automated AI pipeline that replaces traditional agency tasks: scripting, concepting, image generation, video production, editing, and delivery. Optimized for speed and scalability."
**Keywords**: AI Agency Replacement, Automated Ad Agency, Full-Stack AI Campaign, AI Creative Pipeline, Automated Marketing Content

**Hero:**
- Label: "Workflow"
- H1: "AI Campaign Engine" / "Replace the Agency"
- Body: "A full mix of Lo Fi and Hi Fi ads in one go. Up to 30 assets per run."

**Phase 1: Input Once, Understand Everything**
- Body: "We ingest your entire brand DNA product details, audience data, and visual guidelines into our system. This creates a 'Source of Truth' that ensures every generated asset is perfectly on brand."

Input cards (5):
1. **Product** - "Deep Dive" [Database icon]
2. **Brand** - "Download" [FileText icon]
3. **Audience** - "Definition" [Users icon]
4. **Angles** - "Creative Seeds" [Lightbulb icon]
5. **Visuals** - "Hero Assets" [ImageIcon icon]

**Phase 2: Automated Creative Direction**
- H3: "From Angles to Briefs"
- Body: "Our system takes your simple 'seeds' and expands them into comprehensive creative briefs. It automatically splits every concept into two distinct paths:"

Two paths:
- **Lo Fi Path**: "Native, handheld, UGC style."
- **Hi Fi Path**: "Polished, cinematic, designed."

- Shows mock "brief_generator.sys" interface with animated progress bars and tags (Hook, Visual, Audio)

**Phase 3 (Cards):**
- **Briefs to Assets**: "Translating concepts into concrete deliverables across all aspect ratios."
- **Script to Shot**: "Sketching video sequences so visuals aren't random, they're narrative."

**Phase 4: Meta Optimized Generation**
1. **Precise Prompting**: "We don't just ask for an image. We generate complex, meta optimized prompts that control lighting, lens choice, film stock, and mood to ensure brand alignment." (TypewriterTerminal animation)
2. **Batch Processing**: "We don't generate one image. We generate hundreds. Our system iterates on the prompt, exploring angles and compositions to find the perfect shot."
3. **Campaign Ready**: "We curate the best assets into a final library, ready for deployment across social, web, and print. A full campaign in a fraction of the time."

**TypewriterTerminal Lines:**
```
Initializing Prompt_Structure; loading global meta-rules and constraints.
Loading Brand_Context; ingesting product, audience, region, culture.
Parsing Brief_Spec; mapping objectives to three creative outputs.
Generating_Static_Image_Brief "Cinematic product shot, golden hour, luxury aesthetic".
Generating_BrandFilm_Brief; product-led, multi-shot visual narrative.
Generating_UGC_Ad_Brief; handheld, social-native story sequence.
Switching_To_LoFi_Mode; enforcing smartphone context-first placement principles.
Emitting_LoFi_Triplet; static_image, mini_video, ugc_video usage workflows.
Compiling_Image_Prompts; three studio-grade static image command_strings.
Building_TVC_Spec; multi-cut 12s hook_build_payoff beat schedule.
Building_UGC_Cinematic; woman_lead, skin_fidelity, vertical_9x16 coverage.
Finalizing_Output_Stream; return briefs_and_prompts, no extra text.
```

**Campaign Showcase**: CampaignShowcase component (separate component, not read)

**Phase 5: Test Fast, Learn Fast** (dark card)
- **Scale Testing**: "Spin up dozens of variations in hours."
- **Validation**: "Test demand before production."
- **Pitch Ready**: "Full campaigns for your decks."

**CTA:**
- H2: "Ready to take control?"
- Button: "Start Your Transformation" -> /contact

---

### TVC Process (/workflows/tvcs-process)

**SEO Title**: "AI TVC Workflow -- Automated Commercial Production Pipeline"
**SEO Description**: "A fully automated pipeline that produces cinematic TVCs using multi-stage AI video generation, scene assembly, editing automation, and post-production refinement."
**Keywords**: AI TVC Workflow, Automated Commercials, AI Video Pipeline, Generative TV Ads

**Hero:**
- H1: "TVC Process"
- Body: "From script to screen: A data-driven approach to TV commercial production."

**The Workflow (steps):**
1. Script & Storyboard: AI-assisted scriptwriting and visual storyboarding.
2. Asset Generation: Generating characters, environments, and scenes.
3. Animation & Motion: Bringing static assets to life with advanced motion models.
4. Editing & Post: Final assembly, color grading, and sound design.

**The Output:**
- Body: "Broadcast-ready commercials produced in a fraction of the time. Full control over style, tone, and messaging with rapid iteration capabilities."

**CTA**: Shared BottomCTA component ("Ready for broadcast quality?" / "Start Your Production")

---

## 10. DESIGN TOKENS

### CSS Custom Properties (index.css)

**Light Mode (`:root`):**
| Token | Value | Usage |
|-------|-------|-------|
| --background | #F9F9F9 | Page background |
| --foreground | #111111 | Primary text |
| --accent | #333333 | Accent elements |
| --accent-light | #666666 | Secondary text |

**Dark Mode (`.dark`):**
| Token | Value | Usage |
|-------|-------|-------|
| --background | #171717 | Page background |
| --foreground | #F9F9F9 | Primary text |
| --accent | #E5E5E5 | Accent elements |
| --accent-light | #A3A3A3 | Secondary text |

### Tailwind Config (tailwind.config.js)

**Colors**: Map to CSS variables
```js
colors: {
  background: "var(--background)",
  foreground: "var(--foreground)",
  accent: "var(--accent)",
  "accent-light": "var(--accent-light)",
}
```

**Font Family**: Inter (weights 300, 400, 500, 600)
```js
fontFamily: {
  sans: ["Inter", "sans-serif"],
}
```

**Custom Animation**:
```js
animation: {
  "fade-in": "fadeIn 0.5s ease-out forwards",
},
keyframes: {
  fadeIn: {
    "0%": { opacity: "0" },
    "100%": { opacity: "1" },
  },
}
```

**Dark Mode**: Class-based (`darkMode: "class"`)

### Google Font Import
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');
```

### Global Styles
```css
html { scroll-behavior: smooth; }
body { @apply bg-background text-foreground font-sans antialiased selection:bg-foreground selection:text-background; }
```

### Selection Colors
- Light: foreground bg (#111111), background text (#F9F9F9)
- Dark: foreground bg (#F9F9F9), background text (#171717)

### Scrollbar Hiding
```css
.no-scrollbar::-webkit-scrollbar { display: none; }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
```

### Typography Patterns Used
- Hero H1: `text-6xl md:text-8xl font-light tracking-tight` or `text-5xl md:text-7xl font-light tracking-tight`
- Section H2: `text-4xl font-light` or `text-3xl md:text-4xl font-light`
- Body: `text-lg md:text-xl leading-relaxed`
- Labels: `text-sm font-mono uppercase tracking-widest`
- Phase labels: `text-accent/40 font-mono text-sm tracking-widest uppercase`

### Spacing Patterns
- Section spacing: `space-y-40` (hero), `space-y-32` (between major sections), `space-y-20` (between subsections)
- Page padding: `pt-32 pb-20 px-6 md:px-12`
- Max widths: `max-w-screen-2xl`, `max-w-7xl`, `max-w-4xl`, `max-w-3xl`, `max-w-2xl`
- Card padding: `p-8`, `p-6`
- Card border radius: `rounded-2xl`, `rounded-3xl`

### Card Patterns
- Service/Workflow cards: `bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-2xl p-8`
- Dark section cards: `bg-neutral-900 dark:bg-neutral-800 text-white rounded-3xl p-8 md:p-16`
- Hover effects: `hover:bg-white hover:shadow-xl hover:border-neutral-300 transition-all duration-300 group-hover:-translate-y-1`

### Button Patterns
- Primary CTA: `bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors`
- With arrow: `group inline-flex items-center gap-2` + `ArrowRight` icon with `group-hover:translate-x-1 transition-transform`

---

## 11. SEO DATA

### Global Schema (every page via SEO component)
```json
{
  "@context": "https://schema.org/",
  "@type": "Person",
  "name": "Zein Kaskas",
  "jobTitle": "AI Director & Workflow Architect",
  "url": "https://zeinkaskas.com",
  "description": "AI Director specializing in generative media production, automated content workflows, and scalable production pipelines.",
  "image": "https://zeinkaskas.com/assets/images/zein-portrait.jpg",
  "sameAs": [
    "https://www.linkedin.com/in/zeinkaskas",
    "https://www.instagram.com/zeinkaskas"
  ]
}
```

### Default OG Image
`https://zeinkaskas.com/assets/images/zein-portrait.jpg`

### Default Twitter
- Card: summary_large_image
- Site: @ZeinKaskas

### Page-Specific SEO Data

**Home (/home)**
- Title: "AI Director & Generative Media Workflow Architect | Automated AI Content Production"
- Description: "Discover how AI Director Zein Kaskas builds automated generative media workflows, agentic production pipelines, and high-quality AI content systems for brands and enterprise teams. Explore before-and-after transformations, AI results, and scalable production workflows."
- Keywords: AI Director, Generative Media Workflow, Automated Content Production, AI System Architect, Zein Kaskas, AI Filmmaking
- Canonical: /home
- Structured Data: WebSite schema

**About (/about)**
- Title: "About Zein Kaskas | AI Director, Generative Media Expert"
- Description: "Learn how Zein Kaskas merges filmmaking, photography, and advanced AI workflow engineering to build scalable agentic systems for brands. Expert in realism, automated media pipelines, and enterprise-level generative production."
- Keywords: Zein Kaskas, About Zein Kaskas, AI Filmmaking, Generative AI Expert, AI Director, AI Workflow Engineering
- Canonical: /about
- Structured Data: ProfilePage schema

**Contact (/contact)**
- Title: "Contact Zein Kaskas | AI Consulting & Workflow Engineering"
- Description: "Work with Zein Kaskas to build automated AI workflows, generative media systems, and scalable content production pipelines. Get in touch for AI consulting and direction."
- Keywords: Contact Zein Kaskas, AI Consulting, Hire AI Director, AI Media Automation, Generative AI Consultant
- Canonical: /contact
- Structured Data: ContactPage schema with email: hello@zeinkaskas.com

**AI Consulting (/services/ai-consulting)**
- Title: "AI Consulting for Generative Media & Automated Workflows | Strategic AI Integration"
- Description: "AI consulting for brands and creative teams seeking scalable automation. Services include workflow design, agentic systems, generative AI strategy, and enterprise AI integration for content production."
- Keywords: AI Consulting, Generative AI Strategy, AI Workflow Design, Automated Content Production, Enterprise AI Integration
- Canonical: /services/ai-consulting
- Structured Data: Service schema (serviceType: "AI Consulting")

**AI Media Production (/services/ai-media-production)**
- Title: "AI Media Production Studio | Automated Generative Content & Realism Pipelines"
- Description: "High-end AI media production specializing in generative video, realistic AI imagery, content scaling, and automated production pipelines. Build cinematic outputs through advanced AI workflows."
- Keywords: AI Media Production, Generative Video, AI Imagery, Automated Production Pipelines, Virtual Photography
- Canonical: /services/ai-media-production
- Structured Data: Service schema (serviceType: "AI Media Production")

**AI TVCs (/services/ai-tvcs)**
- Title: "AI TVCs | Broadcast-Quality Commercials Generated with Agentic AI Workflows"
- Description: "Create broadcast-quality TV commercials using AI-driven production pipelines. Automated shot planning, model control, AI enhancement, and cinematic output for brand campaigns."
- Keywords: AI TV Commercials, AI Advertising, Generative Video Production, Automated TVC, Agentic AI Workflows
- Canonical: /services/ai-tvcs
- Structured Data: Service schema (serviceType: "AI TVC Production")

**Brief to Content (/workflows/brief-to-content)**
- Title: "End-to-End Brief-to-Content AI Pipeline | Deck to Storyboard"
- Description: "Upload a brief and generate production-ready content through a multi-step automated workflow combining ideation, generation, refinement, and delivery."
- Keywords: Brief to Content AI, Deck to Video, Automated Storyboarding, AI Brief Analysis, Generative Content Workflow
- Canonical: /workflows/brief-to-content
- Structured Data: HowTo schema

**Consistent Characters (/workflows/consistent-characters)**
- Title: "AI Workflow for Consistent Characters in Video, Image, and Campaign Systems"
- Description: "A generative AI workflow designed to maintain character consistency across multi-shot scenes, campaigns, product ads, and long-form content. Uses identity preservation, multi-model control, and realism pipelines."
- Keywords: Consistent Character AI, AI Identity Preservation, Generative AI Characters, AI Campaign Consistency, Stable Diffusion Characters
- Canonical: /workflows/consistent-characters
- Structured Data: HowTo schema with steps

**Replace Agency (/workflows/replace-agency)**
- Title: "Full-Stack AI Campaign Engine -- Replace Traditional Agency Workflows"
- Description: "An automated AI pipeline that replaces traditional agency tasks: scripting, concepting, image generation, video production, editing, and delivery. Optimized for speed and scalability."
- Keywords: AI Agency Replacement, Automated Ad Agency, Full-Stack AI Campaign, AI Creative Pipeline, Automated Marketing Content
- Canonical: /workflows/replace-agency
- Structured Data: Service schema (serviceType: "AI Campaign Engine")

**TVC Process (/workflows/tvcs-process)**
- Title: "AI TVC Workflow -- Automated Commercial Production Pipeline"
- Description: "A fully automated pipeline that produces cinematic TVCs using multi-stage AI video generation, scene assembly, editing automation, and post-production refinement."
- Keywords: AI TVC Workflow, Automated Commercials, AI Video Pipeline, Generative TV Ads
- Canonical: /workflows/tvcs-process

---

## 12. KEY CODE SNIPPETS

### SEO Component (reusable)
```tsx
// src/components/shared/SEO.tsx
interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  keywords?: string[];
  robots?: string;
  openGraph?: {
    title?: string;
    description?: string;
    image?: string;
    type?: string;
  };
  twitter?: {
    card?: string;
    site?: string;
    title?: string;
    description?: string;
    image?: string;
  };
  structuredData?: object;
}

// Title format: if title includes "|", use as-is; otherwise append "| Zein Kaskas"
// Canonical: prepends "https://zeinkaskas.com"
// OG image fallback: /assets/images/zein-portrait.jpg
// Always includes global Person schema
```

### Typewriter Component
```tsx
const Typewriter = ({ text }: { text: string }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    setDisplayedText("");
    let index = 0;
    const intervalId = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text.charAt(index));
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, 10); // Fast typing speed
    return () => clearInterval(intervalId);
  }, [text]);

  return <>{displayedText}</>;
};
```

### TypewriterTerminal Component (ReplaceAgency)
Scroll-triggered terminal that types multiple lines sequentially:
- Uses `useInView` from framer-motion for scroll detection
- 30ms per character typing speed
- 500ms pause between lines
- Auto-scrolls container as content grows
- Green text on black background (terminal aesthetic)
- Blinking cursor using `animate={{ opacity: [1, 0, 1] }}`

### Entry Page Letter-by-Letter Animation
```tsx
const typewriter = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const letter = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

// Usage: splits string into individual <motion.span> per character
{Array.from("YOU ARE INEFFICIENT.").map((char, index) => (
  <motion.span key={index} variants={letter}>{char}</motion.span>
))}
```

### Navigation Auto-Hide Pattern
```tsx
useEffect(() => {
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY < 10) {
      setIsVisible(true);
    } else if (currentScrollY > lastScrollY) {
      setIsVisible(false); // Scrolling down
    } else {
      setIsVisible(true); // Scrolling up
    }
    setLastScrollY(currentScrollY);
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  return () => window.removeEventListener('scroll', handleScroll);
}, [lastScrollY]);
```

### Image Lightbox Pattern
```tsx
<AnimatePresence>
  {selectedImage && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setSelectedImage(null)}
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-pointer backdrop-blur-sm"
    >
      <motion.img
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        src={selectedImage}
        alt="Expanded view"
        className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
      />
    </motion.div>
  )}
</AnimatePresence>
```

### Full-Page Image Modal with Navigation (AiTvcs)
Extended lightbox with:
- Keyboard navigation (ArrowLeft, ArrowRight, Escape)
- Previous/Next buttons
- Back button top-left
- Full-screen white/dark bg (not overlay)
- Slide animation on image change

### Audio Player Pattern (AiTvcs voice demo)
```tsx
const handlePlayAudio = (lang: string) => {
  if (playingAudio === lang) {
    audioRef.current?.pause();
    setPlayingAudio(null);
  } else {
    if (audioRef.current) audioRef.current.pause();
    const audio = new Audio(`/audio/tvcs/${lang}.mp3`);
    audioRef.current = audio;
    audio.play();
    setPlayingAudio(lang);
    audio.onended = () => setPlayingAudio(null);
  }
};
```

### Theme System
```tsx
// App.tsx
<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">

// Dark mode toggled via class on <html> element
// Stored in localStorage under "vite-ui-theme"
```

### ComparisonSlider
Used in AiTvcs for before/after image comparisons (imported from `components/work/ComparisonSlider`). Used for:
- Character refinement (raw vs enhanced)
- Environment upgrade (initial vs final)

---

## ASSET PATHS REFERENCED

### Images
```
/assets/images/zein-portrait.jpg
/assets/contact/profile.jpg
/assets/home/consulting.png
/assets/home/media-production.png
/assets/home/tvcs.png
/assets/home/consistent-characters.png
/assets/home/replace-agency.png
/assets/home/brief-to-content.png
/images/project1.jpg through project4.jpg
/images/tvcs/cast/{brother,father,mother,sister,kid-ceo}/{1-4}.webp
/images/tvcs/cast/kid-ceo/1-enhanced.webp
/images/tvcs/emotions/{Happy,Sad,Angry,Shocked,Eating,Explaining,Moving,Reading}.webp
/images/tvcs/environments/env-{1-4}.webp
/images/tvcs/environments/env-final.webp
/images/tvcs/posters/poster-{1-4}.webp
/assets/workflows/consistent-characters/refs/{mom,dad,sister,son,baby-sister}.webp
/assets/workflows/consistent-characters/refs/{product,background}.webp
/assets/workflows/consistent-characters/mode-1/output.webp
/assets/workflows/consistent-characters/mode-2/storyboard-{1-6}.webp
/assets/workflows/consistent-characters/mode-3/{reference,result}.webp
/assets/workflows/consistent-characters/mode-4/hero.webp
/assets/workflows/consistent-characters/mode-4/grid/grid-{1-8}.webp
```

### Audio
```
/audio/tvcs/{English,Spanish,Arabic,Russian}.mp3
```

---

## COMPONENTS NOT READ (exist but not in the 26-file list)

These components are referenced but were not in the read list:
- `src/components/consulting/ImpactMetrics.tsx`
- `src/components/consulting/ProcessSteps.tsx`
- `src/components/consulting/DetailedExamples.tsx`
- `src/components/media-production/VirtualTryOnInfographic.tsx`
- `src/components/media-production/PackagingTo3DInfographic.tsx`
- `src/components/media-production/RealEstateInfographic.tsx`
- `src/components/media-production/ProductShotInfographic.tsx`
- `src/components/workflow/BriefToContentDiagram.tsx`
- `src/components/workflow/BriefToContentPhase2.tsx`
- `src/components/workflow/BriefToContentPhase3.tsx`
- `src/components/workflow/BriefToContentPhase4.tsx`
- `src/components/workflows/CampaignShowcase.tsx`
- `src/components/work/ComparisonSlider.tsx`
- `src/components/ThemeToggle.tsx`
- `src/components/ThemeProvider.tsx`
- `src/components/utils/ScrollToTop.tsx`
- `src/components/layout/Layout.tsx`
- `src/pages/entry/Entry.tsx` (read separately)
