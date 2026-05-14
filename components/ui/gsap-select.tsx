"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { cn } from "@/lib/utils";
import { registerGsapPlugins, prefersReducedMotion } from "@/lib/gsap/config";
import type { SelectOption } from "@/components/ui/select";

export type GsapSelectProps = {
  name: string;
  label?: string;
  error?: string;
  placeholder?: string;
  options: SelectOption[];
  id?: string;
  required?: boolean;
  defaultValue?: string;
  className?: string;
  disabled?: boolean;
};

export function GsapSelect({
  name,
  label,
  error,
  placeholder = "Select one",
  options,
  id,
  required,
  defaultValue = "",
  className,
  disabled,
}: GsapSelectProps) {
  const uid = useId();
  const baseId = id ?? `${uid}-${name}`;
  const listboxId = `${baseId}-listbox`;
  const labelId = `${baseId}-label`;
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(defaultValue);
  const rootRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const chevronRef = useRef<SVGSVGElement>(null);
  const firstCloseSkipped = useRef(false);

  const selectedLabel = options.find((o) => o.value === value)?.label ?? "";

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useGSAP(
    () => {
      const panel = panelRef.current;
      const list = listRef.current;
      const chev = chevronRef.current;
      if (!panel || !list) return;

      registerGsapPlugins();

      const items = list.querySelectorAll<HTMLElement>("[data-select-option]");
      const reduced = prefersReducedMotion();

      if (chev) {
        if (reduced) gsap.set(chev, { rotation: open ? 180 : 0 });
        else gsap.to(chev, { rotation: open ? 180 : 0, duration: 0.22, ease: "power2.out" });
      }

      if (reduced) {
        panel.style.maxHeight = open ? `${list.scrollHeight}px` : "0px";
        panel.style.opacity = open ? "1" : "0";
        panel.style.pointerEvents = open ? "auto" : "none";
        gsap.set(items, { opacity: 1, y: 0 });
        return;
      }

      if (!open && !firstCloseSkipped.current) {
        firstCloseSkipped.current = true;
        gsap.set(panel, { maxHeight: 0, opacity: 0, overflow: "hidden", pointerEvents: "none" });
        gsap.set(items, { opacity: 1, y: 0 });
        return;
      }

      gsap.killTweensOf([panel, ...items]);

      if (open) {
        gsap.set(panel, { pointerEvents: "auto" });
        const h = list.scrollHeight;
        gsap.set(panel, { overflow: "hidden" });
        gsap.fromTo(panel, { maxHeight: 0, opacity: 0 }, { maxHeight: h, opacity: 1, duration: 0.3, ease: "power2.out" });
        gsap.fromTo(
          items,
          { opacity: 0, y: -8 },
          { opacity: 1, y: 0, duration: 0.18, stagger: 0.035, ease: "power2.out", delay: 0.05 },
        );
      } else {
        if (items.length) {
          gsap.to(items, {
            opacity: 0,
            y: -4,
            duration: 0.1,
            stagger: { each: 0.02, from: "end" },
          });
        }
        gsap.to(panel, {
          maxHeight: 0,
          opacity: 0,
          duration: 0.22,
          ease: "power2.in",
          delay: 0.02,
          onComplete: () => {
            gsap.set(panel, { pointerEvents: "none" });
          },
        });
      }
    },
    { dependencies: [open], scope: rootRef },
  );

  return (
    <div ref={rootRef} className={cn("relative w-full space-y-1.5", className)}>
      <input type="hidden" name={name} value={value} required={required} />

      {label ? (
        <label htmlFor={baseId} id={labelId} className="text-text-secondary font-body text-xs font-medium tracking-wide uppercase">
          {label}
        </label>
      ) : null}

      <button
        type="button"
        id={baseId}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listboxId}
        aria-labelledby={label ? labelId : undefined}
        aria-label={label ? undefined : placeholder}
        onClick={() => !disabled && setOpen((o) => !o)}
        className={cn(
          "border-border-medium bg-bg-secondary text-text-primary font-body focus:border-accent-primary focus:ring-accent-primary/30 flex h-11 w-full items-center justify-between gap-2 rounded-lg border px-3 text-left text-sm outline-none transition focus:ring-2",
          error && "border-red-500/80 focus:border-red-500 focus:ring-red-500/30",
          disabled && "pointer-events-none opacity-50",
        )}
      >
        <span className={cn("min-w-0 flex-1 truncate", !value && "text-text-muted")}>{value ? selectedLabel : placeholder}</span>
        <svg
          ref={chevronRef}
          className="text-text-muted size-5 shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden
        >
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div ref={panelRef} className="absolute top-full right-0 left-0 z-20 mt-1">
        <ul
          ref={listRef}
          id={listboxId}
          role="listbox"
          aria-labelledby={label ? labelId : baseId}
          className="border-border-medium bg-bg-secondary max-h-60 overflow-y-auto rounded-lg border py-1 shadow-lg"
        >
          {placeholder ? (
            <li role="presentation">
              <button
                type="button"
                data-select-option
                role="option"
                aria-selected={value === ""}
                className="text-text-muted hover:bg-bg-primary/80 font-body w-full px-3 py-2.5 text-left text-sm transition-colors"
                onClick={() => {
                  setValue("");
                  setOpen(false);
                }}
              >
                {placeholder}
              </button>
            </li>
          ) : null}
          {options.map((o) => (
            <li key={o.value} role="presentation">
              <button
                type="button"
                data-select-option
                role="option"
                aria-selected={value === o.value}
                className={cn(
                  "font-body hover:bg-accent-primary/15 hover:text-accent-primary w-full px-3 py-2.5 text-left text-sm transition-colors",
                  value === o.value && "bg-accent-primary/10 text-accent-primary font-medium",
                )}
                onClick={() => {
                  setValue(o.value);
                  setOpen(false);
                }}
              >
                {o.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {error ? <p className="text-xs text-red-400">{error}</p> : null}
    </div>
  );
}
