import {
  AbsoluteFill,
  Easing,
  Interactive,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export const OutroScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const pulse = interpolate(frame % (fps * 0.8), [0, fps * 0.4, fps * 0.8], [1, 1.08, 1]);

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(160deg, #ff2e63 0%, #7b2ff7 60%, #1a0033 100%)",
        justifyContent: "center",
        alignItems: "center",
        gap: 48,
        flexDirection: "column",
      }}
    >
      <Interactive.Div
        name="Outro headline"
        style={{
          opacity: interpolate(frame, [0, fps * 0.3], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          translate: interpolate(frame, [0, fps * 0.3], ["0px 40px", "0px 0px"], {
            easing: Easing.out(Easing.cubic),
            output: "perceptual-scale",
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          color: "white",
          fontFamily: "Arial, sans-serif",
          fontWeight: 900,
          fontSize: 76,
          textAlign: "center",
          maxWidth: 880,
          lineHeight: 1.15,
          textShadow: "0 6px 24px rgba(0,0,0,0.5)",
        }}
      >
        Подпишись, чтобы не пропустить следующий лайфхак 🔥
      </Interactive.Div>
      <Interactive.Div
        name="Outro follow button"
        style={{
          scale: pulse,
          padding: "24px 64px",
          borderRadius: 999,
          background: "white",
          color: "#ff2e63",
          fontFamily: "Arial, sans-serif",
          fontWeight: 800,
          fontSize: 40,
        }}
      >
        Подписаться
      </Interactive.Div>
    </AbsoluteFill>
  );
};
