"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Project } from "@/data/projects";
import { getTranslatedProject } from "@/data/projects";
import { useLanguage } from "@/i18n/LanguageContext";
import BeforeAfter from "@/components/BeforeAfter";

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
      <main className="relative z-10 bg-[var(--color-cream)]">
      <Navbar />

      {/* ===== HERO ===== */}
      <header className="relative w-full bg-cream overflow-hidden pt-[120px] md:pt-[160px] pb-[60px] md:pb-[80px]">
        <div className="grid-bg" />
        <div className="relative z-10 mx-auto w-[92%] max-w-[1400px]">
          <motion.div {...fadeUp} className="flex flex-col gap-4 md:gap-5">
            <h1 className="font-bold text-[40px] md:text-[56px] lg:text-[72px] leading-[1.1] tracking-[-1.5px] md:tracking-[-2.5px] lg:tracking-[-3px] text-dark">
              {project.title}
            </h1>
            <p className="font-dm text-[20px] md:text-[24px] lg:text-[28px] font-medium leading-[1.35] tracking-[-0.5px] md:tracking-[-1px] text-dark/65 max-w-[700px]">
              {project.subtitle}
            </p>
          </motion.div>
        </div>
      </header>

      {/* ===== HERO IMAGE ===== */}
      <section className="relative w-full bg-cream overflow-hidden">
        <div className="grid-bg" />
        <div className="relative z-10 mx-auto w-[92%] max-w-[1400px]">
          <motion.div {...fadeUp} className="relative aspect-[4/3] md:aspect-[16/9] w-full overflow-hidden">
            <Image src={project.heroImage} alt={project.title} fill sizes="92vw" quality={95} className="object-cover" priority />
          </motion.div>
        </div>
      </section>

      {/* ===== MOBILE: Role/Service/Platform — right after hero image ===== */}
      {(project.role || project.services || project.platform) && (
        <section className="md:hidden relative w-full bg-cream overflow-hidden pt-6 pb-2">
          <div className="grid-bg" />
          <div className="relative z-10 mx-auto w-[92%]">
            <div className="bg-white border-2 border-dark p-6 flex flex-col gap-5">
              {[
                { label: t.project.role, value: project.role },
                { label: t.project.service, value: project.services },
                { label: t.project.platform, value: project.platform },
              ].filter(group => group.value).map((group) => (
                <div key={group.label} className="flex flex-col gap-1">
                  <span className="text-[13px] font-medium text-dark/55">{group.label}</span>
                  <span className="text-[16px] font-medium text-dark">{group.value}</span>
                </div>
              ))}
              {project.team && project.team.length > 0 && (
                <div className="flex flex-col gap-2">
                  <span className="text-[13px] font-medium text-dark/55">{t.project.team}</span>
                  <div className="flex flex-wrap" style={{ gap: "6px" }}>
                    {project.team.map((member, i) => (
                      <button key={i} className="group/tip relative focus:outline-none" onClick={(e) => { e.preventDefault(); e.stopPropagation(); const el = e.currentTarget.querySelector('[data-tooltip]') as HTMLElement; if (el) { el.classList.toggle('!opacity-100'); el.classList.toggle('!translate-y-0'); setTimeout(() => { el.classList.remove('!opacity-100', '!translate-y-0'); }, 2000); } }}>
                        {member.role === "Me" ? (
                          <div className="h-[48px] w-[48px] rounded-full bg-[#3b5998] flex items-center justify-center transition-transform active:scale-90">
                            <span className="text-[15px] font-semibold text-white">Me</span>
                          </div>
                        ) : (
                          <div className="h-[48px] w-[48px] rounded-full bg-dark flex items-center justify-center transition-transform active:scale-90">
                            <span className="text-[15px] font-semibold text-cream">{member.role}</span>
                          </div>
                        )}
                        <span data-tooltip className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 translate-y-1 text-[12px] font-medium text-dark/70 bg-white border border-dark/10 rounded px-2 py-1 whitespace-nowrap opacity-0 group-hover/tip:opacity-100 group-hover/tip:translate-y-0 transition-all duration-200 shadow-sm">{{ "Me": "Product Designer", "PM": "Project Manager", "FE": "Frontend Developer", "BE": "Backend Developer" }[member.role] || member.role}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ===== COMING SOON ===== */}
      {project.comingSoon ? (
          <section className="relative w-full bg-cream overflow-hidden py-[80px] md:py-[120px] lg:py-[160px]">
            <div className="grid-bg" />
            <div className="relative z-10 mx-auto w-[92%] max-w-[1400px] flex flex-col items-center text-center gap-6">
              <motion.h2
                {...fadeUp}
                className="text-[32px] md:text-[40px] lg:text-[48px] font-bold leading-[1.2] tracking-[-1px] md:tracking-[-2px] text-dark"
              >
                {t.project.comingSoon}
              </motion.h2>
              <motion.p
                {...fadeUp}
                className="font-dm text-[17px] md:text-[19px] font-medium leading-[1.6] text-dark/65 max-w-[520px]"
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
      ) : (
      <>

      {/* ===== BACKGROUND ===== */}
      <section className="relative w-full bg-cream overflow-hidden py-[60px] md:py-[100px] lg:py-[120px]">
        <div className="grid-bg" />
        <div className="relative z-10 mx-auto w-[92%] max-w-[1400px]">
          <motion.div {...fadeUp} className="flex flex-col md:flex-row gap-10 md:gap-16 lg:gap-24">
            <div className="w-full md:w-[55%] flex flex-col gap-4 md:gap-6">
              <h2 className="text-[16px] md:text-[18px] font-medium tracking-[-0.3px] text-dark/70">
                {t.project.background}
              </h2>
              <p className="font-space text-[24px] md:text-[28px] lg:text-[32px] font-medium leading-[1.4] tracking-[-0.5px] md:tracking-[-1px] text-dark">
                {project.description}
              </p>
            </div>
            <div className="hidden md:flex w-full md:w-[45%] bg-white border-2 border-dark p-6 md:p-8 flex-col gap-5 self-start">
              {[
                { label: t.project.role, value: project.role },
                { label: t.project.service, value: project.services },
                { label: t.project.platform, value: project.platform },
              ].filter(group => group.value).map((group) => (
                <div key={group.label} className="flex flex-col gap-1">
                  <span className="text-[13px] font-medium text-dark/55">{group.label}</span>
                  <span className="text-[16px] font-medium text-dark">{group.value}</span>
                </div>
              ))}
              {project.team && project.team.length > 0 && (
                <div className="flex flex-col gap-2">
                  <span className="text-[13px] font-medium text-dark/55">{t.project.team}</span>
                  <div className="flex flex-wrap" style={{ gap: "6px" }}>
                    {project.team.map((member, i) => (
                      <button key={i} className="group/tip relative focus:outline-none" onClick={(e) => { e.preventDefault(); e.stopPropagation(); const el = e.currentTarget.querySelector('[data-tooltip]') as HTMLElement; if (el) { el.classList.toggle('!opacity-100'); el.classList.toggle('!translate-y-0'); setTimeout(() => { el.classList.remove('!opacity-100', '!translate-y-0'); }, 2000); } }}>
                        {member.role === "Me" ? (
                          <div className="h-[48px] w-[48px] rounded-full bg-[#3b5998] flex items-center justify-center transition-transform active:scale-90">
                            <span className="text-[15px] font-semibold text-white">Me</span>
                          </div>
                        ) : (
                          <div className="h-[48px] w-[48px] rounded-full bg-dark flex items-center justify-center transition-transform active:scale-90">
                            <span className="text-[15px] font-semibold text-cream">{member.role}</span>
                          </div>
                        )}
                        <span data-tooltip className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 translate-y-1 text-[12px] font-medium text-dark/70 bg-white border border-dark/10 rounded px-2 py-1 whitespace-nowrap opacity-0 group-hover/tip:opacity-100 group-hover/tip:translate-y-0 transition-all duration-200 shadow-sm">{{ "Me": "Product Designer", "PM": "Project Manager", "FE": "Frontend Developer", "BE": "Backend Developer" }[member.role] || member.role}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== SCOPE ===== */}
      {project.scope && project.scope.length > 0 && (
        <section className="relative w-full bg-cream overflow-hidden pb-[60px] md:pb-[100px] lg:pb-[120px]">
          <div className="grid-bg" />
          <div className="relative z-10 mx-auto w-[92%] max-w-[1400px]">
            <motion.div {...fadeUp} className="flex flex-col gap-10 md:gap-12">
              <div className="flex w-full flex-col gap-4">
                <h2 className="text-[20px] md:text-[22px] lg:text-[24px] font-medium leading-[1.4] tracking-[-0.8px] text-dark">
                  {t.project.scope}
                </h2>
                <div className="h-[2px] w-full bg-dark" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {project.scope.map((item, i) => (
                  <div key={i} className="flex flex-col gap-3 bg-white border-2 border-dark p-6 md:p-8">
                    <span className="text-[14px] font-medium text-dark/30">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-[20px] md:text-[22px] font-medium tracking-[-0.5px] text-dark leading-[1.3]">
                      {item.title}
                    </h3>
                    <p className="font-dm text-[16px] md:text-[17px] font-medium leading-[1.6] text-dark/65">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ===== BEFORE / AFTER ===== */}
      {project.beforeAfter && (
        <section className="relative w-full bg-cream overflow-hidden pb-[60px] md:pb-[100px] lg:pb-[120px]">
          <div className="grid-bg" />
          <div className="relative z-10 mx-auto w-[92%] max-w-[1400px]">
            <motion.div {...fadeUp}>
              <BeforeAfter
                before={project.beforeAfter.before}
                after={project.beforeAfter.after}
                alt={project.beforeAfter.alt}
              />
            </motion.div>
          </div>
        </section>
      )}

      {/* ===== SOLUTION IMAGE 1 ===== */}
      {project.solutions[0] && (
        <section className="relative w-full bg-cream overflow-hidden pb-[60px] md:pb-[100px]">
          <div className="grid-bg" />
          <div className="relative z-10 mx-auto w-[92%] max-w-[1400px]">
            <motion.div {...fadeUp} className="flex flex-col gap-4">
              <div className="relative aspect-[4/3] md:aspect-[16/9] w-full overflow-hidden">
                <Image src={project.solutions[0].image} alt={project.solutions[0].alt} fill sizes="92vw" quality={95} className="object-cover" />
              </div>
              <p className="text-[15px] md:text-[16px] font-dm font-medium text-dark/65">{project.solutions[0].caption}</p>
            </motion.div>
          </div>
        </section>
      )}

      {/* ===== SOLUTION IMAGES (remaining — 2-up grid) ===== */}
      {project.solutions.length > 1 && (
        <section className="relative w-full bg-cream overflow-hidden pb-[60px] md:pb-[100px] lg:pb-[120px]">
          <div className="grid-bg" />
          <div className="relative z-10 mx-auto w-[92%] max-w-[1400px]">
            <motion.div {...fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {project.solutions.slice(1).map((screen, i) => (
                <div key={i} className="flex flex-col gap-4">
                  <div className="relative aspect-square w-full overflow-hidden">
                    <Image src={screen.image} alt={screen.alt} fill sizes="(max-width: 768px) 92vw, 46vw" quality={95} className="object-cover object-top" />
                  </div>
                  <p className="text-[15px] md:text-[16px] font-dm font-medium text-dark/65">{screen.caption}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* ===== ITERATIONS ===== */}
      {project.iterations && project.iterations.length > 0 && (
        <section className="relative w-full bg-cream overflow-hidden pb-[60px] md:pb-[100px] lg:pb-[120px]">
          <div className="grid-bg" />
          <div className="relative z-10 mx-auto w-[92%] max-w-[1400px]">
            <div className="flex flex-col gap-12 md:gap-20">
              {project.iterations.map((iter, i) => (
                <motion.div key={i} {...fadeUp} className="max-w-[680px]">
                  <span className="text-[16px] md:text-[18px] font-medium tracking-[-0.3px] text-dark/70">
                    {iter.version}
                  </span>
                  <h3 className="mt-3 text-[28px] md:text-[34px] lg:text-[40px] font-bold leading-[1.2] tracking-[-1px] md:tracking-[-1.5px] text-dark">
                    {iter.title}
                  </h3>
                  <p className="mt-4 text-[17px] md:text-[18px] font-dm font-medium leading-[1.7] text-dark/65">
                    {iter.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== CHALLENGE ===== */}
      <section className="relative w-full bg-cream overflow-hidden pb-[60px] md:pb-[100px] lg:pb-[120px]">
        <div className="grid-bg" />
        <div className="relative z-10 mx-auto w-[92%] max-w-[1400px]">
          <motion.div {...fadeUp} className="max-w-[800px] flex flex-col gap-4 md:gap-6">
            <h2 className="text-[16px] md:text-[18px] font-medium tracking-[-0.3px] text-dark/70">
              {t.project.problem}
            </h2>
            <p className="font-space text-[24px] md:text-[28px] lg:text-[32px] font-medium leading-[1.4] tracking-[-0.5px] md:tracking-[-1px] text-dark">
              {project.designQuestion}
            </p>
            <p className="text-[17px] md:text-[18px] font-dm font-medium leading-[1.7] text-dark/65">
              {project.problemStatement}
            </p>
            {project.problemMetrics && (
              <p className="text-[15px] font-dm font-medium text-dark/65">
                {project.problemMetrics}
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* ===== IMPACT ===== */}
      <section className="relative w-full bg-dark overflow-hidden py-[60px] md:py-[100px] lg:py-[120px]">
        <div className="relative z-10 mx-auto w-[92%] max-w-[1400px]">
          <motion.div {...fadeUp} className="flex flex-col gap-10 md:gap-16">
            <div className="flex flex-col gap-3">
              <h2 className="text-[16px] md:text-[18px] font-medium tracking-[-0.3px] text-cream/70">
                {t.project.results}
              </h2>
              {project.resultsNote && (
                <p className="text-[17px] md:text-[18px] font-dm font-medium leading-[1.6] text-cream/65">
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
                  <span className="text-[16px] md:text-[17px] font-dm font-medium text-cream/65">
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
          <div className="relative z-10 mx-auto w-[92%] max-w-[1400px]">
            <motion.div {...fadeUp} className="flex flex-col gap-0">
              <h2 className="text-[16px] md:text-[18px] font-medium tracking-[-0.3px] text-dark/70 mb-10 md:mb-14">
                {t.project.learnings}
              </h2>
              {project.learnings.map((learning, i) => (
                <div key={i} className={`flex items-start gap-6 md:gap-10 py-8 md:py-10 ${i !== 0 ? "border-t border-dark/10" : ""}`}>
                  <span className="text-[56px] md:text-[72px] lg:text-[96px] font-bold leading-[0.85] tracking-[-3px] md:tracking-[-5px] text-dark/8 shrink-0 w-[60px] md:w-[80px] lg:w-[100px]">
                    {String(i + 1)}
                  </span>
                  <p className="text-[20px] md:text-[24px] lg:text-[28px] font-space font-medium leading-[1.45] tracking-[-0.5px] md:tracking-[-1px] text-dark pt-2 md:pt-3">
                    {learning.text}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* ===== NEXT PROJECT ===== */}
      <section className="relative w-full bg-cream overflow-hidden pb-[80px] md:pb-[100px] lg:pb-[150px]">
        <div className="grid-bg" />
        <div className="relative z-10 mx-auto w-[92%] max-w-[1400px] flex flex-col gap-10 md:gap-12 lg:gap-16">
          <div className="flex w-full flex-col gap-4">
            <h2 className="text-[20px] md:text-[22px] lg:text-[24px] font-medium leading-[1.4] tracking-[-0.8px] text-dark">
              {t.project.nextProject}
            </h2>
            <div className="h-[2px] w-full bg-dark" />
          </div>

          <Link
            href={`/projects/${nextProject.slug}`}
            className="group flex flex-col lg:flex-row lg:h-[400px] xl:h-[500px] w-full lg:items-end justify-between overflow-hidden"
          >
            {/* Image - mobile */}
            <div className="relative w-full lg:hidden aspect-[4/3] md:aspect-[16/9] overflow-hidden">
              {nextProject.thumbnail ? (
                <Image src={nextProject.thumbnail} alt={nextProject.title} fill sizes="100vw" quality={95} className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]" />
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
                  {nextProject.title}
                </h3>
                <p className="text-[18px] md:text-[20px] lg:text-[22px] font-medium leading-[1.5] tracking-[-0.6px] text-dark/65">
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
            {/* Image - desktop */}
            <div className="relative hidden lg:block h-full w-[70%] overflow-hidden">
              {nextProject.thumbnail ? (
                <Image src={nextProject.thumbnail} alt={nextProject.title} fill sizes="70vw" quality={95} className="object-contain object-center transition-transform duration-700 group-hover:scale-[1.02]" />
              ) : (
                <div className="absolute inset-0 bg-dark/5 border-2 border-dashed border-dark/15 flex items-center justify-center">
                  <span className="text-[18px] font-medium text-dark/30">Coming soon</span>
                </div>
              )}
            </div>
          </Link>
        </div>
      </section>

      </>
      )}
      </main>
      <Footer />
    </>
  );
}
