import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";

// Единый «плёночный» вид поверх всех кадров: виньетка + зерно.
export const Vignette: React.FC = () => (
  <AbsoluteFill
    style={{
      pointerEvents: "none",
      background:
        "radial-gradient(ellipse at center, rgba(0,0,0,0) 55%, rgba(20,8,4,0.55) 100%)",
    }}
  />
);

export const Grain: React.FC<{ opacity?: number }> = ({ opacity = 0.045 }) => {
  const frame = useCurrentFrame();
  const seed = frame % 3;
  return (
    <AbsoluteFill style={{ pointerEvents: "none", mixBlendMode: "overlay", opacity }}>
      <svg width="100%" height="100%">
        <filter id={`grain-${seed}`}>
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="1" seed={seed} stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter={`url(#grain-${seed})`} />
      </svg>
    </AbsoluteFill>
  );
};

// Мягкая тёплая цветокоррекция — одинаковая для всех кадров.
export const GRADE_FILTER = "sepia(0.07) saturate(1.04) contrast(1.05) brightness(0.98)";
