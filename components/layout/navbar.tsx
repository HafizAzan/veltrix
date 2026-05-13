"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import type { NavLink } from "@/lib/site-config";

export type NavbarProps = {
  links: NavLink[];
  className?: string;
  uppercase?: boolean;
};

const Navbar = ({ links, className, uppercase = true }: NavbarProps) => {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <nav className={cn(className)} aria-label="Primary">
      <ul className="flex flex-col gap-1 md:flex-row md:items-center md:gap-x-8">
        {links.map((item) => (
          <li key={item.href} className="group">
            <Link
              href={item.href}
              className={cn(
                "text-nav-link hover:text-nav-link-hover font-body text-sm tracking-wide transition-colors duration-300",
                uppercase && "uppercase",
                isActive(item.href) && "text-nav-link-hover",
              )}
            >
              {item.label}
            </Link>

            <div
              className={cn(
                "mt-0.5 hidden h-px w-0 bg-white md:block",
                "group-hover:w-full group-hover:bg-nav-link-hover transition-all duration-300",
                isActive(item.href) && "w-full bg-nav-link-hover",
              )}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default React.memo(Navbar);
