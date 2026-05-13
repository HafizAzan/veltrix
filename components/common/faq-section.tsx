import { SectionHeader } from "@/components/common/section-header";
import { Accordion, type AccordionItemData } from "@/components/ui/accordion";
import { SectionContainer } from "@/components/ui/section-container";

export type FaqSectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  items: AccordionItemData[];
  className?: string;
};

export function FaqSection({ eyebrow, title, description, items, className }: FaqSectionProps) {
  return (
    <SectionContainer className={className}>
      <SectionHeader eyebrow={eyebrow} title={title} description={description} />
      <div className="grid gap-8 lg:grid-cols-2">
        <Accordion items={items.slice(0, Math.ceil(items.length / 2))} />
        <Accordion items={items.slice(Math.ceil(items.length / 2))} />
      </div>
    </SectionContainer>
  );
}
