"use client";
import { useState } from "react";
import { useContent } from "@/components/ContentProvider";
import type { ProjectDetail } from "@/lib/projects";

const statusStyle: Record<string, string> = {
  Completed: "bg-emerald-500 text-white",
  "In Progress": "bg-amber-500 text-white",
  Experimental: "bg-blue-500 text-white",
  Planned: "bg-slate-400 text-white",
  "Practical Experience": "bg-blue-600 text-white",
  Prototype: "bg-slate-600 text-white",
};

export default function Projects() {
  const { c } = useContent();
  const [active, setActive] = useState<ProjectDetail | null>(null);
  const t = c.ui.projects;
  const d = t.dialog;
  const wa = c.profile.whatsappLink;

  return (
    <section id="proyek" className="py-16 md:py-24 bg-slate-50 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">{t.eyebrow}</p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">{t.heading}</h2>
        <p className="text-slate-600 mb-10">{t.subtext}</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {c.projects.map((p) => (
            <article key={p.id} className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition flex flex-col">
              <div className="p-6 flex-1">
                <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-2">{p.category}</p>
                <h3 className="font-bold text-lg text-slate-900 mb-1">{p.title}</h3>
                <p className="text-sm text-blue-700 mb-3">{p.subtitle}</p>
                <p className="text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">{p.problem}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.tech.slice(0, 5).map((tech) => (
                    <span key={tech} className="text-[11px] bg-slate-100 text-slate-600 px-2 py-1 rounded-md">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="px-6 pb-6 flex items-center justify-between">
                <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${statusStyle[p.status] || "bg-slate-500 text-white"}`}>
                  {p.status}
                </span>
                <button
                  onClick={() => setActive(p)}
                  className="text-sm font-semibold text-blue-600 hover:text-blue-800"
                >
                  {t.viewDetail}
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 bg-white border border-slate-200 rounded-2xl p-5 text-sm text-slate-600">
          <p className="font-semibold text-slate-800 mb-1">{t.ctaTitle}</p>
          {t.ctaText}
        </div>
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          className="fixed inset-0 z-[60] flex items-end md:items-center justify-center bg-black/60 p-0 md:p-6"
          onClick={() => setActive(null)}
        >
          <div
            className="bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-t-3xl md:rounded-3xl p-6 md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wider">{active.category}</p>
                <h3 className="text-xl font-bold text-slate-900">{active.title}</h3>
                <p className="text-sm text-blue-700">{active.subtitle}</p>
              </div>
              <button
                onClick={() => setActive(null)}
                aria-label={d.close}
                className="w-9 h-9 shrink-0 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center"
              >
                ✕
              </button>
            </div>

            <DetailBlock title={d.goal} text={active.solution} />
            <DetailBlock title={d.problem} text={active.problem} />
            <div className="mb-5">
              <h4 className="font-bold text-sm mb-2">{d.architecture}</h4>
              <ul className="space-y-1">
                {active.architecture.map((a) => (
                  <li key={a} className="text-sm font-mono bg-slate-50 border rounded-lg px-3 py-2">{a}</li>
                ))}
              </ul>
            </div>
            <div className="mb-5">
              <h4 className="font-bold text-sm mb-2">{d.contributions}</h4>
              <ul className="space-y-1">
                {active.contributions.map((ctn) => (
                  <li key={ctn} className="text-sm text-slate-700">✓ {ctn}</li>
                ))}
              </ul>
            </div>
            <div className="mb-5">
              <h4 className="font-bold text-sm mb-2">{d.features}</h4>
              <div className="space-y-1.5">
                {active.features.map((f) => (
                  <div key={f.name} className="flex items-center justify-between bg-slate-50 border rounded-lg px-3 py-2">
                    <span className="text-sm">{f.name}</span>
                    <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${statusStyle[f.status]}`}>{f.status}</span>
                  </div>
                ))}
              </div>
            </div>
            <DetailList title={d.verified} items={active.verified} />
            <DetailList title={d.challenges} items={active.challenges} />
            <div className="flex flex-wrap gap-1.5 mt-4">
              {active.tech.map((tech) => (
                <span key={tech} className="text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full">{tech}</span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mt-6">
              {active.repoUrl && (
                <a href={active.repoUrl} target="_blank" rel="noopener noreferrer" className="px-5 py-3 bg-slate-900 text-white rounded-xl font-medium hover:bg-slate-700 transition">
                  {d.repo}
                </a>
              )}
              {active.demoUrl && (
                <a href={active.demoUrl} target="_blank" rel="noopener noreferrer" className="px-5 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition">
                  {d.demo}
                </a>
              )}
              {!active.repoUrl && wa && (
                <a href={`${wa}?text=${encodeURIComponent(`${active.title} — ${d.requestAccess}`)}`} target="_blank" rel="noopener noreferrer" className="px-5 py-3 bg-[#25D366] text-white rounded-xl font-medium hover:bg-[#1ebe5b] transition">
                  {d.requestAccess}
                </a>
              )}
              <button
                onClick={() => setActive(null)}
                className="px-5 py-3 bg-slate-100 text-slate-700 rounded-xl font-medium hover:bg-slate-200 transition"
              >
                {d.close}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function DetailBlock({ title, text }: { title: string; text: string }) {
  return (
    <div className="mb-5">
      <h4 className="font-bold text-sm mb-1">{title}</h4>
      <p className="text-sm text-slate-600 leading-relaxed">{text}</p>
    </div>
  );
}

function DetailList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="mb-5">
      <h4 className="font-bold text-sm mb-2">{title}</h4>
      <ul className="space-y-1">
        {items.map((x) => (
          <li key={x} className="text-sm text-slate-600">• {x}</li>
        ))}
      </ul>
    </div>
  );
}
