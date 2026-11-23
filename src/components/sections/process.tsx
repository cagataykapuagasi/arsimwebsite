import { Container } from "@/components/layout/container";
import { ProcessSteps } from "@/components/sections/process-steps";
import { SectionHead } from "@/components/sections/section-head";
import { steps } from "@/content/site";

export function Process() {
  return (
    <section id="ablauf" className="bg-stone-900 text-stone-100">
      <Container className="flex flex-col gap-10 py-16 md:gap-14 md:py-24">
        <SectionHead onDark eyebrow="Ablauf" title="In drei Schritten zum Ergebnis" />
        <ProcessSteps steps={steps} />
      </Container>
    </section>
  );
}
