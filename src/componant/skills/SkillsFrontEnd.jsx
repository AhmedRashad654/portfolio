import React from "react";
import Itemskills from "./Itemskills";
import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt } from "react-icons/fa6";
import { DiJavascript } from "react-icons/di";
import { FaReact } from "react-icons/fa6";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoRedux } from "react-icons/bi";
import { BiLogoTypescript } from "react-icons/bi";
import { motion } from "framer-motion";
export default function SkillsFrontEnd() {
  return (
    <motion.div
      className="flex justify-center items-center gap-12 w-full flex-wrap"
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{
        delay: 0.6,
        duration: 0.5,
      }}
    >
      <Itemskills text={"HTML5"} icon={<TiHtml5 size={70} color="#E34F26" />} />
      <Itemskills
        text={"CSS3"}
        icon={<FaCss3Alt size={70} color="#1572B6" />}
      />
      <Itemskills
        text={"JavaScript"}
        icon={<DiJavascript size={70} color="#F7DF1E" />}
      />
      <Itemskills
        text={"React.js"}
        icon={<FaReact size={70} color="#61DAFB" />}
      />
      <Itemskills
        text={"Next.js"}
        icon={<SiNextdotjs size={70} color="#555555" />}
      />
      <Itemskills
        text={"Tailwind"}
        icon={<RiTailwindCssFill size={70} color="#38B2AC" />}
      />
      <Itemskills
        text={"ReduxToolkit"}
        icon={<BiLogoRedux size={70} color="#764ABC" />}
      />
      <Itemskills
        text={"TypeScript"}
        icon={<BiLogoTypescript size={70} color="#007ACC" />}
      />
    </motion.div>
  );
}
