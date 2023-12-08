"use client";

import GoldenTitle from "../goldenTitle";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function Testem() {
  return (
    <div className="max-w-7xl mx-auto text-center my-12">
      <GoldenTitle title="Ils ont testé serez-vous les prochains?" />
      <div className="flex justify-around">
        <div style={{ width: 480 }}>
          <Carousel responsive={responsive}>
            <div>
              <Image src="/comme.webp" width="480" height={373} alt={"com"} />
            </div>
            <div>
              <Image src="/comme2.webp" width="480" height={373} alt={"com"} />
            </div>
          </Carousel>
        </div>
        <iframe
          width="630"
          height="373"
          src="https://www.youtube.com/embed/MLX8i0wxqKI?si=Iah2JnpIoc4m4W_V"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
