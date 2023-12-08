import Album from "./album";

export default function AlbumContainer() {
  return (
    <div className="mb-10 relative">
      <div
        className="absolute"
        style={{
          zIndex: -1,
          width: "100%",
          marginTop: -20,
          height: 510,
          overflow: "hidden",
        }}
      >
        <video
          id="albumBGVideo"
          loop
          controls={false}
          autoPlay
          muted
          tabIndex={-1}
          preload="auto"
          width={"100%"}
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
      </div>
      <Album />
    </div>
  );
}
