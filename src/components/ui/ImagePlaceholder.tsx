interface ImagePlaceholderProps {
  label: string;
  className?: string;
}

export function ImagePlaceholder({ label, className = "" }: ImagePlaceholderProps) {
  return (
    <div
      className={`flex h-full w-full flex-col items-center justify-center gap-3 rounded-3xl border-2 border-dashed border-charcoal/20 bg-charcoal/[0.03] text-muted ${className}`.trim()}
      role="img"
      aria-label={`Espacio reservado para: ${label}, pendiente de recibir`}
    >
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M4 8a2 2 0 0 1 2-2h1.17a2 2 0 0 0 1.66-.89l.34-.5A2 2 0 0 1 10.83 4h2.34a2 2 0 0 1 1.66.89l.34.5a2 2 0 0 0 1.66.89H18a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8Z"
          stroke="currentColor"
          strokeWidth={1.5}
        />
        <circle cx="12" cy="13" r="3.25" stroke="currentColor" strokeWidth={1.5} />
      </svg>
      <p className="px-6 text-center text-sm font-medium">{label} — pendiente</p>
    </div>
  );
}
