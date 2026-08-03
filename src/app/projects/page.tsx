import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ProjectFilter from "./ProjectFilter";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Prasoon Kumar's portfolio of software engineering and AI/ML projects.",
  openGraph: {
    title: "Projects | Prasoon Kumar",
    description:
      "Explore Prasoon Kumar's portfolio of software engineering and AI/ML projects.",
  },
  twitter: {
    card: "summary",
    title: "Projects | Prasoon Kumar",
    description:
      "Explore Prasoon Kumar's portfolio of software engineering and AI/ML projects.",
  },
};

const projectCards = projects.map((p) => ({
  slug: p.slug,
  title: p.title,
  category: p.category,
  filterTag: p.filterTag,
  description: p.summary,
  technologies: p.technologies,
  highlights: p.features.slice(0, 4),
}));

export type ProjectCard = (typeof projectCards)[number];

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        label="Projects"
        title="My Projects"
        description="A collection of software engineering, AI/ML, and web development projects I have built."
      />

      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <ProjectFilter projects={projectCards} />
      </div>
    </>
  );
}
