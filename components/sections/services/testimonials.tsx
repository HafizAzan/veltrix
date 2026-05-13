import { SectionContainer } from "@/components/ui/section-container";
import { Card } from "@/components/ui/card";
import { Body, Heading } from "@/components/ui/typography";
import { servicesTestimonials } from "@/data/services.data";

export function ServicesTestimonials() {
  return (
    <SectionContainer className="py-14 md:py-20">
      <Heading as="h2" className="text-center text-3xl">
        What our clients say
      </Heading>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {servicesTestimonials.map((t) => (
          <Card key={t.author}>
            <Body className="text-sm">“{t.quote}”</Body>
            <p className="text-text-primary mt-4 text-sm font-semibold">{t.author}</p>
            <p className="text-text-muted text-xs">{t.role}</p>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
}
