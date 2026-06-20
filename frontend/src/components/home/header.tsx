import Link from "next/link";
import { SectionShell } from "@/components/home/section-shell";

const navLinks = [
  { label: "Use cases", href: "#use-cases" },
  { label: "Developers", href: "#developers" },
  { label: "Docs", href: "#" },
];

export function Header() {
  return (
    <header className="retro-nav fixed inset-x-0 top-0 z-50">
      <SectionShell className="flex h-14 items-center justify-between">
        <Link href="/" className="shrink-0 text-sm font-bold uppercase tracking-widest">
          Open<span className="text-accent">Ping</span>
          <span className="retro-blink ml-1 text-accent">_</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-bold uppercase tracking-wider text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden px-2 py-1 text-xs font-bold uppercase tracking-wider text-accent md:inline"
          >
            GitHub
          </a>
          <a
            href="#get-started"
            className="retro-btn retro-btn-primary px-3 py-2 text-xs sm:px-4 sm:text-[13px]"
          >
            Start
          </a>
        </div>
      </SectionShell>
    </header>
  );
}
