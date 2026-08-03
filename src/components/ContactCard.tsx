import type { LucideIcon } from "lucide-react";

interface ContactCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
}

export default function ContactCard({
  icon: Icon,
  label,
  value,
  href,
}: ContactCardProps) {
  const content = (
    <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-navy-800/60 p-5 shadow-lg transition-all hover:border-cyan-400/30">
      <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
        <Icon size={20} />
      </div>
      <div className="min-w-0">
        <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
          {label}
        </p>
        <p className="mt-0.5 truncate text-sm font-medium text-slate-200">
          {value}
        </p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className="block"
      >
        {content}
      </a>
    );
  }

  return content;
}
