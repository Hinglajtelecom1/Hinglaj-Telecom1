import React from "react";
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
  {
    src: "/poster1.jpg",
    caption: "boAt Immortal Airspeed Pro at Best Price",
  },
  {
    src: "/poster2.jpg",
    caption: "Premium Skins for Every Mobile Model",
  },
  {
    src: "/poster3.jpg",
    caption: "Combo: Transparent Case + Custom Skin",
  },
  {
    src: "/poster4.jpg",
    caption: "Original Samsung, Apple, and Portronics Products",
  },
];

const HomePage = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div style={{ backgroundColor: "#f9f9f9", fontFamily: "sans-serif" }}>
      <header style={{ padding: "20px" }}>
        <h1 style={{ color: "red", fontWeight: "400", fontSize: "24px" }}>
          Hinglaj Telecom
        </h1>
        <marquee
          behavior="scroll"
          direction="left"
          scrollamount="4"
          style={{ color: "#000", fontSize: "14px", marginTop: "5px" }}
        >
          {highlights.join("   |   ")}
        </marquee>
      </header>

      <section style={{ position: "relative", width: "100%", height: "80vh" }}>
        <Slider {...settings}>
          {posters.map((poster, index) => (
            <div key={index} style={{ position: "relative", height: "70vh" }}>
              <Image
                src={poster.src}
                alt={Poster ${index + 1}}
                layout="fill"
                objectFit="cover"
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  width: "100%",
                  padding: "15px",
                  background: "rgba(255, 255, 255, 0.9)",
                  textAlign: "center",
                  fontWeight: "600",
                  fontSize: "18px",
                  color: "#000",
                }}
              >
                {poster.caption}
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/your-number"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#25D366",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
          zIndex: 999,
        }}
      >
        <img
          src="/whatsapp-icon.png"
          alt="WhatsApp"
          style={{ width: "30px", height: "30px" }}
        />
      </a>
    </div>
  );
};

export default HomePage;