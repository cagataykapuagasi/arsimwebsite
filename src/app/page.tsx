import Image from "next/image";

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
    <div className="flex flex-col gap-2">
      <span className="text-xs font-semibold uppercase tracking-widest text-amber-600">{eyebrow}</span>
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-10 border-b border-stone-200 bg-stone-50/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4">
          <a href="#" className="flex items-center gap-2 font-semibold">
            <GrilleIcon className="h-6 w-6 text-amber-600" />
            {contact.name}
          </a>
          <nav className="hidden gap-6 text-sm text-stone-600 md:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-stone-900">
                {n.label}
              </a>
            ))}
          </nav>
          <a href={tel} className="rounded-full bg-stone-900 px-4 py-2 text-sm font-medium text-white hover:bg-stone-700">
            Anrufen
          </a>
        </div>
      </header>

      <main className="flex-1">
        <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <div className="flex flex-col gap-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-600">
              Montage · {contact.area}
            </span>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Lüftungsgitter & Trockenbau, sauber montiert.
            </h1>
            <p className="max-w-md text-lg text-stone-600">
              Ihr Ansprechpartner für gesunde Raumluft und unsichtbare Zugänge. Direkt vom Fachmann, ohne Umwege.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#kontakt" className="rounded-full bg-amber-500 px-6 py-3 font-medium text-stone-900 hover:bg-amber-400">
                Kostenlos anfragen
              </a>
              <a href={tel} className="rounded-full border border-stone-300 px-6 py-3 font-medium hover:border-stone-900">
                {contact.phone}
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-stone-200">
            <Image
              src="/lueftungsgitter.png"
              alt="Monteur an der Decke und Lüftungsgitter"
              fill
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </section>

        <section id="leistungen" className="scroll-mt-20 bg-white py-20">
          <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4">
            <SectionHead eyebrow="Leistungen" title="Was ich für Sie mache" />
            <div className="grid gap-6 md:grid-cols-3">
              {services.map((s) => (
                <article key={s.title} className="flex flex-col gap-3 rounded-2xl border border-stone-200 p-6">
                  <GrilleIcon className="h-8 w-8 text-amber-600" />
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                  <p className="text-sm leading-relaxed text-stone-600">{s.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="referenzen" className="mx-auto flex max-w-6xl scroll-mt-20 flex-col gap-10 px-4 py-20">
          <SectionHead eyebrow="Referenzen" title="Ausgewählte Projekte" />
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {projects.map((p) => (
              <figure key={p} className="flex flex-col gap-3">
                <div className="flex aspect-[4/3] items-center justify-center rounded-2xl bg-stone-200">
                  <GrilleIcon className="h-12 w-12 text-stone-400" />
                </div>
                <figcaption className="text-sm text-stone-600">{p}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="ablauf" className="scroll-mt-20 bg-stone-900 py-20 text-stone-100">
          <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4">
            <SectionHead eyebrow="Ablauf" title="In drei Schritten zum Ergebnis" />
            <ol className="grid gap-8 md:grid-cols-3">
              {steps.map((s, i) => (
                <li key={s.title} className="flex flex-col gap-2">
                  <span className="text-4xl font-semibold text-amber-500">0{i + 1}</span>
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                  <p className="text-sm text-stone-400">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="kontakt" className="mx-auto grid max-w-6xl scroll-mt-20 gap-10 px-4 py-20 md:grid-cols-2">
          <div className="flex flex-col gap-4">
            <SectionHead eyebrow="Kontakt" title="Projekt besprechen?" />
            <p className="text-stone-600">Rufen Sie an oder schreiben Sie mir. Ich melde mich schnellstmöglich zurück.</p>
          </div>
          <dl className="grid gap-4 rounded-3xl bg-white p-8 text-sm shadow-sm sm:grid-cols-[7rem_1fr]">
            <dt className="font-medium text-stone-500">Name</dt>
            <dd>{contact.name}</dd>
            <dt className="font-medium text-stone-500">Telefon</dt>
            <dd>
              <a href={tel} className="font-medium text-amber-700 hover:underline">
                {contact.phone}
              </a>
            </dd>
            <dt className="font-medium text-stone-500">E-Mail</dt>
            <dd>
              <a href={`mailto:${contact.email}`} className="font-medium text-amber-700 hover:underline">
                {contact.email}
              </a>
            </dd>
            <dt className="font-medium text-stone-500">Adresse</dt>
            <dd>{contact.address}</dd>
          </dl>
        </section>
      </main>

      <footer className="border-t border-stone-200">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-4 px-4 py-6 text-xs text-stone-500">
          <span>© 2026 {contact.name}</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-stone-900">Impressum</a>
            <a href="#" className="hover:text-stone-900">Datenschutz</a>
          </div>
        </div>
      </footer>
    </>
  );
}
