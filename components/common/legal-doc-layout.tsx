"use client";

import type { ReactNode } from "react";
import { LegalSidebar } from "@/components/common/legal-sidebar";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";

export type LegalDocLayoutProps = {
  nav: { id: string; label: string }[];
  children: ReactNode;
  className?: string;
};

export function LegalDocLayout({ nav, children, className }: LegalDocLayoutProps) {
  const ids = nav.map((n) => n.id);
  const activeId = useActiveSection(ids);

  return (
    <div className={cn("scroll-smooth lg:grid lg:grid-cols-[minmax(0,220px)_1fr] lg:items-start lg:gap-12", className)}>
      <aside className="border-border-subtle mb-10 lg:sticky lg:top-28 lg:mb-0 lg:border-r lg:pr-6">
        <p className="text-text-muted font-body mb-3 text-xs font-semibold tracking-widest uppercase">Contents</p>
        <LegalSidebar items={nav} activeId={activeId} />
      </aside>
      <div className="min-w-0 space-y-14">{children}</div>
    </div>
  );
}
