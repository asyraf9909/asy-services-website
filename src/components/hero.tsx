"use client";

import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight, Check, CircleDot } from "lucide-react";

const logLines = [
  { text: "$ asy deploy --env production", tone: "cmd" },
  { text: "→ analysing 3 services", tone: "dim" },
  { text: "web      Next.js 16 — compiled in 4.2s", tone: "ok" },
  { text: "mobile   Flutter — 2 artifacts signed", tone: "ok" },
  { text: "ai       2 models warm, p95 84ms", tone: "ok" },
  { text: "db       migrations up to date", tone: "ok" },
  { text: "● live at cv.asyrafshahran.com", tone: "live" },
] as const;

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-14 pt-28 sm:pt-36 lg:pb-24 lg:pt-40">
      {/* background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="grid-lines grid-mask absolute inset-0 opacity-70" />
        <div className="glow-flame absolute -left-[18%] -top-[28%] h-[620px] w-[620px] blur-[10px]" />
        <div className="glow-ember absolute -right-[10%] top-[6%] h-[520px] w-[520px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />
      </div>
      <div className="noise absolute inset-0 -z-10" />

      <div className="container-xl">
        <div className="grid items-center gap-14 lg:grid-cols-[1.06fr_0.94fr] lg:gap-10">
          {/* ── copy ─────────────────────────────── */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="inline-flex items-center gap-2.5 rounded-full border border-line bg-white/[0.03] py-1.5 pl-2 pr-3.5 backdrop-blur-sm"
            >
              <span className="inline-flex items-center gap-1.5 rounded-full bg-flame/12 px-2 py-0.5 font-mono text-[9.5px] uppercase tracking-[0.14em] text-ember">
                <CircleDot className="h-2.5 w-2.5" />
                Est. 2020
              </span>
              <span className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted">
                Malaysia · Japan
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.06, ease }}
              className="display mt-7 text-[clamp(2.55rem,6.4vw,4.6rem)]"
            >
              We engineer software
              <br className="hidden sm:block" /> that{" "}
              <span className="relative whitespace-nowrap">
                <span className="text-flame-gradient">earns its keep.</span>
                <svg
                  className="absolute -bottom-2.5 left-0 h-2.5 w-full text-flame/55"
                  viewBox="0 0 300 10"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <motion.path
                    d="M2 7.5C48 3.2 132 1.6 298 5.4"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.1, delay: 0.75, ease }}
                  />
                </svg>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.16, ease }}
              className="mt-7 max-w-[52ch] text-[16px] leading-[1.72] text-muted sm:text-[17px]"
            >
              ASY Services is a software studio building web platforms, mobile
              apps and AI systems for companies that need them to work — not to
              demo. Senior engineers, fixed scope, shipped since 2020 for clients
              in Malaysia and Japan.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.24, ease }}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
            >
              <a href="#contact" className="btn-primary group w-full sm:w-auto">
                Start a project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a href="#work" className="btn-ghost group w-full sm:w-auto">
                See selected work
                <ArrowUpRight className="h-4 w-4 text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.42 }}
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-line-soft pt-6"
            >
              <span className="eyebrow">Engineered for</span>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                {["Kantsu Co., Ltd. — Japan", "MJIIT · UTM", "PINTAR AI Services"].map(
                  (name) => (
                    <span
                      key={name}
                      className="text-[13px] font-medium tracking-[-0.01em] text-cream/70"
                    >
                      {name}
                    </span>
                  ),
                )}
              </div>
            </motion.div>
          </div>

          {/* ── deploy panel ─────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 26, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease }}
            className="relative lg:pl-4"
          >
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-flame/18 via-transparent to-mint/10 blur-2xl" />

            <div className="edge edge-hot overflow-hidden rounded-2xl border border-line bg-gradient-to-b from-surface to-ink-2 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.9)]">
              <div className="flex items-center justify-between border-b border-line-soft bg-white/[0.015] px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#3a3f45]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#3a3f45]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#3a3f45]" />
                  </div>
                  <span className="font-mono text-[10.5px] tracking-[0.06em] text-dim">
                    asy-services — deploy.log
                  </span>
                </div>
                <span className="flex items-center gap-1.5 rounded-full border border-mint/25 bg-mint/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.12em] text-mint">
                  <span className="h-1 w-1 rounded-full bg-mint" />
                  production
                </span>
              </div>

              <div className="space-y-1.5 px-4 py-5 font-mono text-[11.5px] leading-relaxed sm:text-[12px]">
                {logLines.map((line, i) => (
                  <motion.div
                    key={line.text}
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.65 + i * 0.13, ease }}
                    className={
                      line.tone === "cmd"
                        ? "flex items-start gap-2 text-cream"
                        : line.tone === "dim"
                          ? "flex items-start gap-2 text-dim"
                          : line.tone === "live"
                            ? "flex items-start gap-2 pt-1.5 text-mint"
                            : "flex items-start gap-2 text-cream/70"
                    }
                  >
                    {line.tone === "ok" && (
                      <Check className="mt-[3px] h-3 w-3 shrink-0 text-mint" />
                    )}
                    <span className={line.tone === "ok" ? "whitespace-pre" : ""}>
                      {line.text}
                    </span>
                  </motion.div>
                ))}

              </div>

              <div className="grid grid-cols-3 divide-x divide-line-soft border-t border-line-soft">
                {[
                  { k: "Build", v: "42s" },
                  { k: "Downtime", v: "0" },
                  { k: "Uptime", v: "99.98%" },
                ].map((m) => (
                  <div key={m.k} className="px-4 py-3">
                    <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-dim">
                      {m.k}
                    </p>
                    <p className="mt-1 text-[13.5px] font-medium text-cream">{m.v}</p>
                  </div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 1.4, ease }}
                className="border-t border-line-soft bg-white/[0.015] px-4 py-3.5"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-dim">
                    Now building
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-ember">
                    sprint 06
                  </span>
                </div>
                <p className="mt-1.5 text-[12.5px] font-medium text-cream">
                  Inventory v2 — Kantsu Japan
                </p>
                <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "72%" }}
                    transition={{ duration: 1.3, delay: 1.6, ease }}
                    className="h-full rounded-full bg-gradient-to-r from-flame to-ember"
                  />
                </div>
              </motion.div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
