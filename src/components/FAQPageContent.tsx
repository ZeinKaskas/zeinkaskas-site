"use client";

import Link from "next/link";
import Reveal from "./Reveal";

type FAQ = {
  q: string;
  a: string[];
  seeAlso?: { label: string; href: string }[];
};

const faqs: FAQ[] = [
  {
    q: "How did you get into AI?",
    a: [
      "I started young. GPT-2 came out when I was in high school and I was probably one of the first people to actually use it for something real, mostly to help me write essays because I'm dyslexic.",
      "Went to film school after that. Dropped out partway through, took everything I'd learned about story and framing and editing, and started doing AI video the moment Veo 2 became public. Veo 3 was the moment I realised this was a real business, not just a creative habit.",
    ],
  },
  {
    q: "What tools are you using right now?",
    a: [
      "Nano Banana Pro for image. Seedance for video. Claude is the brain that orchestrates everything.",
      "We built our own infrastructure on top of that, so the tools you see public are really just the surface. The actual work is in how we use them, not what we use.",
    ],
  },
  {
    q: "What does your process actually look like?",
    a: [
      "Short version: it's a film production process done in our infrastructure instead of on location. Onboard, build a director's treatment, generate the shots like a shooting day, post-produce, colour grade, sound design.",
      "The longer version lives on the work pages. Each one walks through a different part of how we actually build things, so pick the one that maps to what you're making.",
    ],
    seeAlso: [
      { label: "TVCs Process", href: "/work" },
      { label: "Replace Agency", href: "/work" },
      { label: "Brief to Content", href: "/work" },
      { label: "Consistent Characters", href: "/work" },
    ],
  },
  {
    q: "Should I just hire a videographer instead?",
    a: [
      "It's not a competition. AI and traditional are both tools, and the best work is often hybrid.",
      "AI wins on things a camera physically can't shoot. A product that doesn't exist yet. Twelve different worlds in one afternoon. A model that represents your customer perfectly.",
      "A camera wins on things that have to be in the room. Live events. Real interviews. Documentary moments. People who frame this as a fight are missing the actual question, which is what the right tool is for the brief.",
    ],
  },
  {
    q: "Will AI replace traditional videographers?",
    a: [
      "No. Live events still need a camera. Real moments still need to be in the room.",
      "What's changing is the floor. The cheapest, fastest, most volume-driven production work is moving to AI. The high-craft documentary and event work stays where it always was. The middle is the part that gets squeezed.",
    ],
  },
  {
    q: "How do I get into AI video as a business?",
    a: [
      "Use the tools every single day. Push their limits. Get bored of the easy stuff and start trying the hard stuff.",
      "Then go learn how a film actually gets made. Film school is the unglamorous answer, but it's the right one. Without the story and craft layer, you're just generating slop with a license.",
    ],
  },
  {
    q: "Why does AI need taste? Can't agents handle all of it?",
    a: [
      "Taste is the only part of the work that can't be automated. Agents can run pipelines, batch prompts, generate variations, manage assets. They can do almost everything.",
      "But what makes a shot land (the framing, the colour, the story, the choice of which thirty frames out of a thousand are the actual film) needs a person.",
      "Taste can't be automated. Everything else can.",
    ],
  },
];

export default function FAQPageContent() {
  return (
    <section className="pt-28 md:pt-40 pb-16 md:pb-[100px] px-5 md:px-10 max-w-[680px] mx-auto">
      <Reveal>
        <span className="block text-[11px] uppercase tracking-[3px] text-[rgba(255,255,255,0.2)] mb-4 text-center md:text-left">
          FAQ
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h1
          className="text-[36px] sm:text-[44px] md:text-[56px] font-bold tracking-[-1.5px] md:tracking-[-2.5px] leading-[1.1] mb-6 md:mb-8 text-center md:text-left"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Stuff people ask me a lot.
        </h1>
      </Reveal>
      <Reveal delay={0.16}>
        <p className="text-[15px] md:text-[17px] text-[rgba(255,255,255,0.4)] font-light leading-[1.8] mb-12 md:mb-16">
          The questions I keep getting in DMs and on calls. If yours isn&apos;t
          here, the contact page works.
        </p>
      </Reveal>

      <div className="space-y-10 md:space-y-12">
        {faqs.map((item, i) => (
          <Reveal key={item.q} delay={0.08 + i * 0.04}>
            <div>
              <h2
                className="text-[20px] md:text-[22px] font-semibold tracking-[-0.5px] mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {item.q}
              </h2>
              <div className="space-y-4">
                {item.a.map((para, j) => (
                  <p
                    key={j}
                    className="text-[15px] md:text-[16px] text-[rgba(255,255,255,0.5)] font-light leading-[1.8]"
                  >
                    {para}
                  </p>
                ))}
                {item.seeAlso && item.seeAlso.length > 0 && (
                  <div className="pt-2">
                    <span className="block text-[11px] uppercase tracking-[2px] text-[rgba(255,255,255,0.25)] mb-2">
                      Go deeper
                    </span>
                    <div className="flex flex-wrap gap-x-5 gap-y-2">
                      {item.seeAlso.map((link) => (
                        <Link
                          key={link.label}
                          href={link.href}
                          className="text-[14px] text-[rgba(255,255,255,0.4)] hover:text-white transition-colors underline-offset-4 hover:underline"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
