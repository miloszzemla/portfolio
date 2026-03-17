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
      <div className="relative mx-auto flex w-[92%] items-center justify-between pt-5 pb-5">
        <div className="w-1/3 flex justify-start">
          <a
            href="/"
            className="text-[22px] font-bold leading-[1.5] tracking-[-0.6px] text-dark"
          >
            Milosz Zemla
          </a>
        </div>

        <div className="w-1/3 flex items-center justify-center gap-8">
          <a
            href="/#about"
            className="text-[20px] font-medium leading-[1.5] tracking-[-0.6px] text-dark transition-opacity hover:opacity-60"
          >
            About
          </a>
          <a
            href="/#work"
            className="text-[20px] font-medium leading-[1.5] tracking-[-0.6px] text-dark transition-opacity hover:opacity-60"
          >
            Projects
          </a>
          <a
            href="/contact"
            className="text-[20px] font-medium leading-[1.5] tracking-[-0.6px] text-dark transition-opacity hover:opacity-60"
          >
            Contact
          </a>
        </div>

        <div className="w-1/3 flex items-center justify-end gap-1">
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
