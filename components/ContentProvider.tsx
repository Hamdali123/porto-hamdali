"use client";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { content, type Content, type Lang } from "@/lib/content";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  c: Content;
};

const ContentContext = createContext<Ctx | null>(null);

export function ContentProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("id");

  useEffect(() => {
    const saved = typeof window !== "undefined" ? window.localStorage.getItem("lang") : null;
    if (saved === "en" || saved === "id") setLangState(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      window.localStorage.setItem("lang", lang);
    } catch {}
  }, [lang]);

  const value: Ctx = {
    lang,
    setLang: setLangState,
    toggle: () => setLangState((p) => (p === "id" ? "en" : "id")),
    c: content[lang],
  };

  return <ContentContext.Provider value={value}>{children}</ContentContext.Provider>;
}

export function useContent() {
  const ctx = useContext(ContentContext);
  if (!ctx) throw new Error("useContent must be used inside ContentProvider");
  return ctx;
}
