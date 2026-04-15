type Project = {
  name: string;
  description: string;
  stack: string[];
  link: string;
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-[1.75rem] border border-slate-200 bg-white/85 p-6 shadow-lg shadow-slate-900/5 backdrop-blur">
      <h2 className="font-serif text-2xl font-semibold tracking-tight text-slate-900">
        {project.name}
      </h2>
      <p className="mt-3 text-base leading-7 text-slate-600">{project.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span
            key={item}
            className="rounded-full border border-amber-700/15 bg-amber-50 px-3 py-1 text-xs font-medium text-amber-900"
          >
            {item}
          </span>
        ))}
      </div>
      <a
        href={project.link}
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-flex text-sm font-semibold text-slate-900 hover:text-amber-800"
      >
        查看项目 →
      </a>
    </article>
  );
}
