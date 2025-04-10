import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const highlights = [
  "We deal in All original products of BOAT, APPLE, SAMSUNG, and PORTRONICS.",
  "We sell all the original products at the best price possible.",
  "Trust is our first priority, 100% original quality in all the products that we sell.",
  "We deal in Premium quality Skins of all mobile phones, at the best price.",
  "We are the First Brand to Make Mobile Skins and Transparent Cases Combo(for every model).",
];

const posterImages = [
  "https://picsum.photos/1200/700?random=1",
  "https://picsum.photos/1200/700?random=2",
  "https://picsum.photos/1200/700?random=3",
  "https://picsum.photos/1200/700?random=4",
];

const posterCaptions = [
  "Premium Skins for Every Phone Model",
  "Original BOAT Products at Best Price",
  "Transparent iPaky Case + Skin Combo",
  "Original Samsung, Apple, and More",
];

const HomePage = () => {
  const posterSettings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div style={{ backgroundColor: "#f8f8f8", minHeight: "100vh" }}>
      {/* Top Bar */}
      <div style={{ padding: "15px", display: "flex", alignItems: "center" }}>
        <h1 style={{ color: "red", fontWeight: "400", fontSize: "1.8rem" }}>
          Hinglaj Telecom
        </h1>
      </div>

      {/* Highlights Slider */}
      <div style={{ overflow: "hidden", whiteSpace: "nowrap" }}>
        <div
          style={{
            display: "inline-block",
            animation: "scroll-left 30s linear infinite",
            fontSize: "1rem",
            fontWeight: 400,
            color: "#000",
            padding: "10px 20px",
          }}
        >
          {highlights.map((text, idx) => (
            <span key={idx} style={{ marginRight: "80px" }}>
              {text}
            </span>
          ))}
        </div>
      </div>

      {/* Posters */}
      <div style={{ maxWidth: "100%", margin: "0 auto", padding: "20px" }}>
        <Slider {...posterSettings}>
          {posterImages.map((src, index) => (
            <div key={index}>
              <Image
                src={src}
                alt={Poster ${index + 1}}
                width={1200}
                height={700}
                layout="responsive"
                objectFit="cover"
              />
              <p
                style={{
                  textAlign: "center",
                  fontSize: "1.2rem",
                  fontWeight: "500",
                  color: "#111",
                  marginTop: "10px",
                }}
              >
                {posterCaptions[index]}
              </p>
            </div>
          ))}
        </Slider>
      </div>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/91XXXXXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#25D366",
          color: "#fff",
          padding: "14px 18px",
          borderRadius: "50%",
          fontSize: "20px",
          boxShadow: "0px 4px 12px rgba(0,0,0,0.2)",
          zIndex: 1000,
        }}
      >
        WA
      </a>

      {/* Animation CSS */}
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
};

export default HomePage;