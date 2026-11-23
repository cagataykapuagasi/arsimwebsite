import { Container } from "@/components/layout/container";
import { SectionHead } from "@/components/sections/section-head";
import { BlurFade } from "@/components/ui/blur-fade";

export function About() {
  return (
    <section id="ueber-uns">
      <Container className="grid gap-6 pb-16 md:grid-cols-2 md:items-end md:gap-12 md:pb-24">
        <SectionHead eyebrow="Über uns" title="Handwerk, auf das Sie sich verlassen können" />
        <BlurFade inView delay={0.1}>
          <p className="text-base leading-relaxed text-stone-600 sm:text-lg">
            Zuverlässige Handwerksarbeit, saubere Ausführung und persönliche Betreuung. Wir legen Wert auf
            Qualität, faire Preise und eine ordentliche Umsetzung Ihrer Wünsche, vom ersten Gespräch bis zur
            Übergabe.
          </p>
        </BlurFade>
      </Container>
    </section>
  );
}
