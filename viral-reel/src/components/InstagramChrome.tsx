import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

// A generic Reels-style chrome: progress bar, header, side action rail and
// music ticker. Original mockup UI, not copied from any specific post.
export const InstagramChrome: React.FC<{
  name: "InstagramChrome";
}> = () => {
  const frame = useCurrentFrame();
  const { durationInFrames, fps } = useVideoConfig();

  const progress = interpolate(frame, [0, durationInFrames], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const likeBounce = interpolate(
    frame % (fps * 2),
    [0, 6, 12, fps * 2],
    [1, 1.3, 1, 1],
    { extrapolateRight: "clamp" },
  );

  return (
    <AbsoluteFill style={{ pointerEvents: "none" }}>
      {/* Top progress bar */}
      <div
        style={{
          position: "absolute",
          top: 24,
          left: 24,
          right: 24,
          height: 4,
          borderRadius: 2,
          background: "rgba(255,255,255,0.3)",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${progress * 100}%`,
            borderRadius: 2,
            background: "white",
          }}
        />
      </div>

      {/* Header: profile + follow */}
      <div
        style={{
          position: "absolute",
          top: 56,
          left: 32,
          display: "flex",
          alignItems: "center",
          gap: 14,
        }}
      >
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: 999,
            background:
              "linear-gradient(135deg, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5)",
            border: "3px solid white",
          }}
        />
        <div
          style={{
            color: "white",
            fontFamily: "Arial, sans-serif",
            fontWeight: 700,
            fontSize: 30,
            textShadow: "0 2px 10px rgba(0,0,0,0.5)",
          }}
        >
          creator.name
        </div>
        <div
          style={{
            marginLeft: 8,
            padding: "6px 20px",
            borderRadius: 8,
            border: "2px solid white",
            color: "white",
            fontFamily: "Arial, sans-serif",
            fontWeight: 700,
            fontSize: 24,
          }}
        >
          Подписаться
        </div>
      </div>

      {/* Right side action rail */}
      <div
        style={{
          position: "absolute",
          right: 24,
          bottom: 260,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 34,
        }}
      >
        <ActionIcon emoji="❤️" label="128K" scale={likeBounce} />
        <ActionIcon emoji="💬" label="842" scale={1} />
        <ActionIcon emoji="↗️" label="Поделиться" scale={1} />
        <ActionIcon emoji="🔖" label="Сохранить" scale={1} />
      </div>

      {/* Bottom music ticker */}
      <div
        style={{
          position: "absolute",
          left: 32,
          bottom: 64,
          display: "flex",
          alignItems: "center",
          gap: 10,
          color: "white",
          fontFamily: "Arial, sans-serif",
          fontSize: 24,
          fontWeight: 600,
          textShadow: "0 2px 10px rgba(0,0,0,0.5)",
        }}
      >
        <span>🎵</span>
        <span>оригинальный звук — creator.name</span>
      </div>
    </AbsoluteFill>
  );
};

const ActionIcon: React.FC<{ emoji: string; label: string; scale: number }> = ({
  emoji,
  label,
  scale,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 6,
      }}
    >
      <div style={{ fontSize: 46, scale: `${scale}` }}>{emoji}</div>
      <div
        style={{
          color: "white",
          fontFamily: "Arial, sans-serif",
          fontSize: 20,
          fontWeight: 700,
          textShadow: "0 2px 8px rgba(0,0,0,0.5)",
        }}
      >
        {label}
      </div>
    </div>
  );
};
