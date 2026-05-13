import { cn } from "@/lib/utils";
import { Body, Heading, Small } from "@/components/ui/typography";

export type TimelineItem = {
  year: string;
  title: string;
  description: string;
};

export type TimelineProps = {
  items: TimelineItem[];
  className?: string;
};

export function Timeline({ items, className }: TimelineProps) {
  return (
    <ol className={cn("relative space-y-8 border-l border-accent-primary/40 pl-8", className)}>
      {items.map((item) => (
        <li key={item.year} className="relative">
          <span className="border-accent-primary bg-section-dark absolute top-1 -left-[39px] size-3 rounded-full border-2" aria-hidden />
          <Small className="text-accent-primary font-semibold tracking-wide">{item.year}</Small>
          <Heading as="h4" className="mt-1 text-base sm:text-lg">
            {item.title}
          </Heading>
          <Body className="mt-2 text-sm">{item.description}</Body>
        </li>
      ))}
    </ol>
  );
}
