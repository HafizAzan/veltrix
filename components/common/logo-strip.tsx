"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";
import { useMarqueeTrack } from "@/hooks/use-marquee";

export type LogoStripProps = {
  items: readonly string[] | string[];
  className?: string;
  speedPxPerSec?: number;
};

export function LogoStrip({ items, className, speedPxPerSec = 95 }: LogoStripProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const sequence = items.length ? items : ["Veltrix"];

  useMarqueeTrack(trackRef, {
    speedPxPerSec,
    speedScale: sequence.length > 40 ? 1.35 : 1,
    rebuildKey: sequence.join("|"),
  });

  const renderChunk = (suffix: string) =>
    sequence.map((label) => (
      <span
        key={`${label}-${suffix}`}
        className="text-text-muted font-body inline-flex shrink-0 items-center gap-2 text-xs tracking-[0.18em] whitespace-nowrap uppercase sm:text-sm"
      >
        <span className="bg-accent-primary/80 size-1.5 shrink-0 rounded-full" aria-hidden />
        {label}
      </span>
    ));

  return (
    <div className={cn("border-border-subtle bg-section-dark/80 border-y", className)} aria-label="Technologies we work with">
      <div className="relative overflow-hidden py-5">
        <div
          ref={trackRef}
          className="flex w-max flex-nowrap items-center gap-x-10 gap-y-3 will-change-transform"
          aria-hidden
        >
          {renderChunk("a")}
          {renderChunk("b")}
        </div>
      </div>
    </div>
  );
}
