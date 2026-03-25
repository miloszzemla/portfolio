"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="relative w-full bg-cream overflow-hidden py-[60px] md:py-[80px] lg:py-[100px]"
    >
      <div className="grid-bg" />

      <div className="relative z-10 mx-auto flex w-[92%] flex-col items-start gap-10 md:gap-12 lg:gap-16">
        {/* Section title */}
        <div className="flex w-full flex-col gap-4">
          <div className="flex w-full items-center justify-between">
            <h2 className="text-[20px] md:text-[22px] lg:text-[24px] font-medium leading-[1.4] tracking-[-0.8px] text-dark">
              {t.about.title}
            </h2>
          </div>
          <div className="h-[2px] w-full bg-dark" />
        </div>

        {/* Content: stacked on mobile, 60% text / 30% image on desktop */}
        <div className="flex w-full flex-col lg:flex-row items-start justify-between gap-10 lg:gap-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex w-full lg:w-[60%] flex-col gap-8"
          >
            <p className="text-[24px] md:text-[28px] lg:text-[34px] font-medium leading-[1.5] tracking-[-0.6px] lg:tracking-[-1px] text-dark">
              {t.about.bio}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="w-full lg:w-[30%]"
          >
            <div className="relative h-[350px] md:h-[450px] lg:h-[580px] w-full overflow-hidden">
              <Image
                src="/assets/images/portrait.webp"
                alt="Milosz Zemla"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
