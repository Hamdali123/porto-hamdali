# Portfolio — Muhamad Hamdali

Website portofolio profesional siap jalan. Fokus utama: **IT Support & Networking** (MikroTik, troubleshooting, instalasi),
diperkuat **Linux Server** dan **Web Automation (SmartOLT ZTE C600/C300)**.

Stack: Next.js 14 + TypeScript + Tailwind CSS 3. Mobile-first, SEO dasar, aksesibel.

## 1. Cara menjalankan

```powershell
npm install
npm run dev
```

Buka http://localhost:3000

## 2. Cara build / produksi

```powershell
npm run build
npm start
```

## 3. Yang WAJIB diganti sebelum melamar (jujur, tanpa data palsu)

Semua placeholder terpusat di 2 file:

**`lib/profile.ts`**
- `email`, `whatsappDisplay`, `whatsappLink`
- `linkedinUrl` (kosongkan jika belum ada)
- `photoPath` — isi `"/profile.jpg"` setelah upload foto ke `/public`
- `cvPath` — isi `"/CV-Muhamad-Hamdali.pdf"` setelah upload CV ke `/public`.
  Jika kosong, tombol Download CV otomatis disembunyikan (tidak ada tombol palsu).
- `experiences[].period` — isi periode aktual, contoh `"2024–2025"`. Jangan mengarang tanggal.

**`lib/projects.ts`**
- Ubah status tiap fitur menjadi: `Completed` / `In Progress` / `Experimental` / `Planned`
- Tambahkan screenshot asli ke `/public/projects/` lalu referensikan. Jangan pakai screenshot palsu.

Cari placeholder dengan kata kunci: `your`, `8xx`, `[Isi]`, `TODO`.

## 4. Struktur section (11 sesuai brief)

Beranda → Tentang → Keahlian → Pengalaman → Timeline 2025–2026 → SmartOLT C600/C300 (featured) →
Proyek Networking / Ubuntu / Web (modal detail) → Pendidikan → Kontak → Footer

## 5. Standar kejujuran yang diterapkan

- Pengalaman kerja vs lab pribadi dibedakan jelas.
- Tidak ada klaim senior engineer / mahir semua teknologi.
- Tidak ada persentase skill — hanya label Basic / Learning / Practical Experience / Project Experience.
- SmartOLT tidak diklaim selesai produksi & bukan klaim membuat hardware OLT.
- Tidak ada IP publik, password, token, atau info jaringan sensitif.
- Tidak ada tombol / tautan kosong — CV & LinkedIn kondisional.

## 6. Deploy gratis

- Vercel: import repo GitHub → Framework Next.js → Deploy.
- Atau VPS sendiri sesuai skill Linux di portfolio ini (`npm run build`, jalankan via systemd / PM2 + reverse proxy).
