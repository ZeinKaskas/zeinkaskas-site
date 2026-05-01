import Navigation from "./Navigation";
import CalendlyEmbed from "./CalendlyEmbed";

export default function BookPageContent() {
  return (
    <>
      <Navigation alwaysVisible />
      <main className="min-h-screen bg-[#0A0A0A] text-white pt-[54px]">
        <div className="text-center pt-12 md:pt-16 pb-8 px-5 md:px-6">
          <h1
            className="text-[30px] sm:text-3xl md:text-4xl font-bold tracking-[-1px] md:tracking-[-1.5px] leading-[1.12] mb-3"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Book a call
          </h1>
          <p className="text-[14px] md:text-[15px] text-[rgba(255,255,255,0.4)] font-light max-w-[440px] mx-auto">
            15 minutes. I&apos;ll tell you where AI fits in your creative
            workflow and what it would take to get there.
          </p>
        </div>

        {/* Calendly inline embed */}
        <div className="max-w-[700px] mx-auto px-3 md:px-4 pb-20">
          <CalendlyEmbed url="https://calendly.com/zeinkaskas1/new-meeting" />
        </div>

        <div className="text-center pb-16">
          <p className="text-[13px] text-[rgba(255,255,255,0.15)]">
            or email{" "}
            <a
              href="mailto:hello@zeinkaskas.com"
              className="text-[rgba(255,255,255,0.3)] underline underline-offset-[3px]"
            >
              hello@zeinkaskas.com
            </a>
          </p>
        </div>
      </main>
    </>
  );
}
