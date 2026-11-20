import React from "react";
import {
  AbsoluteFill,
  Img,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { titleFont } from "./fonts";

// Финал: посвящение, затем логотип Tonka Perfumes и название аромата.
export const EndCard: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();
  const vertical = height > width;
  const s = (sec: number) => Math.round(sec * fps);

  const dedication = interpolate(frame, [s(0.3), s(1.3), s(2.8), s(3.4)], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const logo = interpolate(frame, [s(3.4), s(4.4)], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: "#0b0806", justifyContent: "center", alignItems: "center" }}>
      <div
        style={{
          position: "absolute",
          fontFamily: titleFont,
          fontWeight: 300,
          fontSize: vertical ? 62 : 56,
          color: "#f6ecdf",
          opacity: dedication,
          textAlign: "center",
          lineHeight: 1.4,
          padding: "0 90px",
        }}
      >
        Моему папе.
        <br />
        Он родился в Баку
      </div>
      <div
        style={{
          position: "absolute",
          opacity: logo,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: vertical ? 40 : 34,
        }}
      >
        <Img src={staticFile("logo-white.svg")} style={{ width: vertical ? 760 : 820 }} />
        <div
          style={{
            fontFamily: titleFont,
            fontWeight: 300,
            fontSize: vertical ? 40 : 34,
            letterSpacing: "0.35em",
            color: "#d9b98f",
          }}
        >
          SMOKY POMEGRANATE
        </div>
      </div>
    </AbsoluteFill>
  );
};
