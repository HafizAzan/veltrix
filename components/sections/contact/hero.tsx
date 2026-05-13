import { SectionContainer } from "@/components/ui/section-container";
import { Badge } from "@/components/ui/badge";
import { Lead, Body } from "@/components/ui/typography";
import { contactHero } from "@/data/contact.data";

export function ContactHero() {
  return (
    <SectionContainer className="py-14 md:py-20">
      <div className="mx-auto max-w-4xl text-center">
        <Badge variant="outline" className="mb-6">
          {contactHero.badge}
        </Badge>
        <h1 className="font-heading text-text-primary text-4xl leading-[1.1] font-extrabold tracking-tight sm:text-5xl md:text-6xl">{contactHero.title}</h1>
        <Lead className="mx-auto mt-5 max-w-2xl">{contactHero.description}</Lead>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {contactHero.highlights.map((h) => (
            <div key={h.label} className="border-border-subtle bg-section-card/60 rounded-xl border px-4 py-5">
              <p className="text-accent-primary font-heading text-2xl font-bold">{h.value}</p>
              <Body className="text-text-muted mt-1 text-xs tracking-wide uppercase">{h.label}</Body>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
