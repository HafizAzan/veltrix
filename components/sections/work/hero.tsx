"use client";

import { useRef } from "react";
import { SectionContainer } from "@/components/ui/section-container";
import { Badge } from "@/components/ui/badge";
import { Lead } from "@/components/ui/typography";
import { workHero, workFilters } from "@/data/work.data";
import { useHeroEntrance } from "@/hooks/use-hero-entrance";

export function WorkHero() {
  const rootRef = useRef<HTMLDivElement>(null);
  useHeroEntrance(rootRef, { stagger: 0.08 });

  return (
    <SectionContainer className="relative overflow-hidden py-14 md:py-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,200,150,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(0,200,150,0.2) 1px, transparent 1px)`,
          backgroundSize: "44px 44px",
        }}
        aria-hidden
      />
      <div ref={rootRef} className="relative mx-auto max-w-4xl text-center">
        <div data-hero-item>
          <Badge variant="muted" className="mb-5">
            {workHero.eyebrow}
          </Badge>
        </div>
        <div data-hero-item>
          <h1 className="font-heading text-text-primary text-4xl leading-[1.1] font-extrabold tracking-tight sm:text-5xl">{workHero.title}</h1>
        </div>
        <div data-hero-item>
          <Lead className="mx-auto mt-5 max-w-2xl">{workHero.description}</Lead>
        </div>
        <div data-hero-item className="mt-8 flex flex-wrap justify-center gap-2">
          {workFilters.map((f) => (
            <span
              key={f}
              className="border-border-medium text-text-secondary font-body rounded-full border px-3 py-1 text-xs font-medium tracking-wide uppercase"
            >
              {f}
            </span>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
