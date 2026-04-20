import type { Metadata } from "next";
import projects from "@/data/projects.json";
import { ProjectCard } from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "项目",
  description: "项目展示页，数据来自本地 JSON 文件。"
};

export default function ProjectsPage() {
  return (
    <section className="space-y-10">
      <div className="max-w-3xl space-y-4">
        <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--accent)]">
          Projects
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-[color:var(--foreground)]">
          项目展示
        </h1>
        <p className="text-lg leading-8 text-[color:var(--foreground-muted)]">
          这里先使用本地 JSON 维护项目数据，结构足够轻，也便于将来切换到 CMS、数据库或更完整的项目详情页。
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}
