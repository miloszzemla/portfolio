"use client";

import { motion } from "framer-motion";

const experience = [
  { company: "MANO", role: "Design Consultant", period: "2022 – Now" },
  { company: "Spotify", role: "Senior Designer", period: "2021 – 2022" },
  {
    company: "Martin Taylor",
    role: "Freelance Designer",
    period: "2019 – 2021",
  },
  { company: "Shrink", role: "UI/UX Designer", period: "2018 – 2019" },
  { company: "IBM", role: "Design Intern", period: "2016 – 2017" },
];

export default function Experience() {
  return (
    <section className="relative w-full bg-cream overflow-hidden py-[60px] md:py-[80px] lg:py-[100px]">
      <div className="grid-bg" />

      <div className="relative z-10 mx-auto flex w-[92%] flex-col items-start gap-10 md:gap-12 lg:gap-16">
        {/* Section title */}
        <div className="flex w-full flex-col gap-4">
          <div className="flex w-full items-center justify-between">
            <h2 className="text-[20px] md:text-[22px] lg:text-[24px] font-medium leading-[1.4] tracking-[-0.8px] text-dark">
              Experience
            </h2>
          </div>
          <div className="h-[2px] w-full bg-dark" />
        </div>

        {/* Content: stacked on mobile, 30% description / 60% list on desktop */}
        <div className="flex w-full flex-col lg:flex-row items-start justify-between gap-10 lg:gap-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-[30%]"
          >
            <p className="text-[20px] md:text-[22px] lg:text-[24px] font-medium leading-[1.5] tracking-[-0.6px] lg:tracking-[-0.8px] text-dark">
              I&apos;ve worked with companies and clients, both in agency
              settings and as a freelancer. I enjoy collaborating with clients
              who appreciate the importance of good design.
            </p>
          </motion.div>

          <div className="flex w-full lg:w-[60%] flex-col gap-5">
            {experience.map((item, i) => (
              <motion.div
                key={item.company}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                {/* Experience row - stacked on XS, horizontal on S+ */}
                <div className="flex w-full flex-col md:flex-row md:items-center md:justify-between gap-1 md:gap-0">
                  <span className="md:w-1/4 text-[18px] md:text-[20px] lg:text-[22px] font-bold md:font-medium leading-[1.5] tracking-[-0.6px] text-dark">
                    {item.company}
                  </span>
                  <span className="md:w-2/5 text-[16px] md:text-[20px] lg:text-[22px] font-medium leading-[1.5] tracking-[-0.4px] md:tracking-[-0.6px] text-dark">
                    {item.role}
                  </span>
                  <span className="md:w-1/4 md:text-right text-[14px] md:text-[20px] lg:text-[22px] font-medium leading-[1.5] tracking-[-0.4px] md:tracking-[-0.6px] text-dark/60 md:text-dark">
                    {item.period}
                  </span>
                </div>
                {/* Divider */}
                {i < experience.length - 1 && (
                  <div className="mt-5 h-[2px] w-full bg-dark/16" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
