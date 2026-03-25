"use client";

import { useLanguage } from "@/i18n/LanguageContext";

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center gap-1">
      <button
        onClick={() => setLang("en")}
        className={`text-[20px] font-medium leading-[1.5] tracking-[-0.6px] transition-opacity ${
          lang === "en" ? "text-dark" : "text-dark/30 hover:text-dark/60"
        }`}
      >
        EN
      </button>
      <span className="text-[20px] font-medium text-dark/30">/</span>
      <button
        onClick={() => setLang("pl")}
        className={`text-[20px] font-medium leading-[1.5] tracking-[-0.6px] transition-opacity ${
          lang === "pl" ? "text-dark" : "text-dark/30 hover:text-dark/60"
        }`}
      >
        PL
      </button>
    </div>
  );
}
