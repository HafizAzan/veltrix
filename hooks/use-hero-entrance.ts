"use client";

import { useRef, type RefObject } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { registerGsapPlugins, prefersReducedMotion } from "@/lib/gsap/config";

export type HeroEntranceOptions = {
  selector?: string;
  y?: number;
  stagger?: number;
  delay?: number;
};

export function useHeroEntrance<T extends HTMLElement>(containerRef: RefObject<T | null>, options?: HeroEntranceOptions) {
  const selector = options?.selector ?? "[data-hero-item]";
  const y = options?.y ?? 32;
  const stagger = options?.stagger ?? 0.1;
  const delay = options?.delay ?? 0.08;

  useGSAP(
    () => {
      const root = containerRef.current;
      if (!root) return;

      const targets = root.querySelectorAll(selector);
      if (!targets.length) return;

      if (prefersReducedMotion()) {
        gsap.set(targets, { opacity: 1, y: 0 });
        return;
      }

      registerGsapPlugins();

      gsap.set(targets, { opacity: 0, y });

      gsap.to(targets, {
        opacity: 1,
        y: 0,
        duration: 0.65,
        stagger,
        delay,
        ease: "power3.out",
      });
    },
    { scope: containerRef, dependencies: [selector, y, stagger, delay] },
  );
}
