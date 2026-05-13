"use client";

import { useRef } from "react";
import { SectionHeader } from "@/components/common/section-header";
import { ProjectCard } from "@/components/common/project-card";
import { SectionContainer } from "@/components/ui/section-container";
import { ButtonLink } from "@/components/ui/button-link";
import { homePortfolioPreview } from "@/data/home.data";
import { useStaggerScrollReveal } from "@/hooks/use-stagger-scroll-reveal";

export function HomePortfolio() {
  const ref = useRef<HTMLDivElement>(null);
  useStaggerScrollReveal(ref, { stagger: 0.14, start: "top 86%" });

  const featured = homePortfolioPreview.projects[0];
  const rest = homePortfolioPreview.projects.slice(1);

  return (
    <SectionContainer className="py-14 md:py-20">
      <div ref={ref}>
        <div data-stagger>
          <SectionHeader
            eyebrow={homePortfolioPreview.eyebrow}
            title={homePortfolioPreview.title}
            description={homePortfolioPreview.description}
            action={
              <ButtonLink href={homePortfolioPreview.viewMoreHref} variant="ghost" className="text-accent-primary hover:text-accent-hover">
                View more →
              </ButtonLink>
            }
          />
        </div>
        {featured && featured.variant === "featured" ? (
          <div data-stagger className="mb-6">
            <ProjectCard
              variant="featured"
              title={featured.title}
              description={featured.description}
              tags={featured.tags}
              stats={featured.stats}
              badge={featured.badge}
            />
          </div>
        ) : null}
        <div className="grid gap-6 md:grid-cols-2">
          {rest.map((p) => (
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
