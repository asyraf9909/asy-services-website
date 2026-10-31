import { stats } from "@/lib/content";
import { Reveal } from "@/components/ui/reveal";

export function Stats() {
  return (
    <section className="relative border-y border-line-soft bg-ink-2/40">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-40">
        <div className="dots absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,#000,transparent_75%)]" />
      </div>
      <div className="container-xl grid grid-cols-2 gap-px py-10 sm:py-12 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.05}>
            <div className="px-1 py-3 sm:px-6">
              <p className="font-mono text-[clamp(1.7rem,3.4vw,2.6rem)] font-medium leading-none tracking-[-0.04em] text-cream">
                {s.value}
              </p>
              <p className="mt-3 text-[12.5px] font-medium text-cream/70">{s.label}</p>
              <p className="mt-1 font-mono text-[9.5px] uppercase tracking-[0.12em] text-dim">
                {s.hint}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
