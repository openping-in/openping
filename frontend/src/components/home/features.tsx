import { SectionHeader, SectionShell } from "@/components/home/section-shell";

const features = [
  {
    icon: BroadcastIcon,
    title: "Broadcast campaigns",
    description:
      "Send high-volume WhatsApp and Messenger campaigns to segmented audiences. Schedule launches, track delivery, and iterate on templates.",
  },
  {
    icon: AuthIcon,
    title: "Authentication",
    description:
      "Handle Meta login, token refresh, and permission scopes in one place. Onboard business accounts securely across every channel.",
  },
  {
    icon: DmIcon,
    title: "Instagram DM automations",
    description:
      "Build reply flows, lead capture, and support bots inside Instagram DMs. Trigger from keywords, buttons, or customer events.",
  },
  {
    icon: DevIcon,
    title: "Developer-ready from day one",
    description:
      "Ship faster with the official OpenPing SDK and native MCP support. Integrate into your stack, IDE, or AI agents.",
  },
];

export function Features() {
  return (
    <section id="use-cases" className="border-t-2 retro-divider py-12 sm:py-16 md:py-24">
      <SectionShell>
        <SectionHeader
          label="Use cases"
          title="What businesses run on OpenPing"
          description="One transparent platform for the Meta workflows that drive revenue."
        />

        <div className="retro-shadow-room mt-8 grid grid-cols-1 items-stretch gap-5 sm:mt-10 md:grid-cols-2 md:gap-6">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="retro-box flex h-full min-w-0 flex-col p-5 sm:p-6"
            >
              <div className="mb-4 inline-flex size-10 shrink-0 items-center justify-center border-2 border-accent text-accent">
                <feature.icon />
              </div>
              <h3 className="text-pretty text-sm font-bold uppercase tracking-wide sm:text-base">
                {feature.title}
              </h3>
              <p className="mt-2 flex-1 text-pretty text-sm leading-relaxed text-muted">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </SectionShell>
    </section>
  );
}

function BroadcastIcon() {
  return (
    <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="square" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a3.001 3.001 0 0 0 2.92 2.97M6.75 18.75h.008v.008H6.75v-.008Z" />
    </svg>
  );
}

function AuthIcon() {
  return (
    <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="square" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" />
    </svg>
  );
}

function DmIcon() {
  return (
    <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="square" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
    </svg>
  );
}

function DevIcon() {
  return (
    <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="square" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
    </svg>
  );
}
