import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { getProjectBySlug, getAllSlugs } from "@/data/projects";
import SectionHeading from "@/components/SectionHeading";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | Prasoon Kumar`,
    description: project.summary,
    openGraph: {
      title: `${project.title} | Prasoon Kumar`,
      description: project.summary,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Prasoon Kumar`,
      description: project.summary,
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      {/* Header */}
      <div className="border-b border-white/5 bg-gradient-to-b from-navy-800/80 to-navy-900">
        <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-cyan-400 transition-colors hover:text-cyan-300"
          >
            <ArrowLeft size={14} />
            Back to Projects
          </Link>
          <p className="mt-6 text-xs font-medium uppercase tracking-widest text-cyan-400/70">
            {project.category}
          </p>
          <h1 className="mt-2 text-4xl font-bold text-white sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-300">
            {project.summary}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://github.com/maybeprascoder"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 px-4 py-2 text-sm font-medium text-slate-300 transition-all hover:border-cyan-400/30 hover:text-cyan-400"
            >
              GitHub
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20 space-y-16">
        {/* Problem & Solution */}
        <section className="grid gap-8 sm:grid-cols-2">
          <article className="rounded-2xl border border-white/10 bg-navy-800/60 p-6 shadow-lg">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
              Problem
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              {project.problem}
            </p>
          </article>
          <article className="rounded-2xl border border-white/10 bg-navy-800/60 p-6 shadow-lg">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
              Solution
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              {project.solution}
            </p>
          </article>
        </section>

        {/* My Role */}
        <section>
          <SectionHeading label="Role" title="My Role" />
          <p className="mt-4 text-base leading-relaxed text-slate-300">
            {project.role}
          </p>
        </section>

        {/* Features */}
        <section>
          <SectionHeading label="Features" title="Main Features" />
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="relative rounded-lg border border-white/5 bg-navy-800/40 px-4 py-3 pl-8 text-sm text-slate-300 before:absolute before:left-3 before:top-4 before:h-1.5 before:w-1.5 before:rounded-full before:bg-cyan-400"
              >
                {feature}
              </li>
            ))}
          </ul>
        </section>

        {/* Technologies */}
        <section>
          <SectionHeading label="Stack" title="Technologies Used" />
          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-white/10 bg-navy-700/60 px-4 py-2 text-sm font-medium text-slate-200 transition-all hover:border-cyan-400/30 hover:text-cyan-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Challenges */}
        <section>
          <SectionHeading label="Challenges" title="Challenges Faced" />
          <ul className="mt-6 space-y-3">
            {project.challenges.map((challenge) => (
              <li
                key={challenge}
                className="relative pl-5 text-sm leading-relaxed text-slate-400 before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-cyan-400/50"
              >
                {challenge}
              </li>
            ))}
          </ul>
        </section>

        {/* Impact */}
        <section className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-8">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
            Results & Impact
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-200">
            {project.impact}
          </p>
        </section>

        {/* Back link */}
        <div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 px-5 py-2.5 text-sm font-medium text-slate-300 transition-all hover:border-cyan-400/30 hover:text-cyan-400"
          >
            <ArrowLeft size={14} />
            Back to Projects
          </Link>
        </div>
      </div>
    </>
  );
}
