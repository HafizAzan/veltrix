import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Eyebrow, Heading, Lead } from "@/components/ui/typography";

export type SectionHeaderProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
  action?: ReactNode;
};

export function SectionHeader({ eyebrow, title, description, align = "left", className, action }: SectionHeaderProps) {
  const isCenter = align === "center";
  return (
    <div
      className={cn(
        "mb-10 flex flex-col gap-4 md:mb-14",
        isCenter && "items-center text-center",
        !isCenter && action && "md:flex-row md:items-end md:justify-between",
        className,
      )}
    >
      <div className={cn("max-w-3xl space-y-3", isCenter && "mx-auto")}>
        {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
        <Heading as="h2" className={isCenter ? "mx-auto max-w-4xl" : ""}>
          {title}
        </Heading>
        {description ? <Lead className={cn(isCenter && "mx-auto max-w-2xl")}>{description}</Lead> : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
