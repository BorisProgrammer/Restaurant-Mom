interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex flex-col gap-3 ${alignment}`}>
      {eyebrow && (
        <span className="font-display text-sm font-medium uppercase tracking-[0.2em] text-brand-red">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl font-semibold uppercase tracking-wide text-charcoal sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-base text-muted sm:text-lg">{description}</p>
      )}
    </div>
  );
}
