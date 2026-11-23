import { BlurFade } from "@/components/ui/blur-fade";
import { cn } from "@/lib/utils";

interface Props {
  eyebrow: string;
  title: string;
  onDark?: boolean;
}

export function SectionHead({ eyebrow, title, onDark }: Props) {
  return (
    <BlurFade inView className="flex flex-col gap-3">
      <span className={cn("text-xs font-semibold tracking-widest uppercase", onDark ? "text-brand-soft" : "text-brand")}>{eyebrow}</span>
      <h2 className="font-heading text-3xl font-semibold tracking-tight text-balance sm:text-5xl">{title}</h2>
    </BlurFade>
  );
}
