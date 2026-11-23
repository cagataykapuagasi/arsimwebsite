import { Marquee } from "@/components/ui/marquee";
import { keywords } from "@/content/site";

export function KeywordMarquee() {
  return (
    <div className="border-y border-stone-200 bg-white py-4 sm:py-5">
      <Marquee pauseOnHover className="[--duration:30s] [--gap:3rem]">
        {keywords.map((keyword) => (
          <span key={keyword} className="font-heading flex items-center gap-12 text-xl font-medium text-stone-400 sm:text-2xl">
            {keyword}
            <span aria-hidden className="text-brand">
              ✦
            </span>
          </span>
        ))}
      </Marquee>
    </div>
  );
}
