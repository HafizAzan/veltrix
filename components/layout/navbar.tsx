"use client";
import React from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Navbar = ({ className }: { className?: string }) => {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <nav className={cn(className)}>
      <ul className="flex items-center gap-x-8">
        {NAV_LINKS?.map((item) => (
          <li key={item.href} className="group">
            <Link
              href={item.href}
              className={cn("text-nav-link hover:text-nav-link-hover transition-colors duration-300", isActive(item.href) && "text-nav-link-hover")}
            >
              {item.label}
            </Link>

            <div
              className={cn("h-px w-0 bg-white group-hover:w-full transition-all duration-300", isActive(item.href) && "w-full bg-nav-link-hover")}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default React.memo(Navbar);
