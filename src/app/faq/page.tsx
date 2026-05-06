import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import FAQPageContent from "@/components/FAQPageContent";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Common questions about AI video, the process, the tools, and how I work with brands.",
};

export default function FAQPage() {
  return (
    <>
      <Navigation alwaysVisible />
      <main>
        <FAQPageContent />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
