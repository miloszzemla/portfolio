"use client";

import Image from "next/image";

const slides = [
  { src: "/assets/images/slider-mallorca.webp" },
  { src: "/assets/images/slider-porto.webp" },
  { src: "/assets/images/slider-sailboat.webp", position: "50% 60%" },
  { src: "/assets/images/slider-sunset.webp" },
  { src: "/assets/images/slider-silhouette.webp" },
];

export default function Slider() {
  return (
    <section className="relative w-full bg-cream overflow-hidden py-[60px] pb-[80px] md:py-[80px] md:pb-[120px] lg:py-[100px] lg:pb-[150px]">
      <div className="grid-bg" />

      <div className="relative z-10 w-full overflow-hidden">
        <div className="ticker-animate flex gap-4 md:gap-6 lg:gap-8">
          {/* Duplicate for infinite scroll */}
          {[...slides, ...slides].map((slide, i) => (
            <div
              key={i}
              className="h-[200px] w-[300px] md:h-[268px] md:w-[400px] lg:h-[403px] lg:w-[600px] flex-shrink-0 overflow-hidden"
              style={{ aspectRatio: "1.488" }}
            >
              <Image
                src={slide.src}
                alt=""
                width={600}
                height={403}
                sizes="(max-width: 768px) 300px, (max-width: 1024px) 400px, 600px"
                className="h-full w-full object-cover"
                style={slide.position ? { objectPosition: slide.position } : undefined}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
