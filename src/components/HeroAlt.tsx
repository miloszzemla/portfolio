"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function HeroAlt() {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(
        logoRef.current,
        {
          rotation: -180,
          scale: 0,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        },
        0
      );

      gsap.to(logoRef.current, {
        rotation: 360,
        duration: 60,
        repeat: -1,
        ease: "none",
      });

      tl.from(
        ".hero-alt-line",
        {
          yPercent: 120,
          duration: 1.1,
          stagger: 0.1,
        },
        0.1
      );

      tl.from(
        ".hero-alt-badge",
        {
          scale: 0,
          opacity: 0,
          duration: 0.5,
          ease: "back.out(1.7)",
        },
        0.6
      );

      tl.from(
        ".hero-alt-desc",
        {
          opacity: 0,
          y: 16,
          duration: 0.7,
        },
        "-=0.2"
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-[70vh] md:min-h-[78vh] lg:min-h-[82vh] flex-col justify-center bg-cream overflow-hidden"
    >
      <div className="grid-bg" />

      {/* Two-column layout: heading left, description right */}
      <div className="relative z-10 w-[92%] max-w-[1400px] mx-auto flex flex-col md:flex-row md:items-end md:justify-between md:gap-12">
        {/* Left column: icon + heading + badge */}
        <div className="flex-shrink-0">
          {/* Line 1: logo + name */}
          <div className="overflow-hidden flex items-center gap-3 md:gap-5 lg:gap-6">
            <div
              ref={logoRef}
              className="h-[32px] w-[32px] md:h-[56px] md:w-[56px] lg:h-[76px] lg:w-[76px] xl:h-[90px] xl:w-[90px] flex-shrink-0"
            >
              <svg viewBox="0 0 110 110" className="h-full w-full">
                <path d="M 0 0 L 110 0 L 110 110 L 0 110 Z" fill="transparent" />
                <path
                  d="M 58.929 0 L 51.071 0 L 51.071 45.516 L 18.887 13.331 L 13.332 18.887 L 45.516 51.071 L 0 51.071 L 0 58.929 L 45.515 58.929 L 13.332 91.113 L 18.888 96.669 L 51.072 64.484 L 51.072 110 L 58.929 110 L 58.929 64.484 L 91.114 96.669 L 96.669 91.113 L 64.485 58.929 L 110 58.929 L 110 51.071 L 64.484 51.071 L 96.669 18.887 L 91.113 13.331 L 58.929 45.515 Z"
                  fill="rgb(21, 21, 21)"
                />
              </svg>
            </div>
            <span className="hero-alt-line block text-[44px] md:text-[56px] lg:text-[76px] xl:text-[96px] font-light leading-[1.08] tracking-[-2px] md:tracking-[-4px] lg:tracking-[-5px]">
              Hi, I&rsquo;m Milosz
            </span>
          </div>

          {/* Line 2: "Product Designer" + badge */}
          <div className="relative overflow-visible flex items-center">
            <div className="overflow-hidden">
              <span className="hero-alt-line block text-[44px] md:text-[56px] lg:text-[76px] xl:text-[96px] font-bold leading-[1.08] tracking-[-2px] md:tracking-[-4px] lg:tracking-[-5px]">
                Product Designer
              </span>
            </div>
            <span className="hero-alt-badge hidden md:inline-flex md:relative md:ml-4 -top-5 lg:-top-7 rotate-[-6deg] items-center gap-2 rounded-none bg-white border-2 border-dark text-dark px-5 py-2.5 text-[14px] font-medium tracking-[-0.2px] flex-shrink-0">
              &#x2728; AI-native
            </span>
          </div>

          {/* Line 3: "& Builder." + badge on mobile */}
          <div className="overflow-visible flex items-center gap-3">
            <div className="overflow-hidden">
              <span className="hero-alt-line block text-[44px] md:text-[56px] lg:text-[76px] xl:text-[96px] font-bold leading-[1.08] tracking-[-2px] md:tracking-[-4px] lg:tracking-[-5px]">
                &amp; Builder.
              </span>
            </div>
            <span className="hero-alt-badge md:hidden inline-flex items-center gap-1.5 rounded-none bg-white border-2 border-dark text-dark px-3 py-1.5 text-[11px] font-medium tracking-[-0.2px] flex-shrink-0 rotate-[-6deg]">
              &#x2728; AI-native
            </span>
          </div>
        </div>

        {/* Right column: description — aligned to bottom of heading on desktop */}
        <p className="hero-alt-desc max-w-[360px] lg:max-w-[400px] text-[16px] md:text-[18px] lg:text-[20px] font-medium leading-[1.55] tracking-[-0.3px] text-dark/65 mt-6 md:mt-0 md:pb-2 lg:pb-3">
          I ask the necessary (and sometimes the difficult) questions to create
          products that focus on and prioritize people.
        </p>
      </div>
    </section>
  );
}
