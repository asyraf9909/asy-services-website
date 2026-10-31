import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/content";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

function InventoryPreview() {
  const rows = [
    ["KN-4471", "Pallet · A-12", "Ready"],
    ["KN-4472", "Pallet · B-03", "In transit"],
    ["KN-4473", "Pallet · A-08", "Inspection"],
    ["KN-4474", "Pallet · C-01", "Ready"],
  ];
  return (
    <div className="relative h-40 overflow-hidden rounded-xl border border-line-soft bg-ink p-3">
      <div className="mb-2 flex items-center justify-between">
        <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-dim">
          inventory / live
        </span>
        <span className="flex items-center gap-1 font-mono text-[9px] text-mint">
          <span className="h-1 w-1 rounded-full bg-mint" /> synced
        </span>
      </div>
      <div className="space-y-1">
        {rows.map(([id, item, status], i) => (
          <div
            key={id}
            className="flex items-center gap-2 rounded-md border border-line-soft bg-white/[0.015] px-2 py-1.5"
            style={{ opacity: 1 - i * 0.12 }}
          >
            <span className="font-mono text-[9.5px] text-cream/60">{id}</span>
            <span className="flex-1 truncate text-[10px] text-muted">{item}</span>
            <span
              className={`rounded px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-wider ${
                status === "Ready"
                  ? "bg-mint/10 text-mint"
                  : status === "In transit"
                    ? "bg-ember/10 text-ember"
                    : "bg-white/5 text-dim"
              }`}
            >
              {status}
            </span>
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-ink to-transparent" />
    </div>
  );
}

function VisionPreview() {
  return (
    <div className="relative h-40 overflow-hidden rounded-xl border border-line-soft bg-ink p-3">
      <div className="mb-2 flex items-center justify-between">
        <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-dim">
          cam 04 / tracking
        </span>
        <span className="font-mono text-[9px] text-ember">4 streams</span>
      </div>
      <div className="grid grid-cols-4 gap-1.5">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="relative aspect-video overflow-hidden rounded-sm border border-line-soft bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.07),transparent_70%)]"
          >
            {[1, 4, 6].includes(i) && (
              <div className="absolute inset-[22%_26%] rounded-[1px] border border-mint/70">
                <span className="absolute -top-[7px] left-0 rounded-[1px] bg-mint px-0.5 font-mono text-[5px] leading-tight text-ink">
                  P{i + 2}
                </span>
              </div>
            )}
            {i === 2 && (
              <div className="absolute inset-[30%_20%] rounded-[1px] border border-ember/70" />
            )}
          </div>
        ))}
      </div>
      <div className="mt-2 flex items-center gap-3 font-mono text-[8.5px] uppercase tracking-wider text-dim">
        <span className="text-mint">3 tracked</span>
        <span>fps 24</span>
        <span>p95 84ms</span>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-ink to-transparent" />
    </div>
  );
}

export function Work() {
  return (
    <section id="work" className="relative scroll-mt-24 border-t border-line-soft py-20 md:py-28">
      <div className="container-xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Selected work"
            title={
              <>
                Systems in production,
                <br />
                <span className="text-cream/45">not prototypes.</span>
              </>
            }
          />
          <Reveal delay={0.1} className="md:max-w-[34ch] md:pb-2">
            <p className="text-[14.5px] leading-relaxed text-muted">
              A selection of what we have built and continue to run — including
              the first system delivered in 2020 that is still handling daily
              operations today.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 0.07}>
              <article
                className={`group edge edge-hot relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-gradient-to-b from-surface/70 to-ink-2 transition-colors duration-300 hover:from-surface ${
                  p.featured ? "p-3" : "p-6 sm:p-7"
                }`}
              >
                {p.featured && (
                  <div className="mb-3">
                    {i === 0 ? <InventoryPreview /> : <VisionPreview />}
                  </div>
                )}

                <div className={`flex flex-1 flex-col ${p.featured ? "px-3 pb-3 pt-1" : ""}`}>
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-flame/85">
                      {p.tag}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-dim transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cream" />
                  </div>

                  <h3 className="mt-3 text-[19px] font-semibold leading-snug tracking-[-0.025em] text-cream sm:text-[20px]">
                    {p.title}
                  </h3>
                  <p className="mt-2 flex-1 text-[13.5px] leading-relaxed text-muted">
                    {p.summary}
                  </p>

                  <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-line-soft pt-4">
                    <div className="flex flex-wrap gap-1.5">
                      {p.stack.map((t) => (
                        <span
                          key={t}
                          className="rounded border border-line-soft px-1.5 py-0.5 font-mono text-[9.5px] uppercase tracking-[0.08em] text-dim"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="text-right">
                      <p className="text-[12.5px] font-medium text-cream">{p.metric.value}</p>
                      <p className="font-mono text-[9px] uppercase tracking-[0.1em] text-dim">
                        {p.metric.label}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
