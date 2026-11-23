import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { MobileNav } from "@/components/layout/mobile-nav";
import { contact, nav, telHref } from "@/content/site";
import logo from "../../../public/logo.png";

export function SiteHeader() {
  return (
    <header className="bg-background/75 sticky top-0 z-50 border-b border-stone-200/70 backdrop-blur-xl">
      <Container className="flex items-center gap-2 py-2 sm:gap-3 md:justify-between md:gap-6">
        <Link href="/" className="font-heading mr-auto flex min-h-11 items-center gap-2 text-base font-semibold whitespace-nowrap sm:text-lg md:mr-0">
          <Image src={logo} alt="" priority className="h-8 w-8 sm:h-9 sm:w-9" />
          {contact.company}
        </Link>
        <nav aria-label="Hauptnavigation" className="hidden text-sm text-stone-600 md:flex lg:gap-2">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="flex min-h-11 items-center px-2 transition-colors hover:text-stone-900 lg:px-3"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href={telHref}
          className="hover:bg-brand flex h-11 items-center rounded-full bg-stone-900 px-4 sm:px-5 text-sm font-medium text-white transition-colors"
        >
          Anrufen
        </a>
        <MobileNav items={nav} />
      </Container>
    </header>
  );
}
