import type { Metadata } from "next";
import { ContactHero } from "@/components/sections/contact/hero";
import { ContactMain } from "@/components/sections/contact/contact-main";
import { ContactFaq } from "@/components/sections/contact/faq";
import { ContactProcess } from "@/components/sections/contact/process";
import { ContactBottomCta } from "@/components/sections/contact/bottom-cta";

export const metadata: Metadata = {
  title: "Contact — Veltrix Software",
  description: "Start a project, book a call, or ask a technical question.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactMain />
      <ContactFaq />
      <ContactProcess />
      <ContactBottomCta />
    </>
  );
}
