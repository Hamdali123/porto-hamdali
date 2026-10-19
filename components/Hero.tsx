"use client";
import { useContent } from "@/components/ContentProvider";

export default function Hero() {
  const { c } = useContent();
  const p = c.profile;
  const t = c.ui.hero;

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="beranda" className="relative overflow-hidden bg-[#000a14] text-white pt-24 pb-16 md:pt-32 md:pb-24">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(59,130,246,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.4) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div aria-hidden className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-blue-600/20 blur-3xl" />
      <div aria-hidden className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="flex items-center gap-4 mb-6">
            {p.photoPath ? (
              <div className="relative shrink-0">
                <div aria-hidden className="absolute -inset-1.5 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 blur-[2px] opacity-80" />
                <img
                  src={p.photoPath}
                  alt={`Foto profil ${p.name}`}
                  className="relative w-20 h-20 md:w-24 md:h-24 rounded-full object-cover object-top ring-2 ring-white/40"
                  onError={(e) => {
                    const wrap = (e.target as HTMLImageElement).closest("div.relative") as HTMLElement | null;
                    if (wrap) wrap.style.display = "none";
                  }}
                />
              </div>
            ) : null}
            <p className="inline-flex items-center gap-2 text-xs font-medium tracking-wide uppercase bg-white/10 border border-white/15 rounded-full px-4 py-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              {t.badge}
            </p>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            {p.name.split(" ")[0]}
            <span className="block bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              {p.name.split(" ").slice(1).join(" ")}
            </span>
          </h1>
          <p className="text-base md:text-lg text-blue-200 font-medium mb-4">{p.headline}</p>
          <p className="text-slate-300 leading-relaxed mb-8 max-w-xl">{p.description}</p>

          <div className="flex flex-wrap gap-3 mb-8">
            <button
              onClick={() => go("proyek")}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-medium transition shadow-lg shadow-blue-900/50"
            >
              {t.viewProjects}
            </button>
            <a
              href="/cv"
              className="px-6 py-3 bg-white/10 border border-white/25 hover:bg-white hover:text-slate-900 rounded-lg font-medium transition"
            >
              {t.viewCv}
            </a>
            <button
              onClick={() => go("pengalaman")}
              className="px-6 py-3 border border-white/30 hover:bg-white hover:text-slate-900 rounded-lg font-medium transition"
            >
              {t.myExperience}
            </button>
            <button
              onClick={() => go("kontak")}
              className="px-6 py-3 border border-white/30 hover:bg-white hover:text-slate-900 rounded-lg font-medium transition"
            >
              {t.contactMe}
            </button>
          </div>

          {p.cvPath ? (
            <a
              href={p.cvPath}
              download
              className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white underline underline-offset-4"
            >
              ⬇ {t.downloadCv}
            </a>
          ) : (
            <a
              href="/cv"
              className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white underline underline-offset-4"
            >
              ⬇ {t.cvOnline}
            </a>
          )}

          <div className="grid grid-cols-3 gap-4 mt-10 max-w-md">
            {t.stats.map((s) => (
              <div key={s.l} className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                <div className="text-xl font-bold text-white">{s.n}</div>
                <div className="text-[11px] text-slate-400 leading-tight mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-[#0a1628] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-2 text-xs text-slate-400 font-mono">hamdali@ubuntu-server: ~</span>
            </div>
            <div className="p-5 font-mono text-[13px] leading-7">
              <p className="text-slate-500"># cek layanan CoreDNS lokal</p>
              <p><span className="text-green-400">$</span> <span className="text-slate-200">systemctl status coredns</span></p>
              <p className="text-emerald-300">● active (running) — sekolah.local ✓</p>
              <p className="text-slate-500"># uji konektivitas OLT</p>
              <p><span className="text-green-400">$</span> <span className="text-slate-200">ping -c 2 olt-lab.local</span></p>
              <p className="text-slate-300">64 bytes from olt-lab: time=1.2ms ✓</p>
              <p><span className="text-green-400">$</span> <span className="text-slate-200">python3 provision.py --olt c600</span> <span className="animate-pulse text-blue-400">▊</span></p>
            </div>
          </div>

          <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-5">
            <p className="text-xs uppercase tracking-wider text-slate-400 mb-3">{t.diagramLabel}</p>
            <div className="flex items-center justify-between text-center text-[11px]">
              {["Web App\n(Next.js)", "API\n(Express)", "DB\n(Postgres)", "OLT\nC600/C300"].map((n, i, a) => (
                <div key={n} className="flex items-center">
                  <div className="bg-blue-600/20 border border-blue-500/30 rounded-lg px-3 py-2 whitespace-pre-line text-blue-100">
                    {n}
                  </div>
                  {i < a.length - 1 && <span className="mx-1 text-blue-500">→</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
