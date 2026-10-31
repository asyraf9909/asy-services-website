import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { site } from "@/lib/content";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "ASY Services — Software, mobile & AI engineering studio",
    template: "%s · ASY Services",
  },
  description:
    "ASY Services is a Malaysian software studio building web platforms, mobile apps and AI systems for companies in Malaysia and Japan. Senior engineers, fixed scope, shipping since 2020.",
  keywords: [
    "software development Malaysia",
    "mobile app development",
    "AI integration",
    "Next.js development",
    "custom software Johor",
    "software house Kuala Lumpur",
  ],
  authors: [{ name: "Asyraf Shahran" }],
  creator: "ASY Services",
  openGraph: {
    type: "website",
    locale: "en_MY",
    url: site.url,
    siteName: site.name,
    title: "ASY Services — Software, mobile & AI engineering studio",
    description:
      "Web platforms, mobile apps and AI systems engineered for outcomes. Shipping for clients in Malaysia and Japan since 2020.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ASY Services — Software, mobile & AI engineering studio",
    description:
      "Web platforms, mobile apps and AI systems engineered for outcomes. Since 2020.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#07080a",
  colorScheme: "dark",
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  description:
    "Software engineering studio delivering web platforms, mobile applications and AI integration for businesses in Malaysia and Japan.",
  url: site.url,
  email: site.email,
  telephone: "+601110869174",
  foundingDate: "2020",
  areaServed: ["MY", "JP"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Muar",
    addressRegion: "Johor",
    addressCountry: "MY",
  },
  knowsAbout: [
    "Web application development",
    "Mobile application development",
    "Artificial intelligence integration",
    "Computer vision",
    "Cloud infrastructure",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-ink text-cream">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-flame focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
        >
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </body>
    </html>
  );
}
