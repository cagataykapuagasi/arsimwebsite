import Image from "next/image";
import { Container } from "@/components/layout/container";
import { SectionHead } from "@/components/sections/section-head";
import { BlurFade } from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";
import { services, type Service } from "@/content/site";

function ServiceCard({ title, text, image, alt }: Service) {
  return (
    <MagicCard
      className="h-full rounded-3xl"
      gradientColor="var(--brand-soft)"
      gradientFrom="var(--brand-bright)"
      gradientTo="var(--brand-soft)"
    >
      <div className="relative z-40 flex h-full flex-col gap-4 p-4 pb-6 lg:pb-8">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-stone-200">
          <Image
            src={image}
            alt={alt}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-2 px-2">
          <h3 className="font-heading text-xl font-semibold">{title}</h3>
          <p className="text-sm leading-relaxed text-stone-600">{text}</p>
        </div>
      </div>
    </MagicCard>
  );
}

export function Services() {
  return (
    <section id="leistungen">
      <Container className="flex flex-col gap-10 py-16 md:gap-12 md:py-24">
        <SectionHead eyebrow="Leistungen" title="Was ich für Sie mache" />
        <div className="grid gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-4 lg:gap-6">
          {services.map((service, i) => (
            <BlurFade key={service.title} inView delay={0.1 * i} className="h-full">
              <ServiceCard {...service} />
            </BlurFade>
          ))}
        </div>
      </Container>
    </section>
  );
}
