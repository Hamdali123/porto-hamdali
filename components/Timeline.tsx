"use client";
import { useContent } from "@/components/ContentProvider";

function isPlaceholderPeriod(period: string) {
  return !period || /\[Isi|\[Fill/i.test(period);
}

function shortBadge(period: string) {
  if (isPlaceholderPeriod(period)) return "•";
  return period.slice(0, 4);
}

export default function Timeline() {
  const { c } = useContent();
  const t = c.ui.timeline;

  return (
    <section id="timeline" className="py-16 md:py-24 bg-[#000a14] text-white scroll-mt-16 relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #3b82f6 1px, transparent 0)", backgroundSize: "28px 28px" }} />
      <div className="relative max-w-4xl mx-auto px-4">
        <p className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-2">{t.eyebrow}</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-3">{t.heading}</h2>
        <p className="text-slate-400 mb-12">{t.subtext}</p>
        <div className="relative">
          <div aria-hidden className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-px bg-white/15" />
          <div className="space-y-8">
            {c.timeline.map((item, i) => (
              <div key={i} className={`relative flex flex-col md:flex-row gap-4 md:gap-0 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full bg-blue-600 border-4 border-[#000a14] flex items-center justify-center text-[10px] font-bold z-10">
                  {shortBadge(item.period)}
                </div>
                <div className="hidden md:block md:w-1/2" />
                <div className={`pl-14 md:pl-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-10" : "md:pl-10"}`}>
                  <div className="bg-white/[0.06] border border-white/10 rounded-2xl p-5 hover:bg-white/[0.09] transition">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[11px] font-semibold bg-blue-600/30 text-blue-200 px-2.5 py-1 rounded-full">{item.tag}</span>
                      {!isPlaceholderPeriod(item.period) && <span className="text-xs text-slate-500">{item.period}</span>}
                    </div>
                    <h3 className="font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-300 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
