import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "首页",
  description: "Cat Dreams 的首页，聚合博客、项目与个人介绍。"
};

const notes = [
  {
    label: "关注方向",
    value: "Next.js、内容网站、轻量前端系统"
  },
  {
    label: "工作方式",
    value: "持续写作、做项目、把想法变成可发布的页面"
  },
  {
    label: "内容组织",
    value: "文章来自 Markdown，项目来自本地 JSON"
  },
  {
    label: "部署方式",
    value: "面向 Vercel 的静态化交付"
  }
];

export default function HomePage() {
  return (
    <section className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
      <div className="space-y-8 pt-6">
        <p className="inline-flex rounded-full border border-[color:var(--border)] bg-[color:var(--background-elevated)] px-4 py-2 text-sm text-[color:var(--foreground-muted)]">
          Frontend Developer / Writer / Builder
        </p>

        <div className="space-y-5">
          <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-[color:var(--foreground)] sm:text-6xl">
            一个克制、安静、以内容为中心的个人网站。
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-[color:var(--foreground-muted)]">
            这里放博客、项目和一些正在成形的想法。整个站点基于 Next.js 构建，
            用尽量简单的结构管理内容，用清晰的页面组织让阅读和浏览都更轻松。
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <Link
            href="/blog"
            className="rounded-2xl bg-[color:var(--accent)] px-6 py-3 text-sm font-medium text-white hover:opacity-92"
          >
            浏览博客
          </Link>
          <Link
            href="/projects"
            className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--background-elevated)] px-6 py-3 text-sm font-medium text-[color:var(--foreground)] hover:bg-[color:var(--background-soft)]"
          >
            查看项目
          </Link>
        </div>
      </div>

      <aside className="surface rounded-2xl p-7">
        <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--foreground-subtle)]">
          Overview
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {notes.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--background-soft)] p-4"
            >
              <p className="text-sm text-[color:var(--foreground-subtle)]">{item.label}</p>
              <p className="mt-2 text-base leading-7 text-[color:var(--foreground)]">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </aside>
    </section>
  );
}
