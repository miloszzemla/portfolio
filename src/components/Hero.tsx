"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex h-[80vh] flex-col items-center justify-center bg-cream overflow-hidden">
      <div className="grid-bg" />

      <div className="relative z-10 flex w-[92%] flex-col items-center gap-4">
        {/* Line 1: logo circle + "I'm Milosz Zemla" */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex w-full items-center justify-center gap-6"
        >
          <div className="h-[110px] w-[110px] flex-shrink-0 overflow-hidden flex items-center justify-center">
            <svg viewBox="0 0 110 110" className="h-[110px] w-[110px]">
              <path d="M 0 0 L 110 0 L 110 110 L 0 110 Z" fill="transparent" />
              <path
                d="M 58.929 0 L 51.071 0 L 51.071 45.516 L 18.887 13.331 L 13.332 18.887 L 45.516 51.071 L 0 51.071 L 0 58.929 L 45.515 58.929 L 13.332 91.113 L 18.888 96.669 L 51.072 64.484 L 51.072 110 L 58.929 110 L 58.929 64.484 L 91.114 96.669 L 96.669 91.113 L 64.485 58.929 L 110 58.929 L 110 51.071 L 64.484 51.071 L 96.669 18.887 L 91.113 13.331 L 58.929 45.515 Z"
                fill="rgb(21, 21, 21)"
              />
            </svg>
          </div>
          <h1
            className="font-light leading-[1.12] tracking-[-9px]"
            style={{ fontSize: "clamp(60px, 9.7vw, 140px)" }}
          >
            I&apos;m Milosz Zemla
          </h1>
        </motion.div>

        {/* Line 2: description + "A designer" */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="flex w-full items-center justify-center gap-10"
        >
          <p className="max-w-[34%] text-[22px] font-medium leading-[1.5] tracking-[-0.6px] text-dark">
            I ask the necessary (and sometimes the difficult questions) to
            create brands and products that focus on and prioritize people
          </p>
          <span
            className="font-bold leading-[1.12] tracking-[-8px]"
            style={{ fontSize: "clamp(60px, 9.7vw, 140px)" }}
          >
            A designer
          </span>
        </motion.div>

        {/* Line 3: "lives by design" */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="flex w-full items-center justify-center gap-8"
        >
          <span
            className="font-light leading-[1.12] tracking-[-9px]"
            style={{ fontSize: "clamp(60px, 9.7vw, 140px)" }}
          >
            lives by design
          </span>
        </motion.div>
      </div>
    </section>
  );
}
