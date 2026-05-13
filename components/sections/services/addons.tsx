import { SectionHeader } from "@/components/common/section-header";
import { SectionContainer } from "@/components/ui/section-container";
import { Card } from "@/components/ui/card";
import { Body, Heading } from "@/components/ui/typography";
import { servicesAddOns } from "@/data/services.data";

export function ServicesAddOns() {
  return (
    <SectionContainer className="py-14 md:py-20">
      <SectionHeader align="center" eyebrow="Add-ons" title="Extend any engagement" description="Optional modules you can bolt onto a core engagement." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {servicesAddOns.map((a) => (
          <Card key={a.title}>
            <Heading as="h3" className="text-lg">
              {a.title}
            </Heading>
            <Body className="mt-2 text-sm">{a.description}</Body>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
}
