import { ArrowUpRight, BrainCircuit, Globe, Server, Smartphone } from "lucide-react";
import { services } from "@/lib/content";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const icons = [Globe, Smartphone, BrainCircuit, Server];

export function Services() {
  return (
    <section id="services" className="relative scroll-mt-24 overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="glow-mint absolute right-[-12%] top-[10%] h-[440px] w-[440px] opacity-60" />
      </div>

      <div className="container-xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Capabilities"
            title={
              <>
                Four capabilities.
                <br />
                <span className="text-cream/45">One accountable team.</span>
              </>
            }
          />
          <Reveal delay={0.1} className="md:max-w-[34ch] md:pb-2">
            <p className="text-[14.5px] leading-relaxed text-muted">
              You brief one studio and get strategy, design, engineering and
              operations from the same people — no agency relay, no vendor
              roulette between layers.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {services.map((s, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={s.id} delay={i * 0.06}>
                <article className="group edge edge-hot relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-gradient-to-b from-surface/70 to-ink-2 p-6 transition-colors duration-300 hover:border-line/0 hover:from-surface sm:p-7">
                  <div className="flex items-start justify-between">
                    <div className="relative">
                      <div className="absolute inset-0 -z-10 rounded-xl bg-flame/25 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-white/[0.035] text-ember transition-colors duration-300 group-hover:border-flame/40 group-hover:bg-flame/10">
                        <Icon className="h-[19px] w-[19px]" strokeWidth={1.6} />
                      </span>
                    </div>
                    <span className="font-mono text-[11px] tracking-[0.1em] text-dim/70">
                      {s.index}
                    </span>
                  </div>

                  <h3 className="mt-6 text-[21px] font-semibold tracking-[-0.03em] text-cream">
                    {s.title}
                  </h3>
                  <p className="mt-1.5 text-[14.5px] font-medium text-ember/85">
                    {s.lead}
                  </p>
                  <p className="mt-3 text-[14px] leading-relaxed text-muted">{s.body}</p>

                  <ul className="mt-6 space-y-2.5 border-t border-line-soft pt-5">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex gap-2.5 text-[13.5px] leading-snug text-cream/70">
                        <span className="mt-[7px] h-1 w-1 shrink-0 rotate-45 bg-flame/80" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex flex-wrap items-center gap-1.5 pt-6">
                    {s.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-line-soft bg-white/[0.02] px-2 py-1 font-mono text-[10px] uppercase tracking-[0.08em] text-dim"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-4 flex flex-col items-start justify-between gap-4 rounded-2xl border border-line-soft bg-ink-2/60 px-6 py-5 sm:flex-row sm:items-center">
            <p className="text-[13.5px] text-muted">
              <span className="font-medium text-cream">Also on the menu:</span>{" "}
              legacy modernisation, technical audits, integrations and support
              retainers.
            </p>
            <a
              href="#contact"
              className="group inline-flex items-center gap-1.5 text-[13.5px] font-medium text-cream transition-colors hover:text-ember"
            >
              Ask about scope
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
