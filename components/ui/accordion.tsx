"use client";

import React, { useId, useState } from "react";
import { cn } from "@/lib/utils";

export type AccordionItemData = {
  id: string;
  title: string;
  content: React.ReactNode;
};

export type AccordionProps = {
  items: AccordionItemData[];
  className?: string;
  multiple?: boolean;
};

export function Accordion({ items, className, multiple = false }: AccordionProps) {
  const [open, setOpen] = useState<Set<string>>(() => new Set());
  const baseId = useId();

  const toggle = (id: string) => {
    setOpen((prev) => {
      const next = new Set(multiple ? prev : []);
      if (prev.has(id) && multiple) next.delete(id);
      else if (prev.has(id) && !multiple) return new Set();
      else next.add(id);
      return next;
    });
  };

  return (
    <div className={cn("divide-border-subtle border-border-subtle divide-y rounded-xl border", className)}>
      {items.map((item) => {
        const isOpen = open.has(item.id);
        const panelId = `${baseId}-${item.id}-panel`;
        const buttonId = `${baseId}-${item.id}-btn`;
        return (
          <div key={item.id} className="bg-section-card/40">
            <button
              id={buttonId}
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="text-text-primary hover:bg-bg-secondary/80 flex w-full items-center justify-between gap-4 px-4 py-4 text-left text-sm font-medium transition"
              onClick={() => toggle(item.id)}
            >
              <span>{item.title}</span>
              <svg
                className={cn("text-accent-primary size-5 shrink-0 transition-transform", isOpen && "rotate-180")}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden
              >
                <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className={cn(!isOpen && "hidden", "border-border-subtle border-t px-4 pb-4")}
            >
              <div className="text-text-secondary font-body pt-3 text-sm leading-relaxed">{item.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
