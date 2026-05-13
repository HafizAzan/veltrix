"use client";

import { useRef } from "react";
import { SectionHeader } from "@/components/common/section-header";
import { ProcessSteps } from "@/components/common/process-steps";
import { SectionContainer } from "@/components/ui/section-container";
import { contactProcessSteps } from "@/data/contact.data";
import { useStaggerScrollReveal } from "@/hooks/use-stagger-scroll-reveal";

export function ContactProcess() {
  const ref = useRef<HTMLDivElement>(null);
  useStaggerScrollReveal(ref, { stagger: 0.12, start: "top 88%" });

  return (
    <SectionContainer className="py-14 md:py-20">
      <div ref={ref}>
        <div data-stagger>
          <SectionHeader align="center" title="What happens after you submit?" description="Straightforward — no black-box sales funnel." />
        </div>
        <ProcessSteps items={contactProcessSteps} variant="vertical" className="mx-auto max-w-xl" />
      </div>
    </SectionContainer>
  );
}
