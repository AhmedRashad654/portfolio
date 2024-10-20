import { motion, useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import SkillsFrontEnd from "./SkillsFrontEnd";
import SkillsBackEnd from "./SkillsBackEnd";
export default function Skills({ setLiActive }) {
  const [category, setCategory] = useState("front");
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    if (isInView) {
      setLiActive("Skills");
    }
  }, [isInView, setLiActive]);
  return (
    <motion.div
      className="mt-28"
      id="Skills"
      ref={ref}
    >
      <motion.div
        className="flex justify-center text-[3rem] font-bold text-veryGreen"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
          duration: 0.5,
        }}
      >
        Skills
      </motion.div>
      <div>
        <div className="flex items-center gap-5 mt-10 justify-center">
          <motion.div
            className="relative"
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <div
              className={`px-5 py-1 rounded-full cursor-pointer transition-all duration-300 ${
                category === "front" && "bg-veryGreen"
              }
              ${category === "back" && "border border-white"}
              `}
              onClick={() => setCategory("front")}
            >
              Front End
            </div>
            {category === "front" && <div className=" afterFrontBack"></div>}
          </motion.div>
          <motion.div
            className="relative"
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <div
              className={`px-5 py-1 rounded-full  cursor-pointer transition-all duration-300 ${
                category === "back" && "bg-veryGreen"
              } ${category === "front" && "border border-white"}`}
              onClick={() => setCategory("back")}
            >
              Back End
            </div>
            {category === "back" && <div className=" afterFrontBack"></div>}
          </motion.div>
        </div>
        <div className="mt-14 flex justify-center">
          {category === "front" && <SkillsFrontEnd />}
          {category === "back" && <SkillsBackEnd />}
        </div>
      </div>
    </motion.div>
  );
}
