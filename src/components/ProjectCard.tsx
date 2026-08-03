import Link from "next/link";
import { ExternalLink, FolderOpen, ArrowRight } from "lucide-react";

interface ProjectCardProps {
  slug: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  highlights: string[];
}

export default function ProjectCard({
  slug,
  title,
  category,
  description,
  technologies,
  highlights,
}: ProjectCardProps) {
  return (
    <article className="group flex flex-col rounded-2xl border border-white/10 bg-navy-800/60 p-6 shadow-lg transition-all hover:border-cyan-400/30 hover:shadow-cyan-500/5 hover:-translate-y-0.5">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400 transition-colors group-hover:bg-cyan-400/20">
          <FolderOpen size={20} />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="text-xs font-medium uppercase tracking-wider text-cyan-400/70">
            {category}
          </p>
        </div>
      </div>

      <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-400">
        {description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {technologies.slice(0, 5).map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-slate-300"
          >
            {tech}
          </span>
        ))}
        {technologies.length > 5 && (
          <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-slate-500">
            +{technologies.length - 5}
          </span>
        )}
      </div>

      <ul className="mt-4 space-y-1.5">
        {highlights.map((item, i) => (
          <li
            key={i}
            className="relative pl-4 text-xs leading-relaxed text-slate-500 before:absolute before:left-0 before:top-[7px] before:h-1 before:w-1 before:rounded-full before:bg-cyan-400/40"
          >
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex items-center gap-3">
        <Link
          href={`/projects/${slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-cyan-400 transition-colors hover:text-cyan-300"
        >
          View Details
          <ArrowRight size={14} />
        </Link>
        <a
          href="https://github.com/maybeprascoder"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 px-3 py-1.5 text-xs font-medium text-slate-400 transition-all hover:border-cyan-400/30 hover:text-cyan-400"
        >
          GitHub
          <ExternalLink size={12} />
        </a>
      </div>
    </article>
  );
}
