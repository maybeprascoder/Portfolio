interface SectionHeadingProps {
  label: string;
  title: string;
  centered?: boolean;
}

export default function SectionHeading({
  label,
  title,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      <p className="text-sm font-medium uppercase tracking-widest text-cyan-400">
        {label}
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
        {title}
      </h2>
    </div>
  );
}
