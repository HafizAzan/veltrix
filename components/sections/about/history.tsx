import { SectionContainer } from "@/components/ui/section-container";
import { Heading, Body } from "@/components/ui/typography";
import { Timeline } from "@/components/common/timeline";
import { aboutStory, aboutTimeline } from "@/data/about.data";

export function AboutHistory() {
  return (
    <SectionContainer className="py-14 md:py-20">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
        <div>
          <Heading as="h2">{aboutStory.title}</Heading>
          {aboutStory.paragraphs.map((p) => (
            <Body key={p.slice(0, 24)} className="mt-4">
              {p}
            </Body>
          ))}
        </div>
        <Timeline items={aboutTimeline} />
      </div>
    </SectionContainer>
  );
}
