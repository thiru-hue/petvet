import { ImageResponse } from "next/og";

export const alt = "PetVet — Care for every paw, every day.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#1B3A8C",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
        }}
      >
        <div style={{ fontSize: 200, fontWeight: 800, letterSpacing: -8, color: "#E6EEFF", display: "flex" }}>PETVET</div>
        <div style={{ fontSize: 56, fontWeight: 700, display: "flex" }}>
          Care for every paw,&nbsp;<span style={{ color: "#FFD24A" }}>every day.</span>
        </div>
        <div style={{ fontSize: 30, color: "#D3DEF7", marginTop: 24, display: "flex" }}>Wound &amp; skin care for dogs and cats</div>
      </div>
    ),
    size,
  );
}
