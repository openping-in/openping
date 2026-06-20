import { SectionShell } from "@/components/home/section-shell";

const pillars = [
  {
    label: "Official SDK",
    detail:
      "Typed client libraries with guides, examples, and stable versioning from launch day.",
  },
  {
    label: "MCP support",
    detail:
      "Connect OpenPing to Cursor, Claude, and other MCP-compatible tools from your IDE.",
  },
  {
    label: "Fully transparent",
    detail:
      "Open source under Apache 2.0. Audit delivery pipelines and webhook handling — no black boxes.",
  },
  {
    label: "Built for production",
    detail:
      "Delivery logs, rate-limit visibility, and error tracing out of the box.",
  },
];

export function Transparency() {
  return (
    <section id="developers" className="border-t-2 retro-divider py-12 sm:py-16 md:py-24">
      <SectionShell>
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="min-w-0 text-center lg:text-left">
            <p className="retro-label">Developers</p>
            <h2 className="mt-2 text-balance text-xl font-bold uppercase tracking-tight sm:text-2xl md:text-3xl">
              Full developer support from day one
            </h2>
            <p className="mt-3 text-pretty text-sm leading-relaxed text-muted sm:text-base">
              Most messaging platforms treat developers as an afterthought.
              OpenPing ships with an official SDK and MCP integration on day
              one — so your engineering team can move as fast as your marketing
              team.
            </p>
          </div>

          <div className="retro-shadow-room min-w-0">
            <div className="retro-box divide-y-2 retro-divider">
              {pillars.map((pillar) => (
                <div key={pillar.label} className="flex gap-3 p-4 sm:p-5">
                  <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center border-2 border-accent text-xs font-bold text-accent">
                    +
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-pretty text-sm font-bold uppercase tracking-wide">
                      {pillar.label}
                    </h3>
                    <p className="mt-1 text-pretty text-sm leading-relaxed text-muted">
                      {pillar.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionShell>
    </section>
  );
}
