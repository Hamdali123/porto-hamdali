"use client";
import { useContent } from "@/components/ContentProvider";

function isPlaceholder(v: string) {
  return /your|8xx|xxxx|\[Isi\]|\[Fill/i.test(v || "");
}

export default function Footer() {
  const { c } = useContent();
  const p = c.profile;
  const t = c.ui.footer;
  const nav = c.ui.nav;

  const year = new Date().getFullYear();
  const emailReady = p.email && !isPlaceholder(p.email);
  const waReady = p.whatsappDisplay && !isPlaceholder(p.whatsappDisplay);

  const items: [string, string][] = [
    ["tentang", nav.tentang],
    ["keahlian", nav.keahlian],
    ["pengalaman", nav.pengalaman],
    ["timeline", nav.timeline],
    ["proyek", nav.proyek],
    ["pendidikan", nav.pendidikan],
    ["kontak", nav.kontak],
  ];

  return (
    <footer className="bg-[#000a14] text-slate-400">
      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <p className="text-white font-bold text-lg mb-2">{p.name}</p>
          <p className="text-sm leading-relaxed">{p.headline}</p>
          <p className="text-xs mt-3">{p.description}</p>
        </div>
        <div>
          <p className="text-white font-bold mb-3">{t.navTitle}</p>
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {items.map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`} className="hover:text-white transition">{label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-white font-bold mb-3">{t.contactTitle}</p>
          <ul className="text-sm space-y-1.5">
            <li>
              GitHub:{" "}
              <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                {p.githubUsername}
              </a>
            </li>
            <li>Email: {emailReady ? p.email : c.ui.contact.pending}</li>
            <li>WhatsApp: {waReady ? p.whatsappDisplay : c.ui.contact.pending}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs">
          <p>© {year} {p.name}. {t.rights}</p>
          <p>{t.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
