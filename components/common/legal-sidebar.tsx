"use client";

import { cn } from "@/lib/utils";

export type LegalSidebarProps = {
  items: { id: string; label: string }[];
  activeId: string;
  className?: string;
};

export function LegalSidebar({ items, activeId, className }: LegalSidebarProps) {
  return (
    <nav aria-label="On this page" className={cn("space-y-1 text-sm", className)}>
      {items.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={cn(
            "border-border-subtle font-body hover:text-accent-primary block rounded-lg border border-transparent px-3 py-2 transition-colors",
            activeId === item.id ? "text-accent-primary bg-accent-primary/10 border-accent-primary/30" : "text-text-secondary",
          )}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
