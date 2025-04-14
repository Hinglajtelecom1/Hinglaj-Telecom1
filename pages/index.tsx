import React, { useRef, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const highlights = [
  "We Deal in All Original Products of BOAT, APPLE, SAMSUNG, and PORTRONICS.",
  "Custom Skins + iPaky Case Combo for Every Model.",
  "All Original Samsung & Apple Accessories Available.",
  "Layered 3M Skins for Ultimate Style and Protection.",
];

const posters = [
  { src: "/poster1.jpg" },
  { src: "/poster2.jpg" },
  { src: "/poster3.jpg" },
  { src: "/poster4.jpg" },
];

export default function Home() {
  const [nav1, setNav1] = useState<Slider | null>(null);
  const [nav2, setNav2] = useState<Slider | null>(null);

  const posterSettings = {
    asNavFor: nav2 as Slider,
    ref: (slider: Slider) => setNav1(slider),
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 7000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };

  const textSettings = {
    asNavFor: nav1 as Slider,
    ref: (slider: Slider) => setNav2(slider),
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    swipe: false,
    draggable: false,
    focusOnSelect: false,
  };

  return (
    <div
      className="min-h-screen"
      style={{
        background: "rgba(255, 255, 255, 0.9)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      }}
    >
      <div className="w-full px-4 py-3">
        <h1 className="text-red-600 text-2xl font-light">Hinglaj Telecom</h1>
      </div>

      {/* Poster Slider */}
      <div className="relative w-full h-[80vh]">
        <Slider {...posterSettings}>
          {posters.map((poster, index) => (
            <div key={index} className="relative w-full h-[80vh]">
              <Image
                src={poster.src}
                alt={Poster ${index + 1}}
                layout="fill"
                objectFit="cover"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Caption Slider */}
      <div className="px-4 mt-2 text-black text-left font-bold text-md">
        <Slider {...textSettings}>
          {highlights.map((text, index) => (
            <div key={index}>
              <p>{text}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}