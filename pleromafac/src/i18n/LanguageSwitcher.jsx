import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function LanguageToggle() {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  useEffect(() => {
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
    localStorage.setItem("lang", i18n.language);
  }, [i18n.language, isArabic]);

  return (
    <button
      onClick={() => i18n.changeLanguage(isArabic ? "en" : "ar")}
      className="relative inline-flex items-center w-16 h-8 rounded-full
                 bg-gray-800 border border-white/10
                 hover:border-teal-400 transition"
    >
      <span
        className={`absolute w-8 h-6 rounded-full bg-teal-400 transition-transform
          ${isArabic ? "translate-x--1" : "translate-x-1"}`}
      />
      <span className="absolute left-2 text-xs text-white">EN</span>
      <span className="absolute right-2 text-xs text-white">AR</span>
    </button>
  );
}

