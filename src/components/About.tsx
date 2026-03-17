"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full bg-cream overflow-hidden py-[100px]"
    >
      <div className="grid-bg" />

      <div className="relative z-10 mx-auto flex w-[92%] flex-col items-start gap-16">
        {/* Section title */}
        <div className="flex w-full flex-col gap-4">
          <div className="flex w-full items-center justify-between">
            <h2 className="text-[24px] font-medium leading-[1.4] tracking-[-0.8px] text-dark">
              About
            </h2>
          </div>
          <div className="h-[2px] w-full bg-dark" />
        </div>

        {/* Content: 60% text / 30% image */}
        <div className="flex w-full items-start justify-between">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex w-[60%] flex-col gap-8"
          >
            <p className="text-[34px] font-medium leading-[1.5] tracking-[-1px] text-dark">
              Hi, I&apos;m Martin Taylor, an art director and product designer
              based in London. With my background in visual arts and technology,
              I specialize in creating engaging user experiences through
              interactive design. I am deeply passionate about using my creative
              skills to collaborate on innovative and meaningful projects that
              make a genuine impact.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="w-[30%]"
          >
            <div className="relative h-[580px] w-full overflow-hidden">
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
