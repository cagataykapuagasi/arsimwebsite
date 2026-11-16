"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface Props {
  steps: { title: string; text: string }[];
}

export function Steps({ steps }: Props) {
  const root = useRef<HTMLOListElement>(null);

  useGSAP(
    () => {
      gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
        const scrollTrigger = { trigger: root.current, start: "top 75%", end: "bottom 60%", scrub: true };
        gsap.from("[data-step-line]", { scaleX: 0, transformOrigin: "left center", ease: "none", scrollTrigger });
        gsap.from("[data-step]", { autoAlpha: 0.15, y: 40, stagger: 0.3, ease: "none", scrollTrigger });
      });
    },
    { scope: root },
  );

  return (
    <ol ref={root} className="relative grid gap-10 md:grid-cols-3">
      <span data-step-line aria-hidden className="absolute top-6 left-0 hidden h-px w-full bg-amber-500/60 md:block" />
      {steps.map((s, i) => (
        <li key={s.title} data-step className="relative flex flex-col gap-3">
          <span className="font-heading flex h-12 w-12 items-center justify-center rounded-full bg-amber-500 font-semibold text-stone-900">
            0{i + 1}
          </span>
          <h3 className="font-heading text-xl font-semibold">{s.title}</h3>
          <p className="text-sm leading-relaxed text-stone-400">{s.text}</p>
        </li>
      ))}
    </ol>
  );
}
