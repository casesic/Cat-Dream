import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-2xl rounded-2xl border border-[color:var(--border)] bg-[color:var(--background-elevated)] p-10 text-center">
      <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--accent)]">404</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[color:var(--foreground)]">
        页面不存在
      </h1>
      <p className="mt-4 text-lg leading-8 text-[color:var(--foreground-muted)]">
        你访问的内容可能已经移动，或者这个链接暂时还没有被创建。
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-2xl bg-[color:var(--accent)] px-6 py-3 text-sm font-medium text-white hover:opacity-92"
      >
        返回首页
      </Link>
    </section>
  );
}
