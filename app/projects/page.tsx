import type { Metadata } from "next";
import projects from "@/data/projects.json";
import { ProjectCard } from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "项目",
  description: "项目展示页，数据来自本地 JSON 文件。"
};

export default function ProjectsPage() {
  return (
    <section className="space-y-8">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.3em] text-amber-800">Projects</p>
        <h1 className="font-serif text-4xl font-semibold text-slate-900">项目展示</h1>
        <p className="max-w-2xl text-lg leading-8 text-slate-700">
          这里先通过本地 JSON 文件维护项目数据，后续可以无缝切换成 CMS 或数据库。
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
