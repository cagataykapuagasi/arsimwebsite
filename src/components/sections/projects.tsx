import { GrilleIcon } from "@/components/icons/grille-icon";
import { Container } from "@/components/layout/container";
import { SectionHead } from "@/components/sections/section-head";
import { BlurFade } from "@/components/ui/blur-fade";
import { projects } from "@/content/site";

function ProjectCard({ caption }: { caption: string }) {
  return (
    <figure className="group flex flex-col gap-3">
      <div className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-3xl bg-stone-200 transition-transform duration-500 group-hover:scale-[0.98]">
        <GrilleIcon className="h-12 w-12 text-stone-400 transition-transform duration-500 group-hover:scale-110" />
      </div>
      <figcaption className="text-sm text-stone-600">{caption}</figcaption>
    </figure>
  );
}

export function Projects() {
  return (
    <section id="referenzen">
      <Container className="flex flex-col gap-10 pb-16 md:gap-12 md:pb-24">
        <SectionHead eyebrow="Referenzen" title="Ausgewählte Projekte" />
        <div className="grid gap-6 md:grid-cols-3 md:gap-5 lg:gap-6">
          {projects.map((project, i) => (
            <BlurFade key={project} inView delay={0.1 * i}>
              <ProjectCard caption={project} />
            </BlurFade>
          ))}
        </div>
      </Container>
    </section>
  );
}
