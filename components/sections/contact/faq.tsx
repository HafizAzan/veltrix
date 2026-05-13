import { FaqSection } from "@/components/common/faq-section";
import { contactFaqEyebrow, contactFaqItems, contactFaqTitle } from "@/data/contact.data";

export function ContactFaq() {
  return <FaqSection eyebrow={contactFaqEyebrow} title={contactFaqTitle} items={contactFaqItems} className="py-14 md:py-20" />;
}
