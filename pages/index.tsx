import React, { useEffect, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const highlights = [
  "Original Products of BOAT, APPLE, SAMSUNG, and PORTRONICS.",
  "We Sell All the Original Products at the Best Price Possible.",
  "Trust is Our First Priority,Original Quality in All the Products Sold.",
  "We Deal in Premium Quality Skins of All Mobile Phones, At the Best Price.",
  "First Brand to Make Mobile Skins and Transparent Cases Combo(Every Model).",
];

const posters = [
  { src: "/poster1.jpg", caption: "Boat Immortal Airspeed Pro - At Best Price" },
  { src: "/poster2.jpg", caption: "Premium Mobile Skins & Transparent Combo" },
  { src: "/poster3.jpg", caption: "All Original Products Available" },
  { src: "/poster4.jpg", caption: "Custom Skins For Every Model" },
];

const HomePage = () => {
  const [currentHighlight, setCurrentHighlight] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHighlight((prev) => (prev + 1) % highlights.length);
    }, 6000); // change every 6 seconds
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
      }}
    >
      {/* Title */}
      <h1
        style={{
          color: "red",
          fontWeight: "500",
          fontSize: "24px",
          marginBottom: "10px",
        }}
      >
        Hinglaj Telecom
      </h1>

      {/* Highlights Auto Slider */}
      <div
        style={{
          overflow: "hidden",
          height: "auto",
          marginBottom: "20px",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            transform: `translateX(-${currentHighlight * 100}%)`,
            transition: "transform 0.6s ease-in-out",
            width: `${highlights.length * 100}%`,
          }}
        >
          {highlights.map((text, index) => (
            <div
              key={index}
              style={{
                width: "100%",
                flexShrink: 0,
                paddingRight: "1rem",
              }}
            >
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: 400,
                  margin: 0,
                  wordWrap: "break-word",
                  whiteSpace: "normal",
                }}
              >
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Poster Slider (80% height) */}
      <div style={{ width: "100%", height: "80vh" }}>
        <Slider {...posterSettings}>
          {posters.map((poster, index) => (
            <div key={index}>
              <Image
                src={poster.src}
                alt={`Poster ${index + 1}`}
                width={800}
                height={600}
                style={{
                  width: "100%",
                  height: "70vh",
                  objectFit: "cover",
                  borderRadius: "12px",
                }}
              />
              <p
                style={{
                  fontWeight: "bold",
                  marginTop: "10px",
                  textAlign: "left",
                  fontSize: "16px",
                }}
              >
                {poster.caption}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HomePage;
