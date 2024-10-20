import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { Link } from "react-scroll";
export default function Navbar({ liAclive, setLiActive }) {
  const [isOpen, setIsOpen] = useState(false);

  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };

  return (
    <div className="flex justify-between items-center">
      <div className="text-[1.5rem] font-semibold flex gap-1 items-center">
        <div>Portfolio</div>
        <div className="text-veryGreen">.</div>
      </div>
      <ul className="lg:flex items-center gap-10 hidden">
        {["Home", "About", "Services", "Skills", "Projects", "Contact"].map(
          (item) => (
            <Link
              to={item}
              smooth={true}
              offset={-70}
              key={item}
              className={`cursor-pointer font-semibold relative ${
                liAclive === item ? "text-veryGreen" : "text-white"
              }`}
              onClick={() => setLiActive(item)}
            >
              <span
                className={`absolute bottom-[-10px] left-0 h-[1px] transition-all duration-300 ${
                  liAclive === item ? "w-[100%]" : "w-0"
                } bg-veryGreen`}
              ></span>
              {item}
            </Link>
          )
        )}
      </ul>

      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        className=" lg:hidden block relative z-30"
      >
        <motion.button
          className="cursor-pointer"
          whileTap={{ scale: 1.2 }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaBars size={30} />
        </motion.button>
        <motion.ul
          className="bg-white absolute w-[200px] right-0  p-3 flex flex-col gap-3 "
          variants={{
            open: {
              clipPath: "inset(0% 0% 0% 0% round 10px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.7,
                delayChildren: 0.3,
                staggerChildren: 0.09,
              },
            },
            closed: {
              clipPath: "inset(0 0 100% 100% round 10px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.3,
              },
            },
          }}
          style={{ pointerEvents: isOpen ? "auto" : "none" }}
        >
          {["Home", "About", "Services", "Skills", "Projects", "Contact"].map(
            (item) => (
              <Link to={item} smooth={true} offset={-70} key={item}>
                <motion.li
                  variants={itemVariants}
                  className={`cursor-pointer font-semibold relative text-black text-[1.2rem] ${
                    liAclive === item && "active1"
                  }`}
                  onClick={() => setLiActive(item)}
                >
                  {item}
                </motion.li>
              </Link>
            )
          )}
        </motion.ul>
      </motion.div>
    </div>
  );
}
