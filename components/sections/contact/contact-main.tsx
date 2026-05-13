"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Heading, Body, Small } from "@/components/ui/typography";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import Button from "@/components/ui/button";
import { ContactSidebar } from "@/components/sections/contact/contact-sidebar";
import { contactFormCopy, contactServiceOptions, contactBudgetOptions, contactReferralOptions } from "@/data/contact.data";

export function ContactMain() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  return (
    <section id="contact-form" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 md:py-16">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
        <Card padding="lg" className="lg:p-10">
          <Heading as="h2" className="text-2xl">
            {contactFormCopy.title}
          </Heading>
          <Body className="mt-2 text-sm">{contactFormCopy.subtitle}</Body>
          <form
            className="mt-8 space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              setStatus("sent");
            }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Input name="fullName" label="Full name" required placeholder="Jane Doe" />
              <Input name="email" type="email" label="Email" required placeholder="you@company.com" />
              <Input name="company" label="Company" placeholder="Acme Inc." />
              <Input name="phone" label="Phone" placeholder="+92 …" />
            </div>
            <div>
              <Small className="text-text-secondary mb-2 block tracking-wide uppercase">What services do you need?</Small>
              <div className="flex flex-wrap gap-2">
                {contactServiceOptions.map((o) => (
                  <label key={o.value} className="border-border-medium text-text-secondary font-body flex cursor-pointer items-center gap-2 rounded-full border px-3 py-1.5 text-xs">
                    <input type="checkbox" name="services" value={o.value} className="accent-accent-primary" />
                    {o.label}
                  </label>
                ))}
              </div>
            </div>
            <div>
              <Small className="text-text-secondary mb-2 block tracking-wide uppercase">Estimated budget</Small>
              <div className="flex flex-wrap gap-2">
                {contactBudgetOptions.map((o) => (
                  <label key={o.value} className="border-border-medium text-text-secondary font-body flex cursor-pointer items-center gap-2 rounded-full border px-3 py-1.5 text-xs">
                    <input type="radio" name="budget" value={o.value} className="accent-accent-primary" />
                    {o.label}
                  </label>
                ))}
              </div>
            </div>
            <Textarea name="message" label="Tell us about the project" required placeholder="Goals, timeline, constraints…" />
            <Select name="referral" label="How did you find us?" options={contactReferralOptions} placeholder="Select one" />
            <Checkbox name="nda" label="I would like to sign an NDA before sharing sensitive details." />
            <Button type="submit" size="lg" fullWidth>
              {status === "sent" ? "Thanks — we will reply soon" : "Send my project details →"}
            </Button>
          </form>
        </Card>
        <ContactSidebar />
      </div>
    </section>
  );
}
