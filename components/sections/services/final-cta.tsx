import { CtaBanner } from "@/components/common/cta-banner";
import { SectionContainer } from "@/components/ui/section-container";
import { servicesFinalCta } from "@/data/services.data";

export function ServicesFinalCta() {
  return (
    <SectionContainer className="pb-20">
      <CtaBanner
        variant="accent"
        title={servicesFinalCta.title}
        description={servicesFinalCta.description}
        primary={{ label: servicesFinalCta.primary.label, href: servicesFinalCta.primary.href }}
        secondary={{ label: servicesFinalCta.secondary.label, href: servicesFinalCta.secondary.href }}
      />
    </SectionContainer>
  );
}
