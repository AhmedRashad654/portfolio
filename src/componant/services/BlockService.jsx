import React from "react";
import useWindowSize from "../hooks/UseWindowSize";
import { motion } from "framer-motion";
export default function BlockService({ title, description, direction, delay }) {
  const { width } = useWindowSize();
  return (
    <motion.div
      className={`absolute -bottom-[130%] rounded-full p-3 ${
        direction === "right" && "left-6"
      } ${
        direction === "left" && "md:right-6 smm:left-6"
      } border-2  border-veryGreen smmm:w-[400px] w-[290px] smmmm:w-[410px] xsmlm:w-[265px]`}
      initial={
        direction === "right"
          ? { x: 50, opacity: 0 }
          : width > 768
          ? { x: -50, opacity: 0 }
          : { x: 50, opacity: 0 }
      }
      whileInView={{ x: 0, opacity: 1 }}
      transition={{
        delay: delay,
        duration: 0.5,
      }}
    >
      <div className="ml-3">
        <h1 className="font-bold text-[1.1rem] xsmlm:text-[1rem]">{title}</h1>
        <p className="text-[0.9rem] xsmlmFont:text-[0.7rem] text-gray-300">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
