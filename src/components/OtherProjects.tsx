"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

const placeholders = Array.from({ length: 6 }, (_, i) => i + 1);

export default function OtherProjects() {
  const { t } = useLanguage();

  return (
    <section className="relative w-full bg-cream overflow-hidden pb-[60px] md:pb-[80px] lg:pb-[100px]">
      <div className="grid-bg" />

      <div className="relative z-10 mx-auto flex w-[92%] flex-col gap-10 md:gap-12">
        {/* Section header */}
        <div className="flex w-full flex-col gap-4">
          <h2 className="text-[20px] md:text-[22px] lg:text-[24px] font-medium leading-[1.4] tracking-[-0.8px] text-dark">
            {t.otherProjects.title}
          </h2>
          <div className="h-[2px] w-full bg-dark" />
        </div>

        {/* Grid of placeholders */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {placeholders.map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="aspect-[4/3] w-full bg-dark/5 border-2 border-dashed border-dark/15 flex items-center justify-center"
            >
              <span className="text-[16px] font-medium text-dark/30 tracking-[-0.3px]">
                {i}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
