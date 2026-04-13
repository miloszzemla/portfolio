"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

/* Icons extracted from Framer – 64×64 SVGs */
const icons: ReactNode[] = [
  // Digital Design
  <svg key="dd" viewBox="0 0 64 64" className="h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16">
    <path
      d="M 34.969 1.905 L 62.495 1.905 L 62.495 29.671 L 34.969 29.671 Z M 23.741 12.703 L 51.267 12.703 L 51.267 40.469 L 23.741 40.469 Z M 12.896 23.643 L 40.421 23.643 L 40.421 51.409 L 12.896 51.409 Z M 2.05 34.583 L 29.576 34.583 L 29.576 62.349 L 2.05 62.349 Z"
      fill="transparent"
      strokeWidth="2"
      stroke="rgb(21, 21, 21)"
      strokeLinejoin="round"
    />
  </svg>,
  // Framer Expert
  <svg key="fe" viewBox="0 0 64 64" className="h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16">
    <path
      d="M 52.889 52.889 L 11.111 52.889 L 11.111 11.111 L 52.889 11.111 Z"
      fill="transparent"
      strokeWidth="2"
      stroke="rgb(21, 21, 21)"
    />
    <path
      d="M 32 1.778 C 48.691 1.778 62.222 15.309 62.222 32 C 62.222 48.691 48.691 62.222 32 62.222 C 15.309 62.222 1.778 48.691 1.778 32 C 1.778 15.309 15.309 1.778 32 1.778 Z"
      fill="transparent"
      strokeWidth="2"
      stroke="rgb(21, 21, 21)"
    />
  </svg>,
  // Product Strategy
  <svg key="ps" viewBox="0 0 64 64" className="h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16">
    <path
      d="M 1.778 32 C 1.778 15.309 15.309 1.778 32 1.778 C 48.691 1.778 62.222 15.309 62.222 32 C 62.222 48.691 48.691 62.222 32 62.222 C 15.309 62.222 1.778 48.691 1.778 32 Z"
      fill="transparent"
      strokeWidth="2"
      stroke="rgb(21, 21, 21)"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M 51.68 32 C 51.68 40.422 49.428 48.014 45.826 53.48 C 42.219 58.953 37.316 62.222 32 62.222 C 26.684 62.222 21.781 58.953 18.174 53.48 C 14.572 48.014 12.32 40.421 12.32 32 C 12.32 23.578 14.572 15.986 18.174 10.52 C 21.781 5.047 26.684 1.778 32 1.778 C 37.316 1.778 42.219 5.047 45.826 10.52 C 49.428 15.986 51.68 23.579 51.68 32 Z"
      fill="transparent"
      strokeWidth="2"
      stroke="rgb(21, 21, 21)"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M 32 40.434 C 23.508 40.434 15.847 39.416 10.331 37.787 C 7.569 36.971 5.385 36.013 3.907 34.98 C 2.41 33.934 1.778 32.916 1.778 32 C 1.778 31.084 2.41 30.066 3.907 29.02 C 5.385 27.987 7.569 27.029 10.331 26.213 C 15.848 24.584 23.509 23.566 32 23.566 C 40.492 23.566 48.153 24.584 53.669 26.213 C 56.431 27.029 58.615 27.987 60.093 29.02 C 61.59 30.066 62.222 31.084 62.222 32 C 62.222 32.916 61.59 33.934 60.093 34.98 C 58.615 36.013 56.431 36.971 53.669 37.787 C 48.152 39.416 40.491 40.434 32 40.434 Z"
      fill="transparent"
      strokeWidth="2"
      stroke="rgb(21, 21, 21)"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>,
  // Art Direction
  <svg key="ad" viewBox="0 0 64 64" className="h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16">
    <path
      d="M 32.605 0.667 L 32.605 16.025 L 31.605 16.025 L 31.605 0.667 Z M 47.983 5.161 L 40.403 18.29 L 39.219 17.607 L 46.799 4.478 Z M 59.147 16.877 L 46.019 24.456 L 45.199 23.036 L 58.327 15.458 L 59.147 16.877 Z M 62.889 32.52 L 47.531 32.52 L 47.531 30.813 L 62.889 30.813 Z M 58.189 48.113 L 45.061 40.534 L 46.154 38.642 L 59.281 46.221 Z M 46.324 59.129 L 38.745 46.001 L 40.874 44.772 L 48.452 57.9 L 46.323 59.129 Z M 31.131 62.667 L 31.131 47.31 L 33.311 47.31 L 33.311 62.667 Z M 15.664 58.095 L 23.243 44.967 L 25.27 46.137 L 17.69 59.265 L 15.663 58.095 Z M 4.555 46.323 L 17.683 38.743 L 18.989 41.007 L 5.862 48.587 Z M 0.889 30.344 L 16.247 30.344 L 16.247 33.657 L 0.889 33.657 Z M 5.667 15.087 L 18.795 22.666 L 17.215 25.402 L 4.087 17.823 L 5.667 15.087 Z M 17.589 4.128 L 25.169 17.256 L 22.195 18.973 L 14.616 5.845 Z"
      fill="rgb(21, 21, 21)"
    />
  </svg>,
];

export default function Services() {
  const { t } = useLanguage();

  return (
    <section className="relative w-full bg-cream overflow-hidden py-[60px] md:py-[80px] lg:py-[100px]">
      <div className="grid-bg" />

      <div className="relative z-10 mx-auto flex w-[92%] flex-col items-start gap-10 md:gap-12 lg:gap-16">
        {/* Section title */}
        <div className="flex w-full flex-col gap-4">
          <div className="flex w-full items-center justify-between">
            <h2 className="text-[20px] md:text-[22px] lg:text-[24px] font-medium leading-[1.4] tracking-[-0.8px] text-dark">
              {t.services.title}
            </h2>
          </div>
          <div className="h-[2px] w-full bg-dark" />
        </div>

        {/* Content: stacked on mobile, 30% description / 60% grid on desktop */}
        <div className="flex w-full flex-col lg:flex-row items-start justify-between gap-10 lg:gap-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-[30%]"
          >
            <p className="text-[20px] md:text-[22px] lg:text-[24px] font-medium leading-[1.5] tracking-[-0.6px] lg:tracking-[-0.8px] text-dark">
              {t.services.intro}
            </p>
          </motion.div>

          <div className="flex w-full lg:w-[60%] flex-col gap-10 md:gap-16">
            {/* Row 1 */}
            <div className="flex w-full flex-col md:flex-row items-start justify-between gap-10 md:gap-0">
              {t.services.items.slice(0, 2).map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex w-full md:w-[45%] flex-col gap-3"
                >
                  <div className="mb-4 lg:mb-6">{icons[i]}</div>
                  <h3 className="text-[22px] md:text-[24px] lg:text-[26px] font-medium leading-[1.5] tracking-[-0.8px] lg:tracking-[-1px] text-dark">
                    {service.title}
                  </h3>
                  <p className="text-[18px] md:text-[20px] lg:text-[22px] font-medium leading-[1.5] tracking-[-0.4px] lg:tracking-[-0.6px] text-dark/65">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
            {/* Row 2 */}
            <div className="flex w-full flex-col md:flex-row items-start justify-between gap-10 md:gap-0">
              {t.services.items.slice(2, 4).map((service, i) => (
                <motion.div
                  key={i + 2}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (i + 2) * 0.1 }}
                  className="flex w-full md:w-[45%] flex-col gap-3"
                >
                  <div className="mb-4 lg:mb-6">{icons[i + 2]}</div>
                  <h3 className="text-[22px] md:text-[24px] lg:text-[26px] font-medium leading-[1.5] tracking-[-0.8px] lg:tracking-[-1px] text-dark">
                    {service.title}
                  </h3>
                  <p className="text-[18px] md:text-[20px] lg:text-[22px] font-medium leading-[1.5] tracking-[-0.4px] lg:tracking-[-0.6px] text-dark/65">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
