"use client";
import { useContent } from "@/components/ContentProvider";

const tags = ["Troubleshooting", "MikroTik", "Linux Server", "Wireshark", "SmartOLT", "GitHub"];

export default function About() {
  const { c } = useContent();
  const p = c.profile;
  const t = c.ui.about;

  return (
    <section id="tentang" className="py-16 md:py-24 bg-white scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">{t.eyebrow}</p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">{t.heading}</h2>
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8">
            <div className="flex flex-col sm:flex-row gap-6 mb-4">
              {p.photoPath ? (
                <div className="shrink-0 mx-auto sm:mx-0">
                  <div className="bg-gradient-to-br from-[#001d47] to-blue-600 p-1.5 rounded-2xl shadow-lg w-40">
                    <img
                      src={p.photoPath}
                      alt={`Foto formal ${p.name}`}
                      className="w-full h-52 object-cover object-top rounded-xl bg-white"
                      onError={(e) => {
                        const wrap = (e.target as HTMLImageElement).closest("div.shrink-0") as HTMLElement | null;
                        if (wrap) wrap.style.display = "none";
                      }}
                    />
                  </div>
                  <p className="text-[11px] text-slate-500 text-center mt-2">{p.name}</p>
                </div>
              ) : null}
              <div>
                <p className="text-slate-700 leading-relaxed mb-4">{t.p1}</p>
                <p className="text-slate-700 leading-relaxed mb-6">{t.p2}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span key={tag} className="text-xs bg-blue-50 text-blue-700 border border-blue-100 px-3 py-1.5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-[#001d47] text-white rounded-2xl p-6 md:p-8">
            <h3 className="font-bold text-lg mb-4">{t.targetTitle}</h3>
            <ul className="space-y-2.5 text-sm text-slate-200">
              {p.focusRoles.map((r) => (
                <li key={r} className="flex gap-2">
                  <span className="text-blue-400 mt-0.5">▸</span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-white/10 text-xs text-slate-400">{p.secondaryRoles}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
