"use client";

import React, { useEffect, useId, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
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

  return (
    <div className={cn("flex items-center", className)}>
      <button
        type="button"
        className="text-text-primary hover:text-accent-primary focus-visible:outline-accent-primary rounded-md p-2 focus-visible:outline-2 focus-visible:outline-offset-2 md:hidden"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <X className="size-7" aria-hidden /> : <Menu className="size-7" aria-hidden />}
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
      </button>

      {open ? (
        <div
          id={panelId}
          className="border-nav-border bg-nav-bg/98 fixed inset-0 z-50 flex flex-col border-b px-4 pt-20 pb-8 backdrop-blur-md md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <Navbar links={links} className="flex-1" uppercase />
          <Link
            href={cta.href}
            className="bg-nav-cta-bg text-nav-cta-text font-body mt-8 inline-flex min-h-12 items-center justify-center rounded-full px-6 text-center text-sm font-semibold tracking-wide uppercase transition hover:brightness-110"
            onClick={() => setOpen(false)}
          >
            {cta.label}
          </Link>
        </div>
      ) : null}
    </div>
  );
};

export default React.memo(MobileNav);
