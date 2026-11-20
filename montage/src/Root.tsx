import React from "react";
import { Composition } from "remotion";
import { Film, filmDurationInFrames } from "./Film";

const FPS = 25;

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Tonka-16x9"
        component={Film}
        durationInFrames={filmDurationInFrames(FPS)}
        fps={FPS}
        width={1920}
        height={1080}
      />
      <Composition
        id="Tonka-9x16"
        component={Film}
        durationInFrames={filmDurationInFrames(FPS)}
        fps={FPS}
        width={1080}
        height={1920}
      />
    </>
  );
};
