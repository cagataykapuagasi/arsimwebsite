import { DrywallIcon, FloorIcon, HouseIcon, WallpaperIcon } from "@/components/icons";
import { Container } from "@/components/layout/container";
import { SectionHead } from "@/components/sections/section-head";
import { BlurFade } from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";
import { services, type Service } from "@/content/site";

const serviceIcons = { drywall: DrywallIcon, floor: FloorIcon, wallpaper: WallpaperIcon, renovation: HouseIcon };

function ServiceCard({ title, text, icon }: Service) {
  const Icon = serviceIcons[icon];
  return (
    <MagicCard
      className="h-full rounded-3xl"
      gradientColor="var(--brand-soft)"
      gradientFrom="var(--brand-bright)"
      gradientTo="var(--brand-soft)"
    >
      <div className="relative z-40 flex h-full flex-col gap-4 p-6 lg:p-8">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-soft/50">
          <Icon className="text-brand h-7 w-7" />
        </span>
        <h3 className="font-heading text-xl font-semibold">{title}</h3>
        <p className="text-sm leading-relaxed text-stone-600">{text}</p>
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
