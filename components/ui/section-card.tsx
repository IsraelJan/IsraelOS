import { ReactNode } from "react";

interface SectionCardProps {
  children: ReactNode;
  className?: string;
}

export function SectionCard({
  children,
  className = "",
}: SectionCardProps) {
  return (
    <section
      className={`
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-6
        shadow-sm
        transition-all
        duration-300
        hover:shadow-lg
        ${className}
      `}
    >
      {children}
    </section>
  );
}