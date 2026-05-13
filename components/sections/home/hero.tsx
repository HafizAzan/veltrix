"use client";

import { useRef } from "react";
import { SectionContainer } from "@/components/ui/section-container";
import { Badge } from "@/components/ui/badge";
import { Lead } from "@/components/ui/typography";
import { ButtonLink } from "@/components/ui/button-link";
import { homeHero } from "@/data/home.data";
import { useHeroEntrance } from "@/hooks/use-hero-entrance";

export function HomeHero() {
  const rootRef = useRef<HTMLDivElement>(null);
  useHeroEntrance(rootRef, { stagger: 0.11, y: 36 });

  return (
    <SectionContainer className="relative overflow-hidden py-16 md:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,200,150,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(0,200,150,0.2) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
        aria-hidden
      />
      <div ref={rootRef} className="relative mx-auto max-w-4xl text-center">
        <div data-hero-item>
          <Badge variant="muted" className="mb-6">
            {homeHero.eyebrow}
          </Badge>
        </div>
        <div data-hero-item>
          <h1 className="font-heading text-text-primary text-4xl leading-[1.1] font-extrabold tracking-tight sm:text-5xl md:text-6xl">{homeHero.title}</h1>
        </div>
        <div data-hero-item>
          <Lead className="mx-auto mt-6 max-w-2xl">{homeHero.description}</Lead>
        </div>
        <div data-hero-item className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <ButtonLink href={homeHero.primaryCta.href} size="lg">
            {homeHero.primaryCta.label}
          </ButtonLink>
          <ButtonLink href={homeHero.secondaryCta.href} variant="outline" size="lg">
            {homeHero.secondaryCta.label}
          </ButtonLink>
        </div>
      </div>
    </SectionContainer>
  );
}
