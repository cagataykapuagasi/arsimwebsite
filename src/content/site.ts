// ponytail: projects are placeholders until real photos arrive
export const contact = {
  name: "Arsim Shala",
  phone: "+49 1577 8734724",
  email: "arsimshala@live.com",
  address: "Dorfstraße 8, 79798 Jestetten",
  area: "Jestetten und Umgebung",
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

export interface Service extends TextItem {
  icon: "drywall" | "floor" | "wallpaper";
}

export const services: Service[] = [
  {
    title: "Trockenbau",
    text: "Wände, Decken und Verkleidungen aus Gipskarton, sauber und termingerecht ausgeführt.",
    icon: "drywall",
  },
  {
    title: "Bodenverlegung",
    text: "Neue Böden fachgerecht verlegt, vom vorbereiteten Untergrund bis zur Sockelleiste.",
    icon: "floor",
  },
  {
    title: "Tapezieren mit Raufaser",
    text: "Raufasertapete faltenfrei tapeziert, die ideale Grundlage für einen frischen Anstrich.",
    icon: "wallpaper",
  },
];

export const keywords = [
  "Trockenbau",
  "Bodenverlegung",
  "Raufasertapete",
  "Saubere Ausführung",
  "Termintreue",
  "Jestetten und Umgebung",
];

export const projects = ["Trockenbau", "Bodenverlegung", "Tapezieren mit Raufaser"];

export const steps: TextItem[] = [
  { title: "Anfrage", text: "Sie rufen an oder schreiben eine E-Mail mit Ihrem Vorhaben." },
  { title: "Besichtigung & Angebot", text: "Wir schauen uns alles vor Ort an, Sie erhalten ein klares Angebot." },
  { title: "Ausführung", text: "Saubere Montage zum vereinbarten Termin." },
];
