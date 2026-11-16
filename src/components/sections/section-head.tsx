import { BlurFade } from "@/components/ui/blur-fade";

interface Props {
  eyebrow: string;
  title: string;
}

export function SectionHead({ eyebrow, title }: Props) {
  return (
    <BlurFade inView className="flex flex-col gap-3">
      <span className="text-brand text-xs font-semibold tracking-widest uppercase">{eyebrow}</span>
      <h2 className="font-heading text-3xl font-semibold tracking-tight text-balance sm:text-5xl">{title}</h2>
    </BlurFade>
  );
}
