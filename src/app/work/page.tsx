import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import WorkPageContent from "@/components/WorkPageContent";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies and projects in AI consulting, production, and workflow automation for brands.",
};

export default function WorkPage() {
  return (
    <>
      <Navigation alwaysVisible />
      <main>
        <WorkPageContent />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
