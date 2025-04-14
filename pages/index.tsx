import React, { useEffect, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const highlights = [
  "We Deal in All Original Products of BOAT, APPLE, SAMSUNG, and PORTRONICS.",
  "We Sell All the Original Products at the Best Price Possible.",
  "Trust is Our First Priority, 100% Original Quality in All the Products that we Sell.",
  "We Deal in Premium Quality Skins of All Mobile Phones, At the Best Price.",
  "We are The First Brand to Make Mobile Skins and Transparent Cases Combo(for Every Model).",
];

const posters = [
  { src: "/poster1.jpg", caption: "Premium boAt Airspeed Pro at Best Price" },
  { src: "/poster2.jpg", caption: "Custom Skins + iPaky Case Combo for Every Model" },
  { src: "/poster3.jpg", caption: "All Original Samsung & Apple Accessories Available" },
  { src: "/poster4.jpg", caption: "Layered 3M Skins for Ultimate Style and Protection" },
];

export default function Home() {
  const [currentHighlight, setCurrentHighlight] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHighlight((prev) => (prev + 1) % highlights.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const posterSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div
      className="min-h-screen"
      style={{
        background: "rgba(255, 255, 255, 0.85)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
      }}
    >
      <div className="px-4 py-2">
        <h1 className="text-red-600 font-light text-2xl">Hinglaj Telecom</h1>
        <div className="mt-2 text-sm text-black transition-all duration-500">
          {highlights[currentHighlight]}
        </div>
      </div>

      <div className="mt-4">
        <Slider {...posterSettings}>
          {posters.map((poster, index) => (
            <div key={index} className="relative w-full h-[80vh]">
              <Image
                src={poster.src}
                alt={Poster ${index + 1}}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
          ))}
        </Slider>
        <div className="text-left text-black font-semibold text-md px-4 mt-2">
          {posters.map((poster, index) => (
            <div
              key={index}
              style={{ display: index === 0 ? "block" : "none" }}
            >
              {poster.caption}
            </div>
          ))}
        </div>
      </div>

      <a
        href="https://wa.me/91XXXXXXXXXX"
        className="fixed bottom-5 right-5 bg-green-500 text-white p-3 rounded-full shadow-lg"
        target="_blank"
        rel="noopener noreferrer"
      >
        WhatsApp
      </a>
    </div>
  );
}