import type { Metadata } from "next";
import { LegalLink, LegalPage, LegalSection } from "@/components/layout/legal-page";
import { contact, mailHref, telHref } from "@/content/site";

export const metadata: Metadata = {
  title: `Datenschutzerklärung – ${contact.company}`,
};

const rights = [
  "Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)",
  "Berichtigung unrichtiger Daten (Art. 16 DSGVO)",
  "Löschung Ihrer Daten (Art. 17 DSGVO)",
  "Einschränkung der Verarbeitung (Art. 18 DSGVO)",
  "Datenübertragbarkeit (Art. 20 DSGVO)",
  "Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)",
];

export default function DatenschutzPage() {
  return (
    <LegalPage title="Datenschutzerklärung" updated="November 2026">
      <LegalSection title="1. Verantwortlicher">
        <address className="not-italic">
          {contact.name} ({contact.company})
          <br />
          {contact.street}
          <br />
          {contact.city}
        </address>
        <p>
          Telefon: <LegalLink href={telHref}>{contact.phone}</LegalLink>
          <br />
          E-Mail: <LegalLink href={mailHref}>{contact.email}</LegalLink>
        </p>
      </LegalSection>

      <LegalSection title="2. Allgemeines">
        <p>
          Der Schutz Ihrer persönlichen Daten ist uns wichtig. Diese Website verwendet keine Cookies, keine
          Analyse- oder Tracking-Werkzeuge und kein Kontaktformular. Schriftarten und alle weiteren Inhalte
          werden direkt von unserem Server ausgeliefert, es werden dabei keine Daten an Dritte wie Google
          übertragen.
        </p>
      </LegalSection>

      <LegalSection title="3. Hosting und Server-Logfiles">
        <p>
          Diese Website wird bei einem externen Hosting-Dienstleister betrieben. Beim Aufruf der Website
          werden automatisch Informationen erfasst, die Ihr Browser übermittelt: IP-Adresse, Datum und
          Uhrzeit des Zugriffs, aufgerufene Seite, Referrer-URL sowie Browser und Betriebssystem.
        </p>
        <p>
          Diese Daten sind technisch erforderlich, um die Website sicher und stabil bereitzustellen.
          Rechtsgrundlage ist unser berechtigtes Interesse nach Art. 6 Abs. 1 lit. f DSGVO. Die Daten werden
          nicht mit anderen Datenquellen zusammengeführt und nach kurzer Zeit gelöscht, soweit keine längere
          Aufbewahrung zu Sicherheitszwecken erforderlich ist.
        </p>
        <p>
          Der Hosting-Dienstleister hat seinen Sitz in den USA. Mit ihm besteht ein Vertrag zur
          Auftragsverarbeitung nach Art. 28 DSGVO. Die Übermittlung in die USA erfolgt auf Grundlage des
          Angemessenheitsbeschlusses der EU-Kommission zum EU-U.S. Data Privacy Framework (Art. 45 DSGVO)
          sowie ergänzend der EU-Standardvertragsklauseln (Art. 46 Abs. 2 lit. c DSGVO).
        </p>
      </LegalSection>

      <LegalSection title="4. Kontakt per E-Mail oder Telefon">
        <p>
          Wenn Sie uns per E-Mail oder Telefon kontaktieren, verarbeiten wir Ihre Angaben (z. B. Name,
          Kontaktdaten und Ihr Anliegen), um Ihre Anfrage zu bearbeiten. Rechtsgrundlage ist Art. 6 Abs. 1
          lit. b DSGVO, sofern Ihre Anfrage mit einem Vertrag oder dessen Anbahnung zusammenhängt, ansonsten
          unser berechtigtes Interesse an der Beantwortung nach Art. 6 Abs. 1 lit. f DSGVO.
        </p>
        <p>
          Wir löschen Ihre Daten, sobald sie für die Bearbeitung nicht mehr erforderlich sind und keine
          gesetzlichen Aufbewahrungspflichten entgegenstehen.
        </p>
      </LegalSection>

      <LegalSection title="5. SSL-/TLS-Verschlüsselung">
        <p>
          Diese Website nutzt eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie
          an „https://“ in der Adresszeile Ihres Browsers.
        </p>
      </LegalSection>

      <LegalSection title="6. Ihre Rechte">
        <p>Sie haben jederzeit das Recht auf:</p>
        <ul className="flex list-disc flex-col gap-1 pl-5">
          {rights.map((right) => (
            <li key={right}>{right}</li>
          ))}
        </ul>
        <p>
          Außerdem haben Sie das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren (Art. 77
          DSGVO). Zuständig für uns ist der Landesbeauftragte für den Datenschutz und die
          Informationsfreiheit Baden-Württemberg.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
