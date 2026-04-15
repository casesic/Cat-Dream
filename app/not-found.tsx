import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-2xl rounded-[2rem] border border-slate-200 bg-white/80 p-10 text-center shadow-xl shadow-slate-900/5 backdrop-blur">
      <p className="text-sm uppercase tracking-[0.3em] text-amber-800">404</p>
      <h1 className="mt-3 font-serif text-4xl font-semibold text-slate-900">页面不存在</h1>
      <p className="mt-4 text-lg leading-8 text-slate-700">
        你访问的内容可能已经移动，或者这个链接还没有被创建。
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800"
      >
        返回首页
      </Link>
    </section>
  );
}
