import { cn } from "@/lib/utils";

export type BadgeVariant = "solid" | "outline" | "muted";

const variants: Record<BadgeVariant, string> = {
  solid: "bg-accent-primary text-text-dark border-transparent",
  outline: "border-accent-primary text-accent-primary bg-transparent",
  muted: "border-border-medium text-text-secondary bg-bg-secondary",
};

export type BadgeProps = React.ComponentPropsWithoutRef<"span"> & {
  variant?: BadgeVariant;
};

export function Badge({ className, variant = "outline", ...rest }: BadgeProps) {
  return (
    <span
      className={cn(
        "font-body inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold tracking-wide uppercase",
        variants[variant],
        className,
      )}
      {...rest}
    />
  );
}
