"use client";

import { useRef, type RefObject } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { registerGsapPlugins, prefersReducedMotion } from "@/lib/gsap/config";

export type UseMarqueeOptions = {
  speedPxPerSec?: number;
  speedScale?: number;
  rebuildKey?: string;
};

export function useMarqueeTrack(trackRef: RefObject<HTMLElement | null>, options?: UseMarqueeOptions) {
  const speed = options?.speedPxPerSec ?? 70;
  const speedScale = options?.speedScale ?? 1;
  const rebuildKey = options?.rebuildKey ?? "";

  useGSAP(
    () => {
      const track = trackRef.current;
      if (!track) return;

      if (prefersReducedMotion()) {
        gsap.set(track, { x: 0 });
        return;
      }

      registerGsapPlugins();

      const half = () => track.scrollWidth / 2;
      let tween: gsap.core.Tween | null = null;

      const run = () => {
        tween?.kill();
        const w = half();
        if (w <= 0) return;
        const duration = w / (speed * speedScale);
        gsap.set(track, { x: 0 });
        tween = gsap.to(track, {
          x: -w,
          duration,
          ease: "none",
          repeat: -1,
        });
      };

      run();

      const ro = new ResizeObserver(() => run());
      ro.observe(track);

      return () => {
        ro.disconnect();
        tween?.kill();
      };
    },
    { scope: trackRef, dependencies: [speed, speedScale, rebuildKey] },
  );
}
