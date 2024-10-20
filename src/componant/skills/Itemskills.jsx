import React from "react";

export default function Itemskills({ text, icon }) {
  return (
    <div className="md:min-w-56 w-16 flex flex-col gap-3 items-center">
      {icon}
      <p>{text}</p>
    </div>
  );
}
