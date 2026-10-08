import { ImageResponse } from "next/og";
import { SITE_CONFIG } from "@/lib/constants";

export const alt = "Smart Snack Nutrition - Pembroke Pines, Florida";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #064E3B 0%, #0F172A 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: "80px",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "16px",
              background: "#10B981",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "32px",
            }}
          >
            🌿
          </div>
          <span style={{ fontSize: "36px", fontWeight: 800 }}>
            {SITE_CONFIG.name}
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              display: "flex",
              background: "rgba(16, 185, 129, 0.2)",
              color: "#34D399",
              padding: "8px 24px",
              borderRadius: "9999px",
              fontSize: "20px",
              fontWeight: 700,
              border: "1px solid rgba(52, 211, 153, 0.4)",
            }}
          >
            Pembroke Pines, FL • Health & Wellness Hub
          </div>
          <h1
            style={{
              fontSize: "64px",
              fontWeight: 900,
              lineHeight: 1.1,
              maxWidth: "900px",
            }}
          >
            High-Protein Goodness & Clean Energy
          </h1>
          <p
            style={{
              fontSize: "26px",
              color: "#94A3B8",
              maxWidth: "800px",
            }}
          >
            24g+ Protein Shakes • Mega Loaded Teas • Açaí Bowls • Protein Waffles
          </p>
        </div>

        <div
          style={{
            fontSize: "20px",
            color: "#64748B",
            fontWeight: 600,
          }}
        >
          smartsnacknutrition.com
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
