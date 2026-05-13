import type { Metadata } from "next";
import { SectionContainer } from "@/components/ui/section-container";
import { LegalDocLayout } from "@/components/common/legal-doc-layout";
import { TermsHero } from "@/components/sections/terms/hero";
import { TermsContent } from "@/components/sections/terms/content";
import { termsNav } from "@/data/terms.data";

export const metadata: Metadata = {
  title: "Terms of Service — Veltrix Software",
  description: "Legal terms for using Veltrix websites and professional services.",
};

export default function TermsPage() {
  return (
    <>
      <TermsHero />
      <SectionContainer className="pb-24">
        <LegalDocLayout nav={termsNav}>
          <TermsContent />
        </LegalDocLayout>
      </SectionContainer>
    </>
  );
}
