"use client";
import { useContent } from "@/components/ContentProvider";

function isPlaceholderPeriod(period: string) {
  return !period || /\[Isi|\[Fill/i.test(period);
}

export default function Experience() {
  const { c } = useContent();
  const t = c.ui.experience;

  return (
    <section id="pengalaman" className="py-16 md:py-24 bg-white scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4">
        <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">{t.eyebrow}</p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">{t.heading}</h2>
        <p className="text-slate-600 mb-10">{t.subtext}</p>
        <div className="space-y-5">
          {c.experiences.map((e) => (
            <article
              key={e.company}
              className={`rounded-2xl p-6 md:p-7 border ${
                e.type === "professional"
                  ? "bg-gradient-to-br from-blue-50/60 to-white border-blue-200 border-l-4 border-l-blue-600"
                  : "bg-slate-50 border-slate-200"
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                <div>
                  <h3 className="font-bold text-lg text-slate-900">{e.company}</h3>
                  <p className="text-blue-700 font-medium text-sm">{e.role}</p>
                </div>
                {isPlaceholderPeriod(e.period) ? null : (
                  <span className="text-xs bg-white border border-slate-200 text-slate-600 px-3 py-1.5 rounded-full whitespace-nowrap">
                    {e.period}
                  </span>
                )}
              </div>
              <p className="text-slate-700 text-[15px] mb-4">{e.summary}</p>
              <ul className="space-y-1.5 mb-4">
                {e.points.map((p) => (
                  <li key={p} className="flex gap-2 text-sm text-slate-700">
                    <span className="text-blue-600">▸</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs italic text-slate-500 bg-white/70 border border-dashed border-slate-300 rounded-lg px-3 py-2">
                {e.note}
              </p>
            </article>
          ))}
        </div>
        <p className="text-center text-xs text-slate-400 mt-6">{t.footnote}</p>
      </div>
    </section>
  );
}
