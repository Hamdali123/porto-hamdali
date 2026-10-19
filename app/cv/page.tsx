import type { Metadata } from "next";
import { profile, experiences, skillGroups, education } from "@/lib/profile";
import PrintButton from "@/components/PrintButton";

export const metadata: Metadata = {
  title: "CV — Muhamad Hamdali | IT Support & Networking",
  description: "CV ringkas Muhamad Hamdali — IT Support, Networking, Linux Server, SmartOLT ZTE C600/C300.",
  robots: { index: false, follow: false },
};

function period(period: string) {
  return /\[Isi/i.test(period) ? "" : period;
}

export default function CvPage() {
  return (
    <main className="bg-slate-100 min-h-screen py-8 print:bg-white print:py-0">
      <div className="max-w-[820px] mx-auto bg-white shadow-xl print:shadow-none rounded-xl print:rounded-none p-8 md:p-12 print:p-0">
        <div className="flex items-start justify-between gap-6 mb-6 print:mb-4">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900">{profile.name}</h1>
            <p className="text-blue-700 font-semibold">{profile.headline}</p>
            <p className="text-sm text-slate-600 mt-2 max-w-md">{profile.description}</p>
          </div>
          <div className="text-right text-sm text-slate-700 shrink-0 space-y-1">
            <p>{profile.email}</p>
            <p>{profile.whatsappDisplay}</p>
            <p>github.com/{profile.githubUsername}</p>
            <p>{profile.location}</p>
          </div>
        </div>

        <div className="mb-4 print:hidden">
          <PrintButton />
          <span className="ml-3 text-xs text-slate-500">Pilih “Save as PDF” di dialog print.</span>
        </div>

        <Section title="Target Posisi">
          <p className="text-sm text-slate-700">
            {profile.focusRoles.join(" • ")}. {profile.secondaryRoles}
          </p>
        </Section>

        <Section title="Pengalaman & Praktik">
          <div className="space-y-4">
            {experiences.map((e) => (
              <div key={e.company}>
                <div className="flex justify-between gap-3">
                  <p className="font-bold text-slate-900 text-sm">{e.role}</p>
                  <p className="text-xs text-slate-500 whitespace-nowrap">{period(e.period)}</p>
                </div>
                <p className="text-sm text-blue-700 font-medium">{e.company}</p>
                <ul className="mt-1 space-y-0.5">
                  {e.points.map((p) => (
                    <li key={p} className="text-[13px] text-slate-700 flex gap-2">
                      <span>•</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Keahlian">
          <div className="space-y-2">
            {skillGroups.map((g) => (
              <p key={g.title} className="text-[13px] text-slate-700">
                <strong className="text-slate-900">{g.title}:</strong> {g.skills.join(", ")}
              </p>
            ))}
          </div>
        </Section>

        <Section title="Pendidikan">
          <div className="space-y-2">
            {education.map((e) => (
              <div key={e.school} className="flex justify-between gap-3">
                <p className="text-[13px] text-slate-700">
                  <strong className="text-slate-900">{e.level} {e.school}</strong> — {e.major}
                </p>
                <p className="text-xs text-slate-500 whitespace-nowrap">{e.period}</p>
              </div>
            ))}
          </div>
        </Section>

        <p className="text-[11px] text-slate-400 mt-8 print:mt-6 border-t pt-3">
          CV ini dihasilkan otomatis dari {profile.name} — portofolio online. Detail proyek: lihat halaman portofolio.
        </p>
      </div>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-6 print:mt-4">
      <h2 className="text-xs font-bold uppercase tracking-widest text-blue-700 border-b border-slate-200 pb-1 mb-3">
        {title}
      </h2>
      {children}
    </section>
  );
}
