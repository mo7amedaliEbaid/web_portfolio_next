import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Mohamed Ali Ebaid - Senior Mobile Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #030014 0%, #1a0a2e 40%, #0c0e23 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
          position: "relative",
        }}
      >
        {/* Decorative elements */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "radial-gradient(circle at 30% 40%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "radial-gradient(circle at 70% 60%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
            display: "flex",
          }}
        />

        {/* Top line */}
        <div
          style={{
            position: "absolute",
            top: 40,
            left: 60,
            right: 60,
            height: 1,
            background: "linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.3), transparent)",
            display: "flex",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              color: "white",
              marginBottom: 8,
              letterSpacing: "-2px",
              display: "flex",
            }}
          >
            Mohamed Ali Ebaid
          </div>
          <div
            style={{
              width: 120,
              height: 2,
              background: "linear-gradient(90deg, transparent, #CBACF9, transparent)",
              marginBottom: 20,
              display: "flex",
            }}
          />
          <div
            style={{
              fontSize: 32,
              color: "#CBACF9",
              fontWeight: 600,
              marginBottom: 28,
              display: "flex",
            }}
          >
            Senior Mobile Engineer
          </div>
          <div
            style={{
              fontSize: 22,
              color: "#9ca3af",
              display: "flex",
              gap: 16,
              alignItems: "center",
            }}
          >
            <span>Flutter</span>
            <span style={{ color: "#CBACF9" }}>&#x2022;</span>
            <span>Android (Kotlin)</span>
            <span style={{ color: "#CBACF9" }}>&#x2022;</span>
            <span>iOS (Swift)</span>
          </div>
          <div
            style={{
              fontSize: 18,
              color: "#6b7280",
              marginTop: 20,
              display: "flex",
            }}
          >
            25+ Production Apps | 6+ Years Experience
          </div>
        </div>

        {/* Bottom line */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            left: 60,
            right: 60,
            height: 1,
            background: "linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.3), transparent)",
            display: "flex",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
