import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./navbar";
import MobileNav from "./mobile-nav";
import { defaultHeaderConfig, type CtaConfig, type NavLink, type SiteHeaderConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export type HeaderProps = Partial<Pick<SiteHeaderConfig, "logoHref" | "logoAlt">> &
  Partial<Pick<SiteHeaderConfig, "logoFull" | "logoSmall">> & {
    navLinks?: NavLink[];
    cta?: CtaConfig;
    className?: string;
    sticky?: boolean;
  };

const Header = ({
  navLinks = defaultHeaderConfig.navLinks,
  cta = defaultHeaderConfig.cta,
  logoHref = defaultHeaderConfig.logoHref,
  logoAlt = defaultHeaderConfig.logoAlt,
  logoFull = defaultHeaderConfig.logoFull,
  logoSmall = defaultHeaderConfig.logoSmall,
  className,
  sticky = true,
}: HeaderProps) => {
  return (
    <header
      className={cn(
        "border-nav-border bg-nav-bg/90 w-full border-b backdrop-blur-md",
        sticky && "sticky top-0 z-40",
        className,
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4">
        <Link href={logoHref} className="shrink-0">
          <Image src={logoFull} alt={logoAlt} width={200} height={48} className="h-10 w-auto max-[480px]:hidden" priority />
          <Image src={logoSmall} alt={logoAlt} width={40} height={40} className="hidden h-10 w-10 max-[480px]:block" />
        </Link>

        <Navbar links={navLinks} className="hidden md:block" uppercase />

        <div className="flex items-center gap-3">
          <Link
            href={cta.href}
            className="bg-nav-cta-bg text-nav-cta-text font-body hover:bg-accent-hover hidden min-h-11 items-center justify-center rounded-full px-5 text-sm font-semibold tracking-wide uppercase transition-colors md:inline-flex"
          >
            {cta.label}
          </Link>
          <MobileNav links={navLinks} cta={cta} className="md:hidden" />
        </div>
      </div>
    </header>
  );
};

export default React.memo(Header);
