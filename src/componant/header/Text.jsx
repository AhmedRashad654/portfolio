import React, { useState } from "react";

import { motion } from "framer-motion";
import ButtonText from "./ButtonText";
export default function Text() {
  const text = `Hello I'm Ahmed Rashad`;
  const paragraph = "Software Developer";
  const [inView, setInVeiw] = useState(false);

  const pVairent = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const p2Vairent = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 2.2,
        staggerChildren: 0.1,
      },
    },
  };
  const spanVairent = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };
  return (
    <div className=" flex flex-col gap-5 items-center ">
      <div className="flex flex-col items-center">
        <motion.h1
          className=" lg:text-[5rem] md:text-[3rem] text-[1.8rem]"
          variants={pVairent}
          initial="hidden"
          whileInView="visible"
        >
          {text.split("").map((item, index) => (
            <motion.span key={index} variants={spanVairent}>
              {item}
            </motion.span>
          ))}
        </motion.h1>
        <div className="flex item-center gap-2 lg:text-[4rem] md:text-[2rem] text-[1.3rem] md:-mt-4 lg:-mt-7">
          <motion.h2
            variants={p2Vairent}
            initial="hidden"
            whileInView="visible"
          >
            {paragraph.split("").map((item, index) => (
              <motion.span key={index} variants={spanVairent}>
                {item}
              </motion.span>
            ))}{" "}
          </motion.h2>
          <motion.span
            initial={{ opacity: 0 }}
            onViewportEnter={() => setInVeiw(true)}
            onViewportLeave={() => setInVeiw(false)}
            animate={
              inView
                ? { opacity: 1, rotate: [-10, 70, -10, 70, -10, 70, -10] }
                : { opacity: 0 }
            }
            transition={{
              opacity: {
                delay: inView ? 4.2 : 0,
              },
              rotate: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 1,
                repeatDelay: 3,
              },
            }}
          >
            👋🏻
          </motion.span>
        </div>
      </div>
      <ButtonText />
    </div>
  );
}
