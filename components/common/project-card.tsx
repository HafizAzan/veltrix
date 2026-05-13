import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Body, Heading, Small } from "@/components/ui/typography";

export type ProjectStat = { label: string; value: string };

export type ProjectCardProps = {
  variant: "featured" | "compact";
  title: string;
  description: string;
  tags?: string[];
  stats?: ProjectStat[];
  metric?: string;
  badge?: string;
  className?: string;
};

export function ProjectCard({ variant, title, description, tags, stats, metric, badge, className }: ProjectCardProps) {
  if (variant === "featured") {
    return (
      <Card padding="none" className={cn("overflow-hidden", className)}>
        <div className="border-border-subtle bg-bg-secondary/50 grid gap-0 lg:grid-cols-2 lg:items-stretch">
          <div className="border-border-subtle relative aspect-[4/3] min-h-[220px] border-b lg:aspect-auto lg:min-h-[280px] lg:border-r lg:border-b-0">
            <div className="from-accent-primary/20 absolute inset-0 bg-gradient-to-br to-transparent" aria-hidden />
            <div className="text-text-muted font-body absolute inset-0 flex items-center justify-center text-sm">Project preview</div>
            {badge ? (
              <Badge variant="solid" className="absolute top-4 left-4">
                {badge}
              </Badge>
            ) : null}
          </div>
          <div className="flex flex-col gap-4 p-6 sm:p-8">
            <div className="flex flex-wrap gap-2">
              {tags?.map((t) => (
                <Badge key={t} variant="muted" className="normal-case">
                  {t}
                </Badge>
              ))}
            </div>
            <Heading as="h3">{title}</Heading>
            <Body>{description}</Body>
            {stats?.length ? (
              <div className="border-border-subtle mt-auto grid grid-cols-2 gap-4 border-t pt-4 sm:grid-cols-3">
                {stats.map((s) => (
                  <div key={s.label}>
                    <p className="text-accent-primary font-heading text-xl font-bold">{s.value}</p>
                    <Small className="text-text-muted tracking-wide uppercase">{s.label}</Small>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className={cn("flex h-full flex-col", className)}>
      {badge ? (
        <Badge variant="outline" className="mb-3 w-fit normal-case">
          {badge}
        </Badge>
      ) : null}
      <Heading as="h3" className="text-lg sm:text-xl">
        {title}
      </Heading>
      <Body className="mt-2 flex-1 text-sm">{description}</Body>
      {tags?.length ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((t) => (
            <Small key={t} className="border-border-medium rounded-md border px-2 py-0.5">
              {t}
            </Small>
          ))}
        </div>
      ) : null}
      {metric ? (
        <p className="text-accent-primary font-body mt-4 text-sm font-semibold tracking-wide uppercase">{metric}</p>
      ) : null}
    </Card>
  );
}
