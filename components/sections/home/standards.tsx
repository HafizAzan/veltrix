"use client";

import { useRef } from "react";
import { SectionContainer } from "@/components/ui/section-container";
import { Heading, Lead, Small } from "@/components/ui/typography";
import { Card } from "@/components/ui/card";
import { homeStandards } from "@/data/home.data";
import { useStaggerScrollReveal } from "@/hooks/use-stagger-scroll-reveal";

export function HomeStandards() {
  const ref = useRef<HTMLDivElement>(null);
  useStaggerScrollReveal(ref, { stagger: 0.06, start: "top 88%" });

  return (
    <SectionContainer className="py-16 md:py-22">
      <div ref={ref} className="grid gap-12 lg:grid-cols-2 lg:items-start">
        <div data-stagger>
          <Heading as="h2">{homeStandards.title}</Heading>
          <Lead className="mt-4">{homeStandards.description}</Lead>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {homeStandards.features.map((f) => (
            <div key={f.title} data-stagger>
              <Card padding="md" className="bg-section-card/80">
                <p className="text-text-primary text-sm font-semibold">{f.title}</p>
                <Small className="text-text-muted mt-1">{f.subtitle}</Small>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
