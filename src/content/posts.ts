export type Accent = "sky-blue" | "magenta" | "teal" | "mango" | "orange";

export type ImageRef = { src: string; caption?: string; badge?: string };

export type RelatedLink = { label: string; href: string };

export type VideoBlock = {
  kind: "video";
  provider: "youtube" | "loom" | "mp4" | "placeholder";
  src?: string;
  caption?: string;
  label?: string;
  poster?: string;
  heading?: string;
};

export type Block =
  | {
      kind: "intro";
      heading?: string;
      body: string[];
      bullets?: string[];
    }
  | {
      kind: "phase";
      phase: string;
      heading: string;
      body?: string[];
      bullets?: string[];
    }
  | {
      kind: "stepGrid";
      steps: { title: string; body: string; image?: string }[];
    }
  | {
      kind: "modeRow";
      eyebrow: string;
      heading: string;
      body: string[];
      image?: ImageRef;
      images?: ImageRef[];
      video?: VideoBlock;
      reverse?: boolean;
    }
  | {
      kind: "imageGrid";
      heading?: string;
      note?: string;
      cols?: 2 | 3 | 4 | 5 | 6;
      aspect?: "video" | "square" | "portrait" | "auto";
      images: ImageRef[];
    }
  | {
      kind: "videoGrid";
      heading?: string;
      note?: string;
      cols?: 2 | 3 | 4;
      aspect?: "video" | "portrait" | "square" | "tall";
      audio?: boolean;
      videos: { src: string; caption?: string }[];
    }
  | {
      kind: "avatarRow";
      heading?: string;
      avatars: { src: string; label: string }[];
    }
  | VideoBlock
  | {
      kind: "comparison";
      heading?: string;
      pairs: {
        before: ImageRef & { label?: string };
        after: ImageRef & { label?: string };
      }[];
    }
  | {
      kind: "darkFeatures";
      phase?: string;
      heading: string;
      subheading?: string;
      features: { title: string; body: string }[];
    }
  | { kind: "pullQuote"; quote: string; attribution?: string }
  | { kind: "stats"; stats: { value: string; label: string }[] }
  | { kind: "fullImage"; src: string; caption?: string }
  | {
      kind: "pipelineRow";
      phase?: string;
      heading?: string;
      subheading?: string;
      steps: { title: string; sub: string }[];
    }
  | {
      kind: "pathPair";
      phase?: string;
      heading?: string;
      subheading?: string;
      left: { title: string; body: string; tone?: "dark" | "light" };
      right: { title: string; body: string; tone?: "dark" | "light" };
    }
  | { kind: "spacer" }
  | { kind: "arrow"; label?: string }
  | {
      kind: "aspectCompare";
      heading?: string;
      note?: string;
      items: {
        ratio: string;
        label: string;
        sub?: string;
        w: number;
        h: number;
        tone?: "muted" | "accent";
      }[];
    };

export type Post = {
  slug: string;
  card: {
    title: string;
    summary: string;
    tag: string;
    accent: Accent;
    placeholder: string;
    feature: "featured" | "recent" | "topic";
    order?: number;
  };
  hero: {
    eyebrow: string;
    headline: string;
    sub: string;
  };
  heroVideo?: VideoBlock;
  loomVideo?: VideoBlock;
  blocks: Block[];
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

const ASSET = "/work-assets";

const meenaCast: { src: string; label: string }[] = [
  {
    src: `${ASSET}/meena/References/People/Solo/aziz-young.png`,
    label: "Aziz, Young",
  },
  {
    src: `${ASSET}/meena/References/People/Solo/aziz-modern.png`,
    label: "Aziz, Modern",
  },
  {
    src: `${ASSET}/meena/References/People/Solo/aziz-grandson.png`,
    label: "Grandson",
  },
  {
    src: `${ASSET}/meena/References/People/Solo/doctor-young.png`,
    label: "Doctor",
  },
  {
    src: `${ASSET}/meena/References/People/Solo/doctor-old.png`,
    label: "Doctor, Old",
  },
  {
    src: `${ASSET}/meena/References/People/Solo/grandpa.png`,
    label: "Grandpa",
  },
];

const meenaLocations = [
  {
    src: `${ASSET}/meena/References/Places/Modern exterior.png`,
    caption: "Modern, exterior",
  },
  {
    src: `${ASSET}/meena/References/Places/Modern interior.png`,
    caption: "Modern, interior",
  },
  {
    src: `${ASSET}/meena/References/Places/Old exterior.png`,
    caption: "Old, exterior",
  },
  {
    src: `${ASSET}/meena/References/Places/Old interior.png`,
    caption: "Old, interior",
  },
];

export const posts: Post[] = [
  {
    slug: "tvcs-process",
    card: {
      title: "TVCs Process",
      summary:
        "From script to screen. The four-step pipeline for full TV commercials, end to end.",
      tag: "AI Production",
      accent: "sky-blue",
      placeholder: "[TVC pipeline still]",
      feature: "featured",
      order: 1,
    },
    hero: {
      eyebrow: "AI Production · TV Commercials",
      headline: "From script to screen, end to end.",
      sub: "A data-driven approach to TV commercial production. Same shape as a traditional pipeline. Different middle. Broadcast-ready commercials, in a fraction of the time, with full control over style, tone, and messaging.",
    },
    loomVideo: {
      kind: "video",
      provider: "placeholder",
      label: "Loom intro",
      caption:
        "The TVC pipeline broken into four steps, with real assets at each one.",
    },
    blocks: [
      {
        kind: "intro",
        heading: "What this is",
        body: [
          "This is the playbook we use for every TV commercial. Treatment up front, generation in the middle, edit and post at the end. Same shape as a traditional shoot. The production day just lives inside our infrastructure now.",
          "The worked example on this page is Meena. One brand spot, one extended family, two eras of one place. We pull every element apart and put it back together so you can see how it actually works.",
        ],
      },
      {
        kind: "pipelineRow",
        phase: "The pipeline",
        heading: "Four steps, one film",
        subheading:
          "Each step has a real artefact. Nothing happens out of sequence.",
        steps: [
          { title: "Script", sub: "Treatment first" },
          { title: "Assets", sub: "Cast and world" },
          { title: "Motion", sub: "Performance" },
          { title: "Polish", sub: "Edit, grade, sound, mix" },
        ],
      },
      {
        kind: "phase",
        phase: "Step 01",
        heading: "We start with the script",
        body: [
          "Treatment, beats, shot list. We prep it like a real shoot. The whole film exists as a document before a single frame gets generated. Every cut earns its place before it lands in the timeline.",
          "For Meena, the treatment had to hold the family together and travel them through time without losing the thread.",
        ],
      },
      { kind: "arrow", label: "Lock the assets" },
      {
        kind: "phase",
        phase: "Step 02",
        heading: "Then we lock the cast and the world",
        body: [
          "Before anything moves, we lock the cast and the locations. One canonical version of each character. One canonical version of each place. The system reads against those references on every shot, every angle, every time.",
          "Meena's cast spans two eras and three generations. The world spans the same. Same place, two times, two interiors, two exteriors.",
        ],
      },
      {
        kind: "avatarRow",
        heading: "The Meena cast",
        avatars: meenaCast,
      },
      {
        kind: "imageGrid",
        heading: "The Meena world",
        cols: 4,
        aspect: "video",
        images: meenaLocations,
      },
      { kind: "arrow", label: "Bring it to life" },
      {
        kind: "phase",
        phase: "Step 03",
        heading: "Now we put it in motion",
        body: [
          "Static assets get brought to life with current motion models. Lipsync, performance, camera movement. Same discipline a traditional VFX pipeline brings, with different tools doing the work.",
          "On Meena, motion is what carries the time-travel. The characters age inside continuous performance. The world shifts era inside continuous camera moves.",
        ],
      },
      { kind: "arrow", label: "And finally, polish" },
      {
        kind: "phase",
        phase: "Step 04",
        heading: "And finally, polish",
        body: [
          "The last leg is craft. Edit, colour grade, sound design, mix. Four layers of polish stacked on top of the locked picture.",
          "Sound design used to be the part of post we outsourced. We pulled it back in-house and rebuilt it inside the same pipeline that handles picture. Every TVC we run now gets a custom score, designed Foley, and mix passes from the same team that built the world. The film hits with sound that was made for it, not pulled off a library.",
          "Meena went through this stage in a single thirty-hour sitting after a global model outage knocked the project sideways. The pipeline survived because the cast and the world were already locked. All polish had to do was put it together.",
        ],
      },
    ],
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
    slug: "market-analysis-tool",
    card: {
      title: "Market Intelligence Briefing",
      summary:
        "A briefing skill on Claude. Pulls from many APIs, synthesizes a real deck. Diligence work, in minutes, not weeks.",
      tag: "AI Systems",
      accent: "mango",
      placeholder: "[Briefing deck output]",
      feature: "featured",
      order: 2,
    },
    hero: {
      eyebrow: "AI Systems · Intelligence",
      headline: "A briefing skill that ships a real deck.",
      sub: "Point it at a brand. It comes back with a deep brief covering everything that brand is doing right now, plus anything that looks off or is going wrong. Up to date, sourced, structured, ready to read.",
    },
    loomVideo: {
      kind: "video",
      provider: "placeholder",
      label: "Loom walkthrough",
      caption:
        "A live run from a single brand name to a finished deck, end to end.",
    },
    blocks: [
      {
        kind: "intro",
        heading: "What it is",
        body: [
          "A market intelligence briefing skill we built on Claude. You point it at a brand. It comes back with a real, sourced deck. The kind of diligence work that normally takes an analyst a week, ready to read in minutes.",
        ],
      },
      {
        kind: "phase",
        phase: "Step 01",
        heading: "We built it for three kinds of buyer",
        body: [
          "The skill stays the same. Who it is for shifts what we point it at.",
        ],
        bullets: [
          "Private equity firms running diligence on portfolio companies or acquisition targets.",
          "Brands looking at themselves. An outside-in view of how the company actually shows up right now, including the bits the comms team would rather not see.",
          "Brands looking at competitors. Same depth, pointed at someone else.",
        ],
      },
      { kind: "arrow", label: "How it runs" },
      {
        kind: "phase",
        phase: "Step 02",
        heading: "Brand name in, deck out",
        body: [
          "You give it a brand name. The skill fires a set of API calls in parallel. News, filings, hiring data, ad libraries, social, web, financial signals. Each source comes back, gets cleaned up, and gets pinned to a slide.",
          "Executive summary up top, sourced sections underneath, a watch list at the back. A real document a partner or strategist would actually read.",
        ],
      },
      { kind: "arrow", label: "Why we built it" },
      {
        kind: "phase",
        phase: "Step 03",
        heading: "Why this exists",
        body: [
          "Most AI competitive-intelligence tools are either toy chat wrappers or expensive enterprise dashboards trying to do everything. This sits in between.",
          "One focused job, done well. Grounded in real sources, not vibes. Built to be customized so the briefing reads like the firm wrote it.",
        ],
      },
    ],
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

  {
    slug: "burjeel-hospital",
    card: {
      title: "Burjeel Hospital",
      summary:
        "Four minutes at 8K, in 4:1 ultra-wide, for the wall on the anniversary night. Five days, end to end.",
      tag: "AI Video Production",
      accent: "sky-blue",
      placeholder: "[Burjeel 8K still]",
      feature: "featured",
      order: 3,
    },
    hero: {
      eyebrow: "AI Video Production · Brand film",
      headline: "8K. 4:1. Five days.",
      sub: "Burjeel asked for a four-minute anniversary film not for a phone or a TV, but for the wide curved screen at the venue. That meant 8K. And it meant 4:1, an aspect ratio almost nobody shoots in.",
    },
    heroVideo: {
      kind: "video",
      provider: "placeholder",
      label: "Final film",
      caption:
        "The four-minute cut goes here once the public version is cleared.",
    },
    loomVideo: {
      kind: "video",
      provider: "placeholder",
      label: "Loom walkthrough",
      caption:
        "A two-minute walk-through of the Burjeel build. The timeline, the pipeline, what shipped.",
    },
    blocks: [
      {
        kind: "stats",
        stats: [
          { value: "8K", label: "Master resolution" },
          { value: "4:1", label: "Aspect ratio" },
          { value: "5 days", label: "Script to delivery" },
        ],
      },
      {
        kind: "intro",
        heading: "Built for a wall, not a screen",
        body: [
          "Burjeel asked us for a cinematic four-minute anniversary film. The kind of piece a hospital this size would normally commission as a multi-week shoot.",
          "The catch was the format. The film was not built for a TV. It was built for the wide curved screen at the venue, the one the audience watches from inside the room. That meant 8K. And it meant 4:1, an aspect ratio that almost nobody shoots in.",
        ],
      },
      {
        kind: "aspectCompare",
        heading: "What 4:1 actually means",
        note: "Most productions ship 16:9. Most cinema scope tops out at 2.39:1. We shipped 4:1. Same height, more than twice the width of a normal frame.",
        items: [
          {
            ratio: "16:9",
            label: "Normal production",
            sub: "1.78 : 1 · TV / streaming standard",
            w: 16,
            h: 9,
            tone: "muted",
          },
          {
            ratio: "2.39:1",
            label: "Cinema scope",
            sub: "Anamorphic widescreen, the widest most films go",
            w: 239,
            h: 100,
            tone: "muted",
          },
          {
            ratio: "4:1",
            label: "Burjeel anniversary film",
            sub: "4.00 : 1 · venue scale, almost nobody shoots here",
            w: 4,
            h: 1,
            tone: "accent",
          },
        ],
      },
      {
        kind: "phase",
        phase: "Step 01",
        heading: "We start with the treatment",
        body: [
          "Same way you would prep a real shoot. Script, beats, shot list, treatment. The film exists as a document before a single frame gets generated. Every cut earns its place before it lands in the timeline.",
          "The treatment also accounted for the frame. A 4:1 screen does not behave like a TV. Eye lines, blocking, composition, the entire shot grammar gets rewritten for ultra-wide.",
        ],
      },
      { kind: "arrow", label: "Then we build it, at 8K" },
      {
        kind: "phase",
        phase: "Step 02",
        heading: "Generation, at 8K, at 4:1",
        body: [
          "What would have been the shoot day became a generation phase inside our infrastructure. Characters, environments, motion, camera moves, all built against the locked treatment.",
          "Most AI video tools ship at 1080p, or 4K on a good day. We pushed every shot through an upscale and detail-recovery pipeline so the final master held at the resolution the venue needed. Four times the pixel count of a standard 4K commercial. And the canvas was a 4:1 ultra-wide instead of 16:9, so every shot had to be composed for that frame from the start, not cropped to it after the fact.",
          "The cast holds across every shot. The world stays consistent. The brand reads cleanly across the entire wall.",
        ],
      },
      {
        kind: "videoGrid",
        cols: 2,
        aspect: "portrait",
        audio: true,
        videos: [
          { src: `${ASSET}/burjeel-hospital/event/event-01.mp4` },
          { src: `${ASSET}/burjeel-hospital/event/event-02.mp4` },
        ],
      },
      {
        kind: "fullImage",
        src: `${ASSET}/burjeel-hospital/event/event-still.jpg`,
      },
      { kind: "arrow", label: "And finally, polish" },
      {
        kind: "phase",
        phase: "Step 03",
        heading: "Edit, grade, and sound",
        body: [
          "The last mile is the same craft any high-end project goes through. Conform the cut, dial in the grade, score it, mix it. Different tools, same discipline.",
          "Five days. 8K master. 4:1 frame. Ready for the wall.",
        ],
      },
    ],
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
    slug: "pepsico",
    card: {
      title: "PepsiCo",
      summary:
        "Four brands. Three options each. The pick refined to day, sunset, night. All on an LED screen.",
      tag: "AI Production",
      accent: "sky-blue",
      placeholder: "[Quaker time-of-day stack]",
      feature: "featured",
      order: 4,
    },
    hero: {
      eyebrow: "AI Production · FMCG",
      headline: "The set of their dreams, on an LED.",
      sub: "Three options per brand, matched to brand colour. The chosen one refined and built across day, sunset, and night. No built set, just a backdrop.",
    },
    loomVideo: {
      kind: "video",
      provider: "placeholder",
      label: "Loom walkthrough",
      caption:
        "The PepsiCo engagement, the parent-brand approach, and how the four subsidiary brands stacked into one shoot.",
    },
    blocks: [
      {
        kind: "intro",
        body: [
          "PepsiCo wanted the set of their dreams. The catch was time. Building four sets for four brands is weeks of carpentry, even when nothing goes wrong, and they did not have weeks.",
          "So we skipped the carpentry. The shoot ran on an LED screen, and we generated the backdrop. Same look as a built set, no build, no extra cost. Whenever they wanted to change the world, we swapped the image on the screen.",
        ],
      },
      {
        kind: "phase",
        phase: "Step 01",
        heading: "We gave them options for every brand",
        body: [
          "Three different variations per brand, each one tuned to that brand's colour world and energy. They got to pick the one that felt right before we committed to anything.",
        ],
      },
      {
        kind: "imageGrid",
        heading: "Cheetos, three options",
        cols: 3,
        aspect: "video",
        images: [
          { src: `${ASSET}/pepsico/cheetos/Background-1.png`, caption: "Option 01" },
          { src: `${ASSET}/pepsico/cheetos/Background-2.png`, caption: "Option 02" },
          { src: `${ASSET}/pepsico/cheetos/Background-3.png`, caption: "Option 03" },
        ],
      },
      {
        kind: "imageGrid",
        heading: "Doritos, three options",
        cols: 3,
        aspect: "video",
        images: [
          { src: `${ASSET}/pepsico/doritos/Background-1.png`, caption: "Option 01" },
          { src: `${ASSET}/pepsico/doritos/Background-2.png`, caption: "Option 02" },
          { src: `${ASSET}/pepsico/doritos/Background-3.png`, caption: "Option 03" },
        ],
      },
      {
        kind: "imageGrid",
        heading: "Lay's, three options",
        cols: 3,
        aspect: "video",
        images: [
          { src: `${ASSET}/pepsico/lays/Background-1.png`, caption: "Option 01" },
          { src: `${ASSET}/pepsico/lays/Background-2.png`, caption: "Option 02" },
          { src: `${ASSET}/pepsico/lays/Background-3.png`, caption: "Option 03" },
        ],
      },
      { kind: "arrow", label: "They pick" },
      {
        kind: "phase",
        phase: "Step 02",
        heading: "Once they chose, we refined it across day, sunset, and night",
        body: [
          "We upscaled the pick to broadcast quality, then rebuilt the same set across three times of day. One pick became three usable worlds, so they could shoot any tone, morning energy, golden hour, or full night, without leaving the room.",
        ],
      },
      {
        kind: "imageGrid",
        heading: "Quaker, refined and timed",
        cols: 3,
        aspect: "video",
        images: [
          { src: `${ASSET}/pepsico/quaker/Day.png`, caption: "Day" },
          { src: `${ASSET}/pepsico/quaker/Sunset.png`, caption: "Sunset" },
          { src: `${ASSET}/pepsico/quaker/Night.png`, caption: "Night" },
        ],
      },
      { kind: "arrow", label: "On the day" },
      {
        kind: "phase",
        phase: "Step 03",
        heading: "Swap the image, change the world",
        body: [
          "On set, the LED ran the backdrop. To change the scene we just loaded a different image. No rebuild, no relight, no second crew call. Four brands and twelve worlds out of one calendar day.",
        ],
      },
    ],
    related: [
      { label: "TVCs Process", href: "/work/tvcs-process" },
      { label: "Bambuyu", href: "/work/bambuyu" },
      { label: "PLAAY", href: "/work/plaay" },
    ],
    cta: bookCta(
      "Have a brand-owner engagement coming up?",
      "We work across multi-brand parent engagements. If you are running a portfolio shoot or a subsidiary launch, we should talk. Fifteen minutes.",
    ),
    metaDescription:
      "PepsiCo engagement spanning four subsidiary brands. Three set variants each for Quaker, Cheetos, Doritos, and Lay's, all on a timeline a built set could not hit.",
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
      feature: "recent",
    },
    hero: {
      eyebrow: "AI Systems · Workflow",
      headline: "Character consistency, on demand.",
      sub: "The hardest unsolved problem in AI imagery is keeping the same person looking like the same person across every shot. We solved it across four modes that each handle a different real-world need.",
    },
    loomVideo: {
      kind: "video",
      provider: "placeholder",
      label: "Loom walkthrough",
      caption: "Four modes, one engine. A walk-through of the workflow.",
    },
    blocks: [
      {
        kind: "intro",
        heading: "Teach the system your world",
        body: [
          "Before any generation happens, we build a locked reference set. Faces, products, backgrounds, project context. Once the system has that, every shot speaks the same visual language.",
        ],
      },
      {
        kind: "phase",
        phase: "Step 01",
        heading: "Lock the cast",
        body: [
          "Every face becomes a reference. The product becomes a reference. The system reads against those locks on every generation, every angle, every shot.",
        ],
      },
      {
        kind: "avatarRow",
        heading: "The locked cast",
        avatars: [
          { src: `${ASSET}/consistent-characters/Refs/Mom.png`, label: "Mom" },
          { src: `${ASSET}/consistent-characters/Refs/Dad.png`, label: "Dad" },
          {
            src: `${ASSET}/consistent-characters/Refs/Sister.png`,
            label: "Sister",
          },
          { src: `${ASSET}/consistent-characters/Refs/Son.png`, label: "Son" },
          {
            src: `${ASSET}/consistent-characters/Refs/Baby Sister.png`,
            label: "Baby Sister",
          },
          {
            src: `${ASSET}/consistent-characters/Refs/Product.png`,
            label: "Product",
          },
        ],
      },
      { kind: "arrow", label: "Then we generate" },
      {
        kind: "phase",
        phase: "Step 02",
        heading: "Four ways to generate from the lock",
        body: [
          "Same locked cast. Different jobs. Each mode handles a real production need the others do not.",
        ],
      },
      {
        kind: "modeRow",
        eyebrow: "Mode 01",
        heading: "Single Shot Composer",
        body: [
          "Describe one shot in natural language. Who is in it, how it is framed, where the product sits, how much headroom. The system delivers that exact frame using your locked cast and product.",
        ],
        image: {
          src: `${ASSET}/consistent-characters/Mode 1/Output.png`,
          caption: "Mode 1 output",
        },
      },
      {
        kind: "modeRow",
        eyebrow: "Mode 02",
        heading: "Script to Storyboard",
        body: [
          "Upload a script. The system writes a shot list, drafts an image prompt for every shot, then fires them all in one automated run. Out the other end is a full storyboard, on-cast, on-brand, client-ready.",
        ],
        reverse: true,
        images: [
          { src: `${ASSET}/consistent-characters/Mode 2/1.png` },
          { src: `${ASSET}/consistent-characters/Mode 2/2.png` },
          { src: `${ASSET}/consistent-characters/Mode 2/3.png` },
          { src: `${ASSET}/consistent-characters/Mode 2/4.png` },
          { src: `${ASSET}/consistent-characters/Mode 2/5.png` },
          { src: `${ASSET}/consistent-characters/Mode 2/6.png` },
        ],
      },
      {
        kind: "comparison",
        heading: "Mode 03 · Reference Shot Matching",
        pairs: [
          {
            before: {
              src: `${ASSET}/consistent-characters/Mode 3/Screenshot 2025-12-02 162110.png`,
              label: "Reference input",
            },
            after: {
              src: `${ASSET}/consistent-characters/Mode 3/output.png`,
              label: "Generated output",
            },
          },
        ],
      },
      {
        kind: "modeRow",
        eyebrow: "Mode 04",
        heading: "Hero Shot Expansion",
        body: [
          "Upload a hero shot. The system generates new variations: angles of the same subject, plus the same subject placed in entirely new scenarios. One image becomes a campaign.",
        ],
        image: {
          src: `${ASSET}/consistent-characters/Mode 4/Hero Shot.png`,
          caption: "Hero input",
        },
      },
      {
        kind: "imageGrid",
        heading: "Hero expansion grid",
        note: "Eight new shots from the same hero. Same subject, every variation stays on cast.",
        cols: 4,
        aspect: "square",
        images: [
          {
            src: `${ASSET}/consistent-characters/Mode 4/new shots upsalced/weavy-Gemini 3 (Nano Banana Pro)-2025-12-02 at 16.36.39.png`,
          },
          {
            src: `${ASSET}/consistent-characters/Mode 4/new shots upsalced/weavy-Gemini 3 (Nano Banana Pro)-2025-12-02 at 16.36.44.png`,
          },
          {
            src: `${ASSET}/consistent-characters/Mode 4/new shots upsalced/weavy-Gemini 3 (Nano Banana Pro)-2025-12-02 at 16.36.50.png`,
          },
          {
            src: `${ASSET}/consistent-characters/Mode 4/new shots upsalced/weavy-Gemini 3 (Nano Banana Pro)-2025-12-02 at 16.36.55.png`,
          },
          {
            src: `${ASSET}/consistent-characters/Mode 4/new shots upsalced/weavy-Gemini 3 (Nano Banana Pro)-2025-12-02 at 16.37.02.png`,
          },
          {
            src: `${ASSET}/consistent-characters/Mode 4/new shots upsalced/weavy-Gemini 3 (Nano Banana Pro)-2025-12-02 at 17.02.20.png`,
          },
          {
            src: `${ASSET}/consistent-characters/Mode 4/new shots upsalced/weavy-Gemini 3 (Nano Banana Pro)-2025-12-02 at 17.02.39.png`,
          },
          {
            src: `${ASSET}/consistent-characters/Mode 4/new shots upsalced/weavy-Gemini 3 (Nano Banana Pro)-2025-12-02 at 17.02.46.png`,
          },
        ],
      },
      { kind: "arrow", label: "Why it holds" },
      {
        kind: "phase",
        phase: "Step 03",
        heading: "The engine underneath",
        body: [
          "Three things hold this together at scale. Contextual awareness so every prompt reads the locked references and the right people show up. Batch processing so scripts become structured shot lists, generated in parallel. Composition transfer so a reference frame can be rebuilt with your cast and your product.",
          "Combined, the cast and the world stay stable across every angle, every lighting setup, every variation.",
        ],
      },
    ],
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
    loomVideo: {
      kind: "video",
      provider: "placeholder",
      label: "Loom walkthrough",
      caption: "A live run, deck in, storyboard out, end to end.",
    },
    blocks: [
      {
        kind: "intro",
        heading: "What this does",
        body: [
          "You have a deck that has already been approved. The idea is locked. What you need next is the visual response. Storyboards, hero frames, and the variations around them.",
          "This workflow takes the deck as the input and gives you the assets back. No manual rewriting of the brief.",
        ],
      },
      {
        kind: "phase",
        phase: "Step 01",
        heading: "You drop in the deck",
        body: [
          "Upload the slides. Screenshots, copied slides, exported PDFs. Whatever you have on hand from the approved presentation.",
          "Optional reference images sit alongside it. Locations, products, mood. Anything that keeps the output grounded in your actual world.",
        ],
      },
      { kind: "arrow", label: "Then we read every slide" },
      {
        kind: "phase",
        phase: "Step 02",
        heading: "The system reads the slides",
        body: [
          "Headings, bullets, diagrams, emphasis. The system reads what the slide is actually trying to communicate.",
          "Each slide gets converted into a short visual brief. What to show, what mood, what style, what to focus on.",
        ],
      },
      { kind: "arrow", label: "Then slides become shots" },
      {
        kind: "phase",
        phase: "Step 03",
        heading: "Slides become shots",
        body: [
          "For each slide we design a small set of shots. A main hero that answers the slide, supporting angles around it. The system writes natural-language image directions for every shot, and variations follow automatically.",
        ],
      },
      {
        kind: "comparison",
        heading: "Slide in. Hero out.",
        pairs: [
          {
            before: {
              src: `${ASSET}/brief-to-content/Slide Example/Slide Input.png`,
              label: "Slide input",
            },
            after: {
              src: `${ASSET}/brief-to-content/Slide Example/weavy-Gemini 3 (Nano Banana Pro)-2025-12-01 at 23.59.30.png`,
              label: "Hero output",
            },
          },
        ],
      },
      {
        kind: "imageGrid",
        heading: "More variations from the same slide",
        note: "Same input. Different angles, crops, moments. Coverage, not a single frame.",
        cols: 3,
        aspect: "video",
        images: [
          {
            src: `${ASSET}/brief-to-content/Slide Example/weavy-Gemini 3 (Nano Banana Pro)-2025-12-01 at 23.59.35.png`,
          },
          {
            src: `${ASSET}/brief-to-content/Slide Example/weavy-Gemini 3 (Nano Banana Pro)-2025-12-01 at 23.59.39.png`,
          },
          {
            src: `${ASSET}/brief-to-content/Slide Example/weavy-Gemini 3 (Nano Banana Pro)-2025-12-01 at 23.59.52.png`,
          },
          {
            src: `${ASSET}/brief-to-content/Slide Example/weavy-Gemini 3 (Nano Banana Pro)-2025-12-01 at 23.59.57.png`,
          },
          {
            src: `${ASSET}/brief-to-content/Slide Example/weavy-Gemini 3 (Nano Banana Pro)-2025-12-02 at 00.00.01.png`,
          },
        ],
      },
    ],
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
        "An end-to-end Campaign Engine. Lo Fi and Hi Fi mix in one go, up to thirty assets per run.",
      tag: "AI Systems",
      accent: "magenta",
      placeholder: "[Pipeline output fan]",
      feature: "recent",
    },
    hero: {
      eyebrow: "AI Systems · Campaign Engine",
      headline: "Replace the agency.",
      sub: "A full mix of Lo Fi and Hi Fi ads in one go. Up to thirty assets per run, all on brand by default. The pipeline handles concept, briefing, generation, and curation. The taste layer stays human.",
    },
    loomVideo: {
      kind: "video",
      provider: "placeholder",
      label: "Loom walkthrough",
      caption:
        "The Campaign Engine, from a single brand brief to thirty finished assets.",
    },
    blocks: [
      {
        kind: "intro",
        heading: "What this is",
        body: [
          "An end-to-end campaign engine. One brand brief in, up to thirty finished assets out. Lo Fi and Hi Fi in the same run, on brand by default, ready to test.",
          "The taste layer stays human. The machine handles concept, briefing, generation, and curation.",
        ],
      },
      {
        kind: "phase",
        phase: "Step 01",
        heading: "We ingest the brand",
        body: [
          "Product, audience, voice, visuals. We pull your whole brand DNA in once, and that becomes the source of truth. Every asset the engine spits out is on brand because it has to be, not because we got lucky.",
        ],
      },
      {
        kind: "pipelineRow",
        phase: "What gets ingested",
        steps: [
          { title: "Product", sub: "Deep dive" },
          { title: "Brand", sub: "Download" },
          { title: "Audience", sub: "Definition" },
          { title: "Angles", sub: "Creative seeds" },
          { title: "Visuals", sub: "Hero assets" },
        ],
      },
      { kind: "arrow", label: "Then we direct it" },
      {
        kind: "phase",
        phase: "Step 02",
        heading: "Every concept splits into two paths",
        body: [
          "The system takes simple seeds and expands them into full creative briefs. Every concept gets split into a Lo Fi version and a Hi Fi version, so a single run covers both ends of the feed.",
        ],
      },
      {
        kind: "pathPair",
        left: {
          title: "Lo Fi path",
          body: "Native, handheld, UGC-style. The kind of creative that lives in the feed and reads like a real person made it.",
          tone: "dark",
        },
        right: {
          title: "Hi Fi path",
          body: "Polished, cinematic, designed. The kind of creative that anchors a campaign and works as a hero asset.",
          tone: "light",
        },
      },
      { kind: "arrow", label: "Then we generate at scale" },
      {
        kind: "phase",
        phase: "Step 03",
        heading: "Generation, the part most AI ad tools skip",
        body: [
          "Three layers stacked. Precise prompting that controls lighting, lens, and film stock. Batch processing that runs hundreds of variations in parallel. Then a curation pass that picks the campaign out of the noise.",
        ],
      },
      {
        kind: "pipelineRow",
        phase: "How generation runs",
        steps: [
          { title: "Precise prompting", sub: "Lighting · lens · film stock" },
          { title: "Batch processing", sub: "Hundreds of variations" },
          { title: "Campaign ready", sub: "Curated and deployed" },
        ],
      },
      { kind: "arrow", label: "The campaign drops out" },
      {
        kind: "phase",
        phase: "Step 04",
        heading: "One product, a full campaign",
        body: [
          "One product input. The full mix back. Hi Fi anchors, Lo Fi natives, video cuts. Everything you would need to walk into a feed test, in hours, not weeks.",
        ],
      },
      {
        kind: "fullImage",
        src: `${ASSET}/replace-agency/Product Shot.png`,
        caption: "Source product",
      },
      {
        kind: "imageGrid",
        heading: "Generated static assets",
        note: "Hi Fi and Lo Fi in the same run. The mix that a feed actually wants.",
        cols: 3,
        aspect: "square",
        images: [
          {
            src: `${ASSET}/replace-agency/Static post/weavy-Gemini 3 (Nano Banana Pro)-2025-12-15 at 18.56.32.png`,
            badge: "Hi Fi",
          },
          {
            src: `${ASSET}/replace-agency/Static post/weavy-Gemini 3 (Nano Banana Pro)-2025-12-15 at 18.56.46.png`,
            badge: "Hi Fi",
          },
          {
            src: `${ASSET}/replace-agency/Static post/weavy-Gemini 3 (Nano Banana Pro)-2025-12-15 at 18.56.53.png`,
            badge: "Hi Fi",
          },
          {
            src: `${ASSET}/replace-agency/Static post/weavy-Gemini 3 (Nano Banana Pro)-2025-12-15 at 19.12.36.png`,
            badge: "Lo Fi",
          },
          {
            src: `${ASSET}/replace-agency/Static post/weavy-Gemini 3 (Nano Banana Pro)-2025-12-15 at 19.14.40.png`,
            badge: "Lo Fi",
          },
          {
            src: `${ASSET}/replace-agency/Static post/weavy-Gemini 3 (Nano Banana Pro)-2025-12-15 at 19.15.50.png`,
            badge: "Lo Fi",
          },
        ],
      },
      {
        kind: "videoGrid",
        heading: "Generated video reels",
        note: "Sora-built, brief-aligned, ready to drop into a feed test.",
        cols: 3,
        videos: [
          {
            src: `${ASSET}/replace-agency/Video Post/weavy-Sora 2-2025-12-15 at 19.11.45.mp4`,
            caption: "Campaign reel",
          },
          {
            src: `${ASSET}/replace-agency/Video Post/weavy-Sora 2-2025-12-15 at 19.12.14.mp4`,
            caption: "Influencer reel",
          },
          {
            src: `${ASSET}/replace-agency/Video Post/weavy-Sora 2-2025-12-15 at 19.13.31.mp4`,
            caption: "Lifestyle cut",
          },
          {
            src: `${ASSET}/replace-agency/Video Post/weavy-Sora 2-2025-12-15 at 19.14.03.mp4`,
            caption: "Hero cut",
          },
          {
            src: `${ASSET}/replace-agency/Video Post/weavy-Sora 2-2025-12-15 at 19.14.18.mp4`,
            caption: "Hook cut",
          },
          {
            src: `${ASSET}/replace-agency/Video Post/weavy-Sora 2-2025-12-15 at 19.17.49.mp4`,
            caption: "Variant cut",
          },
        ],
      },
    ],
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
      "Campaign Engine. Brand brief in, thirty finished on-brand assets out. Lo Fi and Hi Fi, social, web, and print.",
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
      feature: "recent",
    },
    hero: {
      eyebrow: "AI Production · Brand spot",
      headline: "Thirty hours, one room, the video shipped.",
      sub: "Meena was a two-week build that became a one-week build, then a thirty-hour run. In the middle of the squeeze, a global model outage took everyone in the AI creative space offline. The film exists because of how it was built.",
    },
    heroVideo: {
      kind: "video",
      provider: "placeholder",
      label: "Final film",
      caption:
        "The Meena cut goes here once the public version is cleared.",
    },
    loomVideo: {
      kind: "video",
      provider: "placeholder",
      label: "Loom walkthrough",
      caption:
        "The rescue story in the founder's voice, with the timeline beat by beat.",
    },
    blocks: [
      {
        kind: "stats",
        stats: [
          { value: "30 hrs", label: "Final sprint" },
          { value: "1 cast", label: "Locked across two eras" },
          { value: "0", label: "Re-shoots needed" },
        ],
      },
      {
        kind: "intro",
        heading: "The squeeze",
        body: [
          "Meena should not have worked. A two-week build became one week. Then halfway through that one week, a global model outage took everyone in the AI creative space offline.",
          "The video shipped anyway. Here is the timeline.",
        ],
      },
      {
        kind: "phase",
        phase: "Step 01",
        heading: "Two weeks, already tight",
        body: [
          "The build was scoped at two weeks. Multi-generation cast, two eras of location, a story that travels through time. Two weeks was already tight for what we had promised.",
        ],
      },
      { kind: "arrow", label: "Then it tightened" },
      {
        kind: "phase",
        phase: "Step 02",
        heading: "Then one week",
        body: [
          "Unforeseen circumstances cut the runway in half. We replanned around a one-week build and got to work.",
        ],
      },
      { kind: "arrow", label: "Then everything broke" },
      {
        kind: "phase",
        phase: "Step 03",
        heading: "Then the outage",
        body: [
          "Halfway through that one week, Nano Banana Pro stopped working. Globally. A downstream error on Google's side took everyone in the AI creative space offline for three or four days. We could not generate any client work, not just for Meena, for anyone. The whole industry was on pause.",
        ],
      },
      { kind: "arrow", label: "When it came back" },
      {
        kind: "phase",
        phase: "Step 04",
        heading: "Thirty hours, one room, the film shipped",
        body: [
          "By the time the models came back up, we had basically zero time left. So we got the whole team in one room and finished the project in a single thirty-hour sitting.",
          "A traditional shoot of this scope on this timeline would not have been possible. The film exists because the cast and the world were already locked. The system held. The video shipped. The client was happy.",
        ],
      },
    ],
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
    slug: "plaay",
    card: {
      title: "PLAAY",
      summary:
        "Premium product imagery built before the product physically existed. The closest thing to time travel a brand gets.",
      tag: "AI Production",
      accent: "magenta",
      placeholder: "[PLAAY product render]",
      feature: "recent",
    },
    hero: {
      eyebrow: "AI Production · Pre-launch imagery",
      headline: "We shot the product before it existed.",
      sub: "PLAAY had a packaging concept, an idea of what they wanted, and no physical product yet. We built the imagery anyway, and they got to test the brand world before they committed to print.",
    },
    loomVideo: {
      kind: "video",
      provider: "placeholder",
      label: "Loom walkthrough",
      caption:
        "How we used AI to ideate packaging and brand imagery for PLAAY before a single sample existed.",
    },
    blocks: [
      {
        kind: "intro",
        heading: "What we did",
        body: [
          "PLAAY described the product to us. We built it for them in AI. Renders, packaging variations, hero shots, lifestyle context.",
          "The kind of imagery you would expect from a finished launch shoot. Except the product was still on its way.",
        ],
      },
      {
        kind: "phase",
        phase: "Step 01",
        heading: "They described it, we built it",
        body: [
          "We started from a packaging concept and a description. No physical sample, no press shoot. We generated the brand world end to end so they could see what they were buying before they bought it.",
        ],
      },
      { kind: "arrow", label: "What that unlocks" },
      {
        kind: "phase",
        phase: "Step 02",
        heading: "AI lets you start before you have the thing",
        body: [
          "Most product photography goes: we shot the product. This one goes the other way. The product did not exist yet and we shot it anyway.",
          "AI is not replacing a photo shoot here. It is replacing the wait for the product to exist before the brand could start.",
        ],
        bullets: [
          "Test packaging with a real audience before you commit to print runs.",
          "Run paid creative against real impressions before manufacturing locks in.",
          "Find out whether people want it before you have spent six figures finding out.",
          "Iterate the product and the marketing in parallel, not in sequence.",
        ],
      },
    ],
    related: [
      { label: "Bambuyu", href: "/work/bambuyu" },
      { label: "PepsiCo", href: "/work/pepsico" },
    ],
    cta: bookCta(
      "Building something that does not exist yet?",
      "If you have a product in development and you want to start showing the world what it looks like before manufacturing finishes, we can probably help. Fifteen minutes will tell us.",
    ),
    metaDescription:
      "AI-generated product imagery for PLAAY, built before the physical product existed.",
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
    loomVideo: {
      kind: "video",
      provider: "placeholder",
      label: "Loom walkthrough",
      caption:
        "How Bambuyu got their full launch imagery before the product hit the line.",
    },
    blocks: [
      {
        kind: "intro",
        heading: "What we did",
        body: [
          "Bambuyu wanted product renders instead of a traditional shoot. The catch was that the products were not finalized yet. So we edited the work-in-progress source images and rendered everything from there.",
          "By the time the product launched, the marketing engine was already warm.",
        ],
      },
      {
        kind: "phase",
        phase: "Step 01",
        heading: "Edit, then render",
        body: [
          "Edit-then-render is something a traditional product shoot literally cannot do. You cannot photograph a product that does not exist in its final form yet. We could.",
          "We took the work-in-progress imagery, edited it to match the final design intent, then ran the render pipeline against it. The output looks like a finished launch shoot, except it landed before manufacturing did.",
        ],
      },
      { kind: "arrow", label: "Why it matters" },
      {
        kind: "phase",
        phase: "Step 02",
        heading: "It is the workflow, not the cost",
        body: [
          "Most posts about AI product photography lead with speed or cost. The actual story is workflow. You do not need the final product to make the final imagery. The product and the imagery iterate in parallel, instead of one waiting on the other.",
          "Bambuyu got to start advertising and showing the brand world before they had final units.",
        ],
      },
      {
        kind: "pullQuote",
        quote:
          "By the second iteration, we are about ninety-five percent there.",
        attribution: "Sahar Karoubi, Co-Founder, Bambuyu",
      },
    ],
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
    loomVideo: {
      kind: "video",
      provider: "placeholder",
      label: "Loom walkthrough",
      caption:
        "The RTA spec, every layer that built the final shot, and why we used Seedance for it.",
    },
    blocks: [
      {
        kind: "intro",
        heading: "What this is",
        body: [
          "A self-initiated spec commercial for the RTA. Nobody paid us to do it. We pitched ourselves on what their next campaign could look like and built it.",
          "Seedance handled the motion. A lot of separate elements got assembled into the final cut. We had a lot of fun making it.",
        ],
      },
      {
        kind: "phase",
        phase: "Step 01",
        heading: "We built the whole spec ourselves",
        body: [
          "Spec work is honest. Nobody briefed us, nobody set the budget, nobody approved the cut. So we got to make exactly the thing we would have made if we had been hired. Pure taste, no compromises.",
        ],
      },
      { kind: "arrow", label: "The angle" },
      {
        kind: "phase",
        phase: "Step 02",
        heading: "Show the kitchen, not just the cake",
        body: [
          "Most reels show the cake. This page shows the kitchen.",
          "We break down every element that went into the spec. Characters, environments, motion plates, edits, sound. The way it actually came together. Most people only ever see the final commercial, never how it was assembled.",
        ],
      },
    ],
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
    loomVideo: {
      kind: "video",
      provider: "placeholder",
      label: "Loom walkthrough",
      caption:
        "A walk-through of the WEFI spec, beat by beat, and where the re-hooks live.",
    },
    blocks: [
      {
        kind: "intro",
        heading: "The thesis",
        body: [
          "On TikTok, Reels, and Shorts you do not get sustained attention. You rent it, second by second, and the rent comes due constantly.",
          "Every beat in this spec re-engages. Every cut earns the next. That is the bet.",
        ],
      },
      {
        kind: "phase",
        phase: "Step 01",
        heading: "We treated the platform as the brief",
        body: [
          "Most short-form ads are TV ads cut in half. Hook at the start, cooldown into product info, CTA at the end. That structure is wrong for the platform. This piece treats the platform as the brief, not the canvas.",
        ],
      },
      { kind: "arrow", label: "Beat by beat" },
      {
        kind: "phase",
        phase: "Step 02",
        heading: "Every cut earns the next second",
        body: [
          "There is no cooldown in the middle. No rest beat. No place to lose the viewer. Each cut is a fresh hook against the same product.",
          "You buy the next second of attention with the second you just used.",
        ],
      },
    ],
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
    slug: "ai-in-fashion",
    card: {
      title: "AI in Fashion",
      summary:
        "Where AI actually works in fashion right now. Try-on, editorial generation, model variation, and SKU testing. The use cases that ship this quarter.",
      tag: "Topic · Fashion",
      accent: "magenta",
      placeholder: "[Try-on grid]",
      feature: "topic",
    },
    hero: {
      eyebrow: "Topic · Fashion",
      headline: "AI in fashion, the parts that work right now.",
      sub: "Not a future-of-fashion essay. The use cases we run for fashion brands today, the assets they produce, and the parts of a shoot day they actually replace.",
    },
    loomVideo: {
      kind: "video",
      provider: "placeholder",
      label: "Loom walkthrough",
      caption:
        "A tour of the fashion use cases, the demos behind each one, and where the line is between AI and a real shoot.",
    },
    blocks: [
      {
        kind: "intro",
        heading: "The pitch, plain",
        body: [
          "Brands have been told for years that AI is going to replace their photographer. That is the wrong sales pitch. The brands that buy on price get burned by audiences who can sniff out cheap AI from a mile away.",
          "The right framing is what AI lets you make that a camera literally cannot. Pre-launch imagery for an unfinished product. A model that does not physically exist but represents your customer perfectly. Shot variations no shoot-day budget could afford.",
        ],
      },
      {
        kind: "pipelineRow",
        phase: "The use cases",
        heading: "What we actually run for fashion",
        subheading:
          "Each one is a real production problem we already solve. Not a tech demo, not a roadmap.",
        steps: [
          { title: "Virtual try-on", sub: "Same garment, many bodies" },
          { title: "Editorial gen", sub: "Flat to on-model" },
          { title: "Model variation", sub: "At zero marginal cost" },
          { title: "SKU testing", sub: "Colorways before commit" },
        ],
      },
      {
        kind: "phase",
        phase: "Use case 01",
        heading: "Virtual try-on",
        body: [
          "Same garment on multiple models. Same model in multiple garments. The classic. Where most fashion teams start because the value is immediate. You stop needing a fitting day and a photo studio every time you want to see something on a body.",
          "Below is a single try-on run. One subject, four garments, swappable backgrounds, multiple environments.",
        ],
      },
      {
        kind: "video",
        provider: "mp4",
        src: `${ASSET}/topics/ai-in-fashion/try-on/Final Video.mp4`,
        heading: "The walk-through",
        caption:
          "Same subject, four garments, environments swap underneath. End to end.",
      },
      {
        kind: "imageGrid",
        heading: "Garment swaps",
        note: "One subject. Four garment variations. Same pose, same lighting, just the fabric flips.",
        cols: 4,
        aspect: "portrait",
        images: [
          {
            src: `${ASSET}/topics/ai-in-fashion/try-on/white ttank.png`,
            caption: "Tank",
          },
          {
            src: `${ASSET}/topics/ai-in-fashion/try-on/Jeans.png`,
            caption: "Denim",
          },
          {
            src: `${ASSET}/topics/ai-in-fashion/try-on/Fur.png`,
            caption: "Statement",
          },
          {
            src: `${ASSET}/topics/ai-in-fashion/try-on/GOLD.png`,
            caption: "Accessories",
          },
        ],
      },
      {
        kind: "imageGrid",
        heading: "Background and environment",
        note: "Same subject. Different worlds around them. Studio, street, sand, garden, road. The catalog without the travel budget.",
        cols: 4,
        aspect: "video",
        images: [
          {
            src: `${ASSET}/topics/ai-in-fashion/try-on/Og Shot.png`,
            caption: "Original",
          },
          {
            src: `${ASSET}/topics/ai-in-fashion/try-on/new background.png`,
            caption: "Background 01",
          },
          {
            src: `${ASSET}/topics/ai-in-fashion/try-on/new background 2.png`,
            caption: "Background 02",
          },
          {
            src: `${ASSET}/topics/ai-in-fashion/try-on/new background 3.png`,
            caption: "Background 03",
          },
          {
            src: `${ASSET}/topics/ai-in-fashion/try-on/new background 3 (2).png`,
            caption: "Background 04",
          },
          {
            src: `${ASSET}/topics/ai-in-fashion/try-on/new place.png`,
            caption: "Place 01",
          },
          {
            src: `${ASSET}/topics/ai-in-fashion/try-on/new place (2).png`,
            caption: "Place 02",
          },
          {
            src: `${ASSET}/topics/ai-in-fashion/try-on/new place (3).png`,
            caption: "Place 03",
          },
        ],
      },
      {
        kind: "imageGrid",
        heading: "Coverage shots",
        cols: 2,
        aspect: "video",
        images: [
          {
            src: `${ASSET}/topics/ai-in-fashion/try-on/all.png`,
            caption: "All garments, one subject",
          },
          {
            src: `${ASSET}/topics/ai-in-fashion/try-on/Plain shot.png`,
            caption: "Plain coverage",
          },
        ],
      },
      { kind: "arrow", label: "Next" },
      {
        kind: "phase",
        phase: "Use case 02",
        heading: "Editorial generation",
        body: [
          "A product flat (just the garment, no model) becomes an on-model editorial shot. Studio, street, beach, evening, whatever the brief says. The garment stays the hero, the world around it gets built. Same workflow, different output bucket.",
        ],
      },
      { kind: "arrow", label: "Next" },
      {
        kind: "phase",
        phase: "Use case 03",
        heading: "Model variation, at zero marginal cost",
        body: [
          "Body types, heights, ages, skin tones. The stuff that would cost a brand a six-figure casting day plus shoot day plus retouching. We do it from a single brief.",
          "This is the most underrated use case for inclusive brands. The brief becomes the casting call.",
        ],
      },
      { kind: "arrow", label: "Next" },
      {
        kind: "phase",
        phase: "Use case 04",
        heading: "Fast SKU testing",
        body: [
          "Want to see how a new colourway looks before you commit to dyeing ten thousand units? Generate it. See if the team likes it. See if customers do.",
          "Product team and creative team move at the same speed for the first time.",
        ],
      },
    ],
    related: [
      { label: "PLAAY", href: "/work/plaay" },
      { label: "Bambuyu", href: "/work/bambuyu" },
      { label: "Consistent Characters", href: "/work/consistent-characters" },
    ],
    cta: bookCta(
      "Got a fashion brief?",
      "If you have a collection, a campaign, or a season coming up and you want to know where AI fits in your shoot calendar, fifteen minutes will sort it.",
    ),
    metaDescription:
      "AI in fashion. Try-on, editorial generation, model variation, fast SKU testing. The use cases that actually work right now.",
  },

  {
    slug: "ai-in-food-fmcg",
    card: {
      title: "AI in Food and FMCG",
      summary:
        "Hero food shots without a stylist. Packaging mockups before print. Three time-of-days for the same hero, same afternoon. The food brief, rebuilt.",
      tag: "Topic · Food + FMCG",
      accent: "mango",
      placeholder: "[Hero food shot]",
      feature: "topic",
    },
    hero: {
      eyebrow: "Topic · Food + FMCG",
      headline: "AI in food and FMCG, the parts that ship.",
      sub: "Where AI actually works for food and consumer-goods brands right now. Real shipped work, real use cases, real assets you can put on a shelf or a billboard tomorrow.",
    },
    loomVideo: {
      kind: "video",
      provider: "placeholder",
      label: "Loom walkthrough",
      caption:
        "The food and FMCG use cases, the demos behind each one, and where AI sits next to a traditional food shoot.",
    },
    blocks: [
      {
        kind: "intro",
        heading: "The pitch, plain",
        body: [
          "Food and FMCG marketers have been told for years that AI will replace their photographer. That is the wrong pitch and it does not convert.",
          "The real story is that AI lets you make imagery a camera literally cannot make on the timeline you actually have. A new packaging variant on shelf today. A product render before the product exists. The same hero shot in three different times of day in a single afternoon. A campaign ready before manufacturing finishes.",
        ],
      },
      {
        kind: "pipelineRow",
        phase: "The use cases",
        heading: "What we actually run for food and FMCG",
        subheading:
          "Each one is a real shipped problem. Some live on the PepsiCo, PLAAY, and Bambuyu pages. Others are demos we are happy to walk through.",
        steps: [
          { title: "Hero food", sub: "Bite, hero, billboard" },
          { title: "Packaging", sub: "Flat to 3D" },
          { title: "Pre-launch", sub: "Before manufacturing" },
          { title: "Backgrounds", sub: "Day · Sunset · Night" },
        ],
      },
      {
        kind: "phase",
        phase: "Use case 01",
        heading: "Hero food and lifestyle shots",
        body: [
          "The stuff you would normally fly in a food stylist for. Hero shots, bite shots, billboards, lifestyle eating. Cinematic, not stock. The shots a brand needs across a launch and would normally pay a multi-day kitchen build to get.",
        ],
      },
      {
        kind: "imageGrid",
        heading: "Hero, bite, billboard, lifestyle",
        cols: 3,
        aspect: "video",
        images: [
          {
            src: `${ASSET}/topics/ai-in-food-fmcg/food-shots/hero shot.png`,
            caption: "Hero",
          },
          {
            src: `${ASSET}/topics/ai-in-food-fmcg/food-shots/bite.png`,
            caption: "Bite",
          },
          {
            src: `${ASSET}/topics/ai-in-food-fmcg/food-shots/Bill board.png`,
            caption: "Billboard",
          },
          {
            src: `${ASSET}/topics/ai-in-food-fmcg/food-shots/person eating.png`,
            caption: "Lifestyle",
          },
          {
            src: `${ASSET}/topics/ai-in-food-fmcg/food-shots/Firt pic.png`,
            caption: "Coverage",
          },
        ],
      },
      { kind: "arrow", label: "Next" },
      {
        kind: "phase",
        phase: "Use case 02",
        heading: "Packaging mockups, 2D to 3D",
        body: [
          "A flat label or 2D pack design becomes a photoreal 3D render. On a counter. In a hand. On a shelf next to competitors. Before you have even printed the first physical pack.",
          "The flow below is the whole loop. Source 2D, the rendered 3D, the holding shot, the on-shelf shot.",
        ],
      },
      {
        kind: "comparison",
        heading: "2D source to 3D render",
        pairs: [
          {
            before: {
              src: `${ASSET}/topics/ai-in-food-fmcg/2d-to-3d/2D.png`,
              label: "2D source",
            },
            after: {
              src: `${ASSET}/topics/ai-in-food-fmcg/2d-to-3d/3D.png`,
              label: "3D render",
            },
          },
        ],
      },
      {
        kind: "imageGrid",
        heading: "Same pack, real-world context",
        note: "From flat artwork to a hand and a shelf. Same product, every angle a launch needs.",
        cols: 2,
        aspect: "video",
        images: [
          {
            src: `${ASSET}/topics/ai-in-food-fmcg/2d-to-3d/holding.png`,
            caption: "In hand",
          },
          {
            src: `${ASSET}/topics/ai-in-food-fmcg/2d-to-3d/on shelf.png`,
            caption: "On shelf",
          },
        ],
      },
      { kind: "arrow", label: "Next" },
      {
        kind: "phase",
        phase: "Use case 03",
        heading: "Pre-launch marketing",
        body: [
          "PLAAY and Bambuyu both ran this play. Start advertising before the product is finalized. Test the brand world. Warm up the audience. Run real creative against real impressions before manufacturing locks in.",
          "By the time the product lands, the marketing engine is already warm.",
        ],
      },
      { kind: "arrow", label: "Next" },
      {
        kind: "phase",
        phase: "Use case 04",
        heading: "Background design, time-of-day variants",
        body: [
          "Quaker is the worked example. Different backgrounds for the same product. Day, Night, Sunset, all without building a set. The product stays consistent, the world around it changes.",
          "Every campaign brief becomes possible inside the calendar that exists.",
        ],
      },
      {
        kind: "imageGrid",
        heading: "Quaker, three lights",
        note: "From the PepsiCo engagement. Same product set, three time-of-day worlds, one shoot.",
        cols: 3,
        aspect: "video",
        images: [
          {
            src: `${ASSET}/pepsico/quaker/Day.png`,
            caption: "Day",
          },
          {
            src: `${ASSET}/pepsico/quaker/Sunset.png`,
            caption: "Sunset",
          },
          {
            src: `${ASSET}/pepsico/quaker/Night.png`,
            caption: "Night",
          },
        ],
      },
    ],
    related: [
      { label: "PepsiCo", href: "/work/pepsico" },
      { label: "PLAAY", href: "/work/plaay" },
      { label: "Bambuyu", href: "/work/bambuyu" },
    ],
    cta: bookCta(
      "Got a food or FMCG brief?",
      "If you are running a launch, a packaging refresh, or a multi-time-of-day campaign and the calendar is short, fifteen minutes will tell us if this is a fit.",
    ),
    metaDescription:
      "AI in food and FMCG. Hero shots, packaging mockups, pre-launch marketing, time-of-day backgrounds. Real shipped work.",
  },

  {
    slug: "ai-in-real-estate",
    card: {
      title: "AI in Real Estate",
      summary:
        "Virtual staging that closes deals. Restyling for the buyer profile. Off-plan units rendered before construction. Listing imagery, rebuilt.",
      tag: "Topic · Real Estate",
      accent: "teal",
      placeholder: "[Interior render]",
      feature: "topic",
    },
    hero: {
      eyebrow: "Topic · Real Estate",
      headline: "AI in real estate, listings that close.",
      sub: "Real estate buyers do not buy walls. They buy a feeling about their future life inside those walls. AI is the fastest tool we have for putting different versions of that feeling in front of different people.",
    },
    loomVideo: {
      kind: "video",
      provider: "placeholder",
      label: "Loom walkthrough",
      caption:
        "The real estate use cases, the demos behind each one, and where the wedge offer sits for a new agent or developer.",
    },
    blocks: [
      {
        kind: "intro",
        heading: "The pitch, plain",
        body: [
          "The wrong way to sell this is we will make your listing photos cheaper. Most agents do not care.",
          "The right way to sell this is we will close more deals, faster, by showing each buyer the version of this property they want to buy. That is a number an agent or developer can act on.",
        ],
      },
      {
        kind: "pipelineRow",
        phase: "The use cases",
        heading: "What we actually run for real estate",
        subheading:
          "Each one targets a real pain: empty rooms, generic staging, off-plan units that do not exist yet, listings that have gone stale on the market.",
        steps: [
          { title: "Virtual staging", sub: "Empty to furnished" },
          { title: "Restyling", sub: "Per buyer profile" },
          { title: "Off-plan", sub: "Sell before built" },
          { title: "Listing refresh", sub: "Without re-shooting" },
        ],
      },
      {
        kind: "phase",
        phase: "Use case 01",
        heading: "Virtual staging, the wedge offer",
        body: [
          "Empty room becomes furnished. Listing photographers have been doing this with 3D for years and it is slow and expensive. We do it in hours, in any style, in as many variants as you want.",
          "The before-and-after below is the whole flow. Empty room, fully staged, then a different style on top of the same space.",
        ],
      },
      {
        kind: "comparison",
        heading: "Empty to staged, in three steps",
        pairs: [
          {
            before: {
              src: `${ASSET}/topics/ai-in-real-estate/interior-design/batch 1/Before.jpg`,
              label: "Before",
            },
            after: {
              src: `${ASSET}/topics/ai-in-real-estate/interior-design/batch 1/After.png`,
              label: "Staged",
            },
          },
          {
            before: {
              src: `${ASSET}/topics/ai-in-real-estate/interior-design/batch 1/After.png`,
              label: "Staged",
            },
            after: {
              src: `${ASSET}/topics/ai-in-real-estate/interior-design/batch 1/Pus stuff inside.png`,
              label: "Restyled",
            },
          },
        ],
      },
      { kind: "arrow", label: "Next" },
      {
        kind: "phase",
        phase: "Use case 02",
        heading: "Restyling for the buyer profile",
        body: [
          "Same listing, staged as a young family home, as an executive pied-a-terre, as a short-term rental investment. Every buyer sees themselves in the space because we re-render for each persona. One property, three audiences, three versions of the same room.",
          "The grid below is eight different style outputs from the same source space. Same square footage, different lives.",
        ],
      },
      {
        kind: "imageGrid",
        heading: "Eight styles, one space",
        note: "Same source room, regenerated across eight visual treatments. The buyer picks the version that already feels like home.",
        cols: 4,
        aspect: "video",
        images: [
          {
            src: `${ASSET}/topics/ai-in-real-estate/interior-design/Batch 2/23b8b46e-38bc-4113-83a8-32fb4c4cf446.png`,
          },
          {
            src: `${ASSET}/topics/ai-in-real-estate/interior-design/Batch 2/49249dd3-4551-49d6-ac4d-538914eb6210.png`,
          },
          {
            src: `${ASSET}/topics/ai-in-real-estate/interior-design/Batch 2/4ab8dec6-4b3c-440b-ad74-6ea11ba85da7.png`,
          },
          {
            src: `${ASSET}/topics/ai-in-real-estate/interior-design/Batch 2/55061488-2762-4d78-a27d-220b119cf44d.png`,
          },
          {
            src: `${ASSET}/topics/ai-in-real-estate/interior-design/Batch 2/6b8f228f-50a8-44a9-817a-fe861b5653cc.png`,
          },
          {
            src: `${ASSET}/topics/ai-in-real-estate/interior-design/Batch 2/8f56dcdb-de8c-4cdf-b571-9f1e9b3e3f28.png`,
          },
          {
            src: `${ASSET}/topics/ai-in-real-estate/interior-design/Batch 2/be6969df-c1f2-4366-b225-d342bbdb2adb.png`,
          },
          {
            src: `${ASSET}/topics/ai-in-real-estate/interior-design/Batch 2/f9addeab-7817-4dea-88fa-bb1ced44d4a4.png`,
          },
        ],
      },
      { kind: "arrow", label: "Next" },
      {
        kind: "phase",
        phase: "Use case 03",
        heading: "Off-plan and pre-construction",
        body: [
          "Sell the unit before the unit exists. Photoreal interiors of every floor plan, every finish package, every layout. Today most developers ship slow architectural renders and call it good. We ship cinematic ones at scale.",
          "Same playbook as PLAAY and Bambuyu, except the product is a building.",
        ],
      },
      { kind: "arrow", label: "Next" },
      {
        kind: "phase",
        phase: "Use case 04",
        heading: "Day, night, sunset, market-specific",
        body: [
          "A listing photographed on a grey Tuesday morning becomes a golden-hour skyline view at sunset. Same window, different light. Same property staged for an Asian buyer pool and a European buyer pool. Different cues, different aesthetics, same square footage.",
          "Borrows directly from the Quaker time-of-day approach. Different industry, same engine.",
        ],
      },
    ],
    related: [
      { label: "PepsiCo", href: "/work/pepsico" },
      { label: "AI in Food and FMCG", href: "/work/ai-in-food-fmcg" },
      { label: "AI in Fashion", href: "/work/ai-in-fashion" },
    ],
    cta: bookCta(
      "Got a listing or a development to move?",
      "If you have a stale listing, an empty unit, or an off-plan launch and you want to put it in front of buyers in a way that closes, fifteen minutes will sort it.",
    ),
    metaDescription:
      "AI in real estate. Virtual staging, persona restyling, off-plan visualization, listing refresh. Imagery that moves listings.",
  },

  {
    slug: "hajj-media",
    card: {
      title: "Hajj Media",
      summary:
        "Three storytelling videos for Hajj Media. Currently in production, private preview only.",
      tag: "AI Production",
      accent: "mango",
      placeholder: "[Hajj Media · private preview]",
      feature: "recent",
    },
    hero: {
      eyebrow: "AI Production · In progress",
      headline: "Hajj Media, three storytelling videos.",
      sub: "Currently in production. This page is a private preview. Assets are not cleared for public release.",
    },
    blocks: [
      {
        kind: "intro",
        heading: "Private preview",
        body: [
          "Hajj Media is one of the new clients we are working with right now. We are building three storytelling videos for them, and this page is going up while the work is still in flight.",
          "Nothing here is cleared for public showcase yet. Everything stays watermarked and held back until they sign off.",
        ],
      },
      { kind: "arrow", label: "What we are building" },
      {
        kind: "phase",
        phase: "Film 01",
        heading: "In production",
        body: [
          "First of three storytelling pieces. Concept locked, assets in progress. We will drop the final cut in here once the client clears it.",
        ],
      },
      { kind: "arrow" },
      {
        kind: "phase",
        phase: "Film 02",
        heading: "In production",
        body: [
          "Second piece, building alongside the first. Same world, different beat.",
        ],
      },
      { kind: "arrow" },
      {
        kind: "phase",
        phase: "Film 03",
        heading: "In production",
        body: [
          "Third and final piece. Ties the set together. Coming once the previous two land.",
        ],
      },
    ],
    cta: bookCta(
      "Working on something similar?",
      "If you have a storytelling brief you want produced this way, we should talk. Fifteen minutes.",
    ),
    metaDescription:
      "Hajj Media engagement, currently in production. Private preview, not for public release.",
  },
];

export const postBySlug = (slug: string): Post | undefined =>
  posts.find((p) => p.slug === slug);

export const allSlugs = (): string[] => posts.map((p) => p.slug);
