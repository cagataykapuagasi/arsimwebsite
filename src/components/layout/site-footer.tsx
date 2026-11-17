import { cacheLife } from "next/cache";
import { Container } from "@/components/layout/container";
import { contact } from "@/content/site";

// ponytail: Impressum/Datenschutz pages are legally required in Germany before launch
const legalLinks = [
  { href: "#", label: "Impressum" },
  { href: "#", label: "Datenschutz" },
];

async function CurrentYear() {
  "use cache";
  cacheLife("days");
  return new Date().getFullYear();
}

export function SiteFooter() {
  return (
    <footer className="border-t border-stone-200">
      <Container className="flex flex-wrap items-center justify-between gap-x-4 py-3 text-xs text-stone-500">
        <span>
          © <CurrentYear /> {contact.company} · Inh. {contact.name}
        </span>
        <nav aria-label="Rechtliches" className="flex gap-2">
          {legalLinks.map((link) => (
            <a key={link.label} href={link.href} className="flex min-h-11 items-center px-2 hover:text-stone-900">
              {link.label}
            </a>
          ))}
        </nav>
      </Container>
    </footer>
  );
}
