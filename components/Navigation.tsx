"use client";
import { useState, useEffect, useCallback } from "react";
import { useContent } from "@/components/ContentProvider";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const ids = ["beranda", "tentang", "keahlian", "pengalaman", "proyek", "kontak"] as const;

export default function Navigation() {
  const { c } = useContent();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("beranda");

  const links = ids.map((id) => ({ id, label: c.ui.nav[id] }));

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const points = ids
        .map((id) => document.getElementById(id))
        .filter((el): el is HTMLElement => Boolean(el))
        .map((el) => ({ id: el.id, top: el.getBoundingClientRect().top - 96 }));
      const current = points.filter((p) => p.top <= 0).pop();
      const nearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 4;
      setActive(nearBottom ? ids[ids.length - 1] : current?.id ?? "beranda");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  }, []);

  return (
    <nav
      aria-label="Navigasi utama"
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled ? "bg-white/95 backdrop-blur shadow-md" : "bg-[#000a14]/80 backdrop-blur"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <button onClick={() => go("beranda")} className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 text-white font-bold flex items-center justify-center text-sm">
              {c.profile.shortName}
            </span>
            <span className={`font-bold text-[15px] ${scrolled ? "text-slate-900" : "text-white"}`}>
              {c.profile.name}
            </span>
          </button>
          <div className="hidden lg:flex items-center gap-1">
            {links.map((l) => {
              const isActive = active === l.id;
              return (
                <button
                  key={l.id}
                  onClick={() => go(l.id)}
                  aria-current={isActive ? "true" : undefined}
                  className={`px-3 py-2 text-sm rounded-md transition ${
                    isActive
                      ? scrolled
                        ? "text-blue-700 bg-blue-50 font-semibold"
                        : "text-white bg-white/15 font-semibold"
                      : scrolled
                        ? "text-slate-700 hover:text-blue-600 hover:bg-slate-100"
                        : "text-slate-200 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {l.label}
                </button>
              );
            })}
            <div className="ml-2">
              <LanguageSwitcher light={scrolled} />
            </div>
            <a
              href={c.profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-4 py-2 text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
            >
              GitHub
            </a>
          </div>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Buka menu"
            aria-expanded={open}
            className={`lg:hidden p-2 rounded-md ${scrolled ? "text-slate-800" : "text-white"}`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden bg-white border-t shadow-lg max-h-[70vh] overflow-auto">
          <div className="px-5 py-3 border-b border-slate-100">
            <LanguageSwitcher light />
          </div>
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className={`block w-full text-left px-5 py-3 border-b border-slate-100 ${
                active === l.id ? "text-blue-700 font-semibold bg-blue-50" : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
