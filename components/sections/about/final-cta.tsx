import { CtaBanner } from "@/components/common/cta-banner";
import { SectionContainer } from "@/components/ui/section-container";
import { aboutFinalCta } from "@/data/about.data";

export function AboutFinalCta() {
  return (
    <SectionContainer className="pb-20">
      <CtaBanner
        variant="accent"
        title={aboutFinalCta.title}
        description={aboutFinalCta.description}
        primary={{ label: aboutFinalCta.primary.label, href: aboutFinalCta.primary.href }}
        secondary={{ label: aboutFinalCta.secondary.label, href: aboutFinalCta.secondary.href }}
      />
    </SectionContainer>
  );
}
