import type { Metadata } from "next";
import { AboutHero } from "@/components/sections/about/hero";
import { AboutHistory } from "@/components/sections/about/history";
import { AboutValues } from "@/components/sections/about/values";
import { AboutTeam } from "@/components/sections/about/team";
import { AboutCulture } from "@/components/sections/about/culture";
import { AboutStats } from "@/components/sections/about/stats";
import { AboutPartners } from "@/components/sections/about/partners";
import { AboutFinalCta } from "@/components/sections/about/final-cta";

export const metadata: Metadata = {
  title: "About — Veltrix Software",
  description: "Our story, values, and how we partner with product teams.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutHistory />
      <AboutValues />
      <AboutTeam />
      <AboutCulture />
      <AboutStats />
      <AboutPartners />
      <AboutFinalCta />
    </>
  );
}
