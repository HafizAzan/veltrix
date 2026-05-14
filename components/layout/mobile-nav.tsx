"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { cn } from "@/lib/utils";
import { registerGsapPlugins, prefersReducedMotion } from "@/lib/gsap/config";
import type { CtaConfig, NavLink } from "@/lib/site-config";
import Navbar from "./navbar";

export type MobileNavProps = {
  links: NavLink[];
  cta: CtaConfig;
  className?: string;
};

const MobileNav = ({ links, cta, className }: MobileNavProps) => {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const overlayRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const sheetRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useGSAP(
    () => {
      const overlay = overlayRef.current;
      const backdrop = backdropRef.current;
      const sheet = sheetRef.current;
      if (!overlay || !backdrop || !sheet) return;

      registerGsapPlugins();
      const reduced = prefersReducedMotion();
      const linksEls = sheet.querySelectorAll<HTMLElement>("a[href]");

      if (reduced) {
        gsap.killTweensOf([backdrop, sheet, linksEls]);
        if (open) {
          gsap.set(overlay, { pointerEvents: "auto", visibility: "visible" });
          gsap.set(backdrop, { opacity: 1 });
          gsap.set(sheet, { yPercent: 0, opacity: 1 });
          gsap.set(linksEls, { opacity: 1, y: 0 });
        } else {
          gsap.set(backdrop, { opacity: 0 });
          gsap.set(sheet, { yPercent: -100, opacity: 1 });
          gsap.set(linksEls, { opacity: 1, y: 0 });
          gsap.set(overlay, { pointerEvents: "none", visibility: "hidden" });
        }
        return;
      }

      if (!open && !initialized.current) {
        initialized.current = true;
        gsap.set(overlay, { pointerEvents: "none", visibility: "hidden" });
        gsap.set(backdrop, { opacity: 0 });
        gsap.set(sheet, { yPercent: -100, opacity: 1 });
        gsap.set(linksEls, { opacity: 1, y: 0 });
        return;
      }
      initialized.current = true;

      gsap.killTweensOf([backdrop, sheet, linksEls]);

      if (open) {
        gsap.set(overlay, { pointerEvents: "auto", visibility: "visible" });
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.fromTo(backdrop, { opacity: 0 }, { opacity: 1, duration: 0.28 }, 0)
          .fromTo(sheet, { yPercent: -100 }, { yPercent: 0, duration: 0.42 }, 0.02)
          .fromTo(linksEls, { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.26, stagger: 0.06 }, "-=0.22");
      } else {
        const tl = gsap.timeline({
          onComplete: () => {
            gsap.set(overlay, { pointerEvents: "none", visibility: "hidden" });
          },
        });
        tl.to(linksEls, { opacity: 0, y: -10, duration: 0.14, stagger: { each: 0.03, from: "end" } }, 0)
          .to(sheet, { yPercent: -100, duration: 0.34, ease: "power3.in" }, 0.04)
          .to(backdrop, { opacity: 0, duration: 0.22 }, 0.12);
      }
    },
    { dependencies: [open], scope: overlayRef },
  );

  return (
    <div className={cn("relative z-60 flex items-center", className)}>
      <button
        type="button"
        className="text-text-primary hover:text-accent-primary focus-visible:outline-accent-primary relative z-61 rounded-md p-2 focus-visible:outline-2 focus-visible:outline-offset-2 md:hidden"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <X className="size-7" aria-hidden /> : <Menu className="size-7" aria-hidden />}
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
      </button>

      <div
        ref={overlayRef}
        id={panelId}
        className="pointer-events-none fixed inset-0 z-50 md:hidden"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        aria-hidden={!open}
      >
        <div
          ref={backdropRef}
          className="absolute inset-0 bg-black/55 backdrop-blur-[2px]"
          aria-hidden
          onClick={() => setOpen(false)}
        />
        <div
          ref={sheetRef}
          className="border-nav-border bg-nav-bg/98 absolute inset-0 flex flex-col border-b px-4 pt-16 pb-8 shadow-[0_0_80px_rgba(0,0,0,0.45)] backdrop-blur-md"
        >
          <div className="mb-4 flex shrink-0 justify-end">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-text-primary hover:text-accent-primary focus-visible:outline-accent-primary rounded-lg p-2 focus-visible:outline-2 focus-visible:outline-offset-2"
              aria-label="Close menu"
            >
              <X className="size-7" aria-hidden />
            </button>
          </div>

          <div className="flex min-h-0 flex-1 flex-col">
            <Navbar links={links} className="flex-1" uppercase />
          </div>

          <Link
            href={cta.href}
            className="bg-nav-cta-bg text-nav-cta-text font-body mt-6 inline-flex min-h-12 shrink-0 items-center justify-center rounded-full px-6 text-center text-sm font-semibold tracking-wide uppercase transition hover:brightness-110"
            onClick={() => setOpen(false)}
          >
            {cta.label}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default React.memo(MobileNav);
