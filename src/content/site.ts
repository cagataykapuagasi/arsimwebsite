// ponytail: placeholder content, replace contact data, services and projects with real values
export const contact = {
  name: "Arsim Shala",
  phone: "+49 000 0000000",
  email: "info@example.de",
  address: "Musterstraße 1, 00000 Musterstadt",
};

export const telHref = `tel:${contact.phone.replace(/\s/g, "")}`;
export const mailHref = `mailto:${contact.email}`;

export interface NavItem {
  href: string;
  label: string;
}

export const nav: NavItem[] = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#referenzen", label: "Referenzen" },
  { href: "#ablauf", label: "Ablauf" },
  { href: "#kontakt", label: "Kontakt" },
];

export interface TextItem {
  title: string;
  text: string;
}

export const services: TextItem[] = [
  {
    title: "Lüftungsgitter",
    text: "Montage von Lüftungsgittern gegen Schimmel und für gute Luftzirkulation. In vielen Farben und Variationen.",
  },
  {
    title: "Revisionsklappen",
    text: "Unsichtbarer, nachträglicher Zugang zu Installationen in Wand und Decke.",
  },
  {
    title: "Trockenbau",
    text: "Wände, Decken und Verkleidungen sauber und termingerecht ausgeführt.",
  },
];

export const keywords = [
  "Lüftungsgitter",
  "Revisionsklappen",
  "Trockenbau",
  "Deckenmontage",
  "Saubere Ausführung",
  "Termintreue",
];

export const projects = ["Bad, Musterstadt", "Büro, Musterstadt", "Wohnung, Musterstadt"];

export const steps: TextItem[] = [
  { title: "Anfrage", text: "Sie rufen an oder schreiben eine E-Mail mit Ihrem Vorhaben." },
  { title: "Besichtigung & Angebot", text: "Wir schauen uns alles vor Ort an, Sie erhalten ein klares Angebot." },
  { title: "Ausführung", text: "Saubere Montage zum vereinbarten Termin." },
];
