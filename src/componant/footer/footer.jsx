import React from "react";
import { Link } from "react-scroll";

export default function Footer({ liAclive, setLiActive }) {
  return (
    <ul className="flex items-center justify-center gap-3 w-full mt-24 bg-[#1f1f1f] py-5">
      {["Home", "About", "Services", "Skills", "Projects", "Contact"].map(
        (item) => (
          <Link
            to={item}
            smooth={true}
            offset={-70}
            key={item}
            className={`cursor-pointer text-[0.9rem] relative ${
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
  );
}
