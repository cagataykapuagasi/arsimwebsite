import type { ReactNode } from "react";
import { Container } from "@/components/layout/container";
import { SectionHead } from "@/components/sections/section-head";
import { BlurFade } from "@/components/ui/blur-fade";
import { ShineBorder } from "@/components/ui/shine-border";
import { contact, mailHref, telHref, whatsappHref } from "@/content/site";

function ContactRow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <>
      <dt className="pt-3 text-sm text-stone-500 first:pt-0 sm:pt-0">{label}</dt>
      <dd className="font-medium">{children}</dd>
    </>
  );
}

function ContactLink({ href, children, external }: { href: string; children: ReactNode; external?: boolean }) {
  return (
    <a
      href={href}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      className="text-brand-strong -my-3 inline-flex min-h-11 items-center py-3 hover:underline">
      {children}
    </a>
  );
}

export function Contact() {
  return (
    <section id="kontakt">
      <Container className="grid items-center gap-10 py-16 md:gap-12 md:py-24 lg:grid-cols-2">
        <div className="flex flex-col gap-5">
          <SectionHead eyebrow="Kontakt" title="Projekt besprechen?" />
          <BlurFade inView delay={0.1}>
            <p className="max-w-sm text-base text-stone-600 sm:text-lg">
              Rufen Sie uns an oder schreiben Sie uns per WhatsApp oder E-Mail. Wir melden uns schnellstmöglich zurück.
            </p>
          </BlurFade>
        </div>
        <BlurFade inView delay={0.15}>
          <div className="relative overflow-hidden rounded-3xl bg-white p-6 shadow-xl shadow-stone-900/5 sm:p-8">
            <ShineBorder shineColor={["var(--brand-bright)", "var(--brand-soft)", "var(--brand-muted)"]} borderWidth={1.5} />
            <dl className="grid gap-x-6 gap-y-1 text-base sm:grid-cols-[7rem_1fr] sm:gap-y-3 sm:text-sm">
              <ContactRow label="Name">{contact.name}</ContactRow>
              <ContactRow label="Telefon">
                <ContactLink href={telHref}>{contact.phone}</ContactLink>
              </ContactRow>
              <ContactRow label="WhatsApp">
                <ContactLink href={whatsappHref} external>
                  Nachricht schreiben
                </ContactLink>
              </ContactRow>
              <ContactRow label="E-Mail">
                <ContactLink href={mailHref}>{contact.email}</ContactLink>
              </ContactRow>
              <ContactRow label="Adresse">
                {contact.street}, {contact.city}
              </ContactRow>
            </dl>
          </div>
        </BlurFade>
      </Container>
    </section>
  );
}
