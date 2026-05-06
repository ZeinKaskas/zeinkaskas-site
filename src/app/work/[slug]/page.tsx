import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PostPageContent from "@/components/PostPageContent";
import { allSlugs, postBySlug } from "@/content/posts";

type RouteParams = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): RouteParams[] {
  return allSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = postBySlug(slug);
  if (!post) return {};
  return {
    title: post.card.title,
    description: post.metaDescription,
    openGraph: {
      title: `${post.card.title} | Zein Kaskas`,
      description: post.metaDescription,
      type: "article",
    },
  };
}

export default async function WorkPostPage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { slug } = await params;
  const post = postBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <Navigation alwaysVisible />
      <main>
        <PostPageContent post={post} />
      </main>
      <Footer />
    </>
  );
}
