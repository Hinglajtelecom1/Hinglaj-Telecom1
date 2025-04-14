import { useEffect, useRef, useState } from "react";

const highlights = [
  "Best Quality Skins",
  "Perfect Cut & Fit",
  "Starting at ₹150",
];

export default function HomePageHero() {
  const [current, setCurrent] = useState(0);

  // Auto-slide highlights
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % highlights.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[300px] bg-white rounded-xl overflow-hidden">
      {/* Top Highlight Banner */}
      <div className="absolute top-0 left-0 w-full overflow-hidden z-10 bg-white/80 backdrop-blur-sm">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: 'translateX(-${current * 100}%)',
            width: '${highlights.length * 100}%',
          }}
        >
          {highlights.map((text, index) => (
            <div
              key={index}
              className="w-full text-center py-2 text-sm font-semibold text-gray-800"
            >
              {text}
            </div>
          ))}
        </div>
      </div>

      {/* Poster (Fixed) */}
      <img
        src="/poster.jpg"
        alt="Main Poster"
        className="w-full h-full object-cover"
      />

      {/* Poster Caption */}
      <div className="absolute bottom-4 left-0 w-full text-center">
        <div className="bg-black/60 text-white text-sm px-4 py-2 rounded-full inline-block mx-auto">
          Custom Skins | Premium Protection | Unique Style
        </div>
      </div>
    </div>
  );
}