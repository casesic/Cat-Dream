import Link from "next/link";
import type { PostMeta } from "@/lib/posts";

export function PostCard({ post }: { post: PostMeta }) {
  return (
    <article className="group rounded-[1.75rem] border border-slate-200 bg-white/85 p-6 shadow-lg shadow-slate-900/5 backdrop-blur transition hover:-translate-y-1 hover:shadow-xl">
      <p className="text-sm uppercase tracking-[0.24em] text-amber-800">{post.date}</p>
      <h2 className="mt-4 font-serif text-2xl font-semibold tracking-tight text-slate-900">
        {post.title}
      </h2>
      <p className="mt-3 text-base leading-7 text-slate-600">{post.summary}</p>
      <Link
        href={`/blog/${post.slug}`}
        className="mt-6 inline-flex text-sm font-semibold text-slate-900 group-hover:text-amber-800"
      >
        阅读全文 →
      </Link>
    </article>
  );
}
