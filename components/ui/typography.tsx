import { cn } from "@/lib/utils";

export function Eyebrow({ className, ...rest }: React.ComponentPropsWithoutRef<"p">) {
  return <p className={cn("text-accent-primary font-body text-xs font-semibold tracking-[0.2em] uppercase", className)} {...rest} />;
}

export function Heading({ as: Tag = "h2", className, ...rest }: React.ComponentPropsWithoutRef<"h1"> & { as?: "h1" | "h2" | "h3" | "h4" }) {
  const styles: Record<string, string> = {
    h1: "font-heading text-4xl leading-tight font-extrabold tracking-tight sm:text-5xl md:text-6xl",
    h2: "font-heading text-3xl leading-tight font-bold tracking-tight sm:text-4xl",
    h3: "font-heading text-xl font-bold tracking-tight sm:text-2xl",
    h4: "font-heading text-lg font-semibold tracking-tight",
  };
  return <Tag className={cn("text-text-primary", styles[Tag], className)} {...rest} />;
}

export function Lead({ className, ...rest }: React.ComponentPropsWithoutRef<"p">) {
  return <p className={cn("text-text-secondary font-body text-lg leading-relaxed", className)} {...rest} />;
}

export function Body({ className, ...rest }: React.ComponentPropsWithoutRef<"p">) {
  return <p className={cn("text-text-secondary font-body text-sm leading-relaxed sm:text-base", className)} {...rest} />;
}

export function Small({ className, ...rest }: React.ComponentPropsWithoutRef<"p">) {
  return <p className={cn("text-text-muted font-body text-xs", className)} {...rest} />;
}

export function Accent({ className, ...rest }: React.ComponentPropsWithoutRef<"span">) {
  return <span className={cn("text-accent-primary", className)} {...rest} />;
}
