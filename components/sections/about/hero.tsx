"use client";

import { useRef } from "react";
import { SectionContainer } from "@/components/ui/section-container";
import { Badge } from "@/components/ui/badge";
import { Lead } from "@/components/ui/typography";
import { aboutHero } from "@/data/about.data";
import { useHeroEntrance } from "@/hooks/use-hero-entrance";

export function AboutHero() {
  const rootRef = useRef<HTMLDivElement>(null);
  useHeroEntrance(rootRef, { stagger: 0.1 });

  return (
    <SectionContainer className="relative overflow-hidden py-16 md:py-22">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,200,150,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,200,150,0.25) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
        aria-hidden
      />
      <div ref={rootRef} className="relative mx-auto max-w-4xl text-center">
        <div data-hero-item>
          <Badge variant="muted" className="mb-6">
            {aboutHero.eyebrow}
          </Badge>
        </div>
        <div data-hero-item>
          <h1 className="font-heading text-text-primary text-4xl leading-[1.1] font-extrabold tracking-tight sm:text-5xl md:text-6xl">{aboutHero.title}</h1>
        </div>
        <div data-hero-item>
          <Lead className="mx-auto mt-6 max-w-2xl">{aboutHero.description}</Lead>
        </div>
      </div>
    </SectionContainer>
  );
}
