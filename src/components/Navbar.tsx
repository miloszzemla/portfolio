"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const [time, setTime] = useState("");
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

  return (
    <nav className="sticky top-0 z-50 w-full bg-cream overflow-hidden">
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

        <div className="hidden md:flex md:w-1/3 items-center justify-center gap-6 lg:gap-8">
          <a
            href="/#about"
            className="text-[18px] lg:text-[20px] font-medium leading-[1.5] tracking-[-0.6px] text-dark transition-opacity hover:opacity-60"
          >
            {t.nav.about}
          </a>
          <a
            href="/#work"
            className="text-[18px] lg:text-[20px] font-medium leading-[1.5] tracking-[-0.6px] text-dark transition-opacity hover:opacity-60"
          >
            {t.nav.projects}
          </a>
          <a
            href="/contact"
            className="text-[18px] lg:text-[20px] font-medium leading-[1.5] tracking-[-0.6px] text-dark transition-opacity hover:opacity-60"
          >
            {t.nav.contact}
          </a>
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
        </div>
      </div>
      <div className="relative mx-auto w-[92%] h-[2px] bg-dark" />
    </nav>
  );
}
