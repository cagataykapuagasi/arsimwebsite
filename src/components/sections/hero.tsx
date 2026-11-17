"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { Container } from "@/components/layout/container";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { BorderBeam } from "@/components/ui/border-beam";
import { DotPattern } from "@/components/ui/dot-pattern";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { contact, telHref } from "@/content/site";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

export function Hero() {
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
      <Container className="relative grid items-center gap-10 py-12 sm:py-16 md:grid-cols-[1.2fr_1fr] md:gap-12 lg:py-28">
        <div className="flex flex-col gap-6 sm:gap-7">
          <div data-hero-fade className="w-fit rounded-full border border-stone-200 bg-white/70 px-4 py-1.5 backdrop-blur">
            <AnimatedShinyText className="text-xs font-medium tracking-widest uppercase">
              Wir machen Ihr Haus wieder fit
            </AnimatedShinyText>
          </div>
          <h1
            data-hero-title
            className="font-heading text-[2.6rem] leading-[1.02] font-semibold tracking-tight text-balance sm:text-6xl md:text-5xl lg:text-7xl"
          >
            Trockenbau, Böden & Tapeten. <span className="text-brand">Sauber gemacht.</span>
          </h1>
          <p data-hero-fade className="max-w-md text-base text-stone-600 sm:text-lg">
            Ihr Handwerker in {contact.area} für Trockenbau, Bodenverlegung und Raufasertapete. Direkt vom Fachmann, ohne Umwege.
          </p>
          <div
            data-hero-fade
            className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center md:flex-col md:items-start lg:flex-row lg:items-center"
          >
            <ShimmerButton
              onClick={goToContact}
              background="var(--foreground)"
              className="min-h-12 w-full px-6 font-medium sm:w-auto"
            >
              Kostenlos anfragen
            </ShimmerButton>
            <a
              href={telHref}
              className="flex min-h-12 items-center justify-center rounded-full border border-stone-300 px-6 font-medium transition-colors hover:border-stone-900"
            >
              {contact.phone}
            </a>
          </div>
        </div>
        <div
          data-hero-media
          className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] bg-stone-200 md:max-w-none"
        >
          <Image
            data-hero-img
            src="/lueftungsgitter.png"
            alt="Handwerker bei Trockenbauarbeiten an der Decke"
            fill
            priority
            sizes="(min-width: 768px) 45vw, 100vw"
            className="object-cover"
          />
          <BorderBeam size={220} duration={10} colorFrom="var(--brand-bright)" colorTo="var(--brand-soft)" borderWidth={2} />
        </div>
      </Container>
    </section>
  );
}
