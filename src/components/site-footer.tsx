import { ArrowUpRight } from "lucide-react";
import { nav, services, site } from "@/lib/content";
import { LogoMark } from "@/components/ui/logo";

const githubPath =
  "M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.55v-1.94c-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.18-1.49 3.14-1.18 3.14-1.18.63 1.59.23 2.76.12 3.05.74.8 1.18 1.83 1.18 3.09 0 4.43-2.7 5.4-5.26 5.69.41.36.78 1.06.78 2.14v3.17c0 .3.2.66.8.55A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z";

const linkedinPath =
  "M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13Zm1.78 13.02H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z";

export function SiteFooter() {

  return (
    <footer className="relative border-t border-line-soft bg-ink-2/60">
      <div className="container-xl py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1.1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <LogoMark className="h-8 w-8" />
              <span className="text-[16px] font-semibold tracking-[-0.02em] text-cream">
                ASY Services
              </span>
            </div>
            <p className="mt-4 max-w-[32ch] text-[13px] leading-relaxed text-muted">
              A software engineering studio in Malaysia, building web platforms,
              mobile apps and AI systems since 2020.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.02] px-3 py-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-mint" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-mint" />
              </span>
              <span className="font-mono text-[9.5px] uppercase tracking-[0.12em] text-muted">
                Available for Q1 2027
              </span>
            </div>
          </div>

          <div>
            <p className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-muted/80">Services</p>
            <ul className="mt-4 space-y-2.5">
              {services.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="text-[13px] text-cream/65 transition-colors hover:text-cream">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-muted/80">Studio</p>
            <ul className="mt-4 space-y-2.5">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-[13px] text-cream/65 transition-colors hover:text-cream">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-muted/80">Get in touch</p>
            <ul className="mt-4 space-y-2.5 text-[13px] text-cream/65">
              <li>
                <a href={`mailto:${site.email}`} className="transition-colors hover:text-cream">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 transition-colors hover:text-cream">
                  WhatsApp
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              </li>
              <li className="text-muted">{site.location}</li>
            </ul>
            <div className="mt-5 flex items-center gap-2">
              {[
                { path: githubPath, href: "https://github.com/asyraf9909", label: "GitHub" },
                { path: linkedinPath, href: "https://www.linkedin.com/in/asyrafshahran/", label: "LinkedIn" },
              ].map(({ path, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-line bg-white/[0.02] text-cream/55 transition-colors hover:border-white/25 hover:text-cream"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5" aria-hidden="true">
                    <path d={path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-line-soft pt-6 sm:flex-row sm:items-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-muted/70">
            © 2026 ASY Services · All rights reserved
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-muted/70">
            Built with Next.js · Deployed on Vercel
          </p>
        </div>
      </div>
    </footer>
  );
}
