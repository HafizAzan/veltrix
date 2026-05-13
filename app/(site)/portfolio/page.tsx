import type { Metadata } from "next";
import { WorkHero } from "@/components/sections/work/hero";
import { WorkFeatured } from "@/components/sections/work/featured";
import { WorkIndustries } from "@/components/sections/work/industries";
import { WorkGrid } from "@/components/sections/work/grid";
import { WorkProcess } from "@/components/sections/work/process";
import { WorkTestimonials } from "@/components/sections/work/testimonials";
import { WorkFinalCta } from "@/components/sections/work/final-cta";

export const metadata: Metadata = {
  title: "Work — Veltrix Software",
  description: "Selected case studies and delivery patterns across industries.",
};

export default function PortfolioPage() {
  return (
    <>
      <WorkHero />
      <WorkFeatured />
      <WorkIndustries />
      <WorkGrid />
      <WorkProcess />
      <WorkTestimonials />
      <WorkFinalCta />
    </>
  );
}
