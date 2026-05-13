"use client";

import { useRef } from "react";
import { SectionContainer } from "@/components/ui/section-container";
import { ProjectCard } from "@/components/common/project-card";
import { workFeatured } from "@/data/work.data";
import { useStaggerScrollReveal } from "@/hooks/use-stagger-scroll-reveal";

export function WorkFeatured() {
  const ref = useRef<HTMLDivElement>(null);
  useStaggerScrollReveal(ref, { stagger: 0.15, start: "top 86%" });

  return (
    <SectionContainer className="space-y-6 py-10 md:py-14">
      <div ref={ref} className="flex flex-col gap-6">
        {workFeatured.map((p) => (
          <div key={p.title} data-stagger>
            <ProjectCard
              variant="featured"
              title={p.title}
              description={p.description}
              tags={p.tags}
              stats={p.stats}
              badge={p.badge}
            />
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
