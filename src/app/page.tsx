import { Hero } from "@/components/hero";
import { Steps } from "@/components/steps";
import { BlurFade } from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";
import { Marquee } from "@/components/ui/marquee";
import { ShineBorder } from "@/components/ui/shine-border";

// ponytail: placeholder content, replace contact data, services and projects with real values
const contact = {
  name: "Arsim Shala",
  phone: "+49 000 0000000",
  email: "info@example.de",
  address: "Musterstraße 1, 00000 Musterstadt",
  area: "Musterstadt und Umgebung",
};
const tel = `tel:${contact.phone.replace(/\s/g, "")}`;

const nav = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#referenzen", label: "Referenzen" },
  { href: "#ablauf", label: "Ablauf" },
  { href: "#kontakt", label: "Kontakt" },
];

const services = [
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

const keywords = ["Lüftungsgitter", "Revisionsklappen", "Trockenbau", "Deckenmontage", "Saubere Ausführung", "Termintreue"];

const projects = ["Bad, Musterstadt", "Büro, Musterstadt", "Wohnung, Musterstadt"];

const steps = [
  { title: "Anfrage", text: "Sie rufen an oder schreiben eine E-Mail mit Ihrem Vorhaben." },
  { title: "Besichtigung & Angebot", text: "Wir schauen uns alles vor Ort an, Sie erhalten ein klares Angebot." },
  { title: "Ausführung", text: "Saubere Montage zum vereinbarten Termin." },
];

function GrilleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden>
      <rect x="6" y="6" width="36" height="36" rx="3" />
      <path d="M12 14h24M12 20h24M12 26h24M12 32h24" />
    </svg>
  );
}

function SectionHead({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <BlurFade inView className="flex flex-col gap-3">
      <span className="text-xs font-semibold tracking-widest text-amber-600 uppercase">{eyebrow}</span>
      <h2 className="font-heading text-4xl font-semibold tracking-tight text-balance sm:text-5xl">{title}</h2>
    </BlurFade>
  );
}

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-stone-200/70 bg-background/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4">
          <a href="#" className="font-heading flex items-center gap-2 text-lg font-semibold">
            <GrilleIcon className="h-6 w-6 text-amber-600" />
            {contact.name}
          </a>
          <nav className="hidden gap-8 text-sm text-stone-600 md:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="transition-colors hover:text-stone-900">
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href={tel}
            className="rounded-full bg-stone-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-amber-600"
          >
            Anrufen
          </a>
        </div>
      </header>

      <main className="flex-1">
        <Hero area={contact.area} phone={contact.phone} tel={tel} />

        <div className="border-y border-stone-200 bg-white py-5">
          <Marquee pauseOnHover className="[--duration:30s] [--gap:3rem]">
            {keywords.map((k) => (
              <span key={k} className="font-heading flex items-center gap-12 text-2xl font-medium text-stone-400">
                {k}
                <span className="text-amber-500">✦</span>
              </span>
            ))}
          </Marquee>
        </div>

        <section id="leistungen" className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-24">
          <SectionHead eyebrow="Leistungen" title="Was ich für Sie mache" />
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((s, i) => (
              <BlurFade key={s.title} inView delay={0.1 * i} className="h-full">
                <MagicCard className="h-full rounded-3xl" gradientColor="#fde68a" gradientFrom="#f59e0b" gradientTo="#fde68a">
                  <div className="relative z-40 flex h-full flex-col gap-4 p-8">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50">
                      <GrilleIcon className="h-7 w-7 text-amber-600" />
                    </span>
                    <h3 className="font-heading text-xl font-semibold">{s.title}</h3>
                    <p className="text-sm leading-relaxed text-stone-600">{s.text}</p>
                  </div>
                </MagicCard>
              </BlurFade>
            ))}
          </div>
        </section>

        <section id="referenzen" className="mx-auto flex max-w-6xl flex-col gap-12 px-4 pb-24">
          <SectionHead eyebrow="Referenzen" title="Ausgewählte Projekte" />
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {projects.map((p, i) => (
              <BlurFade key={p} inView delay={0.1 * i}>
                <figure className="group flex flex-col gap-3">
                  <div className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-3xl bg-stone-200 transition-transform duration-500 group-hover:scale-[0.98]">
                    <GrilleIcon className="h-12 w-12 text-stone-400 transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <figcaption className="text-sm text-stone-600">{p}</figcaption>
                </figure>
              </BlurFade>
            ))}
          </div>
        </section>

        <section id="ablauf" className="bg-stone-900 py-24 text-stone-100">
          <div className="mx-auto flex max-w-6xl flex-col gap-14 px-4">
            <SectionHead eyebrow="Ablauf" title="In drei Schritten zum Ergebnis" />
            <Steps steps={steps} />
          </div>
        </section>

        <section id="kontakt" className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-24 md:grid-cols-2">
          <div className="flex flex-col gap-5">
            <SectionHead eyebrow="Kontakt" title="Projekt besprechen?" />
            <BlurFade inView delay={0.1}>
              <p className="max-w-sm text-lg text-stone-600">
                Rufen Sie an oder schreiben Sie mir. Ich melde mich schnellstmöglich zurück.
              </p>
            </BlurFade>
          </div>
          <BlurFade inView delay={0.15}>
            <div className="relative overflow-hidden rounded-3xl bg-white p-8 shadow-xl shadow-stone-900/5">
              <ShineBorder shineColor={["#f59e0b", "#fde68a", "#d6d3d1"]} borderWidth={1.5} />
              <dl className="grid gap-5 text-sm sm:grid-cols-[7rem_1fr]">
                <dt className="text-stone-500">Name</dt>
                <dd className="font-medium">{contact.name}</dd>
                <dt className="text-stone-500">Telefon</dt>
                <dd>
                  <a href={tel} className="font-medium text-amber-700 hover:underline">
                    {contact.phone}
                  </a>
                </dd>
                <dt className="text-stone-500">E-Mail</dt>
                <dd>
                  <a href={`mailto:${contact.email}`} className="font-medium text-amber-700 hover:underline">
                    {contact.email}
                  </a>
                </dd>
                <dt className="text-stone-500">Adresse</dt>
                <dd className="font-medium">{contact.address}</dd>
              </dl>
            </div>
          </BlurFade>
        </section>
      </main>

      <footer className="border-t border-stone-200">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-4 px-4 py-6 text-xs text-stone-500">
          <span>© 2026 {contact.name}</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-stone-900">
              Impressum
            </a>
            <a href="#" className="hover:text-stone-900">
              Datenschutz
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
