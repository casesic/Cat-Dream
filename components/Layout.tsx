import Link from "next/link";

const navItems = [
  { href: "/", label: "首页" },
  { href: "/blog", label: "博客" },
  { href: "/projects", label: "项目" }
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[color:var(--background)]">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 sm:px-8 lg:px-10">
        <header className="sticky top-0 z-10 mb-16 bg-[color:var(--background-elevated)]/95 backdrop-blur-sm">
          <div className="flex flex-col gap-5 border-b border-[color:var(--border)] py-6 md:flex-row md:items-center md:justify-between">
            <Link
              href="/"
              className="text-lg font-medium uppercase tracking-[0.18em] text-[color:var(--foreground)]"
            >
              Cat Dreams
            </Link>

            <nav className="flex flex-wrap items-center gap-2 text-sm text-[color:var(--foreground-muted)]">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-4 py-2 hover:bg-[color:var(--background-soft)] hover:text-[color:var(--foreground)]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>

        <main className="flex-1 pb-8">{children}</main>

        <footer className="mt-20 border-t border-[color:var(--border)] py-8 text-sm text-[color:var(--foreground-subtle)]">
          <p>Cat Dreams. Built with Next.js, Markdown and Vercel.</p>
        </footer>
      </div>
    </div>
  );
}
