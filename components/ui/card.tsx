import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

export type CardProps = ComponentPropsWithoutRef<"div"> & {
  padding?: "none" | "sm" | "md" | "lg";
};

const pad: Record<NonNullable<CardProps["padding"]>, string> = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export function Card({ className, padding = "md", children, ...rest }: CardProps) {
  return (
    <div
      className={cn(
        "border-border-subtle bg-section-card rounded-xl border",
        pad[padding],
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
