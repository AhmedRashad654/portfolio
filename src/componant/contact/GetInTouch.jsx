import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { motion } from "framer-motion";

export default function GetInTouch() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={ {
        delay:0.7,
        duration: 0.5,
      }}
    >
      <h1 className="text-[2.5rem] font-bold md:-mt-3 text-veryGreen">
        Get In Touch
      </h1>
      <p className="mt-1 ml-1">Contact for more information</p>
      <div className="flex mt-5 items-start gap-3 ">
        <div>
          <IoHome size={40} color="#555555" />
        </div>
        <div className="flex flex-col ">
          <h4 className="text-[0.9rem]">Address</h4>
          <p className="text-[0.8rem] text-gray-300">Nasr City, Cairo</p>
        </div>
      </div>
      <div className="flex mt-5 items-start gap-3">
        <div>
          <MdEmail size={40} color="#2196F3" />
        </div>
        <div className="flex flex-col ">
          <h4 className="text-[0.9rem]">Email</h4>
          <p className="text-[0.8rem] text-gray-300">
            ahmedrashad6542@gmail.com
          </p>
        </div>
      </div>
      <div className="flex mt-5 items-start gap-3 ">
        <div className="mt-1">
          <FaPhoneAlt size={35} color="#28a745" />
        </div>
        <div className="flex flex-col ">
          <h4 className="text-[0.9rem]">Phone</h4>
          <p className="text-[0.8rem] text-gray-300">+201092166248</p>
        </div>
      </div>
    </motion.div>
  );
}
