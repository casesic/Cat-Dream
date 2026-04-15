import type { Metadata } from "next";
import { PostCard } from "@/components/PostCard";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "博客",
  description: "查看所有博客文章，内容由 Markdown 文件静态生成。"
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="space-y-8">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.3em] text-amber-800">Blog</p>
        <h1 className="font-serif text-4xl font-semibold text-slate-900">博客文章</h1>
        <p className="max-w-2xl text-lg leading-8 text-slate-700">
          所有文章都来自本地 `posts` 目录，在构建时静态生成，适合部署到 Vercel。
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
