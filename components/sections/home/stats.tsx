"use client";

import { useRef } from "react";
import { StatCard } from "@/components/common/stat-card";
import { SectionContainer } from "@/components/ui/section-container";
import { homeStats } from "@/data/home.data";
import { useStaggerScrollReveal } from "@/hooks/use-stagger-scroll-reveal";

export function HomeStats() {
  const ref = useRef<HTMLDivElement>(null);
  useStaggerScrollReveal(ref, { stagger: 0.12, start: "top 90%" });

  return (
    <SectionContainer className="py-14 md:py-20">
      <div ref={ref} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {homeStats.map((s) => (
          <div key={s.label} data-stagger>
            <StatCard value={s.value} label={s.label} />
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
