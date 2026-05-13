import { SectionContainer } from "@/components/ui/section-container";
import { Badge } from "@/components/ui/badge";
import { Heading, Body, Small } from "@/components/ui/typography";
import { Card } from "@/components/ui/card";
import { formatDate } from "@/lib/helpers";
import { termsHero } from "@/data/terms.data";

export function TermsHero() {
  return (
    <SectionContainer className="py-14 md:py-20" size="narrow">
      <Badge variant="outline" className="mb-4">
        {termsHero.badge}
      </Badge>
      <Heading as="h1" className="text-4xl sm:text-5xl">
        {termsHero.title}
      </Heading>
      <Small className="text-text-muted mt-3">Last updated {formatDate(termsHero.updated)}</Small>
      <Body className="mt-6">{termsHero.intro}</Body>
      <Card className="border-accent-primary/30 bg-accent-primary/10 mt-6" padding="md">
        <Body className="text-sm">{termsHero.alert}</Body>
      </Card>
    </SectionContainer>
  );
}
