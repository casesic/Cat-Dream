import Link from "next/link";

const navItems = [
  { href: "/", label: "首页" },
  { href: "/blog", label: "博客" },
  { href: "/projects", label: "项目" }
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <div className="absolute inset-x-0 top-0 -z-10 h-72 bg-gradient-to-b from-amber-100/60 to-transparent" />
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-8 sm:px-8 lg:px-10">
        <header className="mb-12 flex flex-col gap-6 rounded-[2rem] border border-white/70 bg-white/75 px-6 py-5 shadow-lg shadow-slate-900/5 backdrop-blur md:flex-row md:items-center md:justify-between">
          <Link href="/" className="font-serif text-2xl font-semibold tracking-tight text-slate-900">
            Cat Dreams
          </Link>

          <nav className="flex flex-wrap items-center gap-2 text-sm font-medium text-slate-600">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 hover:bg-slate-900 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="mt-16 border-t border-slate-200/80 py-8 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Cat Dreams. Built with Next.js, Markdown and Vercel.</p>
        </footer>
      </div>
    </div>
  );
}
