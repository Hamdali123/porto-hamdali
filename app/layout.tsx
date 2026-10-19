import type { Metadata } from "next";
import "./globals.css";
import { ContentProvider } from "@/components/ContentProvider";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://hamdali-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Muhamad Hamdali — IT Support | Networking | Linux Server",
  description:
    "Mahasiswa Teknik Informatika dengan pengalaman praktik jaringan komputer, troubleshooting, administrasi Linux Server, serta pengembangan aplikasi web SmartOLT untuk pengelolaan infrastruktur jaringan.",
  keywords: [
    "Muhamad Hamdali",
    "IT Support",
    "Network Technician",
    "Junior Network Engineer",
    "NOC",
    "Linux Server",
    "MikroTik",
    "SmartOLT",
    "ZTE C600",
  ],
  authors: [{ name: "Muhamad Hamdali" }],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Muhamad Hamdali — IT Support & Networking Portfolio",
    description:
      "Praktik jaringan, Linux Server, dan SmartOLT ZTE C600/C300. Journey 2025–2026 yang jujur dan terstruktur.",
    type: "website",
    locale: "id_ID",
    url: "/",
    siteName: "Muhamad Hamdali Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhamad Hamdali — IT Support & Networking",
    description: "FTTH lapangan, MikroTik to OLT, Linux Server, SmartOLT ZTE C600/C300.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Muhamad Hamdali",
  jobTitle: "IT Support, Network Technician, Junior Network Engineer",
  url: siteUrl,
  sameAs: ["https://github.com/hamdali123"],
  knowsAbout: ["IT Support", "MikroTik", "FTTH", "OLT ZTE C600", "Linux Server", "Ubuntu", "Zabbix", "Next.js"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#000a14" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <ContentProvider>{children}</ContentProvider>
      </body>
    </html>
  );
}
