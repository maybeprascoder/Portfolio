import Link from "next/link";
import {
  ArrowRight,
  ExternalLink,
  Brain,
  FileSearch,
  Users,
} from "lucide-react";

const featuredProjects = [
  {
    slug: "unihive",
    title: "UniHive",
    description:
      "AI-powered university admissions platform that streamlines the application process with intelligent recommendations and automated document processing.",
    tags: ["Python", "React", "AI/ML", "AWS"],
    icon: Brain,
  },
  {
    slug: "resume-intelligence",
    title: "Resume Intelligence System",
    description:
      "AI tool that extracts and evaluates student profiles from resumes using natural language processing and machine learning algorithms.",
    tags: ["Python", "NLP", "Machine Learning", "FastAPI"],
    icon: FileSearch,
  },
  {
    slug: "ai-recruitment",
    title: "AI Recruitment Platform",
    description:
      "Automated system for generating job descriptions and evaluating candidates using generative AI and structured data analysis.",
    tags: ["TypeScript", "Generative AI", "Next.js", "SQL"],
    icon: Users,
  },
];

const skills = [
  "Python",
  "TypeScript",
  "React",
  "Next.js",
  "Machine Learning",
  "Generative AI",
  "AWS",
  "SQL",
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-800 via-navy-900 to-navy-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-400/10 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32 lg:py-40">
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:justify-between">
            <div className="max-w-2xl text-center lg:text-left">
              <p className="text-sm font-medium uppercase tracking-widest text-cyan-400">
                Welcome to my portfolio
              </p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Prasoon Kumar
              </h1>
              <p className="mt-3 text-xl font-medium text-cyan-400/90 sm:text-2xl">
                Software Engineer | AI/ML Engineer
              </p>
              <p className="mt-6 text-lg leading-relaxed text-slate-300">
                I am a software engineer and AI/ML professional with experience
                building intelligent applications, responsive web interfaces,
                and data-driven solutions.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-500 px-6 py-3 text-sm font-semibold text-navy-900 shadow-lg shadow-cyan-500/25 transition-all hover:bg-cyan-400 hover:shadow-cyan-400/30"
                >
                  View Projects
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-all hover:border-cyan-400/50 hover:text-cyan-400"
                >
                  Contact Me
                </Link>
              </div>
            </div>

            {/* Profile initials card */}
            <div className="flex-shrink-0">
              <div className="flex h-48 w-48 items-center justify-center rounded-full border-4 border-cyan-400/30 bg-gradient-to-br from-navy-700 to-navy-800 shadow-2xl shadow-cyan-500/10 sm:h-56 sm:w-56">
                <span className="text-6xl font-bold text-cyan-400 sm:text-7xl">
                  PK
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="border-t border-white/5 bg-navy-800/50">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-sm font-medium uppercase tracking-widest text-cyan-400">
              About Me
            </h2>
            <p className="mt-6 text-xl leading-relaxed text-slate-300 sm:text-2xl">
              I have a background in computer science, artificial intelligence,
              machine learning, and frontend development. I enjoy building
              practical technology solutions that improve user experience and
              solve real-world problems.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-cyan-400 transition-colors hover:text-cyan-300"
            >
              Learn more about me
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <div className="text-center">
            <h2 className="text-sm font-medium uppercase tracking-widest text-cyan-400">
              Featured Projects
            </h2>
            <p className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Recent Work
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => {
              const Icon = project.icon;
              return (
                <article
                  key={project.title}
                  className="group flex flex-col rounded-2xl border border-white/10 bg-navy-800/60 p-6 shadow-lg transition-all hover:border-cyan-400/30 hover:shadow-cyan-500/5"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                    <Icon size={24} />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-cyan-400 transition-colors hover:text-cyan-300"
                  >
                    View Project
                    <ExternalLink size={14} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="border-t border-white/5 bg-navy-800/50">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <div className="text-center">
            <h2 className="text-sm font-medium uppercase tracking-widest text-cyan-400">
              Technical Skills
            </h2>
            <p className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Tools & Technologies
            </p>
          </div>

          <div className="mx-auto mt-12 flex max-w-3xl flex-wrap justify-center gap-4">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-xl border border-white/10 bg-navy-700/60 px-5 py-3 text-sm font-medium text-slate-200 shadow-sm transition-all hover:border-cyan-400/30 hover:text-cyan-400"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
