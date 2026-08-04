import { Video } from "@remotion/media";
import {
  AbsoluteFill,
  Easing,
  Interactive,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

// Plays a real family clip full-bleed with a slow Ken Burns zoom, a location
// badge and a short caption line — one beat of the route montage.
export const FootageScene: React.FC<{
  src: string;
  badge: string;
  caption: string;
}> = ({ src, badge, caption }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  return (
    <AbsoluteFill style={{ background: "black" }}>
      <AbsoluteFill
        style={{
          scale: `${interpolate(frame, [0, durationInFrames], [1, 1.12], {
            easing: Easing.linear,
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          })}`,
        }}
      >
        <Video
          src={staticFile(src)}
          loop
          muted
          style={{ width: "100%", height: "100%" }}
          objectFit="cover"
        />
      </AbsoluteFill>

      <AbsoluteFill
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0) 60%, rgba(0,0,0,0.75) 100%)",
        }}
      />

      <Interactive.Div
        name="Location badge"
        style={{
          position: "absolute",
          top: 220,
          left: 32,
          opacity: interpolate(frame, [0, 10], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          translate: interpolate(frame, [0, 10], ["-20px 0px", "0px 0px"], {
            easing: Easing.out(Easing.cubic),
            output: "perceptual-scale",
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          background: "rgba(255,46,99,0.92)",
          color: "white",
          fontFamily: "Arial, sans-serif",
          fontWeight: 800,
          fontSize: 30,
          padding: "12px 24px",
          borderRadius: 14,
        }}
      >
        {badge}
      </Interactive.Div>

      <Interactive.Div
        name="Location caption"
        style={{
          position: "absolute",
          bottom: 460,
          left: 32,
          right: 32,
          opacity: interpolate(frame, [4, 16], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          color: "white",
          fontFamily: "Arial, sans-serif",
          fontWeight: 700,
          fontSize: 46,
          lineHeight: 1.2,
          textShadow: "0 4px 18px rgba(0,0,0,0.6)",
        }}
      >
        {caption}
      </Interactive.Div>
    </AbsoluteFill>
  );
};
