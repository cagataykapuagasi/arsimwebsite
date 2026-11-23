"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import type { TextItem } from "@/content/site";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface Props {
  steps: TextItem[];
}

export function ProcessSteps({ steps }: Props) {
  const root = useRef<HTMLOListElement>(null);

  useGSAP(
    () => {
      gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from("[data-step-line]", {
          scaleX: 0,
          transformOrigin: "left center",
          ease: "none",
          scrollTrigger: { trigger: root.current, start: "top 75%", end: "bottom 60%", scrub: true },
        });
        gsap.set("[data-step]", { autoAlpha: 0, y: 40 });
        ScrollTrigger.batch("[data-step]", {
          start: "top 85%",
          once: true,
          onEnter: (els) => gsap.to(els, { autoAlpha: 1, y: 0, stagger: 0.15, duration: 0.8, ease: "power3.out" }),
        });
      });
    },
    { scope: root },
  );

  return (
    <ol ref={root} className="relative grid gap-10 md:grid-cols-3">
      <span data-step-line aria-hidden className="absolute bg-white/25 top-6 left-0 hidden h-px w-full md:block" />
      {steps.map((step, i) => (
        <li key={step.title} data-step className="relative flex flex-col gap-3">
          <span className="font-heading text-brand flex h-12 w-12 items-center justify-center rounded-full bg-white font-semibold">
            0{i + 1}
          </span>
          <h3 className="font-heading text-xl font-semibold">{step.title}</h3>
          <p className="text-sm leading-relaxed text-white/70">{step.text}</p>
        </li>
      ))}
    </ol>
  );
}
