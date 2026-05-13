"use client";

import { useRef } from "react";
import { SectionHeader } from "@/components/common/section-header";
import { ProcessSteps } from "@/components/common/process-steps";
import { SectionContainer } from "@/components/ui/section-container";
import { homeProcess } from "@/data/home.data";
import { useStaggerScrollReveal } from "@/hooks/use-stagger-scroll-reveal";

export function HomeProcess() {
  const ref = useRef<HTMLDivElement>(null);
  useStaggerScrollReveal(ref, { stagger: 0.12, start: "top 88%" });

  return (
    <SectionContainer className="py-14 md:py-20">
      <div ref={ref}>
        <div data-stagger>
          <SectionHeader
            align="center"
            eyebrow="How we work"
            title="Clear process, zero surprises"
            description="Predictable rituals so stakeholders always know what is shipping next."
          />
        </div>
        <ProcessSteps items={homeProcess} variant="horizontal" className="mt-4" />
      </div>
    </SectionContainer>
  );
}
