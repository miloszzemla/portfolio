"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const [time, setTime] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const update = () => {
      const now = new Date().toLocaleTimeString("en-GB", {
        timeZone: "Europe/Warsaw",
        hour: "2-digit",
        minute: "2-digit",
      });
      setTime(now);
    };
    update();
    const interval = setInterval(update, 60000);
    return () => clearInterval(interval);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navLinks = [
    { href: "/#about", label: t.nav.about },
    { href: "/#work", label: t.nav.projects },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <>
      <nav className="sticky top-0 z-[60] w-full bg-cream overflow-hidden">
        <div className="grid-bg" />
        <div className="relative mx-auto flex w-[92%] items-center justify-between pt-4 pb-4 md:pt-5 md:pb-5">
          <div className="flex justify-start md:w-1/3">
            <a
              href="/"
              className="text-[18px] md:text-[20px] lg:text-[22px] font-bold leading-[1.5] tracking-[-0.6px] text-dark"
            >
              Milosz Zemla
            </a>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex md:w-1/3 items-center justify-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[18px] lg:text-[20px] font-medium leading-[1.5] tracking-[-0.6px] text-dark transition-opacity hover:opacity-60"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center justify-end gap-6 md:w-1/3">
            <LanguageSwitcher />
            <div className="hidden lg:flex items-center gap-1">
              <span className="text-[20px] font-medium leading-[1.5] tracking-[-0.6px] text-dark">
                {t.nav.location}
              </span>
              <span className="text-[18px] font-medium leading-none tracking-[-0.4px] text-dark flex items-center">
                *
              </span>
              <span className="text-[20px] font-medium leading-[1.5] tracking-[-0.6px] text-dark">
                {time}
              </span>
            </div>

            {/* Hamburger button — mobile only */}
            <button
              className="md:hidden relative z-[60] flex flex-col justify-center items-center w-[32px] h-[32px] gap-[6px]"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              <span
                className={`block h-[2px] w-[24px] bg-dark transition-all duration-300 origin-center ${
                  menuOpen ? "translate-y-[4px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-[2px] w-[24px] bg-dark transition-all duration-300 origin-center ${
                  menuOpen ? "-translate-y-[4px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
        <div className="relative mx-auto w-[92%] h-[2px] bg-dark" />
      </nav>

      {/* Fullscreen mobile menu — slides from right */}
      <div
        className={`fixed inset-0 z-[55] bg-cream transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="grid-bg" />
        <div className="relative flex flex-col justify-center items-start w-[92%] mx-auto h-full gap-8">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[48px] font-bold leading-[1.1] tracking-[-2px] text-dark transition-opacity duration-300 hover:opacity-60"
              style={{
                transitionDelay: menuOpen ? `${150 + i * 75}ms` : "0ms",
                opacity: menuOpen ? undefined : 0,
                transform: menuOpen ? "translateX(0)" : "translateX(40px)",
                transition: `opacity 400ms ${150 + i * 75}ms, transform 400ms ${150 + i * 75}ms`,
              }}
            >
              {link.label}
            </a>
          ))}

          {/* Bottom info in mobile menu */}
          <div
            className="absolute bottom-8 left-0 flex items-center gap-2"
            style={{
              opacity: menuOpen ? 1 : 0,
              transition: "opacity 400ms 400ms",
            }}
          >
            <span className="text-[16px] font-medium tracking-[-0.4px] text-dark/65">
              {t.nav.location} * {time}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
