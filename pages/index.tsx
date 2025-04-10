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
  "We are The First Brand to Make Mobile Skins and Transparent Cases Combo(for Every Model)."
];

const posterImages = [
  "https://via.placeholder.com/800x600/000000/FFFFFF?text=Poster+1",
  "https://via.placeholder.com/800x600/111111/FFFFFF?text=Poster+2",
  "https://via.placeholder.com/800x600/222222/FFFFFF?text=Poster+3",
  "https://via.placeholder.com/800x600/333333/FFFFFF?text=Poster+4"
];

const posterCaptions = [
  "BOAT Immortal Airspeed Pro - At Best Price",
  "Premium Transparent Case with Custom Skin - Only at Hinglaj Telecom",
  "Original Accessories from APPLE, SAMSUNG & PORTRONICS",
  "First Brand to Offer Mobile Skin + Transparent Case Combo"
];

const Home = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  return (
    <div style={{ backgroundColor: "#ffffff", fontFamily: "sans-serif" }}>
      {/* Header */}
      <header className="p-4">
        <h1 style={{ color: "red", fontWeight: 300, fontSize: "24px" }}>
          Hinglaj Telecom
        </h1>
      </header>

      {/* Highlights */}
      <div className="overflow-hidden whitespace-nowrap border-y py-2">
        <div className="animate-slide inline-block text-sm text-black font-light">
          {highlights.map((text, index) => (
            <span key={index} className="mx-10 inline-block">
              {text}
            </span>
          ))}
        </div>
      </div>

      {/* Poster Slider */}
      <div className="w-full h-[80vh] relative">
        <Slider {...sliderSettings}>
          {posterImages.map((src, index) => (
            <div key={index} className="relative w-full h-[80vh]">
              <Image
                src={src}
                alt={Poster ${index + 1}}
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute bottom-0 bg-white/80 w-full text-center py-4">
                <p className="text-black text-base font-medium">{posterCaptions[index]}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/91XXXXXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full shadow-lg"
      >
        WhatsApp
      </a>

      <style jsx>{`
        .animate-slide {
          display: inline-block;
          white-space: nowrap;
          animation: slideLeft 25s linear infinite;
        }

        @keyframes slideLeft {
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