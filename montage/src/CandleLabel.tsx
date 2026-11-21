import React from "react";
import { Img, staticFile } from "remotion";
import { labelFont } from "./fonts";

// Координаты этикеток в процентах от исходного кадра.
const LABEL_BOXES = {
  match: { left: 31.5, top: 48, width: 16, height: 19.8 },
  lit: { left: 38.4, top: 42.2, width: 18.1, height: 23.2 },
};

const INK = "#4a2f17";

export const CandleLabel: React.FC<{ variant: keyof typeof LABEL_BOXES }> = ({ variant }) => {
  const box = LABEL_BOXES[variant];
  return (
    <div
      style={{
        position: "absolute",
        left: `${box.left}%`,
        top: `${box.top}%`,
        width: `${box.width}%`,
        height: `${box.height}%`,
        containerType: "size",
        mixBlendMode: "multiply",
        opacity: 0.82,
      }}
    >
      <Img
        src={staticFile("logo-brown.svg")}
        style={{
          position: "absolute",
          left: "12%",
          width: "76%",
          top: "30%",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: "70%",
          fontFamily: labelFont,
          fontWeight: 400,
          color: INK,
          fontSize: "4.2cqw",
          lineHeight: 1.45,
          letterSpacing: "0.06em",
          textAlign: "center",
        }}
      >
        SMOKY POMEGRANATE
        <br />
        FINE FRAGRANCE
      </div>
    </div>
  );
};
