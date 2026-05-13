import { Card } from "@/components/ui/card";
import { Heading, Body } from "@/components/ui/typography";
import { Table, THead, TBody, TR, TH, TD } from "@/components/ui/table";
import {
  privacyCollection,
  privacyCookieRows,
  privacyDpo,
  privacyRights,
  privacyUsageCards,
} from "@/data/privacy.data";

export function PrivacyContent() {
  return (
    <>
      <section id="commitment" className="scroll-mt-28">
        <Card className="border-accent-primary/40 bg-accent-primary/10">
          <Heading as="h2" className="text-xl">
            Core commitment
          </Heading>
          <Body className="mt-2 text-sm">
            We collect only what we need to respond, contract, and deliver services — and we do not sell personal data.
          </Body>
        </Card>
      </section>

      <section id="collection" className="scroll-mt-28 space-y-6">
        <Heading as="h2" className="text-2xl">
          Information we collect
        </Heading>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <Heading as="h3" className="text-lg">
              Directly from you
            </Heading>
            <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-text-secondary">
              {privacyCollection.direct.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </Card>
          <Card>
            <Heading as="h3" className="text-lg">
              Automatically
            </Heading>
            <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-text-secondary">
              {privacyCollection.automatic.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      <section id="usage" className="scroll-mt-28 space-y-6">
        <Heading as="h2" className="text-2xl">
          How we use data
        </Heading>
        <div className="grid gap-4 md:grid-cols-3">
          {privacyUsageCards.map((c) => (
            <Card key={c.title}>
              <Heading as="h3" className="text-lg">
                {c.title}
              </Heading>
              <Body className="mt-2 text-sm">{c.text}</Body>
            </Card>
          ))}
        </div>
      </section>

      <section id="cookies" className="scroll-mt-28 space-y-4">
        <Heading as="h2" className="text-2xl">
          Cookies
        </Heading>
        <Body className="text-sm">We use cookies sparingly for essential site operation and optional analytics.</Body>
        <Table>
          <THead>
            <TR>
              <TH>Type</TH>
              <TH>Purpose</TH>
              <TH>Duration</TH>
            </TR>
          </THead>
          <TBody>
            {privacyCookieRows.map((r) => (
              <TR key={r.type}>
                <TD className="text-text-primary font-medium">{r.type}</TD>
                <TD>{r.purpose}</TD>
                <TD>{r.duration}</TD>
              </TR>
            ))}
          </TBody>
        </Table>
      </section>

      <section id="rights" className="scroll-mt-28 space-y-4">
        <Heading as="h2" className="text-2xl">
          Your rights
        </Heading>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {privacyRights.map((r) => (
            <Card key={r} padding="md" className="text-sm font-medium">
              {r}
            </Card>
          ))}
        </div>
      </section>

      <section id="contact" className="scroll-mt-28">
        <Card padding="lg">
          <Heading as="h2" className="text-xl">
            Data protection contact
          </Heading>
          <Body className="mt-2 text-sm">
            Email:{" "}
            <a className="text-accent-primary hover:underline" href={`mailto:${privacyDpo.email}`}>
              {privacyDpo.email}
            </a>
          </Body>
          <Body className="mt-2 text-sm">{privacyDpo.address}</Body>
          <p className="text-accent-primary mt-4 text-sm font-semibold">Typical response: {privacyDpo.response}</p>
        </Card>
      </section>
    </>
  );
}
