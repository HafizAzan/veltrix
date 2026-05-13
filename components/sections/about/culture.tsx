import { SectionContainer } from "@/components/ui/section-container";
import { Heading, Body, Small } from "@/components/ui/typography";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { aboutCulture } from "@/data/about.data";

export function AboutCulture() {
  return (
    <SectionContainer className="py-14 md:py-20">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <Heading as="h2">The Veltrix culture</Heading>
          <ul className="mt-8 space-y-6">
            {aboutCulture.bullets.map((b) => (
              <li key={b.title}>
                <p className="text-text-primary font-semibold">{b.title}</p>
                <Body className="mt-1 text-sm">{b.description}</Body>
              </li>
            ))}
          </ul>
        </div>
        <Card padding="lg">
          <Small className="text-accent-primary tracking-widest uppercase">Our stack</Small>
          <div className="mt-4 flex flex-wrap gap-2">
            {aboutCulture.stackTags.map((t) => (
              <Badge key={t} variant="muted" className="normal-case">
                {t}
              </Badge>
            ))}
          </div>
          <div className="border-border-subtle bg-bg-secondary/50 mt-8 flex aspect-video items-center justify-center rounded-lg border">
            <span className="text-text-muted text-sm">Stack diagram placeholder</span>
          </div>
        </Card>
      </div>
    </SectionContainer>
  );
}
