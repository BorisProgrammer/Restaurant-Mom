import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-xl border border-white/70 bg-white/55 p-4 shadow-[0_6px_20px_-10px_rgba(35,28,26,0.18)] ${className}`.trim()}
    >
      {children}
    </div>
  );
}
