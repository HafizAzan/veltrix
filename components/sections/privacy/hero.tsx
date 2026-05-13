import { SectionContainer } from "@/components/ui/section-container";
import { Badge } from "@/components/ui/badge";
import { Heading, Body, Small } from "@/components/ui/typography";
import { formatDate } from "@/lib/helpers";
import { privacyHero } from "@/data/privacy.data";

export function PrivacyHero() {
  return (
    <SectionContainer className="py-14 md:py-20" size="narrow">
      <Badge variant="outline" className="mb-4">
        {privacyHero.badge}
      </Badge>
      <Heading as="h1" className="text-4xl sm:text-5xl">
        {privacyHero.title}
      </Heading>
      <Body className="mt-4">{privacyHero.description}</Body>
      <Small className="text-text-muted mt-6 flex items-center gap-2">
        <span aria-hidden>📅</span>
        Last updated {formatDate(privacyHero.updated)}
      </Small>
    </SectionContainer>
  );
}
