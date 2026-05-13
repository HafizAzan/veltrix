import { SectionContainer } from "@/components/ui/section-container";
import { Card } from "@/components/ui/card";
import { Body, Eyebrow, Heading, Small } from "@/components/ui/typography";
import { workTestimonials } from "@/data/work.data";

export function WorkTestimonials() {
  return (
    <SectionContainer className="py-14 md:py-20">
      <Eyebrow className="text-center">Testimonials</Eyebrow>
      <Heading as="h2" className="mx-auto mt-2 max-w-2xl text-center text-3xl">
        Proof from recent engagements
      </Heading>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {workTestimonials.map((t) => (
          <Card key={t.author} padding="lg">
            <Body className="text-base">“{t.quote}”</Body>
            <div className="mt-4">
              <p className="text-text-primary text-sm font-semibold">{t.author}</p>
              <Small className="text-text-muted">{t.role}</Small>
            </div>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
}
