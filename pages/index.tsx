import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const highlights = [
  "We Deal in All Original Products of BOAT, APPLE, SAMSUNG, and PORTRONICS.",
  "We Sell All the Original Products at the Best Price Possible.",
  "Trust is Our First Priority, 100% Original Quality in All the Products that we Sell.",
  "We Deal in Premium Quality Skins of All Mobile Phones, At the Best Price.",
  "We are The First Brand to Make Mobile Skins and Transparent Cases Combo (for Every Model)."
];

const posters = [
  "/poster1.jpg",
  "/poster2.jpg",
  "/poster3.jpg",
  "/poster4.jpg",
];

export default function Home() {
  const [currentHighlight, setCurrentHighlight] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHighlight((prev) => (prev + 1) % highlights.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const posterSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };

  return (
    <div style={{ background: "#f8f8f8", minHeight: "100vh", padding: "1rem" }}>
      <h1 style={{ color: "red", fontWeight: "400", fontSize: "24px" }}>Hinglaj Telecom</h1>

      {/* Highlight Slider */}
      <div
        style={{
          margin: "1rem 0",
          fontSize: "16px",
          fontWeight: "300",
          overflow: "hidden",
          whiteSpace: "nowrap",
          position: "relative",
          height: "30px",
        }}
      >
        <div
          style={{
            position: "absolute",
            transition: "transform 0.5s ease",
            transform: translateX(-${currentHighlight * 100}%),
            display: "flex",
            width: ${highlights.length * 100}%,
          }}
        >
          {highlights.map((text, index) => (
            <div key={index} style={{ width: "100%", paddingRight: "1rem" }}>
              {text}
            </div>
          ))}
        </div>
      </div>

      {/* Poster Slider */}
      <div style={{ width: "100%", height: "80vh" }}>
        <Slider {...posterSettings}>
          {posters.map((src, index) => (
            <div key={index} style={{ position: "relative", width: "100%", height: "80vh" }}>
              <Image src={src} alt={Poster ${index + 1}} layout="fill" objectFit="cover" />
            </div>
          ))}
        </Slider>
      </div>

      {/* Captions */}
      {posters.map((_, index) => (
        <div
          key={index}
          style={{
            marginTop: "1rem",
            fontWeight: "700",
            textAlign: "left",
            fontSize: "18px",
          }}
        >
          Poster {index + 1} Caption
        </div>
      ))}
    </div>
  );
}