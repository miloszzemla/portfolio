"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

const socials = [
  { name: "Behance", href: "https://www.behance.net/miloszzemla" },
  { name: "Dribbble", href: "https://dribbble.com/miloszzemla" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/miloszzemla/" },
];

export default function Footer() {
  const { t } = useLanguage();
  const footerRef = useRef<HTMLElement>(null);
  const [footerHeight, setFooterHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (footerRef.current) {
        setFooterHeight(footerRef.current.offsetHeight);
      }
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const marqueeText = `${t.footer.marquee} \u00A0\u00A0\u00A0 ${t.footer.marquee} \u00A0\u00A0\u00A0 ${t.footer.marquee} \u00A0\u00A0\u00A0 ${t.footer.marquee} \u00A0\u00A0\u00A0 `;

  return (
    <>
      {/* Spacer to account for fixed footer height */}
      <div style={{ height: footerHeight }} />
      <footer ref={footerRef} className="fixed bottom-0 left-0 right-0 z-0 flex min-h-[60vh] md:min-h-[75vh] w-full flex-col justify-end bg-dark overflow-hidden px-0 pt-16 md:pt-24 pb-8 md:pb-12">
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

      {/* Scrolling marquee */}
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
              className="font-semibold leading-[1.12] tracking-[-2px] md:tracking-[-4px] lg:tracking-[-5px] text-cream text-[48px] md:text-[80px] lg:text-[120px] xl:text-[160px]"
            >
              {marqueeText}
            </span>
            <span
              className="font-semibold leading-[1.12] tracking-[-2px] md:tracking-[-4px] lg:tracking-[-5px] text-cream text-[48px] md:text-[80px] lg:text-[120px] xl:text-[160px]"
            >
              {marqueeText}
            </span>
          </div>
        </motion.div>
      </div>

      {/* Middle: Social + Info */}
      <div className="relative z-10 mx-auto flex w-[92%] flex-col md:flex-row items-start justify-between gap-10 md:gap-16 lg:gap-64 mt-12 md:mt-16 mb-16 md:mb-24">
        {/* Social links */}
        <div className="flex w-full md:w-1/4 flex-row md:flex-col gap-4 md:gap-4 flex-wrap">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[20px] md:text-[22px] lg:text-[24px] font-medium leading-[1.5] tracking-[-0.6px] lg:tracking-[-0.8px] text-cream underline underline-offset-4 decoration-cream/40 transition-opacity hover:opacity-60"
            >
              {social.name} <span className="inline-block rotate-45">&#x2191;</span>
            </a>
          ))}
        </div>

        {/* Info text */}
        <div className="w-full md:w-[40%] lg:w-[30%]">
          <p className="text-[20px] md:text-[22px] lg:text-[24px] font-medium leading-[1.5] tracking-[-0.6px] lg:tracking-[-0.8px] text-cream">
            {t.footer.available}
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 mx-auto flex w-[92%] flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0">
        {/* Email */}
        <div className="md:w-1/3">
          <a
            href="mailto:miloszzemla@gmail.com?subject=👋"
            className="text-[18px] md:text-[20px] font-medium leading-[1.5] tracking-[-0.4px] md:tracking-[-0.6px] text-cream underline underline-offset-4 decoration-cream/40 transition-opacity hover:opacity-60"
          >
            miloszzemla@gmail.com
          </a>
        </div>

        <div className="hidden md:block md:w-1/3" />

        {/* Back to top */}
        <div className="md:w-1/3 md:flex md:justify-end">
          <a
            href="/#back-to-top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-[18px] md:text-[20px] font-medium leading-[1.5] tracking-[-0.4px] md:tracking-[-0.6px] text-cream underline underline-offset-4 decoration-cream/40 transition-opacity hover:opacity-60"
          >
            {t.footer.backToTop}
          </a>
        </div>
      </div>
    </footer>
    </>
  );
}
