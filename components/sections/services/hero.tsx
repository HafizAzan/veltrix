"use client";

import { useRef } from "react";
import Link from "next/link";
import { SectionContainer } from "@/components/ui/section-container";
import { Badge } from "@/components/ui/badge";
import { Lead } from "@/components/ui/typography";
import { StatCard } from "@/components/common/stat-card";
import { servicesHero } from "@/data/services.data";
import { cn } from "@/lib/utils";
import { useHeroEntrance } from "@/hooks/use-hero-entrance";
import { useStaggerScrollReveal } from "@/hooks/use-stagger-scroll-reveal";

export function ServicesHero() {
  const introRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);

  useHeroEntrance(introRef, { stagger: 0.09 });
  useStaggerScrollReveal(statsRef, { stagger: 0.1, start: "top 90%" });
  useStaggerScrollReveal(navRef, { stagger: 0.05, start: "top 92%" });

  return (
    <SectionContainer className="py-14 md:py-20">
      <div ref={introRef} className="mx-auto max-w-4xl text-center">
        <div data-hero-item>
          <Badge variant="muted" className="mb-5">
            {servicesHero.eyebrow}
          </Badge>
        </div>
        <div data-hero-item>
          <h1 className="font-heading text-text-primary text-4xl leading-[1.1] font-extrabold tracking-tight sm:text-5xl md:text-6xl">{servicesHero.title}</h1>
        </div>
        <div data-hero-item>
          <Lead className="mx-auto mt-5 max-w-2xl">{servicesHero.description}</Lead>
        </div>
      </div>
      <div ref={statsRef} className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {servicesHero.stats.map((s) => (
          <div key={s.label} data-stagger>
            <StatCard value={s.value} label={s.label} />
          </div>
        ))}
      </div>
      <nav ref={navRef} aria-label="On this page" className="border-border-subtle mt-10 flex flex-wrap items-center justify-center gap-2 border-t pt-8">
        {servicesHero.subNav.map((item) => (
          <div key={item.href} data-stagger>
            <Link
              href={item.href}
              className={cn(
                "font-body rounded-full border px-4 py-2 text-xs font-medium tracking-wide uppercase transition",
                item.label === "View work"
                  ? "border-accent-primary text-accent-primary hover:bg-accent-primary/10"
                  : "border-border-medium text-text-secondary hover:border-accent-primary hover:text-accent-primary",
              )}
            >
              {item.label}
            </Link>
          </div>
        ))}
      </nav>
    </SectionContainer>
  );
}
