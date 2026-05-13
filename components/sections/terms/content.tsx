import { Heading, Body } from "@/components/ui/typography";
import { Card } from "@/components/ui/card";
import { termsContactBanner, termsDisputeSteps, termsPaymentCards, termsServicesGrid } from "@/data/terms.data";
import { ButtonLink } from "@/components/ui/button-link";

export function TermsContent() {
  return (
    <>
      <section id="agreement" className="scroll-mt-28 space-y-4">
        <Heading as="h2" className="text-2xl">
          1. Agreement
        </Heading>
        <Body className="text-sm">
          By accessing our website or signing a statement of work, you agree to these terms and any referenced policies (including privacy and
          acceptable use).
        </Body>
      </section>

      <section id="services" className="scroll-mt-28 space-y-4">
        <Heading as="h2" className="text-2xl">
          2. Our services
        </Heading>
        <div className="grid gap-4 sm:grid-cols-2">
          {termsServicesGrid.map((s) => (
            <Card key={s.title}>
              <Heading as="h3" className="text-accent-primary text-lg">
                {s.title}
              </Heading>
              <Body className="mt-2 text-sm">{s.description}</Body>
            </Card>
          ))}
        </div>
      </section>

      <section id="engagement" className="scroll-mt-28 space-y-4">
        <Heading as="h2" className="text-2xl">
          3. Project engagement
        </Heading>
        <Body className="text-sm">
          Work is performed under a written SOW. Change requests are documented with impact on timeline and cost before execution.
        </Body>
      </section>

      <section id="payment" className="scroll-mt-28 space-y-4">
        <Heading as="h2" className="text-2xl">
          4. Payment terms
        </Heading>
        <div className="grid gap-4 md:grid-cols-3">
          {termsPaymentCards.map((p) => (
            <Card key={p.title}>
              <p className="text-accent-primary font-heading text-3xl font-bold">{p.pct}</p>
              <Heading as="h3" className="mt-2 text-sm tracking-wide uppercase">
                {p.title}
              </Heading>
              <Body className="mt-2 text-sm">{p.description}</Body>
            </Card>
          ))}
        </div>
        <Card className="border-red-500/30 bg-red-500/5" padding="md">
          <Body className="text-sm text-red-200/90">Late payments may pause work and incur documented finance charges per SOW.</Body>
        </Card>
      </section>

      <section id="ip" className="scroll-mt-28 space-y-4">
        <Heading as="h2" className="text-2xl">
          5. Intellectual property
        </Heading>
        <Body className="text-sm">
          Deliverables ownership is defined in your SOW (typically client-owned upon payment). Pre-existing libraries and tools remain with their
          respective licensors.
        </Body>
      </section>

      <section id="confidentiality" className="scroll-mt-28 space-y-4">
        <Heading as="h2" className="text-2xl">
          6. Confidentiality
        </Heading>
        <Card className="border-accent-primary/40 bg-accent-primary/10" padding="md">
          <Heading as="h3" className="text-lg">
            Non-disclosure
          </Heading>
          <Body className="mt-2 text-sm">We sign mutual NDAs when projects require access to sensitive systems or unreleased strategy.</Body>
        </Card>
      </section>

      <section id="liability" className="scroll-mt-28 space-y-4">
        <Heading as="h2" className="text-2xl">
          7. Warranties & liability
        </Heading>
        <Body className="text-sm">
          Services are provided as described in the SOW. To the maximum extent permitted by law, liability is capped at fees paid in the twelve months
          preceding the claim, excluding willful misconduct.
        </Body>
      </section>

      <section id="termination" className="scroll-mt-28 space-y-4">
        <Heading as="h2" className="text-2xl">
          8. Termination
        </Heading>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <Heading as="h3" className="text-lg">
              Client exit
            </Heading>
            <Body className="mt-2 text-sm">Wind-down per SOW with payment for work completed and committed third-party costs.</Body>
          </Card>
          <Card>
            <Heading as="h3" className="text-lg">
              Veltrix exit
            </Heading>
            <Body className="mt-2 text-sm">If material breach remains uncured, we may exit with handover assistance as defined legally.</Body>
          </Card>
        </div>
      </section>

      <section id="disputes" className="scroll-mt-28 space-y-4">
        <Heading as="h2" className="text-2xl">
          9. Dispute resolution
        </Heading>
        <div className="grid gap-4 md:grid-cols-3">
          {termsDisputeSteps.map((s) => (
            <Card key={s.n}>
              <p className="text-accent-primary font-heading text-sm font-bold">{s.n}</p>
              <Heading as="h3" className="mt-2 text-base">
                {s.title}
              </Heading>
              <Body className="mt-2 text-sm">{s.description}</Body>
            </Card>
          ))}
        </div>
      </section>

      <section id="contact" className="scroll-mt-28">
        <Card padding="lg" className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <Heading as="h2" className="text-xl">
              10. Contact
            </Heading>
            <Body className="mt-2 text-sm">
              <a className="text-accent-primary hover:underline" href={`mailto:${termsContactBanner.email}`}>
                {termsContactBanner.email}
              </a>
            </Body>
            <Body className="mt-1 text-sm">{termsContactBanner.address}</Body>
            <p className="text-text-muted mt-2 text-xs">Response: {termsContactBanner.response}</p>
          </div>
          <ButtonLink href={`mailto:${termsContactBanner.email}`} size="lg">
            Send an email
          </ButtonLink>
        </Card>
      </section>
    </>
  );
}
