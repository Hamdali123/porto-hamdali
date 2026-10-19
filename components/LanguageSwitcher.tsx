"use client";
import { useContent } from "@/components/ContentProvider";

export default function LanguageSwitcher({ light }: { light?: boolean }) {
  const { lang, setLang } = useContent();
  return (
    <div
      className={`inline-flex items-center rounded-lg border text-xs font-semibold overflow-hidden ${
        light ? "border-slate-200" : "border-white/20"
      }`}
      role="group"
      aria-label="Language / Bahasa"
    >
      {(["id", "en"] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`px-2.5 py-1.5 transition ${
            lang === l
              ? "bg-blue-600 text-white"
              : light
                ? "text-slate-600 hover:bg-slate-100"
                : "text-slate-200 hover:bg-white/10"
          }`}
        >
          {l === "id" ? "ID" : "EN"}
        </button>
      ))}
    </div>
  );
}
