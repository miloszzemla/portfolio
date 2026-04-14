"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { getTranslatedProjects } from "@/data/projects";
import { useLanguage } from "@/i18n/LanguageContext";
import PhoneMockup from "@/components/PhoneMockup";

export default function FeaturedWork() {
  const { t, lang } = useLanguage();
  const projects = getTranslatedProjects(lang);

  return (
    <section
      id="work"
      className="relative w-full bg-cream overflow-hidden pb-[60px] md:pb-[80px] lg:pb-[100px]"
    >
      <div className="grid-bg" />

      <div className="relative z-10 mx-auto flex w-[92%] flex-col items-center gap-10 md:gap-12 lg:gap-16">
        {/* Section title */}
        <div className="flex w-full flex-col gap-4">
          <div className="flex w-full items-center justify-between">
            <h2 className="text-[20px] md:text-[22px] lg:text-[24px] font-medium leading-[1.4] tracking-[-0.8px] text-dark">
              {t.featuredWork.title}
            </h2>
            <span className="text-[16px] md:text-[18px] lg:text-[20px] font-medium leading-[1.5] tracking-[-0.6px] text-dark">
              {t.featuredWork.scroll}
            </span>
          </div>
          <div className="h-[2px] w-full bg-dark" />
        </div>

        {/* Projects */}
        <div className="flex w-full flex-col gap-[60px] md:gap-[80px] lg:gap-[100px]">
          {projects.map((project) => (
            <Link key={project.slug} href={`/projects/${project.slug}`}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="group flex flex-col lg:flex-row lg:h-[400px] xl:h-[500px] w-full lg:items-end justify-between overflow-hidden"
              >
                {/* Image - on top for mobile, right side for desktop */}
                <div className="relative w-full lg:hidden aspect-[4/3] md:aspect-[16/9] overflow-hidden">
                  {project.thumbnail ? (
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 70vw"
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-dark/5 border-2 border-dashed border-dark/15 flex items-center justify-center">
                      <span className="text-[16px] font-medium text-dark/30">Coming soon</span>
                    </div>
                  )}
                </div>

                {/* Details */}
                <div className="flex w-full lg:w-[30%] flex-col justify-between pt-4 lg:pr-12 lg:h-full gap-4 lg:gap-0">
                  <div className="flex flex-col items-start gap-4 lg:gap-6">
                    <h3 className="text-[28px] md:text-[36px] lg:text-[44px] font-medium leading-[1.4] tracking-[-1px] lg:tracking-[-2px] text-dark">
                      {project.title}
                    </h3>
                    <p className="text-[18px] md:text-[20px] lg:text-[22px] font-medium leading-[1.5] tracking-[-0.6px] text-dark/65">
                      {project.subtitle}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {(Array.isArray(project.tag) ? project.tag : [project.tag]).map((t) => (
                        <span key={t} className="rounded bg-dark/8 px-3 py-2 md:px-4 md:py-2.5 text-[16px] md:text-[18px] font-medium leading-[1.5] tracking-[-0.4px] text-dark">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Image - hidden on mobile, visible on desktop */}
                <div className="relative hidden lg:block h-full w-[70%] overflow-hidden">
                  {project.thumbnail ? (
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      sizes="70vw"
                      className="object-contain object-center transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-dark/5 border-2 border-dashed border-dark/15 flex items-center justify-center">
                      <span className="text-[18px] font-medium text-dark/30">Coming soon</span>
                    </div>
                  )}
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
