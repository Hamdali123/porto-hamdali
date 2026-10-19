// ============================================================
// SINGLE SOURCE OF TRUTH - EDIT SEMUA PLACEHOLDER DI SINI
// Standar kejujuran: jangan isi tanggal/angka yang belum pasti.
// ============================================================

export const profile = {
  name: "Muhamad Hamdali",
  shortName: "MH",
  headline: "IT Support | Networking | Linux Server | Web Automation",
  description:
    "Mahasiswa Teknik Informatika dengan pengalaman praktik jaringan komputer, troubleshooting, administrasi Linux Server, serta pengembangan aplikasi web untuk mendukung pengelolaan infrastruktur jaringan.",
  githubUsername: "hamdali123",
  githubUrl: "https://github.com/hamdali123",

  // ---- DATA KONTAK ASLI ----
  email: "muhamadhamdali07@gmail.com",
  whatsappDisplay: "+62 838-1508-3640",
  whatsappLink: "https://wa.me/6283815083640",
  linkedinUrl: "", // kosong = disembunyikan otomatis, isi nanti jika sudah ada
  linkedinDisplay: "",
  location: "Indonesia",
  photoPath: "/profile.jpg", // aktif: simpan file foto ke /public/profile.jpg (format kotak/portrait, <500KB)
  cvPath: "", // menyusul: isi "/CV-Muhamad-Hamdali.pdf" setelah upload CV ke /public. Kosong = tombol download disembunyikan otomatis.

  focusRoles: [
    "IT Support / IT Support Engineer (Junior)",
    "Network Technician / Teknisi Jaringan",
    "NOC Engineer (Junior)",
    "Junior Network Engineer",
  ],
  secondaryRoles: "Terbuka juga untuk Junior System Administrator & Junior Web Developer (sistem internal & tools jaringan).",
};

export const experiences = [
  {
    company: "CV Sanwanay Network — Mitra ISP Grasinet",
    role: "FTTH & OLT Field Support (Praktik Lapangan)",
    period: "2024–2025 (± 1 tahun)",
    type: "professional" as const,
    summary:
      "Praktik lapangan fiber optik & integrasi MikroTik to OLT di lingkungan mitra ISP. Penarikan kabel FO 12 / 24 / 48 / 96 core, penyambungan (splicing) dari OTB – ODC – ODP, serta konfigurasi OLT (VLAN, uplink) dan layanan PPPoE Server & Hotspot MikroTik to OLT.",
    points: [
      "Membantu penarikan kabel FO 12 core, 24 core, 48 core, dan 96 core",
      "Membantu penyambungan / splicing FO pada titik OTB, ODC, dan ODP",
      "Membantu konfigurasi OLT: VLAN dan uplink",
      "Membantu konfigurasi PPPoE Server & Hotspot MikroTik to OLT",
      "Membantu troubleshooting konektivitas FTTH & layanan pelanggan",
    ],
    note: "Praktik lapangan bersama tim teknis mitra ISP, fokus pada eksekusi & troubleshooting.",
  },
  {
    company: "Instalasi CCTV — CV Sanwanay Network & CV Gemilang Berkah",
    role: "Instalasi CCTV & Jaringan (Praktik)",
    period: "",
    type: "professional" as const,
    summary:
      "Instalasi sistem CCTV di lingkungan perusahaan: pemasangan kamera, pengkabelan, dan setup perangkat perekam.",
    points: [
      "Instalasi 8 kamera CCTV — CV Sanwanay Network",
      "Instalasi 16 kamera CCTV — CV Gemilang Berkah",
      "Pemasangan kamera & pengkabelan (video / power)",
      "Setup perangkat perekam & pengujian tampilan",
      "Troubleshooting koneksi & kualitas gambar",
    ],
    note: "Praktik instalasi CCTV & jaringan di lingkungan perusahaan.",
  },
  {
    company: "Instalasi Lab Komputer — SMK Ilhami Kemiri & SMPN Sukmulya",
    role: "Instalasi & Konfigurasi Lab Komputer (Praktik)",
    period: "",
    type: "professional" as const,
    summary:
      "Instalasi dan penataan laboratorium komputer sekolah, termasuk pengkabelan jaringan dan pengujian konektivitas.",
    points: [
      "Instalasi & penataan unit PC di lab komputer sekolah",
      "Pengkabelan jaringan LAN (UTP / RJ45) dan penataan rapi",
      "Konfigurasi & pengujian konektivitas jaringan",
      "Troubleshooting perangkat dan jaringan lab",
    ],
    note: "Praktik instalasi jaringan & lab di lingkungan sekolah.",
  },
  {
    company: "IDN Solo — Training Center",
    role: "Training Networking & Cloud (Peserta)",
    period: "",
    type: "professional" as const,
    summary:
      "Mengikuti training di IDN Solo: MikroTik (Queue management), Cisco Routing, instalasi AWS, dan monitoring Zabbix.",
    points: [
      "Materi MikroTik — termasuk Queue management",
      "Materi Cisco Routing — konsep & praktik routing",
      "Praktik instalasi / pengenalan AWS",
      "Praktik monitoring jaringan dengan Zabbix",
    ],
    note: "Peserta training praktik jaringan & cloud.",
  },
  {
    company: "PT Aretanet Indonesia",
    role: "Network Training & Support (Praktik)",
    period: "2024–2025",
    type: "professional" as const,
    summary:
      "Terlibat dalam kegiatan pelatihan jaringan ke sekolah dan network support. Terkait materi/paket MikroTik 2 dan paket 4.",
    points: [
      "Membantu pelaksanaan pelatihan jaringan komputer ke sekolah",
      "Mendukung kegiatan terkait materi MikroTik paket 2 dan paket 4",
      "Membantu praktik konfigurasi perangkat jaringan dasar",
      "Membantu troubleshooting konektivitas jaringan",
    ],
    note: "Praktik pelatihan jaringan & dukungan teknis.",
  },
  {
    company: "Ilhami Net",
    role: "Instalasi & Konfigurasi Jaringan (Praktik)",
    period: "",
    type: "professional" as const,
    summary:
      "Pengalaman konfigurasi MikroTik dan pekerjaan instalasi jaringan, termasuk penarikan serta pemasangan kabel fiber optik (FO).",
    points: [
      "Konfigurasi dasar MikroTik untuk jaringan ISP / RT-RW Net",
      "Instalasi jaringan termasuk penarikan kabel",
      "Pemasangan kabel fiber optik (FO)",
      "Setup perangkat jaringan dan troubleshooting konektivitas",
    ],
    note: "Praktik instalasi & konfigurasi jaringan.",
  },
  {
    company: "PT Sogo Indonesia",
    role: "Staf Gudang",
    period: "",
    type: "operational" as const,
    summary:
      "Pengalaman operasional gudang — menunjukkan kedisiplinan, tanggung jawab, dan pemahaman alur operasional.",
    points: [
      "Pengelolaan dan pencatatan inventaris gudang",
      "Penerimaan dan pengecekan barang",
      "Koordinasi dengan tim operasional",
      "Menjaga kerapian dan ketertiban area kerja",
    ],
    note: "Pengalaman non-IT yang membentuk kedisiplinan & tanggung jawab.",
  },
];

export type SkillLevel = "Basic" | "Learning" | "Practical Experience" | "Project Experience";

export const skillGroups: { title: string; level: SkillLevel; desc: string; skills: string[] }[] = [
  {
    title: "Networking",
    level: "Practical Experience",
    desc: "Dipraktikkan langsung: FTTH lapangan, MikroTik to OLT, instalasi LAN/FO, dan lab.",
    skills: [
      "MikroTik RouterOS",
      "Winbox",
      "MikroTik Queue",
      "Cisco Routing (training)",
      "PPPoE Server",
      "Hotspot (MikroTik to OLT)",
      "OLT Config (VLAN & Uplink)",
      "FTTH: OTB / ODC / ODP",
      "Penarikan FO 12/24/48/96 core",
      "Splicing / Penyambungan FO",
      "TCP/IP",
      "Subnetting",
      "DHCP",
      "VLAN",
      "NAT",
      "Firewall",
      "PPPoE",
      "Routing dasar",
      "OSPF / RIP / BGP (dasar & lab)",
      "LAN",
      "UTP / RJ45",
      "Fiber Optik",
      "Switch",
      "Access Point",
      "Troubleshooting",
    ],
  },
  {
    title: "Tools Networking",
    level: "Learning",
    desc: "Digunakan untuk analisis, simulasi lab, dan monitoring (IDN Solo).",
    skills: ["Wireshark", "Cisco Packet Tracer", "PNETLab", "EVE-NG", "ping", "traceroute", "Zabbix (monitoring)"],
  },
  {
    title: "IT Support & System Administration",
    level: "Practical Experience",
    desc: "Server Linux pribadi + training AWS & Zabbix (IDN Solo).",
    skills: [
      "Troubleshooting PC & konektivitas",
      "Ubuntu Server",
      "Ubuntu Desktop",
      "Linux CLI",
      "SSH",
      "DNS",
      "CoreDNS",
      "Docker (pengenalan)",
      "AWS (instalasi / pengenalan — training)",
      "Zabbix (monitoring — training)",
      "systemd service",
      "Manajemen port & layanan",
      "Dasar keamanan layanan",
    ],
  },
  {
    title: "Web Development & Automation",
    level: "Project Experience",
    desc: "Dipakai dalam proyek SmartOLT & tools internal.",
    skills: [
      "Next.js",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "Python",
      "Netmiko (eksperimen)",
      "WebSocket",
      "Git",
      "GitHub",
    ],
  },
];

export const timeline = [
  {
    period: "2024–2025",
    title: "FTTH Field Practice — CV Sanwanay Network (Mitra Grasinet)",
    tag: "FTTH Lapangan",
    desc: "Penarikan FO 12/24/48/96 core, splicing OTB–ODC–ODP, konfigurasi OLT (VLAN, uplink), serta PPPoE Server & Hotspot MikroTik to OLT. Troubleshooting konektivitas FTTH di lapangan.",
    honest: "Pengalaman praktik lapangan — periode & detail diisi sesuai aktual, tanpa angka pelanggan.",
  },
  {
    period: "2025",
    title: "Networking & MikroTik — Praktik Dasar",
    tag: "Networking",
    desc: "Konfigurasi MikroTik via Winbox & RouterOS. IP addressing, subnetting, DHCP, routing, NAT, firewall, DNS, troubleshooting. VLAN untuk segmentasi, PPPoE & konsep manajemen pelanggan. Eksperimen OSPF/RIP/BGP di lingkungan belajar. Analisis ping, traceroute, Wireshark. Perencanaan jaringan sekolah & ISP/RT-RW Net.",
    honest: "Lab & praktik — belum semua diterapkan di produksi.",
  },
  {
    period: "[Isi tahun]",
    title: "Training IDN Solo — MikroTik, Cisco, AWS, Zabbix",
    tag: "Training",
    desc: "Training di IDN Solo: MikroTik (Queue), Cisco Routing, instalasi/pengenalan AWS, dan monitoring jaringan dengan Zabbix.",
    honest: "Training — isi periode & sertifikat jika ada. Tanpa klaim nilai kelulusan.",
  },
  {
    period: "2025",
    title: "Cisco Networking Lab — Simulasi",
    tag: "Lab",
    desc: "Cisco Packet Tracer: VLAN, router-on-a-stick, DHCP, routing. Latihan OSPF area 0/1, redistribusi OSPF-BGP. PNETLab & EVE-NG untuk topologi virtual. Analisis koneksi antar-router & troubleshooting.",
    honest: "Semua berlabel simulasi / lab, bukan produksi.",
  },
  {
    period: "2025",
    title: "Ubuntu Server & Linux Administration",
    tag: "Linux Server",
    desc: "Membangun & mengelola server Linux sendiri: Ubuntu Server/Desktop, administrasi CLI, service & proses, install & troubleshooting aplikasi, Docker, CoreDNS untuk DNS lokal (sekolah.local, kasir.local), konfigurasi interface/IP/DNS/port/systemd, troubleshooting konflik systemd-resolved, SSH remote, Git/GitHub.",
    honest: "Server pribadi / lab. Tanpa IP publik & kredensial sensitif.",
  },
  {
    period: "2025–2026",
    title: "SmartOLT Web Project — ZTE C600 / C300",
    tag: "Proyek Utama",
    desc: "Aplikasi web pengelolaan OLT & otomasi operasional: repo web-c600, eksplorasi ZTE C600 + penyesuaian C300. Next.js frontend, Node+Express API, Prisma+PostgreSQL, Python+Netmiko untuk otomasi CLI, discovery perangkat, provisioning, profil layanan, terminal web WebSocket, eksplorasi Telnet/SSH.",
    honest: "Status per-fitur dapat diedit (Completed / In Progress / Experimental / Planned). Bukan pembuat hardware OLT.",
  },
  {
    period: "2026",
    title: "Infrastruktur Web & Tools Operasional",
    tag: "Infra & Web",
    desc: "Deployment web di server sendiri, manajemen service frontend/backend, domain & subdomain, eksplorasi HTTPS & pengamanan panel, DNS, port forwarding, firewall, akses remote. Eksplorasi aplikasi absensi & inventaris/gudang: kebutuhan operasional, alur pengguna, pengelolaan data.",
    honest: "Prototipe dipisah dari fitur berjalan & rencana.",
  },
];

export const education = [
  {
    level: "S1",
    school: "Areta Informatics College",
    major: "Teknik Informatika",
    period: "2024 — sekarang",
    desc: "Fokus pada software, sistem informasi, jaringan komputer, dan manajemen proyek teknologi.",
  },
  {
    level: "SMK",
    school: "SMK Ilhami Kemiri",
    major: "Teknik Komputer dan Jaringan (TKJ)",
    period: "Lulus 2024",
    desc: "Dasar konfigurasi jaringan, administrasi sistem, perbaikan hardware, dan infrastruktur IT.",
  },
];
