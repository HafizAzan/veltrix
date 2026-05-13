"use client";

import React from "react";
import { cn } from "@/lib/utils";

export type CheckboxProps = Omit<React.ComponentPropsWithoutRef<"input">, "type"> & {
  label: React.ReactNode;
};

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox({ className, label, id, ...rest }, ref) {
  const cid = id ?? rest.name ?? "checkbox";
  return (
    <label htmlFor={cid} className={cn("text-text-secondary font-body flex cursor-pointer items-start gap-3 text-sm", className)}>
      <input ref={ref} id={cid} type="checkbox" className="border-border-medium text-accent-primary focus:ring-accent-primary mt-0.5 size-4 shrink-0 rounded" {...rest} />
      <span>{label}</span>
    </label>
  );
});
