export const contact = {
  company: "Shala Trockenbau",
  name: "Arsim Shala",
  phone: "+49 1577 8734724",
  email: "info@shalatrockenbau.com",
  street: "Dorfstraße 8",
  city: "79798 Jestetten",
  area: "Jestetten und Umgebung",
};

export const telHref = `tel:${contact.phone.replace(/\s/g, "")}`;
export const mailHref = `mailto:${contact.email}`;
export const whatsappHref = `https://wa.me/${contact.phone.replace(/\D/g, "")}`;

export interface NavItem {
  href: string;
  label: string;
}

export const nav: NavItem[] = [
  { href: "/#leistungen", label: "Leistungen" },
  { href: "/#ablauf", label: "Ablauf" },
  { href: "/#kontakt", label: "Kontakt" },
];

export interface TextItem {
  title: string;
  text: string;
}

export interface Service extends TextItem {
  icon: "drywall" | "floor" | "wallpaper" | "renovation";
}

export const services: Service[] = [
  {
    title: "Trockenbau",
    text: "Wände, Decken und Verkleidungen aus Gipskarton, sauber und termingerecht ausgeführt.",
    icon: "drywall",
  },
  {
    title: "Bodenverlegung",
    text: "Laminat, Vinyl und weitere Beläge fachgerecht verlegt, vom vorbereiteten Untergrund bis zur Sockelleiste.",
    icon: "floor",
  },
  {
    title: "Tapezieren mit Raufaser",
    text: "Raufasertapete faltenfrei tapeziert, die ideale Grundlage für einen frischen Anstrich.",
    icon: "wallpaper",
  },
  {
    title: "Renovierung",
    text: "Renovierung und Modernisierung von Innenräumen, alles aus einer Hand.",
    icon: "renovation",
  },
];

export const keywords = [
  "Trockenbau",
  "Bodenverlegung",
  "Raufasertapete",
  "Renovierung",
  "Saubere Ausführung",
  "Termintreue",
  "Jestetten und Umgebung",
];

export const steps: TextItem[] = [
  { title: "Anfrage", text: "Sie rufen an oder schreiben per WhatsApp oder E-Mail." },
  { title: "Besichtigung & Angebot", text: "Wir schauen uns alles vor Ort an, Sie erhalten ein klares Angebot." },
  { title: "Ausführung", text: "Saubere Montage zum vereinbarten Termin." },
];
