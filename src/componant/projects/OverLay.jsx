import React from "react";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import Slider from "./Slider";
import { FaGithub } from "react-icons/fa";
export default function OverLay({
  setOpen,
  setContantOvarLay,
  contantOvarLay,
}) {
  return (
    <motion.div className=" fixed top-0 left-0  w-[100vw] z-50 flex justify-center bg-bgOverlay items-center h-full  p-5">
      <motion.div
        className="bg-white rounded-lg shadow p-3 lg:w-[60%] max-h-[90vh] w-full overflow-y-auto overflow-x-hidden scrollbar"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={{
          duration: 0.5,
        }}
      >
        <div className="flex items-center flex-col gap-2  text-black relative ">
          <div className="flex justify-between items-center w-full">
            <h3 className=" font-bold text-[1.5rem] mb-1 text-veryGreen">
              {contantOvarLay?.title}
            </h3>
            <a href={contantOvarLay.git} target="_blank" rel="noreferrer">
              <FaGithub size={30} color="#22c55e" />
            </a>
            <div
              className=" bg-gray-200 p-1 rounded-full cursor-pointer"
              onClick={() => {
                setContantOvarLay(null);
                setOpen(false);
              }}
            >
              <IoMdClose size={30} color="#22c55e" />
            </div>
          </div>

          <Slider images={contantOvarLay?.images} />
          <div className=" text-black pr-[3px]">
            <p className="smm:text-[0.8rem]">{contantOvarLay?.description}</p>
            <div className="flex w-full justify-start items-center gap-2 mt-2 flex-wrap">
              {contantOvarLay?.skills?.map((item, index) => (
                <div
                  className="py-1 px-4 border-2 border-veryGreen rounded-full"
                  key={index}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
