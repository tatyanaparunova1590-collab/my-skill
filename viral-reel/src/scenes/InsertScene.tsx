import {
  AbsoluteFill,
  Easing,
  Interactive,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

// An "insert" cutaway: a quick stat card that breaks up the talking segment,
// a common Reels-editing trick to hold attention.
export const InsertScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, width } = useVideoConfig();

  const cardScale = interpolate(frame, [0, fps * 0.35], [0.7, 1], {
    easing: Easing.out(Easing.back(1.6)),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: "#0b0b12",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Interactive.Div
        name="Insert stat card"
        style={{
          scale: cardScale,
          width: width - 160,
          background: "linear-gradient(135deg, #ff2e63, #7b2ff7)",
          borderRadius: 32,
          padding: 56,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 20,
          boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
        }}
      >
        <div
          style={{
            fontFamily: "Arial, sans-serif",
            fontWeight: 900,
            fontSize: 120,
            color: "white",
          }}
        >
          +238%
        </div>
        <div
          style={{
            fontFamily: "Arial, sans-serif",
            fontWeight: 700,
            fontSize: 40,
            color: "white",
            textAlign: "center",
          }}
        >
          удержания зрителей с вставками
        </div>
      </Interactive.Div>
    </AbsoluteFill>
  );
};
