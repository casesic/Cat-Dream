import Link from "next/link";
import type { PostMeta } from "@/lib/posts";

export function PostCard({ post }: { post: PostMeta }) {
  return (
    <article className="surface group rounded-2xl p-6">
      <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--accent)]">{post.date}</p>
      <h2 className="mt-4 text-2xl font-semibold tracking-tight text-[color:var(--foreground)]">
        {post.title}
      </h2>
      <p className="mt-3 text-base leading-7 text-[color:var(--foreground-muted)]">{post.summary}</p>
      <Link
        href={`/blog/${post.slug}`}
        className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[color:var(--foreground)] group-hover:text-[color:var(--accent)]"
      >
        阅读全文
        <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}
