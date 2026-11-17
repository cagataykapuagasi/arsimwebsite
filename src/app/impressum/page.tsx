import type { Metadata } from "next";
import { LegalLink, LegalPage, LegalSection } from "@/components/layout/legal-page";
import { contact, mailHref, telHref } from "@/content/site";

export const metadata: Metadata = {
  title: `Impressum – ${contact.company}`,
};

// ponytail: add a "Umsatzsteuer-ID" section here if one is issued (Kleinunternehmer § 19 UStG have none)
export default function ImpressumPage() {
  return (
    <LegalPage title="Impressum" updated="November 2026">
      <LegalSection title="Angaben gemäß § 5 DDG">
        <address className="not-italic">
          {contact.company}
          <br />
          Inhaber: {contact.name}
          <br />
          {contact.street}
          <br />
          {contact.city}
        </address>
        <p>Rechtsform: Einzelunternehmen</p>
      </LegalSection>

      <LegalSection title="Kontakt">
        <p>
          Telefon: <LegalLink href={telHref}>{contact.phone}</LegalLink>
          <br />
          E-Mail: <LegalLink href={mailHref}>{contact.email}</LegalLink>
        </p>
      </LegalSection>

      <LegalSection title="Verbraucherstreitbeilegung">
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
