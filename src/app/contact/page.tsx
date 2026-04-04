import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactPageContent from "@/components/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a 15-minute call. No pitch, just clarity on where AI fits in your creative workflow.",
};

export default function ContactPage() {
  return (
    <>
      <Navigation alwaysVisible />
      <main>
        <ContactPageContent />
      </main>
      <Footer />
    </>
  );
}
