import Image from "next/image";

// ponytail: placeholder contact data, replace with real values
const contact = {
  name: "Arsim Shala",
  phone: "+49 000 0000000",
  email: "info@example.de",
  address: "Musterstraße 1, 00000 Musterstadt",
};

function GrilleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden>
      <rect x="6" y="6" width="36" height="36" rx="3" />
      <path d="M12 14h24M12 20h24M12 26h24M12 32h24" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <header className="border-b border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <span className="text-lg font-semibold">{contact.name}</span>
          <a href="#kontakt" className="text-sm font-medium text-emerald-800 hover:underline">
            Kontakt
          </a>
        </div>
      </header>

      <main className="flex-1 bg-neutral-100">
        <section className="mx-auto max-w-6xl px-4 py-12">
          <div className="grid overflow-hidden bg-white shadow-md md:grid-cols-2">
            <div className="relative min-h-80">
              <Image
                src="/lueftungsgitter.png"
                alt="Monteur an der Decke und Lüftungsgitter"
                fill
                priority
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-4 p-8">
              <GrilleIcon className="h-10 w-10 text-neutral-700" />
              <h1 className="text-2xl font-semibold">Lüftungsgitter</h1>
              <p className="text-sm leading-relaxed text-neutral-700">
                Lüftungsgitter reduzieren die Möglichkeit der Schimmelbildung und sorgen für ausreichend
                Luftzirkulation in den Räumen. Verfügbar in vielen Farben und Variationen.
              </p>
              <a
                href="#kontakt"
                className="mt-2 self-center bg-emerald-800 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-900"
              >
                Jetzt anfragen
              </a>
            </div>
          </div>
        </section>

        <section id="kontakt" className="mx-auto max-w-6xl px-4 pb-16">
          <div className="flex flex-col gap-4 bg-white p-8 shadow-md">
            <h2 className="text-2xl font-semibold">Kontakt</h2>
            <dl className="grid gap-3 text-sm sm:grid-cols-[8rem_1fr]">
              <dt className="font-medium">Name</dt>
              <dd>{contact.name}</dd>
              <dt className="font-medium">Telefon</dt>
              <dd>
                <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="text-emerald-800 hover:underline">
                  {contact.phone}
                </a>
              </dd>
              <dt className="font-medium">E-Mail</dt>
              <dd>
                <a href={`mailto:${contact.email}`} className="text-emerald-800 hover:underline">
                  {contact.email}
                </a>
              </dd>
              <dt className="font-medium">Adresse</dt>
              <dd>{contact.address}</dd>
            </dl>
          </div>
        </section>
      </main>

      <footer className="border-t border-neutral-200 bg-white py-6 text-center text-xs text-neutral-500">
        © 2026 {contact.name}
      </footer>
    </>
  );
}
