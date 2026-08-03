interface SkillBadgeProps {
  name: string;
}

export default function SkillBadge({ name }: SkillBadgeProps) {
  return (
    <span className="rounded-lg border border-white/10 bg-navy-700/60 px-4 py-2 text-sm font-medium text-slate-200 transition-all hover:border-cyan-400/30 hover:text-cyan-400">
      {name}
    </span>
  );
}
