import "./index.css";
import { Composition } from "remotion";
import { ViralReel } from "./ViralReel";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="ViralReel"
        component={ViralReel}
        durationInFrames={436}
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};
