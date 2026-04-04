import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import AboutPageContent from "@/components/AboutPageContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "I work at the intersection of direction, design, and AI. Making the impossible possible for brands through creative technology.",
};

export default function AboutPage() {
  return (
    <>
      <Navigation alwaysVisible />
      <main>
        <AboutPageContent />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
