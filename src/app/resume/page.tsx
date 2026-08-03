import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import ExperienceCard from "@/components/ExperienceCard";
import SkillBadge from "@/components/SkillBadge";
import { Download, GraduationCap, Award } from "lucide-react";
import PrintButton from "./PrintButton";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "View Prasoon Kumar's professional resume — experience, education, and certifications.",
  openGraph: {
    title: "Resume | Prasoon Kumar",
    description:
      "View Prasoon Kumar's professional resume — experience, education, and certifications.",
  },
  twitter: {
    card: "summary",
    title: "Resume | Prasoon Kumar",
    description:
      "View Prasoon Kumar's professional resume — experience, education, and certifications.",
  },
};

const experience = [
  {
    role: "AI Engineer",
    company: "Gilead",
    bullets: [
      "Worked on AI-driven applications and data solutions",
      "Supported machine learning and generative AI workflows",
    ],
  },
  {
    role: "Machine Learning Engineer Intern",
    company: "Automation Anywhere",
    bullets: [
      "Built a BERT-based text classification system",
      "Developed image-to-text and summarization workflows",
      "Integrated REST APIs and database operations",
    ],
  },
  {
    role: "Machine Learning Engineer Intern",
    company: "Sprouts AI",
    bullets: [
      "Developed AI evaluation and API frameworks",
      "Built job description generation tools",
      "Worked with GPT, Llama, and Mistral models",
    ],
  },
];

const education = [
  {
    degree: "MS Information Technology Management",
    school: "Cumberland University, Lebanon, Tennessee",
  },
  {
    degree: "MS Computer Science",
    school: "University of Texas at San Antonio",
    gpa: "GPA: 3.8 / 4.0",
  },
  {
    degree: "B.Tech Computer Science",
    school: "Institute of Engineering and Management",
    gpa: "GPA: 8.6 / 10",
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
  "Docker",
  "SQL",
  "FastAPI",
];

export default function ResumePage() {
  return (
    <>
      <PageHeader
        label="Resume"
        title="My Resume"
        description="A summary of my professional experience, education, technical skills, and certifications."
      />

      <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
        {/* Action buttons */}
        <div className="flex flex-wrap gap-4">
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-navy-900 shadow-lg shadow-cyan-500/25 transition-all hover:bg-cyan-400"
          >
            <Download size={16} />
            Download Resume
          </a>
          <PrintButton />
        </div>

        {/* Experience */}
        <section className="mt-16">
          <SectionHeading
            label="Experience"
            title="Professional Experience"
          />
          <div className="mt-8 space-y-6">
            {experience.map((job) => (
              <ExperienceCard
                key={`${job.role}-${job.company}`}
                role={job.role}
                company={job.company}
                bullets={job.bullets}
              />
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mt-16 border-t border-white/5 pt-16">
          <SectionHeading label="Education" title="Academic Background" />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {education.map((edu) => (
              <article
                key={edu.degree}
                className="rounded-2xl border border-white/10 bg-navy-800/60 p-6 shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{edu.degree}</h3>
                    <p className="mt-1 text-sm text-slate-400">{edu.school}</p>
                    {edu.gpa && (
                      <p className="mt-1 text-sm font-medium text-cyan-400/80">
                        {edu.gpa}
                      </p>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mt-16 border-t border-white/5 pt-16">
          <SectionHeading label="Skills" title="Technical Skills" />
          <div className="mt-8 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <SkillBadge key={skill} name={skill} />
            ))}
          </div>
        </section>

        {/* Courses and Certifications */}
        <section className="mt-16 border-t border-white/5 pt-16">
          <SectionHeading
            label="Courses & Certifications"
            title="Courses & Certifications"
          />
          <div className="mt-8 space-y-4">
            <article className="flex items-start gap-4 rounded-2xl border border-white/10 bg-navy-800/60 p-6 shadow-lg">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                <Award size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-white">
                  Machine Learning Specialization
                </h3>
                <p className="mt-1 text-sm text-slate-400">
                  DeepLearning.AI / Stanford Online
                </p>
              </div>
            </article>
          </div>
        </section>
      </div>
    </>
  );
}
