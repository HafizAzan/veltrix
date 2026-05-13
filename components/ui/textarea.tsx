import React from "react";
import { cn } from "@/lib/utils";

export type TextareaProps = React.ComponentPropsWithoutRef<"textarea"> & {
  label?: string;
  error?: string;
};

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea({ className, label, error, id, ...rest }, ref) {
  const tid = id ?? rest.name;
  return (
    <div className="w-full space-y-1.5">
      {label ? (
        <label htmlFor={tid} className="text-text-secondary font-body text-xs font-medium tracking-wide uppercase">
          {label}
        </label>
      ) : null}
      <textarea
        ref={ref}
        id={tid}
        className={cn(
          "border-border-medium bg-bg-secondary text-text-primary font-body placeholder:text-text-muted focus:border-accent-primary focus:ring-accent-primary/30 min-h-32 w-full resize-y rounded-lg border px-3 py-2 text-sm outline-none transition focus:ring-2",
          error && "border-red-500/80",
          className,
        )}
        {...rest}
      />
      {error ? <p className="text-xs text-red-400">{error}</p> : null}
    </div>
  );
});
