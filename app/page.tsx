import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "首页",
  description: "欢迎来到 Cat Dreams，这里有我的自我介绍、博客与项目作品。"
};

export default function HomePage() {
  return (
    <section className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
      <div className="space-y-6">
        <p className="inline-flex rounded-full border border-amber-700/20 bg-white/70 px-4 py-2 text-sm font-medium text-amber-800 shadow-sm backdrop-blur">
          Frontend Developer · Writer · Builder
        </p>
        <div className="space-y-4">
          <h1 className="font-serif text-5xl font-semibold tracking-tight text-slate-900 sm:text-6xl">
            你好，我是一个喜欢把灵感做成产品的人。
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-slate-700">
            我在这里分享正在学习的技术、写过的文章，以及做过的项目。这个站点基于 Next.js
            与 Tailwind CSS 搭建，博客内容通过 Markdown 管理，并部署在 Vercel。
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/blog"
            className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/15 hover:bg-slate-800"
          >
            阅读博客
          </Link>
          <Link
            href="/projects"
            className="rounded-full border border-slate-300 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-800 backdrop-blur hover:border-slate-400"
          >
            查看项目
          </Link>
        </div>
      </div>

      <div className="rounded-[2rem] border border-white/60 bg-white/80 p-8 shadow-2xl shadow-amber-950/10 backdrop-blur">
        <div className="space-y-5">
          <p className="text-sm uppercase tracking-[0.25em] text-slate-500">About Me</p>
          <div className="grid gap-4 sm:grid-cols-2">
            <InfoBlock label="专注方向" value="Next.js、内容型网站、设计工程化" />
            <InfoBlock label="工作方式" value="先把结构搭稳，再把细节做漂亮" />
            <InfoBlock label="当前兴趣" value="MDX、性能优化、AI 辅助创作" />
            <InfoBlock label="部署平台" value="Vercel" />
          </div>
          <p className="text-base leading-7 text-slate-600">
            这个网站是一个轻量、可持续维护的个人内容平台。你可以把它继续扩展成作品集、笔记站，或者带有标签、分页、订阅等功能的完整博客。
          </p>
        </div>
      </div>
    </section>
  );
}

function InfoBlock({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4">
      <p className="text-sm text-slate-500">{label}</p>
      <p className="mt-2 text-base font-medium text-slate-900">{value}</p>
    </div>
  );
}
