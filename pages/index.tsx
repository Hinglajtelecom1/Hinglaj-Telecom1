"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const highlights = [
  "We Deal in All Original Products of BOAT, APPLE, SAMSUNG, and PORTRONICS.",
  "We Sell All the Original Products at the Best Price Possible.",
  "Trust is Our First Priority, 100% Original Quality in All the Products that we Sell.",
  "We Deal in Premium Quality Skins of All Mobile Phones, At the Best Price.",
  "We are The First Brand to Make Mobile Skins and Transparent Cases Combo(for Every Model).",
];

const posterImages = [
  "/poster1.jpg",
  "/poster2.jpg",
  "/poster3.jpg",
  "/poster4.jpg",
];

const posterCaptions = [
  "Immortal Airspeed Pro - At Best Price",
  "Premium Transparent Cases with Skins",
  "Original Hearables | 100% Trusted",
  "Custom Skins for Every Mobile Model",
];

const Home = () => {
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
    <div
      style={{
        background: "#f8f8f8",
        minHeight: "100vh",
        padding: "1rem",
        fontFamily: "sans-serif",
      }}
    >
      {/* Title */}
      <h1
        style={{
          color: "red",
          fontWeight: "600",
          fontSize: "24px",
          marginBottom: "1rem",
        }}
      >
        Hinglaj Telecom
      </h1>

      {/* Highlights */}
      <div
        style={{
          overflow: "hidden",
          height: "30px",
          position: "relative",
          marginBottom: "1.5rem",
        }}
      >
        <div
          style={{
            display: "flex",
            width: `${highlights.length * 100}%`,
            transform: `translateX(-${currentHighlight * (100 / highlights.length)}%)`,
            transition: "transform 0.6s ease-in-out",
          }}
        >
          {highlights.map((text, index) => (
            <div
              key={index}
              style={{
                width: `${100 / highlights.length}%`,
                fontWeight: "500",
                fontSize: "14px",
                whiteSpace: "nowrap",
              }}
            >
              {text}
            </div>
          ))}
        </div>
      </div>

      {/* Poster Slider */}
      <div style={{ width: "100%", height: "80vh", marginBottom: "1rem" }}>
        <Slider {...posterSettings}>
          {posterImages.map((src, index) => (
            <div key={index}>
              <Image
                src={src}
                alt={`Poster ${index + 1}`}
                width={1080}
                height={1920}
                style={{
                  width: "100%",
                  height: "80vh",
                  objectFit: "cover",
                  borderRadius: "12px",
                }}
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Captions */}
      <div style={{ fontWeight: "600", fontSize: "16px", textAlign: "left", paddingLeft: "4px" }}>
        {posterCaptions.map((caption, index) => (
          <div key={index}>{caption}</div>
        ))}
      </div>
    </div>
  );
};

export default Home;
