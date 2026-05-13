"use client";

import { useRef } from "react";
import { CtaBanner } from "@/components/common/cta-banner";
import { SectionContainer } from "@/components/ui/section-container";
import { homeFinalCta } from "@/data/home.data";
import { useStaggerScrollReveal } from "@/hooks/use-stagger-scroll-reveal";

export function HomeFinalCta() {
  const ref = useRef<HTMLDivElement>(null);
  useStaggerScrollReveal(ref, { selector: "[data-stagger]", stagger: 0, start: "top 92%", duration: 0.75, y: 20 });

  return (
    <SectionContainer className="pb-20">
      <div ref={ref} data-stagger>
        <CtaBanner
          variant="accent"
          title={homeFinalCta.title}
          description={homeFinalCta.description}
          primary={{ label: homeFinalCta.primary.label, href: homeFinalCta.primary.href }}
          secondary={{ label: homeFinalCta.secondary.label, href: homeFinalCta.secondary.href }}
        />
      </div>
    </SectionContainer>
  );
}
