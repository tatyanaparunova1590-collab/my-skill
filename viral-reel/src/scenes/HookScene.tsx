import {
  AbsoluteFill,
  Easing,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { Interactive } from "remotion";

export const HookScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(160deg, #1a0033 0%, #3d0a5c 55%, #ff2e63 100%)",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Interactive.Div
        name="Hook headline"
        style={{
          scale: interpolate(frame, [0, fps * 0.4], [0.6, 1], {
            easing: Easing.out(Easing.back(2)),
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          opacity: interpolate(frame, [0, fps * 0.25], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          color: "white",
          fontFamily: "Arial, sans-serif",
          fontWeight: 900,
          fontSize: 96,
          textAlign: "center",
          maxWidth: 900,
          lineHeight: 1.1,
          textShadow: "0 6px 24px rgba(0,0,0,0.5)",
        }}
      >
        Стоп! Досмотри до конца 👀
      </Interactive.Div>
    </AbsoluteFill>
  );
};
