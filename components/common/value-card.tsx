import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Body, Heading } from "@/components/ui/typography";

export type ValueCardProps = {
  title: string;
  description: string;
  className?: string;
};

export function ValueCard({ title, description, className }: ValueCardProps) {
  return (
    <Card className={cn("h-full", className)}>
      <Heading as="h3" className="text-lg">
        {title}
      </Heading>
      <Body className="mt-3 text-sm">{description}</Body>
    </Card>
  );
}
