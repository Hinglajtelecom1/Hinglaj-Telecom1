import React, { useState, useEffect } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const highlights = [
  "We deal in All original products of BOAT, APPLE, SAMSUNG, and PORTRONICS.",
  "We sell all the original products at the best price possible.",
  "Trust is our first priority, 100% original quality in all the products that we sell.",
  "We deal in Premium quality Skins of all mobile phones, at the best price.",
  "We are the First Brand to Make Mobile Skins and Transparent Cases Combo(for every model)."
];

const posters = [
  "/poster1.jpg",
  "/poster2.jpg",
  "/poster3.jpg",
  "/poster4.jpg"
];

const captions = [
  "Immortal Airspeed Pro at Best Price",
  "Custom Mobile Skins & Cases Combo",
  "All Original Accessories from Top Brands",
  "Premium Quality, Perfect Fit, Low Price"
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
    autoplay: false
  };

  return (
    <div style={{ background: "#f8f8f8", minHeight: "100vh", padding: "1rem" }}>
      <h1 style={{ color: "red", fontWeight: "400", fontSize: "24px" }}>Hinglaj Telecom</h1>
      <div
        style={{
          margin: "1rem 0",
          fontSize: "16px",
          fontWeight: "300",
          overflow: "hidden",
          whiteSpace: "nowrap",
          position: "relative",
          height: "30px"
        }}
      >
        <div
          style={{
            position: "absolute",
            transition: "transform 0.5s ease",
            transform: `translateX(-${currentHighlight * 100}%)`,
            display: "flex",
            width: `${highlights.length * 100}%`
          }}
        >
          {highlights.map((text, index) => (
            <div key={index} style={{ width: "100%", paddingRight: "1rem" }}>
              {text}
            </div>
          ))}
        </div>
      </div>

      <div style={{ width: "100%", height: "80vh" }}>
        <Slider {...posterSettings}>
          {posters.map((src, index) => (
            <div key={index}>
              <Image
                src={src}
                alt={`Poster ${index + 1}`}
                width={1080}
                height={1350}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <p style={{ fontWeight: "700", fontSize: "16px", textAlign: "left", padding: "0.5rem" }}>
                {captions[index]}
              </p>
            </div>
          ))}
        </Slider>
      </div>

      <a
        href="https://wa.me/yourwhatsapplink"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#25D366",
          color: "white",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "30px",
          textDecoration: "none",
          zIndex: 1000
        }}
      >
        &#x2709;
      </a>
    </div>
  );
}
