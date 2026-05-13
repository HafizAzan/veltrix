export const servicesHero = {
  eyebrow: "Services",
  title: (
    <>
      Everything you need. <span className="text-accent-primary">Nothing </span> you don&apos;t.
    </>
  ),
  description: "Four core practices — each with senior ownership, clear deliverables, and pragmatic tooling.",
  stats: [
    { value: "4", label: "Core services" },
    { value: "15+", label: "Team" },
    { value: "120+", label: "Shipped projects" },
    { value: "24h", label: "First response" },
  ],
  subNav: [
    { label: "Custom software", href: "#custom-software" },
    { label: "UI/UX", href: "#ui-ux" },
    { label: "AI & automation", href: "#ai" },
    { label: "Cloud & DevOps", href: "#cloud" },
    { label: "View work", href: "/portfolio" },
  ],
};

export const servicesBlocks = [
  {
    id: "custom-software",
    title: "Custom software development",
    description: "Product-grade web apps, APIs, and integrations with tests, observability, and CI/CD from week one.",
    bullets: ["Domain-driven design workshops", "Incremental releases to staging/production", "Security review checklist"],
    imageSide: "right" as const,
  },
  {
    id: "ui-ux",
    title: "UI / UX design",
    description: "Research-backed interfaces, design systems in Figma, and handoff that engineers can implement without guesswork.",
    bullets: ["Design tokens & components", "Accessibility baselines (WCAG-oriented)", "Prototype → usability loop"],
    metrics: [
      { label: "Time-to-market", value: "−35% avg." },
      { label: "Starting engagement", value: "2-week sprint" },
    ],
    imageSide: "left" as const,
  },
  {
    id: "ai",
    title: "AI & automation",
    description: "LLM features where they make sense, plus classical automation for operations that need deterministic behavior.",
    bullets: ["Evaluation harnesses for prompts", "Guardrails & logging", "Batch + streaming pipelines"],
    imageSide: "right" as const,
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    description: "Terraform-first infrastructure, Kubernetes where warranted, and pragmatic managed services when not.",
    bullets: ["Zero-downtime deploy patterns", "Cost visibility dashboards", "Incident response playbooks"],
    imageSide: "left" as const,
  },
];

export const servicesAddOns = [
  { title: "Web to app", description: "Wrap progressive web experiences or ship companion mobile apps." },
  { title: "SEO audit", description: "Technical SEO review with prioritized fixes." },
  { title: "Performance pass", description: "Core Web Vitals, caching, and bundle analysis." },
  { title: "Security review", description: "Threat modeling and dependency audit." },
  { title: "Data migration", description: "Zero-downtime schema and pipeline moves." },
  { title: "Team training", description: "Workshops on your new codebase and ops runbooks." },
];

export const servicesComparison = {
  headers: ["Capability", "Freelancers", "Veltrix", "Big agencies"],
  rows: [
    { feature: "Dedicated squad", freelancers: "Varies", veltrix: "Yes", agencies: "Often" },
    { feature: "Fixed milestones", freelancers: "Sometimes", veltrix: "Yes", agencies: "Rare" },
    { feature: "Senior IC access", freelancers: "High", veltrix: "High", agencies: "Low" },
    { feature: "Price predictability", freelancers: "Mixed", veltrix: "High", agencies: "Lower" },
    { feature: "Time to start", freelancers: "Fast", veltrix: "Medium", agencies: "Slow" },
  ],
};

export const servicesTestimonials = [
  { quote: "Clear scopes and engineers who actually read our codebase before proposing changes.", author: "I. Malik", role: "Head of Product" },
  { quote: "They pushed back on bad ideas — politely — and saved us months.", author: "R. Siddiqui", role: "CEO" },
  { quote: "Docs and dashboards we still use a year later.", author: "K. Noor", role: "COO" },
];

export const servicesPricingPhilosophy = [
  { title: "Transparent estimates", description: "Ranges tighten after discovery; change requests are written, not whispered." },
  { title: "Outcome-linked phases", description: "Milestones tied to working software — not slide decks." },
  { title: "Fair rate cards", description: "Blended rates by role; no mystery fees for project management overhead." },
];

export const servicesFinalCta = {
  title: "Ready to get started?",
  description: "Discovery call or a written quote — your choice.",
  primary: { label: "Book a discovery call", href: "/contact" },
  secondary: { label: "Get a quote", href: "/contact" },
};
