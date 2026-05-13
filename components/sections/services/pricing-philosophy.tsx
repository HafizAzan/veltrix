import { SectionContainer } from "@/components/ui/section-container";
import { Card } from "@/components/ui/card";
import { Heading, Body } from "@/components/ui/typography";
import { servicesPricingPhilosophy } from "@/data/services.data";

export function ServicesPricingPhilosophy() {
  return (
    <SectionContainer className="py-14 md:py-20">
      <div className="grid gap-6 md:grid-cols-3">
        {servicesPricingPhilosophy.map((p) => (
          <Card key={p.title}>
            <Heading as="h3" className="text-lg">
              {p.title}
            </Heading>
            <Body className="mt-3 text-sm">{p.description}</Body>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
}
