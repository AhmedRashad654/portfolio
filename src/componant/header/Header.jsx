import React, { useEffect, useRef } from "react";
import Navbar from "./Navbar";
import Image from "./Image";
import Text from "./Text";
import { useInView } from "framer-motion";

export default function Header({ liAclive, setLiActive }) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    if (isInView) {
      setLiActive("Home");
    }
  }, [isInView, setLiActive]);
  return (
    <div ref={ref} id="Home" className="section-header">
      <Navbar liAclive={liAclive} setLiActive={setLiActive} />
      <div className="flex flex-col items-center justify-center md:gap-0 gap-5 pt-5 h-[85vh]">
        <Image />
        <Text />
      </div>
    </div>
  );
}
