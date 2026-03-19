"use client";

import Image from "next/image";

const slides = [
  {
    type: "video" as const,
    src: "https://framerusercontent.com/modules/assets/sdw2MiwfX8kE86eVM9cS85drJqo~jByeSC37unBqQHViiwWbauXo7_4XbguqlMgSaBNqdjs.mp4",
  },
  {
    type: "image" as const,
    src: "/assets/images/about-photo.webp",
  },
  {
    type: "image" as const,
    src: "/assets/images/logo.png",
  },
  {
    type: "image" as const,
    src: "/assets/images/hero-bg.webp",
  },
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
              {slide.type === "video" ? (
                <video
                  src={slide.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full w-full object-cover"
                />
              ) : (
                <Image
                  src={slide.src}
                  alt=""
                  width={600}
                  height={403}
                  className="h-full w-full object-cover"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
