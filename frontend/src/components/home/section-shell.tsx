import type { ReactNode } from "react";

type SectionShellProps = {
  children: ReactNode;
  className?: string;
};

export function SectionShell({ children, className = "" }: SectionShellProps) {
  return (
    <div
      className={`mx-auto w-full min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </div>
  );
}

type SectionHeaderProps = {
  label: string;
  title: string;
  description: string;
};

export function SectionHeader({ label, title, description }: SectionHeaderProps) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="retro-label">{label}</p>
      <h2 className="mt-2 text-balance text-xl font-bold uppercase tracking-tight sm:text-2xl md:text-3xl">
        {title}
      </h2>
      <p className="mt-3 text-pretty text-sm text-muted sm:text-base">
        {description}
      </p>
    </div>
  );
}
