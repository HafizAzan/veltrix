import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

let pluginsRegistered = false;

export function registerGsapPlugins() {
  if (typeof window === "undefined") return;
  if (pluginsRegistered) return;
  gsap.registerPlugin(ScrollTrigger, useGSAP);
  pluginsRegistered = true;
}

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return true;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
