"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import type { ProjectCard as ProjectCardType } from "./page";

const filters = ["All", "AI/ML", "Web Development", "Data", "Computer Vision"];

interface ProjectFilterProps {
  projects: ProjectCardType[];
}

export default function ProjectFilter({ projects }: ProjectFilterProps) {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.filterTag === active);

  return (
    <>
      <div className="flex flex-wrap gap-3" role="group" aria-label="Filter projects">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActive(filter)}
            aria-pressed={active === filter}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400/50 ${
              active === filter
                ? "bg-cyan-500 text-navy-900 shadow-lg shadow-cyan-500/25"
                : "border border-white/10 text-slate-300 hover:border-cyan-400/30 hover:text-cyan-400"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        {filtered.length > 0 ? (
          filtered.map((project) => (
            <ProjectCard
              key={project.title}
              slug={project.slug}
              title={project.title}
              category={project.category}
              description={project.description}
              technologies={project.technologies}
              highlights={project.highlights}
            />
          ))
        ) : (
          <div className="col-span-full rounded-2xl border border-white/10 bg-navy-800/60 p-12 text-center">
            <p className="text-slate-400">
              No projects found for this category. More projects coming soon.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
