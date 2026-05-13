import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

export type SectionContainerProps = ComponentPropsWithoutRef<"section"> & {
  size?: "default" | "narrow" | "wide";
};

const sizeClass: Record<NonNullable<SectionContainerProps["size"]>, string> = {
  default: "max-w-7xl",
  narrow: "max-w-3xl",
  wide: "max-w-[90rem]",
};

export function SectionContainer({ className, size = "default", children, ...rest }: SectionContainerProps) {
  return (
    <section className={cn("mx-auto w-full px-4 sm:px-6", sizeClass[size], className)} {...rest}>
      {children}
    </section>
  );
}
