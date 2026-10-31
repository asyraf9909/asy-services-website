# ASY Services — website

Marketing site for **ASY Services**, a software engineering studio (est. 2020) building web
platforms, mobile apps and AI systems for clients in Malaysia and Japan.

- Next.js 16 (App Router, Turbopack, Cache Components)
- React 19 + TypeScript
- Tailwind CSS v4 (CSS-first tokens in `src/app/globals.css`)
- motion (Framer Motion) for scroll reveals and hero animation
- lucide-react icons

## Local development

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm build        # production build
pnpm start        # serve the production build
```

## Editing content

All copy, services, case studies, pricing and FAQ entries live in `src/lib/content.ts`.
Section markup lives in `src/components/`.

## Contact form

`POST /api/contact` validates the enquiry and emails it through Resend when configured:

```bash
RESEND_API_KEY=re_...
CONTACT_TO_EMAIL=you@example.com
CONTACT_FROM_EMAIL="ASY Services <hello@yourdomain.com>"   # optional
```

Without those variables the endpoint returns `transport: "mailto"` and the form opens the
visitor's own mail client with the message pre-filled, so no enquiry is silently dropped.

## Deployment

Hosted on Vercel; custom domain `cv.asyrafshahran.com` via Cloudflare DNS.

1. `vercel link` (once), then `vercel --prod`.
2. Vercel → Project → Settings → Domains → add `cv.asyrafshahran.com`.
3. Cloudflare DNS (proxied OFF / DNS-only for the CNAME):
   - `CNAME  cv  cname.vercel-dns.com`
4. Set `NEXT_PUBLIC_SITE_URL=https://cv.asyrafshahran.com` in Vercel env vars.
