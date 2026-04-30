import type { Metadata } from "next";
import BookPageContent from "@/components/BookPageContent";

export const metadata: Metadata = {
  title: "Book a Call | Zein Kaskas",
  description:
    "Book a 15-minute call. No pitch, just clarity on where AI fits in your creative workflow.",
};

export default function BookPage() {
  return <BookPageContent />;
}
