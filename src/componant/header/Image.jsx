import React from "react";
import { motion } from "framer-motion";
export default function Image() {
  const varient = {
    initial: {
      y: -50,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };
  return (
    <motion.div
      variants={varient}
      initial="initial"
      whileInView="animate"
      className="image-container relative"
    >
      <motion.img
        src={
          "https://res.cloudinary.com/dapsxrdb3/image/upload/v1729437634/portfolio/srh6rxafguhccbqjcvcl.jpg"
        }
        alt="profile"
        className=" w-[200px] h-[200px] rounded-[50%] mx-auto"
      />
    </motion.div>
  );
}
