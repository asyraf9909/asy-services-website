export const site = {
  name: "ASY Services",
  legalName: "ASY Services",
  tagline: "Software engineering studio",
  email: "asyrafbinshahran1@gmail.com",
  phone: "+6011-1086-9174",
  phoneHref: "+601110869174",
  whatsapp: "https://wa.me/601110869174",
  location: "Muar, Johor · Kuala Lumpur, Malaysia",
  founded: 2020,
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://cv.asyrafshahran.com",
} as const;

export const nav = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Engagement", href: "#engagement" },
  { label: "FAQ", href: "#faq" },
] as const;

export const stats = [
  { value: "2020", label: "Shipping since", hint: "6+ years in production" },
  { value: "40+", label: "Systems delivered", hint: "Web, mobile, AI" },
  { value: "2", label: "Countries served", hint: "Malaysia & Japan" },
  { value: "99.98%", label: "Managed uptime", hint: "Self-hosted & cloud" },
] as const;

export type Service = {
  id: string;
  index: string;
  title: string;
  lead: string;
  body: string;
  bullets: string[];
  stack: string[];
};

export const services: Service[] = [
  {
    id: "web",
    index: "01",
    title: "Web Platforms",
    lead: "Applications your team actually enjoys using.",
    body:
      "Customer portals, internal tools, ERPs and storefronts — built on Next.js and Laravel, engineered for real data volumes and real users.",
    bullets: [
      "Product design, design systems and component libraries",
      "Role-based access, audit trails and multi-tenant data",
      "Dashboards, reporting and document automation",
      "Payments, invoicing and third-party APIs",
    ],
    stack: ["Next.js", "React", "TypeScript", "Laravel", "PostgreSQL"],
  },
  {
    id: "mobile",
    index: "02",
    title: "Mobile Apps",
    lead: "One codebase. Both stores. No compromises.",
    body:
      "Field-ready iOS and Android apps for operations teams — offline-first, photo and barcode capture, push notifications, and releases that pass review first time.",
    bullets: [
      "Flutter and React Native cross-platform delivery",
      "Offline sync, camera, Bluetooth and device hardware",
      "App Store & Play Store submission handled end to end",
      "Analytics, crash reporting and staged rollouts",
    ],
    stack: ["Flutter", "React Native", "Expo", "Firebase", "REST / gRPC"],
  },
  {
    id: "ai",
    index: "03",
    title: "AI & Integration",
    lead: "AI that removes work, not adds demos.",
    body:
      "Computer vision, document intelligence and LLM copilots wired directly into the systems you already run — measured against the manual process they replace.",
    bullets: [
      "Multi-camera person tracking and object detection",
      "OCR and document extraction pipelines",
      "RAG copilots over private company knowledge",
      "WhatsApp, ERP and legacy system connectors",
    ],
    stack: ["Python", "OpenCV", "PyTorch", "OpenAI", "pgvector"],
  },
  {
    id: "cloud",
    index: "04",
    title: "Cloud & DevOps",
    lead: "Infrastructure that stays up on a boring Tuesday.",
    body:
      "Dockerised deployments, CI/CD, backups and monitoring — on your own Proxmox cluster, on AWS, or a mix. Handed over with runbooks, not mystery.",
    bullets: [
      "Docker, Kubernetes and Proxmox virtualisation",
      "Zero-downtime pipelines and automated rollback",
      "Backups, disaster recovery and uptime monitoring",
      "Cost audits — cut cloud spend without cutting capacity",
    ],
    stack: ["Docker", "Proxmox", "GitHub Actions", "AWS", "Cloudflare"],
  },
];

export type Project = {
  tag: string;
  title: string;
  summary: string;
  stack: string[];
  metric: { value: string; label: string };
  featured?: boolean;
};

export const projects: Project[] = [
  {
    tag: "Logistics · Japan",
    title: "Inventory Management System v2",
    summary:
      "The operating core for a Japanese logistics company: stock movement, inspection records and multi-warehouse visibility. Replaced spreadsheet-driven workflows with a single source of truth.",
    stack: ["Laravel", "Vue 2", "Buefy", "MySQL"],
    metric: { value: "Daily", label: "Warehouse operations" },
    featured: true,
  },
  {
    tag: "Computer Vision · Japan",
    title: "Multi-Camera Person Tracking",
    summary:
      "Real-time detection and tracking across overlapping camera feeds, with product scanning for automated counts on the warehouse floor.",
    stack: ["Python", "OpenCV", "Deep Learning"],
    metric: { value: "Real-time", label: "Multi-stream inference" },
    featured: true,
  },
  {
    tag: "Finance · Japan",
    title: "Rakuten Billing & Quotation Engine",
    summary:
      "Billing, quotation and invoicing automation tied to Rakuten order data — removing manual reconciliation from the month-end close.",
    stack: ["Laravel", "Vue", "MySQL"],
    metric: { value: "Hands-off", label: "Month-end close" },
  },
  {
    tag: "Operations · Japan",
    title: "Pallet & Work Record Systems",
    summary:
      "Pallet tracking and staff work-record platforms used across warehouse teams, with printable documents and per-shift reporting.",
    stack: ["Angular", "Node.js", "MongoDB", "Laravel"],
    metric: { value: "2 systems", label: "Running in parallel" },
  },
  {
    tag: "Documents · Japan",
    title: "Delivery Note Printing System",
    summary:
      "Batch generation and printing of delivery notes from live order data — the first system delivered for Kantsu Co., Ltd and still in use today.",
    stack: ["PHP", "MySQL", "Bootstrap"],
    metric: { value: "2020", label: "In production since" },
  },
  {
    tag: "AI Platform · Malaysia",
    title: "Clinical Decision Support",
    summary:
      "A screening platform for frontline health officers: guided image capture, AI-assisted grading, audit-ready reports and role-based access — designed for constrained clinic hardware.",
    stack: ["Next.js", "Prisma", "BullMQ", "LLM", "Docker"],
    metric: { value: "Clinician-first", label: "Workflow design" },
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Discover",
    duration: "Week 1",
    body:
      "We sit with the people doing the work today. You leave with a written scope, data model sketch, risk list and a fixed price — or an honest no.",
  },
  {
    step: "02",
    title: "Architect & design",
    duration: "Weeks 1–2",
    body:
      "Clickable UI in Figma, schema and API contracts, and the deployment target decided up front. Nothing visual is a surprise after code starts.",
  },
  {
    step: "03",
    title: "Build in sprints",
    duration: "Weeks 2–12",
    body:
      "Two-week sprints with a staging link you can click on day three. Every sprint ends with something shippable, tested and reviewed on your devices.",
  },
  {
    step: "04",
    title: "Ship & stay",
    duration: "Ongoing",
    body:
      "Production deploy, monitoring, backups and a handover runbook. Most clients keep a support retainer — some have been with us since 2020.",
  },
] as const;

export const engagements = [
  {
    name: "Fixed scope",
    price: "From RM 15,000",
    best: "A defined system with a clear end date",
    points: [
      "Written scope, fixed price, milestone billing",
      "Staging environment from sprint one",
      "30-day post-launch warranty",
      "Full source and infrastructure handover",
    ],
    featured: true,
  },
  {
    name: "Monthly retainer",
    price: "From RM 6,000 / mo",
    best: "A product that keeps growing",
    points: [
      "Reserved engineering days each month",
      "Maintenance, monitoring and on-call",
      "Roadmap planning with your team",
      "Priority over new projects",
    ],
    featured: false,
  },
  {
    name: "Dedicated squad",
    price: "Custom",
    best: "Long-running platforms and teams",
    points: [
      "Embedded engineers working in your process",
      "Sprint ceremonies and shared board",
      "Architecture and code review ownership",
      "Scale up or down each quarter",
    ],
    featured: false,
  },
] as const;

export const faqs = [
  {
    q: "How quickly can you start?",
    a: "Discovery usually begins within one to two weeks of a signed scope. Urgent fixes and audits can often start sooner — say what is on fire and we will tell you honestly whether we can help this month.",
  },
  {
    q: "Who writes the code?",
    a: "A senior engineer you can speak to directly. There is no account manager relaying messages and no offshore handoff — the person in your kickoff call is the person committing code.",
  },
  {
    q: "Can you take over an existing codebase?",
    a: "Yes. We start with a paid technical audit: documentation, dependency and security review, plus a prioritised fix list. You keep the audit even if you decide not to continue with us.",
  },
  {
    q: "Do we own the code and infrastructure?",
    a: "Completely. Repositories, cloud accounts and domains are created in your name from day one. Handover includes a runbook so any competent team can operate the system without us.",
  },
  {
    q: "How do you price AI work?",
    a: "AI features are quoted as a small paid pilot against your real data, with a measurable acceptance threshold. If the pilot does not hit it, we stop and you owe nothing further.",
  },
  {
    q: "Where are you based, and do you work across time zones?",
    a: "Malaysia — Johor and Kuala Lumpur. We have shipped continuously for clients in Japan since 2020 and keep overlap hours for calls, with written updates every sprint so nothing depends on a time zone.",
  },
] as const;

export const techStack = [
  "Next.js", "React", "TypeScript", "Node.js", "Laravel", "Python",
  "Flutter", "React Native", "PostgreSQL", "MySQL", "MongoDB", "Redis",
  "Docker", "Proxmox", "AWS", "Cloudflare", "OpenAI", "PyTorch",
] as const;
