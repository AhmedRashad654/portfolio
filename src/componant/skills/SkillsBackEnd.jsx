import React from "react";
import Itemskills from "./Itemskills";
import { FaNodeJs } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import { SiMongodb } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiNestjs } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { SiSocketdotio } from "react-icons/si";
import { motion } from "framer-motion";
export default function SkillsBackEnd() {
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
      <Itemskills
        text={"Node.js"}
        icon={<FaNodeJs size={70} color="#8CC84B" />}
      />
      <Itemskills
        text={"Express.js"}
        icon={<SiExpress size={70} color="#555555" />}
      />
      <Itemskills
        text={"JavaScript"}
        icon={<DiJavascript size={70} color="#F7DF1E" />}
      />
      <Itemskills
        text={"MongoDB"}
        icon={<SiMongodb size={70} color="#47A248" />}
      />
      <Itemskills
        text={"Postgresql"}
        icon={<BiLogoPostgresql size={70} color="#336791" />}
      />
      <Itemskills
        text={"Nest.js"}
        icon={<SiNestjs size={70} color="#E0234E" />}
      />
      <Itemskills
        text={"Socket.io"}
        icon={<SiSocketdotio size={70} color="#444444" />}
      />
      <Itemskills
        text={"Prisma"}
        icon={<SiPrisma size={70} color="#2D3748" />}
      />
    </motion.div>
  );
}
