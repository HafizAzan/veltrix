import { SectionContainer } from "@/components/ui/section-container";
import { Heading, Body } from "@/components/ui/typography";
import { Card } from "@/components/ui/card";
import { servicesBlocks } from "@/data/services.data";

function BlockVisual({ title }: { title: string }) {
  return (
    <div className="border-border-subtle bg-bg-secondary/40 flex min-h-[220px] items-center justify-center rounded-2xl border p-8">
      <span className="text-text-muted text-sm">Visual — {title}</span>
    </div>
  );
}

function BlockCopy({
  title,
  description,
  bullets,
  metrics,
}: {
  title: string;
  description: string;
  bullets: string[];
  metrics?: { label: string; value: string }[];
}) {
  return (
    <div>
      <Heading as="h2" className="text-2xl sm:text-3xl">
        {title}
      </Heading>
      <Body className="mt-4">{description}</Body>
      <ul className="mt-6 space-y-2">
        {bullets.map((b) => (
          <li key={b} className="text-text-secondary font-body flex gap-2 text-sm">
            <span className="text-accent-primary shrink-0">✓</span>
            {b}
          </li>
        ))}
      </ul>
      {metrics?.length ? (
        <div className="mt-8 grid grid-cols-2 gap-4">
          {metrics.map((m) => (
            <Card key={m.label} padding="md" className="bg-section-card/80">
              <p className="text-accent-primary font-heading text-xl font-bold">{m.value}</p>
              <p className="text-text-muted mt-1 text-xs tracking-wide uppercase">{m.label}</p>
            </Card>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function ServicesBlocks() {
  return (
    <SectionContainer className="space-y-16 py-10 md:py-16">
      {servicesBlocks.map((block) => {
        const imageFirst = block.imageSide === "left";
        const metrics = "metrics" in block ? block.metrics : undefined;
        return (
          <div key={block.id} id={block.id} className="grid scroll-mt-28 items-center gap-10 lg:grid-cols-2">
            {imageFirst ? (
              <>
                <BlockVisual title={block.title} />
                <BlockCopy title={block.title} description={block.description} bullets={block.bullets} metrics={metrics} />
              </>
            ) : (
              <>
                <BlockCopy title={block.title} description={block.description} bullets={block.bullets} metrics={metrics} />
                <BlockVisual title={block.title} />
              </>
            )}
          </div>
        );
      })}
    </SectionContainer>
  );
}
