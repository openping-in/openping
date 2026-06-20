import Link from "next/link";
import { SectionShell } from "@/components/home/section-shell";

export function Cta() {
  return (
    <section id="get-started" className="pb-12 sm:pb-16 md:pb-24">
      <SectionShell>
        <div className="retro-shadow-room">
          <div className="retro-box px-5 py-10 text-center sm:px-10 sm:py-12">
            <h2 className="text-balance text-xl font-bold uppercase tracking-tight sm:text-2xl md:text-3xl">
              Ready to run your next campaign?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-pretty text-sm text-muted sm:text-base">
              Start with broadcast campaigns, authentication, and Instagram DM
              automations — backed by an official SDK and MCP support from day
              one.
            </p>
            <div className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
              <Link
                href="#"
                className="retro-btn retro-btn-primary h-12 w-full px-6 sm:w-auto"
              >
                Read the docs
              </Link>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="retro-btn retro-btn-secondary h-12 w-full px-6 sm:w-auto"
              >
                Star on GitHub
              </a>
            </div>
          </div>
        </div>
      </SectionShell>
    </section>
  );
}
