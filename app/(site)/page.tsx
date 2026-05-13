import type { Metadata } from "next";
import { HomeHero } from "@/components/sections/home/hero";
import { HomeTechStack } from "@/components/sections/home/tech-stack";
import { HomeStats } from "@/components/sections/home/stats";
import { HomeServices } from "@/components/sections/home/services";
import { HomeProcess } from "@/components/sections/home/process";
import { HomePortfolio } from "@/components/sections/home/portfolio";
import { HomeTestimonials } from "@/components/sections/home/testimonials";
import { HomeStandards } from "@/components/sections/home/standards";
import { HomeFinalCta } from "@/components/sections/home/final-cta";

export const metadata: Metadata = {
  title: "Home — Veltrix Software",
  description: "Software engineering, design, and cloud delivery for teams that need predictable outcomes.",
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeTechStack />
      <HomeStats />
      <HomeServices />
      <HomeProcess />
      <HomePortfolio />
      <HomeTestimonials />
      <HomeStandards />
      <HomeFinalCta />
    </>
  );
}
