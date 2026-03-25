"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/i18n/LanguageContext";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [budget, setBudget] = useState("");
  const [details, setDetails] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const { t } = useLanguage();

  const toggleType = (type: string) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // Simulate submission
    setTimeout(() => setStatus("success"), 1000);
  };

  return (
    <>
      <Navbar />

      {/* Header */}
      <header className="relative flex h-[30vh] md:h-[35vh] lg:h-[40vh] w-full flex-col justify-end bg-cream overflow-hidden">
        <div className="grid-bg" />
        <div className="relative z-10 mx-auto flex w-[92%] flex-col gap-2">
          <h1 className="font-bold text-[48px] md:text-[72px] lg:text-[96px] xl:text-[120px] leading-[1.12] tracking-[-2px] md:tracking-[-3px] lg:tracking-[-5px] text-dark">
            {t.contact.title}
          </h1>
          <div className="h-[2px] w-full bg-dark" />
        </div>
      </header>

      {/* Content */}
      <section className="relative w-full bg-cream overflow-hidden pt-[48px] md:pt-[64px] lg:pt-[88px] pb-[80px] md:pb-[100px] lg:pb-[150px]">
        <div className="grid-bg" />
        <div className="relative z-10 mx-auto flex w-[92%] flex-col items-end gap-12 md:gap-16 lg:gap-20">
          {/* Intro text + email */}
          <div className="flex w-full md:w-[80%] lg:w-[60%] flex-col items-start gap-4 md:gap-6">
            <p className="text-[24px] md:text-[28px] lg:text-[34px] font-medium leading-[1.5] tracking-[-0.6px] lg:tracking-[-1px] text-dark">
              {t.contact.intro}
            </p>
            <a
              href="mailto:hello@miloszzemla.com"
              className="text-[18px] md:text-[20px] lg:text-[22px] font-medium leading-[1.5] tracking-[-0.4px] md:tracking-[-0.6px] text-dark transition-opacity hover:opacity-60"
            >
              hello@miloszzemla.com ↗
            </a>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="flex w-full md:w-[80%] lg:w-[60%] flex-col items-start gap-5 md:gap-6 bg-[#e5e1dc] p-6 md:p-8"
          >
            {/* Name */}
            <div className="flex w-full flex-col gap-2">
              <label className="text-[16px] md:text-[18px] font-medium leading-[1.5] tracking-[-0.4px] text-dark">
                {t.contact.name}
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full rounded-[4px] border border-dark/10 bg-white px-4 py-3 text-[16px] md:text-[18px] font-medium leading-[1.5] tracking-[-0.4px] text-dark outline-none transition-colors focus:border-dark/40 placeholder:text-dark/30"
                placeholder={t.contact.namePlaceholder}
              />
            </div>

            {/* Email */}
            <div className="flex w-full flex-col gap-2">
              <label className="text-[16px] md:text-[18px] font-medium leading-[1.5] tracking-[-0.4px] text-dark">
                {t.contact.email}
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-[4px] border border-dark/10 bg-white px-4 py-3 text-[16px] md:text-[18px] font-medium leading-[1.5] tracking-[-0.4px] text-dark outline-none transition-colors focus:border-dark/40 placeholder:text-dark/30"
                placeholder={t.contact.emailPlaceholder}
              />
            </div>

            {/* Project Type */}
            <div className="flex w-full flex-col gap-4 md:gap-5">
              <label className="text-[16px] md:text-[18px] font-medium leading-[1.5] tracking-[-0.4px] text-dark">
                {t.contact.projectType}
              </label>
              <div className="flex flex-col gap-3 md:gap-4">
                {t.contact.projectTypes.map((type) => (
                  <label
                    key={type}
                    className="flex cursor-pointer items-center gap-3"
                  >
                    <div
                      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-sm border-2 transition-colors ${
                        selectedTypes.includes(type)
                          ? "border-dark bg-dark"
                          : "border-dark/30 bg-transparent"
                      }`}
                    >
                      {selectedTypes.includes(type) && (
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                        >
                          <path
                            d="M2 6L5 9L10 3"
                            stroke="#f1efed"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </div>
                    <span className="text-[16px] md:text-[18px] font-medium leading-[1.5] tracking-[-0.4px] text-dark">
                      {type}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Budget */}
            <div className="flex w-full flex-col gap-2">
              <label className="text-[16px] md:text-[18px] font-medium leading-[1.5] tracking-[-0.4px] text-dark">
                {t.contact.budget}
              </label>
              <input
                type="text"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full rounded-[4px] border border-dark/10 bg-white px-4 py-3 text-[16px] md:text-[18px] font-medium leading-[1.5] tracking-[-0.4px] text-dark outline-none transition-colors focus:border-dark/40 placeholder:text-dark/30"
                placeholder={t.contact.budgetPlaceholder}
              />
            </div>

            {/* Details */}
            <div className="flex w-full flex-col gap-2">
              <label className="text-[16px] md:text-[18px] font-medium leading-[1.5] tracking-[-0.4px] text-dark">
                {t.contact.details}
              </label>
              <textarea
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                rows={4}
                className="w-full resize-none rounded-[4px] border border-dark/10 bg-white px-4 py-3 text-[16px] md:text-[18px] font-medium leading-[1.5] tracking-[-0.4px] text-dark outline-none transition-colors focus:border-dark/40 placeholder:text-dark/30"
                placeholder={t.contact.detailsPlaceholder}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "loading"}
              className={`flex h-[46px] md:h-[50px] min-w-[120px] items-center justify-center rounded-[2px] px-6 text-[15px] md:text-[16px] font-semibold leading-[1.5] tracking-[-0.4px] transition-opacity hover:opacity-80 ${
                status === "success"
                  ? "bg-dark text-cream"
                  : status === "error"
                    ? "bg-[rgba(255,34,68,0.15)] text-dark"
                    : status === "loading"
                      ? "bg-dark text-cream opacity-70"
                      : "bg-dark text-cream"
              }`}
            >
              {status === "loading"
                ? t.contact.sending
                : status === "success"
                  ? t.contact.sent
                  : status === "error"
                    ? t.contact.error
                    : t.contact.submit}
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}
