import React from "react";
import CardImage from "../images/TabButton.png";
import border from "../images/border.png";

interface TabProps {
  text: string;
}

export default function Tab({ text }: TabProps) {
  return (
    <button className="w-full relative flex items-center justify-center p-4">
      <img src={border} className="absolute w-[47%]" />
      <img
        src={CardImage}
        className="absolute w-[60%]"
        alt="Button Background"
      />
      <span className="text-6xl z-10 text-white break-words w-full px-2 text-center">
        {text}
      </span>
    </button>
  );
}
