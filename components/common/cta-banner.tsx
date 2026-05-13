import { cn } from "@/lib/utils";
import { Heading, Lead } from "@/components/ui/typography";
import Button from "@/components/ui/button";
import { ButtonLink } from "@/components/ui/button-link";

export type CtaBannerProps = {
  title: string;
  description?: string;
  variant?: "accent" | "dark";
  primary: { label: string; href?: string; onClick?: () => void };
  secondary?: { label: string; href?: string };
  className?: string;
};

export function CtaBanner({ title, description, variant = "accent", primary, secondary, className }: CtaBannerProps) {
  const isAccent = variant === "accent";
  return (
    <div
      className={cn(
        "rounded-2xl px-6 py-12 sm:px-10 sm:py-14",
        isAccent ? "bg-accent-primary text-text-dark" : "bg-section-card border-border-subtle border",
        className,
      )}
    >
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center md:gap-8">
        <Heading as="h2" className={cn(isAccent ? "text-text-dark" : "text-text-primary", "max-w-2xl")}>
          {title}
        </Heading>
        {description ? (
          <Lead className={cn("max-w-2xl", isAccent ? "text-text-dark/80" : "text-text-secondary")}>{description}</Lead>
        ) : null}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {primary.href ? (
            <ButtonLink href={primary.href} variant={isAccent ? "secondary" : "primary"} size="lg" className={cn(isAccent && "bg-text-dark text-text-primary border-transparent hover:bg-bg-secondary")}>
              {primary.label}
            </ButtonLink>
          ) : (
            <Button variant={isAccent ? "secondary" : "primary"} size="lg" onClick={primary.onClick} className={cn(isAccent && "bg-text-dark text-text-primary border-transparent hover:bg-bg-secondary")}>
              {primary.label}
            </Button>
          )}
          {secondary ? (
            secondary.href ? (
              <ButtonLink
                href={secondary.href}
                variant="outline"
                size="lg"
                className={cn(isAccent && "border-text-dark/40 text-text-dark hover:bg-text-dark/10")}
              >
                {secondary.label}
              </ButtonLink>
            ) : (
              <Button variant="outline" size="lg" className={cn(isAccent && "border-text-dark/40 text-text-dark hover:bg-text-dark/10")}>
                {secondary.label}
              </Button>
            )
          ) : null}
        </div>
      </div>
    </div>
  );
}
