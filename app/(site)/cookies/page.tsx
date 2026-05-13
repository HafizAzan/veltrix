import type { Metadata } from "next";
import Link from "next/link";
import { SectionContainer } from "@/components/ui/section-container";
import { Heading, Body } from "@/components/ui/typography";
import { Table, THead, TBody, TR, TH, TD } from "@/components/ui/table";
import { privacyCookieRows } from "@/data/privacy.data";

export const metadata: Metadata = {
  title: "Cookies — Veltrix Software",
  description: "How we use cookies on this site.",
};

export default function CookiesPage() {
  return (
    <SectionContainer className="py-16 md:py-24" size="narrow">
      <Heading as="h1" className="text-4xl">
        Cookies
      </Heading>
      <Body className="mt-4">
        Short summary below. For full context see our{" "}
        <Link href="/privacy#cookies" className="text-accent-primary font-medium underline hover:no-underline">
          privacy policy
        </Link>
        .
      </Body>
      <div className="mt-10">
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
      </div>
    </SectionContainer>
  );
}
