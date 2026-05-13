import { SectionHeader } from "@/components/common/section-header";
import { ProcessSteps } from "@/components/common/process-steps";
import { SectionContainer } from "@/components/ui/section-container";
import { workProcess } from "@/data/work.data";

export function WorkProcess() {
  return (
    <SectionContainer className="py-14 md:py-20">
      <SectionHeader align="center" eyebrow="Delivery" title="How engagements run" description="Predictable phases — tuned per client — with documentation at every step." />
      <ProcessSteps items={workProcess} variant="horizontal" />
    </SectionContainer>
  );
}
