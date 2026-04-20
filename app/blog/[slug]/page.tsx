import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRenderer } from "@/components/MDXRenderer";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug
  }));
}

export async function generateMetadata({
  params
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "文章不存在"
    };
  }

  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      type: "article"
    }
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-3xl">
      <header className="mb-10 space-y-4 border-b border-[color:var(--border)] pb-8">
        <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--accent)]">
          {post.date}
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-[color:var(--foreground)] sm:text-5xl">
          {post.title}
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-[color:var(--foreground-muted)]">
          {post.summary}
        </p>
      </header>

      <MDXRenderer content={post.content} />
    </article>
  );
}
