import { AbsoluteFill } from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { slide } from "@remotion/transitions/slide";
import { HookScene } from "./scenes/HookScene";
import { CaptionScene } from "./scenes/CaptionScene";
import { InsertScene } from "./scenes/InsertScene";
import { OutroScene } from "./scenes/OutroScene";
import { InstagramChrome } from "./components/InstagramChrome";
import { mainCaptions, secondBeatCaptions } from "./captions/mainCaptions";

export const ViralReel: React.FC = () => {
  return (
    <AbsoluteFill style={{ background: "black" }}>
      <TransitionSeries>
        <TransitionSeries.Sequence durationInFrames={60} name="Hook">
          <HookScene />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: 12 })}
        />
        <TransitionSeries.Sequence durationInFrames={130} name="Main beat 1">
          <CaptionScene
            captions={mainCaptions}
            background="linear-gradient(160deg, #12172b 0%, #1c2440 100%)"
          />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={slide({ direction: "from-bottom" })}
          timing={linearTiming({ durationInFrames: 14 })}
        />
        <TransitionSeries.Sequence durationInFrames={80} name="Insert">
          <InsertScene />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={slide({ direction: "from-top" })}
          timing={linearTiming({ durationInFrames: 14 })}
        />
        <TransitionSeries.Sequence durationInFrames={130} name="Main beat 2">
          <CaptionScene
            captions={secondBeatCaptions}
            background="linear-gradient(160deg, #1c2440 0%, #12172b 100%)"
          />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: 14 })}
        />
        <TransitionSeries.Sequence durationInFrames={90} name="Outro">
          <OutroScene />
        </TransitionSeries.Sequence>
      </TransitionSeries>
      <InstagramChrome name="InstagramChrome" />
    </AbsoluteFill>
  );
};
