"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function FeaturedWork() {
  return (
    <section
      id="work"
      className="relative w-full bg-cream overflow-hidden pb-[100px]"
    >
      <div className="grid-bg" />

      <div className="relative z-10 mx-auto flex w-[92%] flex-col items-center gap-16">
        {/* Section title */}
        <div className="flex w-full flex-col gap-4">
          <div className="flex w-full items-center justify-between">
            <h2 className="text-[24px] font-medium leading-[1.4] tracking-[-0.8px] text-dark">
              Featured work
            </h2>
            <span className="text-[20px] font-medium leading-[1.5] tracking-[-0.6px] text-dark">
              Scroll ↓
            </span>
          </div>
          <div className="h-[2px] w-full bg-dark" />
        </div>

        {/* Projects */}
        <div className="flex w-full flex-col gap-[100px]">
          {projects.map((project) => (
            <Link key={project.slug} href={`/projects/${project.slug}`}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="group flex h-[650px] w-full items-end justify-between overflow-hidden"
              >
                {/* Details - 30% */}
                <div className="flex h-full w-[30%] flex-col justify-between pt-4 pr-12">
                  <h3 className="text-[44px] font-medium leading-[1.4] tracking-[-2px] text-dark">
                    {project.title}
                  </h3>
                  <div className="flex flex-col items-start gap-6">
                    <p className="text-[22px] font-medium leading-[1.5] tracking-[-0.6px] text-dark">
                      {project.description}
                    </p>
                    <span className="rounded bg-dark/8 px-4 py-2.5 text-[18px] font-medium leading-[1.5] tracking-[-0.4px] text-dark">
                      {project.tag}
                    </span>
                  </div>
                </div>

                {/* Image - 70% */}
                <div className="relative h-full w-[70%] overflow-hidden">
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
