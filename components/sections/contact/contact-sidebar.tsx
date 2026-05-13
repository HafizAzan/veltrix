"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Heading, Body, Small } from "@/components/ui/typography";
import { ButtonLink } from "@/components/ui/button-link";
import { formatTimeInTimeZone } from "@/lib/helpers";
import { contactSidebar } from "@/data/contact.data";

export function ContactSidebar() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(t);
  }, []);

  const localTime = formatTimeInTimeZone(now, "Asia/Karachi");

  return (
    <div className="flex flex-col gap-6">
      <Card>
        <Heading as="h3" className="text-lg">
          Contact
        </Heading>
        <Body className="mt-3 text-sm">
          <a className="text-accent-primary hover:underline" href={`mailto:${contactSidebar.email}`}>
            {contactSidebar.email}
          </a>
        </Body>
        <Body className="mt-2 text-sm">
          <a className="text-accent-primary hover:underline" href={`tel:${contactSidebar.phone.replace(/\s/g, "")}`}>
            {contactSidebar.phone}
          </a>
        </Body>
        <Small className="text-text-muted mt-3">Response: {contactSidebar.response}</Small>
      </Card>
      <Card className="border-accent-primary/40 bg-accent-primary/10">
        <Heading as="h3" className="text-lg">
          {contactSidebar.calendlyTitle}
        </Heading>
        <ButtonLink href={contactSidebar.calendlyHref} className="mt-4" variant="primary" size="md">
          {contactSidebar.calendlyCta}
        </ButtonLink>
      </Card>
      <Card>
        <Small className="text-accent-primary tracking-widest uppercase">Our office</Small>
        <Body className="mt-2 text-sm">{contactSidebar.office.city}</Body>
        <Small className="text-text-muted mt-1">{contactSidebar.office.tz}</Small>
        <div className="border-border-subtle mt-4 border-t pt-4">
          <Small className="text-text-muted">Current local time</Small>
          <p className="text-text-primary font-mono text-lg">{localTime}</p>
        </div>
      </Card>
      <Card>
        <Small className="text-accent-primary tracking-widest uppercase">Follow us</Small>
        <ul className="mt-3 space-y-2">
          {contactSidebar.social.map((s) => (
            <li key={s.label}>
              <a href={s.href} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent-primary flex items-center justify-between text-sm transition">
                {s.label}
                <span aria-hidden>→</span>
              </a>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
