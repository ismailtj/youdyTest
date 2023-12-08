export default function VideoBtn() {
  return (
    <div className="w-80 h-96 relative overflow-hidden">
      <video
        id="albumBGVideo"
        loop
        controls={false}
        autoPlay
        muted
        tabIndex={-1}
        preload="auto"
        width={"100%"}
        style={{
          width: "100%",
        }}
      >
        <source src="/video2.mp4" type="video/mp4" />
      </video>
      <div className="bg-primary-color absolute bottom-0 w-full py-5 flex flex-col items-center text-white">
        <div className="relative">
          <button
            className="primary-color bg-white rounded-full py-2 px-7 block hover:scale-125 ease-in-out duration-300"
            style={{ marginTop: -40 }}
          >
            DITES-NOUS
          </button>
        </div>
        <p>
          Vous ne trouvez pas le service de votre intérêt ? Indiquez-nous ce que
          vous recherchez !
        </p>
      </div>
    </div>
  );
}
