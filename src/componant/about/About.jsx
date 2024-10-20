import { motion, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
export default function About({  setLiActive }) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    if (isInView) {
      setLiActive("About");
    }
  }, [isInView, setLiActive]);
  return (
    <motion.div className="mt-28 overflow-x-hidden" id="About" ref={ref}>
      <motion.div
        className="flex justify-center text-[3rem] font-bold text-veryGreen"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
          duration: 0.5,
        }}
      >
        About
      </motion.div>
      <div className="flex md:flex-row flex-col gap-7 justify-between mt-14 overflow-hidden">
        <motion.div
          className="md:w-[60%] w-[100%] lg:text-[1.8rem] md:text-[1.2rem] text-[1rem]"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.7,
            duration: 0.5,
          }}
        >
          Hi, I'm Ahmed Rashad, a 24-year-old passionate web developer. I
          graduated from Al-Azhar University with a degree in Science, and
          shortly after graduation, I joined the at the Information Technology
          Institute (ITI), specializing in the Web & User Interface track. I
          specialize in front-end development, with strong expertise in React.js
          and Next.js. Additionally, I have solid experience in back-end
          development using Node.js, Express, MongoDB, and PostgreSQL. I'm
          driven by a passion for creating efficient, user-friendly web
          applications and scalability.
        </motion.div>
        <motion.div
          className="md:w-[40%] w-[100%]"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 1,
            duration: 0.5,
          }}
        >
          <img
            src={
              "https://res.cloudinary.com/dapsxrdb3/image/upload/v1729437634/portfolio/srh6rxafguhccbqjcvcl.jpg"
            }
            alt="profile"
            className="rounded-lg"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
