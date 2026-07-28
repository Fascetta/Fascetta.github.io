import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #f6f2ea 0%, #d6c4a9 100%)",
          borderRadius: 16,
          color: "#11120f",
          fontSize: 28,
          fontWeight: 700,
          letterSpacing: "-0.12em",
        }}
      >
        CB
      </div>
    ),
    size,
  );
}
