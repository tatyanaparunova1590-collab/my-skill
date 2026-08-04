import {
  AbsoluteFill,
  Easing,
  Interactive,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

// A styled title card for route beats we don't have footage for yet —
// keeps the montage's rhythm consistent until real clips are swapped in.
export const TextCardScene: React.FC<{
  emoji: string;
  title: string;
  description: string;
  badge: string;
  gradient: string;
}> = ({ emoji, title, description, badge, gradient }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill
      style={{
        background: gradient,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 28,
        padding: 80,
      }}
    >
      <Interactive.Div
        name="Card emoji"
        style={{
          fontSize: 140,
          scale: interpolate(frame, [0, fps * 0.35], [0.6, 1], {
            easing: Easing.out(Easing.back(1.8)),
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        {emoji}
      </Interactive.Div>
      <Interactive.Div
        name="Card title"
        style={{
          opacity: interpolate(frame, [4, fps * 0.4], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          color: "white",
          fontFamily: "Arial, sans-serif",
          fontWeight: 900,
          fontSize: 68,
          textAlign: "center",
          maxWidth: 880,
          lineHeight: 1.15,
          textShadow: "0 4px 18px rgba(0,0,0,0.5)",
        }}
      >
        {title}
      </Interactive.Div>
      <Interactive.Div
        name="Card description"
        style={{
          opacity: interpolate(frame, [8, fps * 0.5], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          color: "white",
          fontFamily: "Arial, sans-serif",
          fontWeight: 500,
          fontSize: 38,
          textAlign: "center",
          maxWidth: 820,
          lineHeight: 1.3,
        }}
      >
        {description}
      </Interactive.Div>
      <Interactive.Div
        name="Card badge"
        style={{
          marginTop: 12,
          background: "rgba(255,255,255,0.16)",
          border: "2px solid rgba(255,255,255,0.6)",
          color: "white",
          fontFamily: "Arial, sans-serif",
          fontWeight: 800,
          fontSize: 28,
          padding: "12px 28px",
          borderRadius: 999,
        }}
      >
        {badge}
      </Interactive.Div>
    </AbsoluteFill>
  );
};
