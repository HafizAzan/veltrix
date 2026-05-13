"use client";

import { useRef } from "react";
import { SectionHeader } from "@/components/common/section-header";
import { SectionContainer } from "@/components/ui/section-container";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Body, Heading } from "@/components/ui/typography";
import { homeServices } from "@/data/home.data";
import { useStaggerScrollReveal } from "@/hooks/use-stagger-scroll-reveal";

export function HomeServices() {
  const ref = useRef<HTMLDivElement>(null);
  useStaggerScrollReveal(ref, { stagger: 0.1, start: "top 86%" });

  return (
    <SectionContainer className="py-14 md:py-20">
      <div ref={ref}>
        <div data-stagger>
          <SectionHeader
            align="center"
            eyebrow="Capabilities"
            title="Services that drive real growth"
            description="Focused offerings — each led by senior engineers and designers who stay accountable through delivery."
          />
        </div>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          {homeServices.map((s) => (
            <div key={s.title} data-stagger>
              <Card className="flex h-full flex-col gap-3" padding="lg">
                <Badge variant="outline" className="w-fit normal-case">
                  {s.tag}
                </Badge>
                <Heading as="h3" className="text-xl">
                  {s.title}
                </Heading>
                <Body className="text-sm">{s.description}</Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
