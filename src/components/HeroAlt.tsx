"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLanguage } from "@/i18n/LanguageContext";

export default function HeroAlt() {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

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
              {t.hero.greeting}
            </span>
          </div>

          {/* Line 2: "Product Designer" */}
          <div className="overflow-hidden">
            <span className="hero-alt-line block text-[44px] md:text-[56px] lg:text-[76px] xl:text-[96px] font-bold leading-[1.08] tracking-[-2px] md:tracking-[-4px] lg:tracking-[-5px]">
              {t.hero.role1}
            </span>
          </div>

          {/* Line 3: "& Builder." + badge */}
          <div className="overflow-visible flex items-center gap-3 md:gap-4">
            <div className="overflow-hidden">
              <span className="hero-alt-line block text-[44px] md:text-[56px] lg:text-[76px] xl:text-[96px] font-bold leading-[1.08] tracking-[-2px] md:tracking-[-4px] lg:tracking-[-5px]">
                {t.hero.role2}
              </span>
            </div>
            <span className="hero-alt-badge inline-flex items-center gap-1.5 md:gap-2 rounded-none bg-white border-2 border-dark text-dark px-3 py-1.5 md:px-5 md:py-2.5 text-[11px] md:text-[14px] font-medium tracking-[-0.2px] flex-shrink-0 rotate-[-6deg]">
              &#x2728; {t.hero.badge}
            </span>
          </div>
        </div>

        {/* Right column: description + side projects — aligned to bottom of heading on desktop */}
        <div className="hero-alt-desc flex flex-col gap-4 md:gap-5 max-w-[360px] lg:max-w-[400px] mt-6 md:mt-0 md:pb-2 lg:pb-3">
          <p className="text-[16px] md:text-[18px] lg:text-[20px] font-medium leading-[1.55] tracking-[-0.3px] text-dark/65">
            {t.hero.description}
          </p>
          <div className="flex flex-col gap-2">
            <span className="text-[15px] md:text-[16px] lg:text-[17px] font-medium tracking-[-0.2px] text-dark/65">
              Side projects:
            </span>
            <div className="flex flex-wrap gap-1.5">
              <a href="https://wishdrop.pl" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 bg-white text-dark rounded-full pl-1.5 pr-3 py-1 text-[13px] md:text-[14px] font-semibold tracking-[-0.2px] shadow-[0_1px_4px_rgba(0,0,0,0.12)] transition-opacity hover:opacity-80">
                <Image src="/assets/images/wishdrop-icon.webp" alt="Wishdrop" width={20} height={20} className="rounded-full" />
                Wishdrop.pl
              </a>
              <a href="https://letters-world.vercel.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 bg-white text-dark rounded-full pl-1.5 pr-3 py-1 text-[13px] md:text-[14px] font-semibold tracking-[-0.2px] shadow-[0_1px_4px_rgba(0,0,0,0.12)] transition-opacity hover:opacity-80">
                <Image src="/assets/images/letters-world-icon.svg" alt="Letters World" width={20} height={20} className="rounded-full" />
                Letters World
              </a>
              <span className="inline-flex items-center gap-1.5 bg-dark/5 text-dark/40 rounded-full pl-1.5 pr-3 py-1 text-[13px] md:text-[14px] font-semibold tracking-[-0.2px]">
                <Image src="/assets/images/topdraw-icon.svg" alt="TopDraw" width={20} height={20} className="rounded-full opacity-40" />
                TopDraw <span className="text-[11px] font-medium opacity-60 leading-none translate-y-[0.5px]">soon</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
