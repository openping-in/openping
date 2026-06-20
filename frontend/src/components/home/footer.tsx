import { SectionShell } from "@/components/home/section-shell";

export function Footer() {
  return (
    <footer className="border-t-2 retro-divider py-8">
      <SectionShell className="flex flex-col items-center gap-5 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <span className="text-xs font-bold uppercase tracking-widest">
          Open<span className="text-accent">Ping</span>
        </span>

        <p className="max-w-xs text-pretty text-[11px] uppercase tracking-wider text-muted sm:max-w-none">
          Open source Meta messaging · Apache 2.0
        </p>

        <div className="flex flex-wrap justify-center gap-4 text-xs font-bold uppercase tracking-wider sm:justify-end">
          <a href="#" className="text-accent hover:underline">
            Docs
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            GitHub
          </a>
          <a href="#" className="text-accent hover:underline">
            Discord
          </a>
        </div>
      </SectionShell>
    </footer>
  );
}
