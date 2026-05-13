import React from "react";
import { cn } from "@/lib/utils";

export type InputProps = React.ComponentPropsWithoutRef<"input"> & {
  label?: string;
  error?: string;
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input({ className, label, error, id, ...rest }, ref) {
  const inputId = id ?? rest.name;
  return (
    <div className="w-full space-y-1.5">
      {label ? (
        <label htmlFor={inputId} className="text-text-secondary font-body text-xs font-medium tracking-wide uppercase">
          {label}
        </label>
      ) : null}
      <input
        ref={ref}
        id={inputId}
        className={cn(
          "border-border-medium bg-bg-secondary text-text-primary font-body placeholder:text-text-muted focus:border-accent-primary focus:ring-accent-primary/30 h-11 w-full rounded-lg border px-3 text-sm outline-none transition focus:ring-2",
          error && "border-red-500/80 focus:border-red-500 focus:ring-red-500/30",
          className,
        )}
        {...rest}
      />
      {error ? <p className="text-xs text-red-400">{error}</p> : null}
    </div>
  );
});
