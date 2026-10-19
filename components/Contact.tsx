"use client";
import { useContent } from "@/components/ContentProvider";

function isPlaceholder(v: string) {
  return /your|8xx|xxxx|\[Isi\]|\[Fill/i.test(v || "");
}

export default function Contact() {
  const { c } = useContent();
  const p = c.profile;
  const t = c.ui.contact;
  const f = t.form;

  const emailReady = p.email && !isPlaceholder(p.email);
  const waReady = p.whatsappDisplay && !isPlaceholder(p.whatsappDisplay) && !isPlaceholder(p.whatsappLink);
  const linkedinReady = p.linkedinUrl && !isPlaceholder(p.linkedinUrl) && !isPlaceholder(p.linkedinDisplay);

  const mailHref = emailReady
    ? `mailto:${p.email}?subject=Peluang%20IT%20Support%20untuk%20${encodeURIComponent(p.name)}`
    : p.githubUrl;

  return (
    <section id="kontak" className="py-16 md:py-24 bg-slate-50 scroll-mt-16">
      <div className="max-w-5xl mx-auto px-4">
        <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">{t.eyebrow}</p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">{t.heading}</h2>
        <p className="text-slate-600 mb-10">{t.subtext}</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border rounded-2xl p-6 md:p-8">
            <h3 className="font-bold text-lg mb-5">{t.identityTitle}</h3>
            <div className="space-y-4 text-sm">
              <Row label={t.labels.name} value={p.name} />
              <Row label={t.labels.github} value={p.githubUsername} href={p.githubUrl} />
              {emailReady ? (
                <Row label={t.labels.email} value={p.email} href={`mailto:${p.email}`} />
              ) : (
                <Row label={t.labels.email} value={t.pending} muted />
              )}
              {waReady ? (
                <Row label={t.labels.whatsapp} value={p.whatsappDisplay} href={p.whatsappLink} />
              ) : (
                <Row label={t.labels.whatsapp} value={t.pending} muted />
              )}
              {linkedinReady ? (
                <Row label={t.labels.linkedin} value={p.linkedinDisplay} href={p.linkedinUrl} />
              ) : (
                <Row label={t.labels.linkedin} value={t.linkedinPending} muted />
              )}
              <Row label={t.labels.location} value={p.location} />
            </div>
            <div className="mt-6 pt-6 border-t text-xs text-slate-500 leading-relaxed">{t.footerNote}</div>
          </div>

          <form className="bg-white border rounded-2xl p-6 md:p-8" onSubmit={(e) => e.preventDefault()}>
            <h3 className="font-bold text-lg mb-1">{f.title}</h3>
            <p className="text-xs text-slate-500 mb-5">{f.subtitle}</p>
            <label className="block mb-4">
              <span className="text-sm font-medium">{f.name}</span>
              <input required placeholder={f.namePh} className="mt-1 w-full border rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" />
            </label>
            <label className="block mb-4">
              <span className="text-sm font-medium">{f.email}</span>
              <input required type="email" placeholder={f.emailPh} className="mt-1 w-full border rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" />
            </label>
            <label className="block mb-4">
              <span className="text-sm font-medium">{f.purpose}</span>
              <select className="mt-1 w-full border rounded-lg px-4 py-2.5 bg-white">
                {f.options.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </label>
            <label className="block mb-5">
              <span className="text-sm font-medium">{f.message}</span>
              <textarea required rows={4} placeholder={f.messagePh} className="mt-1 w-full border rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" />
            </label>
            <a
              href={mailHref}
              target={emailReady ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="block text-center w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition"
            >
              {emailReady ? f.sendMail : f.sendGithub}
            </a>
          </form>
        </div>
      </div>
    </section>
  );
}

function Row({ label, value, href, muted }: { label: string; value: string; href?: string; muted?: boolean }) {
  return (
    <div className="flex items-start justify-between gap-3">
      <span className="text-slate-500 w-24 shrink-0">{label}</span>
      <span className="text-right">
        {href ? (
          <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="text-blue-700 hover:underline font-medium break-all">
            {value}
          </a>
        ) : (
          <span className={`font-medium break-all ${muted ? "text-slate-500 italic" : "text-slate-800"}`}>{value}</span>
        )}
      </span>
    </div>
  );
}
