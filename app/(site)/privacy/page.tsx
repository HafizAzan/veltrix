import type { Metadata } from "next";
import { SectionContainer } from "@/components/ui/section-container";
import { LegalDocLayout } from "@/components/common/legal-doc-layout";
import { PrivacyHero } from "@/components/sections/privacy/hero";
import { PrivacyContent } from "@/components/sections/privacy/content";
import { privacyNav } from "@/data/privacy.data";

export const metadata: Metadata = {
  title: "Privacy Policy — Veltrix Software",
  description: "How we collect, use, and protect personal data.",
};

export default function PrivacyPage() {
  return (
    <>
      <PrivacyHero />
      <SectionContainer className="pb-24">
        <LegalDocLayout nav={privacyNav}>
          <PrivacyContent />
        </LegalDocLayout>
      </SectionContainer>
    </>
  );
}
