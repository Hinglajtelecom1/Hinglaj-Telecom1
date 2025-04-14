import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const highlights = [
  "We Deal in All Original Products of BOAT, APPLE, SAMSUNG, and PORTRONICS.",
  "We Sell All the Original Products at the Best Price Possible.",
  "Trust is Our First Priority, 100% Original Quality in All the Products that we Sell.",
  "We Deal in Premium Quality Skins of All Mobile Phones, At the Best Price.",
  "We are The First Brand to Make Mobile Skins and Transparent Cases Combo(for Every Model).",
];

const HighlightSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % highlights.length);
    }, 7000); // 7 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full text-center mt-4 min-h-[32px]">
      <AnimatePresence mode="wait">
        <motion.p
          key={currentIndex}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.5 }}
          className="text-black text-sm font-medium px-4"
        >
          {highlights[currentIndex]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
};

export default HighlightSlider;