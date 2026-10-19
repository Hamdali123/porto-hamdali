import { profile, experiences, skillGroups, timeline, education } from "./profile";
import { projects, type ProjectDetail } from "./projects";
import {
  profileEn,
  experiencesEn,
  skillGroupsEn,
  timelineEn,
  educationEn,
  projectsEn,
  uiEn,
  type Ui,
} from "./content.en";

export type Lang = "id" | "en";

export const uiId: Ui = {
  nav: {
    beranda: "Beranda",
    tentang: "Tentang",
    keahlian: "Keahlian",
    pengalaman: "Pengalaman",
    timeline: "Timeline",
    smartolt: "SmartOLT",
    proyek: "Proyek",
    pendidikan: "Pendidikan",
    kontak: "Kontak",
  },
  hero: {
    badge: "Terbuka untuk IT Support • NOC Junior • Network Technician",
    viewProjects: "Lihat Proyek",
    viewCv: "Lihat CV",
    myExperience: "Pengalaman Saya",
    contactMe: "Hubungi Saya",
    cvOnline: "CV online — bisa disimpan jadi PDF",
    downloadCv: "Download CV (PDF)",
    stats: [
      { n: "7", l: "Pengalaman & training" },
      { n: "FTTH", l: "FO 12–96 core & OLT" },
      { n: "IDN Solo", l: "AWS & Zabbix" },
    ],
    diagramLabel: "Ilustrasi alur — Web → API → OLT",
  },
  about: {
    eyebrow: "Tentang Saya",
    heading: "Fokus IT Support & Networking, diperkuat Linux & Web Automation",
    targetTitle: "Target Posisi",
    p1: "Saya adalah mahasiswa Teknik Informatika yang memiliki pengalaman praktik di bidang jaringan komputer, IT Support, administrasi Linux Server, infrastruktur jaringan, troubleshooting, serta pengembangan aplikasi web untuk membantu operasional jaringan.",
    p2: "Perjalanan saya sejak 2025 terekam jujur: mulai dari praktik instalasi & MikroTik, simulasi Cisco, mengelola Ubuntu Server sendiri, hingga membangun aplikasi web SmartOLT untuk pengelolaan perangkat ZTE C600/C300. Semua status fitur dapat diverifikasi — tanpa klaim senior / produksi yang belum terjadi.",
  },
  skills: {
    eyebrow: "Keahlian",
    heading: "4 Kelompok Keahlian — Jujur & Terukur",
    subtext:
      "Tanpa persentase palsu. Setiap kelompok memakai label Basic / Learning / Practical Experience / Project Experience sesuai pengalaman nyata di lapangan, training, dan lab.",
  },
  experience: {
    eyebrow: "Pengalaman Kerja",
    heading: "Praktik Nyata, Bahasa Jujur",
    subtext:
      "Dibedakan antara pengalaman kerja/praktik lapangan dan lab pribadi.",
    footnote: "Detail & periode lengkap tersedia dalam CV dan saat proses rekrutmen.",
  },
  timeline: {
    eyebrow: "Timeline 2025–2026",
    heading: "Dari Praktik Networking → Server → SmartOLT",
    subtext: "Label periode bisa diganti tahun / triwulan. Semua item jujur: lab vs produksi dibedakan.",
  },
  smartolt: {
    featured: "⭐ Proyek Utama",
    statusNote: "Status transparan per fitur",
    h1: "1. Permasalahan",
    h2: "2. Solusi & Arsitektur",
    h3: "3. Kontribusi Saya",
    h4: "4. Fitur & Status Verifikasi",
    h5: "5. Hasil Terverifikasi",
    h6: "6. Tantangan & Troubleshooting",
    noteTitle: "7–8. Screenshot & Status:",
    focusNote:
      "Fokus pada software & integrasi — bukan klaim membuat hardware OLT. Jangan tampilkan IP/kredensial sensitif.",
  },
  projects: {
    eyebrow: "Proyek Lainnya",
    heading: "Networking • Ubuntu Server • Web",
    subtext: "Klik “Lihat Detail” untuk deskripsi, tujuan, teknologi, kontribusi, tantangan, & status.",
    viewDetail: "Lihat Detail →",
    ctaTitle: "Dokumentasi & akses repo",
    ctaText:
      "Diagram topologi, screenshot, dan repositori dipublikasikan bertahap di GitHub. Hubungi saya untuk akses repo dan demo langsung.",
    dialog: {
      goal: "Tujuan",
      problem: "Masalah yang diselesaikan",
      architecture: "Arsitektur",
      contributions: "Kontribusi Saya",
      features: "Fitur & Status",
      verified: "Hasil Terverifikasi",
      challenges: "Tantangan & Troubleshooting",
      close: "Tutup",
      repo: "Lihat Repository",
      demo: "Demo Langsung",
      requestAccess: "Minta akses repo via WhatsApp",
    },
  },
  education: {
    eyebrow: "Pendidikan",
    heading: "Latar Belakang Formal",
  },
  contact: {
    eyebrow: "Kontak",
    heading: "Mari Terhubung",
    subtext:
      "Terbuka untuk magang, kerja junior, kolaborasi lab, atau diskusi teknis jaringan / Linux / SmartOLT.",
    identityTitle: "Identitas & Kanal",
    labels: { name: "Nama", github: "GitHub", email: "Email", whatsapp: "WhatsApp", linkedin: "LinkedIn", location: "Lokasi" },
    pending: "Tersedia saat proses rekrutmen",
    linkedinPending: "Menyusul — hubungi via GitHub",
    footerNote:
      "Respons tercepat via GitHub atau WhatsApp. Untuk proses rekrutmen, saya lampirkan CV, kontak aktif, dan dokumen pendukung.",
    form: {
      title: "Formulir Cepat",
      subtitle: "Isi form ini, lalu kirim — pesan akan dibuka di aplikasi email Anda.",
      name: "Nama",
      namePh: "Nama Anda",
      email: "Email",
      emailPh: "email@perusahaan.com",
      purpose: "Keperluan",
      options: ["Rekrutmen IT Support / NOC / Network", "Magang / Praktik", "Kolaborasi SmartOLT / Lab", "Lainnya"],
      message: "Pesan",
      messagePh: "Halo Hamdali, kami tertarik dengan profil Anda...",
      sendMail: "Kirim via Email",
      sendGithub: "Hubungi via GitHub",
    },
  },
  footer: {
    navTitle: "Navigasi",
    contactTitle: "Kontak",
    rights: "Jujur, terstruktur, dan mudah diperbarui.",
    tagline: "Journey 2025–2026 • Networking • Linux • SmartOLT",
  },
};

export type Content = {
  ui: Ui;
  profile: typeof profile;
  experiences: typeof experiences;
  skillGroups: typeof skillGroups;
  timeline: typeof timeline;
  education: typeof education;
  projects: ProjectDetail[];
};

export const content: Record<Lang, Content> = {
  id: {
    ui: uiId,
    profile,
    experiences,
    skillGroups,
    timeline,
    education,
    projects,
  },
  en: {
    ui: uiEn,
    profile: profileEn,
    experiences: experiencesEn,
    skillGroups: skillGroupsEn,
    timeline: timelineEn,
    education: educationEn,
    projects: projectsEn,
  },
};
