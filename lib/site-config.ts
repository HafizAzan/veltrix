import type { StaticImageData } from "next/image";
import { RESOURCES } from "@/lib/resources";

export type NavLink = {
  label: string;
  href: string;
};

export type CtaConfig = {
  label: string;
  href: string;
};

export type FooterLinkSection = {
  title: string;
  links: NavLink[];
};

export type SocialLink = {
  name: string;
  href: string;
  platform: "instagram" | "linkedin";
};

export type ContactBlock = {
  title?: string;
  address: string;
  email: string;
  phone: string;
};

export type SiteHeaderConfig = {
  navLinks: NavLink[];
  cta: CtaConfig;
  logoHref: string;
  logoFull: StaticImageData;
  logoSmall: StaticImageData;
  logoAlt: string;
};

export type SiteFooterConfig = {
  tagline: string;
  linkSections: FooterLinkSection[];
  contact: ContactBlock;
  socialLinks: SocialLink[];
  copyright: string;
  legalLinks: NavLink[];
};

export const defaultHeaderConfig: SiteHeaderConfig = {
  logoHref: "/",
  logoFull: RESOURCES.VELTRIX_LOGO,
  logoSmall: RESOURCES.VELTRIX_LOGO_SMALL,
  logoAlt: "Veltrix Software",
  navLinks: [
    { label: "Work", href: "/portfolio" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  cta: { label: "Get started", href: "/contact" },
};

export const defaultFooterConfig: SiteFooterConfig = {
  tagline: "Engineering solutions for the modern enterprise, built to scale and perform.",
  linkSections: [
    {
      title: "Company",
      links: [
        { label: "Work", href: "/portfolio" },
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
        { label: "Privacy Policy", href: "/privacy" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Software Engineering", href: "/services" },
        { label: "Product Design", href: "/services" },
        { label: "AI & Machine Learning", href: "/services" },
        { label: "Cloud Solutions", href: "/services" },
      ],
    },
  ],
  contact: {
    title: "Contact info",
    address: "Shadman Town, Karachi, Pakistan",
    email: "azanahmedkhan.dev@gmail.com",
    phone: "+92 316 1122692",
  },
  socialLinks: [
    { name: "Instagram", href: "https://instagram.com", platform: "instagram" },
    { name: "LinkedIn", href: "https://linkedin.com", platform: "linkedin" },
  ],
  copyright: `© ${new Date().getFullYear()} VELTRIX. ALL RIGHTS RESERVED.`,
  legalLinks: [
    { label: "Terms of service", href: "/terms" },
    { label: "Cookies policy", href: "/cookies" },
  ],
};
