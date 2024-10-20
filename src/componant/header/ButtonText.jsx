import React from "react";
import { MdDownload } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { motion } from "framer-motion";
export default function ButtonText() {
  const buttonVarient = {
    initial: {
      x: -30,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 3.7,
        duration: 0.5,
      },
    },
  };
  const githubVarient = {
    initial: {
      x: 30,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 4,
        duration: 0.5,
      },
    },
  };
  const linkedinVarient = {
    initial: {
      x: 30,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 4.3,
        duration: 0.5,
      },
    },
  };
  return (
    <div className="flex items-center gap-5">
      <motion.a
        href="https://drive.google.com/file/d/1_lc5g7t1SHbrfT1AjXhTuqTMWHZaQ9I4/view?usp=sharing"
        download
        className="py-2 px-5 rounded-full border border-veryGreen flex items-center gap-2 button-container"
        variants={buttonVarient}
        initial="initial"
        whileInView="animate"
      >
        <p>Download Cv</p>
        <div className=" translate-y-[2px]">
          <MdDownload />
        </div>
      </motion.a>
      <div className="flex items-center gap-3">
        <motion.a
          href="https://github.com/AhmedRashad654?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className="border border-veryGreen rounded-full p-2 button-container"
          variants={githubVarient}
          initial="initial"
          whileInView="animate"
        >
          <IoLogoGithub />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/ahmed654"
          target="_blank"
          rel="noreferrer"
          className="border border-veryGreen rounded-full p-2 button-container"
          variants={linkedinVarient}
          initial="initial"
          whileInView="animate"
        >
          <FaLinkedinIn />
        </motion.a>
        <motion.a
          href="https://wa.me/201092166248"
          target="_blank"
          rel="noreferrer"
          className="border border-veryGreen rounded-full p-2 button-container"
          initial={{
            x: 30,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: {
              delay: 4.6,
              duration: 0.5,
            },
          }}
        >
          <FaWhatsapp />
        </motion.a>
      </div>
    </div>
  );
}
