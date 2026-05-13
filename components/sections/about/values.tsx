"use client";

import { useRef } from "react";
import { SectionHeader } from "@/components/common/section-header";
import { ValueCard } from "@/components/common/value-card";
import { SectionContainer } from "@/components/ui/section-container";
import { aboutValues } from "@/data/about.data";
import { useStaggerScrollReveal } from "@/hooks/use-stagger-scroll-reveal";

export function AboutValues() {
  const ref = useRef<HTMLDivElement>(null);
  useStaggerScrollReveal(ref, { stagger: 0.12, start: "top 88%" });

  return (
    <SectionContainer className="py-14 md:py-20">
      <div ref={ref}>
        <div data-stagger>
          <SectionHeader align="center" title="Our values are not wall decor." description="Principles we hire and fire against — not marketing copy." />
        </div>
        <div className="mt-4 grid gap-6 md:grid-cols-3">
          {aboutValues.map((v) => (
            <div key={v.title} data-stagger>
              <ValueCard title={v.title} description={v.description} />
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
