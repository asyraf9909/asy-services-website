import { processSteps } from "@/lib/content";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function Process() {
  return (
    <section id="process" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="container-xl grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow="How we work"
            title={
              <>
                Boring process.
                <br />
                <span className="text-cream/45">Predictable results.</span>
              </>
            }
            lead="No black-box phases and no surprise invoices. You always know what is being built this fortnight, what it costs, and what lands next."
          />

          <div className="mt-8 rounded-xl border border-line-soft bg-ink-2/60 p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-dim">
              Typical timeline
            </p>
            <p className="mt-2 text-[14px] leading-relaxed text-cream/75">
              Discovery to production in{" "}
              <span className="font-semibold text-cream">6–12 weeks</span> for a
              focused first release, with a clickable staging build from week two.
            </p>
          </div>
        </div>

        <ol className="relative">
          <div className="absolute bottom-4 left-[19px] top-3 w-px bg-gradient-to-b from-flame/70 via-line to-transparent" />
          {processSteps.map((step, i) => (
            <Reveal key={step.step} delay={i * 0.06}>
              <li className="group relative flex gap-5 pb-9 last:pb-0">
                <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line bg-ink font-mono text-[11px] text-muted transition-all duration-300 group-hover:border-flame/60 group-hover:bg-flame/10 group-hover:text-ember">
                  {step.step}
                </span>
                <div className="min-w-0 flex-1 rounded-xl border border-transparent px-1 pb-1 transition-colors duration-300">
                  <div className="flex items-baseline justify-between gap-4 border-b border-line-soft pb-2">
                    <h3 className="text-[17px] font-semibold tracking-[-0.02em] text-cream">
                      {step.title}
                    </h3>
                    <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.12em] text-dim">
                      {step.duration}
                    </span>
                  </div>
                  <p className="mt-2 max-w-[52ch] text-[14px] leading-relaxed text-muted">
                    {step.body}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
