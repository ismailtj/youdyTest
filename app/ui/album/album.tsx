"use client";

import { useState } from "react";
import PhotoAlbum, { Photo } from "react-photo-album";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const photos: Photo[] = [
  {
    src: "/8b521e_10e93b2c73a64cc5aa8528647f8b446d~mv2.webp",
    height: 764,
    width: 573,
  },
  {
    src: "/f8bd86_bafa3cff4e2643938c65ec6cda4df575~mv2.webp",
    height: 653,
    width: 871,
  },
  {
    src: "/8b521e_3ac12a6e41df4063bc1b94d49dcfb1bc~mv2.webp",
    height: 764,
    width: 764,
  },
  {
    src: "/8b521e_b70c3a5c045b4366a166cda87201817c~mv2.webp",
    height: 764,
    width: 573,
  },
  {
    src: "/f8bd86_318959c536a940ba8c07680decb59487~mv2.webp",
    height: 653,
    width: 871,
  },
  {
    src: "/8b521e_7a08ea023d2047c1b810377d08346ac6~mv2.webp",
    height: 764,
    width: 573,
  },
  {
    src: "/8b521e_12c7b774523e4bdfa48437d708dd20ab~mv2.webp",
    height: 764,
    width: 573,
  },
  {
    src: "/8b521e_c6af27c8cccb4a218a97c8e88a2797b7~mv2.webp",
    height: 764,
    width: 764,
  },
  {
    src: "/8b521e_7585ecde0a2c4570803309e3791a0e13~mv2.webp",
    height: 764,
    width: 573,
  },
  {
    src: "/8b521e_0fc00210aa5d44ce90e30f0ba4e42d5e~mv2.webp",
    height: 764,
    width: 764,
  },
  {
    src: "/f8bd86_160be6c0ed2548c2a9d743dc20a67654~mv2.webp",
    height: 764,
    width: 573,
  },
  {
    src: "/8b521e_6c361c775d34421aa7a71bcf68199b85~mv2.webp",
    height: 764,
    width: 764,
  },
];

export default function Album() {
  const [index, setIndex] = useState(-1);
  return (
    <div className="max-w-7xl mx-auto my-3  px-1">
      <PhotoAlbum
        layout="columns"
        photos={photos}
        targetRowHeight={200}
        onClick={({ index }) => setIndex(index)}
        columns={6}
      />

      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </div>
  );
}
