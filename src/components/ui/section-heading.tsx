import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  className = "",
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  const centered = align === "center";
  return (
    <div
      className={`${centered ? "mx-auto max-w-2xl text-center" : "max-w-3xl"} ${className}`}
    >
      <div
        className={`flex items-center gap-3 ${centered ? "justify-center" : ""}`}
      >
        <span className="h-px w-6 bg-gradient-to-r from-flame to-transparent" />
        <span className="eyebrow">{eyebrow}</span>
      </div>
      <h2 className="mt-5 text-[clamp(1.85rem,4vw,3rem)] font-semibold leading-[1.02] tracking-[-0.04em]">
        {title}
      </h2>
      {lead ? (
        <p className="mt-5 text-[15.5px] leading-relaxed text-muted md:text-base">
          {lead}
        </p>
      ) : null}
    </div>
  );
}
