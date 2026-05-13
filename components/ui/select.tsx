import React from "react";
import { cn } from "@/lib/utils";

export type SelectOption = { value: string; label: string };

export type SelectProps = React.ComponentPropsWithoutRef<"select"> & {
  label?: string;
  error?: string;
  options: SelectOption[];
  placeholder?: string;
};

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { className, label, error, id, options, placeholder, ...rest },
  ref,
) {
  const sid = id ?? rest.name;
  return (
    <div className="w-full space-y-1.5">
      {label ? (
        <label htmlFor={sid} className="text-text-secondary font-body text-xs font-medium tracking-wide uppercase">
          {label}
        </label>
      ) : null}
      <select
        ref={ref}
        id={sid}
        className={cn(
          "border-border-medium bg-bg-secondary text-text-primary font-body focus:border-accent-primary focus:ring-accent-primary/30 h-11 w-full cursor-pointer appearance-none rounded-lg border bg-[length:1rem] bg-[right_0.75rem_center] bg-no-repeat px-3 pr-10 text-sm outline-none transition focus:ring-2",
          error && "border-red-500/80",
          className,
        )}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239ca3af'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
        }}
        {...rest}
      >
        {placeholder ? (
          <option value="" disabled>
            {placeholder}
          </option>
        ) : null}
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      {error ? <p className="text-xs text-red-400">{error}</p> : null}
    </div>
  );
});
