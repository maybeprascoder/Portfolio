import { Briefcase } from "lucide-react";

interface ExperienceCardProps {
  role: string;
  company: string;
  bullets: string[];
}

export default function ExperienceCard({
  role,
  company,
  bullets,
}: ExperienceCardProps) {
  return (
    <article className="rounded-2xl border border-white/10 bg-navy-800/60 p-6 shadow-lg transition-all hover:border-cyan-400/20">
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
          <Briefcase size={20} />
        </div>
        <div className="min-w-0">
          <h3 className="text-lg font-semibold text-white">{role}</h3>
          <p className="text-sm font-medium text-cyan-400/80">{company}</p>
        </div>
      </div>
      <ul className="mt-4 space-y-2 pl-14">
        {bullets.map((bullet, i) => (
          <li
            key={i}
            className="relative pl-4 text-sm leading-relaxed text-slate-400 before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-cyan-400/40"
          >
            {bullet}
          </li>
        ))}
      </ul>
    </article>
  );
}
