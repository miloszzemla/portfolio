"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Project } from "@/data/projects";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

export default function ProjectContent({ project, nextProject }: { project: Project; nextProject: Project }) {
  return (
    <>
      <Navbar />

      {/* ─── 1. HERO ─── */}
      <header className="relative flex h-[50vh] w-full flex-col justify-end bg-cream overflow-hidden pb-6">
        <div className="grid-bg" />
        <div className="relative z-10 mx-auto flex w-[92%] flex-col gap-2">
          <div className="flex w-full items-end justify-between">
            <div className="w-[50%]">
              <h1 className="font-bold text-[120px] leading-[1.12] tracking-[-5px] text-dark">
                {project.title}
              </h1>
            </div>
            <div className="w-[40%] pb-5">
              <p className="text-[28px] font-medium leading-[1.6] tracking-[-1px] text-dark">
                {project.subtitle}
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col gap-3">
            <div className="h-[2px] w-full bg-dark" />
            <div className="flex w-full justify-between">
              <span className="text-[20px] font-medium leading-[1.5] tracking-[-0.6px] text-dark/50">
                {project.meta}
              </span>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[22px] font-medium leading-[1.5] tracking-[-0.6px] text-dark transition-opacity hover:opacity-60"
                >
                  View live website ↗
                </a>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Image */}
      <section className="relative w-full bg-cream overflow-hidden">
        <div className="grid-bg" />
        <div className="relative z-10 mx-auto w-[92%]">
          <motion.div {...fadeUp} className="relative h-[90vh] w-full overflow-hidden">
            <Image
              src={project.heroImage}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* ─── 2. PROBLEM ─── */}
      <section className="relative w-full bg-cream overflow-hidden py-[120px]">
        <div className="grid-bg" />
        <div className="relative z-10 mx-auto w-[92%]">
          <motion.div {...fadeUp} className="flex w-full gap-16">
            <div className="w-[50%]">
              <h2 className="text-[24px] font-medium leading-[1.4] tracking-[-0.8px] text-dark/50">
                Problem
              </h2>
            </div>
            <div className="flex w-[50%] flex-col gap-10">
              <p className="text-[28px] font-medium leading-[1.6] tracking-[-1px] text-dark">
                {project.problemStatement}
              </p>
              {project.problemMetrics && (
                <p className="text-[22px] font-medium leading-[1.5] tracking-[-0.6px] text-dark/60">
                  {project.problemMetrics}
                </p>
              )}
              <div className="border-l-[3px] border-dark/20 pl-6">
                <p className="text-[26px] font-medium leading-[1.5] tracking-[-1px] text-dark italic">
                  &ldquo;{project.designQuestion}&rdquo;
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── 3. PROCES ─── */}
      <section className="relative w-full bg-cream overflow-hidden pb-[120px]">
        <div className="grid-bg" />
        <div className="relative z-10 mx-auto w-[92%]">
          <motion.div {...fadeUp} className="flex w-full gap-16">
            <div className="w-[50%]">
              <h2 className="text-[24px] font-medium leading-[1.4] tracking-[-0.8px] text-dark/50">
                Process
              </h2>
            </div>
            <div className="flex w-[50%] flex-col gap-0">
              {project.process.map((step, i) => (
                <div key={i} className="flex w-full flex-col">
                  <div className="flex items-start gap-6 py-6">
                    <span className="w-[120px] shrink-0 text-[20px] font-bold leading-[1.5] tracking-[-0.6px] text-dark">
                      {step.label}
                    </span>
                    <p className="text-[22px] font-medium leading-[1.5] tracking-[-0.6px] text-dark">
                      {step.text}
                    </p>
                  </div>
                  {i < project.process.length - 1 && (
                    <div className="h-[1px] w-full bg-dark/10" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── 4. ROZWIĄZANIE ─── */}
      <section className="relative w-full bg-cream overflow-hidden pb-[120px]">
        <div className="grid-bg" />
        <div className="relative z-10 mx-auto w-[92%]">
          <motion.div {...fadeUp} className="mb-16">
            <h2 className="text-[24px] font-medium leading-[1.4] tracking-[-0.8px] text-dark/50">
              Solution
            </h2>
          </motion.div>
          <div className="flex w-full flex-col gap-10">
            {project.solutions.map((screen, i) => (
              <motion.div key={i} {...fadeUp} className="flex w-full flex-col gap-4">
                <div className="relative h-[90vh] w-full overflow-hidden">
                  <Image
                    src={screen.image}
                    alt={screen.alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-[22px] font-medium leading-[1.5] tracking-[-0.6px] text-dark">
                  <span className="text-dark/40 mr-2">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {screen.caption}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5. WYNIKI ─── */}
      <section className="relative w-full bg-dark overflow-hidden py-[120px]">
        <div
          className="absolute opacity-5 pointer-events-none"
          style={{
            left: "4%",
            right: "4%",
            top: 0,
            bottom: 0,
            backgroundImage: "linear-gradient(to right, #f1efed 1px, transparent 1px)",
            backgroundSize: "calc(100% / 11) 100%",
            borderRight: "1px solid #f1efed",
          }}
        />
        <div className="relative z-10 mx-auto w-[92%]">
          <motion.div {...fadeUp} className="flex w-full gap-16">
            <div className="w-[50%]">
              <h2 className="text-[24px] font-medium leading-[1.4] tracking-[-0.8px] text-cream/50">
                Results
              </h2>
            </div>
            <div className="flex w-[50%] flex-col gap-10">
              <div className="flex w-full flex-col gap-0">
                {project.results.map((metric, i) => (
                  <div key={i} className="flex w-full flex-col">
                    <div className="flex items-center justify-between py-8">
                      <span className="text-[24px] font-medium leading-[1.5] tracking-[-0.8px] text-cream/70">
                        {metric.icon} {metric.label}
                      </span>
                      <span className="text-[48px] font-bold leading-[1.2] tracking-[-2px] text-cream">
                        {metric.value}
                      </span>
                    </div>
                    {i < project.results.length - 1 && (
                      <div className="h-[1px] w-full bg-cream/10" />
                    )}
                  </div>
                ))}
              </div>
              {project.resultsNote && (
                <p className="text-[18px] font-medium leading-[1.5] tracking-[-0.4px] text-cream/40">
                  {project.resultsNote}
                </p>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── 6. TESTIMONIAL ─── */}
      {project.testimonial && (
        <section className="relative w-full bg-cream overflow-hidden py-[120px]">
          <div className="grid-bg" />
          <div className="relative z-10 mx-auto w-[92%]">
            <motion.div {...fadeUp} className="flex w-full flex-col items-center gap-10">
              <blockquote className="max-w-[800px] text-center">
                <p className="text-[34px] font-medium leading-[1.5] tracking-[-1px] text-dark">
                  &ldquo;{project.testimonial.quote}&rdquo;
                </p>
              </blockquote>
              <div className="text-center">
                <p className="text-[20px] font-bold leading-[1.5] tracking-[-0.6px] text-dark">
                  {project.testimonial.author}
                </p>
                <p className="text-[18px] font-medium leading-[1.5] tracking-[-0.4px] text-dark/50">
                  {project.testimonial.role}
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ─── NEXT PROJECT ─── */}
      <section className="relative w-full bg-cream overflow-hidden pb-[150px]">
        <div className="grid-bg" />
        <div className="relative z-10 mx-auto flex w-[92%] flex-col gap-16">
          <div className="flex w-full flex-col gap-4">
            <div className="flex w-full items-center justify-between">
              <h2 className="text-[24px] font-medium leading-[1.4] tracking-[-0.8px] text-dark">
                Next Project
              </h2>
            </div>
            <div className="h-[2px] w-full bg-dark" />
          </div>

          <Link
            href={`/projects/${nextProject.slug}`}
            className="group flex h-[650px] w-full items-end justify-between overflow-hidden"
          >
            <div className="flex h-full w-[30%] flex-col justify-between pt-4 pr-12">
              <h3 className="text-[44px] font-medium leading-[1.4] tracking-[-2px] text-dark">
                {nextProject.title}
              </h3>
              <div className="flex flex-col items-start gap-6">
                <p className="text-[22px] font-medium leading-[1.5] tracking-[-0.6px] text-dark">
                  {nextProject.description}
                </p>
                <span className="rounded bg-dark/8 px-4 py-2.5 text-[18px] font-medium leading-[1.5] tracking-[-0.4px] text-dark">
                  {nextProject.tag}
                </span>
              </div>
            </div>

            <div className="relative h-full w-[70%] overflow-hidden">
              <Image
                src={nextProject.thumbnail}
                alt={nextProject.title}
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
