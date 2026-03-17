"use client";

import { motion } from "framer-motion";

const socials = [
  { name: "Instagram", href: "https://www.instagram.com/tamermagdy07/" },
  { name: "Twitter", href: "https://twitter.com/tamermagdy07" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/tamermagdy/" },
  { name: "Dribbble", href: "https://dribbble.com/TamerMagdy" },
];

const marqueeText = "Let\u2019s work together \u00A0\u00A0\u00A0 Let\u2019s work together \u00A0\u00A0\u00A0 Let\u2019s work together \u00A0\u00A0\u00A0 Let\u2019s work together \u00A0\u00A0\u00A0 ";

export default function Footer() {
  return (
    <footer className="relative flex min-h-screen w-full flex-col justify-end bg-dark overflow-hidden px-0 pt-24 pb-12">
      <div
        className="absolute opacity-5 pointer-events-none"
        style={{
          left: "4%",
          right: "4%",
          top: 0,
          bottom: 0,
          backgroundImage:
            "linear-gradient(to right, #f1efed 1px, transparent 1px)",
          backgroundSize: "calc(100% / 11) 100%",
          borderRight: "1px solid #f1efed",
        }}
      />

      {/* Scrolling "Let's work together" marquee */}
      <div className="relative z-10 my-auto w-full overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex whitespace-nowrap"
        >
          <div className="footer-marquee flex">
            <span
              className="font-semibold leading-[1.12] tracking-[-5px] text-cream"
              style={{ fontSize: "clamp(80px, 10vw, 160px)" }}
            >
              {marqueeText}
            </span>
            <span
              className="font-semibold leading-[1.12] tracking-[-5px] text-cream"
              style={{ fontSize: "clamp(80px, 10vw, 160px)" }}
            >
              {marqueeText}
            </span>
          </div>
        </motion.div>
      </div>

      {/* Middle: Social + Info */}
      <div className="relative z-10 mx-auto flex w-[92%] items-start justify-between gap-64 mb-24">
        {/* Social links */}
        <div className="flex w-1/4 flex-col gap-4">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[24px] font-medium leading-[1.5] tracking-[-0.8px] text-cream underline underline-offset-4 decoration-cream/40 transition-opacity hover:opacity-60"
            >
              {social.name} ↗
            </a>
          ))}
        </div>

        {/* Info text */}
        <div className="w-[30%]">
          <p className="text-[24px] font-medium leading-[1.5] tracking-[-0.8px] text-cream">
            I&apos;m currently available for new work, let me know if you need a
            digital designer. I&apos;d love to talk about the next big thing!
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 mx-auto flex w-[92%] items-center justify-between">
        {/* Email */}
        <div className="w-1/3">
          <a
            href="mailto:hello@martintaylor.com?subject=👋"
            className="text-[20px] font-medium leading-[1.5] tracking-[-0.6px] text-cream underline underline-offset-4 decoration-cream/40 transition-opacity hover:opacity-60"
          >
            hello@martintaylor.com
          </a>
        </div>

        <div className="w-1/3" />

        {/* Back to top */}
        <div className="w-1/3 flex justify-end">
          <a
            href="/#back-to-top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-[20px] font-medium leading-[1.5] tracking-[-0.6px] text-cream underline underline-offset-4 decoration-cream/40 transition-opacity hover:opacity-60"
          >
            ↑ Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
