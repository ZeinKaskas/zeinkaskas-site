export type Accent = "sky-blue" | "magenta" | "teal" | "mango" | "orange";

export type PostSection = {
  heading: string;
  body: string[];
  bullets?: string[];
};

export type GalleryTile = {
  caption: string;
  detail?: string;
};

export type Stat = { value: string; label: string };

export type RelatedLink = { label: string; href: string };

export type Post = {
  slug: string;
  card: {
    title: string;
    summary: string;
    tag: string;
    accent: Accent;
    placeholder: string;
    feature: "featured" | "recent";
  };
  hero: {
    eyebrow: string;
    headline: string;
    sub: string;
  };
  loomCaption: string;
  stats?: Stat[];
  sections: PostSection[];
  pullQuote?: string;
  gallery?: {
    heading: string;
    note?: string;
    tiles: GalleryTile[];
  };
  related?: RelatedLink[];
  cta: {
    headline: string;
    body: string;
    label: string;
    href: string;
  };
  metaDescription: string;
};

const bookCta = (
  headline: string,
  body: string,
  label = "Book a 15 minute call",
) => ({
  headline,
  body,
  label,
  href: "/book",
});

export const posts: Post[] = [
  {
    slug: "burjeel-hospital",
    card: {
      title: "Burjeel Hospital",
      summary:
        "An 8K cinematic anniversary film, full pipeline from script to grade, in five days.",
      tag: "AI Video Production",
      accent: "sky-blue",
      placeholder: "[Burjeel 8K still]",
      feature: "featured",
    },
    hero: {
      eyebrow: "AI Video Production · Brand film",
      headline: "An 8K hospital film, in five days.",
      sub: "Burjeel asked for a cinematic 20th-anniversary film with the look of a real production. We delivered four minutes at 8K, full pipeline from script to grade, in under a week.",
    },
    loomCaption:
      "A two minute walk-through of the Burjeel build, the timeline, the pipeline, and what shipped.",
    stats: [
      { value: "5 days", label: "From script to delivery" },
      { value: "4 minutes", label: "Final film runtime" },
      { value: "8K", label: "Master resolution" },
    ],
    sections: [
      {
        heading: "What we built",
        body: [
          "A four minute brand film for Burjeel Hospital's 20th anniversary. Cinematic, broadcast-grade, the kind of piece a hospital this size would normally commission as a multi-week shoot.",
          "We ran the entire pipeline. Script and treatment, shot list, generation, motion, edit, color, and sound. End to end. The output is a film, structured like one, not a montage of generated clips.",
        ],
      },
      {
        heading: "Why this is the proof point",
        body: [
          "A traditional shoot to this spec on this timeline does not exist. Multi-day hospital access, set design, talent, lighting rig, post pipeline. The math does not work in five days.",
          "We did it because the production happened in a different kind of studio. Same craft, same structure, different tools.",
          "Most of the case for AI in production lives or dies on this single project. It is the answer when someone asks whether AI can deliver real cinematic work, not a tech demo.",
        ],
      },
      {
        heading: "Inside the pipeline",
        body: [
          "Same shape as a traditional production. Different middle.",
        ],
        bullets: [
          "Treatment and script first. The film exists as a document before a single frame is generated.",
          "Shot list locked. Every beat planned, every cut intentional. The same way you would prep a real shoot day.",
          "Generation phase replaces the shoot day. Characters, environments, motion, all built to the treatment.",
          "Edit, grade, and sound design done the same way they always have been. The last mile of the film is human craft.",
        ],
      },
      {
        heading: "BTS",
        body: [
          "We have behind-the-scenes material from the build that will live on this page once the public cut is ready. The story of the five days is its own thing worth watching.",
        ],
      },
    ],
    pullQuote:
      "A real shoot to this spec in five days does not exist. We did it because the production happened in a different kind of studio.",
    related: [
      { label: "TVCs Process", href: "/work/tvcs-process" },
      { label: "Replace Agency", href: "/work/replace-agency" },
      { label: "Consistent Characters", href: "/work/consistent-characters" },
    ],
    cta: bookCta(
      "Have a film like this on the calendar?",
      "If you have a brand film, anniversary piece, or campaign hero coming up and the timeline is tight, we should talk. Fifteen minutes, no pitch, just whether AI is the right fit for the brief.",
    ),
    metaDescription:
      "An 8K cinematic 20th-anniversary film for Burjeel Hospital, full AI pipeline, delivered in five days.",
  },
  {
    slug: "plaay",
    card: {
      title: "PLAAY",
      summary:
        "Premium product imagery built before the product physically existed. The closest thing to time travel a brand gets.",
      tag: "AI Production",
      accent: "magenta",
      placeholder: "[PLAAY product render]",
      feature: "featured",
    },
    hero: {
      eyebrow: "AI Production · Pre-launch imagery",
      headline: "We shot the product before it existed.",
      sub: "PLAAY had a packaging concept, an idea of what they wanted, and no physical product yet. We built the imagery anyway, and they got to test the brand world before they committed to print.",
    },
    loomCaption:
      "How we used AI to ideate packaging and brand imagery for PLAAY before a single sample existed.",
    sections: [
      {
        heading: "What we did",
        body: [
          "PLAAY described the product to us. We created it for them in AI. Renders, packaging variations, hero shots, lifestyle context. The kind of imagery you would expect from a finished launch shoot, except the product was still on its way.",
          "They got to see and test their packaging before it ever sat in front of them.",
        ],
      },
      {
        heading: "Why this is the actual story",
        body: [
          "Most product photography posts go: we shot the product. This one goes: the product did not exist yet and we shot it anyway.",
          "That is a different category of work. AI is not replacing a photo shoot here. It is replacing the wait for the product to exist before the brand could start.",
        ],
      },
      {
        heading: "What that unlocks",
        body: [
          "When you do not need the final product to make the final imagery, the order of operations changes.",
        ],
        bullets: [
          "Test packaging with a real audience before you commit to print runs.",
          "Run paid creative against real impressions before manufacturing locks in.",
          "Find out whether people want it before you have spent six figures finding out.",
          "Iterate the product and the marketing in parallel, not in sequence.",
        ],
      },
    ],
    pullQuote:
      "AI lets you start before you have the thing.",
    related: [
      { label: "Bambuyu", href: "/work/bambuyu" },
      { label: "Brief to Content", href: "/work/brief-to-content" },
    ],
    cta: bookCta(
      "Building something that does not exist yet?",
      "If you have a product in development and you want to start showing the world what it looks like before manufacturing finishes, we can probably help. Fifteen minutes will tell us.",
    ),
    metaDescription:
      "AI-generated product imagery for PLAAY, built before the physical product existed. Pre-launch packaging, hero shots, and lifestyle context.",
  },
  {
    slug: "consistent-characters",
    card: {
      title: "Consistent Characters",
      summary:
        "Lock a cast, lock a product, lock a world. Generate on demand across single shots, full storyboards, reference matches, and hero variations.",
      tag: "AI Systems",
      accent: "teal",
      placeholder: "[Locked cast grid]",
      feature: "featured",
    },
    hero: {
      eyebrow: "AI Systems · Workflow",
      headline: "Character consistency, on demand.",
      sub: "The hardest unsolved problem in AI imagery is keeping the same person looking like the same person across every shot. We solved it across four modes that each handle a different real-world need.",
    },
    loomCaption:
      "Four modes, one engine. A walk-through of how we lock a cast and generate from it.",
    sections: [
      {
        heading: "Phase 1, teach the system your world",
        body: [
          "Before any generation happens, we build a locked reference set. Faces, products, backgrounds, project context. Style, tone, the things that shape the world the cast lives in.",
          "Once the system has that, every shot we make from then on speaks the same visual language.",
        ],
      },
      {
        heading: "Four ways to generate",
        body: [
          "Same locked cast. Different jobs.",
        ],
        bullets: [
          "Mode 1, Single Shot Composer. Describe one shot in natural language. Who is in it, how it is framed, where the product sits. The system delivers that exact frame using your locked cast.",
          "Mode 2, Script to Storyboard. Upload a script. The system writes a shot list, drafts an image prompt for every shot, then fires them all in one automated run. Out the other end is a full storyboard, on-cast, on-brand.",
          "Mode 3, Reference Shot Matching. Upload a reference frame. The system reads composition, lighting, perspective, and rebuilds the shot using your cast and product.",
          "Mode 4, Hero Shot Expansion. Upload a hero shot. The system generates 16 variations. Eight new angles of the same subject, eight new scenarios.",
        ],
      },
      {
        heading: "The engine underneath",
        body: [
          "Three things make this hold together at scale.",
        ],
        bullets: [
          "Contextual awareness. Every prompt reads the locked uploads and ensures the right people show up.",
          "Batch processing. Scripts become structured shot lists, processed via arrays, generated in parallel.",
          "Composition transfer. Shot data extracted from references, rebuilt with your assets.",
        ],
      },
      {
        heading: "Why this matters",
        body: [
          "Every team that tries to make a real campaign with AI hits the consistency problem the moment the second shot looks like a different person. Most solutions handle one mode and call it done.",
          "The work changes when the cast is locked. You can run a full storyboard, sign off on it, and trust that nobody is going to ask why the lead character has a slightly different jaw in shot four.",
        ],
      },
    ],
    pullQuote:
      "The lock stays solid. Same person, same product, every angle, every shot.",
    gallery: {
      heading: "The four modes, in pictures",
      note: "Worked through a fictional family on a detergent brief. The same locked cast across every mode.",
      tiles: [
        { caption: "Locked cast", detail: "Mom, Dad, Sister, Son, Baby, Product" },
        { caption: "Mode 1", detail: "Single shot composer" },
        { caption: "Mode 2", detail: "Script to full storyboard" },
        { caption: "Mode 3", detail: "Reference shot matching" },
        { caption: "Mode 4", detail: "Hero expansion, 16 variations" },
        { caption: "Output", detail: "Storyboard-ready frames" },
      ],
    },
    related: [
      { label: "TVCs Process", href: "/work/tvcs-process" },
      { label: "Replace Agency", href: "/work/replace-agency" },
      { label: "Brief to Content", href: "/work/brief-to-content" },
    ],
    cta: bookCta(
      "Need a cast that holds across a campaign?",
      "If you are running into character consistency problems, or about to, this is the workflow. Fifteen minutes and we will tell you whether your project is a fit.",
    ),
    metaDescription:
      "Character consistency on demand across single shots, full storyboards, reference matches, and hero variations.",
  },
  {
    slug: "brief-to-content",
    card: {
      title: "Brief to Content",
      summary:
        "Approved deck in. Storyboard out. Every slide becomes a hero frame, supporting angles, and variations.",
      tag: "Workflow",
      accent: "teal",
      placeholder: "[Slide to render flow]",
      feature: "recent",
    },
    hero: {
      eyebrow: "Workflow · Deck to Storyboard",
      headline: "Drop in the deck. Get the storyboard back.",
      sub: "When the idea is already approved and sitting in a slide deck, this workflow turns those slides into a full visual response. Storyboards, hero frames, and variations, without manually rewriting anything.",
    },
    loomCaption:
      "A live run, deck in, storyboard out. Walks through every phase end to end.",
    sections: [
      {
        heading: "Phase 1, drop in the deck",
        body: [
          "Upload the slides. Screenshots, copied slides, exported PDFs. Whatever you have on hand from the approved presentation.",
          "Optional reference images sit alongside it. Locations, products, mood. They keep the output grounded in your actual world.",
        ],
      },
      {
        heading: "Phase 2, the system reads the slides",
        body: [
          "Headings, bullets, diagrams, emphasis. The system reads what the slide is actually trying to communicate.",
          "Each slide gets converted into a short visual brief. What to show, what mood, what style, what to focus on.",
        ],
      },
      {
        heading: "Phase 3, slides become shots",
        body: [
          "For each slide we design a small set of shots. A main hero that answers the slide and supporting angles around it.",
          "Then natural-language image directions get written for every shot. Variations follow automatically. Different angles, crops, moments. You get coverage, not a single frame.",
        ],
      },
      {
        heading: "Phase 4, storyboard-ready output",
        body: [
          "Three things drop out the other end.",
        ],
        bullets: [
          "Frames you can paste straight into a storyboard.",
          "Images you can drop back into the original deck.",
          "Options you can show the client as a visual response to their own approved idea.",
        ],
      },
      {
        heading: "Why this is worth the post",
        body: [
          "Every brand team has a deck. Decks become work, work becomes assets, assets become campaigns. Today that whole chain is human-bottlenecked. Someone reads the deck, briefs design, briefs production, makes the visuals, reviews them against the deck.",
          "This workflow collapses the chain. Approved deck in, storyboard out.",
        ],
      },
    ],
    pullQuote:
      "The deck you already have becomes the assets you need.",
    gallery: {
      heading: "The flow, in pictures",
      note: "A real slide input alongside the visual output it produced.",
      tiles: [
        { caption: "Input", detail: "Approved slide" },
        { caption: "Visual brief", detail: "Auto-extracted" },
        { caption: "Hero shot", detail: "Generated answer" },
        { caption: "Variation A", detail: "Different angle" },
        { caption: "Variation B", detail: "Different mood" },
        { caption: "Output", detail: "Storyboard-ready" },
      ],
    },
    related: [
      { label: "Replace Agency", href: "/work/replace-agency" },
      { label: "Consistent Characters", href: "/work/consistent-characters" },
    ],
    cta: bookCta(
      "Have a deck that needs to become content?",
      "Send us a slide deck you have already had approved. We will walk you through what it would look like as finished assets.",
    ),
    metaDescription:
      "Deck-to-storyboard workflow. Upload slides, get storyboards, hero frames, and variations back automatically.",
  },
  {
    slug: "replace-agency",
    card: {
      title: "Replace Agency",
      summary:
        "An end-to-end Campaign Engine. Lo Fi and Hi Fi mix in one go, up to 30 assets per run.",
      tag: "AI Systems",
      accent: "magenta",
      placeholder: "[Pipeline output fan]",
      feature: "recent",
    },
    hero: {
      eyebrow: "AI Systems · Campaign Engine",
      headline: "Replace the agency.",
      sub: "A full mix of Lo Fi and Hi Fi ads in one go. Up to 30 assets per run, all on brand by default. The pipeline handles concept, briefing, generation, and curation. The taste layer stays human.",
    },
    loomCaption:
      "How the Campaign Engine runs from a single brand brief to 30 finished assets.",
    sections: [
      {
        heading: "Phase 1, input once, understand everything",
        body: [
          "We ingest your full brand DNA. Product details, audience data, visual guidelines, voice. That becomes the source of truth, so every generated asset is on brand by default, not by accident.",
        ],
      },
      {
        heading: "Phase 2, automated creative direction",
        body: [
          "The system takes simple seeds and expands them into full creative briefs. Every concept gets split into two paths.",
        ],
        bullets: [
          "Lo Fi. Native, handheld, UGC-style.",
          "Hi Fi. Polished, cinematic, designed.",
        ],
      },
      {
        heading: "Phase 3, briefs to assets",
        body: [
          "Two parts running in parallel.",
        ],
        bullets: [
          "From angles to briefs. Concepts become concrete deliverables across every aspect ratio.",
          "Script to shot. Video sequences get sketched out so visuals are narrative, not random.",
        ],
      },
      {
        heading: "Phase 4, meta-optimized generation",
        body: [
          "This is the part most AI ad tools skip. Three layers stacked.",
        ],
        bullets: [
          "Precise prompting. Lighting, lens choice, film stock, mood. Brand alignment engineered in.",
          "Batch processing. Hundreds of variations per concept, not one image. The system iterates until it lands.",
          "Campaign-ready output. The best assets curated into a final library, ready to deploy across social, web, and print.",
        ],
      },
      {
        heading: "Phase 5, test fast, learn fast",
        body: [
          "The whole point of running 30 assets in one go.",
        ],
        bullets: [
          "Scale testing. Dozens of variations live in hours.",
          "Validation. Test demand before you commit to production.",
          "Pitch ready. Full campaigns sitting in your decks, not just one or two hero shots.",
        ],
      },
      {
        heading: "Why the headline is sharp on purpose",
        body: [
          "The argument is not that the agency disappears. The argument is that the parts of agency work that scale poorly with humans now scale beautifully with a system. Concepting, generation, curation, output.",
          "The taste layer stays human. The ten thousand prompts and the ten different aspect ratios do not need to be.",
        ],
      },
    ],
    pullQuote:
      "Speed and scale. Not headcount.",
    related: [
      { label: "Consistent Characters", href: "/work/consistent-characters" },
      { label: "Brief to Content", href: "/work/brief-to-content" },
      { label: "TVCs Process", href: "/work/tvcs-process" },
    ],
    cta: bookCta(
      "Want this engine pointed at your brand?",
      "We run the pipeline for clients today. Send us your brand DNA and a brief, we will run a sample campaign. Fifteen minutes to scope it.",
    ),
    metaDescription:
      "Campaign Engine. Brand brief in, 30 finished on-brand assets out. Lo Fi and Hi Fi, social, web, and print.",
  },
  {
    slug: "tvcs-process",
    card: {
      title: "TVCs Process",
      summary:
        "From script to screen. The four-step pipeline for full TV commercials, end to end.",
      tag: "AI Production",
      accent: "sky-blue",
      placeholder: "[TVC pipeline still]",
      feature: "recent",
    },
    hero: {
      eyebrow: "AI Production · TV Commercials",
      headline: "From script to screen, end to end.",
      sub: "A data-driven approach to TV commercial production. Same shape as a traditional pipeline. Different middle. Broadcast-ready commercials, in a fraction of the time, with full control over style, tone, and messaging.",
    },
    loomCaption:
      "The TVC pipeline broken into four steps, with real assets at each one.",
    sections: [
      {
        heading: "Step 1, script and storyboard",
        body: [
          "AI-assisted scriptwriting and visual storyboarding. The film exists as a document before a single frame is generated. Treatment, beats, shot list, all locked up front.",
        ],
      },
      {
        heading: "Step 2, asset generation",
        body: [
          "Characters, environments, scenes. We use the Consistent Characters workflow to lock the cast, then generate the world they live in. Every shot stays on the same story.",
        ],
      },
      {
        heading: "Step 3, animation and motion",
        body: [
          "Static assets get brought to life with current motion models. Lipsync, performance, camera movement. The work is treated the same way a traditional VFX pipeline treats it. The tools are just different.",
        ],
      },
      {
        heading: "Step 4, editing and post",
        body: [
          "Final assembly, color grade, sound design, audio in multiple languages. The last mile of the film is human craft, the way it always has been.",
        ],
      },
      {
        heading: "Why this is worth showing",
        body: [
          "Most TVC pages show the final cut. We are showing how it gets built. The process is the argument. The four steps look familiar because they are. A real TVC pipeline, with the production phase running in a different kind of studio.",
          "Meena is the worked example for this process under pressure. Two weeks of brief became one week became 30 hours, and the spot still shipped. Read that story on the Meena page.",
        ],
      },
    ],
    pullQuote:
      "Same shape as a traditional production. Different middle.",
    gallery: {
      heading: "The pipeline, in pictures",
      note: "One worked example. Cast set, performance, finished sequence, multi-language audio.",
      tiles: [
        { caption: "Step 1", detail: "Script + storyboard frames" },
        { caption: "Step 2", detail: "Cast, environments, scenes" },
        { caption: "Step 3", detail: "Lipsync + motion" },
        { caption: "Step 4", detail: "Edit + grade + sound" },
        { caption: "Cast", detail: "Locked across every shot" },
        { caption: "Audio", detail: "Four language deliveries" },
      ],
    },
    related: [
      { label: "Meena", href: "/work/meena" },
      { label: "Consistent Characters", href: "/work/consistent-characters" },
      { label: "Burjeel Hospital", href: "/work/burjeel-hospital" },
    ],
    cta: bookCta(
      "Have a TVC on the slate?",
      "Whether it is a launch spot, a brand film, or a regional cut, this is the pipeline. Fifteen minutes to scope what your version would look like.",
    ),
    metaDescription:
      "Four-step TVC production pipeline using AI. Script, asset generation, motion, edit and post. Broadcast-ready.",
  },
  {
    slug: "meena",
    card: {
      title: "Meena",
      summary:
        "Two weeks became one week became thirty hours, with a global model outage in the middle. The video shipped.",
      tag: "AI Production",
      accent: "mango",
      placeholder: "[Meena cast reference grid]",
      feature: "featured",
    },
    hero: {
      eyebrow: "AI Production · Brand spot",
      headline: "Thirty hours, one room, the video shipped.",
      sub: "Meena was a two-week build that became a one-week build, then a thirty-hour run. In the middle of the squeeze, a global model outage took everyone in the AI creative space offline. The film exists because of how it was built.",
    },
    loomCaption:
      "The Meena rescue story, the multi-generation cast, and the two-era world the film travels through.",
    stats: [
      { value: "30 hrs", label: "Final sprint" },
      { value: "1 cast", label: "Locked across two eras" },
      { value: "0", label: "Re-shoots needed" },
    ],
    sections: [
      {
        heading: "The squeeze",
        body: [
          "Meena was meant to be a two-week build. Two weeks was already tight for what they wanted.",
          "Then unforeseen circumstances knocked it down to one week.",
          "Then halfway through that one week, Nano Banana Pro stopped working. Globally. A downstream error on Google's side took everyone in the AI creative space offline for three or four days. We could not generate any client work, not just for Meena, for anyone. The whole industry was on pause.",
          "By the time it came back up, we had basically zero time left. So we got the whole team in one room and finished the project in a single thirty-hour sitting.",
          "The video shipped. It looked good. The client was happy.",
        ],
      },
      {
        heading: "Why this is the case study",
        body: [
          "Two layers stacked.",
          "Layer one, the rescue. A traditional shoot of this scope on this timeline would have been impossible. Deposit refunded, relationship damaged, spot dead. The film exists at all because we were using AI.",
          "Layer two, the craft. A multi-generation cast across two eras of location, all pulled together inside the Consistent Characters workflow. The system held the world stable across every shot, even when the shoot day was a single thirty-hour sitting in front of screens.",
        ],
      },
      {
        heading: "The cast",
        body: [
          "Meena travels through time. The cast was built to support that.",
        ],
        bullets: [
          "Aziz, in two looks. Young and Modern.",
          "Aziz's grandson. The next generation.",
          "Doctor, in two looks. Old and present-day.",
          "Grandpa. The bookend at the older end of the timeline.",
        ],
      },
      {
        heading: "The world",
        body: [
          "Same place, two eras.",
        ],
        bullets: [
          "Modern exterior and Modern interior.",
          "Old exterior and Old interior.",
        ],
      },
      {
        heading: "The takeaway",
        body: [
          "AI did not make this faster than a traditional shoot. AI made this possible at all. That is the actual argument.",
        ],
      },
    ],
    pullQuote:
      "Two weeks became one week became thirty hours. The video shipped.",
    related: [
      { label: "TVCs Process", href: "/work/tvcs-process" },
      { label: "Consistent Characters", href: "/work/consistent-characters" },
    ],
    cta: bookCta(
      "Got a spot on a timeline that should not work?",
      "If you have a deadline that a traditional shoot cannot meet, the right move is probably to call us early, not late. Fifteen minutes to scope it.",
    ),
    metaDescription:
      "Brand spot built in a single thirty-hour sitting after a global model outage. Multi-generation cast, two eras of location.",
  },
  {
    slug: "rta-spec",
    card: {
      title: "RTA, spec ad",
      summary:
        "Spec commercial built layer by layer in Seedance. Showing the kitchen, not just the cake.",
      tag: "AI Production",
      accent: "orange",
      placeholder: "[RTA spec frame]",
      feature: "recent",
    },
    hero: {
      eyebrow: "AI Production · Spec ad",
      headline: "Spec ad for the RTA. Layered live.",
      sub: "Spec work is honest. Nobody paid us to do it, we just wanted to. So we got to make exactly what we would want to make if we had been hired. Pure taste, no compromises.",
    },
    loomCaption:
      "The RTA spec, every layer that built the final shot, and why we used Seedance for it.",
    sections: [
      {
        heading: "What this is",
        body: [
          "A self-initiated spec commercial for the RTA. We pitched ourselves on what their next campaign could look like and built it. Seedance handled the motion. A lot of separate elements got assembled into the final cut.",
          "We had a lot of fun making it.",
        ],
      },
      {
        heading: "Why we are showing the layers",
        body: [
          "Most reels show the cake. This page shows the kitchen.",
          "The post breaks down the elements that went into the spec. Characters, environments, motion plates, edits, sound. The way it actually came together. Most people only ever see the final commercial, never how it was assembled.",
        ],
      },
      {
        heading: "Why spec work earns a spot",
        body: [
          "When nobody briefs you, your taste becomes the brief. That is a useful thing for a future client to see. You learn what we choose to make when there are no compromises in the way.",
        ],
      },
    ],
    pullQuote:
      "Most reels show the cake. We are showing the kitchen.",
    related: [
      { label: "Bank Card / WEFI", href: "/work/bank-card-spec" },
      { label: "TVCs Process", href: "/work/tvcs-process" },
    ],
    cta: bookCta(
      "Want a spec for your brand?",
      "Sometimes the fastest way to figure out what AI can do for you is for us to make a spec piece. Fifteen minutes and we can talk through it.",
    ),
    metaDescription:
      "Self-initiated spec commercial for the RTA. Built in Seedance with a layered breakdown of every element.",
  },
  {
    slug: "bank-card-spec",
    card: {
      title: "Bank Card / WEFI",
      summary:
        "A spec ad built for the feed. Every beat earns the next second of attention.",
      tag: "AI Production",
      accent: "magenta",
      placeholder: "[WEFI hero frame]",
      feature: "recent",
    },
    hero: {
      eyebrow: "AI Production · Spec ad",
      headline: "Earning the next second.",
      sub: "Most ads are still made like TV ads. One hook at the start, then a cooldown into product info, then a CTA. That does not survive a feed. This spec is built for the feed.",
    },
    loomCaption:
      "A walk-through of the WEFI spec, beat by beat, and where the re-hooks live.",
    sections: [
      {
        heading: "The thesis",
        body: [
          "On TikTok, on Reels, on Shorts, you do not get sustained attention. You rent it, second by second, and the rent comes due constantly.",
          "Every beat in this spec re-engages. Every cut earns the next. That is the bet, and that is why it works.",
        ],
      },
      {
        heading: "Why this is one of the strongest pieces in the portfolio",
        body: [
          "Most short-form ads are TV ads cut in half. The structure is wrong for the platform. This piece treats the platform as the brief, not the canvas.",
          "The post breaks down where the re-hooks are, beat by beat, so a reader can see the principle in action instead of just hearing it.",
        ],
      },
    ],
    pullQuote:
      "You do not get the next second of someone's time for free. You earn it.",
    related: [
      { label: "RTA, spec ad", href: "/work/rta-spec" },
      { label: "Replace Agency", href: "/work/replace-agency" },
    ],
    cta: bookCta(
      "Need creative built for the feed, not the TV?",
      "If your spend is on platforms where attention is rented by the second, this is the kind of work you want. Fifteen minutes to talk about it.",
    ),
    metaDescription:
      "Spec social ad for WEFI. Built for the feed, beat by beat, with every cut earning the next second of attention.",
  },
  {
    slug: "bambuyu",
    card: {
      title: "Bambuyu",
      summary:
        "Edit-then-render product imagery built before the products were finalized. The launch was already warm.",
      tag: "AI Production",
      accent: "teal",
      placeholder: "[Bambuyu hero render]",
      feature: "recent",
    },
    hero: {
      eyebrow: "AI Production · Pre-launch imagery",
      headline: "The marketing engine was warm before the product launched.",
      sub: "Bambuyu wanted product renders instead of a traditional shoot. The catch was that the products were not finalized yet. We edited the source images and rendered everything from there.",
    },
    loomCaption:
      "How Bambuyu got their full launch imagery before the product hit the line, with Sahar Karoubi.",
    sections: [
      {
        heading: "The workflow",
        body: [
          "Edit-then-render is something a traditional product shoot literally cannot do. You cannot photograph a product that does not exist in its final form yet.",
          "We could. We edited the work-in-progress product imagery to match the final design intent, then ran the render pipeline against it. The output is the imagery you would expect from a finished launch shoot, except it landed before manufacturing did.",
        ],
      },
      {
        heading: "Why this is the strongest argument for AI product work",
        body: [
          "Most posts about AI product photography lead with speed or cost. The actual story is workflow. You do not need the final product to make the final imagery. The product and the imagery iterate in parallel, instead of one waiting on the other.",
          "Bambuyu got to start advertising and showing the brand world before they had final units. By the time the product launched, the marketing engine was already warm.",
        ],
      },
      {
        heading: "What shipped",
        body: [
          "Their products are out. The imagery we made is the imagery the world is seeing. The launch landed.",
        ],
      },
    ],
    pullQuote:
      "By the second iteration, we are about ninety-five percent there. - Sahar Karoubi, Bambuyu",
    related: [
      { label: "PLAAY", href: "/work/plaay" },
      { label: "PepsiCo", href: "/work/pepsico" },
    ],
    cta: bookCta(
      "Got a launch you want to start early?",
      "If you are running a product launch and the imagery side is bottlenecked on having final units, we can probably unblock you. Fifteen minutes to look at the brief.",
    ),
    metaDescription:
      "Pre-launch product imagery for Bambuyu, built with an edit-then-render loop before final products existed.",
  },
  {
    slug: "pepsico",
    card: {
      title: "PepsiCo",
      summary:
        "A single engagement across multiple subsidiary brands. Three time-of-days for Quaker, on a timeline a built set could not hit.",
      tag: "AI Production",
      accent: "sky-blue",
      placeholder: "[Quaker time-of-day stack]",
      feature: "featured",
    },
    hero: {
      eyebrow: "AI Production · FMCG",
      headline: "PepsiCo, multiple brands, one engagement.",
      sub: "PepsiCo had a shoot coming up and did not have the runway to build the sets they wanted. We generated the worlds in AI instead. Same set quality, three time-of-day looks for Quaker, delivered on the timeline they actually had.",
    },
    loomCaption:
      "The PepsiCo engagement, the Quaker time-of-day approach, and where Cheetos fits in.",
    sections: [
      {
        heading: "The crunch",
        body: [
          "Building a real set eats a chunk of the production schedule even when everything goes right. PepsiCo did not have that kind of time on this engagement.",
          "Same kind of approach as an LED-volume production where the world behind the product is virtual instead of physical. Quality looked the same as a built set. The timeline was the part that became possible.",
        ],
      },
      {
        heading: "Quaker, three worlds in one shoot",
        body: [
          "We delivered Day, Night, and Sunset for the same product set. Same brand, three lighting moods, one consistent product hero. A regular set build would have given them one world. We gave them three, on the calendar that existed.",
        ],
      },
      {
        heading: "Cheetos",
        body: [
          "Cheetos was part of the same engagement on the parent-brand side. The page will pick up that section once the assets are confirmed for public release.",
        ],
      },
      {
        heading: "Why this matters",
        body: [
          "PepsiCo is one of the most recognized brand owners on the planet. Shooting for multiple of their subsidiary brands in a single engagement is a real signal of trust. It also opens the door to a virtual-set conversation that higher-end brand teams already understand from Mandalorian-style productions.",
          "We do that, except we spin it up faster and we are more flexible per shot.",
        ],
      },
    ],
    pullQuote:
      "Same set quality. Three time-of-day looks. The timeline that the project actually had.",
    gallery: {
      heading: "Quaker, in three lights",
      note: "Same product set, three time-of-day worlds. One shoot.",
      tiles: [
        { caption: "Quaker, Day" },
        { caption: "Quaker, Sunset" },
        { caption: "Quaker, Night" },
        { caption: "Cheetos", detail: "Coming online" },
      ],
    },
    related: [
      { label: "PLAAY", href: "/work/plaay" },
      { label: "Bambuyu", href: "/work/bambuyu" },
    ],
    cta: bookCta(
      "Have a brand-owner engagement coming up?",
      "We work across multi-brand parent engagements. If you are running a portfolio shoot or a subsidiary launch, we should talk. Fifteen minutes.",
    ),
    metaDescription:
      "PepsiCo engagement spanning multiple subsidiary brands. Quaker time-of-day variations on a timeline a built set could not hit.",
  },
  {
    slug: "market-analysis-tool",
    card: {
      title: "Market Intelligence Briefing",
      summary:
        "A briefing skill on Claude. Pulls from many APIs, synthesizes a real deck. Diligence work, in minutes, not weeks.",
      tag: "AI Systems",
      accent: "mango",
      placeholder: "[Briefing deck output]",
      feature: "featured",
    },
    hero: {
      eyebrow: "AI Systems · Intelligence",
      headline: "A briefing skill that ships a real deck.",
      sub: "Point it at a brand. It comes back with a deep brief covering everything that brand is doing right now, plus anything that looks off or is going wrong. Up to date, sourced, structured, ready to read.",
    },
    loomCaption:
      "A live run from a single brand name to a finished deck, end to end.",
    sections: [
      {
        heading: "What it is",
        body: [
          "A market intelligence briefing skill, built on Claude. It calls a set of APIs, pulls from a wide range of sources, and synthesizes everything into a presentation. The output is a real deck, not a chat transcript.",
        ],
      },
      {
        heading: "Who it is for",
        body: [
          "Three buyer profiles right now.",
        ],
        bullets: [
          "Private equity firms. Diligence work on portfolio companies and acquisition targets. The kind of brief that takes an analyst a week, available in minutes.",
          "Brands looking at themselves. An outside-in view of how the company actually shows up in the world right now, including the bits the comms team would rather not see.",
          "Brands looking at competitors. Same depth, pointed at someone else.",
        ],
      },
      {
        heading: "Why this exists",
        body: [
          "Most AI competitive-intelligence tools are either toy-grade chat wrappers or expensive enterprise dashboards that try to do everything and end up doing nothing.",
          "This sits in between. A single skill, focused on producing one thing, grounded in actual data sources rather than vibes. A briefing.",
        ],
      },
      {
        heading: "What this signals",
        body: [
          "The featured project list is mostly creative production. This page is the one that says we ship product too. Different muscle group, same team.",
          "It is a doorway for the consulting and diligence side of the work.",
        ],
      },
    ],
    pullQuote:
      "A real briefing, grounded in real sources. Not vibes.",
    related: [
      { label: "Replace Agency", href: "/work/replace-agency" },
      { label: "Brief to Content", href: "/work/brief-to-content" },
    ],
    cta: bookCta(
      "Want a sample brief on a brand you care about?",
      "Tell us a brand and we will run the skill against it. Fifteen minutes to scope, the deck lands shortly after.",
      "Request a sample brief",
    ),
    metaDescription:
      "Market Intelligence Briefing skill. Brand name in, sourced deck out. Built for PE diligence and brand strategy.",
  },
];

export const postBySlug = (slug: string): Post | undefined =>
  posts.find((p) => p.slug === slug);

export const allSlugs = (): string[] => posts.map((p) => p.slug);
