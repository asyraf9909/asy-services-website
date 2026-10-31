import { Check } from "lucide-react";
import { engagements } from "@/lib/content";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function Engagement() {
  return (
    <section
      id="engagement"
      className="relative scroll-mt-24 overflow-hidden border-t border-line-soft bg-ink-2/30 py-20 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="glow-flame absolute left-1/2 top-0 h-[380px] w-[700px] -translate-x-1/2 opacity-40" />
      </div>

      <div className="container-xl">
        <SectionHeading
          align="center"
          eyebrow="Engagement"
          title={
            <>
              Three ways to work
              <br />
              <span className="text-cream/45">with us.</span>
            </>
          }
          lead="Pick the shape that fits your stage. Everything is quoted in writing before engineering starts — including what is explicitly out of scope."
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {engagements.map((e, i) => (
            <Reveal key={e.name} delay={i * 0.07}>
              <div
                className={`group relative flex h-full flex-col rounded-2xl border p-6 transition-all duration-300 sm:p-7 ${
                  e.featured
                    ? "border-flame/35 bg-gradient-to-b from-flame/[0.07] to-ink-2 shadow-[0_30px_80px_-50px_rgba(255,77,0,0.8)]"
                    : "edge border-line bg-gradient-to-b from-surface/60 to-ink-2 hover:border-line/60"
                }`}
              >
                {e.featured && (
                  <span className="absolute right-5 top-5 rounded-full border border-flame/40 bg-flame/10 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-ember">
                    Recommended
                  </span>
                )}
                <h3 className="text-[15px] font-semibold text-cream">{e.name}</h3>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-dim">
                  {e.best}
                </p>
                <p className="mt-5 text-[26px] font-semibold tracking-[-0.035em] text-cream">
                  {e.price}
                </p>
                <ul className="mt-6 space-y-3 border-t border-line-soft pt-5">
                  {e.points.map((p) => (
                    <li key={p} className="flex gap-2.5 text-[13.5px] leading-snug text-cream/70">
                      <Check
                        className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${
                          e.featured ? "text-ember" : "text-mint/70"
                        }`}
                        strokeWidth={2.4}
                      />
                      {p}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`mt-7 inline-flex h-10 items-center justify-center rounded-lg text-[13.5px] font-medium transition-colors ${
                    e.featured
                      ? "bg-cream text-ink hover:bg-white"
                      : "border border-line bg-white/[0.03] text-cream hover:border-white/20 hover:bg-white/[0.06]"
                  }`}
                >
                  Enquire
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-6 text-center font-mono text-[10.5px] uppercase tracking-[0.12em] text-dim">
          Indicative pricing in MYR · scope confirmed in writing · SST not included
        </p>
      </div>
    </section>
  );
}
