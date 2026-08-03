import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import SkillBadge from "@/components/SkillBadge";
import { GraduationCap, Lightbulb, Target, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Prasoon Kumar — education, skills, and professional background.",
  openGraph: {
    title: "About | Prasoon Kumar",
    description:
      "Learn more about Prasoon Kumar — education, skills, and professional background.",
  },
  twitter: {
    card: "summary",
    title: "About | Prasoon Kumar",
    description:
      "Learn more about Prasoon Kumar — education, skills, and professional background.",
  },
};

const skillGroups = [
  {
    category: "Programming",
    skills: ["Python", "TypeScript", "JavaScript", "Java", "C++", "SQL"],
  },
  {
    category: "Frontend",
    skills: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Material UI",
      "Styled Components",
    ],
  },
  {
    category: "AI & Machine Learning",
    skills: [
      "PyTorch",
      "TensorFlow",
      "Hugging Face",
      "RAG",
      "LangChain",
      "Generative AI",
    ],
  },
  {
    category: "Cloud & Tools",
    skills: ["AWS", "GCP", "Docker", "Git", "FastAPI", "MongoDB", "MySQL"],
  },
];

const focusAreas = [
  "AI and machine learning applications",
  "Generative AI",
  "Full-stack web development",
  "Responsive user interfaces",
  "Cloud-based applications",
];

const valueCards = [
  {
    icon: Target,
    title: "Technical Problem Solving",
    description:
      "I break down complex challenges into clear, actionable solutions using the right tools and patterns.",
  },
  {
    icon: Lightbulb,
    title: "Product-Focused Development",
    description:
      "I build with the end user in mind, prioritizing usability, performance, and practical value.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description:
      "I stay current with emerging technologies and continuously expand my skills across AI, web, and cloud.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="About"
        title="About Me"
        description="I am a software engineer and AI/ML professional with experience building intelligent applications, responsive web interfaces, and data-driven solutions."
      />

      <div className="mx-auto max-w-6xl px-6">
        {/* Professional Summary */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl">
            <SectionHeading label="Background" title="Professional Summary" />
            <p className="mt-6 text-lg leading-relaxed text-slate-300">
              I have a strong background in computer science, artificial
              intelligence, machine learning, and frontend development. I enjoy
              creating practical products that solve real-world problems and
              provide a clear user experience.
            </p>
          </div>
        </section>

        {/* Education */}
        <section className="border-t border-white/5 py-16 sm:py-20">
          <SectionHeading label="Education" title="Academic Background" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <article className="rounded-2xl border border-white/10 bg-navy-800/60 p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-white">
                    Master of Science in Information Technology Management
                  </h3>
                  <p className="mt-1 text-sm text-slate-400">
                    Cumberland University, Lebanon, Tennessee
                  </p>
                </div>
              </div>
            </article>

            <article className="rounded-2xl border border-white/10 bg-navy-800/60 p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-white">
                    Master of Science in Computer Science
                  </h3>
                  <p className="mt-1 text-sm text-slate-400">
                    University of Texas at San Antonio
                  </p>
                  <p className="mt-1 text-sm font-medium text-cyan-400/80">
                    GPA: 3.8 / 4.0
                  </p>
                </div>
              </div>
            </article>

            <article className="rounded-2xl border border-white/10 bg-navy-800/60 p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-white">
                    Bachelor of Technology in Computer Science
                  </h3>
                  <p className="mt-1 text-sm text-slate-400">
                    Institute of Engineering and Management
                  </p>
                  <p className="mt-1 text-sm font-medium text-cyan-400/80">
                    GPA: 8.6 / 10
                  </p>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Current Focus */}
        <section className="border-t border-white/5 py-16 sm:py-20">
          <SectionHeading label="Focus" title="Current Focus" />
          <div className="mt-8 flex flex-wrap gap-3">
            {focusAreas.map((area) => (
              <span
                key={area}
                className="rounded-xl border border-cyan-400/20 bg-cyan-400/5 px-5 py-2.5 text-sm font-medium text-cyan-400"
              >
                {area}
              </span>
            ))}
          </div>
        </section>

        {/* Skills Grid */}
        <section className="border-t border-white/5 py-16 sm:py-20">
          <SectionHeading label="Skills" title="Technical Skills" centered />
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.category}>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <SkillBadge key={skill} name={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What I Bring */}
        <section className="border-t border-white/5 py-16 sm:py-20">
          <SectionHeading
            label="Values"
            title="What I Bring"
            centered
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {valueCards.map((card) => {
              const Icon = card.icon;
              return (
                <article
                  key={card.title}
                  className="rounded-2xl border border-white/10 bg-navy-800/60 p-6 text-center shadow-lg transition-all hover:border-cyan-400/20"
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                    <Icon size={24} />
                  </div>
                  <h3 className="mt-4 font-semibold text-white">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {card.description}
                  </p>
                </article>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}
