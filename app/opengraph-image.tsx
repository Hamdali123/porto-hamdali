import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Muhamad Hamdali — IT Support, Networking, Linux Server";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #000a14 0%, #001d47 60%, #00307a 100%)",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 18,
              background: "linear-gradient(135deg,#3b82f6,#1d4ed8)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: 30,
              fontWeight: 800,
            }}
          >
            MH
          </div>
          <div style={{ color: "#93c5fd", fontSize: 26, letterSpacing: 2 }}>PORTFOLIO · 2025–2026</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ color: "white", fontSize: 78, fontWeight: 800, lineHeight: 1.05 }}>
            Muhamad Hamdali
          </div>
          <div style={{ color: "#93c5fd", fontSize: 34, marginTop: 18 }}>
            IT Support · Networking · Linux Server
          </div>
          <div style={{ color: "#cbd5e1", fontSize: 26, marginTop: 22 }}>
            FTTH & MikroTik to OLT · Ubuntu Server · SmartOLT ZTE C600/C300
          </div>
        </div>

        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          {["MikroTik", "FTTH / OLT", "Linux Server", "Next.js", "Zabbix"].map((t) => (
            <div
              key={t}
              style={{
                color: "#bfdbfe",
                border: "1px solid rgba(59,130,246,0.5)",
                background: "rgba(59,130,246,0.15)",
                borderRadius: 999,
                padding: "10px 22px",
                fontSize: 24,
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
