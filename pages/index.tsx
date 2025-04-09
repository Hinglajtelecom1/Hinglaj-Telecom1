import React from "react"; import Image from "next/image"; import Slider from "react-slick"; import "slick-carousel/slick/slick.css"; import "slick-carousel/slick/slick-theme.css";

const highlights = [ "We Deal in All Original Products of BOAT, APPLE, SAMSUNG, and PORTRONICS.", "We Sell All the Original Products at the Best Price Possible.", "Trust is Our First Priority, 100% Original Quality in All the Products that we Sell.", "We Deal in Premium Quality Skins of All Mobile Phones, At the Best Price.", "We are The First Brand to Make Mobile Skins and Transparent Cases Combo(for Every Model)." ];

const IndexPage = () => { const highlightSettings = { dots: false, infinite: true, speed: 500, slidesToShow: 1, slidesToScroll: 1, autoplay: true, autoplaySpeed: 5000, arrows: false };

const posterSettings = { dots: true, infinite: true, speed: 500, slidesToShow: 1, slidesToScroll: 1, autoplay: true, autoplaySpeed: 3000, arrows: false };

return ( <div className="bg-white min-h-screen"> <header className="p-4"> <h1 className="text-red-600 text-2xl font-light">Hinglaj Telecom</h1> </header>

<div className="bg-gray-100 py-2">
    <Slider {...highlightSettings}>
      {highlights.map((text, index) => (
        <div key={index} className="text-center text-black text-sm font-light">
          {text}
        </div>
      ))}
    </Slider>
  </div>

  <div className="mt-6 max-w-3xl mx-auto px-4">
    <Slider {...posterSettings}>
      {/* Replace with real product images */}
      <div>
        <Image
          src="/poster1.jpg"
          alt="Poster 1"
          width={800}
          height={500}
          className="rounded-lg"
        />
        <p className="text-center mt-2 text-black font-medium">
          Premium boAt Airdopes - Original and Best Price
        </p>
      </div>
      <div>
        <Image
          src="/poster2.jpg"
          alt="Poster 2"
          width={800}
          height={500}
          className="rounded-lg"
        />
        <p className="text-center mt-2 text-black font-medium">
          Custom Skins + Transparent iPaky Case Combo
        </p>
      </div>
    </Slider>
  </div>

  <a
    href="https://wa.me/91XXXXXXXXXX"
    className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-green-600"
    target="_blank"
    rel="noopener noreferrer"
  >
    WhatsApp Us
  </a>
</div>

); };

export default IndexPage;