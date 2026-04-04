import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Zein Kaskas - AI Director & Creative Technologist",
    template: "%s | Zein Kaskas",
  },
  description:
    "AI consulting, production, and training for brands. Generative media production, automated content workflows, and scalable production pipelines.",
  keywords: [
    "AI Consulting",
    "AI Director",
    "Creative Technologist",
    "AI Production",
    "Generative AI",
    "AI Workflows",
    "AI Video Production",
    "AI Systems",
  ],
  authors: [{ name: "Zein Kaskas" }],
  openGraph: {
    title: "Zein Kaskas - AI Director & Creative Technologist",
    description:
      "AI consulting, production, and training for brands.",
    url: "https://zeinkaskas.com",
    siteName: "Zein Kaskas",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zein Kaskas - AI Director & Creative Technologist",
    description:
      "AI consulting, production, and training for brands.",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://zeinkaskas.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Zein Kaskas",
    url: "https://zeinkaskas.com",
    jobTitle: "AI Director & Creative Technologist",
    description:
      "AI consulting, production, and training for brands.",
    email: "hello@zeinkaskas.com",
    sameAs: [
      "https://instagram.com/ZeinKaskas",
      "https://www.linkedin.com/in/zein-kaskas-1371a0340/",
    ],
    knowsAbout: [
      "AI Consulting",
      "AI Production",
      "Generative AI",
      "AI Video Production",
      "AI Workflow Automation",
      "Creative Technology",
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
