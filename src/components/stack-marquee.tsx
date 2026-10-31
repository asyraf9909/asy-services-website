import { techStack } from "@/lib/content";

export function StackMarquee() {
  const items = [...techStack, ...techStack];
  return (
    <section
      aria-label="Technology stack"
      className="relative border-y border-line-soft bg-ink-2/50 py-5"
    >
      <div className="container-xl mb-4">
        <p className="eyebrow text-center">The stack we ship in</p>
      </div>
      <div className="marquee-mask overflow-hidden">
        <div className="marquee-track animate-marquee gap-0">
          {items.map((t, i) => (
            <span
              key={`${t}-${i}`}
              className="flex items-center gap-0 whitespace-nowrap"
            >
              <span className="px-5 font-mono text-[12px] uppercase tracking-[0.14em] text-cream/45">
                {t}
              </span>
              <span className="h-1 w-1 rounded-full bg-flame/40" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
