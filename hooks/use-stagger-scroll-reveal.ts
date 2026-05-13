"use client";

import { useRef, type RefObject } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { registerGsapPlugins, prefersReducedMotion } from "@/lib/gsap/config";

export type StaggerRevealOptions = {
  selector?: string;
  start?: string;
  y?: number;
  stagger?: number;
  duration?: number;
};

export function useStaggerScrollReveal<T extends HTMLElement>(containerRef: RefObject<T | null>, options?: StaggerRevealOptions) {
  const selector = options?.selector ?? "[data-stagger]";
  const start = options?.start ?? "top 88%";
  const y = options?.y ?? 28;
  const stagger = options?.stagger ?? 0.09;
  const duration = options?.duration ?? 0.55;

  useGSAP(
    () => {
      const root = containerRef.current;
      if (!root) return;

      if (prefersReducedMotion()) {
        const nodes = root.querySelectorAll(selector);
        gsap.set(nodes, { opacity: 1, y: 0 });
        return;
      }

      registerGsapPlugins();

      const ctx = gsap.context(() => {
        const targets = root.querySelectorAll(selector);
        if (!targets.length) return;

        gsap.set(targets, { opacity: 0, y });

        gsap.to(targets, {
          opacity: 1,
          y: 0,
          duration,
          stagger,
          ease: "power2.out",
          scrollTrigger: {
            trigger: root,
            start,
            once: true,
          },
        });
      }, root);

      return () => ctx.revert();
    },
    { scope: containerRef, dependencies: [selector, start, y, stagger, duration] },
  );
}
