import { cn } from "@/lib/utils";
import { Body, Small } from "@/components/ui/typography";

export type ProcessStep = { step?: string; title: string; description: string };

export type ProcessStepsProps = {
  items: ProcessStep[];
  variant?: "horizontal" | "vertical";
  className?: string;
};

export function ProcessSteps({ items, variant = "horizontal", className }: ProcessStepsProps) {
  if (variant === "vertical") {
    return (
      <ol className={cn("space-y-6", className)}>
        {items.map((item, i) => (
          <li key={item.title} className="flex gap-4" data-stagger>
            <span className="bg-accent-primary text-text-dark font-heading flex size-10 shrink-0 items-center justify-center rounded-full text-sm font-bold">
              {item.step ?? String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <p className="text-text-primary font-medium">{item.title}</p>
              <Body className="mt-1 text-sm">{item.description}</Body>
            </div>
          </li>
        ))}
      </ol>
    );
  }

  return (
    <ol className={cn("grid gap-6 md:grid-cols-2 lg:grid-cols-4", className)}>
      {items.map((item, i) => (
        <li key={item.title} className="relative border-border-subtle rounded-xl border p-4 pt-8" data-stagger>
          <span className="text-accent-primary font-heading absolute top-3 left-4 text-xs font-bold tracking-widest">
            {item.step ?? String(i + 1).padStart(2, "0")}
          </span>
          <p className="text-text-primary mt-2 font-medium">{item.title}</p>
          <Small className="text-text-secondary mt-2 block leading-relaxed">{item.description}</Small>
        </li>
      ))}
    </ol>
  );
}
