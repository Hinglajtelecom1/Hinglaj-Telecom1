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

const posterData = [
  {
    src: "/poster1.jpg",
    caption: "boAt Immortal Airspeed Pro - At Best Price",
  },
  {
    src: "/poster2.jpg",
    caption: "Premium Mobile Skins with Transparent Case - Available Now",
  },
  {
    src: "/poster3.jpg",
    caption: "Original Apple Accessories - Trust Hinglaj Telecom",
  },
  {
    src: "/poster4.jpg",
    caption: "Best Deals on Portronics Products - Limited Stock!",
  },
];

const Home = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div
      style={{
        backgroundColor: "#f9f9f9",
        minHeight: "100vh",
        fontFamily: "sans-serif",
      }}
    >
      {" "}
      <header
        style={{
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        {" "}
        <h1
          style={{
            color: "#ff0000",
            fontWeight: 400,
            fontSize: "24px",
            marginBottom: "10px",
          }}
        >
          {" "}
          Hinglaj Telecom{" "}
        </h1>{" "}
        <div
          style={{ overflow: "hidden", whiteSpace: "nowrap", width: "100%" }}
        >
          {" "}
          <div
            style={{
              display: "inline-block",
              animation: "scroll 30s linear infinite",
              fontWeight: 300,
              fontSize: "14px",
              color: "#000",
            }}
          >
            {" "}
            {highlights.map((text, index) => (
              <span key={index} style={{ paddingRight: "100px" }}>
                {text}
              </span>
            ))}{" "}
          </div>{" "}
        </div>{" "}
      </header>
      <main>
        <Slider {...sliderSettings}>
          {posterData.map((poster, index) => (
            <div key={index}>
              <div style={{ height: "80vh", position: "relative" }}>
                <Image
                  src={poster.src}
                  alt={"Poster ${index + 1}"}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div style={{ padding: "10px 20px", textAlign: "left" }}>
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: "18px",
                    color: "#000",
                  }}
                >
                  {poster.caption}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </main>
      <a
        href="https://wa.me/91XXXXXXXXXX"
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          backgroundColor: "#25D366",
          color: "white",
          borderRadius: "50%",
          width: 60,
          height: 60,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 30,
          textDecoration: "none",
          zIndex: 1000,
        }}
      >
        WA
      </a>
      <style jsx global>{`
        @keyframes scroll {
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

export default Home;
