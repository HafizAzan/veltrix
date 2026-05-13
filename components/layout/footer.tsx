import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { InstagramIcon, LinkedinIcon } from "@/components/icons/social-icons";
import {
  defaultFooterConfig,
  defaultHeaderConfig,
  type ContactBlock,
  type FooterLinkSection,
  type NavLink,
  type SiteFooterConfig,
  type SocialLink,
} from "@/lib/site-config";
import { cn } from "@/lib/utils";

export type FooterProps = Partial<Omit<SiteFooterConfig, "contact">> & {
  tagline?: string;
  linkSections?: FooterLinkSection[];
  contact?: Partial<ContactBlock>;
  socialLinks?: SocialLink[];
  copyright?: string;
  legalLinks?: NavLink[];
  logoHref?: string;
  logoAlt?: string;
  className?: string;
};

const socialIcon = (platform: SocialLink["platform"]) => {
  const cls = "size-5";
  switch (platform) {
    case "instagram":
      return <InstagramIcon className={cls} />;
    case "linkedin":
      return <LinkedinIcon className={cls} />;
    default:
      return null;
  }
};

const Footer = ({
  tagline = defaultFooterConfig.tagline,
  linkSections = defaultFooterConfig.linkSections,
  contact: contactProp,
  socialLinks = defaultFooterConfig.socialLinks,
  copyright = defaultFooterConfig.copyright,
  legalLinks = defaultFooterConfig.legalLinks,
  logoHref = defaultHeaderConfig.logoHref,
  logoAlt = defaultHeaderConfig.logoAlt,
  className,
}: FooterProps) => {
  const contact = { ...defaultFooterConfig.contact, ...contactProp };
  const contactTitle = contact.title ?? defaultFooterConfig.contact.title ?? "Contact info";

  const xlGrid =
    linkSections.length <= 1
      ? "xl:grid-cols-3"
      : linkSections.length === 2
        ? "xl:grid-cols-4"
        : linkSections.length === 3
          ? "xl:grid-cols-5"
          : "xl:grid-cols-6";

  return (
    <footer className={cn("border-nav-border bg-section-dark border-t", className)}>
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className={cn("grid grid-cols-1 gap-10 md:grid-cols-2", xlGrid)}>
          <div className="md:col-span-2 xl:col-span-1">
            <Link href={logoHref} className="inline-block">
              <Image
                src={defaultHeaderConfig.logoFull}
                alt={logoAlt}
                width={200}
                height={48}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-text-secondary font-body mt-4 max-w-sm text-sm leading-relaxed">{tagline}</p>
            <ul className="mt-6 flex gap-3">
              {socialLinks.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-border-medium text-text-secondary hover:border-accent-primary hover:text-accent-primary focus-visible:outline-accent-primary inline-flex size-10 items-center justify-center rounded-full border transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
                    aria-label={s.name}
                  >
                    {socialIcon(s.platform)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {linkSections.map((section) => (
            <div key={section.title} className="xl:col-span-1">
              <h2 className="font-heading text-text-primary mb-4 text-xs font-bold tracking-widest uppercase">
                {section.title}
              </h2>
              <ul className="space-y-3">
                {section.links.map((item) => (
                  <li key={item.href + item.label}>
                    <Link
                      href={item.href}
                      className="text-text-secondary hover:text-accent-primary font-body text-sm transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-2 xl:col-span-1">
            <h2 className="font-heading text-text-primary mb-4 text-xs font-bold tracking-widest uppercase">
              {contactTitle}
            </h2>
            <ul className="text-text-secondary space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="text-accent-primary mt-0.5 size-4 shrink-0" aria-hidden />
                <span>{contact.address}</span>
              </li>
              <li className="flex gap-3">
                <Mail className="text-accent-primary mt-0.5 size-4 shrink-0" aria-hidden />
                <a href={`mailto:${contact.email}`} className="hover:text-accent-primary transition-colors">
                  {contact.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Phone className="text-accent-primary mt-0.5 size-4 shrink-0" aria-hidden />
                <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="hover:text-accent-primary transition-colors">
                  {contact.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-border-subtle mt-12 flex flex-col gap-4 border-t pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-text-muted font-body text-xs tracking-wide uppercase">{copyright}</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-text-muted hover:text-text-secondary font-body text-xs tracking-wide uppercase transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
