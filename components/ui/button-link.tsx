import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ButtonVariant, ButtonSize } from "@/components/ui/button";

const variantClass: Record<ButtonVariant, string> = {
  primary: "bg-accent-primary text-text-dark hover:bg-accent-hover",
  secondary: "border-border-medium hover:border-border-accent bg-bg-secondary text-text-primary border",
  ghost: "hover:bg-bg-secondary bg-transparent text-text-primary",
  outline: "border-border-medium hover:border-border-accent hover:bg-bg-secondary border bg-transparent text-text-primary",
};

const buttonSize: Record<ButtonSize, string> = {
  sm: "min-h-9 px-3.5 text-sm",
  md: "min-h-10 px-4 text-sm",
  lg: "min-h-12 px-5 text-base",
};

export type ButtonLinkProps = React.ComponentPropsWithoutRef<typeof Link> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
};

export function ButtonLink({ className, variant = "primary", size = "md", fullWidth, ...rest }: ButtonLinkProps) {
  return (
    <Link
      className={cn(
        "inline-flex cursor-pointer items-center justify-center rounded-full font-medium transition-colors select-none",
        "focus-visible:outline-accent-primary focus-visible:outline-2 focus-visible:outline-offset-2",
        variantClass[variant],
        buttonSize[size],
        fullWidth && "w-full",
        className,
      )}
      {...rest}
    />
  );
}
