"use client";

import { useRef } from "react";
import { SectionHeader } from "@/components/common/section-header";
import { ProjectCard } from "@/components/common/project-card";
import { SectionContainer } from "@/components/ui/section-container";
import { workGrid } from "@/data/work.data";
import { useStaggerScrollReveal } from "@/hooks/use-stagger-scroll-reveal";

export function WorkGrid() {
  const ref = useRef<HTMLDivElement>(null);
  useStaggerScrollReveal(ref, { stagger: 0.08, start: "top 88%" });

  return (
    <SectionContainer className="py-14 md:py-20">
      <div ref={ref}>
        <div data-stagger>
          <SectionHeader eyebrow="Case studies" title="More shipped work" description="Compact snapshots — ask for deeper portfolios under NDA." />
        </div>
        <div className="mt-4 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {workGrid.map((p) => (
            <div key={p.title} data-stagger>
              <ProjectCard
                variant="compact"
                title={p.title}
                description={p.description}
                tags={p.tags}
                metric={p.metric}
                badge={p.badge}
              />
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
