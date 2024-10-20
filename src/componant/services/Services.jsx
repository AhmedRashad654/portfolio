import { motion, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import BlockService from "./BlockService";
export default function Services({ setLiActive }) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    if (isInView) {
      setLiActive("Services");
    }
  }, [isInView, setLiActive]);
  return (
    <motion.div
      className="mt-28 pl-5 overflow-x-hidden"
      id="Services"
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
        Services
      </motion.div>
      <motion.div className="flex mdd:justify-center">
        <div className="w-[2px] h-[450px] mt-12 bg-veryGreen flex flex-col justify-around">
          <div className="relative">
            <div className="w-7 h-7 rounded-full bg-veryGreen -ml-3 pointer relative z-20"></div>
            <BlockService
              title={"Front End Developer"}
              description={
                "Building responsive, user-friendly interfaces with  frameworks React.js and Next.js"
              }
              direction="right"
              delay={0.5}
            />
          </div>
          <div className="relative">
            <div className="w-7 h-7 rounded-full bg-veryGreen -ml-3 pointer relative"></div>
            <BlockService
              title={"Back End Developer"}
              description={
                "Developing scalable, efficient server-side logic using Node.js, Express, and databases."
              }
              direction="left"
              delay={0.7}
            />
          </div>
          <div className="relative">
            <div className="w-7 h-7 rounded-full bg-veryGreen -ml-3 pointer relative"></div>
            <BlockService
              title={"Full Stack Developer"}
              description={
                "Creating complete web applications, integrating both front-end and back-end."
              }
              direction="right"
              delay={0.9}
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
