"use client";

import { useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Clock,
  Loader2,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";
import { site } from "@/lib/content";
import { Reveal } from "@/components/ui/reveal";

type Status = "idle" | "sending" | "sent" | "fallback" | "error";

const projectTypes = [
  "Web application / platform",
  "Mobile app (iOS + Android)",
  "AI feature or integration",
  "Cloud, DevOps or infrastructure",
  "Takeover / audit of existing system",
  "Something else",
];

const budgets = ["Under RM 15k", "RM 15k – 40k", "RM 40k – 100k", "RM 100k+", "Not sure yet"];

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    type: projectTypes[0],
    budget: budgets[1],
    message: "",
    trap: "",
  });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = (await res.json()) as { ok: boolean; transport?: string };

      if (!res.ok || !data.ok) throw new Error("Request failed");

      if (data.transport === "email") {
        setStatus("sent");
      } else {
        // No mail provider configured yet: hand the message to the visitor's
        // own mail client so nothing is silently dropped.
        const subject = `Project enquiry — ${form.type}`;
        const body = [
          `Name: ${form.name}`,
          `Email: ${form.email}`,
          `Company: ${form.company || "—"}`,
          `Project: ${form.type}`,
          `Budget: ${form.budget}`,
          "",
          form.message,
        ].join("\n");
        window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
          subject,
        )}&body=${encodeURIComponent(body)}`;
        setStatus("fallback");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden border-t border-line-soft py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="glow-flame absolute -bottom-[30%] left-1/2 h-[560px] w-[900px] -translate-x-1/2 opacity-50" />
        <div className="grid-lines absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_bottom,#000,transparent_70%)]" />
      </div>

      <div className="container-xl grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <div className="flex items-center gap-3">
            <span className="h-px w-6 bg-gradient-to-r from-flame to-transparent" />
            <span className="eyebrow">Contact</span>
          </div>
          <h2 className="mt-5 text-[clamp(2rem,4.4vw,3.25rem)] font-semibold leading-[1.0] tracking-[-0.04em]">
            Have a system that
            <br />
            <span className="text-flame-gradient">needs building?</span>
          </h2>
          <p className="mt-5 max-w-[44ch] text-[15.5px] leading-relaxed text-muted">
            Tell us what is slowing the business down. You will get a reply from
            the engineer who would build it — with an honest view on scope,
            timeline and whether we are the right fit.
          </p>

          <div className="mt-9 space-y-px overflow-hidden rounded-xl border border-line bg-line">
            {[
              { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
              { icon: MessageCircle, label: "WhatsApp", value: "+60 11-1086 9174", href: site.whatsapp },
              { icon: MapPin, label: "Based in", value: site.location },
              { icon: Clock, label: "Response time", value: "Within 1 business day" },
            ].map((row) => {
              const Icon = row.icon;
              const inner = (
                <div className="flex items-center gap-4 px-4 py-3.5 transition-colors hover:bg-white/[0.03]">
                  <Icon className="h-4 w-4 shrink-0 text-dim" strokeWidth={1.7} />
                  <span className="w-24 font-mono text-[10px] uppercase tracking-[0.12em] text-dim">
                    {row.label}
                  </span>
                  <span className="truncate text-[13.5px] text-cream/85">{row.value}</span>
                </div>
              );
              return row.href ? (
                <a key={row.label} href={row.href} className="block bg-ink-2">
                  {inner}
                </a>
              ) : (
                <div key={row.label} className="bg-ink-2">
                  {inner}
                </div>
              );
            })}
          </div>
        </div>

        <Reveal delay={0.05}>
          <div className="edge relative rounded-2xl border border-line bg-gradient-to-b from-surface to-ink-2 p-5 shadow-[0_40px_100px_-50px_rgba(0,0,0,0.9)] sm:p-7">
            {status === "sent" || status === "fallback" ? (
              <div className="flex min-h-[420px] flex-col items-start justify-center">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-mint/30 bg-mint/10 text-mint">
                  <Check className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-[20px] font-semibold tracking-[-0.025em] text-cream">
                  {status === "sent" ? "Message sent." : "Your mail app is opening."}
                </h3>
                <p className="mt-2 max-w-[42ch] text-[14px] leading-relaxed text-muted">
                  {status === "sent"
                    ? "Thanks — you will hear back within one business day, usually sooner."
                    : `Your message has been drafted to ${site.email} — just press send. If nothing opened, email us directly.`}
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="btn-ghost mt-6"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4">
                <div className="mb-1 flex items-center justify-between">
                  <h3 className="text-[13px] font-medium text-cream">Project enquiry</h3>
                  <span className="font-mono text-[9.5px] uppercase tracking-[0.12em] text-dim">
                    ≈ 2 min to send
                  </span>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="sr-only">Name</span>
                    <input required value={form.name} onChange={set("name")} className="field" placeholder="Your name" autoComplete="name" />
                  </label>
                  <label className="block">
                    <span className="sr-only">Email</span>
                    <input required type="email" value={form.email} onChange={set("email")} className="field" placeholder="Work email" autoComplete="email" />
                  </label>
                </div>

                <label className="block">
                  <span className="sr-only">Company</span>
                  <input value={form.company} onChange={set("company")} className="field" placeholder="Company (optional)" autoComplete="organization" />
                </label>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="relative block">
                    <span className="sr-only">Project type</span>
                    <select
                      value={form.type}
                      onChange={set("type")}
                      className="field cursor-pointer appearance-none pr-9"
                    >
                      {projectTypes.map((t) => (
                        <option key={t} value={t} className="bg-ink-2">{t}</option>
                      ))}
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-dim" />
                  </label>
                  <label className="relative block">
                    <span className="sr-only">Budget</span>
                    <select
                      value={form.budget}
                      onChange={set("budget")}
                      className="field cursor-pointer appearance-none pr-9"
                    >
                      {budgets.map((b) => (
                        <option key={b} value={b} className="bg-ink-2">{b}</option>
                      ))}
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-dim" />
                  </label>
                </div>

                <label className="block">
                  <span className="sr-only">Project details</span>
                  <textarea required rows={5} value={form.message} onChange={set("message")} className="field" placeholder="What are you building, and what does success look like?" />
                </label>

                {/* honeypot */}
                <input
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  value={form.trap}
                  onChange={set("trap")}
                  className="pointer-events-none absolute left-[-9999px] h-0 w-0 opacity-0"
                />

                <button type="submit" disabled={status === "sending"} className="btn-primary group w-full disabled:cursor-not-allowed disabled:opacity-70">
                  {status === "sending" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                    </>
                  ) : (
                    <>
                      Send enquiry
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </>
                  )}
                </button>

                {status === "error" && (
                  <p className="text-[12.5px] text-red-400">
                    Something went wrong. Email us directly at{" "}
                    <a href={`mailto:${site.email}`} className="underline">{site.email}</a>.
                  </p>
                )}

                <p className="text-center font-mono text-[9.5px] uppercase tracking-[0.1em] text-dim">
                  No spam · your details stay with us
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
