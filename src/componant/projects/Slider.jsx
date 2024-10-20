import { motion } from "framer-motion";
import { MdSkipNext } from "react-icons/md";
import { MdSkipPrevious } from "react-icons/md";
import React, { useState } from "react";

export default function Slider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [checkDirection, setCheckDirection] = useState("");
  const handleNext = () => {
    setCheckDirection("next");
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCheckDirection("prev");
    setCheckDirection("prev");
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  const getDirectionX = () => {
    return checkDirection === "next" ? 150 : -150;
  };
  return (
    <div className="relative w-full">
      <div className="aspect-ratio-box">
        <motion.div
          key={currentIndex}
          className=" w-full"
          initial={{ opacity: 0, x: getDirectionX() }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={images[currentIndex]}
            alt={`slide-${currentIndex}`}
            className="w-full object-cover rounded-lg"
          />
        </motion.div>
        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 bg-gray-700  rounded-full"
        >
          <MdSkipPrevious color="#22c55e" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-gray-700 rounded-full"
        >
          <MdSkipNext color="#22c55e" />
        </button>
      </div>
    </div>
  );
}
