"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Lines reveal — clip from bottom
      tl.from(".hero-line", {
        yPercent: 120,
        duration: 1.2,
        stagger: 0.12,
      });

      // Description fades in slightly later
      tl.from(
        ".hero-description",
        {
          opacity: 0,
          y: 20,
          duration: 0.8,
        },
        "-=0.6"
      );

      // Logo spins in
      tl.from(
        logoRef.current,
        {
          rotation: -180,
          scale: 0,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        },
        0.15
      );

      // Subtle continuous rotation on logo
      gsap.to(logoRef.current, {
        rotation: 360,
        duration: 60,
        repeat: -1,
        ease: "none",
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative flex h-[70vh] md:h-[75vh] lg:h-[80vh] flex-col items-center justify-center bg-cream overflow-hidden"
    >
      <div className="grid-bg" />

      <div className="relative z-10 flex w-[92%] flex-col items-start md:items-center gap-2 md:gap-3 lg:gap-4">
        {/* Line 1: logo + greeting */}
        <div className="flex w-full items-center justify-start md:justify-center gap-3 md:gap-4 lg:gap-6">
          <div
            ref={logoRef}
            className="h-[40px] w-[40px] md:h-[80px] md:w-[80px] lg:h-[110px] lg:w-[110px] flex-shrink-0 overflow-hidden flex items-center justify-center"
          >
            <img
              src="/assets/wishdrop-logo.webp"
              alt="WishDrop"
              className="h-full w-full object-contain rounded-[20%]"
            />
          </div>
          <div className="overflow-hidden">
            <h1
              className="hero-line font-light leading-[1.12] tracking-[-2px] md:tracking-[-5px] lg:tracking-[-7px] text-[36px] md:text-[64px] lg:text-[88px] xl:text-[120px]"
            >
              {t.hero.greeting}
            </h1>
          </div>
        </div>

        {/* Line 2: "A designer" + description */}
        {/* Desktop: description + "A designer" in one row */}
        <div className="hidden md:flex w-full items-center justify-center gap-6 lg:gap-10">
          <p className="hero-description max-w-[34%] text-[18px] lg:text-[22px] font-medium leading-[1.5] tracking-[-0.6px] text-dark text-left">
            {t.hero.description}
          </p>
          <div className="overflow-hidden">
            <span
              className="hero-line block font-bold leading-[1.12] tracking-[-4px] lg:tracking-[-6px] text-[64px] lg:text-[88px] xl:text-[120px]"
            >
              {t.hero.designer}
            </span>
          </div>
        </div>
        {/* Mobile: "A designer" centered, description left-aligned */}
        <div className="flex md:hidden w-full flex-col gap-2">
          <div className="overflow-hidden w-full text-center">
            <span
              className="hero-line block font-bold leading-[1.12] tracking-[-2px] text-[36px]"
            >
              {t.hero.designer}
            </span>
          </div>
          <p className="hero-description text-[16px] font-medium leading-[1.5] tracking-[-0.4px] text-dark text-left">
            {t.hero.description}
          </p>
        </div>

        {/* Line 3: "lives by design" */}
        <div className="flex w-full items-center justify-start md:justify-center gap-4 md:gap-6 lg:gap-8">
          <div className="overflow-hidden">
            <span
              className="hero-line block font-light leading-[1.12] tracking-[-2px] md:tracking-[-5px] lg:tracking-[-7px] text-[36px] md:text-[64px] lg:text-[88px] xl:text-[120px]"
            >
              {t.hero.livesByDesign}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
