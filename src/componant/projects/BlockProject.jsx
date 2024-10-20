import { motion } from "framer-motion";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
export default function BlockProject({
  title,
  delay,
  setOpen,
  description,
  skills,
  images,
  git,
  setContantOvarLay,
}) {
  return (
    <motion.div
      className={`w-[320px] bg-backgroundProject p-4 pb-0 rounded-lg `}
      initial={{ opacity: 0, x: 50 }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: { delay: delay, duration: 0.7 },
      }}
      whileHover={{ skew: (-5, -5), boxShadow: "0px 0px 15px #555" }}
      transition={{
        duration: 0.5,
      }}
    >
      <div className="flex items-center gap-5 justify-between">
        <div className="text-gray-300 font-semibold text-[1.5rem]">{title}</div>
        <div
          className="flex items-center gap-1 cursor-pointer"
          onClick={() => {
            setContantOvarLay({
              title: title,
              description: description,
              skills: skills,
              images: images,
              git: git,
            });
            setOpen(true);
          }}
        >
          <p className="text-gray-300 text-[1.5rem]">visit</p>
          <div className="p-1 bg-backgroundBlack rounded-full">
            <MdArrowOutward size={25} />
          </div>
        </div>
      </div>
      <img src={images[0]} alt="ershad1" className="mt-3 rounded-t-lg" />
    </motion.div>
  );
}
