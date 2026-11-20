import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { titleFont } from "./fonts";

// Титр: тонкий шрифт, внизу по центру, плавно появляется и уходит.
export const Title: React.FC<{ text: string; durationInFrames: number }> = ({
  text,
  durationInFrames,
}) => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();
  const vertical = height > width;
  const inF = Math.round(0.8 * fps);
  const outF = Math.round(0.6 * fps);
  const opacity = interpolate(
    frame,
    [0, inF, durationInFrames - outF, durationInFrames],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );
  return (
    <AbsoluteFill
      style={{
        justifyContent: "flex-end",
        alignItems: "center",
        paddingBottom: vertical ? 360 : 110,
        paddingLeft: 90,
        paddingRight: 90,
      }}
    >
      <div
        style={{
          fontFamily: titleFont,
          fontWeight: 300,
          fontSize: vertical ? 58 : 50,
          lineHeight: 1.3,
          letterSpacing: "0.02em",
          color: "#f6ecdf",
          textAlign: "center",
          opacity,
          textShadow: "0 2px 18px rgba(0,0,0,0.65)",
          maxWidth: vertical ? 900 : 1500,
        }}
      >
        {text}
      </div>
    </AbsoluteFill>
  );
};
