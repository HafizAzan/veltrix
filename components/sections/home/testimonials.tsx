"use client";

import { useRef } from "react";
import { SectionContainer } from "@/components/ui/section-container";
import { Card } from "@/components/ui/card";
import { Body, Eyebrow, Heading, Small } from "@/components/ui/typography";
import { homeTestimonials } from "@/data/home.data";
import { useStaggerScrollReveal } from "@/hooks/use-stagger-scroll-reveal";

export function HomeTestimonials() {
  const ref = useRef<HTMLDivElement>(null);
  useStaggerScrollReveal(ref, { stagger: 0.14, start: "top 88%" });

  return (
    <SectionContainer className="bg-bg-light py-16 md:py-22">
      <div ref={ref}>
        <div className="mx-auto mb-12 max-w-3xl text-center" data-stagger>
          <Eyebrow className="text-emerald-600">{homeTestimonials.eyebrow}</Eyebrow>
          <Heading as="h2" className="text-text-dark mt-3">
            {homeTestimonials.title}
          </Heading>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {homeTestimonials.items.map((t) => (
            <div key={t.author} data-stagger>
              <Card className="border-neutral-200 bg-white text-text-dark shadow-sm" padding="lg">
                <p className="text-emerald-600 mb-3 text-lg tracking-tight">★★★★★</p>
                <Body className="text-neutral-700 text-sm">“{t.quote}”</Body>
                <div className="mt-4 border-t border-neutral-100 pt-4">
                  <p className="text-sm font-semibold">{t.author}</p>
                  <Small className="text-neutral-500">{t.role}</Small>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
