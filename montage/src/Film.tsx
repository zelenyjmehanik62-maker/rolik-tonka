import React from "react";
import { AbsoluteFill, Sequence, useVideoConfig } from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { SHOTS, END_CARD_SECONDS, FAST_FADE, STAGE_FADE } from "./shots";
import { Shot } from "./Shot";
import { Title } from "./Title";
import { EndCard } from "./EndCard";
import { Grain, Vignette, GRADE_FILTER } from "./Look";

export const filmDurationInFrames = (fps: number) => {
  let total = SHOTS.reduce((a, s) => a + Math.round(s.seconds * fps), 0);
  SHOTS.forEach((s, i) => {
    if (i > 0) total -= Math.round((s.stageBreak ? STAGE_FADE : FAST_FADE) * fps);
  });
  total += Math.round(END_CARD_SECONDS * fps) - Math.round(STAGE_FADE * fps);
  return total;
};

export const Film: React.FC = () => {
  const { fps } = useVideoConfig();
  return (
    <AbsoluteFill style={{ backgroundColor: "#0b0806" }}>
      <AbsoluteFill style={{ filter: GRADE_FILTER }}>
        <TransitionSeries name="Кадры">
          {SHOTS.flatMap((shot, i) => {
            const dur = Math.round(shot.seconds * fps);
            const nodes = [];
            if (i > 0) {
              nodes.push(
                <TransitionSeries.Transition
                  key={`t-${shot.id}`}
                  presentation={fade()}
                  timing={linearTiming({
                    durationInFrames: Math.round((shot.stageBreak ? STAGE_FADE : FAST_FADE) * fps),
                  })}
                />,
              );
            }
            nodes.push(
              <TransitionSeries.Sequence key={shot.id} name={`${shot.id} ${shot.label}`} durationInFrames={dur}>
                <Shot shot={shot} durationInFrames={dur} />
                {shot.title ? (
                  <Sequence name={`Титр ${shot.id}`} from={Math.round(0.6 * fps)}>
                    <Title text={shot.title} durationInFrames={dur - Math.round(1.0 * fps)} />
                  </Sequence>
                ) : null}
              </TransitionSeries.Sequence>,
            );
            return nodes;
          })}
          <TransitionSeries.Transition
            key="t-end"
            presentation={fade()}
            timing={linearTiming({ durationInFrames: Math.round(STAGE_FADE * fps) })}
          />
          <TransitionSeries.Sequence key="end" name="Финал" durationInFrames={Math.round(END_CARD_SECONDS * fps)}>
            <EndCard />
          </TransitionSeries.Sequence>
        </TransitionSeries>
      </AbsoluteFill>
      <Vignette />
      <Grain />
    </AbsoluteFill>
  );
};
