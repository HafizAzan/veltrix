import { cn } from "@/lib/utils";

export function Table({ className, ...rest }: React.ComponentPropsWithoutRef<"table">) {
  return (
    <div className="border-border-subtle w-full overflow-x-auto rounded-xl border">
      <table className={cn("text-text-secondary font-body w-full min-w-[32rem] text-left text-sm", className)} {...rest} />
    </div>
  );
}

export function THead({ className, ...rest }: React.ComponentPropsWithoutRef<"thead">) {
  return <thead className={cn("bg-bg-secondary text-text-muted text-xs tracking-wide uppercase", className)} {...rest} />;
}

export function TBody({ className, ...rest }: React.ComponentPropsWithoutRef<"tbody">) {
  return <tbody className={cn("divide-border-subtle divide-y", className)} {...rest} />;
}

export function TR({ className, ...rest }: React.ComponentPropsWithoutRef<"tr">) {
  return <tr className={cn("hover:bg-bg-secondary/50 transition-colors", className)} {...rest} />;
}

export function TH({ className, ...rest }: React.ComponentPropsWithoutRef<"th">) {
  return <th className={cn("text-text-primary px-4 py-3 font-semibold", className)} {...rest} />;
}

export function TD({ className, ...rest }: React.ComponentPropsWithoutRef<"td">) {
  return <td className={cn("text-text-secondary px-4 py-3", className)} {...rest} />;
}
