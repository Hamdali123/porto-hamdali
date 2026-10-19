"use client";
import { useContent } from "@/components/ContentProvider";

export default function Education() {
  const { c } = useContent();
  const t = c.ui.education;

  return (
    <section id="pendidikan" className="py-16 md:py-24 bg-white scroll-mt-16">
      <div className="max-w-5xl mx-auto px-4">
        <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">{t.eyebrow}</p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10">{t.heading}</h2>
        <div className="grid md:grid-cols-2 gap-5">
          {c.education.map((e) => (
            <article key={e.school} className="bg-gradient-to-br from-blue-50/70 to-white border border-blue-100 rounded-2xl p-6">
              <div className="flex items-start justify-between gap-3 mb-3">
                <div>
                  <span className="text-xs font-bold text-blue-700">{e.level}</span>
                  <h3 className="font-bold text-lg text-slate-900">{e.school}</h3>
                </div>
                <span className="text-xs bg-white border px-3 py-1.5 rounded-full text-slate-600 whitespace-nowrap">{e.period}</span>
              </div>
              <span className="inline-block text-xs font-medium bg-[#001d47] text-white px-2.5 py-1 rounded-md mb-3">{e.major}</span>
              <p className="text-sm text-slate-600">{e.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
