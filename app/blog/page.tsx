import type { Metadata } from "next";
import { PostCard } from "@/components/PostCard";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "博客",
  description: "查看所有博客文章，内容由本地 Markdown 文件静态生成。"
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="space-y-10">
      <div className="max-w-3xl space-y-4">
        <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--accent)]">Blog</p>
        <h1 className="text-4xl font-semibold tracking-tight text-[color:var(--foreground)]">
          博客文章
        </h1>
        <p className="text-lg leading-8 text-[color:var(--foreground-muted)]">
          所有文章都来自本地 `posts` 目录，在构建阶段完成静态生成，适合持续写作，也适合保持结构简单。
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
