"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Project } from "@/data/projects";
import { getTranslatedProject } from "@/data/projects";
import { useLanguage } from "@/i18n/LanguageContext";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5 },
};

export default function ProjectContent({ project: rawProject, nextProject: rawNextProject }: { project: Project; nextProject: Project }) {
  const { t, lang } = useLanguage();
  const project = getTranslatedProject(rawProject, lang);
  const nextProject = getTranslatedProject(rawNextProject, lang);

  return (
    <>
      <Navbar />

      {/* ===== HERO ===== */}
      <header className="relative w-full bg-cream overflow-hidden pt-[120px] md:pt-[160px] pb-[60px] md:pb-[80px]">
        <div className="grid-bg" />
        <div className="relative z-10 mx-auto w-[92%] max-w-[1200px]">
          <motion.div {...fadeUp} className="flex flex-col gap-6">
            <h1 className="font-bold text-[40px] md:text-[56px] lg:text-[72px] leading-[1.1] tracking-[-1.5px] md:tracking-[-2.5px] lg:tracking-[-3px] text-dark max-w-[900px]">
              {project.title}
              <br />
              <span className="text-[#525252]">{project.subtitle}</span>
            </h1>
            <p className="text-[16px] md:text-[17px] font-medium text-[#636363]">
              {project.meta}
            </p>
          </motion.div>
        </div>
      </header>

      {/* ===== HERO IMAGE ===== */}
      <section className="relative w-full bg-cream overflow-hidden">
        <div className="grid-bg" />
        <div className="relative z-10 mx-auto w-[92%] max-w-[1200px]">
          <motion.div {...fadeUp} className="relative aspect-[16/9] w-full overflow-hidden">
            <Image src={project.heroImage} alt={project.title} fill className="object-cover" priority />
          </motion.div>
        </div>
      </section>

      {/* ===== COMING SOON ===== */}
      {project.comingSoon ? (
        <>
          <section className="relative w-full bg-cream overflow-hidden py-[80px] md:py-[120px] lg:py-[160px]">
            <div className="grid-bg" />
            <div className="relative z-10 mx-auto w-[92%] max-w-[1200px] flex flex-col items-center text-center gap-6">
              <motion.h2
                {...fadeUp}
                className="text-[32px] md:text-[40px] lg:text-[48px] font-bold leading-[1.2] tracking-[-1px] md:tracking-[-2px] text-dark"
              >
                {t.project.comingSoon}
              </motion.h2>
              <motion.p
                {...fadeUp}
                className="text-[17px] md:text-[19px] font-medium leading-[1.6] text-[#636363] max-w-[520px]"
              >
                {t.project.comingSoonDescription}
              </motion.p>
              <motion.div {...fadeUp}>
                <Link
                  href="/"
                  className="mt-4 inline-block rounded bg-dark px-6 py-3 text-[16px] font-medium text-cream transition-opacity hover:opacity-80"
                >
                  &larr; {lang === "pl" ? "Wróć na stronę główną" : "Back to homepage"}
                </Link>
              </motion.div>
            </div>
          </section>
          <Footer />
        </>
      ) : (
      <>

      {/* ===== BACKGROUND ===== */}
      <section className="relative w-full bg-cream overflow-hidden py-[60px] md:py-[100px] lg:py-[120px]">
        <div className="grid-bg" />
        <div className="relative z-10 mx-auto w-[92%] max-w-[1200px]">
          <motion.div {...fadeUp} className="flex flex-col md:flex-row gap-10 md:gap-16 lg:gap-24">
            <div className="w-full md:w-[55%] flex flex-col gap-4 md:gap-6">
              <h2 className="text-[13px] font-medium uppercase tracking-[0.08em] text-[#636363]">
                Background
              </h2>
              <p className="text-[24px] md:text-[28px] lg:text-[32px] font-medium leading-[1.4] tracking-[-0.5px] md:tracking-[-1px] text-dark">
                {project.description}
              </p>
            </div>
            <div className="w-full md:w-[45%] flex flex-col gap-6">
              {[
                { label: t.project.role, value: project.role },
                { label: t.project.service, value: project.services },
                { label: "Platform", value: project.platform },
              ].filter(group => group.value).map((group) => (
                <div key={group.label} className="flex flex-col gap-1">
                  <span className="text-[13px] font-medium uppercase tracking-[0.08em] text-[#636363]">
                    {group.label}
                  </span>
                  <span className="text-[16px] font-medium text-[#444444]">
                    {group.value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== CHALLENGE ===== */}
      <section className="relative w-full bg-cream overflow-hidden pb-[60px] md:pb-[100px] lg:pb-[120px]">
        <div className="grid-bg" />
        <div className="relative z-10 mx-auto w-[92%] max-w-[1200px]">
          <motion.div {...fadeUp} className="max-w-[800px] flex flex-col gap-4 md:gap-6">
            <h2 className="text-[13px] font-medium uppercase tracking-[0.08em] text-[#636363]">
              {t.project.problem}
            </h2>
            <p className="text-[24px] md:text-[28px] lg:text-[32px] font-medium leading-[1.4] tracking-[-0.5px] md:tracking-[-1px] text-dark">
              {project.designQuestion}
            </p>
            <p className="text-[17px] md:text-[18px] font-medium leading-[1.7] text-[#525252]">
              {project.problemStatement}
            </p>
            {project.problemMetrics && (
              <p className="text-[15px] font-medium text-[#636363]">
                {project.problemMetrics}
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* ===== SOLUTION IMAGE 1 ===== */}
      {project.solutions[0] && (
        <section className="relative w-full bg-cream overflow-hidden pb-[60px] md:pb-[100px]">
          <div className="grid-bg" />
          <div className="relative z-10 mx-auto w-[92%] max-w-[1200px]">
            <motion.div {...fadeUp} className="flex flex-col gap-4">
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <Image src={project.solutions[0].image} alt={project.solutions[0].alt} fill className="object-cover" />
              </div>
              <p className="text-[15px] md:text-[16px] font-medium text-[#636363]">{project.solutions[0].caption}</p>
            </motion.div>
          </div>
        </section>
      )}

      {/* ===== ITERATIONS ===== */}
      {project.iterations && project.iterations.length > 0 && (
        <section className="relative w-full bg-cream overflow-hidden pb-[60px] md:pb-[100px] lg:pb-[120px]">
          <div className="grid-bg" />
          <div className="relative z-10 mx-auto w-[92%] max-w-[1200px]">
            <div className="flex flex-col gap-12 md:gap-20">
              {project.iterations.map((iter, i) => (
                <motion.div key={i} {...fadeUp} className="max-w-[680px]">
                  <span className="text-[13px] font-medium uppercase tracking-[0.08em] text-[#636363]">
                    {iter.version}
                  </span>
                  <h3 className="mt-3 text-[28px] md:text-[34px] lg:text-[40px] font-bold leading-[1.2] tracking-[-1px] md:tracking-[-1.5px] text-dark">
                    {iter.title}
                  </h3>
                  <p className="mt-4 text-[17px] md:text-[18px] font-medium leading-[1.7] text-[#525252]">
                    {iter.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== SOLUTION IMAGES (remaining) ===== */}
      {project.solutions.length > 1 && (
        <section className="relative w-full bg-cream overflow-hidden pb-[60px] md:pb-[100px] lg:pb-[120px]">
          <div className="grid-bg" />
          <div className="relative z-10 mx-auto w-[92%] max-w-[1200px]">
            <div className="flex flex-col gap-10 md:gap-16">
              {project.solutions.slice(1).map((screen, i) => (
                <motion.div key={i} {...fadeUp} className="flex flex-col gap-4">
                  <div className="relative aspect-[16/9] w-full overflow-hidden">
                    <Image src={screen.image} alt={screen.alt} fill className="object-cover" />
                  </div>
                  <p className="text-[15px] md:text-[16px] font-medium text-[#636363]">{screen.caption}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== IMPACT ===== */}
      <section className="relative w-full bg-dark overflow-hidden py-[60px] md:py-[100px] lg:py-[120px]">
        <div className="relative z-10 mx-auto w-[92%] max-w-[1200px]">
          <motion.div {...fadeUp} className="flex flex-col gap-10 md:gap-16">
            <div className="flex flex-col gap-3">
              <h2 className="text-[13px] font-medium uppercase tracking-[0.08em] text-[#9a9a9a]">
                {t.project.results}
              </h2>
              {project.resultsNote && (
                <p className="text-[17px] md:text-[18px] font-medium leading-[1.6] text-[#9a9a9a]">
                  {project.resultsNote}
                </p>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {project.results.map((metric, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <span className="text-[48px] md:text-[56px] lg:text-[64px] font-bold leading-[1.1] tracking-[-2px] lg:tracking-[-3px] text-cream">
                    {metric.value}
                  </span>
                  <span className="text-[16px] md:text-[17px] font-medium text-[#9a9a9a]">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== LEARNINGS ===== */}
      {project.learnings && project.learnings.length > 0 && (
        <section className="relative w-full bg-cream overflow-hidden py-[60px] md:py-[100px] lg:py-[120px]">
          <div className="grid-bg" />
          <div className="relative z-10 mx-auto w-[92%] max-w-[1200px]">
            <motion.div {...fadeUp} className="max-w-[680px]">
              <h2 className="text-[13px] font-medium uppercase tracking-[0.08em] text-[#636363] mb-8 md:mb-12">
                {t.project.learnings}
              </h2>
              <div className="flex flex-col gap-6">
                {project.learnings.map((learning, i) => (
                  <p key={i} className="text-[17px] md:text-[18px] font-medium leading-[1.7] text-[#525252]">
                    {learning.text}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ===== NEXT PROJECT ===== */}
      <section className="relative w-full bg-cream overflow-hidden pb-[80px] md:pb-[100px] lg:pb-[150px]">
        <div className="grid-bg" />
        <div className="relative z-10 mx-auto w-[92%] max-w-[1200px] flex flex-col gap-10 md:gap-12 lg:gap-16">
          <div className="flex w-full flex-col gap-4">
            <h2 className="text-[20px] md:text-[22px] lg:text-[24px] font-medium leading-[1.4] tracking-[-0.8px] text-dark">
              {t.project.nextProject}
            </h2>
            <div className="h-[2px] w-full bg-dark" />
          </div>

          <Link
            href={`/projects/${nextProject.slug}`}
            className="group flex flex-col lg:flex-row lg:h-[500px] xl:h-[650px] w-full lg:items-end justify-between overflow-hidden"
          >
            <div className="relative w-full lg:hidden aspect-[16/10] overflow-hidden">
              <Image src={nextProject.thumbnail} alt={nextProject.title} fill className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]" />
            </div>
            <div className="flex w-full lg:w-[30%] flex-col justify-between pt-4 lg:pr-12 lg:h-full gap-4 lg:gap-0">
              <h3 className="text-[28px] md:text-[36px] lg:text-[44px] font-medium leading-[1.4] tracking-[-1px] lg:tracking-[-2px] text-dark">
                {nextProject.title}
              </h3>
              <div className="flex flex-col items-start gap-4 lg:gap-6">
                <p className="text-[18px] md:text-[20px] lg:text-[22px] font-medium leading-[1.5] tracking-[-0.4px] md:tracking-[-0.6px] text-dark">
                  {nextProject.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {(Array.isArray(nextProject.tag) ? nextProject.tag : [nextProject.tag]).map((t) => (
                    <span key={t} className="rounded bg-dark/8 px-3 py-2 md:px-4 md:py-2.5 text-[16px] md:text-[18px] font-medium leading-[1.5] tracking-[-0.4px] text-dark">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative hidden lg:block h-full w-[70%] overflow-hidden">
              <Image src={nextProject.thumbnail} alt={nextProject.title} fill className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]" />
            </div>
          </Link>
        </div>
      </section>

      <Footer />
      </>
      )}
    </>
  );
}
