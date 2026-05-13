export const aboutHero = {
  eyebrow: "About Veltrix",
  title: (
    <>
      We are not just developers. We are your <span className="text-accent-primary">tech partners.</span>
    </>
  ),
  description:
    "Veltrix is a product engineering studio helping teams ship reliable software — from first prototype to scale-out infrastructure.",
};

export const aboutStory = {
  title: "Built from frustration. Grown from trust.",
  paragraphs: [
    "We started after seeing too many projects stall on vague specs, opaque agencies, and codebases nobody wanted to own.",
    "Today we work as an embedded partner: small senior squads, direct access to engineers, and delivery metrics you can audit.",
  ],
};

export const aboutTimeline = [
  { year: "2019", title: "Studio founded", description: "First consulting engagements and long-term retainers with two product companies." },
  { year: "2020", title: "Cloud practice", description: "Formalized DevOps offerings — Kubernetes, Terraform, and observability stacks." },
  { year: "2022", title: "Design + eng", description: "In-house product design paired with full-stack squads for faster discovery-to-build cycles." },
  { year: "2024", title: "Global clients", description: "Teams across PK, GCC, EU, and NA — remote-first with overlapping collaboration hours." },
];

export const aboutValues = [
  { title: "Velocity", description: "Ship in small batches. Measure. Adjust. Avoid big-bang releases that hide risk." },
  { title: "Integrity", description: "We say no to mis-scoped work and surface trade-offs early — even when it is uncomfortable." },
  { title: "Impact", description: "Features exist to move KPIs. If it does not help users or revenue, we challenge it." },
];

export const aboutTeam = [
  { initials: "HA", name: "Hafiz Azan", role: "Lead Engineer" },
  { initials: "SK", name: "Sara Khan", role: "Product Design" },
  { initials: "MR", name: "Moiz Raza", role: "Backend" },
  { initials: "FA", name: "Fatima A.", role: "DevOps" },
  { initials: "ZI", name: "Zaid I.", role: "Mobile" },
  { initials: "AN", name: "Ayesha N.", role: "Engineering Manager" },
  { initials: "TB", name: "Taha B.", role: "Frontend" },
  { initials: "RK", name: "Rehan K.", role: "ML Engineer" },
];

export const aboutCulture = {
  bullets: [
    { title: "Async-first workflow", description: "Written RFCs, recorded demos, and searchable decisions — fewer meetings, more building." },
    { title: "Weekly engineering demos", description: "Stakeholders see working software, not slide decks." },
    { title: "Mentorship", description: "Senior engineers pair with client teams for knowledge transfer." },
  ],
  stackTags: ["Frontend", "Backend", "Mobile", "UI/UX", "Data", "Cloud"],
};

export const aboutStats: { value: string; label: string }[] = [
  { value: "120+", label: "Projects delivered" },
  { value: "98%", label: "Client satisfaction" },
  { value: "$4M+", label: "Outcomes influenced" },
  { value: "24h", label: "Avg. first response" },
  { value: "15+", label: "Team members" },
  { value: "4", label: "Core practices" },
];

export const aboutPartners = ["Upwork Elite", "Clutch top rated", "Product Hunt", "Global client base"];

export const aboutFinalCta = {
  title: "Ready to work with a team that actually delivers?",
  description: "Book a no-pressure call or browse representative engagements first.",
  primary: { label: "Book a free call", href: "/contact" },
  secondary: { label: "See our work", href: "/portfolio" },
};
