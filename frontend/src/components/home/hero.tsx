import Link from "next/link";
import { SectionShell } from "@/components/home/section-shell";

function CodePreview() {
  return (
    <div className="retro-box w-full min-w-0">
      <div className="flex items-center justify-between gap-3 border-b-2 retro-divider px-4 py-2">
        <span className="truncate text-xs font-bold uppercase tracking-wider">
          campaign.ts
        </span>
        <span className="shrink-0 text-[10px] uppercase tracking-widest text-muted">
          [sdk]
        </span>
      </div>
      <pre className="overflow-x-auto p-4 text-xs leading-relaxed text-muted sm:p-5 sm:text-[13px]">
        <code>
          <span className="text-accent">import</span>
          <span className="text-foreground"> {"{ OpenPing }"} </span>
          <span className="text-accent">from</span>
          <span className="text-foreground"> </span>
          <span className="text-foreground">&quot;@openping/sdk&quot;</span>
          {"\n\n"}
          <span className="text-foreground">const client = </span>
          <span className="text-accent">new</span>
          <span className="text-foreground"> OpenPing()</span>
          {"\n\n"}
          <span className="text-muted">{"// Broadcast to thousands on WhatsApp"}</span>
          {"\n"}
          <span className="text-foreground">await client.broadcasts.</span>
          <span className="text-accent">create</span>
          <span className="text-foreground">({"{"}</span>
          {"\n"}
          {"  "}
          <span className="text-foreground">channel: </span>
          <span className="text-foreground">&quot;whatsapp&quot;</span>
          <span className="text-foreground">,</span>
          {"\n"}
          {"  "}
          <span className="text-foreground">template: </span>
          <span className="text-foreground">&quot;flash_sale&quot;</span>
          <span className="text-foreground">,</span>
          {"\n"}
          {"  "}
          <span className="text-foreground">audience: </span>
          <span className="text-foreground">&quot;vip_customers&quot;</span>
          {"\n"}
          <span className="text-foreground">{"})"}</span>
          {"\n\n"}
          <span className="text-muted">{"// Automate Instagram DMs"}</span>
          {"\n"}
          <span className="text-foreground">await client.instagram.dm.</span>
          <span className="text-accent">startFlow</span>
          <span className="text-foreground">(</span>
          <span className="text-foreground">&quot;lead_capture&quot;</span>
          <span className="text-foreground">)</span>
        </code>
      </pre>
    </div>
  );
}

export function Hero() {
  return (
    <section className="retro-grid relative pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-36 md:pb-24">
      <SectionShell>
        <div className="mb-6 flex justify-center md:justify-start">
          <span className="retro-box-inset inline-block px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-muted">
            Open source · Apache 2.0
          </span>
        </div>

        <div className="grid grid-cols-1 items-start gap-8 md:gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="min-w-0 text-center md:text-left">
            <h1 className="text-balance text-2xl font-bold uppercase leading-tight tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
              Meta messaging,
              <br />
              <span className="text-accent">built for business</span>
            </h1>
            <p className="mt-5 max-w-lg text-pretty text-sm leading-relaxed text-muted sm:text-base md:mx-0 mx-auto">
              OpenPing is the open platform for running broadcast campaigns,
              managing authentication, and automating Instagram DMs — without
              opaque vendors or surprise limits.
            </p>

            <div className="retro-shadow-room mt-8 flex flex-col gap-3 sm:flex-row md:justify-start justify-center">
              <Link
                href="#get-started"
                className="retro-btn retro-btn-primary h-12 w-full px-6 sm:w-auto"
              >
                Start building
              </Link>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="retro-btn retro-btn-secondary h-12 w-full gap-2 px-6 sm:w-auto"
              >
                <GitHubIcon />
                GitHub
              </a>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-2 min-[420px]:grid-cols-3 md:justify-items-start">
              <Stat label="Official SDK" value="Day 1" />
              <Stat label="MCP" value="Built-in" />
              <Stat label="License" value="Apache 2.0" />
            </div>
          </div>

          <div className="retro-shadow-room min-w-0 w-full">
            <CodePreview />
          </div>
        </div>
      </SectionShell>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="retro-box-inset px-3 py-2 text-center text-xs uppercase tracking-wider text-muted md:text-left">
      <span className="block font-bold text-foreground sm:inline">{value}</span>
      <span className="mt-0.5 block sm:ml-2 sm:mt-0 sm:inline">{label}</span>
    </div>
  );
}

function GitHubIcon() {
  return (
    <svg className="size-4 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}
