"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { BorderBeam } from "@/components/ui/border-beam";
import { DotPattern } from "@/components/ui/dot-pattern";
import { ShimmerButton } from "@/components/ui/shimmer-button";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

interface Props {
  area: string;
  phone: string;
  tel: string;
}

export function Hero({ area, phone, tel }: Props) {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
        const split = SplitText.create("[data-hero-title]", { type: "words", mask: "words" });
        gsap
          .timeline({ defaults: { ease: "power4.out" } })
          .from(split.words, { yPercent: 110, duration: 1.1, stagger: 0.06 })
          .from("[data-hero-fade]", { autoAlpha: 0, y: 20, duration: 0.8, stagger: 0.1 }, "-=0.7")
          .from("[data-hero-media]", { clipPath: "inset(100% 0 0 0)", duration: 1.2, ease: "expo.out" }, 0.2);

        gsap.to("[data-hero-img]", {
          yPercent: 12,
          scale: 1.08,
          ease: "none",
          scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
        });
        return () => split.revert();
      });
    },
    { scope: root },
  );

  const goToContact = () => document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section ref={root} className="relative overflow-hidden">
      <DotPattern className="text-stone-300 [mask-image:radial-gradient(600px_circle_at_20%_30%,white,transparent)]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 md:grid-cols-[1.1fr_1fr] md:py-28">
        <div className="flex flex-col gap-7">
          <div data-hero-fade className="w-fit rounded-full border border-stone-200 bg-white/70 px-4 py-1.5 backdrop-blur">
            <AnimatedShinyText className="text-xs font-medium uppercase tracking-widest">
              Montage · {area}
            </AnimatedShinyText>
          </div>
          <h1
            data-hero-title
            className="font-heading text-5xl leading-[1.02] font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl"
          >
            Lüftungsgitter & Trockenbau, <span className="text-amber-600">sauber montiert.</span>
          </h1>
          <p data-hero-fade className="max-w-md text-lg text-stone-600">
            Ihr Ansprechpartner für gesunde Raumluft und unsichtbare Zugänge. Direkt vom Fachmann, ohne Umwege.
          </p>
          <div data-hero-fade className="flex flex-wrap items-center gap-3">
            <ShimmerButton onClick={goToContact} background="oklch(0.216 0.006 56)" className="px-6 py-3 font-medium">
              Kostenlos anfragen
            </ShimmerButton>
            <a
              href={tel}
              className="rounded-full border border-stone-300 px-6 py-3 font-medium transition-colors hover:border-stone-900"
            >
              {phone}
            </a>
          </div>
        </div>
        <div data-hero-media className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-stone-200">
          <Image
            data-hero-img
            src="/lueftungsgitter.png"
            alt="Monteur an der Decke und Lüftungsgitter"
            fill
            priority
            sizes="(min-width: 768px) 45vw, 100vw"
            className="object-cover"
          />
          <BorderBeam size={220} duration={10} colorFrom="#f59e0b" colorTo="#fde68a" borderWidth={2} />
        </div>
      </div>
    </section>
  );
}
