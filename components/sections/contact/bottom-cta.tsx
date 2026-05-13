import { CtaBanner } from "@/components/common/cta-banner";
import { SectionContainer } from "@/components/ui/section-container";
import { contactBottomCta } from "@/data/contact.data";

export function ContactBottomCta() {
  return (
    <SectionContainer className="pb-20">
      <CtaBanner
        variant="accent"
        title={contactBottomCta.title}
        description={contactBottomCta.description}
        primary={{ label: contactBottomCta.primary.label, href: contactBottomCta.primary.href }}
      />
    </SectionContainer>
  );
}
