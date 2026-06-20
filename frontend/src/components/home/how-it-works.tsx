import { SectionHeader, SectionShell } from "@/components/home/section-shell";

const steps = [
  {
    step: "01",
    title: "Connect your Meta business",
    description:
      "Authenticate your WhatsApp, Messenger, and Instagram accounts through OpenPing. Permissions, tokens, and webhooks — handled transparently from the start.",
    code: "await client.auth.connect({ channels: ['whatsapp', 'instagram'] })",
  },
  {
    step: "02",
    title: "Launch campaigns and automations",
    description:
      "Create broadcast campaigns for promotions and announcements. Set up Instagram DM flows that qualify leads, answer FAQs, and hand off to your team.",
    code: 'await client.broadcasts.create({ template: "product_drop" })',
  },
  {
    step: "03",
    title: "Scale with your own stack",
    description:
      "Use the official SDK in your backend, or plug OpenPing into AI workflows via MCP. Same APIs, same visibility — whether you self-host or use our cloud.",
    code: "npx @openping/mcp-server --token $OPENPING_API_KEY",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t-2 retro-divider py-12 sm:py-16 md:py-24">
      <SectionShell>
        <SectionHeader
          label="How it works"
          title="From signup to live campaigns in hours"
          description="Stop stitching together brittle integrations. OpenPing gives your team one place to run Meta messaging at scale."
        />

        <div className="retro-shadow-room mt-8 w-full space-y-5 sm:mt-10 sm:space-y-6">
          {steps.map((item) => (
            <article
              key={item.step}
              className="retro-box w-full p-5 sm:p-6"
            >
              <div className="flex w-full min-w-0 flex-col gap-5 lg:flex-row lg:items-stretch lg:gap-6">
                <div className="flex min-w-0 flex-1 flex-col justify-center">
                  <span className="retro-label">Step {item.step}</span>
                  <h3 className="mt-2 text-pretty text-lg font-bold uppercase tracking-tight sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-pretty text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>

                <div className="flex min-w-0 flex-1 flex-col">
                  <div className="retro-box-inset flex h-full w-full min-w-0 flex-col overflow-hidden">
                    <div className="border-b-2 retro-divider px-4 py-2">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-muted">
                        terminal
                      </span>
                    </div>
                    <pre className="flex-1 overflow-x-auto p-4 text-xs leading-relaxed sm:text-[13px]">
                      <code className="block whitespace-pre-wrap break-words sm:whitespace-pre">
                        <span className="text-muted">{">"} </span>
                        <span className="text-foreground">{item.code}</span>
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </SectionShell>
    </section>
  );
}
