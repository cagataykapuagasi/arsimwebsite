import type { ReactNode } from "react";
import { Container } from "@/components/layout/container";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

interface LegalPageProps {
  title: string;
  updated: string;
  children: ReactNode;
}

export function LegalPage({ title, updated, children }: LegalPageProps) {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Container className="flex max-w-3xl flex-col gap-10 py-12 break-words hyphens-auto md:py-20">
          <div className="flex flex-col gap-3">
            <h1 className="font-heading text-3xl font-semibold tracking-tight sm:text-5xl">{title}</h1>
            <p className="text-sm text-stone-500">Stand: {updated}</p>
          </div>
          <div className="flex flex-col gap-10">{children}</div>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}

interface LegalSectionProps {
  title: string;
  children: ReactNode;
}

export function LegalSection({ title, children }: LegalSectionProps) {
  return (
    <section className="flex flex-col gap-3 text-base leading-relaxed text-stone-700">
      <h2 className="font-heading text-xl font-semibold text-stone-900 sm:text-2xl">{title}</h2>
      {children}
    </section>
  );
}

export function LegalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} className="text-brand-strong -my-3 inline-flex min-h-11 items-center py-3 font-medium hover:underline">
      {children}
    </a>
  );
}
