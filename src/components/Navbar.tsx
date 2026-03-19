"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [time, setTime] = useState("");

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
            About
          </a>
          <a
            href="/#work"
            className="text-[18px] lg:text-[20px] font-medium leading-[1.5] tracking-[-0.6px] text-dark transition-opacity hover:opacity-60"
          >
            Projects
          </a>
          <a
            href="/contact"
            className="text-[18px] lg:text-[20px] font-medium leading-[1.5] tracking-[-0.6px] text-dark transition-opacity hover:opacity-60"
          >
            Contact
          </a>
        </div>

        <div className="hidden lg:flex lg:w-1/3 items-center justify-end gap-1">
          <span className="text-[20px] font-medium leading-[1.5] tracking-[-0.6px] text-dark">
            Warsaw
          </span>
          <span className="text-[18px] font-medium leading-[1.5] tracking-[-0.4px] text-dark">
            *
          </span>
          <span className="text-[20px] font-medium leading-[1.5] tracking-[-0.6px] text-dark">
            {time}
          </span>
        </div>
      </div>
      <div className="relative mx-auto w-[92%] h-[2px] bg-dark" />
    </nav>
  );
}
