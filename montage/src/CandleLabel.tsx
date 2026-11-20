import React from "react";
import { Img, staticFile } from "remotion";
import { labelFont } from "./fonts";

// Надпись на пустой золотой этикетке свечи в кадре 14 — как на оригинальной банке:
// логотип в верхней трети, «SMOKY POMEGRANATE / FINE FRAGRANCE» в нижней.
// Координаты этикетки — в % исходного кадра (кадр14.png, 1672×941): x 640–945, y 395–615.
export const LABEL_BOX = { left: 38.4, top: 42.2, width: 18.1, height: 23.2 };

const INK = "#4a2f17";

export const CandleLabel: React.FC = () => {
  return (
    <div
      style={{
        position: "absolute",
        left: `${LABEL_BOX.left}%`,
        top: `${LABEL_BOX.top}%`,
        width: `${LABEL_BOX.width}%`,
        height: `${LABEL_BOX.height}%`,
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
