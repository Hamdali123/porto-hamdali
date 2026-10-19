export type FeatureStatus = "Completed" | "In Progress" | "Experimental" | "Planned";

export type ProjectDetail = {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  status: string;
  statusColor: string;
  problem: string;
  solution: string;
  architecture: string[];
  tech: string[];
  contributions: string[];
  verified: string[];
  challenges: string[];
  features: { name: string; status: FeatureStatus }[];
  imageNote: string;
  repoUrl?: string;
  demoUrl?: string;
};

export const projects: ProjectDetail[] = [
  {
    id: "smartolt",
    category: "Proyek Utama — Network Automation",
    title: "SmartOLT Web — ZTE C600 & C300",
    subtitle: "Pengelolaan OLT terstruktur + otomasi operasional jaringan",
    status: "In Progress",
    statusColor: "bg-amber-500",
    problem:
      "Pengelolaan OLT yang manual (konfigurasi CLI satu-per-satu, discovery perangkat belum terstruktur, profil layanan tidak terdokumentasi) memperlambat operasional dan rawan human error.",
    solution:
      "Aplikasi web terpusat: frontend Next.js + backend Express + database PostgreSQL/Prisma untuk data perangkat & profil, Python/Netmiko untuk eksperimen otomasi CLI, dan terminal web WebSocket untuk akses Telnet/SSH terkontrol.",
    architecture: [
      "Frontend: Next.js (dashboard OLT, manajemen perangkat, terminal web)",
      "Backend: Node.js + Express REST API",
      "Database: PostgreSQL + Prisma ORM",
      "Otomasi: Python + Netmiko (eksperimen CLI ZTE)",
      "Realtime: WebSocket untuk terminal web",
      "Target perangkat: ZTE C600 (eksplorasi utama) + penyesuaian C300",
    ],
    tech: ["Next.js", "Node.js", "Express", "Prisma", "PostgreSQL", "Python", "Netmiko", "WebSocket", "Telnet/SSH", "GitHub"],
    contributions: [
      "Membangun struktur repo web-c600 & pengembangan lanjutan SmartOLT",
      "Eksperimen discovery perangkat yang belum dikonfigurasi",
      "Eksperimen provisioning & pengelolaan profil layanan",
      "Membangun backend API + integrasi frontend-backend",
      "Troubleshooting komunikasi perangkat, port layanan, & konektivitas",
      "Pengembangan terminal web via WebSocket",
    ],
    verified: [
      "Struktur aplikasi web (frontend + backend + DB) berjalan di lingkungan lab",
      "Koneksi dasar ke perangkat via CLI dieksperimen (belum diklaim stabil produksi)",
      "Terminal web menampilkan sesi interaktif (status eksperimen, dapat diedit)",
    ],
    challenges: [
      "Komunikasi perangkat OLT tidak selalu konsisten — butuh retry & logging",
      "Sinkronisasi state CLI vs database web",
      "Konflik port layanan backend & troubleshooting konektivitas",
      "Perbedaan perilaku C600 vs C300 — butuh abstraksi perintah",
    ],
    features: [
      { name: "Device discovery", status: "Experimental" },
      { name: "Manajemen perangkat (CRUD)", status: "In Progress" },
      { name: "Profil layanan", status: "Experimental" },
      { name: "Provisioning otomatis", status: "Experimental" },
      { name: "Terminal web (WebSocket)", status: "In Progress" },
      { name: "Integrasi Telnet/SSH", status: "Experimental" },
      { name: "Dukungan ZTE C300", status: "In Progress" },
    ],
    imageNote: "Screenshot asli / diagram arsitektur dapat dipasang di /public — tanpa screenshot palsu.",
  },
  {
    id: "networking",
    category: "Proyek Networking",
    title: "FTTH Lapangan & Lab MikroTik / Cisco",
    subtitle: "FO 12–96 core, OTB–ODC–ODP, OLT VLAN/uplink, PPPoE & Hotspot Mikrotik to OLT",
    status: "Practical Experience",
    statusColor: "bg-blue-600",
    problem:
      "Butuh pemahaman operasional jaringan end-to-end: fisik FO di lapangan, segmentasi VLAN, uplink OLT, manajemen pelanggan PPPoE/Hotspot, dan troubleshooting yang sistematis.",
    solution:
      "Lapangan (CV Sanwanay Network – mitra Grasinet): penarikan FO 12/24/48/96 core, splicing OTB–ODC–ODP, konfigurasi OLT VLAN & uplink, PPPoE Server & Hotspot MikroTik to OLT. Lab: MikroTik (DHCP/NAT/firewall/VLAN) + Cisco Packet Tracer / PNETLab / EVE-NG (VLAN, router-on-a-stick, OSPF area 0/1, redistribusi OSPF-BGP).",
    architecture: [
      "Lapangan: FO 12/24/48/96 core, OTB – ODC – ODP, OLT + MikroTik to OLT",
      "MikroTik: RouterOS + Winbox (PPPoE Server, Hotspot, VLAN, uplink)",
      "Cisco: Packet Tracer topologies (lab)",
      "Virtual lab: PNETLab / EVE-NG (lab)",
      "Analisis: ping, traceroute, Wireshark",
    ],
    tech: ["MikroTik", "Winbox", "RouterOS", "OLT", "FTTH", "OTB/ODC/ODP", "PPPoE", "Hotspot", "VLAN", "Cisco Packet Tracer", "PNETLab", "EVE-NG", "Wireshark"],
    contributions: [
      "Membantu penarikan FO 12/24/48/96 core (lapangan)",
      "Membantu splicing OTB, ODC, ODP (lapangan)",
      "Membantu konfigurasi OLT VLAN & uplink (lapangan)",
      "Membantu PPPoE Server & Hotspot MikroTik to OLT (lapangan)",
      "Konfigurasi IP, DHCP, NAT, firewall, DNS (lab & praktik)",
      "Simulasi VLAN & router-on-a-stick (lab)",
      "Latihan OSPF/RIP/BGP dasar (lab)",
    ],
    verified: [
      "Praktik lapangan FTTH & MikroTik-to-OLT terdokumentasi (tanpa klaim jumlah pelanggan)",
      "Topologi lab berjalan & terdokumentasi",
      "Konektivitas antar-segmen terverifikasi di lab",
    ],
    challenges: [
      "Menarik & merapikan kabel multi-core tanpa merusak bending radius",
      "Redaman / hasil splicing tidak stabil — cek ulang OTB–ODC–ODP",
      "VLAN / uplink OLT tidak konek — cek tagging & port uplink",
      "PPPoE / Hotspot tidak dial — cek secret, profile, dan jalur ke OLT",
      "Membedakan perilaku lab vs produksi",
    ],
    features: [
      { name: "Penarikan FO 12–96 core (lapangan)", status: "Completed" },
      { name: "Splicing OTB–ODC–ODP (lapangan)", status: "Completed" },
      { name: "OLT VLAN & uplink (lapangan)", status: "In Progress" },
      { name: "PPPoE Server Mikrotik to OLT", status: "In Progress" },
      { name: "Hotspot Mikrotik to OLT", status: "Experimental" },
      { name: "VLAN & inter-VLAN routing (lab)", status: "Completed" },
      { name: "OSPF area 0/1 (lab)", status: "Experimental" },
    ],
    imageNote: "Foto lapangan asli / diagram FTTH dapat dipasang — tanpa data pelanggan sensitif.",
  },
  {
    id: "ubuntu",
    category: "Proyek Ubuntu Server",
    title: "Linux Server Pribadi & CoreDNS",
    subtitle: "Administrasi Ubuntu, Docker, DNS lokal, SSH",
    status: "Practical Experience",
    statusColor: "bg-emerald-600",
    problem:
      "Butuh server sendiri untuk hosting aplikasi web, DNS lokal, dan latihan administrasi sistem tanpa bergantung pada layanan berbayar.",
    solution:
      "Membangun Ubuntu Server/Desktop: manajemen CLI, systemd services, Docker, CoreDNS untuk sekolah.local & kasir.local, SSH remote, Git untuk versioning. Troubleshooting konflik systemd-resolved vs CoreDNS.",
    architecture: [
      "OS: Ubuntu Server + Ubuntu Desktop",
      "DNS lokal: CoreDNS (sekolah.local, kasir.local)",
      "Service: systemd, Docker containers",
      "Akses: SSH remote",
      "Kode: Git + GitHub",
    ],
    tech: ["Ubuntu Server", "Linux CLI", "systemd", "CoreDNS", "Docker", "SSH", "Git"],
    contributions: [
      "Instalasi & hardening dasar layanan",
      "Konfigurasi interface, IP lokal, DNS, port",
      "Resolusi konflik port 53 (systemd-resolved)",
      "Deployment service frontend/backend di server sendiri",
    ],
    verified: [
      "Resolusi domain .local berjalan di jaringan lab",
      "Service berjalan via systemd & dapat di-restart",
      "Akses SSH remote terverifikasi di lab",
    ],
    challenges: [
      "Konflik port DNS 53 dengan systemd-resolved",
      "Manajemen port & firewall agar tidak bentrok",
      "Menjaga server tetap stabil tanpa IP publik",
    ],
    features: [
      { name: "Ubuntu Server admin", status: "Completed" },
      { name: "CoreDNS lokal", status: "Completed" },
      { name: "systemd services", status: "Completed" },
      { name: "Docker pengenalan", status: "In Progress" },
      { name: "HTTPS / hardening", status: "Planned" },
    ],
    imageNote: "Diagram layanan & port dapat dipasang — tanpa IP publik / kredensial.",
  },
  {
    id: "webops",
    category: "Proyek Web Development",
    title: "Sistem Internal: Absensi & Inventaris",
    subtitle: "Eksplorasi aplikasi operasional gudang & kehadiran",
    status: "Prototype",
    statusColor: "bg-slate-600",
    problem:
      "Operasional (absensi, stok gudang) sering tercatat manual — butuh pemahaman alur & prototipe digital yang sesuai kebutuhan lapangan.",
    solution:
      "Eksplorasi aplikasi web: pemetaan kebutuhan operasional, desain alur pengguna, CRUD data, dan prototipe absensi & inventaris. Fokus pada pengelolaan data yang benar, bukan klaim fitur lengkap.",
    architecture: [
      "Frontend: Next.js",
      "Backend: Express API",
      "Database: PostgreSQL + Prisma",
    ],
    tech: ["Next.js", "Express", "Prisma", "PostgreSQL"],
    contributions: [
      "Analisis kebutuhan operasional",
      "Desain alur pengguna & skema data",
      "Prototipe CRUD dasar",
    ],
    verified: ["Alur & skema terdokumentasi", "Prototipe CRUD berjalan di lokal (dapat diedit)"],
    challenges: ["Menyesuaikan fitur dengan kebutuhan nyata lapangan", "Menjaga scope tetap jujur (prototype vs produksi)"],
    features: [
      { name: "Absensi (prototipe)", status: "Planned" },
      { name: "Inventaris/gudang", status: "Planned" },
      { name: "CRUD & auth dasar", status: "Experimental" },
    ],
    imageNote: "Hanya tampilkan fitur yang benar-benar dibuat/diuji.",
  },
];
