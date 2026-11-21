import React from "react";
import { AbsoluteFill, Sequence, staticFile, useVideoConfig } from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { Audio } from "@remotion/media";
import available from "./available.json";
import { fade } from "@remotion/transitions/fade";
import { SHOTS, END_CARD_SECONDS, FINAL_DISSOLVE } from "./shots";
import { Shot } from "./Shot";
import { Title } from "./Title";
import { EndCard } from "./EndCard";
import { Grain, Vignette, GRADE_FILTER } from "./Look";

export const filmDurationInFrames = (fps: number) => {
  let total = SHOTS.reduce((a, s) => a + Math.round(s.seconds * fps), 0);
  for (const shot of SHOTS) total -= Math.round((shot.dissolveIn ?? 0) * fps);
  total += Math.round(END_CARD_SECONDS * fps) - Math.round(FINAL_DISSOLVE * fps);
  return total;
};

const SOUNDTRACK_FILE = "Tonka-action-mix.wav";

export const Film: React.FC = () => {
  const { fps } = useVideoConfig();
  return (
    <AbsoluteFill style={{ backgroundColor: "#0b0806" }}>
      <AbsoluteFill style={{ filter: GRADE_FILTER }}>
        <TransitionSeries name="Кадры">
          {SHOTS.flatMap((shot) => {
            const dur = Math.round(shot.seconds * fps);
            const nodes = [];
            if (shot.dissolveIn) {
              nodes.push(
                <TransitionSeries.Transition
                  key={`t-${shot.id}`}
                  presentation={fade()}
                  timing={linearTiming({
                    durationInFrames: Math.round(shot.dissolveIn * fps),
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
            timing={linearTiming({ durationInFrames: Math.round(FINAL_DISSOLVE * fps) })}
          />
          <TransitionSeries.Sequence key="end" name="Финал" durationInFrames={Math.round(END_CARD_SECONDS * fps)}>
            <EndCard />
          </TransitionSeries.Sequence>
        </TransitionSeries>
      </AbsoluteFill>
      {(available.audio as string[]).includes(SOUNDTRACK_FILE) && (
        <Audio src={staticFile(`audio/${SOUNDTRACK_FILE}`)} name="Музыка и звуки действий" />
      )}
      <Vignette />
      <Grain />
    </AbsoluteFill>
  );
};
