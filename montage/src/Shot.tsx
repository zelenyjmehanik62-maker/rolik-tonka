import React from "react";
import {
  AbsoluteFill,
  Easing,
  Img,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { Video } from "@remotion/media";
import available from "./available.json";
import type { Shot as ShotT } from "./shots";
import { CandleLabel } from "./CandleLabel";

const SRC_ASPECT = 16 / 9;

// Кадр в «системе координат исходника»: блок с пропорцией 16:9, покрывающий экран.
// Для 9:16 блок шире экрана и сдвигается по focusX. Наложения внутри — в % исходника.
const CoverBox: React.FC<{ focusX: number; children: React.ReactNode }> = ({
  focusX,
  children,
}) => {
  const { width, height } = useVideoConfig();
  const screenAspect = width / height;
  let w = width;
  let h = height;
  if (screenAspect < SRC_ASPECT) {
    h = height;
    w = height * SRC_ASPECT;
  } else {
    w = width;
    h = width / SRC_ASPECT;
  }
  const left = -(w - width) * focusX;
  const top = -(h - height) / 2;
  return (
    <div style={{ position: "absolute", left, top, width: w, height: h }}>
      {children}
    </div>
  );
};

export const Shot: React.FC<{ shot: ShotT; durationInFrames: number }> = ({
  shot,
  durationInFrames,
}) => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();
  const vertical = height > width;
  const hasVideo = (available.videos as string[]).includes(`v${shot.id}`);
  const hasFrame = (available.frames as string[]).includes(`f${shot.id}`);

  // На видео своё движение — даём совсем лёгкий наезд, на картинке — заметнее.
  const strength = hasVideo ? 0.02 : 0.07;
  const p = interpolate(frame, [0, durationInFrames], [0, 1], {
    extrapolateRight: "clamp",
  });
  let scale = 1 + (shot.motion === "none" ? strength * 0.3 : strength) * p;
  let tx = 0;
  if (shot.motion === "out") scale = 1 + strength * (1 - p);
  if (shot.motion === "left") tx = -(scale - 1) * 42;
  if (shot.motion === "right") tx = (scale - 1) * 42;
  if (shot.candleLabel) {
    scale = 1; // этикетка должна стоять точно на месте
    tx = 0;
  }

  const focus = interpolate(
    frame,
    [durationInFrames * 0.12, durationInFrames * 0.73],
    [shot.focusX, shot.focusEndX ?? shot.focusX],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.inOut(Easing.sin) },
  );
  const playbackRate = Math.min(1, 5 / shot.seconds);

  const mediaStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  return (
    <AbsoluteFill style={{ backgroundColor: "#0b0806", overflow: "hidden" }}>
      <CoverBox focusX={vertical ? focus : 0.5}>
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
            transform: `translateX(${tx}%) scale(${scale})`,
          }}
        >
          {hasVideo ? (
            <Video
              name={`Видео ${shot.id}`}
              src={staticFile(`video/v${shot.id}.mp4`)}
              playbackRate={playbackRate}
              muted
              style={mediaStyle}
            />
          ) : hasFrame ? (
            <Img src={staticFile(`frames/f${shot.id}.png`)} style={mediaStyle} />
          ) : (
            <Placeholder label={shot.label} id={shot.id} />
          )}
          {shot.candleLabel && (hasVideo || hasFrame) ? <CandleLabel variant={shot.candleLabel} /> : null}
        </div>
      </CoverBox>
    </AbsoluteFill>
  );
};

const Placeholder: React.FC<{ id: string; label: string }> = ({ id, label }) => (
  <AbsoluteFill
    style={{
      background: "linear-gradient(135deg,#2a1510,#120a08)",
      color: "#c9a77a",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "sans-serif",
      fontSize: 48,
      letterSpacing: 4,
    }}
  >
    <div>КАДР {id}</div>
    <div style={{ fontSize: 30, opacity: 0.7, marginTop: 16 }}>{label} — нет картинки</div>
  </AbsoluteFill>
);
