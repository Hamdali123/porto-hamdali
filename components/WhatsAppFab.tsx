"use client";
import { useContent } from "@/components/ContentProvider";

function isPlaceholder(v: string) {
  return /your|8xx|xxxx|\[Isi\]|\[Fill/i.test(v || "");
}

export default function WhatsAppFab() {
  const { c, lang } = useContent();
  const p = c.profile;

  if (!p.whatsappLink || isPlaceholder(p.whatsappLink)) return null;

  const text =
    lang === "en"
      ? `Hi ${p.name}, I saw your portfolio and would like to discuss IT Support / Networking opportunities.`
      : `Halo ${p.name}, saya melihat portofolio Anda dan ingin berdiskusi soal peluang IT Support / Networking.`;

  const href = `${p.whatsappLink}?text=${encodeURIComponent(text)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hubungi via WhatsApp"
      className="fixed bottom-5 right-5 z-[70] flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5b] text-white font-semibold pl-3 pr-4 py-3 rounded-full shadow-xl shadow-black/20 transition hover:scale-105 print:hidden"
    >
      <svg viewBox="0 0 32 32" className="w-6 h-6 fill-current" aria-hidden>
        <path d="M16.01 3C9.38 3 4 8.38 4 15.01c0 2.12.55 4.11 1.52 5.84L4 29l8.34-1.48a12.9 12.9 0 0 0 3.67.53h.01C22.64 28.05 28 22.67 28 16.04 28 8.38 22.64 3 16.01 3Zm0 22.5h-.01c-1.12 0-2.22-.17-3.27-.51l-.23-.08-4.95.88.9-4.83-.15-.25a10.4 10.4 0 0 1-1.6-5.55c0-5.79 4.72-10.5 10.52-10.5 2.81 0 5.45 1.1 7.43 3.08a10.42 10.42 0 0 1 3.08 7.43c0 5.79-4.72 10.5-10.5 10.5Zm5.76-7.86c-.32-.16-1.87-.92-2.16-1.03-.29-.11-.5-.16-.71.16-.21.32-.82 1.03-1 1.24-.18.21-.37.24-.68.08-.32-.16-1.33-.49-2.53-1.56-.94-.83-1.57-1.86-1.75-2.18-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.18.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.71-.97-2.34-.26-.62-.52-.53-.71-.54l-.61-.01c-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.64 0 1.56 1.14 3.06 1.3 3.27.16.21 2.24 3.42 5.43 4.8.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.87-.76 2.13-1.5.26-.74.26-1.37.18-1.5-.08-.13-.29-.21-.61-.37Z" />
      </svg>
      <span className="hidden sm:inline text-sm">WhatsApp</span>
    </a>
  );
}
