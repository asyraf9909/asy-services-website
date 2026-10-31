import { ImageResponse } from "next/og";

export const alt = "ASY Services — software, mobile and AI engineering studio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#07080a",
          padding: "64px 72px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -180,
            left: -140,
            width: 720,
            height: 720,
            background: "radial-gradient(circle, rgba(255,77,0,0.42), rgba(255,77,0,0.03) 55%, transparent 72%)",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 13,
              background: "linear-gradient(150deg,#FFB347,#FF5C00 45%,#C93300)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: 26,
              fontWeight: 700,
            }}
          >
            A
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ color: "#f5f4f0", fontSize: 22, fontWeight: 600 }}>ASY Services</div>
            <div style={{ color: "#8b9097", fontSize: 13, letterSpacing: 3, textTransform: "uppercase" }}>
              Software studio · est. 2020
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#f5f4f0",
              fontSize: 68,
              fontWeight: 600,
              letterSpacing: -3,
              lineHeight: 1.02,
              maxWidth: 900,
            }}
          >
            We engineer software that
          </div>
          <div
            style={{
              color: "#ff6a1a",
              fontSize: 68,
              fontWeight: 600,
              letterSpacing: -3,
              lineHeight: 1.02,
            }}
          >
            earns its keep.
          </div>
        </div>

        <div style={{ display: "flex", gap: 32, color: "#8b9097", fontSize: 18 }}>
          <span>Web platforms</span>
          <span style={{ color: "#3a3f45" }}>·</span>
          <span>Mobile apps</span>
          <span style={{ color: "#3a3f45" }}>·</span>
          <span>AI &amp; integration</span>
          <span style={{ color: "#3a3f45" }}>·</span>
          <span>Cloud</span>
        </div>
      </div>
    ),
    size,
  );
}
