import { CtaBanner } from "@/components/common/cta-banner";
import { SectionContainer } from "@/components/ui/section-container";
import { workFinalCta } from "@/data/work.data";

export function WorkFinalCta() {
  return (
    <SectionContainer className="pb-20">
      <CtaBanner
        variant="accent"
        title={workFinalCta.title}
        description={workFinalCta.description}
        primary={{ label: workFinalCta.primary.label, href: workFinalCta.primary.href }}
        secondary={{ label: workFinalCta.secondary.label, href: workFinalCta.secondary.href }}
      />
    </SectionContainer>
  );
}
