import { ImageResponse } from "next/og";

export const alt = "PetVet — Pet care, from eyes to paws.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", background: "#173798", color: "#FBF5E9", display: "flex", flexDirection: "column", justifyContent: "center", padding: 80 }}>
        <div style={{ fontSize: 130, fontWeight: 800, display: "flex" }}>From eyes</div>
        <div style={{ fontSize: 130, fontWeight: 800, display: "flex", color: "#ffd7cf" }}>to paws.</div>
        <div style={{ fontSize: 34, marginTop: 28, display: "flex" }}>PetVet · HOCl pet care, soft treats &amp; cozy milk</div>
      </div>
    ),
    size,
  );
}
