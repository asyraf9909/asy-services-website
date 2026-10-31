import { Plus } from "lucide-react";
import { faqs } from "@/lib/content";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function Faq() {
  return (
    <section id="faq" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="container-xl grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow="FAQ"
            title={
              <>
                Questions,
                <br />
                <span className="text-cream/45">answered plainly.</span>
              </>
            }
            lead="If something is missing, ask directly — you will get a straight answer, usually the same working day."
          />
        </div>

        <div className="divide-y divide-line-soft border-y border-line-soft">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.04}>
              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 transition-colors hover:text-white">
                  <h3 className="text-[15px] font-medium leading-snug tracking-[-0.01em] text-cream/90 group-open:text-cream">
                    {f.q}
                  </h3>
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-line text-dim transition-all duration-300 group-open:rotate-45 group-open:border-flame/50 group-open:text-ember">
                    <Plus className="h-3.5 w-3.5" />
                  </span>
                </summary>
                <p className="max-w-[62ch] pb-5 pr-8 text-[14px] leading-relaxed text-muted">
                  {f.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
