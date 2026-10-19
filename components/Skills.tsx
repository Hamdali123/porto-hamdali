"use client";
import { useContent } from "@/components/ContentProvider";

const levelColor: Record<string, string> = {
  Basic: "bg-slate-100 text-slate-600",
  Learning: "bg-amber-100 text-amber-800",
  "Practical Experience": "bg-emerald-100 text-emerald-800",
  "Project Experience": "bg-blue-100 text-blue-800",
};

export default function Skills() {
  const { c } = useContent();
  const t = c.ui.skills;

  return (
    <section id="keahlian" className="py-16 md:py-24 bg-slate-50 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">{t.eyebrow}</p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">{t.heading}</h2>
        <p className="text-slate-600 mb-10 max-w-3xl">{t.subtext}</p>
        <div className="grid md:grid-cols-2 gap-5">
          {c.skillGroups.map((g) => (
            <article key={g.title} className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition">
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="font-bold text-lg text-slate-900">{g.title}</h3>
                <span className={`text-[11px] font-semibold px-3 py-1 rounded-full whitespace-nowrap ${levelColor[g.level]}`}>
                  {g.level}
                </span>
              </div>
              <p className="text-sm text-slate-500 mb-4">{g.desc}</p>
              <div className="flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <span key={s} className="text-[13px] bg-slate-100 text-slate-700 px-3 py-1.5 rounded-lg">
                    {s}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
