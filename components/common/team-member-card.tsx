import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Heading, Small } from "@/components/ui/typography";

export type TeamMemberCardProps = {
  initials: string;
  name: string;
  role: string;
  className?: string;
};

export function TeamMemberCard({ initials, name, role, className }: TeamMemberCardProps) {
  return (
    <Card className={cn("text-center", className)} padding="md" role="group" aria-label={`${name}, ${role}`}>
      <div className="bg-accent-primary/15 text-accent-primary font-heading mx-auto flex size-16 items-center justify-center rounded-full text-lg font-bold">
        {initials}
      </div>
      <Heading as="h3" className="mt-4 text-base">
        {name}
      </Heading>
      <Small className="text-text-secondary mt-1">{role}</Small>
    </Card>
  );
}
