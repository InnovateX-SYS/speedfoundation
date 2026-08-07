import React from "react";
import { DICTIONARY, LANGUAGES, LOCALES } from "./dictionary";

const LanguageContext = React.createContext(null);

const STORAGE_KEY = "sf-language";

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = React.useState(() => {
    const saved = typeof window !== "undefined" && window.localStorage.getItem(STORAGE_KEY);
    return LANGUAGES.includes(saved) ? saved : "English";
  });

  const setLanguage = React.useCallback((lang) => {
    if (!LANGUAGES.includes(lang)) return;
    setLanguageState(lang);
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* storage unavailable — language still applies for this session */
    }
  }, []);

  const value = React.useMemo(() => {
    // Translate a source string. English is the key; a missing entry falls
    // back to the English text so nothing ever renders blank.
    const t = (text) => {
      if (typeof text !== "string") return text;
      if (language === "English") return text;
      const entry = DICTIONARY[text];
      return (entry && entry[language]) || text;
    };

    // Locale-aware number formatting (grouping separators differ per locale).
    const n = (value) => Number(value).toLocaleString(LOCALES[language]);

    // Naira amounts, locale-formatted.
    const money = (value) => `₦${n(value)}`;

    return { language, setLanguage, t, n, money, locale: LOCALES[language] };
  }, [language, setLanguage]);

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useI18n() {
  const ctx = React.useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useI18n must be used inside a <LanguageProvider>");
  }
  return ctx;
}

export default LanguageContext;
