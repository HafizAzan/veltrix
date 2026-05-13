import { SectionHeader } from "@/components/common/section-header";
import { SectionContainer } from "@/components/ui/section-container";
import { Table, THead, TBody, TR, TH, TD } from "@/components/ui/table";
import { servicesComparison } from "@/data/services.data";

export function ServicesComparison() {
  const { headers, rows } = servicesComparison;
  return (
    <SectionContainer className="py-14 md:py-20">
      <SectionHeader align="center" title="How we compare" description="Honest positioning — pick the model that fits your risk profile." />
      <Table>
        <THead>
          <TR>
            {headers.map((h) => (
              <TH key={h}>{h}</TH>
            ))}
          </TR>
        </THead>
        <TBody>
          {rows.map((row) => (
            <TR key={row.feature}>
              <TD className="text-text-primary font-medium">{row.feature}</TD>
              <TD>{row.freelancers}</TD>
              <TD className="border-accent-primary/50 bg-accent-primary/5 border-x font-medium text-accent-primary">{row.veltrix}</TD>
              <TD>{row.agencies}</TD>
            </TR>
          ))}
        </TBody>
      </Table>
    </SectionContainer>
  );
}
