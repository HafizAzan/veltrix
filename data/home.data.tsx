export type NavItem = { label: string; href: string };

export type StatItem = { value: string; label: string };

export const homeHero = {
  eyebrow: "Software agency",
  title: (
    <>
      We build software that <span className="text-accent-primary">scales</span> your business.
    </>
  ),
  description:
    "End-to-end product engineering — from discovery to launch — with clear communication, measurable outcomes, and infrastructure that survives real traffic.",
  primaryCta: { label: "Book a free strategy call", href: "/contact" },
  secondaryCta: { label: "Learn more", href: "/services" },
};

export const homeTechStrip = [
  "React",
  "Next.js",
  "Vue.js",
  "Nuxt",
  "Angular",
  "NestJS",
  "Express",
  "Node.js",
  "TypeScript",
  "JavaScript ES6+",
  "GSAP",
  "Framer Motion",
  "Firebase",
  "Supabase",
  "MongoDB",
  "PostgreSQL",
  "Prisma ORM",
  "Drizzle ORM",
  "Redis",
  "Docker",
  "Kubernetes",
  "Terraform",
  "AWS",
  "GCP",
  "Azure",
  "Vercel",
  "Netlify",
  "Cloudflare",
  "GraphQL",
  "REST APIs",
  "tRPC",
  "Zod",
  "TanStack Query",
  "Redux Toolkit",
  "Zustand",
  "Tailwind CSS",
  "Sass",
  "Storybook",
  "Jest",
  "Vitest",
  "Playwright",
  "Cypress",
  "ESLint",
  "Prettier",
  "GitHub Actions",
  "GitLab CI",
  "Jenkins",
  "Nginx",
  "Webpack",
  "Vite",
  "Turborepo",
  "pnpm",
  "Yarn",
  "npm",
  "Electron",
  "React Native",
  "Expo",
  "Swift",
  "Kotlin",
  "Flutter",
  "Dart",
  "Python",
  "FastAPI",
  "Django",
  "Go",
  "Rust",
  "C# / .NET",
  "Java",
  "Spring Boot",
  "Kafka",
] as const;

export const homeStats: StatItem[] = [
  { value: "120+", label: "Projects delivered" },
  { value: "98%", label: "Retention rate" },
  { value: "$4M+", label: "Client outcomes" },
  { value: "15+", label: "Engineers" },
];

export const homeServices = [
  {
    title: "Custom software",
    tag: "Engineering",
    description: "Web platforms, APIs, and internal tools built for reliability and long-term maintainability.",
    icon: "code",
  },
  {
    title: "Product design",
    tag: "Design",
    description: "UX flows, design systems, and prototypes that align stakeholders before a single line of production code.",
    icon: "layout",
  },
  {
    title: "AI & automation",
    tag: "Intelligence",
    description: "Practical ML integrations, workflow automation, and monitoring — focused on ROI, not hype.",
    icon: "sparkles",
  },
  {
    title: "Cloud & DevOps",
    tag: "Platform",
    description: "CI/CD, observability, and secure cloud foundations on AWS and modern Kubernetes stacks.",
    icon: "cloud",
  },
];

export const homeProcess = [
  { title: "Discovery", description: "We map goals, constraints, and success metrics with your team in focused workshops." },
  { title: "Proposal", description: "You receive a clear scope, timeline, and pricing model — fixed or milestone-based." },
  { title: "Build", description: "Weekly demos, documented decisions, and incremental releases to staging and production." },
  { title: "Launch", description: "Hardening, handover, and optional ongoing support so your product keeps improving." },
];

export const homePortfolioPreview = {
  eyebrow: "Selected work",
  title: "Products that shipped and stayed online",
  description: "A few representative engagements — names anonymized where required under NDA.",
  viewMoreHref: "/portfolio",
  projects: [
    {
      variant: "featured" as const,
      title: "ShopMatrix",
      description: "High-traffic commerce stack with inventory sync, promotions engine, and admin analytics.",
      tags: ["E-commerce", "Web", "SaaS"],
      stats: [
        { label: "Conversion lift", value: "65%" },
        { label: "Uptime", value: "99.95%" },
        { label: "Markets", value: "12" },
      ],
      badge: "$1.2M raised",
    },
    {
      variant: "compact" as const,
      title: "FinEdge reporting",
      description: "Real-time risk dashboards for a fintech portfolio.",
      tags: ["Node", "React"],
      metric: "Latency −38%",
      badge: "Fintech",
    },
    {
      variant: "compact" as const,
      title: "CarePath triage",
      description: "Clinician workflow tools with audit trails and role-based access.",
      tags: ["Healthcare", "Web"],
      metric: "CSAT 4.8/5",
      badge: "Healthcare",
    },
  ],
};

export const homeTestimonials = {
  eyebrow: "Clients",
  title: "What teams say after launch",
  items: [
    {
      quote: "They behaved like an in-house team — sharp questions, fast iterations, and no surprises on invoices.",
      author: "A. Khan",
      role: "CTO, logistics startup",
    },
    {
      quote: "Our legacy monolith was untangled into services without stopping feature delivery. That alone was worth it.",
      author: "S. Ali",
      role: "VP Engineering",
    },
    {
      quote: "Design and engineering were aligned from day one. We went from idea to paying users in under four months.",
      author: "M. Raza",
      role: "Founder",
    },
  ],
};

export const homeStandards = {
  title: "Enterprise-grade standards",
  description: "Security, observability, and documentation are not add-ons — they are baked into how we ship.",
  features: [
    { title: "Fixed price options", subtitle: "When scope is clear" },
    { title: "Weekly demos", subtitle: "Transparent progress" },
    { title: "Code review", subtitle: "Every pull request" },
    { title: "Runbooks", subtitle: "Ops-ready handover" },
    { title: "SLA monitoring", subtitle: "Pager-friendly alerts" },
    { title: "NDA friendly", subtitle: "Your IP protected" },
  ],
};

export const homeFinalCta = {
  title: "Let's build something that actually works",
  description: "Tell us about your roadmap — we will reply with honest fit, timeline, and next steps.",
  primary: { label: "Book a strategy call", href: "/contact" },
  secondary: { label: "View services", href: "/services" },
};
