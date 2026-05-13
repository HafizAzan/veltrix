import type { Metadata } from "next";
import { ServicesHero } from "@/components/sections/services/hero";
import { ServicesBlocks } from "@/components/sections/services/blocks";
import { ServicesAddOns } from "@/components/sections/services/addons";
import { ServicesComparison } from "@/components/sections/services/comparison";
import { ServicesTestimonials } from "@/components/sections/services/testimonials";
import { ServicesPricingPhilosophy } from "@/components/sections/services/pricing-philosophy";
import { ServicesFinalCta } from "@/components/sections/services/final-cta";

export const metadata: Metadata = {
  title: "Services — Veltrix Software",
  description: "Custom software, design, AI automation, and cloud engineering.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesBlocks />
      <ServicesAddOns />
      <ServicesComparison />
      <ServicesTestimonials />
      <ServicesPricingPhilosophy />
      <ServicesFinalCta />
    </>
  );
}
