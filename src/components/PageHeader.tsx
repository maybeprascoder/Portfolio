interface PageHeaderProps {
  label: string;
  title: string;
  description?: string;
}

export default function PageHeader({ label, title, description }: PageHeaderProps) {
  return (
    <div className="border-b border-white/5 bg-gradient-to-b from-navy-800/80 to-navy-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <p className="text-sm font-medium uppercase tracking-widest text-cyan-400">
          {label}
        </p>
        <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-300">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
