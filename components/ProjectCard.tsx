type Project = {
  name: string;
  description: string;
  stack: string[];
  link: string;
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="surface rounded-2xl p-6">
      <h2 className="text-2xl font-semibold tracking-tight text-[color:var(--foreground)]">
        {project.name}
      </h2>
      <p className="mt-3 text-base leading-7 text-[color:var(--foreground-muted)]">
        {project.description}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span
            key={item}
            className="rounded-full border border-[color:var(--border-strong)] bg-[color:var(--accent-soft)] px-3 py-1 text-xs font-medium text-[#9a4d06]"
          >
            {item}
          </span>
        ))}
      </div>
      <a
        href={project.link}
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[color:var(--foreground)] hover:text-[color:var(--accent)]"
      >
        查看项目
        <span aria-hidden="true">→</span>
      </a>
    </article>
  );
}
